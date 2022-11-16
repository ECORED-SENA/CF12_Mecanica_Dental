<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Método proactivo y reactivo
    .row.justify-content-center.align-items-center
      .col-lg-12
        .row.align-items-center.mb-5
          .col-lg-1
            figure
              img.img-t.d-none.d-lg-block(src='@/assets/curso/tema12/img1.svg', alt='')
          .col-lg-11
            p.mb-0 Con respecto al Método proactivo y reactivo, cada IPS está encargada de realizar su estrategia para determina la satisfacción y necesidad de sus usuarios. Para ello existen diferentes herramientas de fácil manejo, que permiten determinar el grado de satisfacción de nuestros usuarios.
    .bg8-1  
      .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .tarjeta.bg9.p-4.h-100
            figure.mb-2
              img.img-t(src='@/assets/curso/tema12/img2.svg').mx-auto
            h4.text-center.text-white Métodos proactivos
            p.text-center.text-white Son los diferentes instrumentos que permiten identificar las necesidades y el grado de satisfacción del usuario con la atención brindada.   
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .tarjeta.bg17.p-4.h-100
            figure.mb-2
              img.img-t(src='@/assets/curso/tema12/img3.svg').mx-auto
            h4.text-center Métodos reactivos
            p.text-center.text-#12263F Hace referencia a los procedimientos institucionales para el manejo de la información del usuario obtenida por los métodos proactivos. (Moreno, 2015)
            
    p.mb-3 Podemos inferir que los dos métodos, proactivo y reactivo, deben estar estrechamente relacionados para ser efectivos y ejecutar planes de mejoramiento personal tanto para el usuario como para la institución, en aras de una excelente calidad en la atención de los clientes.
    p.mb-5.text-center <b>Algunos instrumentos muy eficientes que pueden ser utilizados son:</b>
    TabsB.color-acento-contenido.mb-5(data-aos="fade") 
      .py-5.py-md-5.bg10(titulo="Entrevista" :icono="require('@/assets/curso/tema12/img4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Entrevista
            p Es el sistema de comunicación que permite conocer la opinión de otros, en nuestro caso serían nuestros clientes o usuarios, sobre algún tema en específico. Esto implica conocimiento previo del entrevistado y objetivos planteados por parte del entrevistador. (Moreno, 2015)  
          .col-lg-4
            figure
              img(src="@/assets/curso/tema12/img7.png", alt="alt")

      .py-4.py-md-5.bg10(titulo="Encuesta" :icono="require('@/assets/curso/tema12/img5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Encuesta
            p La encuesta es un instrumento usado para conocer la opinión de las personas que conforman un determinado sector. Estas encuestas ayudan a determinar que le gusta y que no les gusta a los clientes, áreas de posibles mejoras, incluso ayuda para saber que otro tipo de necesidades tienen los clientes. (Moreno, 2015)
          .col-lg-4
            figure
              img(src="@/assets/curso/tema12/img8.png", alt="alt")

      .py-4.py-md-5.bg10(titulo="Buzón de sugerencias" :icono="require('@/assets/curso/tema12/img6.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Buzón de sugerencias         
            p.mb-0 Este instrumento permite a los usuarios depositar de manera escrita sus necesidades, recomendaciones, quejas, reclamos o incluso felicitaciones hacia la entidad o las personas en específico dependiendo del motivo por el cual se usa el buzón. Los buzones deben estar a la vista del público, tener fácil acceso, contar con los elementos necesarios para poder interponerla queja o sugerencia. (Moreno, 2015)

          .col-lg-4
            figure
              img(src="@/assets/curso/tema12/img9.png", alt="alt")
    .row.justify-content-center.ps-3.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/img1.png")
            .col
              .row.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  p El siguiente enlace lleva a un video en donde se da una breve explicación sobre qué es y la diferencia entre Proactivo vs Reactivo.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/_DnY90zXLBk" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-camera-retro   

                    
</template>

<script>
export default {
  name: 'Tema12',
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
