import React, { useEffect } from 'react'
import PageHead from '../component/PageHead'
import BreadHero from '../component/BreadHero'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import StepUlList from '../component/StepUlList'
import FaqsBlock from '../component/FaqsBlock'

const Cancelacion = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHead
                title="Flyinate | Cancelación"
                description=""
                keywords=""
            />

            <BreadHero title="Cancelación" linkhtml={<><ul className='breadcrumb text-white'>
                <li className="breadcrumb-item" > <Link href="/">Casa</Link> </li>
                <li className='breadcrumb-item active' aria-current="page">Cancelación</li> </ul></>} />

            <section className='full-w pyblock-80 full-w'>
                <div className='popular-destination blogaddalist details pscontent-none'>
                    <Container className='blog-inner-box2 content-container'>
                        <h1 className='mb-4 main-tpl text-center'>Cancelación  <img src='/images/arrow-yellow.jpg' /></h1>
                        <div className='airportbaggage-wrp'>
                            <img src='/images/cancellation-policy.jpg' className='airport-baggage' alt='Copa Airlines Baggage Policy' />
                        </div>


                        <div className='cancelar-mt-5'>
                            <div className='como-reservar ls'>
                                <span className="resvtitle-1 de">01</span>
                                <h3 className='como-un-title kl'>La Política de cancelar un vuelo de Copa Airlines</h3>
                                <StepUlList
                                    listItem={[
                                        <>Según la <b>política de cancelar de Copa Airlines</b>, puede cancelar su vuelo en las 24 horas anteriores a la salida del vuelo sin cargo alguno.</>,
                                        <>Si cancela después de 24 horas, tendrá que pagar la tasa de cancelación, impuestos incluidos.</>,
                                        <>En caso, Copa Airlines cancela el vuelo por cualquier motivo, no habrá cargo alguno.</>,
                                        <>Si algún pasajero tiene problemas médicos y alguna razón de muerte, el vuelo puede ser cancelado.</>,
                                        <>Si ha comprado el vuelo a través de una agencia de viajes, puedes contactar con la agencia de viajes para cancelar el vuelo.</>
                                    ]}
                                />
                            </div>

                            <div className='como-reservar ls cancelar-mt-5'>
                                <span className="resvtitle-1 de">02</span>
                                <h3 className='como-un-title'>Normas de reembolso un vuelo de Copa Airlines</h3>
                                <p className='description'>Estas son algunas de las <b>políticas de reembolso de Copa Airlines</b> en las que podrá obtener un reembolso después de cancelar su vuelo.</p>
                                <StepUlList
                                    listItem={[
                                        'Recibirás un reembolso completo de Copa Airlines si cancela su vuelo dentro de las 24 horas anteriores a su vuelo de salida.',
                                        'Si has comprado boletos reembolsables y tiene boletos sin usar y desea cancelar el vuelo, podrá obtener un reembolso.',
                                        'Copa Airlines permite reembolsos en caso de que la aerolínea cancele el vuelo por problemas técnicos o meteorológicos.',
                                        'Tiene que llenar el formulario de reembolso, si compró boletos avion Copa Airlines en línea, en el aeropuerto, a través de la oficina de llamadas y ventas.'
                                    ]}
                                />
                            </div>


                            <div className='como-reservar ls cancelar-mt-5'>
                                <span className="resvtitle-1 de">03</span>
                                <h3 className='como-un-title'>La política de mascoteca de Copa Airlines</h3>
                                <p className='description'>Si decidas viajar en Copa Airlines con su mascota, por lo que debe saber acerca de la política de mascotas antes de viajar. </p>
                                <StepUlList
                                    listItem={[
                                        'Copa Airlines sólo permite perros y gatos pequeños en cabina.',
                                        'Si viaja con su mascota, ésta debe ser inodora, no mostrar signos de comportamiento agresivo y no requerir asistencia constante durante todo el vuelo.',
                                        'La jaula debe estar limpia, ventilada, impermeable y evitar que sobresalga cualquier parte del cuerpo de la mascota.',
                                        'La jaula debe tener unas dimensiones máximas de 13*17*10 pulgadas.',
                                        'El pasajero puede alimentar a su mascota mientras permanezca dentro de la jaula. '
                                    ]}
                                />
                            </div>
                        </div>


                    </Container>
                </div>
            </section>


            <FaqsBlock
                subtitle={`Obtener información`}
                titleOne={`Frecuentes`}
                titleTwo={`Preguntas`}
                FaqLists={[
                    {
                        'title': 'When will you fly from Panama to Nassau,Bahamas ?',
                        'content': 'According to the Copa Airlines destinations guide section, flights from Panama to Nassau should start from January 7, 2021. The detailed information about the flight deals is available at destinationsguide.copaair.com/en/flights-from-panama-to-nassau.'
                    },
                    {
                        'title': 'How do I create an account to get Copa miles?',
                        'content': 'As stated at copaair.com, to join ConnectMiles you should create an account having providing personal information on the company website. To earn miles, just provide your ConnectMiles number when booking flights. When you check in for your flight, confirm that your ConnectMiles number appears on your boarding pass, and make sure that the name on your boarding pass matches the name associated with your ConnectMiles account.'
                    },
                    {
                        'title': 'Hello, I have question. May I ask when we get to Panama?',
                        'content': 'Because our flight was canceled. Date flight 17.3.2020 number CM 505 Thank you for answer.'
                    },
                    {
                        'title': 'Can I modify my flight tickets after booking?',
                        'content': 'Yes, Alitalia allows you to select and reserve your seat during booking or afterwards through the My Bookings section of their website There may be an additional fee for choosing certain seats.'
                    },
                    {
                        'title': 'How can I change my flight reservation with Copa Airlines?',
                        'content': 'You can change or modify your reservation with Copa Airlines online. To do so, log in to your official website, enter your booking number and last name, and select “Manage My Booking”. From there, you can select the “Change Flight” option to modify your itinerary as needed.'
                    }
                ]}
            />

        </>
    )
}

export default Cancelacion