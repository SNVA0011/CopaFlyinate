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
                        'title': '¿Cuándo volarás de Panamá a Nassau, Bahamas?',
                        'content': 'Según la sección de la guía de destinos de Copa Airlines, los vuelos de Panamá a Nassau deberán iniciar a partir del 7 de enero de 2021. La información detallada sobre las ofertas de vuelos está disponible en destinosguide.copaair.com/es/vuelos-de-panama-a-nassau .'
                    },
                    {
                        'title': '¿Cómo creo una cuenta para obtener millas Copa?',
                        'content': 'Como se indica en copaair.com, para unirse a ConnectMiles debe crear una cuenta proporcionando información personal en el sitio web de la empresa. Para ganar millas, simplemente proporcione su número ConnectMiles al reservar vuelos. Cuando realice el check-in para su vuelo, confirme que su número de ConnectMiles aparezca en su tarjeta de embarque y asegúrese de que el nombre en su tarjeta de embarque coincida con el nombre asociado con su cuenta ConnectMiles.'
                    },
                    {
                        'title': 'Hola, tengo una pregunta. ¿Puedo preguntar cuándo llegaremos a Panamá?',
                        'content': 'Porque nuestro vuelo fue cancelado. Fecha del vuelo 17.3.2020 número CM 505 Gracias por la respuesta.'
                    },
                    {
                        'title': '¿Puedo modificar mis billetes de avión después de la reserva?',
                        'content': 'Sí, Alitalia le permite seleccionar y reservar su asiento durante la reserva o posteriormente a través de la sección Mis reservas de su sitio web. Puede haber una tarifa adicional por elegir ciertos asientos.',
                    },
                    {
                        'title': '¿Cómo puedo cambiar mi reserva de vuelo con Copa Airlines?',
                        'content': 'Puedes cambiar o modificar tu reserva con Copa Airlines en línea. Para hacerlo, inicia sesión en tu sitio web oficial, ingresa tu número de reserva y apellido, y selecciona “Gestionar mi reserva”. Desde allí, puede seleccionar la opción "Cambiar vuelo" para modificar su itinerario según sea necesario.'
                    }
                ]}
            />

        </>
    )
}

export default Cancelacion