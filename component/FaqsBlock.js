import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';


const FaqsBlock = ({ subtitle, titleOne, titleTwo, FaqLists }) => {
    return (
        <section className='faqs-blg full-w pyblock-80 full-w'>
            <Container>

                <Row className='como-reservar'>


                    <Col col={12} lg={5} xl={5} className='text-center mt-0 mt-lg-3'>
                        <div className="cos-tp">
                            <img src="/images/faqs-plane.png" alt="Frequently Asked Questions" />
                        </div>
                    </Col>

                    <Col col={12} lg={7} xl={7} className='pl-50'>
                        <div className="top-title get-inf-amet">
                            <p className='mb-2 gtinfo'>{subtitle} <img src="/images/arrow-yellow-trans.png"></img></p>
                            <h2>{titleOne} <span>{titleTwo}</span></h2>
                        </div>

                        {FaqLists && <Accordion defaultActiveKey={0} className='siteaccordian'>
                            {FaqLists.map((item, index) => {
                                return (
                                    <Accordion.Item eventKey={index} key={index}>
                                        <Accordion.Header>
                                            {item.title} <i className="bi bi-plus-lg"></i> <i className="bi bi-dash-lg"></i>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {item.content}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })}

                        </Accordion>}


                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default FaqsBlock

