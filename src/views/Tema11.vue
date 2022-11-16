<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Satisfacción del cliente
    .bg8-1
      .row.justify-content-center.align-items-center.bg10.mb-5
        .col-md-6.order-md-1.order-2
          .row.align-items-center.mb-5.ps-3
            .col-lg-2.mb-3.mt-3
              figure
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema11/img1.svg', alt='')
            .col-lg-10.mb-3
              p.mb-0.mt-3 Esta satisfacción del cliente se debe convertir en el punto más importante de una institución, Las decisiones que se tomen desde las gerencias, deben estar enfocadas fundamentalmente en lograr prestarle un servicio con calidad a los usuarios.
            .col-lg-10
              p Dentro de la estrategia organizacional de cada institución debe estar inmersa la medición, análisis y respuesta continua a la satisfacción del cliente.
        .col-md-6.order-md-2.order-1.mb-md-0.mb-4.px-0(data-aos="fade-left")
          img(src="@/assets/curso/tema11/img2.png") 
      .row.justify-content-center.mb-5 
        .col-xl-12.mx-auto.order-2.order-xl-1.pe-xl-4
          .title-edit.mb-3(data-aos="fade-right")
            span(style="background-color: #0082EF; width: 21px; height: 21px;")
            h4 Tipos de clientes
          p(data-aos="fade-right") Los clientes que tiene una organización pueden ser clasificados en función de su ubicación respecto de la empresa:
      .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema11/img3.svg').mx-auto
            h4.text-center.text-white Clientes externos
            p.text-center.text-white Corresponde al usuario al que va dirigido la prestación del servicio que brinda la institución.
            br
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .tarjeta.bg17-1.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema11/img4.svg').mx-auto
            h4.text-center Clientes internos
            p.text-center.text-#12263F Se refiere al grupo de talento humano responsables del proceso de la prestación del servicio, dentro de la institución.  
        
      .row.justify-content-center.mb-5 
        .col-xl-12.mx-auto.order-2.order-xl-1.pe-xl-4
          .title-edit.mb-3(data-aos="fade-right")
            span(style="background-color: #0082EF; width: 21px; height: 21px;")
            h4 Los clientes respecto a su nivel de satisfacción
          p(data-aos="fade-right") Una vez finalizada la prestación del servicio a nuestra usuaria, este percibe y expresa sus niveles de satisfacción que puede ser:
    TabsB.color-acento-contenido.mb-5(data-aos="fade") 
      .py-5.py-md-5.bg10(titulo="Cliente insatisfecho" :icono="require('@/assets/curso/tema11/img5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Cliente insatisfecho
            p.mb-0 Este tipo de cliente es el que no cumplió con sus expectativas al recibir la prestación de los servicios médicos. Este tipo de usuario se convierte en un problema para la institución por lo que puede actuar de forma negativa, al proporcionar una mala información de su atención a las demás personas. Si el usuario no comunica su insatisfacción a la organización, esta no tendrá conocimiento para realizar el seguimiento pertinente y su posterior mejora. 
          .col-lg-4
            figure
              img(src="@/assets/curso/tema11/img6.png", alt="alt")
      .py-4.py-md-5.bg10(titulo="Cliente satisfecho" :icono="require('@/assets/curso/tema11/img5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Cliente satisfecho            
            p.mb-0 Esto sucede cuando el usuario armoniza su percepción con las expectativas, al recibir la atención con calidad humanizada. De esta satisfacción ganamos la fidelización de nuestro usuario a la institución, siempre y cuando se continua en ese rango de satisfacción.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema11/img7.png", alt="alt")
      .py-4.py-md-5.bg10(titulo="Cliente entusiasta o muy satisfecho" :icono="require('@/assets/curso/tema11/img5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Cliente entusiasta o muy satisfecho
            p En este caso La percepción y expectativas cumplen con la calidad, humanización y sentirse seguro dentro de la institución, cumpliendo con sus necesidades.
            p Esto otorga una mayor fidelización de nuestro usuario a la institución. permitiendo que se convierta en un promotor a partir del voz a voz de nuestros servicios.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema11/img8.png", alt="alt")
    .row.justify-content-center.mb-5 
      .col-xl-12.mx-auto.order-2.order-xl-1.pe-xl-4
        .title-edit.mb-3(data-aos="fade-right")
          span(style="background-color: #0082EF; width: 21px; height: 21px;")
          h4 Los clientes respecto a su influencia
        p(data-aos="fade-right") Una vez finalizada la prestación del servicio a nuestra usuaria, este percibe y expresa sus niveles de satisfacción que puede ser:
    .row.mb-5.justify-content-center.mb-5
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
        .bg12.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img90(src='@/assets/curso/tema11/img9.svg', alt='Texto que describa la imagen')
          h4.text-center Clientes muy influyentes
          p.text-center Son los usuarios que tienen un alto nivel de generar una opinión positiva o negativa sobre un número muy grande de usuarios, por lo general son líderes de opinión.
      .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
        .bg12.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img90(src='@/assets/curso/tema11/img10.svg', alt='Texto que describa la imagen')
          h4.text-center Clientes con influencia promedio
          p.text-center Son los usuarios que tienen influencia media.
      .col-12.col-md-6.col-lg-4
        .bg12.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img90(src='@/assets/curso/tema11/img11.svg', alt='Texto que describa la imagen')
          h4.text-center Clientes de influencia familiar
          p.text-center Son las personas que pueden influir sobre la decisión de adquisición dentro de la familia.
    .row.justify-content-center.mb-5 
      .col-xl-12.mx-auto.order-2.order-xl-1.pe-xl-4
        .title-edit.mb-3(data-aos="fade-right")
          span(style="background-color: #0082EF; width: 21px; height: 21px;")
          h4 Los clientes respecto a su frecuencia
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones1.p-4(titulo="Cliente frecuente")
        .row
          .col-lg-10.mb-4.mb-lg-0.p-4
            h4 Cliente frecuente
            p.mb-0 Usuario que asiste de forma periódica a la IPS (pacientes crónicos o con enfermedades de alto costo), están satisfechos y se sienten seguros. Con ellos la empresa debe mantener un trato personalizado y especial.
          .col-lg-2.d-flex.align-items-center.justify-content-center
            figure
            img.img-t(src='@/assets/curso/tema11/img12.svg').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Cliente habitual")
        .row
          .col-lg-10.mb-4.mb-lg-0.p-4
            h4 Cliente habitual
            p.mb-0 Asiste a la IPS con cierta regularidad, Cuando ha adquirido una rutina de promoción y prevención de la salud.
          .col-lg-2.d-flex.align-items-center.justify-content-center
            figure
            img.img-t(src='@/assets/curso/tema11/img13.svg').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Cliente ocasional")
        .row
          .col-lg-10.mb-4.mb-lg-0.p-4
            h4 Cliente ocasional
            p.mb-0 Son los usuarios que asiste a la institución solamente en el caso que se vea alterada su salud.
          .col-lg-2.d-flex.align-items-center.justify-content-center
            figure
            img.img-t(src='@/assets/curso/tema11/img14.svg').m-auto
    .bg5
      .row.justify-content-center.mb-5 
        .col-xl-12.mx-auto.order-2.order-xl-1.pe-xl-4
          .title-edit.mb-3(data-aos="fade-right")
            span(style="background-color: #0082EF; width: 21px; height: 21px;")
            h4 Los clientes respecto a su vigencia
      .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5-1
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema11/img15.svg').mx-auto
            h4.text-center.text-white Cliente activo
            p.text-center.text-white Son los usuarios que asisten con cierta regularidad a la IPS. A este tipo de pacientes se les presta mucha atención porque son los que están fortaleciendo nuestro nivel de calidad y satisfacción de los usuarios.
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .tarjeta.bg17-1.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema11/img16.svg').mx-auto
            h4.text-center Cliente inactivo
            p.text-center.text-#12263F Es el usuario que en alguna oportunidad requirió de los servicios de salud, pero por alguna razón ya no lo hace. (Quiroa, s.f.)
            br
            br

</template>

<script>
export default {
  name: 'Tema11',
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
