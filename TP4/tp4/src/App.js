import Titulos from './Titulo/Titulo';
import Formulario from './Form/Form';
import Card from './Card/Card';
import SubTitulos from './SubTitulo/SubTitulo';
import './App.css';

function App() {
  return (
    <div id="root">
      <header>
      <Titulos Titulo='ADMINISTRADOR DE PACIENTES'/>
      <div class="container">
        <div class="row">
            <div class="one-half column">
            <SubTitulos Subtitulo='Crear mi cita'/>
            <form>
              <Formulario titulo='Nombre Mascota:' textoInput="Nombre de Mascota"/>
            </form>
                
            </div>
            <div class="one-half column">
            <SubTitulos Subtitulo='Administra tus citas'/>
            <Card mascota='Nina' dueño='Martin' fecha='2021-08-05' hora='08:20' sintomas='Le duele la pierna'/>
            <Card mascota='Sifon' dueño='Flecha' fecha='2023-08-05' hora='09:24' sintomas='Duerme mucho'/>
            <Card mascota='Floki' dueño='Ari' fecha='2023-08-05' hora='16:15' sintomas='No está comiendo'/>
            </div>
      </div>
    </div>
    </header>
    </div>
    
  );
}

export default App;