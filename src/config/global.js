export default {
  global: {
    componenteFormativo:
      'Orientar al usuario hacia los servicios de salud, usando las plataformas de salud y realizando seguimiento de servicio al cliente',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia de orientar al usuario, la cual busca que los aprendices se enfoquen en identificar las necesidades y expectativas de los usuarios que asisten al servicio de salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },

      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Modificaciones en el sistema general de seguridad social en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ley número 1122 de 2007',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objeto',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Régimen de pagos compartidos y cuotas moderadoras dentro del sistema general de seguridad social en salud',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Disposiciones para el no cobro de copagos a poblaciones especiales en el régimen subsidiado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Exención concurrente del pago de cuotas moderadoras, y copagos por leyes especiales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plataformas de salud',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Sobre el sistema único de habilitación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Sobre la operatividad del sistema único de acreditación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Cómo implementar el PAMEC con enfoque en seguridad del paciente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Plan de intervenciones colectivas - PIC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Satisfacción del cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        icono: 'far fa-file-alt',
        numero: '12',
        titulo: 'Método proactivo y reactivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        icono: 'far fa-file-alt',
        numero: '13',
        titulo: 'PQRS',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Ley número 1122 de 2007 (enero 9) Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones El congreso de la república de Colombia',
      referencia:
        'Ley número 1122 de 2007 (enero 9) Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones El congreso de la república de Colombia',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1122-de-2007.pdf',
    },
    {
      tema: 'Cuotas moderadoras y copagos (acuerdo 260 de 2004 cnsss)',
      referencia: 'Cuotas moderadoras y copagos (acuerdo 260 de 2004 cnsss)',
      tipo: 'Página web',
      link:
        'https://pospopuli.minsalud.gov.co/PospopuliWeb/files/cuotas-moderadoras-copagos-2020.pdf',
    },
    {
      tema:
        'Acuerdo número 365 de 2007 por el cual se establecen disposiciones para el no cobro de copagos a poblaciones especiales en el régimen subsidiado el consejo nacional de seguridad social en salud',
      referencia:
        'Acuerdo número 365 de 2007 por el cual se establecen disposiciones para el no cobro de copagos a poblaciones especiales en el régimen subsidiado el consejo nacional de seguridad social en salud',
      tipo: 'Página web',
      link:
        'http://www.emssanar.org.co/media/attachments/2017/08/25/cnsss-acuerdo-365-2007_no-cobro-de-copagos-a-poblaciones-especiales.pdf',
    },
    {
      tema:
        'Conceptos sobre copagos y cuotas moderadoras en el Régimen Contributivo)',
      referencia:
        'Conceptos sobre copagos y cuotas moderadoras en el Régimen Contributivo)',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/SSA/Conceptos-sobre-copagos-cuotas-moderadoras.pdf',
    },
    {
      tema:
        'La nueva plataforma que conecta la salud con la tecnología. 14 de junio de 2019 / MinTIC en los Medios)',
      referencia:
        'La nueva plataforma que conecta la salud con la tecnología. 14 de junio de 2019 / MinTIC en los Medios)',
      tipo: 'Página web',
      link:
        'https://mintic.gov.co/portal/inicio/Sala-de-Prensa/MinTIC-en-los-Medios/101325:La-nueva-plataforma-que-conecta-la-salud-con-la-tecnologia',
    },
    {
      tema:
        'OPS lanzó nueva Plataforma sobre Acceso e Innovación para Tecnologías Sanitarias)',
      referencia:
        'OPS lanzó nueva Plataforma sobre Acceso e Innovación para Tecnologías Sanitarias)',
      tipo: 'Página web',
      link:
        'https://www.paho.org/col/index.php?option=com_content&view=article&id=1568:ops-lanza-una-nueva-plataforma-sobre-acceso-e-innovacion-para-tecnologias-sanitarias&Itemid=553',
    },
    {
      tema: 'SISPRO)',
      referencia: 'SISPRO)',
      tipo: 'Página web',
      link: 'https://www.sispro.gov.co/Pages/Home.aspx',
    },
    {
      tema:
        'Base de Datos Única de Afiliados BDUA del Sistema General de Seguridad Social en Salud BDUA-SGSSS)',
      referencia:
        'Base de Datos Única de Afiliados BDUA del Sistema General de Seguridad Social en Salud BDUA-SGSSS)',
      tipo: 'Página web',
      link:
        'https://www.adres.gov.co/Paginas/PageNotFoundError.aspx?requestUrl=https://www.adres.gov.co/BDUA/Consulta-Afiliados-BDUA',
    },
    {
      tema:
        'Sistema Único de Habilitación/ Ministerio de Salud y Protección Social)',
      referencia:
        'Sistema Único de Habilitación/ Ministerio de Salud y Protección Social)',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/salud/PServicios/Paginas/Sistema-unicode-habilitacion.aspx',
    },
    {
      tema:
        'Resolución número 00002003 de 2014 (28 MAY 2014) Por la cual se definen los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud.)',
      referencia:
        'Resolución número 00002003 de 2014 (28 MAY 2014) Por la cual se definen los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud.)',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%202003%20de%202014.pdf',
    },
    {
      tema:
        'Resolución número 1441 DE 2013 Por la cual se definen los procedimientos y condiciones que deben cumplir los Prestadores de Servicios de Salud para habilitar los servicios y se dictan otras Disposiciones.',
      referencia:
        'Resolución número 1441 DE 2013 Por la cual se definen los procedimientos y condiciones que deben cumplir los Prestadores de Servicios de Salud para habilitar los servicios y se dictan otras Disposiciones.',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1441-de-2013.pdf',
    },
    {
      tema:
        'Resolución número 2082 DE 2014 Por la cual se dictan disposiciones para la operatividad del Sistema Único de Acreditación en Salud.',
      referencia:
        'Resolución número 2082 DE 2014 Por la cual se dictan disposiciones para la operatividad del Sistema Único de Acreditación en Salud.',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-2082-de-2014.pdf',
    },
    {
      tema:
        'Sistema Único de Acreditación Ministerio de Salud y Protección Social',
      referencia:
        'Sistema Único de Acreditación Ministerio de Salud y Protección Social',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/salud/PServicios/Paginas/sistema-unico-acreditacion-sistemaobligatorio-garantia-calidad.aspx',
    },
    {
      tema: 'ABC Sobre el sistema único de acreditación en salud',
      referencia: 'ABC Sobre el sistema único de acreditación en salud',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/abc-suas.pdf',
    },
    {
      tema: 'Definición de satisfacción del cliente',
      referencia: 'Definición de satisfacción del cliente',
      tipo: 'Página web',
      link: 'https://definicion.de/satisfaccion-del-cliente/',
    },
    {
      tema:
        'Sistema De Atención De Peticiones, Quejas, Reclamos Y Sugerencias (PQRS)',
      referencia:
        'Sistema De Atención De Peticiones, Quejas, Reclamos Y Sugerencias (PQRS)',
      tipo: 'Página web',
      link:
        'https://www.isotools.org/2017/10/24/sistema-atencion-peticiones-quejas-reclamos-sugerencias-pqrs/',
    },
    {
      tema: 'Ley 1122 de 2007. 8 abr de 2007. Publicado por Angie Montoya.',
      referencia:
        'Ley 1122 de 2007. 8 abr de 2007. Publicado por Angie Montoya.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pBYY-uG63PQ',
    },
    {
      tema: 'Ley 1122 del 2007. Principales cambios. 31 jul de 2014.',
      referencia: 'Ley 1122 del 2007. Principales cambios. 31 jul de 2014.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XD_0h2uK_hw',
    },
    {
      tema:
        'Ministerio de Salud y Protección Social. (2015), Cartilla aseguramiento a salud y movilidad Min salud.',
      referencia:
        'Ministerio de Salud y Protección Social. (2015), Cartilla aseguramiento a salud y movilidad Min salud.',
      tipo: 'Artículo',
      link:
        'https://issuu.com/comunicacionessavia/docs/cartilla_aseguramiento_a_salud_y_mo',
    },
    {
      tema: 'Socha, Daniela. (2017). SISPRO.',
      referencia: 'Socha, Daniela. (2017). SISPRO.',
      tipo: 'Artículo - presentación',
      link: 'https://prezi.com/p/0rvukzynlc9m/sispro/',
    },
    {
      tema: 'Ministerio de Salud. Sistema único de habilitación.',
      referencia: 'Ministerio de Salud. Sistema único de habilitación.',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/salud/PServicios/Paginas/Sistema-unicode-habilitacion.aspx',
    },
    {
      tema:
        'Ministerio de Salud. Registro Único Nacional del Talento Humano en Salud - RETHUS.',
      referencia:
        'Ministerio de Salud. Registro Único Nacional del Talento Humano en Salud - RETHUS.',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/salud/PO/Paginas/registro-unico-nacional-del-talento-humano-en-salud-rethus.aspx',
    },
    {
      tema:
        'Implementación del PAMEC con énfasis en Seguridad del Paciente - Videoconferencia. 11 oct de 2016.',
      referencia:
        'Implementación del PAMEC con énfasis en Seguridad del Paciente - Videoconferencia. 11 oct de 2016.',
      tipo: 'Video',
      link: 'Video',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente agradable',
      significado:
        'un ambiente agradable es un ambiente acogedor en donde el cliente se siente a gusto.',
    },
    {
      termino: 'Área de procedimientos menores',
      significado:
        'lugar físico limpio, no necesariamente delimitado con barrera física, ubicado en consultorios de enfermería, de terapias, de medicina general o de medicina especializada, en el que se realizan procedimientos menores.',
    },
    {
      termino: 'Asistencia personal',
      significado:
        'apoyo efectivo que terceras personas dan a la persona con discapacidad, para facilitar la realización de sus actividades de la vida diaria. Asistencia no personal: Dispositivos de apoyo o productos de apoyo que facilitan a la persona con discapacidad la realización de sus actividades de la vida diaria.',
    },
    {
      termino: 'Asistencia no personal',
      significado:
        'dispositivos de apoyo o productos de apoyo que facilitan a la persona con discapacidad la realización de sus actividades de la vida diaria.',
    },
    {
      termino: 'Atención de urgencia',
      significado:
        'es el conjunto de acciones realizadas por un equipo de salud debidamente capacitado y con los recursos materiales necesarios para satisfacer la demanda de atención generada por las urgencias.',
    },
    {
      termino: 'Atención inicial de urgencias',
      significado:
        'se define la atención inicial de urgencia como las acciones realizadas a una persona con patología que requiere atención de urgencia y que tiendan a estabilizarla en sus signos vitales, realizar un diagnóstico de impresión y determinar el destino inmediato, de tal manera que pueda ser manejado, trasladado, remitido o diferido, para recibir su tratamiento posterior definitivo. La estabilización de signos vitales implica realizar las acciones tendientes a ubicarlos dentro de parámetros compatibles con el mínimo riesgo de muerte o complicación, no necesariamente implica la recuperación a estándares normales, ni la resolución definitiva del trastorno que generó el evento.',
    },
    {
      termino: 'Atención personalizada',
      significado:
        'la atención personalizada es la atención directa o personal que toma en cuenta las necesidades, gustos y preferencias particulares del cliente.',
    },
    {
      termino: 'BDUA',
      significado:
        ' Sistema de Consulta de la Base de Datos Única de Afiliados.',
    },
    {
      termino: 'Cliente entusiasta o cliente encantado',
      significado:
        'la percepción de la calidad satisface las necesidades del cliente siendo superior a las expectativas del cliente.',
    },
    {
      termino: 'Cliente insatisfecho',
      significado:
        'es aquel cliente en el que las expectativas superan a la percepción de la calidad del producto o servicio que ha recibido. Este es un obstáculo para el futuro de la organización, ya que el cliente puede actuar de varias maneras.',
    },
    {
      termino: 'Cliente satisfecho',
      significado:
        'esto ocurre cuando coinciden las expectativas y la percepción de la calidad del producto o servicio que recibe. El cliente será fiel a la organización mientras se encuentre satisfecho.',
    },
    {
      termino: 'Clientes externos',
      significado:
        'a los que va dirigido el producto o servicio que ofrece la empresa.',
    },
    {
      termino: 'Clientes internos',
      significado:
        'son las personas o grupo de personas responsables de los procesos internos de las empresas.',
    },
    {
      termino: 'Comodidad',
      significado:
        'comodidad hace referencia a la comodidad que se le brinda al cliente cuando visita el local.',
    },
    {
      termino: 'Control de calidad',
      significado:
        'son los controles periódicos de los diferentes parámetros de funcionamiento de los sistemas de simulación, de adquisición de imágenes, de cálculo de dosis, de medida de radiación y de las unidades de tratamiento, para comprobar que su desempeño durante la puesta en servicio se mantiene dentro de ciertos límites de tolerancia, en relación con los valores definidos como línea de base.',
    },
    {
      termino: 'Copago',
      significado:
        'son los aportes en dinero que corresponden a una parte del valor del servicio demandado y tienen como finalidad ayudar a financiar el sistema.',
    },
    {
      termino: 'Cuota moderadora',
      significado:
        'las cuotas moderadoras tienen por objeto regular la utilización del servicio de salud y estimular su buen uso, promoviendo en los afiliados la inscripción en los programas de atención integral desarrollados por las EPS en el Régimen contributivo.',
    },
    {
      termino: 'Dosimetría clínica',
      significado:
        'es la planeación de tratamientos de pacientes en sistemas computarizados, el cálculo de tiempo de tratamiento o unidades monitor y la evaluación con el médico de las opciones de tratamiento y de los planes de tratamiento elaborados, así como el seguimiento de la verificación y el registro del tratamiento.',
    },
    {
      termino: 'EPS',
      significado: ' Empresa Promotora de Salud.',
    },
    {
      termino: 'Dosimetría física',
      significado:
        'es la calibración de haces de radiación y fuentes radiactivas, mediante el levantamiento de datos dosimétricos para cálculos de tiempos de tratamiento o de unidad de monitor.',
    },
    {
      termino: 'Enfermedad crónica',
      significado:
        'la enfermedad crónica se define como un "proceso incurable, con una gran carga social tanto desde el punto de vista económico como desde la perspectiva de dependencia social e incapacitación. Tiene una etiología múltiple y con un desarrollo poco predecible (OMS). En epidemiología se entienden como enfermedades crónicas aquellas de alta prevalencia, larga duración y no curables: insuficiencia cardiaca, EPOC, asma, artritis reumatoide, diabetes mellitus, etc., siendo las principales causas de mortalidad en el mundo (informe de la OMS, 2002)”. Para fines de habilitación se diferencian requisitos para: - Atención de pacientes con patología crónica y o terminal sin ventilación. - Atención de pacientes con patología crónica y o terminal con ventilación.',
    },
    {
      termino: 'Estándar',
      significado:
        'declaración que define las expectativas de desempeño, estructura o proceso, que son esenciales en una institución o servicio, para mejorar la calidad en la atención.',
    },
    {
      termino: 'Grados de complejidad',
      significado:
        'es la medida de la complejidad según se considere su composición estructural y funcional, así como la diversificación, desarrollo y producción de sus actividades, procedimientos e intervenciones.',
    },
    {
      termino: 'Higiene:',
      significado:
        'higiene hace referencia a la limpieza o aseo que hay en el local o en los trabajadores.',
    },
    {
      termino: 'PISIS',
      significado:
        'Plataforma de transporte de información. PISIS es una plataforma utilizada para el intercambio de información del Sistema Integral de Información de la Protección Social (Sispro), la cual recibe los archivos y realiza un proceso de validación en cuanto a estructura de datos definida a través de un anexo técnico junto con algunas reglas de validación de acuerdo con lo especificado en dicho anexo.',
    },
    {
      termino: 'Población desplazada o desmovilizada',
      significado:
        'el desplazamiento forzoso en Colombia afecta a 1.661.284 colombianos, equivalentes a 3,6% de la población colombiana y a 13,1% de la población rural. La migración forzada, al ser intempestiva, ocasiona una pérdida importante de capital físico, financiero, humano y social. Además, las condiciones de la población desplazada en los municipios receptores son sumamente precarias.',
    },
    {
      termino: 'Procedimiento invasivo',
      significado:
        'es aquel procedimiento realizado por un profesional de la medicina o de enfermería en el cual el cuerpo es intervenido química y/o mecánicamente o mediante inyecciones intradérmicas y/o subcutáneas, o se introduce un tubo o un dispositivo médico..',
    },
    {
      termino: 'Procedimiento mínimamente invasivo',
      significado:
        'procedimiento que se realiza utilizando las aperturas naturales del cuerpo, o incisiones muy pequeñas, o punción en la piel para realizar una intervención que generalmente involucra la inserción de instrumentos miniaturizados.',
    },
    {
      termino: 'Procedimiento no quirúrgico',
      significado:
        'operación manual y/o instrumental, con fines diagnósticos o terapéuticos, que no implica la manipulación física e invasiva del cuerpo humano.',
    },
    {
      termino: 'Procedimiento quirúrgico',
      significado:
        'eoperación manual y/o instrumental, con fines diagnósticos o terapéuticos, que implica la manipulación física e invasiva del cuerpo humano.',
    },
    {
      termino: 'Procedimientos mayores',
      significado:
        'se trata de procedimientos terapéuticos y diagnósticos, quirúrgicos o no, que, como criterios generales, requieren anestesia regional, general o sedación; observación posterior al procedimiento o internación y para su realización puede requerir quirófano y el apoyo de personal auxiliar entrenado.',
    },
    {
      termino: 'Procedimientos menores',
      significado:
        'se trata de procedimientos terapéuticos y diagnósticos, quirúrgicos o no, que, como criterios generales, si requieren anestesia, no conllevan a una complejidad mayor a la anestesia local, nunca implican anestesia regional ni general y son ambulatorios; no requieren hospitalización ni áreas de recuperación; pueden ser realizados en los consultorios de medicina general o especializada, en servicios de urgencia o servicios hospitalarios, en áreas o ambientes (salas), destinados para su realización.',
    },
    {
      termino: 'Programa madre canguro',
      significado:
        'programa que utiliza un método o sistema de cuidados del niño prematuro y/o de bajo peso al nacer, estandarizado y protocolizado, basado en el contacto piel a piel entre el niño prematuro y su madre y que busca empoderar a la madre (a los padres o cuidadores) y transferir gradualmente la capacidad y responsabilidad de ser la cuidadora primaria de su hijo, satisfaciendo sus necesidades físicas y emocionales.',
    },
    {
      termino: 'Radioterapia',
      significado:
        'servicio en el que se llevan a cabo tratamientos oncológicos que utilizan las radiaciones para eliminar las células tumorales.',
    },
    {
      termino: 'Rapidez en la atención',
      significado:
        'la rapidez en la atención es la rapidez con la que se le toman los pedidos al cliente, se le entrega su producto, o se le atienden sus consultas o reclamos.',
    },
    {
      termino: 'Régimen Contributivo',
      significado:
        'El Régimen Contributivo es un conjunto de normas que rigen la vinculación de los individuos y las familias al Sistema General de Seguridad Social en Salud, cuando tal vinculación se hace a través del pago de una cotización, individual y familiar, o un aporte económico previo financiado directamente por el afiliado o en concurrencia entre este y su empleador.',
    },
    {
      termino: 'Régimen subsidiado',
      significado:
        'El Régimen Subsidiado es el mecanismo mediante el cual la población más pobre del país, sin capacidad de pago, tiene acceso a los servicios de salud a través de un subsidio que ofrece el Estado. Para lograr la afiliación de la población pobre y vulnerable del país al SGSSS, el Estado colombiano ha definido al Régimen Subsidiado en Salud como su vía de acceso efectiva al ejercicio del Derecho fundamental de la Salud.',
    },
    {
      termino: 'RUAF',
      significado:
        ' Registro Único de Afiliados. Es un sistema de información que consolida las afiliaciones que reportan las entidades y administradoras del Sistema de Protección Social, de acuerdo con lo establecido en la norma vigente.',
    },
    {
      termino: 'Sala de reanimación',
      significado:
        'es el ambiente destinado a la realización de procedimientos dirigidos a la recuperación de parámetros mínimos compatibles con la vida de pacientes en la atención inicial de urgencias. Es un área dependiente de un servicio de urgencias o de unidades de cuidados especiales (cuidado intensivo o intermedio, unidades de quemados), con el soporte de los servicios hospitalarios. No puede ser dependiente de un servicio de consulta externa.',
    },
    {
      termino: 'Sala de rehidratación oral',
      significado:
        'es el ambiente limpio dependiente de un servicio hospitalario, de un servicio de urgencias o de un servicio de consulta externa destinada exclusivamente para el manejo de rehidratación oral de pacientes pediátricos. Excluye la hidratación parenteral.',
    },
    {
      termino: 'Sala de yesos',
      significado:
        'es un ambiente limpio de un servicio hospitalario, de un servicio de urgencias o de un servicio de consulta externa, para la postura o retiro de yesos. En las salas dependientes de consulta externa excluye el manejo de fracturas abiertas y de pacientes que requieran anestesia regional o general o atención hospitalaria o quirúrgica.',
    },
    {
      termino: 'Sala ERA',
      significado:
        'es un ambiente exclusivo y definido, de un servicio hospitalario, de urgencias o de consulta externa, que se usa en casos de picos epidémicos de infección respiratoria aguda como estrategia temporal, donde se brinda soporte para el manejo ambulatorio a los pacientes con cuadro respiratorio agudo o con algún componente de dificultad respiratoria no complicado y que no requiere hospitalización.',
    },
    {
      termino: 'Salas de procedimientos',
      significado:
        'es un lugar físico, delimitado por barrera fija piso techo, en el cual se realiza una actividad específica o varias compatibles, dependiente de un servicio hospitalario, de un servicio de urgencias, de un servicio de consulta externa u otros, destinado a la realización de procedimientos menores que no pueden ser realizados en los consultorios y no requieren quirófano.',
    },
    {
      termino: 'Seguridad',
      significado:
        'seguridad hace referencia a la seguridad que existe en el local y que, por tanto, se le da al cliente al momento de visitarlo.',
    },
    {
      termino: 'SISMED',
      significado:
        ' Sistema de Información de Precios de Medicamentos. El Sistema de Información de Precios de Medicamentos (SISMED) es una estrategia de salud pública que tiene por objetivo mejorar la accesibilidad a medicamentos esenciales por parte de la población, especialmente de aquella de escasos recursos económicos, enmarcado en los lineamientos de lucha contra la pobreza y descentralización.',
    },
    {
      termino: 'SISPRO',
      significado:
        ' Sistema Integrado de Información de la Protección Social. Información oportuna, suficiente y estandarizada para la toma de decisiones del Sector Salud y Protección Social, centrada en el Ciudadano. El SISPRO está conformado por bases de datos y sistemas de información del Sector sobre oferta y demanda de servicios de salud, calidad de los servicios, aseguramiento, financiamiento, promoción social.',
    },
    {
      termino: 'SMLDV',
      significado: ' Salario Mínimo Diario Legal Vigente.',
    },
    {
      termino: 'SMLMV',
      significado: ' Salario mínimo legal mensual vigente.',
    },
    {
      termino: 'Tope año',
      significado: 'el máximo por cobrar por año calendario.',
    },
    {
      termino: 'Tope evento',
      significado: 'el máximo por cobrar por la atención de un mismo evento.',
    },
    {
      termino: 'Urgencia',
      significado:
        'es la alteración de la integridad física y/o mental de una persona, causada por un trauma o por una enfermedad de cualquier etiología que genere una demanda de atención médica inmediata y efectiva, tendiente a disminuir los riesgos de invalidez y muerte.',
    },
  ],
  referencias: [
    {
      referencia: 'Acuerdo Número 365 de 2007, 3 (2007).',
      link:
        'http://www.emssanar.org.co/media/attachments/2017/08/25/cnsss-acuerdo-365-2007_no-cobro-de-copagos-a-poblaciones-especiales.pdf',
    },
    {
      referencia:
        'COLOMBIA, E. C. (23 de 12 de 1993). LEY 100 DE 1993. Recuperado de minsalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-100-de-1993.pdf',
    },
    {
      referencia:
        'Dirección de Regulación de Beneficios. (2020). Cuotas moderadoras y Copagos 2020 (p. 4). Ministerio de Salud.',
      link:
        'https://pospopuli.minsalud.gov.co/PospopuliWeb/files/cuotas-moderadoras-copagos-2020.pdf',
    },
    {
      referencia:
        'Komiya, A. (30 de 10 de 2015). CreceNegocios. Recuperado de Qué es el servicio al cliente y cuál es su importancia',
      link:
        'https://www.crecenegocios.com/que-es-el-servicio-al-cliente-y-cual-es-su-importancia/',
    },
    {
      referencia: 'Ley 1122 del 2007, 18 (2007)',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1122-de-2007.pdf',
    },
    {
      referencia: 'minsalud. (s.f.). minsalud. Recuperado de ¿Qué es SISPRO?',
      link: 'https://www.sispro.gov.co/Pages/Home.aspx',
    },
    {
      referencia:
        'Quiroa, M. (s.f.). economipedia. Recuperado de Tipos de clientes',
      link: 'https://economipedia.com/definiciones/tipos-de-clientes.html',
    },
    {
      referencia:
        'SALUD, C. N. (04 de 02 de 2004). ACUERDO 260 DE 2004. Recuperado de pagos compartidos y cuotas moderadoras.',
    },
    {
      referencia: 'Salud, M. d. (s.f.). minsalud . Recuperado de',
      link:
        'https://www.minsalud.gov.co/salud/PServicios/Paginas/Sistema-unicode-habilitacion.aspx',
    },
    {
      referencia: 'Socha, D. (25 de 11 de 2017). Recuperado de',
      link: 'https://prezi.com/p/0rvukzynlc9m/sispro/',
    },
    {
      referencia:
        'Vargas, W. J. (12 de 07 de 2012). minsalud.BibliotecaDigital. Recuperado de Conceptos sobre copagos y cuotas',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/SSA/Conceptos-sobre-copagos-cuotas-moderadoras.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
