import React from 'react'

export default function Nosotros({ className }) {
  return (
    <div className={className}>
      <header>
        <h1>Nosotros</h1>
      </header>
      <section>
        <h2>¿Quiénes somos?</h2>
        <p>
          Como parte del esfuerzo diario de un equipo de mujeres comprometidas con el cuidado del
          medio ambiente, en particular, con la protección de los gatos, fundamos hace años Sos
          Felina Felinae, una Protectora sin ánimo de lucro que ha pasado por varias etapas.
        </p>
        <p>
          Gracias a la labor constante y dedicación permanente hemos logrado salvar de la calle y
          dar en adopción a cientos de gatos, a pesar de nuestros escasos recursos humanos y
          financieros.
        </p>
      </section>
      <section>
        <h2>¿Qué hacemos?</h2>
        <ul>
          <li>Alimentación y cuidado de Colonias Felinas</li>
          <li>Aplicación de Método C.E.S. (Capturar-Esterilizar-Soltar) en Colonias Felinas</li>
          <li>
            Realización de propuestas y presentación de proyectos para la Gestión Ética de Colonias
            en las Instituciones
          </li>
          <li>
            Rescate de animales heridos, enfermos, en situación de riesgo o con necesidades
            especiales
          </li>
          <li>Recuperación, cuidado y socialización de gatos</li>
          <li>Gestión de Adopciones Responsables</li>
          <li>Información y divulgación sobre el mundo felino</li>
        </ul>
      </section>
      <div className="inspirational">Contribuye a una adopción responsable</div>
    </div>
  )
}
