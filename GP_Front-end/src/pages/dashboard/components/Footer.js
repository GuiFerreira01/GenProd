import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './navbar.css'




function Footer() {
    return (
        <div>
            <footer>
                <div class="color-footer bg-dark text-center p-4">
                    © 2022 Copyright: 
                    <a class="text-reset fw-bold" href="https://www.linkedin.com/in/guilherme--ferreira/" target="_blank">Guilherme Da Silva Ferreira</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
