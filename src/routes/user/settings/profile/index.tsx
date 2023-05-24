import { component$ } from "@builder.io/qwik";
import styles from './profile.module.css';
import Sidenav from "~/components/sidenav";

export default component$(() => {
    return (
        <div class={styles.main_section}>
            <div class="content_sidenav">
                <div class="w-4/12">
                    <Sidenav></Sidenav>
                </div>
                <div class="w-8/12">
                    <div class="w-full">
                        <div  class={styles.banner}>
                            <div class={styles.profile_image}>
                                <button class={styles.go_profile}>Ir al perfil</button>
                            </div>
                        </div>
                        <div class={styles.content} >
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Dias de suscripción disponible</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" readOnly placeholder="1" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Celular</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" readOnly placeholder="093405992" class={styles.input} />
                                    <div class={styles.checkbox_slot}>
                                        <div class={styles.checkbox_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Whatsapp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Nombre de usuario</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" placeholder="Test" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.select}>
                                <span class={styles.select_label}>
                                    <span class={styles.select_label_text}>Género</span>
                                </span>
                                <div class={styles.select_container}>
                                    <select class={styles.select_element}>
                                    <option>Mujer</option>
                                    <option>Hombre</option>
                                    <option>Mujer trans</option>
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Fecha de nacimiento</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input  type="text" placeholder="6/4/1998" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Instagram (Opcional)</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Título (Opcional)</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" class={styles.input} />
                                    <p class={styles.placeholder}>Descripción debajo del perfil</p>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Descripción</p>
                                </div>
                                <div class={styles.option_content}>
                                    <textarea name="description" id="" class={styles.textarea} maxLength={1500}></textarea>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Horario disponible desde</p>
                                </div>
                                <div class={styles.option_content}>
                                <input type="time" placeholder="00" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Horario disponible hasta</p>
                                </div>
                                <div class={styles.option_content}>
                                <input type="time" placeholder="00" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.select}>
                                <span class={styles.select_label}>
                                    <img class="pr-2 w-4" src="/assets/icons/location.svg" alt="" />
                                    <span class={styles.select_label_text}>Ubicación</span>
                                </span>
                                <div class="flex justify-between">
                                <div class={[styles.select_container, 'w-1/2']}>
                                    <select class={styles.select_element}>
                                    <option value="Ciudad" >Ciudad</option>
                                    <option  value="Artigas"> Artigas</option>
                                    <option  value="Canelones">Canelones</option>
                                    <option  value="Cerro Largo">Cerro Largo</option>
                                    <option  value="Colonia"> Colonia</option>
                                    <option  value="Durazno">Durazno</option>
                                    <option  value="Flores">Flores</option>
                                    <option  value="Florida">Florida</option>
                                    <option  value="Lavalleja">Lavalleja</option>
                                    <option  value="Maldonado">Maldonado</option>
                                    <option  value="Montevideo">Montevideo</option>
                                    <option  value="Paysandú">Paysandú</option>
                                    <option  value="Río Negro">Río Negro</option>
                                    <option  value="Rivera">Rivera</option>
                                    <option  value="Rocha">Rocha</option>
                                    <option  value="Salto">Salto</option>
                                    <option  value="San José">San José</option>
                                    <option  value="Soriano">Soriano</option>
                                    <option  value="Tacuarembó">Tacuarembó</option>
                                    <option  value="Treinta y Tres">Treinta y Tres</option>
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                                <span class={styles.separator}></span>
                                <div class={[styles.select_container, 'w-1/2']}>
                                    <select class={styles.select_element}>
                                    <option  value="Barrio" >Barrio</option>
                                    <option value="Aguada">Aguada</option>
                                    <option value="Aires Puros">Aires Puros</option>
                                    <option value="Barrio Sur">Barrio Sur</option>
                                    <option value="Brazo Oriental">Brazo Oriental</option>
                                    <option value="Buceo">Buceo</option>
                                    <option  value="Carrasco">Carrasco</option>
                                    <option value="Capurro">Capurro</option>
                                    <option value="Casavalle">Casavalle</option>
                                    <option value="Ciudad Vieja">Ciudad Vieja</option>
                                    <option value="Centro">Centro</option>
                                    <option  value="Cerrito">Cerrito</option>
                                    <option  value="Cerro">Cerro</option>
                                    <option  value="Colón">Colón</option>
                                    <option  value="Cordón">Cordón</option>
                                    <option  value="Conciliación">Conciliación</option>
                                    <option  value="Goes">Goes</option>
                                    <option  value="Jacinto Vera">Jacinto Vera</option>
                                    <option  value="Las Acacias">Las Acacias</option>
                                    <option value="La Blanqueada">La Blanqueada</option>
                                    <option  value="La Comercial">La Comercial</option>
                                    <option  value="La Teja">La Teja</option>
                                    <option  value="Lezica">Lezica</option>
                                    <option   value="Malvín">Malvín</option>
                                    <option  value="Malvín Norte">Malvín Norte</option>
                                    <option  value="Manga">Manga</option>
                                    <option  value="Maroñas">Maroñas</option>
                                    <option  value="Nuevo París">Nuevo París</option>
                                    <option  value="Palermo">Palermo</option>
                                    <option  value="Parque Rodó">Parque Rodó</option>
                                    <option  value="Parque Batlle">Parque Batlle</option>
                                    <option  value="Paso de la Arena">Paso de la Arena</option>
                                    <option  value="Paso Molino">Paso Molino</option>
                                    <option  value="Peñarol">Peñarol</option>
                                    <option  value="Piedras Blancas">Piedras Blancas</option>
                                    <option  value="Punta Carretas">Punta Carretas</option>
                                    <option  value="Pocitos">Pocitos</option>
                                    <option  value="Prado">Prado</option>
                                    <option  value="Punta Gorda">Punta Gorda</option>
                                    <option  value="Reducto">Reducto</option>
                                    <option  value="Sayago">Sayago</option>
                                    <option  value="Tres Cruces">Tres Cruces</option>
                                    <option  value="Unión">Unión</option>
                                    <option value="Villa Española">Villa Española</option>
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                                </div>
                            </div>
                            <div class={styles.select}>
                                <span class={styles.select_label}>
                                    <span class={styles.select_label_text}>Altura (cm)</span>
                                </span>
                                <div class={styles.select_container}>
                                    <select class={styles.select_element}>
                                    <option  value="40" >
                                            40 kg</option><option  value="41" >
                                            41 kg</option><option  value="42" >
                                            42 kg</option><option  value="43" >
                                            43 kg</option><option  value="44" >
                                            44 kg</option><option  value="45" >
                                            45 kg</option><option  value="46" >
                                            46 kg</option><option  value="47" >
                                            47 kg</option><option  value="48" >
                                            48 kg</option><option  value="49" >
                                            49 kg</option><option  value="50" >
                                            50 kg</option><option  value="51" >
                                            51 kg</option><option  value="52" >
                                            52 kg</option><option  value="53" >
                                            53 kg</option><option  value="54" >
                                            54 kg</option><option  value="55" >
                                            55 kg</option><option  value="56" >
                                            56 kg</option><option  value="57" >
                                            57 kg</option><option  value="58" >
                                            58 kg</option><option  value="59" >
                                            59 kg</option><option  value="60" >
                                            60 kg</option><option  value="61" >
                                            61 kg</option><option  value="62" >
                                            62 kg</option><option  value="63" >
                                            63 kg</option><option  value="64" >
                                            64 kg</option><option  value="65" >
                                            65 kg</option><option  value="66" >
                                            66 kg</option><option  value="67" >
                                            67 kg</option><option  value="68" >
                                            68 kg</option><option  value="69" >
                                            69 kg</option><option  value="70" >
                                            70 kg</option><option  value="71" >
                                            71 kg</option><option  value="72" >
                                            72 kg</option><option  value="73" >
                                            73 kg</option><option  value="74" >
                                            74 kg</option><option  value="75" >
                                            75 kg</option><option  value="76" >
                                            76 kg</option><option  value="77" >
                                            77 kg</option><option  value="78" >
                                            78 kg</option><option  value="79" >
                                            79 kg</option><option  value="80" >
                                            80 kg</option><option  value="81" >
                                            81 kg</option><option  value="82" >
                                            82 kg</option><option  value="83" >
                                            83 kg</option><option  value="84" >
                                            84 kg</option><option  value="85" >
                                            85 kg</option><option  value="86" >
                                            86 kg</option><option  value="87" >
                                            87 kg</option><option  value="88" >
                                            88 kg</option><option  value="89" >
                                            89 kg</option><option  value="90" >
                                            90 kg</option><option  value="91" >
                                            91 kg</option><option  value="92" >
                                            92 kg</option><option  value="93" >
                                            93 kg</option><option  value="94" >
                                            94 kg</option><option  value="95" >
                                            95 kg</option><option  value="96" >
                                            96 kg</option><option  value="97" >
                                            97 kg</option><option  value="98" >
                                            98 kg</option><option  value="99" >
                                            99 kg</option><option  value="100" >
                                            100 kg</option><option  value="101" >
                                            101 kg</option><option  value="102" >
                                            102 kg</option><option  value="103" >
                                            103 kg</option><option  value="104" >
                                            104 kg</option><option  value="105" >
                                            105 kg</option><option  value="106" >
                                            106 kg</option><option  value="107" >
                                            107 kg</option><option  value="108" >
                                            108 kg</option><option  value="109" >
                                            109 kg</option><option  value="110" >
                                            110 kg</option><option  value="111" >
                                            111 kg</option><option  value="112" >
                                            112 kg</option><option  value="113" >
                                            113 kg</option><option  value="114" >
                                            114 kg</option><option  value="115" >
                                            115 kg</option><option  value="116" >
                                            116 kg</option><option  value="117" >
                                            117 kg</option><option  value="118" >
                                            118 kg</option><option  value="119" >
                                            119 kg</option><option  value="120" >
                                            120 kg</option><option  value="121" >
                                            121 kg</option><option  value="122" >
                                            122 kg</option><option  value="123" >
                                            123 kg</option><option  value="124" >
                                            124 kg</option><option  value="125" >
                                            125 kg</option><option  value="126" >
                                            126 kg</option><option  value="127" >
                                            127 kg</option><option  value="128" >
                                            128 kg</option><option  value="129" >
                                            129 kg</option><option  value="130" >
                                            130 kg</option><option  value="131" >
                                            131 kg</option><option  value="132" >
                                            132 kg</option><option  value="133" >
                                            133 kg</option><option  value="134" >
                                            134 kg</option><option  value="135" >
                                            135 kg</option><option  value="136" >
                                            136 kg</option><option  value="137" >
                                            137 kg</option><option  value="138" >
                                            138 kg</option><option  value="139" >
                                            139 kg</option><option  value="140" >
                                            140 kg</option><option  value="141" >
                                            141 kg</option><option  value="142" >
                                            142 kg</option><option  value="143" >
                                            143 kg</option><option  value="144" >
                                            144 kg</option><option  value="145" >
                                            145 kg</option><option  value="146" >
                                            146 kg</option><option  value="147" >
                                            147 kg</option><option  value="148" >
                                            148 kg</option><option  value="149" >
                                            149 kg</option><option  value="150" >
                                            150 kg</option>
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                            </div>
                            <div class={styles.select}>
                                <span class={styles.select_label}>
                                    <span class={styles.select_label_text}>Peso (kg)</span>
                                </span>
                                <div class={styles.select_container}>
                                    <select class={styles.select_element}>
                                    <option value="40" >40 kg</option>
                                    <option value="41" >41 kg</option>
                                    <option value="42" >42 kg</option>
                                    <option value="43" >43 kg</option>
                                    <option value="44" >44 kg</option>
                                    <option value="45" >45 kg</option>
                                    <option value="46" >46 kg</option>
                                    <option value="47" >47 kg</option>
                                    <option value="48" >48 kg</option>
                                    <option value="49" >49 kg</option>
                                    <option value="50" >50 kg</option>
                                    <option value="51" >51 kg</option>
                                    <option value="52" >52 kg</option>
                                    <option value="53" >53 kg</option>
                                    <option value="54" >54 kg</option>
                                    <option value="55" >55 kg</option>
                                    <option value="56" >56 kg</option>
                                    <option value="57" >
                                    57 kg</option><option value="58" >
                                    58 kg</option><option value="59" >
                                    59 kg</option><option value="60" >
                                    60 kg</option><option value="61" >
                                    61 kg</option><option value="62" >
                                    62 kg</option><option value="63" >
                                    63 kg</option><option value="64" >
                                    64 kg</option><option value="65" >
                                    65 kg</option><option value="66" >
                                    66 kg</option><option value="67" >
                                    67 kg</option><option value="68" >
                                    68 kg</option><option value="69" >
                                    69 kg</option><option value="70" >
                                    70 kg</option><option value="71" >
                                    71 kg</option><option value="72" >
                                    72 kg</option><option value="73" >
                                    73 kg</option><option value="74" >
                                    74 kg</option><option value="75" >
                                    75 kg</option><option value="76" >
                                    76 kg</option><option value="77" >
                                    77 kg</option><option value="78" >
                                    78 kg</option><option value="79" >
                                    79 kg</option><option value="80" >
                                    80 kg</option><option value="81" >
                                    81 kg</option><option value="82" >
                                    82 kg</option><option value="83" >
                                    83 kg</option><option value="84" >
                                    84 kg</option><option value="85" >
                                    85 kg</option><option value="86" >
                                    86 kg</option><option value="87" >
                                    87 kg</option><option value="88" >
                                    88 kg</option><option value="89" >
                                    89 kg</option><option value="90" >
                                    90 kg</option><option value="91" >
                                    91 kg</option><option value="92" >
                                    92 kg</option><option value="93" >
                                    93 kg</option><option value="94" >
                                    94 kg</option><option value="95" >
                                    95 kg</option><option value="96" >
                                    96 kg</option><option value="97" >
                                    97 kg</option><option value="98" >
                                    98 kg</option><option value="99" >
                                    99 kg</option><option value="100" >
                                    100 kg</option><option value="101" >
                                    101 kg</option><option value="102" >
                                    102 kg</option><option value="103" >
                                    103 kg</option><option value="104" >
                                    104 kg</option><option value="105" >
                                    105 kg</option><option value="106" >
                                    106 kg</option><option value="107" >
                                    107 kg</option><option value="108" >
                                    108 kg</option><option value="109" >
                                    109 kg</option><option value="110" >
                                    110 kg</option><option value="111" >
                                    111 kg</option><option value="112" >
                                    112 kg</option><option value="113" >
                                    113 kg</option><option value="114" >
                                    114 kg</option><option value="115" >
                                    115 kg</option><option value="116" >
                                    116 kg</option><option value="117" >
                                    117 kg</option><option value="118" >
                                    118 kg</option><option value="119" >
                                    119 kg</option><option value="120" >
                                    120 kg</option><option value="121" >
                                    121 kg</option><option value="122" >
                                    122 kg</option><option value="123" >
                                    123 kg</option><option value="124" >
                                    124 kg</option><option value="125" >
                                    125 kg</option><option value="126" >
                                    126 kg</option><option value="127" >
                                    127 kg</option><option value="128" >
                                    128 kg</option><option value="129" >
                                    129 kg</option><option value="130" >
                                    130 kg</option><option value="131" >
                                    131 kg</option><option value="132" >
                                    132 kg</option><option value="133" >
                                    133 kg</option><option value="134" >
                                    134 kg</option><option value="135" >
                                    135 kg</option><option value="136" >
                                    136 kg</option><option value="137" >
                                    137 kg</option><option value="138" >
                                    138 kg</option><option value="139" >
                                    139 kg</option><option value="140" >
                                    140 kg</option><option value="141" >
                                    141 kg</option><option value="142" >
                                    142 kg</option><option value="143" >
                                    143 kg</option><option value="144" >
                                    144 kg</option><option value="145" >
                                    145 kg</option><option value="146" >
                                    146 kg</option><option value="147" >
                                    147 kg</option><option value="148" >
                                    148 kg</option><option value="149" >
                                    149 kg</option><option value="150" >
                                    150 kg</option>
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                            </div>
                            <div class={styles.select}>
                                <span class={styles.select_label}>
                                    <span class={styles.select_label_text}>Piel</span>
                                </span>
                                <div class={styles.select_container}>
                                        <select class={styles.select_element}>
                                        <option value="ligthwhite">Muy clara</option>
                                        <option value="white">Clara</option>
                                        <option value="brown">Morena</option>
                                        <option value="darkbrown">Morena oscura</option>
                                        <option value="black">Muy oscura</option>
                                        <option value="other">Otro</option>                                 
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                            </div>
                            <div class={styles.select}>
                                <span class={styles.select_label}>
                                    <span class={styles.select_label_text}>Color de cabello</span>
                                </span>
                                <div class={styles.select_container}>
                                    <select class={styles.select_element}>
                                    <option value="black">Morocho</option>
                                    <option value="darkbrown">Castaño oscuro</option>
                                    <option value="lightbrown">Castaño claro</option>
                                    <option value="darkblond">Rubio oscuro</option>
                                    <option value="lightblond">Rubio claro</option>
                                    <option value="red">Pelirrojo</option>
                                    <option value="bald">Sin cabello</option>
                                    <option value="other">Otro</option>
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                            </div>
                            <div class={styles.select}>
                                <span class={styles.select_label}>
                                    <span class={styles.select_label_text}>Color de ojos</span>
                                </span>
                                <div class={styles.select_container}>
                                    <select class={styles.select_element}>
                                    <option value="green">Verdes</option>
                                    <option value="blue">Azules</option>
                                    <option value="grey">Grises</option>
                                    <option value="brown">Marrones</option>
                                    <option value="black">Negros</option>
                                    <option value="honey">Miel</option><option value="lightblue">Celeste</option><option value="other">Otro</option>
                                    </select>
                                    <span class={styles.select_icon}></span>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Tarifa</p>
                                </div>
                                <div class={styles.option_content}>
                                    <input type="text" class={styles.input} />
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Acepta tarjeta</p>
                                </div>
                                <div class={styles.checkbox_option_content}>
                                    <div class={styles.checkbox_option_slot}>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Acepta</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Disponibilidad</p>
                                </div>
                                <div class={styles.checkbox_option_content}>
                                    <div class={[styles.checkbox_option_slot, 'grid grid-cols-5']}>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>LU</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>MA</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>MI</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>JU</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>VI</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>SA</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>DO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Lugar de atención</p>
                                </div>
                                <div class={styles.checkbox_option_content}>
                                    <div class={styles.checkbox_option_slot}>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Lugar propio</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Domicilio</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Hotel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Disponibilidad</p>
                                </div>
                                <div class={styles.checkbox_option_content}>
                                    <div class={[styles.checkbox_option_slot, 'grid grid-cols-2 ']}>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Atiendo hombres</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Atiendo mujeres</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Atiendo trans</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Atiendo parejas</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Acompañante</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Activa</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Pasiva</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Besos</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Tríos</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Orgias</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Lluvias</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Sado</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Pies</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Fisting</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Anal</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Vaginal</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Juguetes</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Masajes</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Terminación libre</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Cambio de roles</p>
                                        </div>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Lencería</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={styles.option}>
                                <div class={styles.label_container}>
                                    <p class={styles.label}>Perfil</p>
                                </div>
                                <div class={styles.checkbox_option_content}>
                                    <div class={styles.checkbox_option_slot}>
                                        <div class={styles.checkbox_option_container}>
                                            <input type="checkbox" class="mr-2" />
                                            <p class={styles.label}>Publicar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="my-5 text-center">
                            <div  class={styles.button_container}>
                                <button class={styles.button_save}>Guardar</button>
                            </div>
                            </div>
                            <div class={styles.link_container}>
                                <a class={styles.link} href="#">Ver mi contrato</a>
                            </div>
                            <div class={styles.link_container}>
                                <a class={styles.disable_account} href="#">Borrar Cuenta</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
})
