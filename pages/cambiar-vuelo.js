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
                    }
                ]}
            />

        </>
    )
}

export default CambiarVuelo