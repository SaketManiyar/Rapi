import '../App.css';
import {Container} from 'react-bootstrap';

function About() {
  return (
    <div className="note">
      <Container>
        <h6>About the Project</h6>
        <p>
           Helps you to get list of all the listed movies, food recipes, weather of all cities, books of all categories and also your favourite songs. You can search the data which you want.
        </p>
      </Container>
    </div>
  );
}

export default About;
