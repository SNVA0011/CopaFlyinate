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
                <div className='popular-destination blogaddalist details pscontent-none cancel'>
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

                                <h3 className='como-un-vuelo mb-2 mt-4'>¿Cómo cancelar un vuelo en Copa Airlines?</h3>
                                <p className='description'>Usted puede cancelar el vuelo de Copa Airlines a través de la llamada telefónica.  Basta con llamar a este número <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> y seguir el ivr para cancelar el vuelo fácilmente. </p>
                                <StepUlList
                                    listItem={[
                                        'Puede pulsar el botón 1 para hacer una nueva reserva.',
                                        'Pulsar el botón 2 para cambiar de vuelo',
                                        'Pulse el botón 3 para reservar un vuelo',
                                        'Puede obtener la información del vuelo elija el botón 5',
                                        'Para cancelar el vuelo pulse el botón 6',
                                        'Para hablar con el asistente elija el botón 8'
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
                                <h3 className='como-un-vuelo mb-2 mt-4'>¿Cómo obtener un reembolso de Copa Airlines?</h3>
                                <p className='description'>Si usted ha comprado el vuelo de Copa Airlines unos días antes y ahora no quiere viajar debido a algunas razones. Entonces usted puede cancelar la lucha <b>y obtener un reembolso de Copa Airlines</b> en la llamada. Para conectar con el equipo de servicio al cliente de la Copa Airlines, y hablar con el asesor en este número <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> para solicitar un reembolso. Después de cancelar el vuelo obtendrá el reembolso dentro de 7,8 días hábiles en el modo de pago original.</p>
                            </div>




                            <div className='como-reservar ls cancelar-mt-5'>
                                <span className="resvtitle-1 de">03</span>
                                <h2 className='como-un-title'>¿Qué hacer si Copa Airlines cancela mi vuelo?</h2>
                                <p className='description'>Si ha reservado un vuelo de Copa Airlines y planea volar con esta aerolínea, pero de repente, Copa canceló su vuelo debido a alguna circunstancia como problema técnico, condiciones climáticas, mandato gubernamental, etc. En este caso, Copa brinda la oportunidad de volver a reservar. su vuelo sin pagar ninguna tarifa. Aparte de esto, los pasajeros también pueden solicitar un reembolso completo. Por lo tanto, debe estar bien informado sobre los derechos de cancelación de vuelos de Copa Airlines y aprovechar los beneficios de Copa después de cancelar un vuelo.</p>
                                <p><b>Volver a reservar un vuelo de Copa Airlines:</b> si no desea cancelar su viaje, Copa ofrece la opción de volver a reservar un vuelo sin costo adicional. Luego, podrás devolver tu vuelo mediante los siguientes pasos;</p>
                                <StepUlList
                                    listItem={[
                                        'Navega por el sitio web de Copa Airlines.',
                                        'Busque la opción "servicio al cliente" y haga clic en ella.',
                                        'Haga clic en "solicitar un reembolso".',
                                        'Ingrese los detalles de la reserva, como el código de reserva y el apellido.',
                                        'Haga clic en "continuar" para el siguiente proceso.',
                                        'Completa el formulario con la información correcta paso a paso.',
                                        'Espere su reembolso que recibirá en el método de pago que realizó durante su reserva.'
                                    ]}
                                />

                                <p className='mt-4 pt-2'><b>Solicitar un reembolso:</b> Copa Airlines brinda una opción de reembolso a los pasajeros, si su viaje es cancelado por culpa de la aerolínea. Luego, podrá recibir un reembolso completo. Únicamente deberás seguir los pasos para realizar una solicitud de reembolso por sitio web;</p>
                                <StepUlList
                                    listItem={[
                                        'Visite el sitio web de Copa Airlines.',
                                        'Haga clic en "Mis viajes".',
                                        'Introduce los datos de tu reserva, código de referencia y apellido.',
                                        'Haz clic en "buscar tu reserva".',
                                        'Debajo de los detalles de la reserva, encuentre la opción "cambiar un vuelo".',
                                        'Modifica tu vuelo según tu preferencia y tu proceso estará completo.'
                                    ]}
                                />
                            </div>



                            <div className='como-reservar ls cancelar-mt-5'>
                                <span className="resvtitle-1 de">04</span>
                                <h2 className='como-un-title'>¿Cuál es la forma ideal de cancelar un vuelo de Copa?</h2>
                                <p className='description'>Si tienes el vuelo reservado con Copa Airlines y deseas cancelarlo por algún motivo inevitable, entonces puedes realizar la cancelación directamente a través del sitio web oficial de la aerolínea. Según la política de cancelación de Copa Airlines, si cancela el vuelo dentro de las 24 horas posteriores a la reserva del vuelo, no deberá pagar la tarifa. Si no tiene idea sobre el proceso de cancelación de vuelos de Copa Airlines, siga la siguiente guía para cancelar el vuelo:</p>
                                <StepUlList
                                    listItem={[
                                        'Abre el sitio web de Copa y haz clic en la sección "mis reservas" en la parte superior.',
                                        'Luego, debes ingresar el número de confirmación de la reserva y el apellido del pasajero y hacer clic en enviar.',
                                        'Ahora obtendrás la información sobre tu reserva, debes seleccionar la opción "cancelar el vuelo".',
                                        'Siga las instrucciones de cancelación en el sitio web de la aerolínea para completar el proceso.',
                                        'Si la página muestra la tarifa de cancelación, debes pagarla y completar el proceso.',
                                        'Una vez completado el proceso, recibirás el correo electrónico de confirmación de reserva de cancelación por parte de Copa Airlines.'
                                    ]}
                                />
                            </div>



                            <div className='como-reservar ls cancelar-mt-5'>
                                <span className="resvtitle-1 de">05</span>
                                <h2 className='como-un-title'>¿Cuáles son las políticas de cancelación de un vuelo en Copa?</h2>
                                <p className='description'>Existen varias políticas para cancelar un vuelo de Copa Airlines cuando en algunos casos tienes que pagar y en otros no. Estas políticas aquí mencionadas se consideran cuando cancela su vuelo.</p>
                                <StepUlList
                                    listItem={[
                                        'Si cancelas tu vuelo de Copa Airlines 24 horas antes de la salida, no tienes que pagar nada.',
                                        'Si cancelas tu vuelo 24 horas después de la salida, tendrás que pagar una cantidad de dinero.',
                                        'Si reservas un vuelo a algún destino con la ayuda de una agencia, para cancelar también tienes que hablar con la misma agencia.',
                                        'Cuando la aerolínea cancela tu reserva debido al cambio climático, huelga de pilotos o problema técnico, no tienes que gastar dinero.',
                                        'En situaciones en las que alguien muere, o tiene una emergencia médica, y cancelas tu vuelo, debes presentar prueba de ello para recibir una relajación y no tienes que pagar nada.'
                                    ]}
                                />
                            </div>


                            <div className='como-reservar ls cancelar-mt-5'>
                                <span className="resvtitle-1 de">06</span>
                                <h2 className='como-un-title'>¿Cuánto cuesta cancelar un vuelo con Copa Airlines?</h2>
                                <p className='description'>Es mejor que canceles tu vuelo de Copa Airlines antes de las 24 horas de la salida porque después de esto tienes que gastar dinero. Cuesta alrededor de $70-$200 más o menos, también depende de tus servicios o destino u origen cuando cancelas un vuelo. No cuesta nada cuando la aerolínea cancela su vuelo.</p>
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
                    },
                    {
                        "title": "¿Cómo obtener un reembolso de Copa después de la cancelación?",
                        "content": <>
                            <p>En caso de que una persona haya reservado recientemente un vuelo de Copa Airlines pero de repente necesite cancelar su boleto o su vuelo haya sido cancelado por la aerolínea por lo que desea obtener un reembolso de Copa Airlines en su cuenta bancaria. Entonces, en esta situación, los pasajeros pueden presentar el formulario de reembolso si han realizado la cancelación o pueden presentar un formulario de reclamo por la cancelación realizada por Copa Airlines.</p>
                            <p className='mb-1'><strong>Pasos para obtener un reembolso de Copa Airlines</strong></p>
                            <ul>
                                <li>Los viajeros pueden ingresar al sitio web de Copa Airlines.</li>
                                <li>Luego, vaya a la página "gestionar reserva" y siga los pasos indicados.</li>
                                <li>Una vez finalizado el procedimiento de cancelación, busque el formulario de solicitud de reembolso.</li>
                                <li>Ahora, abra el formulario y complete la reserva requerida y los datos personales.</li>
                                <li>Luego, toque el botón "enviar formulario".</li>
                                <li>Luego, reciba un mensaje de confirmación de Copa Airlines con respecto a su reembolso.</li>
                            </ul>
                        </>
                    },
                    {
                        "title": "¿Recibo un reembolso si cancelo mi vuelo de Copa?",
                        "content": "Sí, los pasajeros al momento de la cancelación del boleto con Copa Airlines tienen la opción de recibir reembolsos según la política porque si cancela el boleto de vuelo de Copa Airlines dentro de las 24 horas posteriores a la compra, sus reembolsos completos se revierten y, antes de esto, si opte por el reembolso por cancelación de Copa Airlines; después de 24 horas de la compra, primero pagará los cargos adicionales y luego obtendrá los reembolsos restantes como crédito de viaje."
                    },
                    {
                        "title": "¿Puedo solicitar a Copa un reembolso en línea?",
                        "content": "Ingresa al sitio oficial de Copa Airlines. Luego, seleccione el ícono “Mis viajes” para ingresar el número de boleto electrónico y el apellido para recuperar su boleto y la opción de boleto cancelado. Toque el botón de reembolso y deberá completar la solicitud de reembolso y describirla. Por último, seleccione el botón enviar y recibirá el correo electrónico de confirmación."
                    },
                    {
                        "title": "¿Cómo cancelar un vuelo de Copa Airlines sin pagar?",
                        "content": <>
                            <p>Copa Airlines es una aerolínea que se esfuerza por brindar servicios de calidad a sus pasajeros a un precio asequible. En caso de que hayas reservado un vuelo con Copa Airlines y quieras cancelarlo por algún motivo, puedes cancelarlo y, a cambio, recibirás un reembolso completo. Sin embargo, debe seguir algunas políticas y procedimientos para cancelar un vuelo de Copa Airlines sin pagar y recibir un reembolso completo.</p>
                            <p>Copa Airlines permite a los pasajeros cancelar sus vuelos sin pagar ninguna compensación, siempre que la reserva se haya realizado siete días antes de la fecha de salida. En caso de que la aerolínea cancele los billetes debido a malas condiciones climáticas, tienes derecho a recibir un reembolso completo.</p>
                        </>
                    },
                    {
                        "title": "¿Puedo cancelar un vuelo de Copa a través del número de teléfono?",
                        "content": "Sí, los titulares de boletos de Copa Airlines pueden cancelar sus boletos llamando. A menudo, los clientes, después de realizar una reserva de vuelo, se encuentran con ciertas condiciones o situaciones inevitables que les obligan a cancelar su reserva. Tienen plena libertad para comunicarse con el servicio de atención al cliente de Copa Airlines y tramitar la cancelación del vuelo. Se espera que los titulares de boletos marquen el número de contacto oficial de Copa Airlines +1-786-840-2672 y continúen con las instrucciones para comunicarse con un representante que se encarga de los problemas de cancelación. Ahora deben proporcionar la información del boleto y el motivo de la cancelación para completar el proceso. El representante de Copa Airlines buscará sus reservas y cancelará su reserva."
                    }
                ]}
            />




        </>
    )
}

export default Cancelacion