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
                            <h2 class="como-un-title kl mt-0">Números de teléfono y correos electrónicos de Copa Airlines</h2>

                            <div className='vuelo-wrap row'>

                                <div className='vuelo-wcol'>
                                    <h3 class="como-un-vuelo mb-ops d-flex align-items-center"> 1.) Número gratuito: <img src="/images/arrow-yellow.jpg" className='call-arrow'></img></h3>
                                    {ListTollfree && <ul className='steps-listcall p-0 d-flex flex-wrap'>
                                        {ListTollfree.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={`tel:${item.number}`} target='_blank'>
                                                        <a className='font-weight-semibold'>
                                                            <img src={`https://flaglog.com/codes/standardized-rectangle-120px/${item.code}.png`} />
                                                            <span className="flex-grow-1">
                                                                {item.number}
                                                            </span>
                                                            <b><i className="bi bi-telephone mr-2"></i> {item.city}</b>
                                                        </a>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>}
                                </div>

                            </div>


                            <h3 class="como-un-vuelo mb-ops d-flex align-items-center pt-3"> 2.) Ventas/Reservas: <img src="/images/arrow-yellow.jpg" className='call-arrow'></img></h3>
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
                                                    <b><i className="bi bi-telephone mr-2"></i> {item.city}</b>
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>}


                        </div>


                        <div className='como-reservar ls mt-5'>
                            <h2 className='como-un-title kl'>¿Cómo llamar al número de teléfono de Copa Airlines? </h2>
                            <p>
                                La mayoría de los pasajeros que han reservado los billetes de avión de Copa Airlines y se enfrentan a tantas dificultades en su vuelo.
                                Pero no son capaces de deshacerse de, en ese caso, los pasajeros quieren ponerse en contacto con Copa Airlines para resolver los problemas de vuelo.
                                Así que simplemente puede ponerse en contacto con el número de teléfono de copa Airlines <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> y se puede conectar con el consultor para resolver las dudas de inmediato.
                            </p>


                            <h2 className='como-un-vuelo pt-3'>¿Cómo contactar con el servicio de asistencia de Copa Airlines por correo electrónico? </h2>
                            <p>
                                Copa Airlines ofrece la opción de presentar una queja, hacer una sugerencia,
                                escribir un comentario o cualquier otra inquietud con respecto al vuelo a
                                través del correo electrónico. Usted puede simplemente escribir un correo
                                electrónico y <strong>comuníquese con  Copa Airlines </strong>
                                a <a rel="noopener" href="mailto:cfdimexico@copaair.com" target="_blank" className='font-weight-bold text-decoration-underline'>cfdimexico@copaair.com</a>.
                                Después de enviar un correo electrónico obtendrá la respuesta dentro de una
                                hora o puede ser más de 48 horas.
                            </p>

                            <h2 className='como-un-vuelo pt-3'>Cómo ponerse en contacto con una persona en vivo de Copa Airlines?</h2>
                            <p className='description'>Para conectar con el ejecutivo al cliente de la Copa Airlines a través de la llamada telefónica. Si usted tiene cualquier tipo de duda o quiere saber acerca de la información de vuelo y obtener la solución, puede llamar al <b>número de Copa Airlines</b> en <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> y luego puede seguir el ivr .</p>

                            <StepUlList
                                listItem={[
                                    'Puede elegir el botón 1 para cambiar la reserva.',
                                    'Para conocer el estado del vuelo elija el botón 2.',
                                    'Para cambiar la reserva o el vuelo, pulse el botón 3.',
                                    'Para hablar con el asesor pulse el botón 6'
                                ]}
                            />





                            <h2 className='como-un-vuelo pt-3'>¿Cómo llamar a Copa Airlines desde USA?</h2>
                            <p className='description'>¿Estás aquí para conocer todos los detalles para llamar a Copa Airlines desde USA? Entonces, para eso, aquí están todos los detalles que debes seguir. En este artículo, debe obtener el número de teléfono oficial de Copa Airlines USA y, para ello, siga todos los puntos que se mencionan a continuación: -</p>
                            <StepUlList
                                listItem={[
                                    'Inicialmente, debes acceder a la página de inicio oficial de Copa Airlines y luego navegar a la página de atención al cliente.',
                                    'Ahora, haga clic en la pestaña "Centro de llamadas" de la página dirigida.',
                                    'Comience a buscar el número de teléfono autorizado de Copa Airlines USA.',
                                    'Cuando adquieras el número de teléfono de USA +1-786-840-2672, márcalo.',
                                    'Luego de eso, te conectarás con el agente virtual que te atenderá.',
                                    'Con la ayuda de eso, podrá resolver todos los problemas y solucionarlos directamente.',
                                ]}
                            />




                            <h2 className='como-un-vuelo pt-3'>¿Cuál es el número de teléfono de Copa Airlines El Salvador?</h2>
                            <p className='description'>Residiendo en El Salvador, si tienes algún problema relacionado con la reserva de Copa, equipaje, cambio de vuelo, check in o cualquier otro proceso, simplemente puedes comunicarte con el servicio de atención al cliente de Copa Airlines desde El Salvador. Hay varias formas de comunicarse con Copa Airlines desde El Salvador, pero una llamada telefónica es una de las formas más rápidas de comunicarse con el representante en vivo siguiendo los pasos indicados.</p>
                            <StepUlList
                                listItem={[
                                    "Primero, debes marcar al número de teléfono de Copa Airlines El Salvador +503-2113-0369.",
                                    "Luego tendrás que escuchar los pasos de IVR que podrás seguir en consecuencia.",
                                    "Presione 1 para elegir el idioma preferido.",
                                    "Pulse 2, para cambiar o cancelar la reserva.",
                                    "Pulsa 3, para reclamar o presentar la denuncia.",
                                    "Presione 4, para actualizar o seleccionar el asiento.",
                                    "Presione 5 para contactar al representante en vivo.",
                                ]}
                            />
                            <p className='mt-3 font-weight-medium pt-2'>Una vez que haya realizado la solicitud, se conectará con el representante en vivo de Copa Airlines desde El Salvador quien resolverá sus inquietudes o problemas de inmediato.</p>




                            <h2 className='como-un-vuelo pt-3'>¿Cómo hacer una llamada telefónica a Copa Airlines desde Ecuador?</h2>
                            <p className='description'>Para comprar un boleto de Copa Airlines desde Ecuador, es posible que necesites ayuda con la reserva. La mejor opción sería utilizar el número de teléfono de Copa Airlines Ecuador +593-2342-2672. Cuando te conectas con Copa Airlines desde Ecuador por teléfono, podrás recibir la ayuda adecuada.</p>
                            <p className='font-weight-bold'>Pasos básicos para llamar a Copa Airline desde Ecuador</p>
                            <StepUlList
                                listItem={[
                                    "Marcar al teléfono de Copa Airlines Ecuador +593-2342-2672.",
                                    "Escuche los comandos del correo de voz y sus servicios;",
                                    "Presione 1 para seleccionar el idioma",
                                    "Presione 2 para acceder a Connect Miles",
                                    "Presione 3 para obtener detalles sobre los requisitos de viaje",
                                    "Presione 4 para reservar un boleto aéreo de Copa con millas",
                                    "Presione 5 para hablar con atención al cliente.",
                                    "Cuando selecciona su consulta preferida, la llamada se transfiere al asistente de asistencia técnica correspondiente.",
                                    "Por último, debe proporcionarle detalles al agente y el asistente en vivo lo ayudará sabiamente.",
                                ]}
                            />




                            <h2 className='como-un-vuelo pt-3'>¿Cómo hablar con alguien en Copa Airlines desde Costa Rica?</h2>
                            <p className='description'>Copa Airlines es una aerolínea de renombre que brinda servicios de primer nivel a un precio razonablemente económico a sus pasajeros. En caso de que haya reservado un vuelo con Copa Airlines desde Costa Rica y desee conocer detalles sobre la política de equipaje, puede comunicarse telefónicamente con el representante de atención al cliente de la aerolínea y solicitar la ayuda requerida.</p>
                            <p className='font-weight-bold'>Interactuar a través de una llamada telefónica</p>
                            <p>Una llamada telefónica es el método más conveniente y preferido que utilizan principalmente los usuarios para recibir ayuda de inmediato. Ahorra mucho tiempo a los usuarios y aumenta la satisfacción del cliente. Debe marcar el número de teléfono de Copa Airlines Costa Rica, que es +506-4000-0478, y comentar sus problemas con ellos. No es necesario que envíe numerosos mensajes para solucionar un problema en particular. Debe presionar la tecla sugerida de su inquietud para conectarse con el agente de atención al cliente de Copa Airlines Costa Rica y recibir una respuesta adecuada.</p>



                            <h2 className='como-un-vuelo pt-3'>¿Cómo puedo comunicarme con Copa Airlines en Colombia?</h2>
                            <p>The process of reserving flights with Copa Airlines Colombia is simple, however, there are many travelers who face problems reserving tickets or have other confusions about the trip and require assistance for this. These customers can call the customer care service of Copa Airlines Colombia which is dedicated to assisting those who call with all the required information. The call procedure must be initiated using the official phone number of Copa Airlines Colombia +57-601-3209090.</p>
                            <p>Once the call is answered by an automated voice it is important that customers listen carefully and continue with the guided instructions. Finally, when the telephone lines connect to interested Copa representatives, callers can discuss their travel problems and expect solutions.</p>
                            <p>Los agentes de Copa Airlines Colombia pueden ser contactados a través del número de teléfono +57-601-3209090 de 5:00 a.m. a 11:00 p.m. para resolver todas las inquietudes sobre el viaje. Las personas que llaman tienen la alternativa de seleccionar el idioma y luego recibir orientación en su idioma preferido.</p>




                            <h2 className='como-un-vuelo pt-3'>¿Cómo me comunico con Copa Airlines desde Chile?</h2>
                            <p className='description'>Para los problemas, al hacer uso de cualquier servicio de Copa Airlines desde Chile, puede comunicarse con la aerolínea y obtener ayuda. Comuníquese para leer la información proporcionada a continuación y luego acceda a ellos para obtener ayuda. Adicionalmente, para contactarlos, puede marcar al teléfono de Copa Airlines Chile, +562-2573-9318 o +562-2840-2641, y luego proceder para el mismo de la siguiente manera:</p>
                            <StepUlList
                                listItem={[
                                    "Marcar al teléfono de Copa Airlines Chile +562-2573-9318 o +562-2840-2641.",
                                    "Y elija un idioma con el que se sienta cómodo.",
                                    "Luego, presione 1 para obtener ayuda con una nueva reserva de Copa Airlines.",
                                    "Presione 2 para obtener ayuda para realizar cambios en el vuelo de Copa.",
                                    "Presione 3 para obtener ayuda para acceder a la ayuda cuando busque la selección de asiento.",
                                    "Para actualizar la reserva existente, presione 5.",
                                    "Presione 7 para obtener ayuda y asistencia de cualquier otro servicio.",
                                    "Para conectarse con un ejecutivo de Copa Airlines, presione 9.",
                                ]}
                            />



                            <h2 className='como-un-vuelo pt-3'>¿Cuál es el número de teléfono de Copa Airlines Canadá?</h2>
                            <p>Puede hablar con los agentes mediante llamada telefónica si necesita más información relacionada con la selección de asiento o la mejora del vuelo antes de realizar la reserva. Marque el número de teléfono de Copa Airlines Canadá +1-647-493-5022 para obtener asistencia rápida. Debe seleccionar el idioma y presionar la opción IVR para conectarse con el representante adecuado.</p>
                            <p>Los agentes de Copa Airlines Canadá están disponibles para guiarlo de 5:00 am a 11:00 pm. Sin embargo, se recomienda marcar el número de teléfono de Copa Airlines de Canadá (+1-647-493-5022) durante las primeras horas para evitar esperas de alrededor de 20 minutos.</p>

                        </div>

                    </Container>
                </div>
            </section>




        </>
    )
}

export default ServicioAlcliente