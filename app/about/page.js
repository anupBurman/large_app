
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./page.module.css";

export default function About() {

  return (

    <>
      <div className="container">
        <h2> Main container </h2>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <div className="row">
          <div className="col-6">
            <p> First Block start from here </p>
          </div>
          <div className="col-6">
            <p> First Block start from here </p>
          </div>
        </div>        

      </div>


    </>
  );
}
