<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Cómo implementar el PAMEC con enfoque en seguridad del paciente
    .bg20
      .row.justify-content-center.align-items-center.mb-5  
        .col-lg-8
          .row.align-items-center.mb-3
            .col-lg-2
              figure
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema8/img2.svg', alt='')
            .col-lg-10
              p.mb-0 PAMEC es el Programa de Auditoría para el Mejoramiento de la Calidad en la Atención en Salud - PAMEC.
          .cajon.color-acento-contenido.p-4(data-aos="fade-left").mb-3
            p En el 2015 con la resolución 226. Por medio de la cual se adiciona el numeral 2.2 del Manual de Inscripción de Prestadores y Habilitación de Servicios de Salud, adoptado mediante la Resolución 2003 de 2014, en el sentido de establecer un trámite especial para las Instituciones Prestadoras de Servicios de Salud intervenidas por la Superintendencia Nacional de Salud. 
          p La Resolución 1043 de 2006 establece que el Programa de Auditoria para el Mejoramiento de la Calidad de la Atención en Salud, PAMEC “es la forma a través de la cual la institución implementará el componente de Auditoria para el Mejoramiento de la Calidad.”       
        .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema8/img1.png')
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta.color-primario.p-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img(src="@/assets/curso/tema3/img3.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p.tamp Normatividad
                  .col-sm-auto.d-flex.align-items-center
                    a.boton.color-acento-botones.me-3.mg4(href="https://ecored-sena.github.io/TECNICO_01_CF2_ADMINISTRATIVO_EN_SALUD/public/media/documentos/Resolucion_1043_de_2006.pdf" target="_blank").mb-0                    
                      span Enlace web
                      i.fas.fa-link
      .row.justify-content-center.ps-3.mb-5
        .col-lg-6
          .tarjeta.color-primario.p-4
            .row.justify-content-around.align-items-center
              
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p En el siguiente enlace se encuentra un video donde se da una explicación más detallada de qué es el PAMEC, que cuenta con unos niveles de operación como: autocontrol, auditoría interna y auditoría externa.
                  .col-sm-auto
                    a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/DthgBWIdvao" target="_blank").mb-0                    
                      span Ver video
                      i.fas.fa-camera-retro  
                     
</template>

<script>
export default {
  name: 'Tema8',
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
