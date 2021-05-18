import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Casos de uso - Analítica Avanzada</title>
        <meta name="description" content="Form used to collect advanced analytics information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.principal_information}>
          <pichincha-typography
            variant="h2"
            color="blue"
            weight="normal"
            weight_color="500"
            align="inherit"
            class="typography hydrated bp-mt-72">
            Solicitud de casos de uso analítica avanzada
            </pichincha-typography>
          <p className={styles.paragraph}>
            Bienvenido al formulario de solicitud para casos de uso de analítica avanzada. El objetivo del mismo es poder recopilar la mayor cantidad de información sobre su caso de uso con el fin de gestionarlo eficientemente y asignarlo a un equipo de trabajo.
          </p>
          <p className={styles.paragraph}>
            El formulario se divide en 3 secciones principales:
          </p>
          <p className={styles.paragraph}>
            <ol className={styles.ol}>
              <li>Datos generales del caso de uso</li>
              <li>Clasificación del caso de uso</li>
              <li>Estimación de impacto y complejidad.</li>
            </ol>
          </p>
          <p className={styles.paragraph}>
            Una vez ingresado el requerimiento se procede con la evaluación del mismo y con una respuesta por parte del COE de Analítica Avanzada dentro de 48 horas.
          </p>
          <p className={styles.paragraph}>
            Agradecemos su honestidad y su tiempo.
          </p>
          <div className={styles.button_llenar_formulario}>
            <Link href="/section/section1">
              <pichincha-button color="primary" size="medium" disabled="false" loading="false" class="hydrated">
                Llenar el formulario
              </pichincha-button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
