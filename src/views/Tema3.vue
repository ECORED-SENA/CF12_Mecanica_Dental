<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Disposiciones para el no cobro de copagos a poblaciones especiales en el régimen subsidiado
    .row.justify-content-center.align-items-center.bg10.mb-5
      .col-md-6.order-md-1.order-2
        .row.align-items-center.mb-3.ps-3
          .col-lg-2.mt-3
            figure
              img.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/img1.svg', alt='')
          .col-lg-10
            p.mb-0.mt-3 Acuerdo número 365 de 2007 por el cual se establecen disposiciones para el no cobro de copagos a poblaciones especiales en el régimen subsidiado el consejo nacional  de seguridad social en salud.
        .row.justify-content-center.ps-3
          .col-lg-12
            .tarjeta.color-primario.p-4.mb-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/tema3/img3.png")
                .col
                  .row.align-items-center
                    .col.mb-3.mb-sm-0.pt-2
                      p.tamp Acuerdo 365 de 2007.
                    .col-sm-auto.d-flex.align-items-center
                      a.boton.color-acento-botones.me-3.mg4(href="http://www.emssanar.org.co/media/attachments/2017/08/25/cnsss-acuerdo-365-2007_no-cobro-de-copagos-a-poblaciones-especiales.pdf" target="_blank").mb-0                    
                        span Descargar
                        i.fas.fa-file-download
            p.mb-3 Articulo primero. - poblaciones especiales no sujetas al cobro de copagos en el régimen subsidiado.
      .col-md-6.order-md-2.order-1.mb-md-0.mb-4.px-0(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img2.png") 

    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-12.col-md-6
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema3/img4.png').mx-auto
            p.text-center.text-white Población infantil abandonada.
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema3/img5.png').mx-auto
            p.text-center.text-white Población indigente.
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema3/img6.png').mx-auto
            p.text-center.text-white Población en condiciones de desplazamiento forzado.
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema3/img7.png').mx-auto
            p.text-center.text-white Población indígena.
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema3/img8.png').mx-auto
            p.text-center.text-white Población desmovilizada.
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema3/img9.png').mx-auto
            p.text-center.text-white Personas de la tercera edad en protección de ancianitos en instituciones de asistencia social. Así mismo, no será objeto del cobro de copagos la población rural migratoria.
          .tarjeta.bg9.p-4.h-100
            figure.mb-3
              img.img-t(src='@/assets/curso/tema3/img10.png').mx-auto
            p.text-center.text-white La población ROM que sea asimilable al SISBEN I, situación que deberá identificarse en el correspondiente listado censal.
      .col-lg-12
        .cajon.color-acento-contenido.p-4(data-aos="fade-left")
            p.mb-0 Artículo segundo. - acceso a los servicios de salud. - Con el objeto de facilitar el acceso a los servicios de salud de las poblaciones de que trata el presente Acuerdo, recomendar a la Superintendencia Nacional de Salud que adopte las medidas necesarias para que en el carné de afiliación que deben entregar las Entidades Promotoras de Salud del Régimen Subsidiado-EPS-S se señale expresamente que el portador se encuentra exento del cobro de copagos. Mientras dichas medidas se hacen efectivas, las EPS-S deberán implementar mecanismos que permitan identificar claramente que estas poblaciones se encuentran exentas de copagos.  

</template>

<script>
export default {
  name: 'Tema3',
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
