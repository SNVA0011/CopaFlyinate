import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "next/image"


export default function Enginebox(props) {
  return (
    <div className={'enginebanner_sctn full-w ' + (props.smallbanner ? props.smallbanner : '')}>
      <Container>
        <Row className='minh'>
          <Col xs={12} xl={9} className='align-self-center'>
            <div className="enginebox">
              <div className='where-doyou'>
                <h1><span className='d-block d-sm-inline-block d-xl-block'>Donde haría</span> ¿Te gusta ir? <i className="bi bi-airplane-fill"></i></h1>
                <p>Descubre tu próxima gran aventura</p>
              </div>
              <form className='where-doyou-form'>
                <ul className="row g-3 align-items-center">
                  <li className="col-md-6 col-12 mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="Desde la ciudad o aeropuerto" />
                  </li>
                  <li className="col-md-6 col-12 mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="A ciudad o aeropuerto" />
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3 datepickercity-col">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-calendar2-minus"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control datepickercity checkin"
                        placeholder="Registrarse"
                      />
                    </div>
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3 datepickercity-col">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-calendar2-minus"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control datepickercity checkout"
                        placeholder="Verificar"
                      />
                    </div>
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3">
                    <select
                      name="Adults"
                      required=""
                      className="form-control nice-selectround wide"
                    >
                      <option value="">Adultos</option>
                      <option value={1}>1 Adulto</option>
                      <option value={2}>2 Adulto</option>
                      <option value={3}>3 Adulto</option>
                    </select>
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3">
                    <select
                      name="Childrens"
                      required=""
                      className="form-control nice-selectround wide">
                      <option value="">Para niños</option>
                      <option value={1}>1 Niños</option>
                      <option value={2}>2 Niños</option>
                      <option value={3}>3 Niños</option>
                    </select>
                  </li>
                  <li className="col-xl col-12 mb-3">
                    <div className="avail-thefform">
                      <button type="submit" className="btn btn-site btn-block ripple-effbtn">
                        <span>Reservar ahora</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
          </Col>
          <Col xs={12} xl={3} className='align-self-end'>
            <img src='/images/travelby-box.png' className='travelby-box' alt='Donde haría ¿Te gusta ir?' />
          </Col>
        </Row>
      </Container>

      {props.smallbanner ?
        <div className="shape-bottom bigbanner-wgb">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="shape-fill" fill="#f6f9fe" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
          </svg>
        </div>
        : ''}

    </div>
  )
}
