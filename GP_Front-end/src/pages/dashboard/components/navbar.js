import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './navbar.css'




function Header(props) {

    const logOut = () => {

        localStorage.clear();
        window.location.href="http://localhost:3000/"
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='bg-dark'>
                <Navbar.Brand href="/home"><img className='logo bg-dark'  src='https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvGIpB9GnRfNwXs1M3EMoAJtliQqhfRq9fkz' alt='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='bg-dark' id="responsive-navbar-nav ">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link className='nav-link' to="/home">See Products</Link>
                        <Link className='nav-link' to="/seeMaterials">See Raw Mateiral</Link>
                        <Link className='nav-link' to="/saveproduct">Add Product</Link>
                        <Link className='nav-link' to="/savematerial">Add Mateiral</Link>
                    </Nav>
                    <a onClick={() => logOut()} ><img className='exit' alt='Exit' src='https://img.icons8.com/external-bearicons-blue-bearicons/344/external-login-call-to-action-bearicons-blue-bearicons-1.png' /></a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
