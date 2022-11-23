<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Modificaciones en el sistema general de seguridad social en salud
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.1 Ley número 1122 de 2007
  
    .bg1.p-5 
      .row.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left") 
          p Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan tras disipaciones.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 1.2 Objeto
    .bg2
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-1
          figure
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img2.svg', alt='')
        .col-lg-11
          p.m-0 La presente ley tiene como objeto realizar ajustes al Sistema General de seguridad Social en Salud, teniendo como prioridad el mejoramiento en la prestación de los servicios a los usuarios. Con este fin, se hacen reformas en los aspectos de:
      .row.mb-5.justify-content-center
        .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
          .row.bg3
            .col-3.px-0.align-items-center
              figure
                img.transf(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')
            .col-9.d-flex.align-items-center
              div
                p.mb-0 Dirección.
        .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
          .row.bg3
            .col-3.px-0.align-items-center
              figure
                img.transf(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
            .col-9.d-flex.align-items-center
              div
                p.mb-0 Universalización.
        .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
          .row.bg3
            .col-3.px-0.align-items-center
              figure
                img.transf(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen')
            .col-9.d-flex.align-items-center
              div
                p.mb-0 Financiación.
        .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
          .row.bg3
            .col-3.px-0.align-items-center
              figure
                img.transf(src='@/assets/curso/tema1/img6.svg', alt='Texto que describa la imagen')
            .col-9.d-flex.align-items-center
              div
                p.mb-0 Equilibrio entre los actores del sistema.
        .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
          .row.bg3
            .col-3.px-0.align-items-center
              figure
                img.transf(src='@/assets/curso/tema1/img7.svg', alt='Texto que describa la imagen')
            .col-9.d-flex.align-items-center
              div
                p.mb-0 Racionalización, y mejoramiento en la prestación de servicios de salud.
        .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
          .row.bg3
            .col-3.px-0.align-items-center
              figure
                img.transf(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen')
            .col-9.d-flex.align-items-center
              div
                p.mb-0 Fortalecimiento en los programas de salud pública y de las funciones de, inspección, vigilancia y control.
        .col-12.col-lg-4.mb-3.h-100(data-aos="zoom-in")
          .row.bg3
            .col-3.px-0.align-items-center
              figure
                img.transf(src='@/assets/curso/tema1/img9.svg', alt='Texto que describa la imagen')
            .col-9.d-flex.align-items-center
              div
                p.mb-0 La organización y funcionamiento de redes para la prestación de servicios de salud.
        .col-12.col-lg-8.mb-3.h-100(data-aos="zoom-in")
          .row.bg4
            .col-1.px-0.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema1/img10.svg', style="width: 50px").m-auto
            .col-11.d-flex.align-items-center
              p.mb-0 Estimado aprendiz, Una vez que visualice los dos videos, debe realizar una infografía donde plasme las ideas más importantes relacionadas con la ley 1122 de 2007.
    .row.justify-content-center
      .col-lg-6
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small El siguiente enlace lleva a un video en donde se presenta una breve explicación sobre los componentes de la ley 1122 de 2007.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/pBYY-uG63PQ" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-camera-retro   
      .col-lg-6
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small El siguiente enlace lleva a un video donde se presenta una visión con relación a los principales cambios de la Ley 1122 del 2007.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/XD_0h2uK_hw" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-video 
                  
                             
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
