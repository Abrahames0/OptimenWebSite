# Integradora II

## Contenido
<details>
  <summary>Tabla contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>
        <li><a href="#objetivos">Objetivos</a></li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#diagrama-gantt">Diagrama Gantt</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-de-la-solución">Análisis de la Solución</a>
      <ul>
        <li><a href="#requerimientos">Requerimientos</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
      </ul>
    </li>
    <li>
      <a href="#diseño-de-la-solución">Diseño de la Solución</a>
      <ul>
        <li><a href="#modelo-relacional">Modelo Relacional</a></li>
        <li><a href="#diagrama-de-clases">Diagrama de Clases</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
        <li><a href="#diagrama-de-actividadess">Diagrama de Actividades</a></li>
      </ul>
    </li>    
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-codificación">Estándares Codificación</a></li>
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#código-fuente">Código Fuente</a></li>
      </ul>
    </li>      
    <li>
      <a href="#pruebas">Pruebas</a>
      <ul>
        <li><a href="#casos-de-prueba">Casos de prueba</a></li>
        <li><a href="#ejecución">Ejecución</a></li>
      </ul>
    </li>       
    <li><a href="#guias">Guias</a></li>
    <li><a href="#contribucion">Contribución</a></li>
    <li><a href="#licencia">licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
#### Acerca del proyecto
Requisitos.
* Internet 
* Equipo de computo 
* Tener instalado React Js
* Tener instalado Node JS
* Tener instalado Visual Studio Code 

<!-- Descripción -->
#### Descripción.
Principalmente el objetivo es el rediseño de la apariencia y la estructura de la página de oficial de Optimen S.A de C.V, con la intención de agregar nuevas características, novedosas y funcionales para el funcionamiento y la interacción del usuario. Se busca añadir la disponibilidad de dos idiomas; inglés y español y asi mismo añadir la funcionalidad de “inicio de sesión”, en donde el objetivo será crear vista especial para usuarios que actualizan el contenido como noticias o eventos. De igual manera una vista de “administrador root”(usuario raíz) el cual podrá otorgar los diferentes permisos a los usuarios registrados como creadores de contenido, así también podrá administrar estos usuarios.
* Financieros : $9000
* Tiempos: 3 meses y 21 días (25 de Enero - 14 de Abril)


<!-- Objetivos -->
#### Objetivos.
El proyecto consiste en el rediseño de la página oficial de la empresa Optimen S.A de C.V. para incluir nuevas funcionalidades que brinden información actualizada sobre la empresa y sus avances en TI. Se busca lograr un sitio web altamente eficiente, con una rápida velocidad de carga para una navegación óptima. El administrador root podrá controlar los permisos de acceso de los usuarios, mientras que los creadores de contenido podrán crear, editar, eliminar y consultar noticias y eventos. Además, las noticias y eventos se mostrarán en la página principal para mantener a los usuarios visitantes informados acerca de las últimas novedades de la empresa.

<!-- Organigrama -->
#### Organigrama.
![image](https://user-images.githubusercontent.com/114689978/230801062-b77f3be3-2947-4682-91a2-e597e14a59ab.png)


<!-- Diagrama Gantt -->
#### Diagrama Gantt.
![image](https://user-images.githubusercontent.com/114689978/230801085-b3c3eeb1-1dd4-4e30-98ea-cc5086afceae.png)


<!-- Análisis del proyecto -->
## Análisis de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Requerimientos -->
#### Requerimientos.
![image](https://user-images.githubusercontent.com/114689978/230801047-5201cf6a-d730-4d71-8d00-69619ff19a1a.png)


<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso.
Creador de contenido
![image](https://user-images.githubusercontent.com/114689978/230800603-6aad82b3-8da4-450a-93bf-3bc535d55649.png)

Usuario visitante
![image](https://user-images.githubusercontent.com/114689978/230800671-5d1a9acd-9c09-42b1-b6be-19e5e14db51a.png)

Administrador

![image](https://user-images.githubusercontent.com/114689978/230800684-c7ac7538-7e2e-4c06-bf33-0a83363607fe.png)


<!-- Diseño del proyecto -->
## Diseño de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Modelo Relacional -->
#### Modelo Relacional.
Esquema de la base de datos (nombre de campo, tipo de datos, restricciones, etc)
Colección eventos      
![image](https://user-images.githubusercontent.com/114689978/230801441-5b678d3f-bb11-4a84-b2ef-fdd9a7e88503.png)

Colección noticias     
![image](https://user-images.githubusercontent.com/114689978/230801465-93270940-15f1-4c02-9ba1-c1c22552934e.png)

Colección de usuarios     
![image](https://user-images.githubusercontent.com/114689978/230801477-492b196b-0842-442b-9a66-d9ac5dacbb68.png)


<!-- Diagrama de Clases -->
#### Diagrama de Clases.
Evento 

![image](https://user-images.githubusercontent.com/114689978/230801508-4bb73b6f-295a-4a29-b977-e55b87f8bc8d.png)

Noticias 

![image](https://user-images.githubusercontent.com/114689978/230801518-fa29683e-e1c0-4b6c-9cdd-2e52077a18bf.png)


<!-- Diagrama de Componentes -->
#### Diagrama de Componentes
Esquema de los componentes que interactúan (Modelo, Vista, Controlador, Servidor Web, Servidor de base de datos)

![image](https://user-images.githubusercontent.com/114689978/230801793-4bc4700f-82c0-4b81-b813-9c4420163a36.png)

#### Diagrama de actividades
*Administrador root* 
El administrador ingresa a la página, posteriormente inicia sesión si proporciona los datos correctos podrá dirigirse a él apartados y brindar permisos y asi mismo podra quitar los permisos, en caso de que el administrador no ingresos los datos correctos la autenticación presentara una falla en el sistema.

![image](https://user-images.githubusercontent.com/114689978/230805739-ce05f01d-3ae0-4470-966d-cb93b0044058.png)

*Usuario visitante*
El usuario visitante busca la página de optimen oficial y da clik sobre ella para entrar, tendrá la opción de navegar sin problemas dentro de la misma y poder abandonar la página.

![image](https://user-images.githubusercontent.com/114689978/230805814-b14211d3-05d0-4728-8491-f2e63d5e3560.png)

*Creador de contenido*
El creador de contenido ingresa a la página, posteriormente inicia sesión si proporciona los datos correctos podrá dirigirse a él apartado de agregar eventos o noticias nuevas, en caso de que el creador de contenido no ingrese los datos correctos la autenticación presentara una falla en el sistema y por lo tanto no podrá hacer modificaciones.

![image](https://user-images.githubusercontent.com/114689978/230805858-715933b7-5574-4c0e-beb0-e8dadfe3a433.png)

<!-- Implementación del proyecto -->
## Implementación.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Estándares de Codificación -->
#### Estándares Codificación.
Estándares empleados en la codificación

<!-- Arquitectura MVC y Middleware -->
#### Arquitectura.
Definir los patrones empleados y de seguridad.

<!-- Código Fuente -->
#### Código Fuente.
Código Fuente de la solución


<!-- Pruebas proyecto -->
## Pruebas.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
#### Casos de prueba.
Indicar los casos de prueba

<!-- Ejecución Casos de prueba -->
#### Ejecución.
Evidencia de Ejecución de Casos de prueba.


<!-- Iniciando -->
## Iniciando
Iniciando.

<!-- Requisitos -->
### Requisitos
Antes de utilizar las nuevas funcionalidades de administración de contenido del sitio web, se deben cumplir los siguientes requisitos previos:
*	Navegador web
*	Dispositivo electrónico
*	Permisos de usuario
*	Conexión a internet 
*	Edición de contenido


<!-- Instalación -->
### Instalacion
Instalación del Software
1.	Haga clic en el botón verde "Code" en la página del repositorio y seleccione "Download ZIP" para descargar el archivo ZIP del código fuente.

![image](https://user-images.githubusercontent.com/114689978/230803036-cbcbfbb3-b57b-4e2e-98be-bbabbce37f79.png)

2.	Descomprima el archivo ZIP descargado en un directorio de su elección.

![image](https://user-images.githubusercontent.com/114689978/230803059-8cca480a-5f69-429c-82d1-bf6135216a85.png)

3.	Abra Visual Studio Code en su computadora y seleccione "File" en la barra de menú superior, luego seleccione "Open Folder". Navegue hasta el directorio donde descomprimió el código fuente y seleccione la carpeta del proyecto.

![image](https://user-images.githubusercontent.com/114689978/230803078-a177f7ce-e3e5-40ba-b897-4df7510f95b6.png)

4.	El proyecto requiere Node.js y npm. Si no los tiene instalados, debe descargarlos e instalarlos antes de continuar, si ya lo tiene puede pasar al paso 5.

*	Para instalar Node.js, visite el sitio web de Node.js y descargue la versión adecuada para su sistema operativo. Siga las instrucciones en pantalla para instalar Node.js en su computadora.

*	npm se instalará automáticamente cuando instale Node.js.
Una vez que tenga Node.js y npm instalados, abra una ventana de línea de comandos dentro de Visual Studio Code y navegue hasta el directorio donde descomprimió el código fuente.

*	Ejecute el comando: npm install para instalar todas las dependencias necesarias.

5.	Una vez que se hayan completado los pasos anteriores, puede instalar las dependencias del back-end y front-end. Abra un terminal con el comando: Ctrl + ñ

![image](https://user-images.githubusercontent.com/114689978/230803263-f69ab093-590b-4863-8823-344d3a197685.png)

6.	Entre a la carpeta de back-end usando el siguiente comando: cd back

![image](https://user-images.githubusercontent.com/114689978/230803285-277776ed-e11a-4ea7-9f6d-8aff96069ce9.png)

7. Ahora use el comando npm i para instalar las dependencias necesarias también debe instalar mongoose por lo que debe usar el siguiente comando: npm install mongoose –force y así mismo después se pueda levantar el servidor sin problema. 

![image](https://user-images.githubusercontent.com/114689978/230803311-fe3fca7b-d26d-4330-8d34-7180e3e21e01.png)

8. Ejecute el comando npm start para iniciar el servidor web, es muy importante que mantengamos un monitoreo constante de este archivo ya que este contiene la conexión a la base de datos.

![image](https://user-images.githubusercontent.com/114689978/230803334-f42d1f8b-fdea-4831-901b-235ec94bdcf1.png)

9. Se abre una pestaña nueva en la cual se usará el siguiente comando: cd frontend para entrar a la carpeta 
y poder instalar las dependencias.

![image](https://user-images.githubusercontent.com/114689978/230803355-719fa805-9324-4ae4-aa45-e32124f597cd.png)

10. Ahora use el comando npm i para instalar las dependencias necesarias y cuando termine la descarga ahora use el comando npm start para levantar el front-end.

![image](https://user-images.githubusercontent.com/114689978/230803399-3d648dfc-a3ad-4f44-aad3-1f28b4f6f0c9.png)

11. Abra su navegador web y vaya a la dirección http://localhost:3000 para acceder al sitio web Optimen.

![image](https://user-images.githubusercontent.com/114689978/230803422-a1a44a96-6e00-4d03-a4cb-c3f0aff05e4c.png)

¡Eso es todo! Si ha seguido estos pasos, debería tener una instancia del proyecto Optimen Web Site ejecutándose en su computadora. 

## Guias
Guias de Uso.

## Contribucion
Contribucion.

## Licencia
Licencia.

## Contacto
Contacto.

## Participantes
* [Arvizu Sotelo Fernando]()
* [Duarte Vázquez José Carlos]()
* [Espinoza Gómez Abraham Salvador]()
* [Fuentes Cabrera Itzel Alessandra]()
* [Martínez Aldavera Alma Yesenia](https://github.com/YeseniaMartinez24)
