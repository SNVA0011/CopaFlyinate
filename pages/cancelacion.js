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
                title='Cancelación de vuelos de Copa Airlines | Flyinate'
                description='Obtenga toda la información sobre "Cómo cancelar su vuelo de Copa Airlines" y también lea sus últimas políticas de cancelación para proceder con el proceso.'
                keywords='Copa Airlines cancelación de vuelo, cancelar vuelo Copa Airlines, cancelar vuelo en Copa Airlines, Copa Airlines cancelar vuelo'
            />


            <BreadHero title="Cancelación" linkhtml={<><ul className='breadcrumb text-white'>
                <li className="breadcrumb-item" > <Link href="/">Casa</Link> </li>
                <li className='breadcrumb-item active' aria-current="page">Cancelación</li> </ul></>} />

            <section className='full-w pyblock-80 full-w'>
                <div className='popular-destination blogaddalist details pscontent-none'>
                    <Container className='blog-inner-box2 content-container'>
                        <h1 className='mb-4 main-tpl text-center'>Cancelación  <img src='/images/arrow-yellow.jpg' /></h1>
                        <div className='airportbaggage-wrp'>
                            <img src='/images/cancellation-policy.jpg' className='airport-baggage' alt='Política de equipaje de Copa Airlines' />
                        </div>


                        <div className='cancelar-mt-5'>
                            <div className='como-reservar ls'>
                                <span className="resvtitle-1 de">01</span>
                                <h2 className='como-un-title kl'>La Política de cancelar un vuelo de Copa Airlines</h2>
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
                                <h2 className='como-un-title'>Normas de reembolso un vuelo de Copa Airlines</h2>
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
                                <h2 className='como-un-title'>La política de mascoteca de Copa Airlines</h2>
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
                        'title': '¿Qué ocurre si Copa cancela mi vuelo?',
                        'content': 'Cuándo Copa Airlines cancela sus billetes de avión por causas naturales, como lluvias torrenciales o tormentas, Standard Airways cancela sus servicios de vuelo y no ofrece ningún reembolso a los pasajeros. Sin embargo, Copa Airlines permite opciones de cambio de reservación a los viajeros sin costo adicional para las mismas rutas y clase si el vuelo es cancelado por razones no controladas. Si Copa Airlines cancela su vuelo por razones controladas, como huelgas aéreas o fallos técnicos, Copa reembolsará íntegramente a los pasajeros.'
                    },
                    {
                        'title': '¿Tiene Copa Airlines una política de cancelación de 24 horas?',
                        'content': 'Sí, Copa Airlines tiene una política de cancelación definida de 24 horas, que le permite cancelar su vuelo dentro de las 24 horas de la reserva. Con esto, usted puede hacer uso de su reembolso total del boleto de Copa, sólo si ha hecho su cancelación dentro de las 24 horas. De lo contrario, después de 24 horas, tendrá que pagar los gastos de cancelación y la política de 24 horas de Copa Airlines no será aplicable.'
                    },
                    {
                        'title': '¿Ofrece Copa cancelación en 24 horas?',
                        'content': 'Sí, Copa Airlines ofrece 24 horas de cancelación para sus pasajeros. Si cancela su billete dentro de las 24 horas siguientes a la reserva, la compañía aérea no le cobrará gastos de cancelación. Si desea cancelar su billete de avión de Copa Airlines, sólo tiene que visitar el sitio web estándar de la compañía aérea. A continuación, haga clic en la sección "mis viajes" e introduzca el número de referencia de la reserva y el nombre del pasajero en la casilla correspondiente. Seleccione la opción "cancelar reserva", elija la forma de pago y abone los gastos de cancelación aplicables. Una vez completado el procedimiento, la compañía aérea le enviará por correo electrónico la confirmación de la cancelación del vuelo de Copa Airlines.'
                    },
                    {
                        'title': '¿Puedo cancelar mi vuelo de Copa Airlines dentro de 24 horas?',
                        'content': 'Sí, definitivamente usted puede cancelar su vuelo de Copa Airlines dentro de 24 horas convenientemente. Si cancela su vuelo con Copa Airlines dentro de las 24 horas de haber hecho la reservación, entonces tiene derecho a solicitar un reembolso completo sin pagar ningún cargo extra. Si usted tiene un boleto no reembolsable, entonces usted no es elegible para tomar el importe total pagado en el momento de la reserva de acuerdo con la política de Copa Airlines.'
                    },
                    {
                        'title': '¿Cómo cancelar mi vuelo de Copa Airlines?',
                        'content': 'Los viajeros pueden llamar al servicio de atención al cliente de Copa Airlines al +1-786-840 COPA (2672) sólo entre las 5 am y las 11 pm hora local todos los días y solicitar la cancelación de los billetes de avión de Copa Airlines. Sin embargo, también puede cancelar su vuelo de Copa Airlines a través del modo en línea. Sólo tiene que visitar el sitio web estándar de Copa Airlines y hacer clic en la pestaña "Mis viajes". A continuación, introduzca su código de reserva y su apellido para cancelar su vuelo. Realiza el pago de tu cancelación y recibirás el correo de confirmación en tu ID de correo electrónico registrado.'
                    },
                    {
                        'title': '¿Cuánto cuesta cancelar un vuelo con Copa Airlines?',
                        'content': 'Para cancelar las reservas de Copa Airlines, tiene que pagar el coste de cancelación de vuelo de Copa Airlines, que variará según el tiempo restante para la salida, las políticas de cancelación y su destino. Pero aún así, si usted está viajando a cualquier destino nacional, entonces usted tiene que pagar entre 180 USD a 300 USD y para reservas internacionales 300 USD a 400 USD.'
                    },
                    {
                        'title': '¿Cuál es el procedimiento para cancelar el vuelo en Copa Airlines?',
                        'content': 'Para cancelar el vuelo en Copa Airlines, puedes comunicarte con el representante de Copa Airlines llamando al +1-786-840 COPA (2672) o utilizar su sitio web oficial. Si quieres ir con el modo en línea y conocer el proceso, a continuación, vaya a través de la opción de reserva gestionada en el sitio web de Copa Airlines y proporcionar su apellido y número de PNR. Elige la opción de cancelar reserva y menciona el motivo de la cancelación. Una vez hecho esto, deberá abonar los gastos de cancelación del vuelo de Copa Airlines.'
                    }
                ]}
            />

        </>
    )
}

export default Cancelacion