import { component$, useSignal, $, useStyles$ } from '@builder.io/qwik';
import styles from './search.scss?inline';

export default component$(() => {
  useStyles$(styles);
  const count = useSignal(70);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div class="search_aside">
      <div class="title_container">
        <p class="title">Búsqueda Avanzada de Chicas Escorts</p>
      </div>
      <div class="form_container">
        <gula-select><div class="select">
          <span class="label">
            <img width="10px" height="100%" alt="Select" class="icon" src="/assets/icons/location.svg" />
            <span class="text">Ubicación</span>
          </span>

          <div class="select_container">
            <div >
              <select class="select_element ">
                <option value=""  >Ciudad</option>
                <option value="">
                  Sin Definir</option><option value="Artigas">
                  Artigas</option><option value="Canelones">
                  Canelones</option><option value="Cerro Largo">
                  Cerro Largo</option><option value="Colonia">
                  Colonia</option><option value="Durazno">
                  Durazno</option><option value="Flores">
                  Flores</option><option value="Florida">
                  Florida</option><option value="Lavalleja">
                  Lavalleja</option><option value="Maldonado">
                  Maldonado</option><option value="Montevideo">
                  Montevideo</option><option value="Paysandú">
                  Paysandú</option><option value="Río Negro">
                  Río Negro</option><option value="Rivera">
                  Rivera</option><option value="Rocha">
                  Rocha</option><option value="Salto">
                  Salto</option><option value="San José">
                  San José</option><option value="Soriano">
                  Soriano</option><option value="Tacuarembó">
                  Tacuarembó</option><option value="Treinta y Tres">
                  Treinta y Tres</option>
              </select>
              <span class="icon"></span>
            </div>




          </div>
        </div>
        </gula-select>
        <gula-select  ><div class="select">
          <span class="label">
            <img width="10px" height="100%" alt="Select" class="icon" src="/assets/icons/character.svg" />
            <span class="text">Caracteristicas</span>
          </span>

          <div class="select_container">
            <div >
              <select class="select_element ">
                <option value=""  >Género</option>
                <option value="female">
                  Mujer</option><option value="male">
                  Hombre</option><option value="trans">
                  Mujer trans</option>
              </select>
              <span class="icon"></span>
            </div>

            <span class="separator"></span>

            <div >
              <select class="select_element ">
                <option value=""  >Piel</option>
                <option value="">Todos</option><option value="ligthwhite">Muy clara</option><option value="white">Clara</option><option value="brown">Morena</option><option value="darkbrown">Morena oscura</option><option value="black">Muy oscura</option><option value="other">Otro</option>
              </select>
              <span class="icon"></span>
            </div>
          </div>
        </div>
        </gula-select>
        <gula-select  ><div class="select">


          <div class="select_container">
            <div >
              <select class="select_element ">
                <option value=""  >Cabello</option>
                <option value="">
                  Todos</option><option value="black">
                  Morocho</option><option value="darkbrown">
                  Castaño oscuro</option><option value="lightbrown">
                  Castaño claro</option><option value="darkblond">
                  Rubio oscuro</option><option value="lightblond">
                  Rubio claro</option><option value="red">
                  Pelirrojo</option><option value="bald">
                  Sin cabello</option><option value="other">
                  Otro</option>
              </select>
              <span class="icon"></span>
            </div>

            <span class="separator"></span>

            <div >
              <select class="select_element ">
                <option value=""  >Ojos</option>
                <option value="">Todos</option><option value="green">Verdes</option><option value="blue">Azules</option><option value="grey">Grises</option><option value="brown">Marrones</option><option value="black">Negros</option><option value="honey">Miel</option><option value="lightblue">Celeste</option><option value="other">Otro</option>
              </select>
              <span class="icon"></span>
            </div>
          </div>
        </div>
        </gula-select>



        <app-checkbox-group labelgroup="Settings.Tab_profile.Work_days_label" ><div class="content contentResponsive">
          <div class="option">
            <div class="label_container">
              <p class="label">Disponibilidad</p>
            </div>
            <div class="option_content colum_option">
              <div class="checkbox_slot checkbox_only">
                <div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="g82kqtexo0" />
                  <label class="label" for="g82kqtexo0">LU</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="g82kqtexo1" />
                  <label class="label" for="g82kqtexo1">MA</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="g82kqtexo2" />
                  <label class="label" for="g82kqtexo2">MI</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="g82kqtexo3" />
                  <label class="label" for="g82kqtexo3">JU</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="g82kqtexo4" />
                  <label class="label" for="g82kqtexo4">VI</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="g82kqtexo5" />
                  <label class="label" for="g82kqtexo5">SA</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="g82kqtexo6" />
                  <label class="label" for="g82kqtexo6">DO</label>
                </div>

              </div>
            </div>
          </div>
        </div>
        </app-checkbox-group>

        <app-checkbox-group labelgroup="Settings.Tab_profile.Work_place" ><div class="content contentResponsive">
          <div class="option">
            <div class="label_container">
              <p class="label">Lugar de atención</p>
            </div>
            <div class="option_content colum_option">
              <div class="checkbox_slot checkbox_only">
                <div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="vcr25qhr30" />
                  <label class="label" for="vcr25qhr30">Lugar propio</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="vcr25qhr31" />
                  <label class="label" for="vcr25qhr31">Domicilio</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="vcr25qhr32" />
                  <label class="label" for="vcr25qhr32">Hotel</label>
                </div>

              </div>
            </div>
          </div>
        </div>
        </app-checkbox-group>

        <app-checkbox-group labelgroup="Settings.Tab_profile.Services" ><div class="content contentResponsive">
          <div class="option">
            <div class="label_container">
              <p class="label">Servicios</p>
            </div>
            <div class="option_content colum_option">
              <div class="checkbox_slot checkbox_only two_colums">
                <div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj0" />
                  <label class="label" for="afv10o6xj0">Atiendo hombres</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj1" />
                  <label class="label" for="afv10o6xj1">Atiendo mujeres</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj2" />
                  <label class="label" for="afv10o6xj2">Atiendo trans</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj3" />
                  <label class="label" for="afv10o6xj3">Atiendo parejas</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj4" />
                  <label class="label" for="afv10o6xj4">Acompañante</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj5" />
                  <label class="label" for="afv10o6xj5">Activo</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj6" />
                  <label class="label" for="afv10o6xj6">Pasivo</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj7" />
                  <label class="label" for="afv10o6xj7">Besos</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj8" />
                  <label class="label" for="afv10o6xj8">Tríos</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj9" />
                  <label class="label" for="afv10o6xj9">Orgias</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj10" />
                  <label class="label" for="afv10o6xj10">Lluvias</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj11" />
                  <label class="label" for="afv10o6xj11">Sado</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj12" />
                  <label class="label" for="afv10o6xj12">Pies</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj13" />
                  <label class="label" for="afv10o6xj13">Fisting</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj14" />
                  <label class="label" for="afv10o6xj14">Anal</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj15" />
                  <label class="label" for="afv10o6xj15">Vaginal</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj16" />
                  <label class="label" for="afv10o6xj16">Juguetes</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj17" />
                  <label class="label" for="afv10o6xj17">Masajes</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj18" />
                  <label class="label" for="afv10o6xj18">Terminación libre</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj19" />
                  <label class="label" for="afv10o6xj19">Cambio de roles</label>
                </div><div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="afv10o6xj20" />
                  <label class="label" for="afv10o6xj20">Lencería</label>
                </div>

              </div>
            </div>
          </div>
        </div>
        </app-checkbox-group>

        <app-checkbox-group labelgroup="Settings.Tab_profile.Accept_card" ><div class="content contentResponsive">
          <div class="option">
            <div class="label_container">
              <p class="label">Acepta tarjeta</p>
            </div>
            <div class="option_content colum_option">
              <div class="checkbox_slot checkbox_only">
                <div class="checkbox_container">
                  <input type="checkbox" class="checkbox " id="3wwujt2mr0" />
                  <label class="label" for="3wwujt2mr0">Acepta</label>
                </div>

              </div>
            </div>
          </div>
        </div>
        </app-checkbox-group>

        <div class="button_container">
          <button class="button">Buscar</button>
        </div>
      </div>
    </div>
  );
});
