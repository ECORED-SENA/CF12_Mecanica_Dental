<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Exención concurrente del pago de cuotas moderadoras, y copagos por leyes especiales
    .row.justify-content-center.align-items-center.bg10.mb-5
      .col-md-6.order-md-1.order-2
        .row.align-items-center.mb-5.ps-3
          .col-lg-2.mt-3
            figure
              img.img-t.d-none.d-lg-block(src='@/assets/curso/tema3/img1.svg', alt='')
          .col-lg-10
            p.mb-0.mt-3 Circular 016 del 2014 del Min de salud. Exención concurrente del pago de cuotas moderadoras y copagos por leyes especiales. 
        .row.justify-content-center.ps-3
          .col-lg-12
            .tarjeta.color-primario.p-4
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/tema3/img3.png")
                .col
                  .row.align-items-center
                    .col.mb-3.mb-sm-0.pt-2
                      p.tamp Acuerdo 365 de 2007.
                    .col-sm-auto.d-flex.align-items-center
                      a.boton.color-acento-botones.me-3.mg4(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%200016%20de%202014.pdf" target="_blank").mb-0                    
                        span Enlace web
                        i.fas.fa-link
      .col-md-6.order-md-2.order-1.mb-md-0.mb-4.px-0(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img1.png") 

</template>

<script>
export default {
  name: 'Tema4',
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
