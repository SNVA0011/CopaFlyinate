import Head from 'next/head'
import Image from 'next/image'
import Enginebox from '../component/Enginebox'
import PopularDestinations from '../component/PopularDestination'
import PageHead from '../component/PageHead'
import { useRouter } from 'next/router';
import StepsSection from '../component/StepsSection';
import Link from 'next/link';
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <PageHead 
        title="Flyinate | Book Low Fares Flights Tickets & Rental Cars"
        description=""
        keywords=""
      />

      <Enginebox />

      <StepsSection
        imgPath={'/images/copa-airline-plane.jpg'}
        imgTexture={'texture-1'}
        subNumber={`01`}
        subtitle={`¿Cómo reservar un`}
        title={`Vuelo de Copa Airlines?`}
        description={<>Copa Airlines es la mejor aerolínea de Panamá, que ofrece billetes de avión de bajo coste con instalaciones y servicios de primera clase a bordo. Si desea ir de vacaciones y desea <b>reserve el vuelo en Copa Airlines</b>. Así que usted puede comprobar los pasos mencionados a continuación para comprar fácilmente los billetes de avión.</>}
        ListItems={[
          'Puede ir al sitio web de Copa Airlines.',
          'Haga clic en la sección de reservas.',
          'Luego tienes que elegir sólo ida, ida y vuelta, ida y vuelta y multiciudad.',
          'Después, puedes añadir el asiento, elegir el pasajero y también la clase.',
          'Ahora tienes que ir a la página siguiente y ver la lista de vuelos que tienes que elegir cualquiera.',
          'Puedes hacer clic en la opción de pago y abonar el importe para comprar el vuelo.',
          'Una vez completado el proceso de reserva, recibirá mensajes de confirmación. ',
        ]}
      />


      <StepsSection
        swap={true}
        imgPath={'/images/book-by-phone.jpg'}
        imgTexture={'texture-1'}
        subNumber={`02`}
        subtitle={`El proceso de reserva un`}
        title={`Vuelo de Copa Airlines por teléfono `}
        description={<>Si usted quiere saber acerca de las mejores y más rápidas formas de reservar el vuelo, por lo que puede ponerse en contacto con el equipo de servicio al cliente de Copa Airlines. Puede llamar al asesor en este número de teléfono <Link href='tel:1786 840 2672'><a target='_blank' className='font-weight-bold'><i className="bi bi-telephone-plus"></i> 1786 840 2672</a></Link> y luego se puede escuchar el ivr y elegir la clave.</>}
        ListItems={[
          'Puede elegir el botón 1 para ver los detalles del vuelo',
          'Pulsar la tecla 2 para cambiar la reserva',
          'Elija la tecla 3 para volver a reservar',
          'Para ver el estado del vuelo elija la tecla 7',
          'Para hablar con el asistente elija la tecla 8 '
        ]}
        otherContent={<><b className='horario'><i className="bi bi-chevron-double-right hor"></i> Horario :-</b> <div className='flex-grow-1'>Puedes comunicarse con el equipo de servicio al cliente de Copa Airlines de lunes a domingo de <span className='d-inline-block domi'><i className="bi bi-clock"></i> 5:00 a.m. a <i className="bi bi-clock"></i> 11:00 a.m</span>. para obtener respuesta inmediata.</div></>}
      />




      <StepsSection
        imgPath={'/images/cashback-topay.jpg'}
        imgTexture={'texture-1'}
        subNumber={`03`}
        subtitle={`¿Cómo reservar `}
        title={`Un vuelo a Copa sin pagar?`}
        description={<>Si deseas una <b>reserva de Copa Airlines</b> sin pagar, entonces puedes utilizar el punto de recompensa y elegir la opción de pagar más tarde. Puedes seguir los pasos para pagar más tarde durante la reserva. </>}
        ListItems={[
          'Puedes visitar el sitio web de Copa Airlines',
          'haz clic en la sección de reservas',
          'Ahora puedes completar el proceso e introducir los datos en las columnas requeridas como; fecha, ciudad de salida y llegada, selecion de asiento,  añadir pasajero.',
          'Después de eso, usted tiene que elegir el vuelo y mantener su sección de pago.',
          'Copa Airlines le permite mantener la reserva durante 24 horas, después de eso, se cancela automáticamente el vuelo.'
        ]}
      />


      <PopularDestinations />

    </>

  )
}
