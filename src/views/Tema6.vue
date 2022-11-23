<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Sobre el sistema único de habilitación
    .bg15
      .row.justify-content-center.mb-5  
        .col-lg-8
          .cajon.color-primario.p-4(data-aos="fade-left")
            p.mb-0 Según el Ministerio de Salud y con el Artículo 2.5.1.3.1.1 del Decreto 780 de 2016, el Sistema Único de Habilitación #[span.txt-c2 es el conjunto de normas, requisitos y procedimientos mediante los cuales se establece, registra, verifica y controla el cumplimiento de las condiciones básicas de capacidad tecnológica y científica], de suficiencia patrimonial y financiera y de capacidad técnico administrativa, indispensables para la entrada y permanencia en el Sistema, los cuales buscan dar seguridad a los usuarios frente a los potenciales riesgos asociados a la prestación de servicios y son de obligatorio cumplimiento por parte de los prestadores de servicios de salud y las empresas administradoras de planes de beneficios (EAPB). (salud, s.f.) 
          .row.align-items-center.mb-3
            .col-lg-2
              figure
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema6/img2.svg', alt='')
            .col-lg-10
              p.mb-0.mt-3 Con el fin de definir los procedimientos y condiciones de inscripción y habilitación para los prestadores de servicios de salud, el Ministerio de Salud y Protección Social, emitió el 28 de mayo de 2014 la Resolución 2003. Derogada por el art. 27 de la Resolución 3100 de 2019 que nos indica:
          p Dentro de los principales cambios encontramos:
          ul.lista-ul
            li(data-aos="fade-right")
              i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px") 
              p.mb-0 Mejora la estructura general de la presentación de la norma.
            li(data-aos="fade-right")
              i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px") 
              p.mb-0 Mayor claridad en las definiciones.
            li(data-aos="fade-right")
              i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px") 
              p.mb-0 Activación del REPS (Base de datos de las entidades departamentales y distritales de salud, en la cual se efectúa el registro de los Prestadores de Servicios de Salud que se encuentren habilitados.
            li(data-aos="fade-right")
              i.fas.fa-angle-right(style="color: #0273BC; font-size: 20px") 
              p.mb-0 Nuevos requisitos.

        .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema6/img1.png')
      .row.justify-content-center.ps-3.mb-5
        .col-lg-6
          .tarjeta.color-primario.p-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img(src="@/assets/curso/tema3/img3.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p Resolución numero 00002003 de 2014
                  .col-sm-auto.d-flex.align-items-center
                    a.boton.color-acento-botones.me-3.mg4(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%200016%20de%202014.pdf" target="_blank").mb-0                    
                      span Enlace web
                      i.fas.fa-link
        .col-lg-6.mb-5
          .tarjeta.color-primario.p-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img(src="@/assets/curso/tema3/img3.png")
              .col
                .row.align-items-center
                  .col.mb-3.mb-sm-0.pt-2
                    p.tamp Derogada por el art. 27 de la resolución 3100 de 2019
                  .col-sm-auto.d-flex.align-items-center
                    a.boton.color-acento-botones.me-3.mg4(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%200016%20de%202014.pdf" target="_blank").mb-0                    
                      span Enlace web
                      i.fas.fa-link
    .bg16
      .row.justify-content-center.mb-5 
        .col-xl-8.mx-auto.order-2.order-xl-1.pe-xl-4
          .title-edit.mb-3(data-aos="fade-right")
            span(style="background-color: #0082EF; width: 21px; height: 21px;")
            h4 Generalidades del proceso de habilitación
          p(data-aos="fade-right") En esta página podrá encontrar temas de su interés con relación al proceso de habilitación
          ul.lista-ul
            li(data-aos="fade-right")
              i.fas.fa-circle(style="color: #13C6CC; font-size: 8px") 
              p.mb-0 Normas vigentes.
            li(data-aos="fade-right")
              i.fas.fa-circle(style="color: #13C6CC; font-size: 8px") 
              p.mb-0 Antecedentes normativos.
            li(data-aos="fade-right")
              i.fas.fa-circle(style="color: #13C6CC; font-size: 8px") 
              p.mb-0 Documentos técnicos.
            li(data-aos="fade-right")
              i.fas.fa-circle(style="color: #13C6CC; font-size: 8px") 
              p.mb-0 Paquetes instruccionales de las buenas prácticas para la seguridad del paciente.
            li(data-aos="fade-right")
              i.fas.fa-circle(style="color: #13C6CC; font-size: 8px") 
              p.mb-0 Registro Especial de Prestadores de Salud.
        .col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2
          img(src="@/assets/curso/tema6/img4.svg")
    .bg8
      .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
        .col-lg-12.col-md-6
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema6/img5.svg').mx-auto
              h4.text-center.text-white Resolución 4445 de 1996
              p.text-center.text-white Condiciones sanitarias que debencumplir las Instituciones Prestadoras de Servicios de Salud.
            .tarjeta.bg17.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema6/img6.svg').mx-auto
              h4.text-center Resolución 1011 de 2006
              p.text-center.text-#12263F Establece el Sistema Obligatorio de Garantía de Calidad de la Atención de Salud del Sistema General de Seguridad Social en Salud.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema6/img5.svg').mx-auto
              h4.text-center.text-white Resolución 1043 de 2006
              p.text-center.text-white “Por la cual se establecen las condiciones que deben cumplir los Prestadores de Servicios de Salud para habilitar sus servicios e implementar el componente de auditoría para el mejoramiento de la calidad de la atención y se dictan otras disposiciones”.
            .tarjeta.bg17.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema6/img6.svg').mx-auto
              h4.text-center Resolución 1315 de 2006
              p.text-center.text-#12263F Continuación de la Resolución, “Por la cual se definen las Condiciones de Habilitación para los Centros de Atención en Drogadicción y servicios de Farmacodependencia, y se dictan otras disposiciones”.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema6/img5.svg').mx-auto
              h4.text-center.text-white Resolución 1448 de 2006
              p.text-center.text-white “Por la cual se definen las condiciones de habilitación para las instituciones que presentan servicios de salud bajo la modalidad de telemedicina.
    .bg18
      .row.justify-content-center.mb-5  
        .col-lg-8
          p En el 2007 la resolución 2680 de 2007 se modifica parcialmente la Resolución 1043 de 2006 y se dictan otras disposiciones.
          p En el 2007 la resolución 3763. Por la cual se modifican parcialmente las Resoluciones 1043 y 1448 de 2006 y la Resolución 2680 de 2007 y se dictan otras disposiciones.
          .row.align-items-center.mb-3
            .col-lg-2
              figure
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema6/img2.svg', alt='')
            .col-lg-10
              p.mb-0.mt-3 Posteriormente con la resolución 1441 de 2013. #[span.txt-c2 Definen los procedimientos y condiciones que deben cumplir los Prestadores de Servicios de Salud para habilitar los servicios y se dictan otras Disposiciones.] Derogando las resoluciones Resolución 4445 de 1996, Resolución 1043 de 2006 y Resolución 1448 de 2006.
          p Resolución 2003 de 2014 se definen los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud.
          .cajon.color-primario.p-4(data-aos="fade-left")
            p.mb-0 En el 2015 con la resolución 226. Por medio de la cual se adiciona el numeral 2.2 del Manual de Inscripción de Prestadores y Habilitación de Servicios de Salud, adoptado mediante la Resolución 2003 de 2014, en el sentido de establecer un trámite especial para las Instituciones Prestadoras de Servicios de Salud intervenidas por la Superintendencia Nacional de Salud.        
        .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema6/img7.png')
      .row.justify-content-center.mb-5  
        .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema6/img8.png')
        .col-lg-8
          p Posteriormente se modifica con la resolución 3678 de 2014 Por la cual se modifica la Resolución 2003 de 2014.
          p En el 2015 la circular 0036 Inscripción y habilitación en el registro especial de prestadores de servicios de salud de las instituciones públicas y privadas que prestan el servicio público de bienestar familiar.
          p Posteriormente en el 2015 con la resolución 5158 de 2015 Por la cual se adiciona el artículo 15 de la Resolución 2003 de 2014.
          p Con la resolución 1416 de 2016 Por la cual se adiciona el Manual de Inscripción de Prestadores y Habilitación de Servicios de Salud adoptado por la Resolución 2003 de 2014.
          .row.align-items-center
            .col-lg-2
              figure
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema6/img2.svg', alt='')
            .col-lg-10
              p.mb-0.mt-3 Finalmente, La Resolución 2003/2014 es derogada por la Resolución 3100 de 2019 Por la cual se definen los procedimientos y condiciones de inscripción de los prestadores de servicios de salud y de habilitación de los servicios de salud y se adopta el Manual de Inscripción de Prestadores y Habilitación de Servicios de Salud (Ministerio de Salud, s.f.)
    .row.justify-content-center.mb-5 
      .col-xl-12.mx-auto.order-2.order-xl-1.pe-xl-4
        .title-edit.mb-3(data-aos="fade-right")
          span(style="background-color: #0082EF; width: 21px; height: 21px;")
          h4 Sistema Único de Habilitación
        p(data-aos="fade-right") La Resolución 2003/2014 es derogada por la resolución 3100 de 2019 nos indica que los estándares que deben cumplir los Prestadores de Servicios de Salud son 7 y son de obligatorio cumplimiento. Estos son:    
    .row.justify-content-center.mb-5
      .col-md-3.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema6/img9.png")
      .col-lg-9(data-aos="zoom-in") 
        LineaTiempoD.color-primario.mb-5
          .row.justify-content-center.align-items-center(numero="1" titulo="Talento humano")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Son las condiciones mínimas para el ejercicio profesional y ocupacional del Talento Humano asistencial y la suficiencia de este recurso para el volumen de atención.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema6/img10.png").mx-auto
          .row.justify-content-center.align-items-center(numero="2" titulo="Infraestructura")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Son las condiciones y el mantenimiento de la infraestructura de las áreas asistenciales o características de ellas, que condicionen procesos críticos asistenciales.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema6/img11.png").mx-auto
          .row.justify-content-center.align-items-center(numero="3" titulo="Dotación")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Población en condiciones de desplazamiento forzado.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema6/img12.png").mx-auto   
          .row.justify-content-center.align-items-center(numero="4" titulo="Interdependencia")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Es la existencia o disponibilidad de servicios o productos, propios o contratados de apoyo asistencial o administrativo, necesarios para prestar en forma oportuna, segura e integral los servicios ofertados por un prestador.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema6/img13.png").mx-auto 
          .row.justify-content-center.align-items-center(numero="5" titulo="Procesos prioritarios")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Es la existencia, socialización y gestión del cumplimiento de los principales procesos asistenciales, que condicionan directamente la prestación con calidad y con el menor riesgo posible, en cada uno de los servicios de salud.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema6/img14.png").mx-auto 
          .row.justify-content-center.align-items-center(numero="6" titulo="Historia clínica y registros")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Es la existencia y cumplimiento de procesos, que garanticen la historia clínica por paciente y las condiciones técnicas de su manejo y el de los registros de procesos clínicos diferentes a la historia clínica que se relacionan directamente con los principales riesgos propios de la prestación de servicios.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema6/img15.png").mx-auto 
          .row.justify-content-center.align-items-center(numero="7" titulo="Medicamentos, dispositivos médicos e insumos")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Es la existencia de procesos para la gestión de medicamentos, homeopáticos, fitoterapéuticos, productos biológicos, componentes anatómicos, dispositivos médicos, reactivos de diagnóstico in vitro, elementos de rayos X y de uso odontológico, así como de los demás insumos asistenciales que utilice la institución incluidos los que se encuentran en los depósitos o almacenes del prestador, cuyas condiciones de selección, adquisición, transporte, recepción, almacenamiento, conservación, control de fechas de vencimiento, control de cadena de frío, distribución, dispensación, uso, devolución, seguimiento al uso y disposición final, condicionen directamente riesgos en la prestación de los servicios.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema6/img16.png").mx-auto
    .row.justify-content-center.ps-3.mb-5
      .col-lg-12
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/img1.png")
            .col
              .row.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  h4 Estimado aprendiz
                  p En el siguiente enlace se encuentra un video sobre Sistema Único de Habilitación podrá visualizar de una manera más clara que significa este proceso y explica cada uno de los estándares que se deben cumplir.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/c4xSFTy0TKQ" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-camera-retro  
    .row.justify-content-center
      .col-xl-12.mx-auto.order-2.order-xl-1.pe-xl-4
        .title-edit.mb-3(data-aos="fade-right")
          span(style="background-color: #0082EF; width: 21px; height: 21px;")
          h4 ¿Qué es el ReTHUS?
    .row.align-items-center.mb-5
      .col-lg-6.col-lg.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido3.p-4.h-100.mb-5
          p Es la inscripción en el sistema de información definido por el Ministerio de Salud y Protección Social, del talento humano en salud que cumple con los requisitos establecidos en la Ley 1164 de 2007, proceso con el cual se entiende que dicho personal se encuentra autorizado para el ejercicio de una profesión u ocupación del área de la salud.
        .row.justify-content-center
          .col-md-12.col-10.mb-md-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema6/img16.svg")
      .col-lg-6.col-lg.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido3.p-4.h-100.mb-5
          p El ReTHUS señala también la información sobre las sanciones del talento humano en salud que, según el caso, reportan los Tribunales ético-disciplinarios del área de la salud, autoridades competentes o los particulares a quienes se les deleguen las funciones públicas.
           br
          
        .row.justify-content-center
          .col-md-12.col-10.mb-md-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema6/img17.svg")
    .row.justify-content-center.ps-3.mb-5
      .col-lg-12
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/img1.png")
            .col
              .row.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  p El siguiente enlace se presenta un video que explica de una manera más clara que el ReTHUS es una inscripción que deben realizar todos los prestadores de salud para quedar registrado en su base de datos.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/NbSVcnX0SZI" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-camera-retro  
                    
</template>

<script>
export default {
  name: 'Tema6',
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
