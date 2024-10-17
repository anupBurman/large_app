
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./page.module.css";


export default function Navbar() {

    return (
        <>
           
            <div className="container d-flex bg-dark px-0 py-2">
                <h5 className="px-2">  <Link href="/"> Home </Link>  </h5>
                <h5 className="px-2"> <Link href="/about"> About Us </Link>  </h5>
            </div>


        </>
    );
}
