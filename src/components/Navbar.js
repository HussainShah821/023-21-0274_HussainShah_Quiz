import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-light text-dark">
            <Container>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red"
                    className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Nav.Link className={"text-dark"} href="#home">About</Nav.Link>
                    </li>
                    <li class="nav-item">
                        <Nav.Link className={"text-dark"} href="#link">Contact us</Nav.Link>
                    </li>
                    <li class="nav-item">
                        <Nav.Link className={"text-dark"} href="#link">TimeTable</Nav.Link>
                    </li>
                    <li class="nav-item">
                        <Nav.Link className={"text-dark"} href="#link">Live Location</Nav.Link>
                    </li>
                    <li class="nav-item">
                        <Button variant="danger">Danger</Button>{' '}
                    </li>
                </ul>






            </Container>
        </Navbar>
    );
}

export default MyNavbar;