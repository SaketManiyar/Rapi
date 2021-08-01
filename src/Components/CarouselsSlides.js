import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import food from "../images/food.jpg";
import movies from "../images/movies.jfif";
import weather from "../images/weather.jpg";

export default function CarouselsSlides() {
    return (
      <div className="caraousel">
        <Carousel>
          <Carousel.Item>
            <img className="caraousel" src={movies} alt="Second slide" />

            <Carousel.Caption>
              <h1>It is only about Movies...</h1>
              <h5>
                ...because when we watch a film, we're not just being
                entertained: We're also admiring something beautiful; learning
                about the world and ourselves; connecting with communities; and
                contributing to positive social change.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="caraousel" src={food} alt="First slide" />
            <Carousel.Caption>
              <h1>It is only about Food...</h1>
              <h5>
                ...because a food is something that provides nutrients.
                Nutrients are substances that provide: energy for activity,
                growth, and all functions of the body such as breathing,
                digesting food, and keeping warm; materials for the growth and
                repair of the body, and for keeping the immune system healthy.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="caraousel" src={weather} alt="Third slide" />
            <Carousel.Caption>
              <h1>It is only about Weather...</h1>
              <h5>
                ...because it will affect people around the world. Rising global
                temperatures are expected to raise sea levels, and change
                precipitation and other local climate conditions. Changing
                regional climate could alter forests, crop yields, and water
                supplies.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}
