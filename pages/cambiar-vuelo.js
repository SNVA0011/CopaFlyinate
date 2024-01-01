import React, { useEffect } from 'react'
import PageHead from '../component/PageHead'
import BreadHero from '../component/BreadHero'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import StepUlList from '../component/StepUlList'
import FaqsBlock from '../component/FaqsBlock'

const CambiarVuelo = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageHead
                title="Copa Airlines Cambio de vuelo | Flyinate"
                description="¿Desea cambiar su vuelo con Copa Airlines? Obtenga información en Flyinate sobre el procedimiento de cambio de vuelo de Copa Airlines y las últimas políticas."
                keywords="Cambio de vuelo Copa Airlines, cambiar su vuelo Copa Airlines, cambiar su vuelo Copa Airlines con Flyinate"
            />


            <BreadHero title="Cambiar vuelo" linkhtml={<><ul className='breadcrumb text-white'>
                <li className="breadcrumb-item" > <Link href="/">Casa</Link> </li>
                <li className='breadcrumb-item active' aria-current="page">Cambiar vuelo</li> </ul></>} />

            <section className='full-w pyblock-80 full-w'>
                <div className='popular-destination blogaddalist details pscontent-none'>
                    <Container className='blog-inner-box2 content-container'>
                        <h1 className='mb-4 main-tpl text-center'>Cambiar vuelo <img src='/images/arrow-yellow.jpg' /></h1>
                        <div className='airportbaggage-wrp'>
                            <img src='/images/changeflight.jpg' className='airport-baggage' alt='Cambiar vuelo' />
                        </div>


                        <div className='cancelar-mt-5'>
                            <div className='como-reservar ls'>
                                <h2 className='como-un-title kl'>¿Cómo cambiar un vuelo a Copa Airlines?</h2>
                                <p className='description'>
                                    A veces los pasajeros han hecho una reserva con Copa Airline, pero por alguna razón no pueden viajar. En ese caso los pasajeros quieren <b>cambiar el vuelo de Copa Airlines</b>. Así que pueden ir a través de los pasos mencionados a continuación para cambiar el vuelo.
                                </p>
                                <StepUlList
                                    listItem={[
                                        <>Vaya a la página web de Copa Airlines.</>,
                                        <>Busque la sección de los muchos viajes.</>,
                                        <>A continuación, introduzca los datos de apellido y número de reserva.</>,
                                        <>En la página siguiente compruebe los detalles del vuelo. </>,
                                        <>Entonces, elija la opción de cambio de vuelo.</>,
                                        <>Modifica el vuelo a tu gusto.</>,
                                        <>Una vez realizado el proceso, recibirás un correo electrónico de confirmación.</>
                                    ]}
                                />
                            </div>


                            <div className='como-reservar ls cancelar-mt-5'>
                                <h2 className='como-un-title'>¿Cuánto cuesta un cambio de vuelo en Copa Airlines? </h2>
                                <p className='description'>Copa Airlines cobrará por el cambio de vuelo, según su política y dependiendo del tipo de tarifa. Sin embargo, Copa Airlines cobrará un cargo por cambio de aproximadamente US$120 para vuelos nacionales y US$140 para vuelos internacionales.</p>
                            </div>


                            <div className='como-reservar ls cancelar-mt-5'>
                                <h2 className='como-un-vuelo mb-2'>¿Qué pasa si no elijo asiento en un vuelo de Copa? </h2>
                                <p>Si no puede seleccionar su asiento durante la reservación, puede <b>seleccionar de asiento de Copa Airlines</b> a través de “gestionar mi reserva”. Si no puede seleccionar su asiento, Copa Airlines le asignará automáticamente un asiento al azar.</p>
                            </div>

                            <div className='como-reservar ls'>
                                <h3 className='como-un-vuelo mb-2'>El proceso de seleccionar de asiento en Copa Airlines</h3>
                                <StepUlList
                                    listItem={[
                                        'Puede ingresar al sitio de Copa Airlines.',
                                        'Entonces, puedes hacer clic en gestiona mi reserva.',
                                        'Después de eso, escriba los detalles en dos columnas.',
                                        'Ahora puede ver la información del vuelo en la página siguiente.',
                                        'Tienes que hacer clic en selección de asiento y elegir tu asiento.'
                                    ]}
                                />
                            </div>

                            <div className='como-reservar ls cancelar-mt-5'>
                                <h2 className='como-un-vuelo mb-2 pt-3'>¿Cuánto cuesta cambiar la fecha de un vuelo en Copa? </h2>
                                <p>Copa Airlines el coste por el cambio de vuelo de acuerdo con los boletos de vuelo de los pasajeros y también de acuerdo con la política de cambio de vuelo. Si cambia el vuelo dentro de las 24 horas anteriores a la salida, la aerolínea no cobrará ningún cargo. Después de 24 horas antes del vuelo de salida, <b>cambiar el costo en Copa Airlines</b> pueden ser de $120 para vuelos domésticos y $140 para vuelos internacionales.</p>
                            </div>

                            <div className='como-reservar ls cancelar-mt-5'>
                                <h2 className='como-un-vuelo mb-2 pt-3'>¿Todas sus tarifas aéreas tienen cargos por cambio o cancelación?</h2>
                                <p>Copa Airline tiene diferentes tipos de tarifas que permiten a sus pasajeros ajustarse a sus necesidades de viaje. Estas tarifas tienen diferentes cargos por cambio que pueden variar.</p>
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
                        'title': '¿Puede cambiar su vuelo con Copa Airlines?',
                        'content': 'Para cambiar su vuelo a Copa Airlines, en primer lugar, vaya a la página web oficial de la aerolínea y, a continuación, acceda a su cuenta. Pulse sobre la opción gestionar reserva para recuperar el billete, introduzca el código de reserva junto con el apellido del viajero. Elija la opción de reserva y pulse la opción de cambio de vuelo para realizar las modificaciones necesarias que se refieren a la fecha, la hora y la clase. A continuación, elija un nuevo billete de avión y pague los cargos necesarios para recibir un correo electrónico de confirmación del cambio de vuelo de Copa Airlines.'
                    },
                    {
                        'title': '¿Cuánto tiempo tengo para cambiar mi vuelo en Copa Airlines?',
                        'content': 'Si usted está planeando hacer cambios a su salida programada, puede dirigirse con el procedimiento de cambio de vuelo de Copa Airlines, pero también debe asegurarse de hacer los cambios por lo menos 2 a 3 horas antes de la salida. Para evitar pagar los cargos por cambio de vuelo de Copa, haga los cambios por lo menos 24 horas antes de su hora de vuelo. Copa Airlines no le cobrará el cargo por cambio de vuelo si usted ha hecho los cambios debido a una emergencia médica.'
                    },
                    {
                        'title': '¿Cómo cambiar un vuelo en Copa Airlines?',
                        'content': 'Si necesita cambiar un vuelo en Copa Airlines debido a alguna emergencia, primero debe navegar por el sitio web de Copa Airlines e ingresar a su cuenta. Luego, seleccione la pestaña "Vuelos" y elija el vuelo que desea cambiar. Desde allí, seleccione la opción "Cambiar vuelo" y siga el estímulo para elegir un nuevo vuelo y pagar cualquier diferencia en la tarifa. Revise los detalles adicionales del vuelo y confirme los cambios antes de finalizar la transacción. Además, la confirmación de cambio de vuelo de Copa Airlines la obtendrá en su dispositivo registrado.'
                    },
                    {
                        'title': '¿Cómo cambiar el vuelo de Copa Airlines por teléfono?',
                        'content': 'Usted puede cambiar el vuelo de Copa Airlines por teléfono, y para ello, debe marcar el número de teléfono de Copa Airlines +1-786-840 COPA (2672) donde se le asignará un agente.  Sin embargo, se establecerán algunas instrucciones; tales como, presione 0 para escoger su idioma regional, presione 2 para programar su vuelo, presione 4 para cancelar su boleto, presione 6 para asistencia en el check-in, presione 9 para hablar con un agente para cambiar un vuelo, presione # para otras opciones.',
                    },
                    {
                        'title': '¿Cuánto es la penalidad de Copa Airlines por cambio de vuelo?',
                        'content': <>
                            <p>Copa Airlines le permite cambiar su boleto de vuelo dentro de las 24 horas antes de la salida, evitar el pago de cargos y obtener el reembolso pronto. Pero usted tiene que pagar cargos como penalidad que viene bajo la política de cambio de vuelo, y usted está obligado a pagar la penalidad por cambio de vuelo de Copa Airlines de alrededor de $75 a $500 por pasajero. Este cargo se aplica tanto a los billetes de avión reembolsables como a los no reembolsables que adquiera en el sitio web de reservas de Delta Airlines.</p>
                            <p>Compruebe también el cargo que se puede aplicar a la fecha, hora y destino del vuelo, que variará en función de la tarifa del billete y del destino. Por lo tanto, si tiene billetes de vuelo nacionales e internacionales, pague la penalización por cambio de vuelo de Copa Airlines según corresponda. Para más detalles sobre la penalidad por cambio de vuelo en Copa Airlines, contacte a una persona en vivo para resolver su inquietud.</p>
                        </>
                    },
                    {
                        'title': '¿Cuál es la política de cambio de vuelo de 24 horas de Copa Airlines?',
                        'content': 'Según la política de cambio de vuelo en 24 horas de Copa Airlines, usted debe cambiar su vuelo dentro de las 24 horas siguientes a la reservación. Si alguien cambia el vuelo de Copa Airlines dentro de la fase de tiempo indicada, la aerolínea no impondrá ningún cargo adicional por la modificación del vuelo. Sin embargo, si la nueva reserva conlleva cargos más altos, sólo tendrá que pagar la diferencia de tarifa. Para cualquier otro tipo de ayuda, puede ponerse en contacto directamente con los funcionarios de Copa Airlines en su número de teléfono, +1-786-840 COPA (2672).'
                    },
                    {
                        "title": "¿Copa Airlines permite cambiar vuelos?",
                        "content": 'Generalmente, Copa permite opciones de cambio de vuelo con políticas específicas que son esenciales para los viajeros antes de la modificación de la fecha. Sin embargo, los pasajeros interesados podrán acudir con cambio de vuelo de Copa Airlines únicamente con trámites particulares. En primer lugar, los viajeros pueden acceder al sitio web estándar de Copa Airlines. Deben tocar la opción "Mi viaje" y completar algunos de los detalles relevantes, como el código de reserva/número de boleto electrónico y el apellido. Elija la nueva fecha de viaje según el plan y mantenga sin cambios otros detalles anteriores. Luego, pague algunas tarifas de procesamiento para opciones de cambio de vuelo exitosas, que dependen de las diferencias de tarifas. También recibirán una confirmación sobre el cambio de vuelo de Copa Airlines en su ID de correo electrónico registrado.'
                    },
                    {
                        "title": "¿Puedo cambiar el vuelo de Copa sin penalización?",
                        "content": "Sí, puedes cambiar tu vuelo de Copa Airlines sin penalidad. Según la aerolínea, cambiar tu vuelo dentro de las 24 horas siguientes a la reserva del vuelo será gratuito. Sin embargo, puedes pagar la tarifa por cambio de vuelo si cambias tu vuelo después de 24 horas. Para más detalles sobre cómo cambiar vuelos de Copa sin penalización, por favor hable con el servicio de atención al cliente de la aerolínea llamando al +1-786-840-2672 y obtenga información sin problemas."
                    },
                    {
                        "title": "¿Cuál es el procedimiento para llamar a Copa Airlines para cambio de vuelo?",
                        "content": "Si deseas cambiar tu vuelo de Copa Airlines, puedes llamar al representante de Copa Airlines a este número de teléfono +1-786-840-2672, escuchar la voz automatizada y esperar unos minutos. Después de eso, lo conectarán con el representante y le pedirá que cambie su vuelo, y el representante le pedirá algunos detalles, por favor proporciónenos. Cambiarán su vuelo de Copa Airlines y recibirá la confirmación del personal de la aerolínea lo antes posible en su dirección de correo electrónico registrada."
                    },
                    {
                        "title": "¿Puedo cambiar un vuelo en Copa después de reservar?",
                        "content": <>
                            <p>Los pasajeros pueden cambiar su vuelo de Copa Airlines después de reservar en línea o a través del servicio de atención al cliente. Copa Airlines brinda políticas flexibles para que el pasajero pueda realizar modificaciones en sus boletos en línea si hay un cambio en los horarios de los pasajeros. Los viajeros deben visitar el sitio web de la aerolínea para cambiar un vuelo en Copa después de realizar la reserva. Haga clic en “Mis viajes” e ingrese el número de confirmación y el apellido de su boleto de avión. Selecciona “Encuentra tu reserva” y edita los detalles del billete. Luego realice el pago, si es necesario, después de hacer clic en el botón Enviar.</p>
                            <p>Cuando los pasajeros tengan algún problema relacionado con el cambio de un vuelo en Copa Airlines después de la reserva, comuníquese con el servicio de atención al cliente de Copa Airlines marcando este número +1-786-840-2672 para obtener ayuda. La línea de ayuda está disponible las 24 horas para orientarlo sobre el cambio de vuelo de Copa Airlines.</p>
                        </>
                    },
                    {
                        "title": "¿Puedes cambiar la fecha de tu vuelo con Copa Airlines?",
                        "content": "Sí, Copa Airlines permite a sus clientes cambiar la fecha de vuelo de Copa Airlines porque saben que los pasajeros pueden enfrentar circunstancias desafortunadas en las que tengan que cambiar sus planes de viaje."
                    },
                    {
                        "title": "¿Cómo puedo cambiar la fecha de mi vuelo de Copa?",
                        "content": "Normalmente, cuando las personas hacen una reserva, necesitan visitar el aeropuerto y cambiar la fecha de su vuelo de Copa Airlines, lo cual les resulta bastante agitado. Si tienes un vuelo con Copa Airlines, entonces podrás cambiar la fecha de tu viaje fácilmente y sin problemas. Visita el sitio web oficial de Copa Airlines y accede al portal de gestión de reservas e ingresa tus credenciales de reserva. Después de ingresar al panel de administración de vuelos, seleccione su vuelo. Accede al calendario de vuelos y elige la fecha que prefieras. Luego, confirma tu fecha y paga la diferencia de tarifa, ahora estás listo para viajar según tu fecha cambiada con Copa."
                    }
                ]}
            />




        </>
    )
}

export default CambiarVuelo