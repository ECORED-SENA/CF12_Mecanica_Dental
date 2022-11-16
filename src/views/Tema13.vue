<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 PQRS
    .bg8-1
      .row.justify-content-center.align-items-center.bg10.mb-5
        .col-md-7.order-md-1.order-2
          .row.align-items-center.mb-5.ps-3
            .col-lg-11
              p Cada institución prestadora de servicios de salud, por medio de sus estrategias organizacionales debe contar con un departamento que tenga definido el proceso de recepción, lectura y respuesta ante las Peticiones, Quejas, Reclamos y Sugerencias presentadas por los usuarios, encargándose esta dependencia en gran medida de la satisfacción de los pacientes.
            .col-lg-2.mb-3.mt-3
              figure
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema11/img1.svg', alt='')
            .col-lg-10.mb-3
              p.mb-0.mt-3 El Sistema de Peticiones, Quejas, Reclamos y Sugerencias (PQRS) es una herramienta que nos permite conocer las inquietudes y manifestaciones que tienen nuestros usuarios para que tengamos la oportunidad de fortalecer nuestro servicio y seguir fortaleciéndonos en el mercado de la salud.          
        .col-md-5.order-md-2.order-1.mb-md-0.mb-4.px-0(data-aos="fade-left")
          img(src="@/assets/curso/tema13/img1.png") 
    p.mb-0.text-center <b>Qué técnica utilizar</b>
    .bg13-1
      .row.mb-5.justify-content-center
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema13/img3.svg', alt='Texto que describa la imagen')
            h4.text-center Petición
            p.text-center Es una actuación por medio de la cual el usuario, de manera respetuosa, solicita a la empresa cualquier información relacionada con la prestación del servicio.
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema13/img4.svg', alt='Texto que describa la imagen')
            h4.text-center Queja
            p.text-center Es la expresión o manifestación que le hace el usuario a la empresa por la inconformidad que le generó la prestación de nuestros servicios.
        .col-12.col-md-6.col-lg-3
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema13/img5.svg', alt='Texto que describa la imagen')
            h4.text-center Reclamo
            p.text-center Es la oposición o contrariedad presentada por el usuario, con el objeto de que la empresa revise y evalúe una actuación relacionada con la prestación del servicio en términos económicos.
        .col-12.col-md-6.col-lg-3
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema13/img6.svg', alt='Texto que describa la imagen')
            h4.text-center Sugerencia
            p.text-center Es una propuesta presentada por un usuario para incidir en el mejoramiento de un proceso de la empresa cuyo objeto está relacionado con la prestación del servicio.(energitel, s.f.)
      .row.justify-content-center.ps-3.mb-5
        .col-lg-12
          .tarjeta.color-primario.p-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema5/img1.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p Estimado aprendiz en el siguiente enlace encontrará un video en donde se da una breve explicación sobre la importancia de las PQRS.
                  .col-sm-auto
                    a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/blLQI56dfGc" target="_blank").mb-0                    
                      span Ver video
                      i.fas.fa-camera-retro   


</template>

<script>
export default {
  name: 'Tema13',
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
