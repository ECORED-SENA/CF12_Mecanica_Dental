<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Sobre la operatividad del sistema único de acreditación
    .row.justify-content-center.align-items-center.bg10.mb-5
      .col-md-6.order-md-1.order-2.ps-5
        h4 Según el Decreto 780 de 2016
        p.mb-3.mt-3 “El Sistema Único de Acreditación en Salud. Es el conjunto de procesos, procedimientos y herramientas de implementación voluntaria y periódica, los cuales están destinados a comprobar el cumplimiento gradual de niveles de calidad superiores a los requisitos mínimos obligatorios, para la atención en salud, bajo la dirección del Estado y la inspección, vigilancia y control de la Superintendencia Nacional de Salud”.
        .row.justify-content-center
          .col-lg-12
            .tarjeta.color-primario.p-4
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/tema3/img3.png")
                .col
                  .row.align-items-center
                    .col.mb-3.mb-sm-0.pt-2
                      p.tamp Sistema único de acreditación 
                    .col-sm-auto.d-flex.align-items-center
                      a.boton.color-acento-botones.me-3.mg4(href="https://www.minsalud.gov.co/salud/PServicios/Paginas/sistema-unico-acreditacion-sistemaobligatorio-garantia-calidad.aspx" target="_blank").mb-0                    
                        span Enlace web
                        i.fas.fa-link
      .col-md-6.order-md-2.order-1.mb-md-0.mb-4.px-0(data-aos="fade-left")
        img(src="@/assets/curso/tema7/img1.png")
    
</template>

<script>
export default {
  name: 'Tema7',
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
