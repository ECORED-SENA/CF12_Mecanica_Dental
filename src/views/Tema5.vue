<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plataformas de salud
    .bg14
      .row.justify-content-center.ps-3
          .col-lg-12 
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema5/img2.jpg')})`}"
              )(data-aos="fade-right")
              .bloque-texto-g__texto.p-4(data-aos="fade-left")
                p.mb-0 Las plataformas digitales son un medio para promocionar un servicio, en nuestro medio permiten mejorar la calidad en la atención a los usuarios. Es parte esencial de nuestra vida cotidiana.
      .row.justify-content-center.ps-3.mb-5
        .col-lg-12
          .tarjeta.color-primario.p-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema5/img1.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p En el siguiente enlace se encuentra un video que presenta una breve descripción de cómo ha evolucionado el mundo gracias a las tecnologías, como el envío de facturas, solicitar un taxi o pagos por internet.
                  .col-sm-auto
                    a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/hIQM78SbF1k" target="_blank").mb-0                    
                      span Ver video
                      i.fas.fa-camera-retro  
      .row.align-items-center.mb-5
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema5/img3.svg', alt='') 
        .col-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema5/img4.svg', alt='') 
        .col-lg-8(data-aos="fade-right")
          p.m-0 SISPRO - Sistema Integrado de información de la Protección Social de Información Oportuna, suficiente y estandarizado para la toma de decisiones del Sector Salud y Protección Social, centrada en el Ciudadano. El SISPRO está conformado por bases de datos y sistemas de información del sector sobre oferta y demanda de servicios de salud, calidad de los servicios, aseguramiento, financiamiento, promoción social. A continuación, se describen cada uno de los elementos del sistema. (Texto tomado de #[a https://www.sispro.gov.co/Pages/Home.aspx)")]
      .row.justify-content-center.ps-3.mb-5
        .col-lg-6
          .tarjeta.color-primario.p-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img(src="@/assets/curso/tema3/img3.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p.tamp Enlace de la normativa 
                  .col-sm-auto.d-flex.align-items-center
                    a.boton.color-acento-botones.me-3.mg4(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%200016%20de%202014.pdf" target="_blank").mb-0                    
                      span Enlace web
                      i.fas.fa-link
    p.mb-5 A continuación, se describen cada uno de los elementos del sistema    
    .row.justify-content-center.mb-5
      .col-md-4.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img.img-t(src="@/assets/curso/tema5/img5.png").mx-auto
      .col-lg-8(data-aos="zoom-in") 
        LineaTiempoD.color-primario.mb-5
          .row.justify-content-center.align-items-center(numero="1" titulo="Prestadores de servicios")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Información de la oferta de prestadores en salud. Incluye, entre otros, profesionales de salud, instituciones prestadoras de servicios habilitados y variables relevantes para analizar la gestión anual de las Empresa Sociales del Estado, por departamento.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema5/img6.png").mx-auto
          .row.justify-content-center.align-items-center(numero="2" titulo="Financiamiento")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Información sobre recursos de financiamiento para actividades y entidades del sector. Incluye recursos para cofinanciar proyectos de inversión de ESE, giro directo a IPS y de compra de cartera de IPS.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema5/img7.png").mx-auto
          .row.justify-content-center.align-items-center(numero="3" titulo="Salud ambiental")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Información de saneamiento básico, indicadores de calidad del agua y el Registro de Estratificación y Coberturas. También podrá hacer consultas sobre los establecimientos vigilados por INVIMA con respecto a salud nutricional.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema5/img8.png").mx-auto   
          .row.justify-content-center.align-items-center(numero="4" titulo="Ciudadano")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Facilita a los ciudadanos la consulta de sus datos básicos de salud, riesgos laborales, pensiones y subsidios, al profesional de salud la verificación de su estatus para la prescripción, y la realización de trámites electrónicos de afiliación al Sistema General de Seguridad Social en Salud, de traslados y movilidad entre regímenes, asignación de plazas del Servicio SocialObligatorio-SSO y de otros trámites.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema5/img9.png").mx-auto 
          .row.justify-content-center.align-items-center(numero="5" titulo="Gestión del conocimiento  ")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") A través de esta central, los usuarios pueden encontrar información del sector consultando diferentes servicios organizados por temáticas, permitiendo a los actores del sector, investigadores y ciudadanía en general conocer las condiciones de salud de la población colombiana a partir del uso y aprovechamiento de las fuentes de información que son reportadas al Ministerio de acuerdo con la normatividad vigente. El propósito de esta central es contribuir a la gestión del conocimiento para favorecer la innovación y eficiencia en el Sector, tomando decisiones informadas e identificar brechas de información. (minsalud, s.f.)
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema5/img10.png").mx-auto
      p.mb-5 En la siguiente presentación en prezi encontrará de una manera más didáctica qué es SISPRO (socha, 2017)   
      .row.justify-content-center.mb-5
        .col-lg-8
          .tarjeta.color-primario.p-4.mb-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema5/img12.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p.tamp SISPRO
                  .col-sm-auto.d-flex.align-items-center
                    a.boton.color-acento-botones.me-3.mg4(href="https://prezi.com/p/0rvukzynlc9m/sispro/" target="_blank").mb-0                    
                      span Enlace web
                      i.fas.fa-link
          p.mb-3 La Administradora de los Recursos del Sistema General de Seguridad Social en Salud -ADRES- es una entidad adscrita al Ministerio de Salud y Protección Social, con personería jurídica, autonomía administrativa y financiera y patrimonio independiente.
          .row.justify-content-center.mb-5
            .col-lg-12
              .tarjeta.color-primario.p-4
                .row.justify-content-around.align-items-center
                  .col
                    .row.align-items-center
                      .col.mb-3.mb-sm-0.pt-2
                        p Base de datos única de afiliados BDUA del Sistema General de Seguridad Social en Salud BDUA - SGSSS 
                      .col-sm-auto.d-flex.align-items-center
                        a.boton.color-acento-botones.me-3.mg4(href="https://www.adres.gov.co/Paginas/PageNotFoundError.aspx?requestUrl=https://www.adres.gov.co/BDUA/Consulta-Afiliados-BDUA").mb-0                    
                          span Enlace web
                          i.fas.fa-link
        .col-3.col-sm-2.col-lg-4
          img(src="@/assets/curso/tema5/img11.png")
      .row.justify-content-center.ps-3
        .col-lg-12
          .tarjeta.bg6.p-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema5/img13.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p.text-white La Base de Datos Única de Afiliados - BDUA, contiene la información de los afiliados plenamente identificados, de los distintos regímenes del Sistema General de Seguridad Social en Salud.
    p.mb-5.text-center <b>Para hacer una consulta en ADRES, deberás seguir los 3 pasos a continuación:</b>  
    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA.margslyd(tipo="b")(data-aos="fade-right")
        .row.align-items-center.justify-content-center              
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta.color-acento-contenido2.p-5  
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 1                         
              p Seleccione su tipo de documento y digite su número de identificación.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema5/img14.png').mx-auto
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta.color-acento-contenido2.p-5 
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 2                          
              p Escriba el código de verificación.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema5/img14.png').mx-auto 
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta.color-acento-contenido2.p-5   
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 3                    
              p Luego de clic en el botón “consultar” y se le mostrará la siguiente página de resultados.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema5/img15.png').mx-auto          
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
