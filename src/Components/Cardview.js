import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import {
  Fastfood,
  Hd,
  MusicVideo,
  Rowing,
  LocalLibrary,
  WbSunny,
} from "@material-ui/icons";

function Cardview() {
  const Data = [
    {
      img: Hd,
      title: "Movies",
      description: "Get all the movies according to the genre.",
    },
    {
      img: Rowing,
      title: "Tourism",
      description: "Get all the best tourist spots of the world.",
    },
    {
      img: Fastfood,
      title: "Food",
      description: "Get all the food recipes according to the item.",
    },
    {
      img: WbSunny,
      title: "Weather",
      description: "Get weather of cities all across the globe.",
    },
    {
      img: LocalLibrary,
      title: "Books",
      description: "Get all the books according to the genre.",
    },
    {
      img: MusicVideo,
      title: "Lyrics",
      description: "Get the lyrics of all your favourite songs.",
    },
  ];

  return (
    <>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {Data.map((data) => (
            <Col>
              <Card
                border="secondary"
                key={data.title}
                style={{ marginTop: 30, borderRadius: 15, borderWidth: 5 }}
              >
                <Card.Img
                  className="mx-auto my-2"
                  style={{ height: 70, width: 70 }}
                  as={data.img}
                  src={data.img}
                  alt="Card image"
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button href={data.title} variant="primary">
                    {data.title}
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Cardview;
