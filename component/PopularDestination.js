import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from "next/image"


export default function PopularDestinations() {
  return (
   <>
    {/* PopularDestinations */}
    <div className='popular-destination full-w'>
                <Container>
                    <div className="top-title text-center">
                        <p>Listas de destinos</p>
                        <h2>
                            Popular <span>Destinos</span>
                        </h2>
                    </div>

                    <Row>
                        <Col xs={12} md={6} xl={3}> 
                                
                                <Link href="/">
                                <a className='image_area_partition'>
                                <Image src='/images/macchu.jpg' width={500} height={300}  alt='Machu Picchu' className='object-cover'></Image>

                                 <div className='wrapper'>
                                 <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                 </ul>
                                    <span>Machu Picchu</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <Link href="/">
                            <a className='image_area_partition'> 
                                <Image src='/images/island.jpg'  width={500} height={300}  alt='Galapagos Islands' className='object-cover'></Image>
                                <div className='wrapper'>
                                  <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                 </ul>
                                    <span>Galapagos Islands</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <Link href="/">
                            <a className='image_area_partition'> 
                                <Image src='/images/Cusco.jpg' width={500} height={300}  alt='Cusco' className='object-cover'></Image>
                                <div className='wrapper'>
                                  <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                 </ul>
                                    <span>Cusco</span>
                                </div>
                                </a>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} xl={3}>
                        
                            <Link href="/">
                            <a className='image_area_partition'> 
                                <Image src='/images/easter.jpg'width={500} height={300}  alt='Easter Island' className='object-cover'></Image>
                                <div className='wrapper'>
                                  <ul>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                    <li><i className="bi bi-star-fill"></i></li>
                                 </ul>
                                    <span>Easter Island</span>
                                </div>
                                </a>
                            </Link>
                        </Col> 
                    </Row>
                </Container>
            </div>
   </>
  )
}

 

