import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';


const FaqsBlock = ({ subtitle, titleOne, titleTwo, FaqLists }) => {
    const FHalfArray = FaqLists.length / 2
    const LHalfArray = FHalfArray
    const TotalArray = FaqLists.length

    console.log('FHalfArray=', FHalfArray)
    console.log('LHalfArray=', LHalfArray)
    console.log('TotalArray=', TotalArray)

    return (
        <section className='faqs-blg full-w pyblock-80 full-w'>
            <Container>

            <div className='d-flex align-items-center'>
            <div className="cos-tp pr-3 d-none d-sm-block">
                            <img src="/images/baggage.png" alt="Frequently Asked Questions" />
                        </div>
                        
            <div className="top-title get-inf-amet flex-grow-1 m-0">
                            <p className='mb-1 gtinfo text-sm'>{subtitle} <img src="/images/arrow-yellow-trans.png" className='ml-1'  width={40}></img></p>
                            <h2>{titleOne} <span>{titleTwo}</span></h2>
                        </div> 
            </div>

          
                        
                        <Row className='como-reservar mt-4 mt-xl-5'>
                            <Col col={12} lg={6}>
                                {FaqLists && <Accordion className='siteaccordian'>
                                    {FaqLists.slice(0, FHalfArray).map((item, index) => {
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
                            
                            <Col col={12} lg={6} className='mt-3 mt-lg-0'>
                                {FaqLists && <Accordion className='siteaccordian'>
                                    {FaqLists.slice(LHalfArray, TotalArray).map((item, index) => {
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

