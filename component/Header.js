import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import Subheader from './Subheader';
import { useRouter } from 'next/router';



export default function Header() {
    const location = useRouter();

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        window.innerWidth < 1200 ? setExpanded(false) : ''
    }, [location.asPath]);

    return (
        <>
            <Navbar collapseOnSelect expanded={expanded} expand="xl" bg="white" variant="light" fixed="top" className='new_header_area flex-column'>
                <div className='w-100 d-none d-xl-block'>
                    <Subheader />
                </div>
                <div className='clearfix'></div>

                <Container className='navtop_2'>
                    <Link href="/" activeclassname="active">
                        <a className='navbar-brand'>
                            <img src='/images/logo.png' alt="Flyinate" width={211}></img>
                        </a>
                    </Link>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={`ml-2 order-3 ${expanded ? 'true' : 'false'}`} onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} />

                    <Navbar.Collapse id="responsive-navbar-nav" className='order-4 order-xl-1'>
                        <Nav className="ml-auto text-capitalize">
                            <Link href="/">
                                <a className={'border-first nav-link ' + (location.pathname === "/" ? 'active' : '')}><span>Casa</span></a></Link>
                            <Link href="/servicio-al-cliente">
                                <a className={'nav-link ' + (location.pathname === "/servicio-al-cliente" ? 'active' : '')}>
                                    <span>Servicio al Cliente</span>
                                </a>
                            </Link>
                            <Link href="/cambiar-vuelo">
                                <a className={'nav-link ' + (location.pathname === "/cambiar-vuelo" ? 'active' : '')}>
                                    <span>Cambiar vuelo</span>
                                </a>
                            </Link>
                            <Link href="/cancelacion">
                                <a className={'nav-link ' + (location.pathname === "/cancelacion" ? 'active' : '')}>
                                    <span>Cancelación</span>
                                </a>
                            </Link>
                            <Link href="/politica-de-equipaje">
                                <a className={'nav-link ' + (location.pathname === "/politica-de-equipaje" ? 'active' : '')}>
                                    <span>Política de equipaje</span>
                                </a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>






                </Container>
            </Navbar>
            <div className='new_header_area_empty full-w'></div>
        </>
    )
}








