<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Servicio al cliente
    .bg21
      .row.justify-content-center.ps-3(data-aos="fade-right")
        .col-lg-12.mb-3
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema10/img1.png')})`}"
            )(data-aos="fade-right")
            .bloque-texto-g__texto.p-4(data-aos="fade-left")
              p.mb-0 Según el doctor ALBERTO KOMIYA indica que servicio al cliente es el servicio o atención que una empresa o negocio brinda a sus clientes al momento de atender sus consultas, pedidos o reclamos, venderle un producto o entregarle el mismo. (Komiya, 2015)
        p Para contextualizarnos más, hondáremos en los factores que intervienen en el servicio al cliente: (Komiya, 2015)
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-12.col-md-6
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema10/img2.svg').mx-auto
              h4.text-center.text-white Amabilidad
              p.text-center.text-white CHace referencia al trato amable, cortés y servicial. Se da, por ejemplo, Cuando el talento humano de la institución saluda al usuario con una buena cara, lo hace sentir que es muy importante para la institución y que estamos interesados en prestarle el mejor servicio y en satisfacerlo antes que en venderle nuestros servicios.
            .tarjeta.bg17.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema10/img3.svg').mx-auto
              h4.text-center Atención personalizada
              p.text-center.text-#12263F Es la atención directa o personal que toma en cuenta las necesidades, gustos y preferencias particulares del cliente. Se da, por ejemplo, cuando un el Profesional de la salud le indica que ingrese a consulta médica y lo acompaña durante todo su proceso.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema10/img4.svg').mx-auto
              h4.text-center.text-white Rapidez en la atención
              p.text-center.text-white Es la rapidez con la que se le toman la solicitud al cliente, se le entrega su producto, la información requerida, o se le atienden sus consultas o reclamos. Se da, por ejemplo, cuando se cuenta con procesos simples y eficientes, cuando se cuenta con un número suficiente de personal, cuando se le capacita al personal para que brinden una rápida atención, etc.
            .tarjeta.bg17.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema10/img5.svg').mx-auto
              h4.text-center Ambiente agradable
              p.text-center.text-#12263F Un ambiente acogedor en donde nuestro usuario se siente a confortable, a gusto tanto con la atención como con la infraestructura. Se da, por ejemplo, cuando los trabajadores le brindan al usuario un trato amable y amigable.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema10/img6.svg').mx-auto
              h4.text-center.text-white Comodidad
              p.text-center.text-white Hace referencia a que se le brinda y como se le brinda al usuario un servicio, cuando visita la institución de salud. Se da, por ejemplo, cuando las instalaciones de la institución cuentan con espacios amplios y cómodos.
            .tarjeta.bg17.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema10/img7.svg').mx-auto
              h4.text-center Seguridad
              p.text-center.text-#12263F Hace alusión a la seguridad que existe en la institución de salud ofreciéndole tranquilidad al paciente cuando lo visita. Se da, por ejemplo, cuando se cuenta con suficiente personal de seguridad, cuando se tienen claramente marcadas las zonas de seguridad, cuando se tienen claramente señalizadas las vías de escape, cuando se cuenta con botiquines médicos, etc.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema10/img8.svg').mx-auto
              h4.text-center.text-white Higiene
              p.text-center.text-white Nos da a entender sobre la limpieza, aseo y cumplimientos de normas de bioseguridad que hay dentro de una institución prestadora de los servicios de salud tanto en infraestructuras como en su recurso humano. Se da, por ejemplo, cuando los baños de la institución se encuentran siempre limpios, con todos sus implementos de higiene como jabón, papel, etc. Pisos y sanitarios aseados.
    .bg22
      .row.justify-content-center 
        h3.bg6-1.mt-2.py-3.text-center.text-white La importancia del servicio al cliente
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6(data-aos="fade-right")
          .row.align-items-center.mb-5
            .col-lg-12
              figure
                img.img-t(src='@/assets/curso/tema10/img10.svg', alt='').mx-auto.mb-5
            .col-lg-12
              p.mb-0 Cuando un usuario encuentra y recibe un buen servicio, queda satisfecho, esa satisfacción nos permite que regrese y vuelva a utilizar los servicios de salud ofertados por la institución, y que muy probablemente nos recomiende con otros usuarios.
        .col-lg-6(data-aos="fade-right")
          .row.align-items-center.mb-5
            .col-lg-12
              figure
                img(src='@/assets/curso/tema10/img11.svg', alt='').mb-5
            .col-lg-12
              p.mb-0.text-center La misión de cada institución de salud es evitar que al usuario se le preste una mala atención, incentivando así a que deje de utilizar los servicios de salud o pueda llegar a hablar mal de la institución. Se debe procurar porque reciba un buen servicio al cliente, y así lograr su fidelización, la posibilidad de que nos recomiende con otros usuarios.
        .col-lg-6(data-aos="fade-right")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/tema10/img13.svg', alt='').mb-5
            .col-lg-12
              p.mb-3.text-center Si un cliente, recibe una mala atención en nuestra institución, no solo dejará de asistir a sus consultas, sino que muy probablemente también hablará mal de nosotros y contará la experiencia negativa a la que fue expuesto.
              p.mb-0.text-center Si a una mala atención, le sumamos el hecho de que la competencia (otras EPS) cada vez son más en el mercado por lo que ofrecen más beneficios y tecnologías para brindar más calidad en la prestación del servicio. Es posible afirmar que hoy en día es fundamental brindar un buen servicio al cliente si la institución quiere ser competitiva en el mercado. 
        .col-lg-6
          .row.align-items-center.mb-5
            .col-lg-12
              figure
                img(src='@/assets/curso/tema10/img14.svg', alt='').mb-5
            .col-lg-12
              p.mb-0.text-center El buen servicio al cliente debe estar presente en todos los servicios que solicite el usuario. Debe prevalecer la interacción con el usuario, desde el saludo hasta el final de la atención del paciente y su posterior egreso. Para lo cual es necesario capacitar y motivar permanentemente no solo al personal que está en contacto con el usuario sino en general a todo el talento humano de la institución para la prestación de un servicio con calidad.
    p.mb-5.text-center <b>Las técnicas de servicio al cliente pueden agruparse a grandes rasgos en:</b>     
    .bg8-1
      .row.mb-5.justify-content-center.mb-5
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema10/img15.svg', alt='Texto que describa la imagen')
            h4.text-center Técnicas de explicación 
            p.text-center Aquellas en las que se comunica verbalmente la mayor cantidad de información relevante al usuario para ayudarlo a tomar las decisiones más informadas sobre su consumo.
        .col-12.col-md-6.col-lg-4.mb-3.mb-lg-0
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema10/img16.svg', alt='Texto que describa la imagen')
            h4.text-center Técnicas de empatía
            p.text-center Aquellas que brindan al cliente un alto grado de involucramiento de parte de la empresa, que lo hacen sentir.
        .col-12.col-md-6.col-lg-4
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema10/img17.svg', alt='Texto que describa la imagen')
            h4.text-center Técnicas de interrogación
            p.text-center Aquellas que se basan en aplicar al cliente una serie de preguntas (de cuestionario o no) respecto a la materia de sus necesidades, para así brindarle una atención realmente especializada (Raffino, 2020).
      p.mb-5.text-center <b>Los elementos del servicio al cliente son:</b>
    .row.justify-content-center.mb-5
      .col-md-4.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img.img-t(src="@/assets/curso/tema10/img18.png").mx-auto
      .col-lg-8(data-aos="zoom-in") 
        LineaTiempoD.color-primario.mb-5
          .row.justify-content-center.align-items-center(numero="1" titulo="Contacto cara a cara")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Es decir, la posibilidad de entrevistarse con el cliente y darle atención personalizada. Esto refuerza la relación con el usuario y le hace sentir escuchado.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema10/img19.png").mx-auto
          .row.justify-content-center.align-items-center(numero="2" titulo="Relación clientelar")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Fortalecer la relación con nuestro usuario es clave en los servicios de salud, de ella depende la continuidad de los usuarios a la institución.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema10/img20.png").mx-auto
          .row.justify-content-center.align-items-center(numero="3" titulo="Correspondencia")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") La correspondencia entre cliente y empresa es clave para una atención al cliente saludable, ya que fortalece la identificación entre ambos y la resolución de los problemas que se presenten.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema10/img21.png").mx-auto   
          .row.justify-content-center.align-items-center(numero="4" titulo="Reclamos y cumplidos")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") El cliente debe contar con alguna línea que le permitan ejercer sus deberes y derechos.
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema10/img22.png").mx-auto 
          .row.justify-content-center.align-items-center(numero="5" titulo="Instalaciones")
            .col-md-10(data-aos="fade-left")
              p.text-small(numero="1" titulo="Título y alcance") Debe brindársele al usuario la seguridad y acogida durante su asistencia a la institución (Raffino, 2020).
            .col-lg-2.mb-lg-0.mb-3
              img.img-t(src="@/assets/curso/tema10/img23.png").mx-auto
    .row.justify-content-center
      .col-lg-6
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.d-flex.align-items-center
                  p.text-small.mt-3 En el siguiente enlace se encuentra un video que da a conocer la importancia de prestar un servicio al cliente con calidad.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/5xGoNUkHpZQ" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-camera-retro   

      .col-lg-6
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente enlace se presenta un video llamado “¡Qué Crees! Servicio al cliente” y muestra lo que no se debe hacer en la atención al usuario.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/h_ChFJlNGLA" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-video 
    .row.justify-content-center.ps-3.mb-5
      .col-lg-12
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema5/img1.png")
            .col
              .row.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  p <b>La calidad de atención en los servicios de salud</b>
                  p A continuación, se encuentra una videoconferencia de la organización panamericana de la salud con intervención de los doctores Luis E, Núñez. Director de promoción de salud de 2015 y Giovanny Guzmán asesor de sistema de la OPS.
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/embed/UQ4wuzF5eNY" target="_blank").mb-0                    
                    span Ver video
                    i.fas.fa-camera-retro  

                    
</template>

<script>
export default {
  name: 'Tema10',
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
