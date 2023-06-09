//Echo por fFernando Arvizu Sotelo

/* eslint-disable react/jsx-no-comment-textnodes */

// Este componente se encarga de mostrar una lista de noticias obtenidas desde una API, utilizando el framework de React.
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"; // Se importa el componente Card de react-bootstrap
import axios from "axios"; // Se importa la biblioteca Axios para realizar solicitudes HTTP
import moment from "moment"; // Se importa la biblioteca Moment para trabajar con fechas
import "./News.css"; // Se importa el archivo CSS asociado a este componente

const News = () => {
  const [news, setNews] = useState([]); // Se inicializa el estado 'news' como una lista vacía

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/api/resources/News/actions/list") // Se realiza una solicitud GET a la API para obtener una lista de noticias
      .then((response) => {
        setNews(response.data.records); // Se actualiza el estado 'news' con la lista de noticias obtenidas de la API
      })
      .catch((error) => console.log(error.message)); // En caso de error, se muestra un mensaje en la consola del navegador
  }, []);

  return (
    <div className="news-container">

      {news?.map((record) => (
        <>
          <Card className="bg-dark text-white">
            <Card.Img src={record.params.imagen} alt={record.params.titulo} />
            <Card.ImgOverlay>
              <Card.Title>{record.params.titulo}</Card.Title>
              <Card.Text>{record.params.descripcion}</Card.Text>
              <Card.Text>
                Fecha del suceso :
                {moment(record.params.createdAt).format("MMM Do YYYY")}
              </Card.Text>
              <Card.Text>Autor :{record.params.autor}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </>
      ))}
    </div>
  );
};

export default News; // Se exporta para su uso en otra parte de la app
