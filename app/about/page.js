'use client';
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function About() {

  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   async function getUsers() {
  //     const usersData = await fetch('https://jsonplaceholder.typicode.com/users');
  //     setUsers(await usersData.json())
  //   }
  //   getUsers();
  // }, [])
  return (

    <>
      <div className="container">
        <h2> About Us</h2>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <div className="row mt-4">
          <h4> Our Dedicated Employee's </h4>
          <div className="col-3">
            <ol>
              <li> <b>Employee Name </b> </li>
            </ol>
          </div>
          <div className="col-9">
            <ul>
            <li> <b>Employee Email </b> </li>
            </ul>
          </div>
        </div>

      </div>


    </>
  );
}
