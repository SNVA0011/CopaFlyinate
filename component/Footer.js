import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/link"
import Image from "next/image"


export default function Footer() {
  return (
    <>
      <footer className="footer-area full-w">
        <Container className="inner_container_1">
          <Row>
            <Col xs={12} xl={3}>
              <>
                <Link href="/" activeclassname="active" onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''}>
                  <a className='navbar-brand'>
                    <img src='/images/logo.png' width={180} alt="Flyinate"></img>
                  </a>
                </Link>

                <div className="mt-3">
                  <p className="m-0 footer_disclaimer_what">
                  En Flyinate lo entendemos perfectamente. Lo que necesitas y lo que tu corazón desea son dos cosas diferentes y, a veces, tienes que elegir entre estas dos. ¡Ya no! No tiene que conformarse con lo mundano en sus viajes de negocios; o lo mínimo si tienes poco presupuesto; desde las últimas ofertas hasta los viajes y viajes más baratos, lo ofrecemos todo.                  </p>
                </div>


                <p className="F_social_icon">
                  <a
                    className="d-inline-flex Ffacebook"
                    href="https://www.facebook.com/flyinate"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    className="d-inline-flex Ftwitter"
                    href="https://twitter.com/flyinate"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-twitter" />
                  </a>
                  <a
                    className="d-inline-flex Finstagram"
                    href="https://www.instagram.com/flyinate"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-instagram" />
                  </a>
                  <a
                    className="d-inline-flex Fpinterest"
                    href="https://www.pinterest.com/flyinate"
                    target="_blank"
                    rel="noreferrer">
                    <i className="bi bi-pinterest" />
                  </a>
                </p>
              </>
            </Col>
            <Col xs={12} md={6} lg={4} xl={3}>
              <h5 className="use-head">Enlaces rápidos</h5>
              <ul className="use-li">
                <li>
                  <Link href="/servicio-al-cliente">
                    <a className="ripple-effbtn d-inline-block"> <span> <i className="bi bi-arrow-right mr-2"></i> Servicio al Cliente</span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/cambiar-vuelo">
                    <a className="ripple-effbtn d-inline-block"> <span> <i className="bi bi-arrow-right mr-2"></i> Cambiar vuelo</span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/cancelacion">
                    <a className="ripple-effbtn d-inline-block"> <span> <i className="bi bi-arrow-right mr-2"></i> Cancelación</span></a>
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-equipaje">
                    <a className="ripple-effbtn d-inline-block"> <span> <i className="bi bi-arrow-right mr-2"></i> Política de equipaje</span></a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4} xl={3}>
              <h5 className="use-head">Conéctate con nosotros</h5>
              <ul className="use-li address">
                <li>
                  <p className="footer_address d-flex">
                    <span><i className="bi bi-geo-alt mr-1"></i></span>

                    <div className="flex-grow-1">
                      <span> DIRECCIÓN:</span> W Ray Rd, Chandler, AZ 85226, USA
                    </div>
                  </p>
                </li>
                <li>
                  <p className="footer_email d-flex">

                    <span><i className="bi bi-envelope mr-1"></i></span>

                    <div className="flex-grow-1">
                      <span>Correo electrónico:</span>
                      <a
                        href="mailto:support@flyinate.com"
                        className="d-inline-block"
                        target="_blank">
                        support@flyinate.com
                      </a>
                    </div>
                  </p>
                </li>


              </ul>
            </Col>

            <Col xs={12} md={6} lg={4} xl={3}>
              <div className="subscribe">
                <h3 className="use-head">Suscribir</h3>
                <form className="subscribe-form" id="myForm">
                  <InputGroup className="flex-column">
                    <FormControl
                      type="email"
                      className="subscribe w-100"
                      placeholder="Su dirección de correo electrónico"
                    />
                    <Button className="btn btn-site btn-block ripple-effbtn  w-100">
                      <span>Suscribir</span>
                    </Button>
                  </InputGroup>
                </form>
              </div>
              {/*subscribe*/}
            </Col>
          </Row>
        </Container>

        <div className="footer_logos_bottom">
          <Container className="inner_container_2">
            <Row className="align-items-center">
              <Col xs={12} md={5} className="mb-3 mb-md-0">
                <p className="m-0 footer_disclaimer text-center text-md-left">
                  © 2022 flyinate.com,teniendo su domicilio social en el estado
                   de USA ubicado en W Ray Rd en la ciudad de Chandler con Zip
                   Código 85226. Todos los derechos reservados.
                </p>
              </Col>
              <Col xs={12} md={7} className="text-center text-md-right">
                <p className="m-0 footer_logos">
                  <Image alt="logos" src="/images/card-logos-footer.png" width={470} height={34}></Image>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
