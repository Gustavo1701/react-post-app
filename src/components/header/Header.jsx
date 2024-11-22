import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { routes } from '../../routes/Routes'
import AutoCompleteInput from '../autocompleteInput/AutoCompleteInput'
import AutoCompletLogout from '../autocompleteInput/AutoCompleteLogout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode){
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }, [darkMode])

    return (
        <div>
            <Navbar className="bg-body-tertiary mb-3" bg={darkMode ? 'dark' : ''} data-bs-theme={darkMode ? "dark" : " " } >
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            alt=""
                            src="https://react-bootstrap.netlify.app/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/post">Post</Nav.Link>
                            <Nav.Link href="/sobre">Sobre</Nav.Link>
                            <Nav.Link href="/contato">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <AutoCompleteInput options={routes} />
                                </Col>
                                <Col xs="auto">
                                    <FontAwesomeIcon color={darkMode ? '#146ebe' : '#ffd43b'} icon={darkMode ? faMoon : faSun} onClick={toggleTheme} cursor={'pointer'} />
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>


                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {/* Signed in as: <a href="#login">Mark Otto</a> */}
                            <AutoCompletLogout />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
