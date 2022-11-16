<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Plan de intervenciones colectivas - PIC
    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-12
        .row.align-items-center.mb-5
          .col-lg-1
            figure
              img(src='@/assets/curso/tema8/img2.svg', alt='')
          .col-lg-11
            p.mb-0 La Resolución 518 define al PIC como un plan complementario al Plan Obligatorio de Salud - POS, que busca impactar positivamente en los determinantes sociales de la salud e incidir en sus resultados.
      .col-lg-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema9/img1.svg').mb-5
      .col-lg-12.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .cajon.color-primario.p-4(data-aos="fade-left").mb-3
          p Es un plan de beneficios compuesto por intervenciones de promoción de la salud y gestión del riesgo, las cuales se enmarcan en las estrategias definidas en el Plan Territorial de Salud (PTS), y buscan impactar positivamente los determinantes sociales de la salud y alcanzar los resultados definidos en el PTS. Comprende un conjunto de intervenciones, procedimientos, actividades e insumos definidos en el anexo técnico de la Resolución 518 de 2015, los cuales se ejecutarán de manera complementaria a otros planes de beneficio. (salud, min salud, s.f.)
      
</template>

<script>
export default {
  name: 'Tema9',
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
