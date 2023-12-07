import React, { useEffect } from 'react'
import PageHead from '../component/PageHead'
import BreadHero from '../component/BreadHero'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import StepUlList from '../component/StepUlList'

const BaggagePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHead
                title="Política de equipaje de Copa Airlines | Flyinate"
                description="Desea navegar por la información sobre los servicios de equipaje de Copa, informarse sobre sus políticas, condiciones u otra información esencial en Flyinate."
                keywords="Copa Airlines servicio de equipaje, Copa Airlines política de equipaje, Copa Airlines equipaje"
            />

            <BreadHero title="Política de equipaje" linkhtml={<><ul className='breadcrumb text-white'>
                <li className="breadcrumb-item" > <Link href="/">Casa</Link> </li>
                <li className='breadcrumb-item active' aria-current="page">Política de equipaje</li> </ul></>} />

            <section className='full-w pyblock-80 full-w'>
                <div className='popular-destination blogaddalist details pscontent-none'>
                    <Container className='blog-inner-box2 content-container'>
                        <h1 className='mb-4 main-tpl text-center'>Política de equipaje de Copa Airlines <img src='/images/arrow-yellow.jpg' /></h1>
                        <div className='airportbaggage-wrp'>
                            <img src='/images/baggage-view.jpg' className='airport-baggage' alt='Política de equipaje de Copa Airlines' />
                        </div>
                        <div className='como-reservar'>
                            <div className='d-flex'>
                                <div>
                                    <img src='/images/baggage.png' alt='baggage' className='baggage-sobre' />
                                </div>
                                <p className="description flex-grow-1">
                                    Las personas que tienen su vuelo pronto y quieren saber sobre la política de Baggage de Copa Airlines. La política de <b>Copa Airlines Baggage</b> es muy amigable pero depende de su vuelo tambien en el que están volando. Hay diferentes tipos de políticas que están mencionado en el abajo y pueden leerlos.
                                </p>
                            </div>

                            <hr className='equipaje'></hr>

                            <StepUlList
                                listItem={[
                                    'La política de equipaje para llevar tiene 2 cosas uno es objetos personales en esa política la persona puede llevar 1 cosa con por él gratis y segundo es una persona puede llevar con él eso tambien por el gratis pero el peso tiene que ser menos de 10 kilogramos.',
                                    'La otra política es equipaje facturado en esta política la gente puede llevar 23 kilogramos y la dimensión de la maleta es 158 centímetro de total incluyendo longitud y anchura. La gente que lleva más de 23 kilogramos en su maleta tiene que pagar extra para llevar con él en el avión.'
                                ]}
                            /> 
                        </div>


                    </Container>
                </div>
            </section>

        </>
    )
}

export default BaggagePolicy