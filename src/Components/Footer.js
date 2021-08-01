import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Card bg="warning">
        <Card.Footer>
          Made with ❤{" "}
          <Link
            to={{
              pathname:
                "https://www.youtube.com/watch?v=N8hx-R7zLe0&ab_channel=bonsaiilabs",
            }}
            target="_blank"
          >
            SM
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};
