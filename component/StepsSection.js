import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const StepsSection = ({ swap = false, imgPath, imgTexture, subNumber, subtitle, title, description, ListItems, otherContent }) => {
    return (
        <div className={`como-reservar pyblock-80 pb-0 full-w`}>
            <img src="/images/shape-07.png" alt="shape" className={`right-shape ${swap ? 'right' : ''}`} />
            <Container>
                <Row className={`align-items-center ${swap ? 'flex-row-reverse' : ''}`}>
                    <Col col={12} lg={5} xl={5} className='text-center'>
                        <div className={`como-picimg ${imgTexture}`}>
                            <img src={imgPath} alt={`${subtitle} ${title}`} />
                        </div>
                    </Col>

                    <Col col={12} lg={7} xl={7} className='pl-50'>
                        <div className='top-title'>
                            <span className='resvtitle-1'>{subNumber}</span>
                         
                            <h2 className="title"><span className='resvtitle-2'>{subtitle}</span> {title}</h2>
                            <p className="description">
                                {description}
                            </p>
                        </div>
                        {ListItems && <ul className='steps-list'>
                            {ListItems.map((item, index) => {
                                const number = index + 1
                                return (
                                    <li className='d-flex flex-column flex-md-row' key={index}>
                                        <i className="bi bi-check-circle-fill ico"></i>
                                        <span>Step <b>{number}</b> </span>
                                        <div className="flex-grow-1">
                                        {item}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>}

                        {otherContent && <p className='mt-4'>{otherContent}</p>}

                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default StepsSection