# Optimen Web Site
## Carpeta del Back-End

Dentro de la carpeta del controlador, se encuentra el modelo que gestiona la conexión del Modelo Vista del Cliente con el Sistema de Base de Datos NoSQL Mongo Atlas, en un clúster gratuito destinado para pruebas básicas del sistema.

En esta carpeta, se pueden encontrar diferentes archivos y subcarpetas que trabajan en conjunto para crear una conexión a la base de datos que permite el acceso a su contenido, como eventos y noticias, así como la posibilidad de crear, eliminar, actualizar o leer la información de sus tablas.

En la subcarpeta "models", se pueden encontrar los modelos de vista de tipo .js que controlan cada una de las tres partes del sistema: noticias, eventos y usuarios de la aplicación web.

Por otro lado, en la subcarpeta "controllers", se pueden encontrar los modelos .js que controlan los envíos y formatos de la información de cada parte del sistema. Además, dentro de esta subcarpeta se encuentran las cuatro funciones básicas del back-end para la ejecución del sistema CRUD que permiten hacer cambios dentro de la Base de Datos en la información y datos de la tabla.

Este tipo de Modelo de trabajo de Desarrollo de Apps Web se basa en Dividirlo en tres partes principales Modelo, Vista y Controlador.

El Modelo Vista Controlador (MVC) es un patrón de arquitectura de software que se utiliza comúnmente en el desarrollo web. En este modelo, la lógica de la aplicación se divide en tres componentes principales: el modelo, la vista y el controlador.

El Modelo: Este componente representa los datos y la lógica de la aplicación. Se encarga de gestionar el acceso, la validación y la manipulación de los datos.

La Vista: Este componente es la interfaz de usuario con la que el usuario interactúa. Es responsable de la presentación visual de los datos y de la captura de la entrada del usuario.

El Controlador: Este componente actúa como intermediario entre el modelo y la vista. Se encarga de procesar la entrada del usuario, de realizar las operaciones necesarias en el modelo y de actualizar la vista en consecuencia.
