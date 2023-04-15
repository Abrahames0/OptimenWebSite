//Fernando Arvizu Sotelo
//Archivo principal de servidor
//Dependencias

import express, { request } from "express";
import "./db.js"; //Conexion a base de datos
import AdminJS  from "adminjs"; //Uso de AdminJS
import AdminJSExpress from "@adminjs/express";//uso de express para adminJS
import mongooseAdminJs from "@adminjs/mongoose";//Uso de mongoose para Adsminjs
//Modelos
import User from './models/Users.js'
import New from "./models/News.js";
import Event from "./models/Events.js";
//Se crea ek nuevo adaptador para que la dependencia registre los modelos 
AdminJS.registerAdapter(mongooseAdminJs);
//Se inicia express
const app = express();
//Le damos los headers para la validacion de solicitudes desde el front
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})


const DEFAULT_ADMIN = {
  email: 'sarah@optimen.com.mx',
  password: '12345',
  role: 'root'
}

const SECOND_ADMIN = {
  email: 'fernando@optimen.com.mx',
  password: '12345',
  role:'admin'
}

const THREE_ADMIN = {
  email: 'abtaham@optimen.com.mx',
  password: '12345',
  role:'creator'
}

/**const authMiddleware = (req, res, next) => {
    role: req.User.role // Aquí puedes poner el rol del usuario autenticado, por ejemplo, desde la base de datos
  next();
}; **/

// handle authentication
const authenticate = async (email, password, secondAdmin) => {
  //condition to check for correct login details for the default admin
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password &&  password === DEFAULT_ADMIN.password ) {
    //if the condition is true
    return Promise.resolve(DEFAULT_ADMIN)
  }
  //condition to check for correct login details for the second admin
  if (SECOND_ADMIN && email === SECOND_ADMIN.email && password === SECOND_ADMIN.password) {
    //if the condition is true
    return Promise.resolve(SECOND_ADMIN)
  }
  if (THREE_ADMIN && email === THREE_ADMIN.email && password === THREE_ADMIN.password) {
    //if the condition is true
    return Promise.resolve(THREE_ADMIN)
  }
  //if the conditions are false
  return null
}


//Se crean las configuraciones de AdminJs para su uso 
const adminOptions = {
  resources: [
    {
      resource: User,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },

          encryptedPassword: {
            isVisible:false,
            
          },
          password: {
            type: "password",
            isVisible: {
              show: false,
              edit: true
            }
          }
        },
        actions: {
          new: {
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === "root" || currentAdmin.role === "admin",
          },
          edit: {
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === "root" || currentAdmin.role === "admin",
            isVisible:({ currentAdmin }) => currentAdmin && currentAdmin.role === "root" || currentAdmin.role === "admin",
          },
          delete: {
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === "root" || currentAdmin.role === "admin",
            isVisible:({ currentAdmin }) => currentAdmin && currentAdmin.role === "root" || currentAdmin.role === "admin",
          },
        },
       

        navigation: {
          icon: "User",
          name: "Users",
        },

      },
    },
    {
      resource: New,
      options: {
        properties: {
          _id: {
            isVisible: false,
          },
        },
        navigation: {
          icon: "Tree",
          name: "News",
        },

      },
    },
    {
      resource: Event,
      options: {
        properties: {
          _id: false,
        },
        navigation: {
          icon: "Purchase",
          name: "Events",
        },
      },
    },
  ],

  rootPath:'/admin',
  branding: {
    companyName: "Optimen | Admin",
    withMadeWithLove: false,
    logo: "https://optimen.com.mx/media/external/logo_optimen.ico",
    favicon: "https://optimen.com.mx/media/external/logo_no_name.png",
  },
};
 //Se le pasan las connfiguraciones a la dependencia
const adminjs = new AdminJS(adminOptions);
//Entonces la dependencia manda las confifuraciones al ruteador y crea todo el front
const router = AdminJSExpress.buildAuthenticatedRouter(adminjs,  {
  authenticate,
  cookieName: "AdminJS",
  cookiePassword: "Secret",
},
null,
{
  resave: true,
  saveUninitialized: true,
  secret: 'Secret',
  name: 'adminjs',
})

  
//Usamos el front generado por AdminJS
app.use(adminjs.options.rootPath, router);
//Se conecta a la base de datos
app.listen(4000);
console.log("server listen on port", 4000);