<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Régimen de pagos compartidos y cuotas moderadoras dentro del sistema general de seguridad social en salud
    .bg5
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-1
          figure
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img2.svg', alt='')
        .col-lg-11
          p De conformidad con el numeral 3 del artículo 160 de la Ley 100 de 1993, y el parágrafo del artículo 3º del Acuerdo 260 del Consejo Nacional de Seguridad Social en Salud - CNSSS, es deber del afiliado cotizante y de los beneficiarios cancelar las cuotas moderadoras y los copagos correspondientes.
          p De esta manera, el afiliado cotizante, tan solo tendrá obligación de cancelar cuotas moderadoras, por los servicios sujetos a estas, y no copagos, los cuales solo se cobrarán al cotizante por la atención de sus beneficiarios.
      .tarjeta--container.row.mb-5    
        .col-md.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.mb-md-0(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-3
              figure
                img(src='@/assets/curso/tema2/img3.svg', alt='Texto que describa la imagen')
            
          h4.text-center Cuota moderadora
          p Las cuotas moderadoras tienen por objeto regular la utilización del servicio de salud y estimular su buen uso, promoviendo en los afiliados cotizantes y a sus beneficiarios, la inscripción en los programas de atención integral desarrollados por las EPS en el Régimen contributivo.
        
        .col-md.tarjeta.color-primario1.p-5(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-3
              figure
                img(src='@/assets/curso/tema2/img4.svg', alt='Texto que describa la imagen')
            
          h4.text-center Copago
          p Son los aportes en dinero que corresponden a una parte del valor del servicio demandado y tienen como finalidad ayudar a financiar el sistema. Los copagos se aplican única y exclusivamente a los afiliados beneficiarios del Régimen Contributivo y los afiliados al Régimen Subsidiado, según lo establecido en el artículo 3º y 11 del Acuerdo 260 del Consejo Nacional de Seguridad Social en Salud - CNSSS.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
      .row.justify-content-around.align-items-center.mb-5
        .col-lg-12.bg6.py-3
          p.text-white De esta manera, el afiliado cotizante, tan solo tendrá obligación de cancelar cuotas moderadoras, por los servicios sujetos a estas, y no copagos, los cuales solo se cobrarán al cotizante por la atención de sus beneficiarios.
    p.mb-5 En la aplicación de cuotas moderadoras y copagos, deberán respetarse los siguientes principios básicos:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones1.p-4(titulo="Equidad")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Equidad
            p.mb-0 Las cuotas moderadoras y los copagos en ningún caso pueden convertirse en una barrera para el acceso a los servicios, ni ser utilizados para discriminar la población debido a su riesgo de enfermar y morir, derivado de sus condiciones biológicas, sociales, económicas y culturales.
          .col-lg-4.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img6.png').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Información al usuario")
        .row
          .col-lg-12.mb-4.mb-lg-0.p-4
            h4 Información al usuario
            p.mb-0 Las EPS o EPSS deberán informar ampliamente al usuario sobre la existencia, el monto y los mecanismos de aplicación y cobro de cuotas moderadoras y copagos, a que estará sujeto en la respectiva entidad.
          .col-lg-6.d-flex.align-items-center.justify-content-center
            .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
              thead(style="background-color:#1B3F5E")
                tr 
                  th(colspan="12").text-center.text-white Cuota moderadora
              tbody.mb-5     
                tr(style="background-color: #AFC0D1")
                  td(colspan="4").text-center #[b Rango de ingreso en SMLMV]
                  td(colspan="4").mb-4.text-center.mb-0 #[b Cuota en % del SMLDV]
                  
                tr(style="background-color: #FFF")
                  td(colspan="4").text-center Menor a 2 SMLMV
                  td(colspan="4").text-center 11.70%
                tr(style="background-color: #FFF")
                  td(colspan="4").text-center Entre 2 y 5 SMLMV
                  td(colspan="4").text-center 46.10%
                tr(style="background-color: #FFF").mb-5
                  td(colspan="4").text-center Mayor 5 SMLMV
                  td(colspan="4").text-center 121.50%
              .col.bg7.p-3
                p En todo caso, las entidades deben publicar su sistema de cuotas moderadoras y copagos anualmente. Hacer público en un medio masivo de información, por lo menos una vez al año, su plan general de cuotas moderadoras y copagos aplicables a sus afiliados, o cualquier modificación a este.
          .col-lg-6.d-flex.align-items-center.justify-content-center
            .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
              thead(style="background-color:#1B3F5E")
                tr 
                  th(colspan="12").text-center.text-white Cálculo de copago
                tr 
                  td(style="background-color: #AFC0D1")(colspan="12").text-center Para efectuar el cálculo respectivo del copago, siga el siguiente paso.
                tr 
                  td(style="background-color:  #FFF")(colspan="12").text-center El valor total de la factura al servicio que corresponda, aplíquele el porcentaje, según el régimen y el nivel deingreso al que pertenece el usuario.
              tbody     
                tr(style="background-color:#1B3F5E")
                  td.text-center.text-white #[b Régimen]
                  td.mb-4.text-center.text-white.mb-0 #[b Porcentaje]
                  td.mb-4.text-center.text-white.mb-0 #[b Fórmula]
                tr(style="background-color: #AFC0D1")
                  td.text-center Contributivo menor a 2 SMLMV
                  td.text-center 11.50%
                  td.text-center Valor x 0.115
                tr(style="background-color: #AFC0D1")
                  td.text-center Contributivo menor a 2 Y 5 SMLMV
                  td.text-center 17.30%
                  td.text-center Valor x 0.175
                tr(style="background-color: #AFC0D1")
                  td.text-center Contributivo mayor a 5 SMLMV
                  td.text-center 23.00%
                  td.text-center Valor x 0.23
                tr(style="background-color: #AFC0D1")
                  td.text-center Subsidiado
                  td.text-center 10.00%
                  td.text-center Valor x 0.10
      .tarjeta.color-acento-botones1.p-4(titulo="Aplicación general")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 Aplicación general
            p.mb-0 Las EPS o EPSS aplican sin discriminación alguna a todos los usuarios tanto los copagos como las cuotas moderadoras establecidos, de conformidad con lo dispuesto en el Acuerdo en mención.
          .col-lg-4.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img7.png').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="No simultaneidad")
        .row
          .col-lg-8.mb-4.mb-lg-0.p-4
            h4 No simultaneidad
            p.mb-0 En ningún caso pueden aplicarse simultáneamente para un mismo servicio copagos y cuotas moderadoras.(vargas, 2012)
          .col-lg-4.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img8.png').m-auto
    p.mb-5 Según el acuerdo número 26 de 2004 nos indica: tendrán cuta moderadora:
    .bg8
      .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
        .col-lg-12.col-md-6
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema2/img9.svg').mx-auto
              p.text-center.text-white Consulta externa, general, médica, paramédica y especializada.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema2/img10.svg').mx-auto
              p.text-center.text-white Los servicios de odontología.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema2/img11.svg').mx-auto
              p.text-center.text-white Laboratorios.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema2/img12.svg').mx-auto
              p.text-center.text-white Medicamentos.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema2/img13.svg').mx-auto
              p.text-center.text-white Imágenes diagnósticas por imagenología.
            .tarjeta.bg9.p-4.h-100
              figure.mb-3
                img.img-t(src='@/assets/curso/tema2/img14.svg').mx-auto
              a(href="https://www.minsalud.gov.co/salud/PServicios/PublishingImages/triage-clasificacion-pacientes-urgencias.jpg" target="_blank") #[.txt-c1 Urgencia no vital, según el ingreso o salario base de cotización.]
        p.mb-5 En la aplicación de cuotas moderadoras y copagos, deberán respetarse los siguientes principios básicos:
        p.mb-5.text-center <b>Según el acuerdo número 260 de 2004 no abra cobro de cuotas moderadoras  en los siguientes casos:</b>
    TabsB.color-acento-contenido.mb-5(data-aos="fade") 
      .py-5.py-md-5.bg10(titulo="Niños, niñas y adolescentes de nivel Sisbén 1 y 2" :icono="require('@/assets/curso/tema2/img15.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Niños, niñas y adolescentes de nivel Sisbén 1 y 2
            p.mb-0 Para los niños, niñas y adolescentes de nivel Sisbén 1 y 2 con discapacidades físicas, sensoriales y cognitivas, enfermedades catastróficas y ruinosas certificadas por el médico tratante, conforme a lo establecido por el artículo 18 de la Ley 1438 de 2011.   
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/img18.png", alt="alt")

      .py-4.py-md-5.bg10(titulo="Niños, niñas y adolescentes víctimas de violencia" :icono="require('@/assets/curso/tema2/img16.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Niños, niñas y adolescentes víctimas de violencia
            p Para los niños, niñas y adolescentes víctimas de violencia física o sexual y todas las formas de maltrato que estén certificadas por la autoridad competente, según el artículo 19 de la Ley 1438 de 2011.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/img19.png", alt="alt")

      .py-4.py-md-5.bg10(titulo="Mujeres víctimas de violencia" :icono="require('@/assets/curso/tema2/img17.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Mujeres víctimas de violencia            
            p.mb-0 Para las mujeres víctimas de violencia física o sexual, certificados por la autoridad competente. La prestación del servicio médico incluirá la atención psicológica, psiquiátrica y la habitación provisional, en los términos de la Ley 1258 de 2007, de acuerdo con lo definido por el artículo 54 de la Ley 1438 de 2011.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/img20.png", alt="alt")
    .row.justify-content-center
      .col-lg-12
        .tarjeta.color-acento-contenido1.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-1.col-sm-1.col-lg-1
              img(src="@/assets/curso/tema2/img22.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white Segun lo definido en el numeral 3 del articulo 160 y el articulo 187 de la ley 100 de 1993 y el acuerdo 260 del Consejo Nacional de Seguridad Social en Salud - CNSSS.     
      p.mb-5 Los copagos, a que están obligados los beneficiarios en el régimen contributivo y los afiliados al régimen subsidiado son:  
    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA.margslyd(tipo="b")(data-aos="fade-right")
        .row.align-items-center.justify-content-center              
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 1                             
              p Los servicios y procedimientos no quirúrgicos del POS que no tengan que ver con acciones de promoción y prevención, programas de atención materno infantil, programas de control de enfermedades transmisibles, enfermedades catastróficas o de alto costo, la atención inicial de urgencias, consulta externa médica, odontológica, paramédica y de medicina alternativa aceptada, consulta externa por médico especialista, fórmula de medicamentos para tratamiento ambulatorio, exámenes de diagnóstico por laboratorio clínico, ordenados en forma ambulatoria y que no requieran autorización adicional a la del médico tratante, y exámenes de diagnóstico por imagenología ordenados en forma ambulatoria y que no requieran autorización adicional a la del médico tratante.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img23.png').mx-auto
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 2                            
              p Los servicios del POS de atención hospitalaria y los procedimientos de cirugía que no tengan que ver con acciones de promoción y prevención, programas de atención materno infantil, programas de control de enfermedades transmisibles, enfermedades catastróficas de alto costo, la atención inicial de urgencias.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img24.png').mx-auto 
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 3                           
              p Los procedimientos no quirúrgicos necesarios para rehabilitación, como las terapias (física, respiratoria, ocupacional, de lenguaje, entre otras).
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img25.png').mx-auto  
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 4                           
              p Las imágenes diagnósticas invasivas tales como el procedimiento de endoscopia, rectoscopia y medios de contraste.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img26.png').mx-auto 
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 5                           
              p Los procedimientos de odontología diferente a consulta, tales como la obturación y la endodoncia por lo que deberán aplicarse copagos a todos los servicios contenidos en el plan obligatorio de salud.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img27.png').mx-auto  
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 6                           
              p Los servicios de promoción y prevención.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img28.png').mx-auto   
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 7                           
              p Los programas de control en atención materno infantil.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img29.png').mx-auto   
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 8                           
              p Los programas de control en atención de las enfermedades transmisibles.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img30.png').mx-auto   
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 9                           
              p Las enfermedades catastróficas o de alto costo. La atención inicial de urgencias.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img31.png').mx-auto  
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 10                           
              p Los servicios sujetos a cuotas moderadoras, Para los niños, niñas y adolescentes de nivel Sisbén 1 y 2 con enfermedades catastróficas certificadas por el médico tratante, conforme a lo establecido por el artículo 18 de la Ley 1438 de 2011.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img32.png').mx-auto 
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 11                           
              p Para los niños, niñas y adolescentes víctimas de violencia física o sexual y todas las formas de maltrato que estén certificadas por la autoridad competente, según el artículo 19 de la Ley 1438 de 2011.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img33.png').mx-auto       
        .row.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-5
              .tarjeta-numerada__numero
                .h2 12                           
              p Para las mujeres víctimas de violencia física o sexual, certificados por la autoridad competente. La prestación del servicio médico incluirá la atención psicológica y psiquiátrica y la habitación provisional, en los términos de la Ley 1258 de 2007, de acuerdo con lo definido por el artículo 54 de la Ley 1438 de 2011.
          .col-lg-6
            figure
              img.img-t(src='@/assets/curso/tema2/img34.png').mx-auto 
    .bg11.p-md-5.p-4(data-aos="fade-right") 
      .row.justify-content-center.align-items-center.bg10.mb-5
        .col-md-7.order-md-1.order-2
          .row.align-items-center.mb-5.ps-5
            .col-lg-2
              figure
                img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img36.svg', alt='')
            .col-lg-10
              p.mb-0.mt-3 El monto de copagos se encuentra limitado por dos topes, no puede ser ilimitado. Esto es, el máximo a cobrar por la atención de un mismo evento y el máximo a cobrar por año calendario, según lo establecido por los artículos 9º y 10 del Acuerdo 260 del Consejo Nacional de Seguridad Social en Salud - CNSSS, entendiendo para el efecto “por la atención de un mismo evento”, “el manejo de una patología específica el paciente en el mismo año calendario” (parágrafo, artículo 9º Acuerdo 260 Consejo Nacional de Seguridad Social en Salud - CNSSS)
          p.ms-lg-5.p-lg-0.p-4 Los copagos en el régimen contributivo se pagarán según el ingreso base de cotización del afiliado cotizante teniendo en cuenta el valor de las tarifas pactadas por la EPS con los PSS. De esta manera, el valor por concepto de copagos para afiliados cuyo ingreso base de cotización sea menor a dos (2) salarios mínimos legales mensuales vigentes será el 11.5% de las tarifas pactadas por la EPS con las IPS, para afiliados cuyo ingreso base de cotización esté entre dos y cinco salarios mínimos legales mensuales vigentes, el 17.3% de las tarifas pactadas por la EPS con las IPS, y para afiliados cuyo ingreso base de cotización sea mayor a cinco (5) salarios mínimos legales mensuales vigentes, el 23% de las tarifas pactadas por la EPS con las IPS. (COLOMBIA, 1993) (SALUD, 2004)
        .col-md-5.order-md-2.order-1.mb-md-0.mb-4.px-0(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img35.png") 
    .row.justify-content-center.mb-4
      .col-md-12.mb-4(data-aos="zoom-in")
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr(style="background-color: #E8E8E8") 
                th(colspan="4")  Copagos tope evento y año
                
            tbody
              tr(style="background-color: #F3F3F3") 
                td.text-center <b>Salario base cotización (en smmlv*)</b>
                td.text-center <b>Copago (sobre tarifas**) %</b>
                td.text-center <b>Copago máximo por evento (en smmlv*) %</b>
                td.text-center <b>Copago máximo anual (en smmlv*) %</b>
              tr
                td.text-center Menos 2
                td.text-center 11,5
                td.text-center 28,7
                td.text-center 57,5
              tr
                td.text-center De 2 a 5 1
                td.text-center 7,3
                td.text-center 115
                td.text-center 230
              tr
                td.text-center Más de 5
                td.text-center 23
                td.text-center 230
                td.text-center 460
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta(style="background-color: #0273BC") 
          span 
        h4 Copagos en el régimen subsidiado
    .row.justify-content-center.mb-5  
      .col-lg-8
        .row.align-items-center.mb-5
          .col-lg-2
            figure
              img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img38.svg', alt='')
          .col-lg-10
            p.mb-0.mt-3 Los copagos a que están obligados los afiliados al régimen subsidiado, son los aportes en dinero que corresponden a una parte del valor del servicio demandado y tienen como finalidad ayudar a financiar el sistema, de conformidad con el artículo 2º del Acuerdo 260 del Consejo Nacional de Seguridad social en Salud - CNSSS. Estos, según artículo 7º del Acuerdo 260 del Consejo Nacional de Seguridad Social en Salud - CNSSS, se aplican a:
        .cajon.color-acento-contenido.p-4(data-aos="fade-left")
          p.mb-0 Los servicios y procedimientos no quirúrgicos del #[span.txt-c2 Plan Obligatorio de Salud Subsidiado - POSS] que no tengan que ver con acciones de promoción y prevención, programas de atención materno infantil, programas de control de enfermedades transmisibles, enfermedades catastróficas o de alto costo, la atención inicial de urgencias, consulta externa médica, odontológica, paramédica y de medicina alternativa aceptada, consulta externa por médico especialista, fórmula de medicamentos para tratamiento ambulatorio, exámenes de diagnóstico por laboratorio clínico ordenados en forma ambulatoria y que no requieran autorización adicional a la del médico tratante, y exámenes de diagnóstico por imagenología, ordenados en forma ambulatoria y que no requieran autorización adicional a la del médico tratante.
      .col-lg-4.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img37.png')
    .bg13
      .row.mb-5.justify-content-center
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema2/img39.svg', alt='Texto que describa la imagen')
            p.text-center Los servicios del POSS de atención hospitalaria y los procedimientos de cirugía que no tengan que ver con acciones de promoción y prevención, programas de atención materno infantil, programas de control de enfermedades transmisibles, enfermedades catastróficas o de alto costo, la atención inicial de urgencias.
        .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema2/img40.svg', alt='Texto que describa la imagen')
            p.text-center Los procedimientos no quirúrgicos necesarios para rehabilitación como las terapias física, respiratoria, ocupacional, de lenguaje, entre otras.
        .col-12.col-md-6.col-lg-3
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema2/img41.svg', alt='Texto que describa la imagen')
            p.text-center Las imágenes diagnósticas invasivas tales como el procedimiento de endoscopia, rectoscopia y medios de contraste.
        .col-12.col-md-6.col-lg-3
          .bg12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema2/img42.svg', alt='Texto que describa la imagen')
            p.text-center Los procedimientos de Odontología, diferente a consulta, tales como la obturación y la endodoncia.
      .row.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-1.mb-5
          figure
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/img43.svg', alt='').mx-auto
        .col-lg-11.mb-5.d-flex.align-items-center
          p.m-0 Por esto, deberán aplicarse copagos a todos los servicios contenidos en el Plan Obligatorio de Salud Subsidiado, con excepción de los estipulados en los artículos 18, 19 y 54 de la Ley 1438 de 2011, y 7º, Acuerdo 260 del Consejo Nacional de Seguridad Social en Salud - CNSSS.
    .row.justify-content-center
      .col-lg-7
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img44.svg")
            .col.d-flex.align-items-center
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  p.tamp Cartilla aseguramiento a salud y movilidad Minisalud
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VP/DOA/RL/cartillas-de-aseguramiento-al-sistema-general-de-seguridad-social-en-salud.pdf" target="_blank").mb-0                    
                    span Descargar
                    i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema2',
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
