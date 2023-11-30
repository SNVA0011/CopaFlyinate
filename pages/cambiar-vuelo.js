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
                title="Flyinate | Cambiar vuelo"
                description=""
                keywords=""
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
                                <span className="resvtitle-1 de">01</span>
                                <h3 className='como-un-title kl'>¿Cómo cambiar un vuelo a Copa Airlines?</h3>
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
                                <span className="resvtitle-1 de">02</span>
                                <h3 className='como-un-title'>¿Cuánto cuesta un cambio de vuelo en Copa Airlines? </h3>
                                <p className='description'>Copa Airlines cobrará por el cambio de vuelo, según su política y dependiendo del tipo de tarifa. Sin embargo, Copa Airlines cobrará un cargo por cambio de aproximadamente US$120 para vuelos nacionales y US$140 para vuelos internacionales.</p>
                            </div>


                            <div className='como-reservar ls cancelar-mt-5'>
                                <span className="resvtitle-1 de">03</span>
                                <h3 className='como-un-title'>¿Cómo cancelar un vuelo en Copa Airlines?</h3>
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
                                <span className="resvtitle-1 de">04</span>
                                <h3 className='como-un-title'>¿Cómo obtener un reembolso de Copa Airlines?</h3>
                                <p className='description'>Si usted ha comprado el vuelo de Copa Airlines unos días antes y ahora no quiere viajar debido a algunas razones. Entonces usted puede cancelar la lucha <b>y obtener un reembolso de Copa Airlines</b> en la llamada. Para conectar con el equipo de servicio al cliente de la Copa Airlines, y hablar con el asesor en este número <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> para solicitar un reembolso. Después de cancelar el vuelo obtendrá el reembolso dentro de 7,8 días hábiles en el modo de pago original.</p>

                                <h4 className='como-un-vuelo'>¿Qué pasa si no elijo asiento en un vuelo de Copa? </h4>
                                <p>Si no puede seleccionar su asiento durante la reservación, puede <b>seleccionar de asiento de Copa Airlines</b> a través de “gestionar mi reserva”. Si no puede seleccionar su asiento, Copa Airlines le asignará automáticamente un asiento al azar.</p>


                                <h4 className='como-un-vuelo'>El proceso de seleccionar de asiento en Copa Airlines</h4>
                                <StepUlList
                                    listItem={[
                                        'Puede ingresar al sitio de Copa Airlines.',
                                        'Entonces, puedes hacer clic en gestiona mi reserva.',
                                        'Después de eso, escriba los detalles en dos columnas.',
                                        'Ahora puede ver la información del vuelo en la página siguiente.',
                                        'Tienes que hacer clic en selección de asiento y elegir tu asiento.'
                                    ]}
                                />


                                <h4 className='como-un-vuelo pt-3'>¿Cuánto cuesta cambiar la fecha de un vuelo en Copa? </h4>
                                <p>Copa Airlines el coste por el cambio de vuelo de acuerdo con los boletos de vuelo de los pasajeros y también de acuerdo con la política de cambio de vuelo. Si cambia el vuelo dentro de las 24 horas anteriores a la salida, la aerolínea no cobrará ningún cargo. Después de 24 horas antes del vuelo de salida, <b>cambiar el costo en Copa Airlines</b> pueden ser de $120 para vuelos domésticos y $140 para vuelos internacionales.</p>

                                <h4 className='como-un-vuelo pt-3'>¿Todas sus tarifas aéreas tienen cargos por cambio o cancelación?</h4>
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

export default CambiarVuelo