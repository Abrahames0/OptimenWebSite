//Autor: Espinoza Gómez Abraham Salvador

import Nadvar from '../layouts/Nadvar'; // Importa el componente de la barra de navegación
import Fotter from "../layouts/Footer"; // Importa el componente del pie de página
import Contac from "../Components/Contact-Us/Contact-Us"; // Importa el componente de la página de contacto

function ContactUs() {
  return (
    <>
      <Nadvar /> 
      <Contac/> 
      <Fotter /> 
    </>
  );
}

export default ContactUs; // Exporta el componente para poder ser usado en otras partes de la aplicación
