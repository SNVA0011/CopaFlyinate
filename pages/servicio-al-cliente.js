import React, { useEffect } from 'react'
import PageHead from '../component/PageHead'
import BreadHero from '../component/BreadHero'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import StepUlList from '../component/StepUlList'
import { ListEmailcopa, ListSalesNumber, ListTollfree } from '../utils/static'

const ServicioAlcliente = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <PageHead
                title="Servicio al Cliente Copa Airlines | Flyinate"
                description="Flyinate te facilita la información para ponerte en contacto con el servicio de atención al cliente de Copa Airlines a través de diferentes formularios."
                keywords="Servicio de atención al cliente de Copa Airlines, número de teléfono de Copa Airlines, contactar con Copa Airlines, llamar a Copa Airlines, número de contacto de Copa Airlines"
            />


            <BreadHero title="Servicio al Cliente" linkhtml={<><ul className='breadcrumb text-white'>
                <li className="breadcrumb-item" > <Link href="/">Casa</Link> </li>
                <li className='breadcrumb-item active' aria-current="page">Servicio al Cliente</li> </ul></>} />

            <section className='full-w pyblock-80 full-w'>
                <div className='popular-destination blogaddalist details pscontent-none'>
                    <Container className='blog-inner-box2 content-container'>
                        <h1 className='mb-4 main-tpl text-center'>Servicio al Cliente <img src='/images/arrow-yellow.jpg' /></h1>
                        <div className='airportbaggage-wrp'>
                            <img src='/images/customer-service.jpg' className='airport-baggage' alt='Servicio al Cliente' />
                        </div>


                        <div className='quieren-block'>
                            <h3 class="como-un-title kl mt-0">Números de teléfono y correos electrónicos de Copa Airlines</h3>

                            <div className='vuelo-wrap row'> 
                                <div className='vuelo-wcol'>
                                    <h4 class="como-un-vuelo mb-ops"> 1.) Correo electrónico de Copa Airlines: <img src="/images/arrow-yellow.jpg" className='call-arrow'></img></h4>
                                    {ListEmailcopa && <ul className='steps-listcall p-0 d-flex flex-wrap'>
                                        {ListEmailcopa.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={`mailto:${item.number}`} target='_blank'>
                                                        <a className='font-weight-semibold'>
                                                            <img src="/images/email.png" className='email-is' />
                                                            <span className="flex-grow-1">
                                                                {item.title}
                                                            </span>
                                                            <b>{item.city}</b>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>}
                                </div>

                                <div className='vuelo-wcol'> 
                                    <h4 class="como-un-vuelo mb-ops"> 2.) Número gratuito: <img src="/images/arrow-yellow.jpg" className='call-arrow'></img></h4>
                                    {ListTollfree && <ul className='steps-listcall p-0 d-flex flex-wrap'>
                                        {ListTollfree.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={`tel:${item.number}`} target='_blank'>
                                                        <a className='font-weight-semibold'>
                                                            <img src="https://flaglog.com/codes/standardized-rectangle-120px/US.png" />
                                                            <span className="flex-grow-1">
                                                                {item.number}
                                                            </span>
                                                            <b>{item.city}</b>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>}
                                </div>

                            </div>


                            <h4 class="como-un-vuelo mb-ops pt-3"> 3.) Ventas/Reservas: <img src="/images/arrow-yellow.jpg" className='call-arrow'></img></h4>
                            {ListSalesNumber && <ul className='steps-listcall p-0 d-flex flex-wrap'>
                                {ListSalesNumber.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={`tel:${item.number}`} target='_blank'>
                                                <a className='font-weight-semibold'>
                                                    <img src={`https://flaglog.com/codes/standardized-rectangle-120px/${item.code}.png`} />
                                                    <span className="flex-grow-1">
                                                        {item.number}
                                                    </span>
                                                    <b>{item.city}</b>
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>}


                        </div>


                        <div className='como-reservar ls'>
                            <h3 className='como-un-title kl'>¿Cómo llamar al número de teléfono de Copa Airlines? </h3>
                            <p>
                                La mayoría de los pasajeros que han reservado los billetes de avión de Copa Airlines y se enfrentan a tantas dificultades en su vuelo.
                                Pero no son capaces de deshacerse de, en ese caso, los pasajeros quieren ponerse en contacto con Copa Airlines para resolver los problemas de vuelo.
                                Así que simplemente puede ponerse en contacto con el número de teléfono de copa Airlines <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> y se puede conectar con el consultor para resolver las dudas de inmediato.
                            </p>


                            <h4 className='como-un-vuelo pt-3'>¿Cómo contactar con el servicio de asistencia de Copa Airlines por correo electrónico? </h4>
                            <p>
                                Copa Airlines ofrece la opción de presentar una queja, hacer una sugerencia,
                                escribir un comentario o cualquier otra inquietud con respecto al vuelo a
                                través del correo electrónico. Usted puede simplemente escribir un correo
                                electrónico y <strong>comuníquese con  Copa Airlines </strong>
                                a <a rel="noopener" href="mailto:cfdimexico@copaair.com" target="_blank" className='font-weight-bold text-decoration-underline'>cfdimexico@copaair.com</a>.
                                Después de enviar un correo electrónico obtendrá la respuesta dentro de una
                                hora o puede ser más de 48 horas.
                            </p>

                            <h4 className='como-un-vuelo pt-3'>Cómo ponerse en contacto con una persona en vivo de Copa Airlines?</h4>
                            <p className='description'>Para conectar con el ejecutivo al cliente de la Copa Airlines a través de la llamada telefónica. Si usted tiene cualquier tipo de duda o quiere saber acerca de la información de vuelo y obtener la solución, puede llamar al <b>número de Copa Airlines</b> en <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> y luego puede seguir el ivr .</p>

                            <StepUlList
                                listItem={[
                                    'Puede elegir el botón 1 para cambiar la reserva.',
                                    'Para conocer el estado del vuelo elija el botón 2.',
                                    'Para cambiar la reserva o el vuelo, pulse el botón 3.',
                                    'Para hablar con el asesor pulse el botón 6'
                                ]}
                            />
                        </div>

                    </Container>
                </div>
            </section>




        </>
    )
}

export default ServicioAlcliente