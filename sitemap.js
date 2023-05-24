// obtener slugs de env seleccionado
// crear sitemap en ruta correspondiente

const fs = require("fs");
const fetch = require('node-fetch');
const args = process.argv.slice(2);

const env = args[0];
let sitemapPath = '';
let api = '';
let urlWebBase = '';
if (env === 'uy') {
  sitemapPath = 'dist/';
  api = 'https://gula-api-yg7yn.ondigitalocean.app/';
  urlWebBase = 'https://gula.com.uy';
} else {
  throw new Error('Invalid environment')
}

const workeruserEndpoint = api + 'workeruser?skip=0&limit=999999&activeProfile=true&publishedProfileByWorkerUser=true';
const postsEndpoint = api + 'blog?skip=0&limit=999999&published=true';
fetch(workeruserEndpoint).then(res => res.json()).then(async (workerUserResponse) => {
  const postsResponse = await (await fetch(postsEndpoint)).json();
  console.log('postsResponse', postsResponse.results.length);
  const urls = ['', '/mujeres', '/mujeres/montevideo', '/mujeres/canelones', '/mujeres/punta-del-este', '/mujeres/maldonado',
  '/trans-travestis', '/trans-travestis/montevideo', '/trans-travestis/canelones', '/trans-travestis/punta-del-este', '/trans-travestis/maldonado',
  '/hombres', '/hombres/montevideo', '/hombres/canelones', '/hombres/punta-del-este', '/hombres/maldonado',
  '/contact', '/red-social-erotica/mujeres', '/red-social-erotica/hombres', '/red-social-erotica/trans-travestis', '/blog'];
  const workerusers = workerUserResponse.results;
  console.log('workerUserResponse', workeruserEndpoint, workerusers.length);
  const writeStream = fs.createWriteStream(sitemapPath + 'sitemap.xml');
  writeStream.write('<?xml version="1.0" encoding="utf-8" standalone="yes" ?>');
  writeStream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  // xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  for (const u of urls) {
    writeStream.write('<url><loc>' + urlWebBase + u + '</loc></url>');
    // writeStream.write('<url><loc>' + urlWebBase + u + '</loc><priority>1.0</priority></url>');
  }

  for (const p of postsResponse.results) {
    writeStream.write('<url><loc>' + urlWebBase + '/blog/' + p.slug + '</loc>');
    writeStream.write('</url>');
  }

  for (const w of workerusers) {
    writeStream.write('<url><loc>' + urlWebBase + '/escort/' + w.slug + '</loc>');
    // writeStream.write('<priority>0.1</priority>');
    // if (w.media) {
    //   for (const m of w.media) {
    //     if (m.endsWith('.mp4') || m.endsWith('.mov')) {
    //       // writeStream.write('<video:video>');
    //       // writeStream.write('<video:thumbnail_loc>' + m.substring(0, m.lastIndexOf('.')) + '-preview.png</video:thumbnail_loc>');
    //       // writeStream.write('<video:title>Escort ' + w.slug + '</video:title>');
    //       // writeStream.write('<video:player_loc allow_embed="yes" autoplay="ap=1">' + m + '</video:player_loc>');
    //       // writeStream.write('</video:video>');
    //     } else {
    //       writeStream.write('<image:image><image:loc>' + m + '</image:loc></image:image>');
    //     }
    //   }
    // }

    writeStream.write('</url>');
  }
  writeStream.write('</urlset>');
  writeStream.end();
})
