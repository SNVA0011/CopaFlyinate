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



                        <div className='como-reservar ls cancelar-mt-5'>
                            <h2 className='como-un-vuelo'><span>¿Cuál es la política de equipaje de Copa Airlines?</span></h2>
                            <p><span>Tener la información sobre la política de equipaje de Copa Airlines es fundamental ya que te ayudará a saber qué cosas permiten las aerolíneas, artículos restringidos, etc. En caso de que no tengas información sobre estas políticas, entonces debes consultar a continuación.</span></p>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Cada cliente puede llevar un bolso de mano y un bolso para artículos personales sin pagar cargos, pero la forma y las dimensiones del bolso deben ser tales que puedan caber fácilmente en el asiento inferior o en el compartimento superior para la cabeza. Las dimensiones del bolso de mano deben ser inferiores a 56cmX36cmX26cm. El peso del bolso de mano y de la bolsa de artículos personales debe ser inferior a 09 kg.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Los clientes que viajan en clase económica básica deben pagar los cargos por el equipaje facturado, pero para cualquier otra clase, no necesitan pagar los cargos por el equipaje facturado. El peso de la maleta facturada debe ser inferior a 23 kg a 32 kg, y si se excede el peso, deberán pagar los cargos. Las aerolíneas solo permiten llevar un máximo de 05 equipajes facturados.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Para transportar el equipaje facturado adicional, los clientes deben pagar un costo adicional, que oscila entre 40 USD y 250 USD, ya que el costo variará según la cantidad de maletas que lleve el cliente.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Copa Airlines también permite a los clientes llevar equipos deportivos. Aún así, el peso máximo del equipo debe ser inferior a 10 kg si quieren llevar el equipo en el equipaje de mano. Y si el cliente desea llevar material deportivo junto con su equipaje facturado, su peso deberá ser inferior a 45 kg.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Para llevar el equipo deportivo, los clientes deben pagar los cargos, que oscilan entre 130 USD y 145 USD, pero si hay clientes que son clientes habituales, los socios de ConnectMiles no tendrán que pagar ningún cargo.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>No se permite a los clientes portar objetos punzantes, cuchillos, baterías, litio, armas de fuego, municiones, Drones, cigarrillos electrónicos, bombonas de gas, encendedores de fósforos, etc.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Si algún cliente desea llevar equipo especial como andador, ortesis, bastón, muletas, etc., con el equipaje de mano deberá solicitarlo con anticipación conectando con ejecutivos de Copa Airlines.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Por exceso de peso o equipaje extra, el cliente deberá pagar el costo adicional, el cual será considerado según los impuestos del país.</span></p>
                                </li>
                            </ul>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Cómo revisar mi equipaje en Copa?</span></h2>
                            <p><span>Después de realizar tu reserva de vuelo con Copa Airlines, si estás procediendo a realizar el check-in de Copa Airlines para tu vuelo, lleva tu equipaje contigo. Es evidente que no se puede realizar el check-in a través del sitio web. De lo contrario, puede presentar una solicitud pero no puede hacerlo mediante una llamada telefónica. Si te estás preguntando ¿Cómo facturar mi equipaje en Copa? Hay diferentes formas de facturar tu equipaje en Copa. Para aprender el método, consulte los modos que se indican a continuación.</span></p>
                            <p><span>Check-in a través del aeropuerto</span></p>
                            <p><span>Puede registrar su equipaje con Copa Airline a través del mostrador de check-in del aeropuerto. Puede proporcionar los datos necesarios al representante de la aerolínea y entregar su equipaje al asistente. El humano verificará todos los procesos y le ayudará con asistencia. Siga los puntos indicados a continuación para continuar.</span></p>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Dirígete al mostrador de facturación de Copa Airlines en el aeropuerto.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Proporcione todos los detalles de su reserva al agente en el mostrador.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Envíe su equipaje al asistente y el humano comprobará el peso.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Pague los cargos si el peso se extiende del límite proporcionado por la aerolínea.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>El asistente recogerá la etiqueta de su equipaje y le entregará la tarjeta de embarque.</span></p>
                                </li>
                            </ul>
                            <p><span>Revisa tu equipaje a través del quiosco</span></p>
                            <p><span>Para evitar largas colas en el mostrador de check-in de Copa Airlines, también puede realizar el check-in de su equipaje de Copa Airlines a través de la máquina del kiosco disponible en el Aeropuerto. Puede mencionar los detalles de su vuelo allí; el asistente le ayudará con el check-in de su equipaje. Siga los puntos que se mencionan a continuación para continuar.</span></p>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Dirígete al quiosco del aeropuerto.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Mencione los detalles de su vuelo según el requisito.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>El asistente recogerá su equipaje y verificará el peso del mismo.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Luego de eso, recibirás tu tarjeta de embarque de Copa Airlines.</span></p>
                                </li>
                            </ul>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Puedo llevar una maleta personal en un vuelo de Copa?</span></h2>
                            <p><span>Sí, puedes llevar 1 artículo personal en el vuelo de Copa Airlines junto con el equipaje de mano. Sin embargo, también depende del tipo de billete que haya comprado en las aerolíneas. En caso de que desees más información sobre el mismo, puedes comunicarte con la aerolínea en su número de teléfono exclusivo 1 786 840 COPA (2672).</span></p>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Cuántas maletas se permite llevar a bordo?</span></h2>
                            <p><span>En lo que respecta a Copa, puedes llevar 2 maletas facturadas para Economy Full junto con Business Class.</span></p>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Cuáles son las reglas para el equipaje personal en Copa?</span></h2>
                            <p><span>Es importante conocer las reglas de equipaje personal de Copa Airlines, algunas de ellas se describen a continuación; por favor echa un vistazo:</span></p>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Su artículo personal debe caber en el compartimiento superior o en el asiento frente a usted.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Las dimensiones deben limitarse a 18x14x8 pulgadas.</span></p>
                                </li>
                            </ul>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Qué pasa si mi equipaje pesa más en el vuelo de Copa?</span></h2>
                            <p><span>Copa Airlines tiene franquicia de equipaje y le permite llevar más peso en comparación con muchas aerolíneas. Sin embargo, muchos pasajeros se preguntan: "¿Qué pasa si mi equipaje pesa más en el vuelo de Copa?". entonces tienen que pagar algunos cargos adicionales. Para conocer la franquicia de equipaje y la limitación de peso, debes leer la política de equipaje. Si aún tiene alguna consulta, hable con el ejecutivo en vivo de la aerolínea.</span></p>
                            <h2 className='como-un-vuelo pt-2'><span> Política de equipaje sobredimensionado de Copa Airlines</span></h2>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Cualquier artículo que pese más de 45 kg será enviado a la carga.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Si el equipaje pesa más que el peso permitido, es posible que deba pagar algunos cargos adicionales.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Los cargos por equipaje de gran tamaño son de $100 a $200, dependiendo del peso y el destino.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>El límite de peso máximo proporcionado por la aerolínea puede variar dependiendo de su clase de viaje.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Ningún pasajero puede transportar equipaje con dimensiones no superiores a 294 cm (alto + largo + ancho).</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Copa permite un máximo de 5 equipajes adicionales con un límite de peso de 23 kg.</span></p>
                                </li>
                            </ul>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Cómo puedo pagar mi equipaje de gran tamaño en Copa?</span></h2>
                            <p><span>Al completar el proceso de facturación de equipaje de Copa Airlines en el aeropuerto, si su equipaje pesa más que el límite de peso proporcionado, tendrá que pagar algunos cargos adicionales. Dirígete al mostrador de check-in y proporciona los detalles de la reserva al ejecutivo, paga los cargos correspondientes y ellos actualizarán los detalles en el boleto.</span></p>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Cuáles son los cargos por equipaje de gran tamaño en Copa?</span></h2>
                            <p><span>Los cargos por transportar equipaje con sobrepeso o tamaño excesivo en un vuelo de Copa Airlines pueden diferir según el límite excedido, pero son los mismos para todas las clases de viaje. Puede leer los siguientes puntos para conocer los cargos:</span></p>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Peso entre 24 kg y 32 kg - $100</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Peso entre 33 kg a 45 kg - $200</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Equipaje de gran tamaño: $150</span></p>
                                </li>
                            </ul>
                            <h2 className='como-un-vuelo pt-2'><span> ¿Cuánto equipaje puedo llevar en mi vuelo de Copa?</span></h2>
                            <p><span>Al considerar volar con Copa Airlines, debes tener en cuenta la franquicia de equipaje en el vuelo. La franquicia de equipaje es necesaria para empacar sus maletas por debajo del límite establecido. De lo contrario, la aerolínea te cobrará extra o te descartarán para volar con tu equipaje con sobrepeso. La franquicia de equipaje de Copa Airlines depende de la clase de tarifa que elijas para reservar tu asiento. Aquí tendrá una idea general de cuánto equipaje puede llevar en el vuelo dependiendo de su clase de tarifa.</span></p>
                            <p><strong>Equipaje de mano</strong></p>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Cada pasajero de Copa Airlines puede llevar 1 pieza de equipaje de mano en el vuelo, independientemente de la clase de cabina.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>El equipaje de mano debe ser lo suficientemente pequeño como para caber debajo del asiento delantero del vuelo o debajo del compartimento superior.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Una pieza de equipaje de mano debe pesar menos de 10 kg.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>El tamaño permitido para el equipaje de mano en Copa Airlines es de 118 cm.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Los pasajeros de Copa Airlines también pueden llevar un artículo personal, como bolso, chaqueta, bolso para computadora portátil o mochila, dentro de la franquicia de equipaje de mano.</span></p>
                                </li>
                            </ul>
                            <p><strong>Equipaje facturado</strong></p>
                            <ul>
                                <li>
                                    <p role="presentation"><span>Los pasajeros de clase económica no tienen derecho a equipaje facturado gratis en Copa.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Un pasajero de clase Turista puede llevar 1 equipaje facturado de 23 kg en el vuelo.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Los pasajeros de clase económica completa pueden llevar 2 maletas facturadas de 23 kg cada una en el vuelo.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>La clase Business Promo y Business Full permiten a los pasajeros facturar 2 piezas de equipaje de 32 kg cada una.</span></p>
                                </li>
                                <li>
                                    <p role="presentation"><span>Cada equipaje facturado en Copa no debe exceder las 62 pulgadas lineales de tamaño.</span></p>
                                </li>
                            </ul>
                        </div>


                    </Container>
                </div>
            </section>

        </>
    )
}

export default BaggagePolicy