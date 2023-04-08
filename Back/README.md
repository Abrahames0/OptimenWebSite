# Optimen Web Site
## Carpeta del Back-End

Carpeta que contiene el modelo del controlador, en esta carpeta tenemos distintos archivos y carpets qu se encargan de la conexión del Modelo Vista del Cliente que envia Datos y hace los Cambios dentro de una Conexión al Sistema de Base de Datos NoSQL Mongo Atlas, en un cluster gratuito destinado alas pruebas del sistema Basicas


Dentro de esta se encuentran las Carpetas de  models, controllers y components
Estos componentes funcionan en conjunto para crear una conexión a la base de 
datos que consume lo contenido dentro de ella tales como eventos y noticias asi como acceso a sus tablas, ya sea para crear, eliminar, actualizar o leer la infomación contenida.

Los models, son modelos de vista de tipo js que controla cada una de las tres partes de lo que son las noticias, eventos o 
usuarios del Sistema en la App Web.

La carpeta de Controllers son los modelos js para controlar los envios y formatos de información de cada parte del sistema, dentro de este se encutran 4 funciones básicas del back para ejecución del sistema CRUD que hace cambios dentro de la Base de Datos para la información y datos de la Tabla.
