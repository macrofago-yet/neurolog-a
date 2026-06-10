const preguntasAnatomia = {
    "Neurología": { // El Tema ahora es un objeto...
        "generalidades y clasificación": [ // ...que contiene Subtemas
  {
    "id": "UBA_NEURO_01_INT",
    "pregunta": "Según la clasificación funcional del Sistema Nervioso, ¿cuál es la característica principal del Sistema Nervioso Autónomo?",
    "opciones": [
      "Permite la relación con el medio y la emisión de respuestas voluntarias.",
      "Se encarga exclusivamente del pensamiento y la reflexión.",
      "Permite el funcionamiento de los órganos a través de sus divisiones simpática y parasimpática.",
      "Está formado únicamente por nervios raquídeos de conducción ascendente."
    ],
    "correcta": 2,
    "pista": "Piense en las funciones que ocurren sin necesidad de nuestra voluntad consciente.",
    "explicacion": "El Sistema Nervioso Autónomo o vegetativo permite el funcionamiento de los órganos y se divide en Simpático y Parasimpático. Las otras opciones describen al SN Somático o son anatómicamente incorrectas."
  },
  {
    "id": "UBA_NEURO_02_DIF",
    "pregunta": "Un paciente presenta una infección que se localiza en el espacio comprendido entre la membrana adherida íntimamente al órgano nervioso y la capa intermedia de las meninges. ¿Dónde se ubica la patología y qué contenido se encuentra afectado?",
    "opciones": [
      "Espacio epidural - Tejido adiposo.",
      "Espacio subdural - Líquido cefalorraquídeo.",
      "Espacio subaracnoideo - Líquido cefalorraquídeo.",
      "Espacio suprapiamadre - Sangre venosa."
    ],
    "correcta": 2,
    "pista": "Identifique primero las capas: la 'íntimamente adherida' es la piamadre y la 'intermedia' es la aracnoides.",
    "explicacion": "El espacio entre la piamadre y la aracnoides es el espacio subaracnoideo, el cual contiene líquido cefalorraquídeo. Es un concepto de relación anatómica compleja que integra estructura y contenido."
  },
  {
    "id": "UBA_NEURO_03_INT",
    "pregunta": "Respecto a la constitución del tronco encefálico, ¿cuál es la disposición correcta de sus elementos de superior a inferior?",
    "opciones": [
      "Bulbo raquídeo, Protuberancia anular y Pedúnculos cerebrales.",
      "Pedúnculos cerebrales, Protuberancia anular y Bulbo raquídeo.",
      "Cerebelo, Puente y Médula espinal.",
      "Diencéfalo, Pedúnculos y Protuberancia."
    ],
    "correcta": 1,
    "pista": "Recuerde que el tronco conecta el cerebro (arriba) con la médula (abajo).",
    "explicacion": "El tronco encefálico está formado por 3 partes en orden descendente: pedúnculos cerebrales, protuberancia (o puente) y bulbo raquídeo."
  },
  {
    "id": "UBA_NEURO_04_DIF",
    "pregunta": "En el estudio de la sustancia gris del SNC, se define a un 'Núcleo' como:",
    "opciones": [
      "Un conjunto de axones mielínicos que conducen el mismo tipo de información.",
      "Una agrupación de somas neuronales que procesan la misma información dentro del SNC.",
      "Una agrupación de cuerpos neuronales situados por fuera del neuroeje.",
      "La organización laminar periférica de los hemisferios cerebrales."
    ],
    "correcta": 1,
    "pista": "Diferencie entre la ubicación (dentro o fuera del SNC) y el componente celular (soma o axón).",
    "explicacion": "Los núcleos son conjuntos de cuerpos neuronales (somas) dentro del SNC. La agrupación fuera del SNC se denomina ganglio, y los axones forman la sustancia blanca."
  },
  {
    "id": "UBA_NEURO_05_INT",
    "pregunta": "Diferencie la composición funcional de los nervios craneales frente a los nervios raquídeos.",
    "opciones": [
      "Ambos grupos son exclusivamente mixtos.",
      "Los raquídeos pueden ser motores o sensoriales, mientras que los craneales son siempre mixtos.",
      "Los 31 pares raquídeos son todos mixtos, mientras que los 12 pares craneales pueden ser motores, sensoriales o mixtos.",
      "Los nervios craneales solo poseen fibras motoras multipolares."
    ],
    "correcta": 2,
    "pista": "Revise la uniformidad de los nervios que emergen de la médula vs. la especialización de los de la cabeza.",
    "explicacion": "El texto explicita que todos los nervios raquídeos son mixtos, mientras que los craneales varían en su función (motores, sensoriales o mixtos)."
  },
  {
    "id": "UBA_NEURO_06_DIF",
    "pregunta": "Al analizar la configuración externa de la médula espinal, ¿qué estructura se forma por la unión de las fibras que emergen de los surcos colaterales anteriores y posteriores?",
    "opciones": [
      "El nervio raquídeo mixto.",
      "El cordón lateral de la médula.",
      "La cola de caballo.",
      "El ganglio espinal sensitivo."
    ],
    "correcta": 0,
    "pista": "Las raíces motora (anterior) y sensitiva (posterior) convergen en un punto específico.",
    "explicacion": "La raíz anterior (motora) y la raíz posterior (sensitiva) se unen para formar el nervio raquídeo mixto. El ganglio solo pertenece a la raíz posterior."
  },
  {
    "id": "UBA_NEURO_07_INT",
    "pregunta": "¿Cuál es la definición correcta de 'Origen Aparente' de un nervio?",
    "opciones": [
      "El lugar donde se encuentra el soma de la neurona que lo origina.",
      "El trayecto que realiza el nervio desde que sale del cráneo.",
      "El lugar preciso en la superficie del SNC por donde emerge el nervio.",
      "El punto de terminación en el órgano efector."
    ],
    "correcta": 2,
    "pista": "Es lo que se ve a simple vista al observar el órgano nervioso.",
    "explicacion": "El origen aparente es la emergencia superficial en el órgano (SNC), a diferencia del origen real que es la ubicación del soma (núcleo o ganglio)."
  },
  {
    "id": "UBA_NEURO_08_DIF",
    "pregunta": "Si un nervio tiene una función exclusivamente motora, ¿dónde se localizará su 'Origen Real' y qué morfología tendrá su neurona?",
    "opciones": [
      "En un ganglio fuera del SNC - Neurona pseudomonopolar.",
      "En un núcleo dentro del SNC - Neurona multipolar.",
      "En la corteza cerebral - Neurona bipolar.",
      "En el órgano efector - Neurona unipolar."
    ],
    "correcta": 1,
    "pista": "Integre los conceptos de clasificación funcional y tipos neuronales descritos para motores.",
    "explicacion": "Los nervios motores están formados por neuronas multipolares con su soma (origen real) ubicado dentro del SNC formando núcleos."
  },
  {
    "id": "UBA_NEURO_09_INT",
    "pregunta": "¿Qué tipo de neurona se caracteriza por tener un soma del cual nace un solo axón que luego se bifurca en dos ramas (una hacia el SNC y otra hacia el SNP)?",
    "opciones": [
      "Multipolar.",
      "Bipolar.",
      "Pseudomonopolar.",
      "Unipolar típica."
    ],
    "correcta": 2,
    "pista": "Es una neurona que parece tener un solo polo, pero se divide.",
    "explicacion": "La neurona pseudomonopolar posee un soma con un axón que se divide en dos, conectando el centro con la periferia."
  },
  {
    "id": "UBA_NEURO_10_DIF",
    "pregunta": "Compare la dinámica de conducción entre los nervios motores y sensoriales.",
    "opciones": [
      "Ambos poseen conducción descendente desde el cerebro.",
      "Los motores son ascendentes (centrípetos) y los sensoriales son descendentes (centrífugos).",
      "Los motores son descendentes (centrífugos) hacia los músculos y los sensoriales son ascendentes (centrípetos) hacia el SNC.",
      "No existe diferencia en el sentido de conducción, solo en el tipo de neurotransmisor."
    ],
    "correcta": 2,
    "pista": "Piense en el origen del estímulo: ¿viene de afuera o nace de una 'intención' interna?",
    "explicacion": "Los motores conducen impulsos 'descendentes' desde el SNC hacia los efectores, mientras que los sensoriales llevan información desde los receptores periféricos 'ascendiendo' hacia el SNC."
  },
  {
    "id": "UBA_NEURO_11_INT",
    "pregunta": "En la médula espinal, ¿cuál es la característica que permite distinguir el surco medio anterior del posterior?",
    "opciones": [
      "El surco anterior es más estrecho.",
      "El surco medio anterior es más ancho que el posterior.",
      "El surco posterior es el que da salida a las raíces motoras.",
      "No existen surcos en la cara anterior."
    ],
    "correcta": 1,
    "pista": "Observe la descripción de la configuración externa de la médula.",
    "explicacion": "Anatómicamente, el surco medio anterior se describe como más ancho que el posterior en la configuración externa medular."
  },
  {
    "id": "UBA_NEURO_12_DIF",
    "pregunta": "Un nervio sensorial requiere transmitir información desde la piel hacia el cerebro. ¿Cuál es el trayecto correcto de la información respecto a sus estaciones?",
    "opciones": [
      "Receptor -> Núcleo motor -> Axón -> SNC.",
      "Receptor -> Ganglio (fuera del SNC) -> Núcleo de terminación (dentro del SNC).",
      "SNC -> Ganglio -> Nervio mixto -> Receptor.",
      "Célula de la glía -> Soma -> Dendrita -> Sinapsis."
    ],
    "correcta": 1,
    "pista": "Identifique las agrupaciones de somas para la vía aferente.",
    "explicacion": "En los nervios sensitivos, la información va de la periferia al ganglio (soma de 1° neurona) y luego al núcleo de terminación dentro del SNC."
  },
  
  {
    "id": "UBA_NEURO_GLIA_01",
    "pregunta": "¿Cuál de los siguientes elementos constituye una de las dos poblaciones celulares principales del tejido nervioso según el texto?",
    "opciones": ["Sustancia Blanca", "Células de la Glía", "Haces o tractos", "Fascículos mielínicos"],
    "correcta": 1,
    "pista": "Acompañan a las neuronas en el tejido nervioso.",
    "explicacion": "El texto especifica que el tejido nervioso está formado por neuronas y células de la glía."
  },
  {
    "id": "UBA_NEURO_DURA_01",
    "pregunta": "Identifique la capa meníngea que se caracteriza por ser fibrosa y estar en contacto directo con la superficie endocraneal.",
    "opciones": ["Piamadre", "Aracnoides", "Duramadre", "Espacio epidural"],
    "correcta": 2,
    "pista": "Es la capa más externa y resistente.",
    "explicacion": "La duramadre se define en el texto como fibrosa y en contacto con el hueso (superficie endocraneal)."
  },
  {
    "id": "UBA_NEURO_ANAT_REL_01",
    "pregunta": "Respecto a la organización del encéfalo, ¿cuál es la ubicación anatómica precisa del cerebelo?",
    "opciones": ["Superior y anterior al cerebro", "Posteroinferior respecto al cerebro", "Entre la médula y el tronco encefálico", "Dentro del conducto raquídeo"],
    "correcta": 1,
    "pista": "Su ubicación es posterior y por debajo del órgano principal del encéfalo.",
    "explicacion": "El texto describe al cerebelo como posteroinferior respecto al cerebro."
  },


 ],
 "sistema nervioso central": [

     { id: "ant_vias_01", pregunta: "...", opciones: ["A","B"], correcta: 0, explicacion: "..." }
       
    ],

     "temas diferencidos": [
  {
    "id": "UBA_V2_001",
    "pregunta": "¿Cuál es la clasificación funcional exclusiva y el origen troncal del nervio maxilar superior según el Programa de la Cátedra?",
    "opciones": [
      "Es un nervio puramente sensitivo que constituye la segunda rama terminal del nervio trigémino (V).",
      "Es un nervio mixto que emerge de la fosa interpeduncular junto al nervio motor ocular común.",
      "Es un nervio sensitivo-motor que se origina en la fosa craneal posterior y atraviesa el agujero oval.",
      "Es un nervio motor voluntario que nace del núcleo masticador de la protuberancia anular."
    ],
    "correcta": 0,
    "pista": "Recuerde que a diferencia de la tercera rama del trigémino, este tronco nervioso no transporta filetes motores del núcleo masticador en su origen.",
    "explicacion": "El texto explicita que el nervio maxilar superior es la segunda rama terminal del nervio trigémino (V) y su territorio describe funciones puramente sensitivas (duramadre, mucosa nasal, bucal, piezas dentarias y tegumentos). Los distractores implican clasificaciones mixtas o relaciones con el agujero oval o el par III correspondientes a otros sectores del tronco encefálico."
  },
  {
    "id": "UBA_V2_002",
    "pregunta": "Durante su trayecto exocraneal, el nervio maxilar superior cambia de nombre al ingresar a una estructura ósea específica. ¿Cuál es esta denominación terminal y qué elementos vasculares lo acompañan?",
    "opciones": [
      "Nervio suborbitario, acompañado por la arteria suborbitaria y por venas satélite en el conducto suborbitario.",
      "Nervio infraorbitario, acompañado por la arteria meníngea media en la fosa cigomática.",
      "Nervio temporomalar, acompañado por la arteria oftálmica dentro de la apófisis orbitaria del malar.",
      "Nervio esfenopalatino, acompañado por el plexo perimeningeo en el agujero esfenopalatino."
    ],
    "correcta": 0,
    "pista": "Busque la transición topográfica que ocurre en el cuarto sector del recorrido del nervio maxilar.",
    "explicacion": "La ventana de trabajo afirma textualmente que en toda su extensión terminal, el nervio va a pasar a llamarse nervio suborbitario, y va a estar acompañado por la arteria suborbitaria y por venas satélite dentro del conducto suborbitario. Los distractores usan vasos incorrectos (meníngea media, oftálmica) o nombres de ramas colaterales."
  },
  {
    "id": "UBA_V2_003",
    "pregunta": "Un paciente presenta una pérdida de sensibilidad circunscrita a la duramadre de la fosa craneal media próxima al ganglio trigeminal. ¿Qué rama colateral del nervio maxilar superior se encuentra afectada y con qué estructura se anastomosa?",
    "opciones": [
      "El nervio meníngeo medio, el cual se anastomosa con el ramo anterior del ramo recurrente meníngeo del nervio mandibular.",
      "El nervio orbitario, el cual establece el arco orbitolagrimal con el nervio lagrimal.",
      "El nervio recurrente meníngeo, que ingresa al cráneo por el agujero redondo menor de la fosa cigomática.",
      "El nervio esfenopalatino, que emite raíces que labran el plexo simpático perimeningeo."
    ],
    "correcta": 0,
    "pista": "Se trata de la primera rama colateral del nervio maxilar superior, cuyo origen es puramente endocraneal.",
    "explicacion": "El texto señala que el nervio meníngeo medio es la primera rama colateral, nace en el cráneo, se destina a la duramadre próxima y se anastomosa con el ramo anterior del ramo recurrente meníngeo del nervio mandibular. El distractor C describe una rama del nervio mandibular (V3) en fosa cigomática, y B describe la segunda colateral."
  },
  {
    "id": "UBA_V2_004",
    "pregunta": "Ordene cronológica y topográficamente los cuatro sectores que recorre el nervio maxilar superior desde su nacimiento hasta su emergencia facial.",
    "opciones": [
      "Fosa craneal media, conducto redondo mayor, fosa pterigomaxilar y conducto suborbitario.",
      "Fosa craneal posterior, lúnula de Albinus, fosa cigomática y conducto mentoniano.",
      "Fosa craneal media, hendidura esfenoidal, cavidad orbitaria y conducto etmoidal posterior.",
      "Conducto redondo mayor, fosa pterigomaxilar, hendidura esfenomaxilar y conducto palatino posterior."
    ],
    "correcta": 0,
    "pista": "El recorrido progresa desde el endocráneo hacia la región profunda de la cara a través de un conducto esfenoidal, finalizando bajo el piso de la órbita.",
    "explicacion": "El texto enumera taxativamente los 4 sectores topográficos que el nervio maxilar atraviesa en su trayecto: FOSA CRANEAL MEDIA - CONDUCTO REDONDO MAYOR - FOSA PTERIGOMAXILAR - CONDUCTO SUBORBITARIO. Las demás opciones mezclan accidentes correspondientes al nervio oftálmico o mandibular."
  },
  {
    "id": "UBA_V2_005",
    "pregunta": "Con respecto al nervio orbitario (segunda rama colateral de V2), ¿dónde puede situarse su origen anatómico y qué recorrido realiza inmediatamente después?",
    "opciones": [
      "Se origina en el endocráneo, conducto redondo mayor o fosa pterigomaxilar; luego se dirige hacia adelante y atraviesa la hendidura esfenomaxilar.",
      "Se origina exclusivamente en el ganglio de Gasser; atraviesa el anillo de Zinn y recorre la pared interna de la órbita.",
      "Se origina por debajo del músculo recto externo del ojo; atraviesa la hendidura esfenoidal e ingresa al conducto etmoidal posterior.",
      "Se origina en la fosa cigomática; atraviesa el agujero redondo menor para distribuirse por la duramadre."
    ],
    "correcta": 0,
    "pista": "Esta colateral posee un origen variable antes de ingresar a la cavidad orbitaria a través de una fisura inferior.",
    "explicacion": "La ventana de trabajo establece que el nervio orbitario se origina en el endocráneo, conducto redondo mayor o fosa pterigomaxilar, se dirige hacia adelante y atraviesa la hendidura esfenomaxilar, avanzando sobre la cara externa de la órbita. Los distractores contienen accidentes de V1 (anillo de Zinn, hendidura esfenoidal) o trayectos de V3."
  },
  {
    "id": "UBA_V2_006",
    "pregunta": "Analice las relaciones y subdivisiones de la rama lacrimopalpebral del nervio orbitario en la región orbitaria. ¿Cómo se conforma el arco orbitolagrimal y qué estructuras inerva?",
    "opciones": [
      "Se anastomosa con el nervio lagrimal del oftálmico por debajo del músculo recto externo; de este arco nacen filetes para la glándula lagrimal y el párpado superior.",
      "Se une al nervio patético configurando un arco osteofibroso del cual nacen los ramos frontales y palpebrales.",
      "Se anastomosa con el nervio temporomalar dentro de la apófisis orbitaria, emitiendo filetes para el párpado inferior.",
      "Se une al nervio suborbitario en el conducto suborbitario, destinándose a la encía del tercer molar superior."
    ],
    "correcta": 0,
    "pista": "La rama lacrimopalpebral genera una comunicación cruzada inter-ramas (V2 con V1) para alcanzar estructuras glandulares y del párpado superior.",
    "explicacion": "El texto describe que la rama lacrimopalpebral asciende hasta la glándula lagrimal y se anastomosa con el nervio lagrimal del oftálmico formando el 'arco orbitolagrimal', del cual nacen los filetes glandulares y filetes palpebrales (destinados al párpado superior). Los distractores alteran los nervios participantes o los territorios de inervación."
  },
  {
    "id": "UBA_V2_007",
    "pregunta": "¿Qué trayecto y relaciones óseas caracterizan a la rama temporomalar del nervio orbitario tras separarse de la rama lacrimopalpebral?",
    "opciones": [
      "Se dirige hacia la apófisis orbitaria del malar, se introduce en un conducto óseo y se bifurca en dos ramas para los tegumentos.",
      "Se dirige hacia la pared interna de la órbita por encima del músculo recto inferior, ingresando al conducto etmoidal posterior.",
      "Se adosa a la cara profunda del músculo temporal tras atravesar el agujero redondo menor de la fosa craneal media.",
      "Atraviesa de forma directa la hendidura esfenoidal por fuera del anillo de Zinn para inervar la raíz de la nariz."
    ],
    "correcta": 0,
    "pista": "Esta rama se dirige hacia el hueso del pómulo y utiliza un canal intraóseo propio.",
    "explicacion": "El texto indica que la rama temporomalar se dirige hacia la apófisis orbitaria del malar; describe que hay un orificio que se continúa con un conducto en su interior donde el nervio se introduce y al poco de hacerlo se bifurca en 2 ramas destinadas a los tegumentos. Las opciones incorrectas le asignan trayectos correspondientes a los nervios nasales, etmoidales o meníngeos."
  },
  {
    "id": "UBA_V2_008",
    "pregunta": "Además de su división terminal, el nervio orbitario presenta una relación de comunicación macroscópica con un nervio motor del ojo. ¿Cuál es dicha anastomosis y qué morfología adopta?",
    "opciones": [
      "Establece una anastomosis en forma de arco con el nervio patético (IV).",
      "Establece una anastomosis plexiforme con el nervio motor ocular común (III).",
      "Se anastomosa formando una lúnula osteofibrosa con el nervio motor ocular externo (VI).",
      "Forma el arco suborbitario al unirse con los filetes terminales del nervio facial (VII)."
    ],
    "correcta": 0,
    "pista": "El nervio orbitario establece esta conexión en el sector orbitario alto con un par craneal troclear.",
    "explicacion": "El texto describe explícitamente en el apartado del nervio orbitario: 'Establece una anastomosis con el Patético y con el ramo orbitario del nervio maxilar superior - Esta anastomosis tiene forma de arco...'. Los distractores usan los pares III, VI y VII, que no están descritos bajo esa relación en la ventana de trabajo."
  },
  {
    "id": "UBA_V2_009",
    "pregunta": "¿Cómo se origina el nervio esfenopalatino en la fosa pterigomaxilar y cuál es su relación topográfica inmediata con el ganglio anexo de esta región?",
    "opciones": [
      "Nace por la anastomosis de filetes que simulan un plexo, se dirige abajo y adentro, y pasa por la cara externa del ganglio esfenopalatino.",
      "Nace como un tronco único y rectilíneo desde el endocráneo, pasando por la cara interna del ganglio ótico.",
      "Emerge directamente del interior del ganglio esfenopalatino dirigiéndose hacia afuera hacia el conducto redondo mayor.",
      "Se origina por la fusión de los nervios palatinos anterior y posterior en la cara posterior de la apófisis pterigoides."
    ],
    "correcta": 0,
    "pista": "El origen de esta colateral es un entrecruzamiento de filetes que luego se vincula con la cara lateral o externa del ganglio homónimo.",
    "explicacion": "La ventana de trabajo dicta: 'Nace por la anastomosis de filetes en fosa pterigomaxilar, que al entrecruzarse dan la sensación de formar un plexo - Se dirige hacia abajo y adentro, y después de un corto trayecto llega al ganglio esfenopalatino (pasando por su cara externa)'. Las opciones incorrectas invierten la dirección del trayecto o modifican el ganglio implicado."
  },
  {
    "id": "UBA_V2_010",
    "pregunta": "El nervio esfenopalatino provee la inervación de la mucosa del seno esfenoidal y de las celdillas etmoidales posteriores. Describa detalladamente el trayecto de los ramos responsables de esta función.",
    "opciones": [
      "Los nervios orbitarios penetran por la hendidura esfenomaxilar, se ubican en la cara interna de la órbita por debajo del músculo recto inferior e ingresan al conducto etmoidal posterior.",
      "Los nervios nasales superiores atraviesan el agujero esfenopalatino en su porción posterior y ascienden por el tabique nasal hacia la lámina cribosa.",
      "Los nervios palatinos posteriores recorren un canal accesorio en la lámina vertical del palatino y perforan el techo del seno maxilar.",
      "Los filetes lagrimales cruzan el anillo de Zinn y penetran en el conducto etmoidal anterior junto al nervio nasal de V1."
    ],
    "correcta": 0,
    "pista": "Se trata de ramos colaterales que ingresan transitoriamente a la órbita antes de introducirse en un conducto etmoidal posterior junto con una estructura de Luschka.",
    "explicacion": "El texto detalla que los nervios orbitarios (ramas del esfenopalatino) penetran en la órbita por la hendidura esfenomaxilar, se ubican en la cara interna de la cavidad por debajo del músculo recto inferior y se introducen en el conducto etmoidal posterior inervando la mucosa del seno esfenoidal y celdillas etmoidales posteriores. El distractor A describe el trayecto textual exacto, mientras que B, C y D falsean los trayectos."
  },
  {
    "id": "UBA_V2_011",
    "pregunta": "¿Qué estructura nerviosa acompaña a los ramos orbitarios del nervio esfenopalatino al introducirse en el conducto etmoidal posterior?",
    "opciones": [
      "El nervio esfenoetmoidal de Luschka.",
      "El nervio nasal del oftálmico.",
      "El nervio caroticotimpánico de Jacobson.",
      "El nervio supratroclear colateral del frontal."
    ],
    "correcta": 0,
    "pista": "Es un nervio propio de la región profunda nombrado específicamente junto con el conducto etmoidal posterior.",
    "explicacion": "El texto menciona textualmente que los nervios orbitarios se introducen en el conducto etmoidal posterior junto con el 'nervio esfenoetmoidal de Luschka'. Los distractores son nervios reales del texto pero ubicados en otras regiones (Jacobson en el oído, nasal y supratroclear en la órbita superior/anterior)."
  },
  {
    "id": "UBA_V2_012",
    "pregunta": "Un odontólogo requiere anestesiar la mucosa de la mitad posterior de la bóveda palatina y la encía vestibular/palatina a la altura del tercer molar superior. ¿Qué ramo del nervio esfenopalatino debe bloquearse y cuál es su trayecto?",
    "opciones": [
      "El nervio palatino anterior, que sigue un trayecto descendente o puede llegar a través del conducto palatino accesorio.",
      "El nervio palatino posterior, que se dirige hacia atrás en un canal accesorio de la lámina vertical del palatino.",
      "Los nervios nasales superiores, que atraviesan la parte anterior del agujero esfenopalatino.",
      "El nervio dentario medio, que desciende por la cara anteroexterna del seno maxilar."
    ],
    "correcta": 0,
    "pista": "A pesar de su nombre que sugiere una posición rostral, este nervio palatino se distribuye por la región posterior de la mucosa del paladar duro y encía de los últimos molares.",
    "explicacion": "El texto especifica que el nervio palatino anterior 'va a inervar a la mucosa de la mitad posterior de la bóveda y encía de la zona de terceros molares' y puede llegar a través del conducto palatino accesorio. El nervio palatino posterior, según el texto, se separa dirigiéndose hacia atrás hacia la apófisis pterigoides, inervando otras estructuras."
  },
  {
    "id": "UBA_V2_013",
    "pregunta": "¿Cuál es la disposición anatómica del nervio palatino posterior tras separarse de los palatinos anterior y medio en su origen?",
    "opciones": [
      "Se dirige hacia atrás en un canal accesorio de la lámina vertical del palatino y llega por encima y delante de la base del gancho de la apófisis pterigoides.",
      "Se introduce de forma inmediata en el agujero esfenopalatino por delante de los nervios nasales superiores.",
      "Desciende por la cara interna de la órbita y cruza por debajo del músculo recto inferior del ojo.",
      "Se incurva hacia adelante describiendo dos codos óseos en el interior del conducto suborbitario."
    ],
    "correcta": 0,
    "pista": "Este ramo se dirige hacia la región posterior de la fosa, vinculándose con una apófisis del hueso esfenoides.",
    "explicacion": "El texto indica que el nervio palatino posterior 'se encuentra unido en su origen al nervio palatino anterior y medio, y luego se separa dirigiéndose hacia atrás en un canal accesorio de la lámina vertical del palatino - Llega por encima y delante de la base del gancho de la apófisis pterigoides'. Los distractores corresponden a relaciones de los ramos orbitarios o del tronco principal de V2."
  },
  {
    "id": "UBA_V2_014",
    "pregunta": "Con respecto a los nervios dentarios posteriores, ¿qué estructuras anatómicas específicas reciben sus filetes terminales sensitivos?",
    "opciones": [
      "Molares y premolares superiores con sus alvéolos, y la mucosa del seno maxilar.",
      "Únicamente los terceros molares superiores y la mucosa de la mitad posterior de la bóveda palatina.",
      "Incisivos y caninos superiores junto con la mucosa del labio superior.",
      "Músculo pterigoideo interno, periestafilino externo y la encía del balcón de Fischer."
    ],
    "correcta": 0,
    "pista": "Inervan el sector posterosuperior de la arcada dentaria y las paredes de la gran cavidad neumática del maxilar.",
    "explicacion": "La ventana de trabajo adjudica a los nervios dentarios posteriores (ubicados bajo el apartado de palatinos/dentarios) la inervación de: 'Molares y premolares con sus alvéolos - Mucosa del seno maxilar'. El distractor D contiene músculos motores de V3 y el distractor C describe el territorio anterior de la arcada."
  },
  {
    "id": "UBA_V2_015",
    "pregunta": "Describa las características anatómicas y relaciones del nervio dentario medio según la descripción textual de la cátedra.",
    "opciones": [
      "Es inconstante, se confunde con el ramo más anterior del dentario posterior, nace del suborbitario y se ubica en un surco en la cara anteroexterna del seno maxilar.",
      "Es una rama constante que nace directamente de la fosa craneal media y atraviesa el agujero redondo menor junto a la arteria meníngea media.",
      "Es un ramo motor que se origina en la fosa pterigomaxilar y desciende por la cara profunda del músculo pterigoideo externo.",
      "Es un ramo sensitivo que se une al nervio lingual para formar la encía lingual de los premolares inferiores."
    ],
    "correcta": 0,
    "pista": "Este nervio destaca por su variabilidad de presencia y corre por la pared del seno maxilar confundiéndose con el grupo dentario posterior.",
    "explicacion": "El texto afirma que el nervio dentario medio 'Es inconstante, cuando existe se confunde con el ramo + anterior del dentario posterior - Se origina en un punto variable en el trayecto del suborbitario - Una vez que se origina se ubica en un surco que sigue la cara anteroexterna del seno maxilar'. Las demás opciones le otorgan constancia, funciones motoras o lo mezclan con V3."
  },
  {
    "id": "UBA_V2_016",
    "pregunta": "Al abandonar fibras al ganglio esfenopalatino, el nervio esfenopalatino establece conexiones anatómicas estrechas. ¿Cómo denomina el texto a estas estructuras comunicantes?",
    "opciones": [
      "Raíces del ganglio esfenopalatino.",
      "Ramos comunicantes grises.",
      "Ramos recurrentes endocraneales.",
      "Filetes simpáticos perimeningeos."
    ],
    "correcta": 0,
    "pista": "El nervio maxilar superior pasa por la cara externa del ganglio y le cede elementos que llevan el nombre propio del ganglio.",
    "explicacion": "El texto señala que: 'El nervio abandona fibras al ganglio llamadas raíces del ganglio esfenopalatino'. Los distractores corresponden a la inervación simpática general o ramos meníngeos que no se asocian directamente con el esfenopalatino en esta porción."
  },
  {
    "id": "UBA_V2_017",
    "pregunta": "¿Cuál es la orientación tridimensional del trayecto general que adopta el nervio maxilar superior inmediatamente después de su origen aparente/real en el ganglio?",
    "opciones": [
      "Se dirige hacia adelante, afuera y abajo, describiendo en su recorrido dos curvas o codos.",
      "Se dirige hacia arriba, adentro y adelante, siguiendo una trayectoria rectilínea y aplanada.",
      "Se orienta hacia afuera y se introduce en el agujero condíleo anterior de forma descendente.",
      "Sigue un recorrido estrictamente ascendente por la cara superficial del músculo temporal."
    ],
    "correcta": 0,
    "pista": "El trayecto describe una triple dirección espacial antes de incurvarse dos veces en su camino a la región facial anterior.",
    "explicacion": "El texto determina textualmente bajo el apartado de Trayecto: 'A partir de su origen se dirige hacia adelante, afuera y abajo. Describe en su recorrido dos curvas o codos'. Los distractores presentan orientaciones inversas o corresponden al nervio hipogloso o auriculotemporal."
  },
  {
    "id": "UBA_V2_018",
    "pregunta": "Un paciente manifiesta anestesia completa en la piel de la mejilla, el párpado inferior y el labio superior tras un traumatismo facial. Evaluando los territorios compartidos, ¿qué sector lesional del trigémino justifica esta presentación clínica?",
    "opciones": [
      "El territorio periférico de los filetes terminales del nervio suborbitario a nivel de su orificio facial.",
      "El territorio de inervación de los ramos frontales y palpebrales del nervio oftálmico.",
      "Los filetes terminales del nervio mentoniano que emergen por el conducto mentoniano.",
      "La mucosa del velo del paladar inervada por el ramo palatino anterior."
    ],
    "correcta": 0,
    "pista": "Estas tres regiones cutáneas corresponden a los tegumentos de la cara inervados por la porción más distal y superficial de V2.",
    "explicacion": "El texto identifica el territorio de inervación cutánea de V2 como: 'Tegumentos de la cara, párpado inferior, mejilla y labio superior', los cuales dependen directamente de la expansión en filetes terminales del nervio suborbitario en su orificio facial. Los distractores corresponden a V1 (párpado superior/frente) o V3 (mentón/labio inferior)."
  },
  {
    "id": "UBA_V2_019",
    "pregunta": "Durante la disección de la fosa pterigomaxilar, el cirujano identifica un ramo que atraviesa el agujero esfenopalatino en su parte anterior. De acuerdo a la ventana de trabajo, ¿de qué nervio se trata?",
    "opciones": [
      "Nervios nasales superiores.",
      "Nervios orbitarios inferiores.",
      "Nervio palatino posterior.",
      "Nervio meníngeo medio."
    ],
    "correcta": 0,
    "pista": "Son ramos que se originan por debajo del ganglio esfenopalatino y se dirigen hacia las fosas nasales.",
    "explicacion": "El texto expone en forma literal: 'Nervios nasales superiores - Atraviesan la parte anterior del agujero esfenopalatino...'. Los distractores tienen otras relaciones óseas (los orbitarios van a la hendidura esfenomaxilar, el palatino posterior al canal accesorio, y el meníngeo medio al endocráneo)."
  },
  {
    "id": "UBA_V2_020",
    "pregunta": "Compare las relaciones topográficas de la segunda rama colateral del maxilar superior (nervio orbitario) con las estructuras de la cavidad orbitaria. ¿Qué músculo extrínseco del ojo sirve de referencia para su bifurcación?",
    "opciones": [
      "El músculo recto externo del ojo, por debajo del cual el nervio orbitario se divide en sus dos ramas.",
      "El músculo recto inferior, debajo del cual pasan los ramos orbitarios del esfenopalatino.",
      "El músculo recto superior, que recubre por completo al nervio nasal en la pared interna.",
      "El músculo oblicuo mayor, que se sitúa por fuera de la apófisis orbitaria del malar."
    ],
    "correcta": 0,
    "pista": "Este músculo abducirá el globo ocular y se relaciona íntimamente con la cara externa de la órbita donde avanza el nervio orbitario.",
    "explicacion": "El texto detalla que el nervio orbitario avanza sobre la cara externa de la órbita 'para luego dividirse en dos ramas (por debajo del músculo externo del ojo)'. En el contexto previo del texto (pág. 490), se refiere a este como 'músculo recto externo del ojo'. Los distractores mezclan las relaciones del recto inferior con los ramos orbitarios del esfenopalatino, o del recto superior con V1."
  },
  {
    "id": "UBA_V2_021",
    "pregunta": "Si un tumor destruye la comunicación del arco orbitolagrimal, ¿qué deficiencia funcional analizada en el texto presentará el paciente?",
    "opciones": [
      "Afectación en la conducción hacia los filetes glandulares de la glándula lagrimal y filetes palpebrales del párpado superior.",
      "Anestesia de la mucosa del seno esfenoidal y de las celdillas etmoidales posteriores.",
      "Parálisis motora completa del músculo recto externo del ojo debido a la pérdida del arco.",
      "Pérdida de la sensibilidad propioceptiva inconsciente en la articulación temporomandibular."
    ],
    "correcta": 0,
    "pista": "El arco orbitolagrimal resulta de la anastomosis entre la rama lacrimopalpebral de V2 y el nervio lagrimal de V1.",
    "explicacion": "El texto indica que de la anastomosis de la rama lacrimopalpebral con el nervio lagrimal (arco orbitolagrimal) 'Nacen los filetes glandulares y filetes palpebrales' destinados a la glándula lagrimal y al párpado superior. Las demás opciones implican territorios de los ramos orbitarios profundos, funciones motoras del par VI o propiocepción del núcleo mesencefálico."
  },
  {
    "id": "UBA_V2_022",
    "pregunta": "Identifique cuál de los siguientes componentes territoriales NO corresponde al nervio maxilar superior sino a otra división del trigémino según la lista maestra analizada.",
    "opciones": [
      "La mucosa de la encía lingual y el cuerpo anterior de la lengua.",
      "La mucosa bucal de la bóveda palatina y velo del paladar.",
      "La región gingivodentaria del maxilar superior y sus alvéolos.",
      "La duramadre endocraneal próxima a la fosa media."
    ],
    "correcta": 0,
    "pista": "El nervio maxilar superior inerva la arcada superior y estructuras palatinas, dejando el piso de la boca y la lengua a la tercera rama.",
    "explicacion": "La inervación de la encía lingual y la parte anterior de la lengua corresponde al nervio lingual (rama de V3), tal como se detalla en otros apartados expuestos. Los ítems B, C y D pertenecen estrictamente al territorio de inervación de V2 detallado en la ventana de trabajo."
  },
  {
    "id": "UBA_V2_023",
    "pregunta": "¿Qué característica peculiar presenta el origen del nervio esfenopalatino que lo diferencia de las otras colaterales del nervio maxilar superior?",
    "opciones": [
      "Se forma por el entrecruzamiento de múltiples filetes que dan la apariencia de un plexo en la fosa pterigomaxilar.",
      "Se origina de forma directa y única en el interior del conducto redondo mayor, sin dar ramas anastomóticas.",
      "Constituye una prolongación directa del nervio meníngeo medio tras abandonar la duramadre.",
      "Emerge de la cara anteroexterna del seno maxilar de manera inconstante."
    ],
    "correcta": 0,
    "pista": "Su nacimiento no se produce como un tronco ramificado lineal, sino a partir de una red de filetes entrelazados.",
    "explicacion": "El texto señala expresamente: 'Nace por la anastomosis de filetes en fosa pterigomaxilar, que al entrecruzarse dan la sensación de formar un plexo'. Los distractores corresponden a características falsas o descripciones del nervio dentario medio."
  },
  {
    "id": "UBA_V2_024",
    "pregunta": "El nervio maxilar superior realiza dos curvas o codos en su trayecto. ¿En qué sectores de su recorrido se localizan estos cambios de dirección con respecto a los accidentes óseos atravesados?",
    "opciones": [
      "Entre su salida de la fosa craneal media por el conducto redondo mayor y su paso por la fosa pterigomaxilar hacia el conducto suborbitario.",
      "Entre su paso por la lúnula de Albinus y su ingreso a la hendidura esfenoidal.",
      "En el interior de la apófisis orbitaria del malar al dividirse la rama temporomalar.",
      "Al atravesar el conducto etmoidal posterior junto con el nervio de Luschka."
    ],
    "correcta": 0,
    "pista": "Los codos modifican su dirección a medida que progresa por los sectores topográficos principales (endocráneo, conducto, fosa y conducto terminal).",
    "explicacion": "El texto explica que el nervio describe en su recorrido dos curvas o codos a través de los 4 sectores topográficos secuenciales (Fosa craneal media, Conducto redondo mayor, Fosa pterigomaxilar y Conducto suborbitario). Los distractores sitúan estos codos en ramas colaterales finas o accidentes de V1."
  },
  {
    "id": "UBA_V2_025",
    "pregunta": "Al realizar un procedimiento quirúrgico en la pared posterior de la fosa pterigomaxilar, el cirujano observa el origen del nervio orbitario. ¿Qué variabilidad anatómica respecto a este origen avala la Cátedra?",
    "opciones": [
      "Puede originarse indistintamente en el endocráneo, en el conducto redondo mayor o en la fosa pterigomaxilar.",
      "Su origen está restringido exclusivamente al conducto suborbitario, por delante del dentario medio.",
      "Nace únicamente de la rama lacrimopalpebral en el interior de la órbita.",
      "Es un nervio inconstante que se confunde siempre con el ramo más anterior de los dentarios posteriores."
    ],
    "correcta": 0,
    "pista": "La Cátedra contempla tres posibles localizaciones para el origen de la segunda rama colateral del maxilar superior.",
    "explicacion": "El texto afirma explícitamente sobre el nervio orbitario: 'Se origina en endocráneo, conducto redondo mayor o fosa pterigomaxilar'. El distractor D confunde esta variabilidad con la definición del nervio dentario medio, y los demás restringen el origen erróneamente."
  },
  {
    "id": "UBA_V2_026",
    "pregunta": "Con respecto a las relaciones del nervio suborbitario en el conducto homónimo, ¿cuál es la disposición de los vasos que lo acompañan en este trayecto terminal?",
    "opciones": [
      "Está acompañado por la arteria suborbitaria y por venas satélite en toda su extensión.",
      "Está acompañado lateralmente por la arteria meníngea media y el plexo perimeningeo.",
      "Se relaciona con la arteria oftálmica, la cual se ubica medialmente dentro del conducto.",
      "No posee acompañamiento de vasos satélites dado su carácter puramente terminal."
    ],
    "correcta": 0,
    "pista": "El paquete vasculonervioso terminal adopta el mismo nombre que el conducto óseo que recorre bajo el piso orbitario.",
    "explicacion": "El fragmento final de la ventana de trabajo dictamina de forma unívoca: 'En toda esta extensión terminal, el nervio va a pasar a llamarse nervio suborbitario, va a estar acompañado por la arteria suborbitaria y por venas satélite'. Los distractores mencionan otras arterias (meníngea media, oftálmica) descartadas por el texto para este sector."
  },
  
  {
    "id": "UBA_V2_027",
    "pregunta": "Durante una cirugía reconstructiva del paladar blando, el cirujano aborda la zona inmediatamente superior y anterior a la base del gancho de la apófisis pterigoides. ¿Qué estructura nerviosa emerge en este punto exacto tras recorrer un canal óseo de la lámina vertical del palatino y cuál es su origen?",
    "opciones": [
      "El nervio palatino posterior, originado de forma común con los nervios palatinos anterior y medio por debajo del ganglio esfenopalatino.",
      "El nervio palatino anterior, que transcurre de forma aislada por el conducto palatino accesorio desde la fosa craneal media.",
      "Los ramos nasales superiores, nacidos del plexo maxilar endocraneal que atraviesan la porción posterior del agujero redondo.",
      "El nervio esfenoetmoidal de Luschka, originado de las raíces directas del nervio suborbitario dentro de la fosa pterigomaxilar."
    ],
    "correcta": 0,
    "pista": "Este ramo se independiza tras un origen compartido con el resto de los nervios palatinos y se dirige específicamente hacia atrás buscando la lámina ósea vertical.",
    "explicacion": "El texto explicita que el nervio palatino posterior se encuentra unido en su origen al nervio palatino anterior y medio, se separa dirigiéndose hacia atrás en un canal accesorio de la lámina vertical del palatino y emerge por encima y delante de la base del gancho de la apófisis pterigoides. Los distractores modifican los orígenes, conductos o el nombre de las estructuras asociadas."
  },
  {
    "id": "UBA_V2_028",
    "pregunta": "Un proceso expansivo tumoral compromete la porción anterior del agujero esfenopalatino, bloqueando exclusivamente el paso de las estructuras nerviosas descritas en dicha localización por la Cátedra. ¿Qué déficit sensitivo específico manifestará el paciente?",
    "opciones": [
      "Alteración de la sensibilidad en el territorio mucoso nasal correspondiente a los nervios nasales superiores.",
      "Pérdida de la sensibilidad en la duramadre próxima al origen endocraneal debido al compromiso del nervio meníngeo medio.",
      "Anestesia circunscrita a la mucosa del seno esfenoidal y de las celdillas etmoidales posteriores por afección de los nervios orbitarios.",
      "Anestesia de la encía vestibular a nivel de los molares y premolares superiores por parálisis del grupo dentario medio."
    ],
    "correcta": 0,
    "pista": "Identifique el ramo del nervio esfenopalatino cuyo trayecto perfora selectivamente la región rostral o anterior de este foramen de comunicación nasal.",
    "explicacion": "La ventana de trabajo indica de forma textual que los nervios nasales superiores 'Atraviesan la parte anterior del agujero esfenopalatino'. Por ende, su lesión selectiva afectará dicho componente de la mucosa nasal. Los distractores asignan forámenes u orificios diferentes a las otras ramas del complejo esfenopalatino (los orbitarios van por la hendidura esfenomaxilar al conducto etmoidal posterior, el meníngeo medio es endocraneal, y los dentarios corren por el maxilar/seno)."
  }
],
 "temas diferencidos parte 2": [
  {
    "id": "UBA_MAX_01",
    "pregunta": "¿Cuál de las siguientes ramas colaterales enumeradas en la ventana de trabajo del nervio maxilar nace antes de que el tronco principal abandone la cavidad craneal o en su transición inmediata?",
    "opciones": [
      "Nervio meníngeo medio",
      "Nervio orbitario",
      "Nervio esfenopalatino",
      "Nervio dentario anterior"
    ],
    "correcta": 0,
    "pista": "Es la primera rama colateral listada en la secuencia anatómica del texto, destinada a las cubiertas protectoras intracraneales.",
    "explicacion": "El nervio meníngeo medio es la primera rama colateral que se desprende de forma proximal en el trayecto de V2 para encargarse de la sensibilidad de las meninges. Los distractores B, C y D corresponden a ramas que se originan más adelante en su trayecto extracraneal y suborbitario."
  },
  {
    "id": "UBA_MAX_02",
    "pregunta": "En una intervención sobre la pared posterolateral del seno maxilar y los molares superiores, ¿qué grupo de colaterales del nervio maxilar se encuentra directamente en riesgo anatómico?",
    "opciones": [
      "Nervios dentarios posteriores",
      "Nervio meníngeo medio",
      "Nervio orbitario",
      "Ramos ascendentes del nervio esfenopalatino"
    ],
    "correcta": 0,
    "pista": "Son las ramas encargadas de la inervación de las piezas dentarias del sector posterior del maxilar.",
    "explicacion": "Los nervios dentarios posteriores corresponden a la cuarta estructura listada y son responsables de la inervación alveolar y dentaria de los molares superiores. El meníngeo medio es intracraneal, el orbitario superior y los ramos ascendentes van a la mucosa nasal."
  },
  {
    "id": "UBA_MAX_03",
    "pregunta": "Según la clasificación anatómica de la ventana de trabajo, ¿qué destino específico poseen los ramos ascendentes derivados del nervio esfenopalatino?",
    "opciones": [
      "Inervar la mucosa nasal",
      "Contribuir a formar el plexo dentario",
      "Inervar los alvéolos de los incisivos",
      "Inervar la duramadre craneal"
    ],
    "correcta": 0,
    "pista": "El texto asocia explícitamente la flecha de los ramos ascendentes con una estructura de las fosas nasales.",
    "explicacion": "El texto especifica que los 'Ramos ascendentes → inerva la mucosa nasal'. Los ramos descendentes forman el plexo dentario (distractor B) y el dentario anterior se encarga de los incisivos (distractor C)."
  },
  {
    "id": "UBA_MAX_04",
    "pregunta": "La afectación selectiva del nervio dentario anterior alterará la sensibilidad de cuáles de las siguientes estructuras?",
    "opciones": [
      "Incisivos, caninos y sus alvéolos",
      "Mucosa nasal exclusivamente",
      "Molares superiores y plexo dentario",
      "Techo de la órbita y meninges"
    ],
    "correcta": 0,
    "pista": "Busca el territorio de distribución exacto indicado en el último párrafo de la ventana de trabajo.",
    "explicacion": "El texto señala textualmente: 'El dentario anterior inerva incisivos, caninos y sus alvéolos'. Las demás opciones corresponden a los territorios de los ramos ascendentes (mucosa nasal) o de los dentarios posteriores."
  },
  {
    "id": "UBA_MAX_05",
    "pregunta": "¿Qué estructura anatómica se forma de manera colectiva gracias a la contribución directa de los ramos descendentes del nervio esfenopalatino?",
    "opciones": [
      "El plexo dentario",
      "La mucosa nasal",
      "El nervio orbitario",
      "El nervio dentario medio"
    ],
    "correcta": 0,
    "pista": "Revisa la correlación del subtítulo de ramos descendentes en la página 57 del texto.",
    "explicacion": "El texto afirma explícitamente: 'Ramos descendentes → contribuye a formar el plexo dentario'. Los ramos ascendentes van a la mucosa nasal y las otras opciones son colaterales independientes."
  },
  {
    "id": "UBA_MAX_06",
    "pregunta": "Un paciente presenta anestesia completa en la región anterior de la arcada dentaria superior (incisivos y caninos) pero mantiene intacta la sensibilidad de los molares. ¿Qué componente nervioso colateral está lesionado?",
    "opciones": [
      "Nervio dentario anterior",
      "Nervios dentarios posteriores",
      "Nervio esfenopalatino",
      "Nervio orbitario"
    ],
    "correcta": 0,
    "pista": "El nervio afectado es el responsable exclusivo del sector de incisivos y caninos según la fuente.",
    "explicacion": "El nervio dentario anterior es el encargado específico de inervar los incisivos, caninos y sus alvéolos. Una lesión aislada compromete este territorio sin afectar a los molares (dentarios posteriores)."
  },
  {
    "id": "UBA_MAX_07",
    "pregunta": "¿Cuál es el orden secuencial correcto de las ramas colaterales 4, 5 y 6 del nervio maxilar según el documento de estudio?",
    "opciones": [
      "Dentarios posteriores, dentario medio, dentario anterior",
      "Dentario anterior, dentario medio, dentarios posteriores",
      "Dentario medio, dentarios posteriores, dentario anterior",
      "Esfenopalatino, dentarios posteriores, dentario medio"
    ],
    "correcta": 0,
    "pista": "Sigue la numeración del 4 al 6 provista en la lista de colaterales de la página 55.",
    "explicacion": "La lista oficial de la ventana de trabajo establece textualmente: '4. Nervios dentarios posteriores, 5. Nervio dentario medio, 6. Nervio dentario anterior'."
  },
  {
    "id": "UBA_MAX_08",
    "pregunta": "Si se produce una lesión en el tronco de V2 inmediatamente después del origen del nervio orbitario pero antes del origen del nervio esfenopalatino, ¿cuál de las siguientes funciones se mantendrá INTACTA?",
    "opciones": [
      "La sensibilidad transmitida por el nervio orbitario",
      "La inervación de la mucosa nasal por los ramos ascendentes",
      "La sensibilidad de incisivos y caninos por el dentario anterior",
      "La formación del plexo dentario por los ramos descendentes"
    ],
    "correcta": 0,
    "pista": "Las estructuras que nacen antes del punto de la lesión conservan sus fibras ilesas.",
    "explicacion": "Dado que el nervio orbitario es la rama número 2, su origen es proximal al punto de la lesión planteada, por lo que su función se mantiene intacta. Las ramas 3 (esfenopalatino) y 6 (dentario anterior) se originan distalmente y se verían afectadas."
  },
  {
    "id": "UBA_MAX_09",
    "pregunta": "Al analizar la distribución periférica del nervio maxilar, ¿qué relación funcional existe entre el nervio esfenopalatino y el plexo dentario superior?",
    "opciones": [
      "El esfenopalatino aporta sus ramos descendentes para la constitución del plexo",
      "El esfenopalatino recibe los ramos ascendentes provenientes del plexo",
      "El plexo dentario origina al nervio esfenopalatino de forma retrógrada",
      "No existe relación, ya que el esfenopalatino solo inerva la mucosa nasal"
    ],
    "correcta": 0,
    "pista": "Observa el comportamiento de la subdivisión descendente del nervio esfenopalatino.",
    "explicacion": "El texto indica de manera directa que los 'Ramos descendentes → contribuye a formar el plexo dentario'. Por lo tanto, participa activamente en su constitución."
  },
  {
    "id": "UBA_MAX_10",
    "pregunta": "¿Qué elemento listado como la rama colateral número 3 actúa como el origen común de los ramos que van a la mucosa nasal y al plexo dentario?",
    "opciones": [
      "Nervio esfenopalatino",
      "Nervio orbitario",
      "Nervio meníngeo medio",
      "Nervio dentario medio"
    ],
    "correcta": 0,
    "pista": "Es el nervio que se divide en ramos ascendentes y descendentes al final de la ventana de trabajo.",
    "explicacion": "El nervio esfenopalatino (rama colateral 3) emite tanto los ramos ascendentes (mucosa nasal) como los ramos descendentes (plexo dentario)."
  },
  {
    "id": "UBA_MAX_11",
    "pregunta": "Durante la exploración de la sensibilidad profunda del complejo maxilar, se constata afectación de la mucosa nasal y del plexo dentario, pero con indemnidad de la duramadre craneal. Anatómicamente, esto sugiere un compromiso selectivo a partir de:",
    "opciones": [
      "El nervio esfenopalatino",
      "El nervio meníngeo medio",
      "El nervio orbitario únicamente",
      "El nervio dentario anterior exclusivamente"
    ],
    "correcta": 0,
    "pista": "Es la estructura de la cual dependen directamente las dos regiones afectadas descritas.",
    "explicacion": "El nervio esfenopalatino coordina mediante sus ramos ascendentes y descendentes la mucosa nasal y el plexo dentario. Al estar indemne la duramadre (meníngeo medio), la afección se localiza a nivel de esta tercera rama colateral."
  },
  {
    "id": "UBA_MAX_12",
    "pregunta": "¿Cuál de las siguientes afirmaciones define correctamente el destino y la organización del nervio orbitario según el texto adjunto?",
    "opciones": [
      "Es la segunda rama colateral del nervio maxilar",
      "Es una rama terminal destinada a la mucosa nasal",
      "Es un componente que contribuye directamente al plexo dentario anterior",
      "Es la rama número 5 encargada de los caninos"
    ],
    "correcta": 0,
    "pista": "Corrobora la posición exacta del nervio orbitario en la lista de la página 55.",
    "explicacion": "En el texto, el '2. Nervio orbitario' figura inmediatamente después del nervio meníngeo medio, clasificándose como la segunda rama colateral del tronco de V2."
  },
  {
    "id": "UBA_MAX_13",
    "pregunta": "Fisiológicamente, la pérdida de conducción nerviosa en el nervio dentario medio afectaría la transmisión sensitiva de la arcada dentaria en una posición intermedia entre:",
    "opciones": [
      "Los nervios dentarios posteriores y el nervio dentario anterior",
      "El nervio meníngeo medio y el nervio orbitario",
      "Los ramos ascendentes y los ramos descendentes",
      "La mucosa nasal y los incisivos superiores"
    ],
    "correcta": 0,
    "pista": "Evalúa su orden numérico y posicional dentro de la secuencia de ramas dentarias (4, 5 y 6).",
    "explicacion": "El nervio dentario medio ocupa el lugar 5, ubicándose anatómicamente y numéricamente entre los dentarios posteriores (4) y el dentario anterior (6)."
  },
  {
    "id": "UBA_MAX_14",
    "pregunta": "Si un odontólogo necesita bloquear exclusivamente la inervación de los dientes caninos superiores y sus alvéolos sin anestesiar el sector posterior, ¿sobre qué estructura anatómica debe actuar?",
    "opciones": [
      "El nervio dentario anterior",
      "Los nervios dentarios posteriores",
      "El nervio dentario medio",
      "Los ramos ascendentes del esfenopalatino"
    ],
    "correcta": 0,
    "pista": "Se requiere la rama que inerva de forma explícita a caninos e incisivos.",
    "explicacion": "El texto especifica que 'El dentario anterior inerva incisivos, caninos y sus alvéolos', haciéndolo el blanco anatómico idóneo para este procedimiento."
  },
  {
    "id": "UBA_MAX_15",
    "pregunta": "¿Qué característica estructural diferencia a los ramos ascendentes de los ramos descendentes del nervio esfenopalatino en la página 57?",
    "opciones": [
      "Los ascendentes van a la mucosa nasal y los descendentes al plexo dentario",
      "Los ascendentes forman el plexo y los descendentes van a los alvéolos directos",
      "Los ascendentes inervan el nervio orbitario y los descendentes el meníngeo medio",
      "No presentan diferencias en su territorio de distribución final"
    ],
    "correcta": 0,
    "pista": "Observa el mapeo que realizan las dos viñetas con flechas al final del documento.",
    "explicacion": "El texto aclara de forma estricta: 'Ramos ascendentes → inerva la mucosa nasal' y 'Ramos descendentes → contribuye a formar el plexo dentario'. Los distractores alteran o confunden estas relaciones directas."
  },
  {
    "id": "UBA_MAX_16",
    "pregunta": "Un traumatismo en la región facial anterior destruye las raíces de las piezas dentarias incisivas. ¿Qué elemento nervioso colateral conduce los estímulos dolorosos de este daño alveolar inicial?",
    "opciones": [
      "Nervio dentario anterior",
      "Nervio dentario medio",
      "Nervios dentarios posteriores",
      "Nervio meníngeo medio"
    ],
    "correcta": 0,
    "pista": "Corresponde a la colateral número 6 de la lista del nervio maxilar.",
    "explicacion": "La inervación de los incisivos y sus alvéolos proviene directamente del nervio dentario anterior, tal como se explicita en el cierre de la ventana de trabajo."
  },
  {
    "id": "UBA_MAX_17",
    "pregunta": "¿Cuál de los siguientes elementos NO forma parte de la lista de las 6 ramas colaterales primarias del nervio maxilar detalladas en la página 55?",
    "opciones": [
      "Nervio esfenomaxilar",
      "Nervio meníngeo medio",
      "Nervio orbitario",
      "Nervio esfenopalatino"
    ],
    "correcta": 0,
    "pista": "Tres de las opciones están numeradas explícitamente del 1 al 3; una no figura.",
    "explicacion": "El 'Nervio esfenomaxilar' no aparece en ningún apartado de la ventana de trabajo. Los otros tres constituyen las primeras tres ramas colaterales oficiales del listado."
  },
  {
    "id": "UBA_MAX_18",
    "pregunta": "La integración de los ramos descendentes del esfenopalatino y las ramas de los nervios dentarios confluyen funcionalmente en una red denominada:",
    "opciones": [
      "Plexo dentario",
      "Mucosa nasal",
      "Tronco maxilar",
      "Ramo orbitario"
    ],
    "correcta": 0,
    "pista": "Es el destino final indicado para los ramos descendentes.",
    "explicacion": "El texto asocia de manera unívoca a los ramos descendentes con la contribución hacia la formación del 'plexo dentario'."
  },
  {
    "id": "UBA_MAX_19",
    "pregunta": "Al realizar una revisión anatómica del trayecto de V2, un estudiante describe que el nervio esfenopalatino emite ramos que se dirigen en sentido superior y ramos en sentido inferior. ¿Cómo se denominan estas subdivisiones de acuerdo a la fuente?",
    "opciones": [
      "Ramos ascendentes y ramos descendentes",
      "Nervio orbitario y nervio meníngeo medio",
      "Nervio dentario anterior y dentario medio",
      "Plexo nasal y plexo dentario anterior"
    ],
    "correcta": 0,
    "pista": "Busca los términos con viñetas que desglosan al nervio esfenopalatino en las páginas 56-57.",
    "explicacion": "El texto utiliza de forma literal las denominaciones 'Ramos ascendentes' y 'Ramos descendentes' para describir las subdivisiones del nervio esfenopalatino."
  },
  {
    "id": "UBA_MAX_20",
    "pregunta": "¿Qué piezas dentarias específicas perderían su inervación alveolar y sensitiva si se secciona el nervio dentario anterior?",
    "opciones": [
      "Incisivos y caninos",
      "Molares y premolares",
      "Mucosa nasal y molares",
      "Exclusivamente los premolares superiores"
    ],
    "correcta": 0,
    "pista": "La respuesta se encuentra detallada en la última línea explicativa de la página 57.",
    "explicacion": "El texto indica que el dentario anterior se distribuye en 'incisivos, caninos y sus alvéolos'. No menciona molares ni premolares en ese ramo."
  },
  {
    "id": "UBA_MAX_21",
    "pregunta": "Si clasificamos jerárquicamente las estructuras de la ventana de trabajo, el plexo dentario recibe fibras de:",
    "opciones": [
      "Los ramos descendentes del nervio esfenopalatino",
      "Los ramos ascendentes del nervio esfenopalatino",
      "El nervio meníngeo medio de manera directa",
      "El nervio orbitario exclusivamente"
    ],
    "correcta": 0,
    "pista": "Identifica cuál de las subdivisiones se conecta mediante una flecha con el plexo dentario.",
    "explicacion": "Según la ventana de trabajo, los ramos descendentes son los que contribuyen a formar el plexo dentario. Los ascendentes van hacia la mucosa nasal."
  },
  {
    "id": "UBA_MAX_22",
    "pregunta": "En el contexto del examen de Neuroanatomía de la UBA, si se te pide identificar la rama colateral número 1 del nervio maxilar, tu respuesta debe ser:",
    "opciones": [
      "1. Nervio meníngeo medio",
      "2. Nervio orbitario",
      "3. Nervio esfenopalatino",
      "4. Nervios dentarios posteriores"
    ],
    "correcta": 0,
    "pista": "Corresponde al primer ítem del listado de ramas colaterales.",
    "explicacion": "El texto inicia su enumeración de ramas colaterales textualmente con '1. Nervio meníngeo medio'."
  },
  {
    "id": "UBA_MAX_23",
    "pregunta": "El nervio maxilar da origen a tres nervios relacionados de forma directa con la arcada dentaria superior. ¿Cuáles son según el texto?",
    "opciones": [
      "Dentarios posteriores, dentario medio y dentario anterior",
      "Meníngeo medio, orbitario y esfenopalatino",
      "Ramos ascendentes, descendentes y plexo dentario",
      "Nervio orbitario, dentario medio y mucosa nasal"
    ],
    "correcta": 0,
    "pista": "Corresponden a los ítems 4, 5 y 6 de la lista de colaterales.",
    "explicacion": "Los tres ramos destinados nominalmente al aparato dentario en la lista son los nervios dentarios posteriores, dentario medio y dentario anterior."
  },
  {
    "id": "UBA_MAX_24",
    "pregunta": "Un proceso patológico expansivo compromete la mucosa nasal del paciente. Evaluando las estructuras de la ventana de trabajo, ¿a través de qué ramos llega esta información al nervio maxilar?",
    "opciones": [
      "Ramos ascendentes del nervio esfenopalatino",
      "Ramos descendentes del nervio esfenopalatino",
      "Nervio dentario anterior",
      "Nervio orbitario"
    ],
    "correcta": 0,
    "pista": "Identifica los ramos asociados unívocamente con la mucosa nasal.",
    "explicacion": "El texto vincula de forma directa los 'Ramos ascendentes' con la estructura 'mucosa nasal'. Los descendentes van al plexo dentario."
  },
  {
    "id": "UBA_MAX_25",
    "pregunta": "De acuerdo con el diseño estructural presentado entre las páginas 55 y 57, los elementos 'Nervio orbitario' y 'Nervio esfenopalatino' comparten la cualidad común de ser:",
    "opciones": [
      "Ramas colaterales del nervio maxilar",
      "Ramos terminales de los nervios dentarios",
      "Ramos descendentes de la mucosa nasal",
      "Estructuras del plexo dentario anterior"
    ],
    "correcta": 0,
    "pista": "Observa el título general bajo el cual están agrupados y numerados.",
    "explicacion": "Tanto el nervio orbitario (2) como el esfenopalatino (3) se encuentran clasificados y agrupados bajo el título principal de 'Ramas colaterales' del tronco nervioso estudiado."
  },
  
  {
    "id": "UBA_MAX_COMP_01",
    "pregunta": "De acuerdo con el orden sistemático de ramificación de las colaterales del nervio maxilar, ¿cuál es la primera rama colateral que se origina con un destino nominalmente vinculado de forma exclusiva al aparato dentario y alveolar?",
    "opciones": [
      "Nervios dentarios posteriores",
      "Nervio meníngeo medio",
      "Nervio dentario medio",
      "Nervio esfenopalatino"
    ],
    "correcta": 0,
    "pista": "Es el ítem número 4 de la lista general de ramas colaterales y precede a las demás subdivisiones dentarias.",
    "explicacion": "Los nervios dentarios posteriores constituyen la cuarta rama colateral listada en el texto y la primera en llevar la denominación 'dentario'. El meníngeo medio (1) e infraorbitario/esfenopalatino (3) no están vinculados nominalmente en la lista al aparato dentario, mientras que el dentario medio (5) es posterior en la secuencia anatómica."
  },
  {
    "id": "UBA_MAX_COMP_02",
    "pregunta": "Un esquema anatómico lineal busca representar la emergencia de las ramas colaterales del nervio maxilar. Si se aísla el punto intermedio entre el origen del nervio esfenopalatino y el origen del nervio dentario medio, ¿qué estructura colateral debe localizarse en dicha posición?",
    "opciones": [
      "Nervios dentarios posteriores",
      "Nervio meníngeo medio",
      "Nervio orbitario",
      "Nervio dentario anterior"
    ],
    "correcta": 0,
    "pista": "Busca la estructura que numéricamente ocupa el lugar número 4 en la secuencia de colaterales.",
    "explicacion": "La secuencia textual obligatoria de la ventana de trabajo sitúa a los 'Nervios dentarios posteriores' como la rama número 4, posicionada exactamente entre la rama 3 (Nervio esfenopalatino) y la rama 5 (Nervio dentario medio)."
  }
],
"temas diferencidos parte 3": [
  {
    "id": "UBA_V3_001",
    "pregunta": "Durante una disección de la fosa cigomática, se identifica un elemento nervioso de trayecto recurrente que ingresa al cráneo por el agujero redondo menor (espinoso) acompañando a la arteria meníngea media. ¿Cuál es el origen anatomotopográfico exacto de esta estructura según la descripción de la cátedra?",
    "opciones": [
      "Como colateral del tronco del nervio mandibular en la fosa cigomática.",
      "Como terminal anterior del nervio temporobucal tras cruzar el porus crotafítico.",
      "Como una eferencia directa del ganglio ótico dirigida a las meninges.",
      "Como colateral del nervio auriculotemporal en la región parotídea."
    ],
    "correcta": 0,
    "pista": "Este nervio se origina poco después de que el tronco principal se hace exocraneal, antes de dividirse en sus grandes troncos terminales.",
    "explicacion": "El nervio recurrente meníngeo es una rama colateral del nervio mandibular que nace en la fosa cigomática y vuelve a introducirse en el cráneo a través del agujero redondo menor para dar inervación sensitiva a las meninges. Evalúa el origen y trayecto de las colaterales del tronco común."
  },
  {
    "id": "UBA_V3_002",
    "pregunta": "Un preparado anatómico muestra el ojal osteofibroso denominado Porus crotafítico buccinatorio de Hyrtl. Si se realiza un corte a nivel de las estructuras que lo atraviesan de forma directa, ¿qué grupo de elementos nerviosos se encontrará seccionado en su totalidad?",
    "opciones": [
      "El nervio temporobucal, el nervio temporal profundo medio y el nervio témporo-maseterino.",
      "El nervio dentario inferior, el nervio lingual y el nervio auriculotemporal.",
      "El nervio recurrente meníngeo, el nervio del milohioideo y el nervio bucal.",
      "El tronco común para el pterigoideo interno, el periestafilino externo y el músculo del martillo."
    ],
    "correcta": 0,
    "pista": "Este porus es un ojal ubicado en la base de la apófisis pterigoides que sirve de pasaje inicial para las ramas que van hacia las regiones temporal, bucal y maseterina.",
    "explicacion": "El texto especifica que el Porus crotafítico buccinatorio de Hyrtl es un accidente en la base del cráneo atravesado exclusivamente por tres nervios: el temporobucal, el temporal profundo medio y el témporo-maseterino, los cuales luego realizan distintos recorridos. Evalúa accidentes óseos y relaciones cruzadas."
  },
  {
    "id": "UBA_V3_003",
    "pregunta": "Analizando las relaciones topográficas dentro del hiato interpterigoideo, se observa que el nervio temporobucal se introduce entre los fascículos del músculo pterigoideo externo. ¿Con qué estructura vascular se relaciona íntimamente en este compartimento?",
    "opciones": [
      "Con la variedad profunda de la arteria maxilar interna.",
      "Con la arteria meníngea media en su trayecto ascendente.",
      "Con la arteria dentaria inferior antes de ingresar a su conducto.",
      "Con el plexo venoso pterigoideo superficial."
    ],
    "correcta": 0,
    "pista": "Busca la principal arteria de la región cigomática que presenta variedades de trayecto (superficial o profunda) respecto a los músculos de la masticación.",
    "explicacion": "El texto describe textualmente que al introducirse en el hiato interpterigoideo (entre los fascículos del pterigoideo externo), el nervio temporobucal se relaciona con la variedad profunda de la maxilar interna. Evalúa relaciones anatómicas complejas."
  },
  {
    "id": "UBA_V3_004",
    "pregunta": "El nervio temporobucal emite ramas durante su recorrido por la fosa cigomática. ¿Cuál es su única rama colateral y qué carácter funcional posee?",
    "opciones": [
      "Un ramo motor para el músculo pterigoideo externo.",
      "Un ramo sensitivo para la mucosa del músculo buccinador.",
      "Una rama comunicante de tipo parasimpático para el ganglio ótico.",
      "Un ramo motor destinado exclusivamente al fascículo anterior del temporal."
    ],
    "correcta": 0,
    "pista": "La rama nace en pleno hiato interpterigoideo y su función es inervar al músculo que delimita dicho espacio.",
    "explicacion": "Según el texto, en su recorrido interpterigoideo el nervio temporobucal da su única colateral, la cual corresponde a un ramo motor para el músculo pterigoideo externo. Evalúa ramas y funciones de los componentes del nervio mandibular."
  },
  {
    "id": "UBA_V3_005",
    "pregunta": "Si un cirujano aborda la región geniana superficial y diseca las estructuras profundas a la bola adiposa de Bichat, encontrará el ramo terminal descendente del nervio temporobucal. ¿Qué componentes funcionales y relaciones presenta este nervio terminal?",
    "opciones": [
      "Es el nervio bucal; posee fibras sensitivas, simpáticas/parasimpáticas y pasa por la cara superficial del fascículo inferior del pterigoideo externo.",
      "Es el nervio temporal profundo anterior; posee fibras motoras puras y transcurre por el hiato pterigocraneal.",
      "Es el nervio maseterino; posee fibras motoras y cruza de forma descendente la escotadura sigmoidea.",
      "Es el nervio lingual; posee fibras somáticas y autónomas, ubicándose por fuera del balcón de Fischer."
    ],
    "correcta": 0,
    "pista": "Este nervio recibe un aporte autónomo tras su anastomosis con el ganglio ótico y busca finalmente la región del buccinador.",
    "explicacion": "El nervio bucal es una rama terminal del temporobucal, posee fibras mixtas (sensitivas y simpáticas/parasimpáticas agregadas por anastomosis con el ganglio ótico) y en su trayecto pasa por la cara superficial del fascículo inferior del pterigoideo externo adosándose a su cara profunda. Evalúa trayectos y territorios funcionales compartidos."
  },
  {
    "id": "UBA_V3_006",
    "pregunta": "Al estudiar el nervio temporal profundo medio, se constata que comparte su origen atravesando el Porus crotafítico buccinatorio de Hyrtl. ¿Cuál es el espacio anatómico inmediatamente posterior que utiliza para acceder a la cara profunda del músculo temporal?",
    "opciones": [
      "El hiato pterigocraneal.",
      "El hiato interpterigoideo.",
      "El espacio pterigomandibular.",
      "El hiatus submaxilar."
    ],
    "correcta": 0,
    "pista": "Este espacio se localiza entre el borde superior del músculo pterigoideo externo y los elementos óseos de la base del cráneo.",
    "explicacion": "El texto explicita que el nervio temporal profundo medio pasa por el hiato pterigocraneal (espacio entre el pterigoideo externo y la base del cráneo) y recorre el borde superior de dicho músculo. Evalúa trayecto y relaciones cruzadas."
  },
  {
    "id": "UBA_V3_007",
    "pregunta": "En la fosa temporal se establece una red de comunicaciones nerviosas profundas al músculo temporal. ¿Cómo se organiza el sistema de anastomosis de los nervios temporales profundos según la información oficial?",
    "opciones": [
      "El temporal profundo medio se anastomosa hacia adelante con el anterior, y este a su vez con el profundo posterior.",
      "El temporal profundo anterior se une directamente al posterior, puenteando por completo al medio.",
      "El temporobucal y el témporo-maseterino se unen en un tronco único antes de tocar el plano óseo.",
      "El auriculotemporal genera un arco anastomótico superficial con el temporal profundo medio."
    ],
    "correcta": 0,
    "pista": "La cadena de comunicaciones sigue una dirección de adelante hacia atrás, conectando las ramas de los diferentes troncos originados en la fosa cigomática.",
    "explicacion": "El texto señala expresamente que el nervio temporal profundo anterior se anastomosa con el nervio temporal profundo medio (que está hacia atrás), y este a su vez se anastomosa con el profundo posterior. Evalúa comunicaciones nerviosas regionales."
  },
  {
    "id": "UBA_V3_008",
    "pregunta": "El nervio témporo-maseterino sigue un trayecto exocraneal que involucra hitos musculares específicos. Una vez que atraviesa el músculo pterigoideo externo a través del hiatus, ¿cuál es su comportamiento inmediato?",
    "opciones": [
      "Sale por su cara externa y se separa de inmediato en sus dos ramas terminales.",
      "Se adosa a la cara interna de la mandíbula para dar el nervio milohioideo.",
      "Se anastomosa con el nervio bucal formando un plexo geniano profundo.",
      "Ingresa de forma directa al agujero redondo menor llevando axones propioceptivos."
    ],
    "correcta": 0,
    "pista": "Es el evento anatómico final que delimita la ventana de trabajo solicitada para el tronco de este nervio.",
    "explicacion": "El texto concluye en la página 60 que 'Una vez que atraviesa el pterigoideo externo a través del hiatus, sale por su cara externa, y se va a separar en sus dos ramas terminales' (las cuales son el temporal profundo posterior y el maseterino). Evalúa trayecto y ramificación terminal."
  },
  {
    "id": "UBA_V3_009",
    "pregunta": "El nervio temporal profundo posterior presenta relaciones muy precisas en el plano profundo de la fosa cigomática y temporal. ¿Cuál es su disposición respecto a la articulación temporomandibular (ATM) y a los otros nervios temporales?",
    "opciones": [
      "Es ascendente, pasa por delante de la ATM en un plano posterior al temporal profundo medio.",
      "Es descendente, pasa por detrás de la ATM y por dentro del ojal retrocondíleo de Juvara.",
      "Es ascendente, corre por fuera del menisco de la ATM y por delante del temporal profundo anterior.",
      "Es puramente horizontal, cruza el cuello del cóndilo por debajo de la inserción capsular."
    ],
    "correcta": 0,
    "pista": "Su función es motora para el músculo temporal, y su trayecto ascendente se ubica inmediatamente anterior al complejo articular.",
    "explicacion": "El texto define al nervio temporal profundo posterior como ascendente, con fibras motoras, que pasa por delante de la ATM en un plano posterior al temporal profundo medio. Evalúa relaciones anatómicas complejas de alta prioridad."
  },
  {
    "id": "UBA_V3_010",
    "pregunta": "Al estudiar la inervación del músculo masetero, se describe el trayecto del nervio maseterino. ¿Qué accidente óseo de la mandíbula debe franquear este nervio para alcanzar la cara profunda de su músculo diana?",
    "opciones": [
      "La escotadura sigmoidea.",
      "El orificio dentario inferior.",
      "El balcón de Fischer.",
      "La espina de Civinini."
    ],
    "correcta": 0,
    "pista": "Es una amplia escotadura situada en el borde superior de la rama ascendente de la mandíbula, entre el cóndilo y la apófisis coronoides.",
    "explicacion": "El texto indica que el nervio maseterino es una rama descendente, motora, que recorre la cara externa del pterigoideo externo, atraviesa la escotadura sigmoidea y llega a la cara profunda del masetero. Evalúa trayecto y accidentes óseos asociados."
  },
  {
    "id": "UBA_V3_011",
    "pregunta": "Topográficamente, los nervios dentario inferior y lingual comparten ciertos espacios en su descenso, pero se diferencian netamente en sus planos. ¿Cómo se disponen mutuamente al abandonar la fosa cigomática?",
    "opciones": [
      "El nervio lingual sigue un trayecto similar al dentario inferior pero en un plano más interno y hacia adelante.",
      "El nervio dentario inferior es interno y anterior en relación al trayecto del nervio lingual.",
      "Ambos nervios se fusionan en el espacio pterigomandibular formando un tronco mixto secundario.",
      "El nervio lingual desciende pegado al hueso y el dentario inferior corre por dentro del músculo hiogloso."
    ],
    "correcta": 0,
    "pista": "El nervio lingual debe dirigirse hacia la cavidad bucal y la lengua, lo que condiciona su posición más medial y anterior.",
    "explicacion": "El texto indica textualmente que el nervio lingual 'sigue un trayecto similar al dentario inferior pero en un plano más interno y hacia adelante'. Evalúa la comparación estructural y relaciones espaciales."
  },
  {
    "id": "UBA_V3_012",
    "pregunta": "El nervio lingual posee un trayecto complejo que lo lleva desde la región interpterigoidea hasta la punta de la lengua. ¿Qué recorrido realiza al pasar del espacio pterigomandibular hacia la mucosa oral?",
    "opciones": [
      "Cruza el borde anterior del pterigoideo interno y se ubica en un espacio submucoso en el fondo o surco lingual.",
      "Atraviesa las fibras del pterigoideo interno y pasa por debajo de la línea milohioidea.",
      "Transcurre lateral a la tabla externa de la mandíbula cruzando la bola adiposa de Bichat.",
      "Se introduce en el conducto dentario inferior junto con la arteria milohioidea."
    ],
    "correcta": 0,
    "pista": "En esta zona se vuelve sumamente superficial y se relaciona de forma directa con la cara interna de la mandíbula en el surco lingual.",
    "explicacion": "El texto especifica que el nervio lingual 'cruza el borde anterior del pterigoideo interno y se ubica en un espacio submucoso -> es muy superficial. El espacio es el fondo o surco lingual'. Evalúa trayecto y límites de espacios topográficos."
  },
  {
    "id": "UBA_V3_013",
    "pregunta": "Dentro del espacio submucoso del fondo o surco lingual, se describen límites anatómicos estrictos para el trayecto del nervio lingual. ¿Cuáles son sus límites medial y lateral?",
    "opciones": [
      "Hacia adentro el órgano lingual, hacia afuera la tabla interna de la mandíbula.",
      "Hacia adentro el músculo hiogloso, hacia afuera el músculo pterigoideo interno.",
      "Hacia adentro la glándula sublingual, hacia afuera el balcón de Fischer.",
      "Hacia adentro el milohioideo, hacia afuera la glándula submaxilar."
    ],
    "correcta": 0,
    "pista": "El nervio lingual se encuentra encajonado en el surco entre las estructuras propias de la lengua y el plano óseo mandibular.",
    "explicacion": "El texto determina explícitamente que el espacio del fondo o surco lingual va a estar limitado: 'Hacia adentro: órgano lingual' y 'Hacia afuera: tabla interna de la mandíbula'. Evalúa límites anatómicos precisos."
  },
  {
    "id": "UBA_V3_014",
    "pregunta": "Durante el trayecto del nervio lingual por el suelo de la boca, este se relaciona con un importante accidente óseo/receptáculo de anestesia y con capas musculares. ¿Cuál es su ubicación exacta respecto al Balcón de Fischer y al músculo milohioideo?",
    "opciones": [
      "Pasa justo por debajo del Balcón de Fischer y está ubicado por encima del milohioideo (en su cara profunda).",
      "Pasa por encima del Balcón de Fischer y perfora al milohioideo para hacerse subcutáneo.",
      "Transcurre externo al Balcón de Fischer y por debajo de la cara superficial del milohioideo.",
      "Se adosa al Balcón de Fischer, ubicándose en la cara superficial (inferior) del milohioideo."
    ],
    "correcta": 0,
    "pista": "El nervio lingual permanece en la cavidad oral propiamente dicha, por lo tanto, debe quedar por encima de la cincha del piso de la boca.",
    "explicacion": "El texto detalla que el nervio lingual 'va a pasar justo por debajo del Balcón de Fischer' y que 'Está ubicado por encima del milohioideo (en su cara profunda)'. Evalúa relaciones cruzadas complejas de interés estomatológico."
  },
  {
    "id": "UBA_V3_015",
    "pregunta": "Al ingresar al hiatus submaxilar, el nervio lingual cambia sus relaciones con los músculos intrínsecos y extrínsecos de la lengua. ¿Cómo se posiciona respecto al músculo hiogloso y qué jerarquía ocupa entre los elementos del hiato?",
    "opciones": [
      "Se ubica por la cara superficial (por fuera) del hiogloso, siendo el elemento nervioso más superior de los que atraviesan el hiatus.",
      "Se coloca por la cara profunda (por dentro) del hiogloso, siendo el elemento más inferior del hiatus.",
      "Atraviesa el cuerpo del hiogloso, dividiéndose en ramos que corren inferiores a la arteria lingual.",
      "Se sitúa por detrás del borde posterior del hiogloso, por fuera del tendón del digástrico."
    ],
    "correcta": 0,
    "pista": "El nervio cabalga las estructuras musculares del piso de la boca y en este hiato se consolida como la estructura más alta del paquete.",
    "explicacion": "El texto señala textualmente que el nervio lingual pasa 'por la cara superficial (por fuera) del hiogloso -> Entra en hiatus submaxilar, siendo el elemento nervioso más superior de los elementos que lo atraviesan'. Evalúa relaciones cruzadas complejas e integración de datos."
  },
  {
    "id": "UBA_V3_016",
    "pregunta": "Antes de terminar en la punta de la lengua, el nervio lingual realiza un último cruce topográfico con una estructura glandular en el piso de la boca. ¿Cuál es esta relación?",
    "opciones": [
      "Cruza por dentro de la glándula sublingual.",
      "Perfora el cuerpo de la glándula submaxilar.",
      "Pasa por fuera de la prolongación anterior de la glándula parótida.",
      "Rodea el conducto de Stenon en la región geniana profunda."
    ],
    "correcta": 0,
    "pista": "Es una glándula salival menor/mayor situada directamente en el compartimento anterior del surco lingual, muy próxima a la línea media.",
    "explicacion": "El texto describe que el nervio lingual, tras pasar el hiatus submaxilar, 'se dirige hacia adelante, cruza por dentro de la glándula sublingual y termina en la punta de la lengua'. Evalúa trayecto final y relaciones glandulares."
  },
  {
    "id": "UBA_V3_017",
    "pregunta": "Analizando el trayecto descendente del nervio dentario (alveolar) inferior, ¿cuáles son las relaciones musculares y espaciales sucesivas que presenta en su primera y segunda porción antes de ingresar al canal óseo?",
    "opciones": [
      "Primero en la cara profunda del pterigoideo externo; luego en el espacio pterigomandibular (cara profunda de la mandíbula y cara superficial del pterigoideo interno).",
      "Primero en la cara superficial del pterigoideo externo; luego en el hiato interpterigoideo cruzando al temporobucal.",
      "Primero en el hiato pterigocraneal; luego en la cara profunda del pterigoideo interno cruzando por dentro al nervio lingual.",
      "Primero por el porus de Hyrtl; luego atraviesa las fibras del masetero hasta la escotadura sigmoidea."
    ],
    "correcta": 0,
    "pista": "Este nervio viaja de arriba hacia abajo por la fosa cigomática. Primero está cubierto por el pterigoideo externo y luego entra al espacio entre la mandíbula y el pterigoideo interno.",
    "explicacion": "Según el texto, el nervio dentario inferior 'en su primer parte del recorrido se va a encontrar en la cara profunda del pterigoideo externo' y luego 'se va a encontrar en el espacio pterigomandibular (cara prof de la mandíbula y cara superf del pterigoideo Int)'. Evalúa trayectos completos y relaciones sucesivas."
  },
  {
    "id": "UBA_V3_018",
    "pregunta": "Dentro del espacio pterigomandibular, el nervio dentario inferior no desciende aislado. ¿Con qué elementos anatómicos específicos se relaciona estrechamente en este punto según el texto de la cátedra?",
    "opciones": [
      "Con el nervio lingual y la arteria maxilar interna.",
      "Con el nervio auriculotemporal y la arteria meníngea media.",
      "Con el nervio maseterino y la arteria temporal profunda media.",
      "Con el nervio bucal y la vena facial anterior."
    ],
    "correcta": 0,
    "pista": "Se trata de otra gran rama terminal de $V_3$ que va más interna y de la arteria nutricia principal de la fosa cigomática.",
    "explicacion": "El texto afirma explícitamente que al encontrarse en el espacio pterigomandibular, el nervio dentario inferior se está 'relacionando con el nervio lingual y la maxilar interna'. Evalúa relaciones anatómicas cruzadas de alta prioridad."
  },
  {
    "id": "UBA_V3_019",
    "pregunta": "El nervio dentario inferior posee ramas colaterales de carácter anastomótico y distributivo. ¿Con qué nervios establece conexiones directas para compartir o recibir fibras según la ventana de estudio?",
    "opciones": [
      "Con el nervio auriculotemporal y con el nervio lingual.",
      "Con el nervio temporal profundo anterior y con el nervio bucal.",
      "Con el nervio maseterino y con el nervio recurrente meníngeo.",
      "Con el nervio del pterigoideo interno y con el nervio de la cuerda del tímpano."
    ],
    "correcta": 0,
    "pista": "Una de estas anastomosis le aporta fibras vegetativas (simpáticas y parasimpáticas) y la otra permite un intercambio directo con el nervio de la lengua.",
    "explicacion": "El texto detalla entre las colaterales del nervio dentario inferior: 'Anastomosis con el nervio auriculotemporal (por medio de ésta le llegan las fibras simpáticas y parasimpáticas)' y 'Anastomosis con el nervio lingual (comparten fibras)'. Evalúa conexiones y anastomosis funcionales."
  },
  {
    "id": "UBA_V3_020",
    "pregunta": "Antes de introducirse en el orificio dentario inferior para ingresar al conducto mandibular, el nervio dentario inferior emite una colateral libre. ¿Cuál es este nervio y qué características funcionales generales posee?",
    "opciones": [
      "El nervio milohioideo; es un nervio mixto que transporta fibras sensitivas para la encía y motoras para músculos.",
      "El nervio bucal; es un nervio sensitivo que transporta la inervación de la bola adiposa de Bichat.",
      "El nervio maseterino; es un nervio motor puro destinado a cruzar la escotadura sigmoidea.",
      "El nervio del martillo; es un ramo motor que se dirige al oído medio a través de la cisura de Glaser."
    ],
    "correcta": 0,
    "pista": "Este nervio corre por un canal homónimo en la cara interna de la mandíbula por debajo de la línea milohioidea e inerva la encía y componentes musculares del piso.",
    "explicacion": "El texto explicita: 'Previo a la entrada al conducto, hay un nervio colateral que es el nervio milohioideo -> Colaterales: Ramo/nervio milohioideo... es un N. Mixto u... glándula submaxilar - Transporta fibras sensitivas (encía) y motoras (músculos)'. Evalúa colaterales y su territorio funcional."
  },
  {
    "id": "UBA_V3_021",
    "pregunta": "Al analizar las anastomosis periféricas o vasculares del nervio milohioideo descritas en el programa, se evidencia que este ramo no solo se comunica con troncos nerviosos. ¿Con qué redes autónomas arteriales realiza anastomosis?",
    "opciones": [
      "Con el plexo simpático de las arterias dentaria inferior, milohioidea y facial.",
      "Con el plexo perimeningeo de la arteria meníngea media.",
      "Con el plexo carotídeo interno y la arteria lingual.",
      "Con el plexo venoso alveolar y la arteria temporal profunda anterior."
    ],
    "correcta": 0,
    "pista": "Busca las arterias que irrigan el cuerpo de la mandíbula, el piso de la boca y la región superficial de la cara.",
    "explicacion": "El texto describe bajo el apartado del nervio milohioideo/dentario que posee 'Anastomosis con el plexo simpático de las arterias dentaria inferior, milohioidea y facial'. Evalúa relaciones cruzadas vasculonerviosas y anastomosis."
  },
  {
    "id": "UBA_V3_022",
    "pregunta": "En el interior del conducto dentario inferior, el nervio homónimo modifica su estructura macroscópica para cumplir con la inervación del sector posterior. ¿Qué fenómeno anatómico ocurre allí y qué ramas emite?",
    "opciones": [
      "Se divide en una gran cantidad de nervios finos formando el plexo dentario inferior, dando ramos dentarios, óseos y gingivales para molares y premolares.",
      "Se une a la arteria maxilar interna para formar un paquete indisoluble sin dar ramas hasta los incisivos.",
      "Perfora las tablas óseas externa e interna emitiendo exclusivamente los ramos periósticos submucosos linguales.",
      "Se aplana contra el piso del conducto dando únicamente filetes nerviosos para el ligamento periodontal de los caninos."
    ],
    "correcta": 0,
    "pista": "Esta red intraneural proporciona los filetes para las piezas dentarias del sector molar y premolar y sus tejidos de sostén antes de la división terminal.",
    "explicacion": "El texto explica que 'Dentro del conducto el nervio se divide en una gran cantidad de nervios más finos formando el plexo dentario inferior' que emite 'Ramos dentarios, óseos y gingivales para molares y premolares'. Evalúa distribución, ramas e inervación estomatológica."
  },
  {
    "id": "UBA_V3_023",
    "pregunta": "El nervio dentario inferior avanza por el espesor del hueso maxilar inferior hasta un punto topográfico clave donde emite sus ramas terminales. ¿A qué nivel se produce esta división final y cuántas ramas genera?",
    "opciones": [
      "A la altura de la zona de los premolares, donde va a dar sus dos ramas terminales.",
      "A la altura del cuello del cóndilo, donde se divide en ramas superficiales y profundas.",
      "A nivel del primer molar inferior, dando origen al plexo dentario inferior.",
      "A nivel de la sínfisis mentoniana, donde se bifurca en ramos linguales y labiales."
    ],
    "correcta": 0,
    "pista": "Es la región bidentaria media de la mandíbula donde el conducto cambia de dirección y emite un ramo al exterior a través de un agujero.",
    "explicacion": "El texto expone explícitamente que el nervio dentario inferior recorre el conducto 'hasta la zona de los premolares donde va a dar sus dos ramas terminales'. Evalúa terminación del trayecto óseo."
  },
  {
    "id": "UBA_V3_024",
    "pregunta": "Un paciente presenta una pérdida de la sensibilidad en la piel del cuero cabelludo de la región mastoidea, parietal y frontal, pero conserva intacta la motilidad de los músculos masticadores correspondientes. Basado en las terminales del nervio mandibular descritas, ¿qué grupo de nervios recoge esta sensibilidad sin poseer función motora sobre dichos planos musculares?",
    "opciones": [
      "Las ramas terminales que finalizan su recorrido ascendente desde la fosa parotídea y llegan a la cara superficial del músculo temporal.",
      "Los nervios temporales profundos anterior, medio y posterior tras emerger del hiato pterigocraneal.",
      "Las ramas colaterales del nervio milohioideo en el espacio submucoso lingual.",
      "Las ramas terminales del nervio maseterino tras cruzar la escotadura sigmoidea."
    ],
    "correcta": 0,
    "pista": "Estas ramas terminales ascienden desde la parótida hacia la superficie del temporal, encargándose exclusivamente de la piel de las regiones lateral y superior del cráneo.",
    "explicacion": "El texto especifica que cuando estas ramas finalizan su recorrido ascendente desde la fosa parotídea y llegan a la cara superficial del músculo temporal 'no lo va a inervar de forma motora al músculo' sino que 'Van a inervar a la piel y cuero cabelludo de la región, a región mastoidea, parietal, frontal y maseterina'. Evalúa territorios sensitivos vs. motores y diagnóstico diferencial anatómico."
  },
  {
    "id": "UBA_V3_025",
    "pregunta": "Al realizar un balance de las colaterales del nervio mandibular ($V_3$) originadas estrictamente en la fosa cigomática, se identifica un tronco común destinado a tres estructuras musculares distintas. ¿Cuál es este tronco según la lista oficial de la cátedra?",
    "opciones": [
      "El nervio o tronco común para el pterigoideo interno, periestafilino externo y músculo del martillo.",
      "El nervio témporo-maseterino encargado del masetero y los temporales profundos.",
      "El nervio temporobucal encargado del pterigoideo externo y del buccinador.",
      "El nervio milohioideo encargado del milohioideo, digástrico y hiogloso."
    ],
    "correcta": 0,
    "pista": "Es una rama colateral profunda que inerva al pterigoideo medial y a dos pequeños músculos tensores (del velo del paladar y de la membrana timpánica).",
    "explicacion": "El texto enumera explícitamente entre las colaterales del nervio mandibular dadas en la fosa cigomática al 'Nervio o tronco común para el pterigoideo interno, periestafilino externo y músculo del martillo'. Evalúa clasificación y distribución de ramos colaterales."
  },
  
  {
    "id": "UBA_V3_ADD_001",
    "pregunta": "De acuerdo con las primeras líneas del texto analizado, ¿cómo se establece la génesis anatómica del denominado plexo dentario superior?",
    "opciones": [
      "Por la anastomosis recíproca entre los nervios dentarios posteriores, medios y anteriores.",
      "A través del bucle anastomótico entre el nervio suborbitario y el nervio esfenopalatino.",
      "Por la convergencia exclusiva de los ramos terminales del nervio dentario inferior dentro del canal maxilar.",
      "Mediante los filetes terminales del nervio recurrente meníngeo al unirse con el nervio palatino anterior."
    ],
    "correcta": 0,
    "pista": "Revise el inicio del fragmento de la página 58, donde se describe la red nerviosa que inerva las piezas del maxilar superior.",
    "explicacion": "El texto afirma textualmente al inicio de la página 58 que 'Los nervios dentarios posteriores, medios y anteriores se anastomosan entre sí conformando al plexo dentario'. Evalúa definición y relaciones de redes nerviosas alveolares superiores."
  },
  {
    "id": "UBA_V3_ADD_002",
    "pregunta": "Al analizar las paredes y estructuras que delimitan el Porus crotafítico buccinatorio de Hyrtl, ¿cuál de los siguientes elementos NO forma parte de la constitución de este ojal osteofibroso de la base del cráneo?",
    "opciones": [
      "El ligamento esfenomandibular en su porción media.",
      "El ligamento innominado de Hyrtl.",
      "La espina de Civinini.",
      "La espina accesoria del esfenoides."
    ],
    "correcta": 0,
    "pista": "El porus está delimitado por un ligamento específico y dos eminencias óseas de la base del cráneo; busque el ligamento intrínseco que no se describe en esa tríada.",
    "explicacion": "Según el texto de la página 60, el Porus crotafítico buccinatorio de Hyrtl está formado exclusivamente por el ligamento innominado de Hyrtl, la espina de Civinini y la espina accesoria del esfenoides. El ligamento esfenomandibular no pertenece a dicha estructura. Evalúa relaciones estructurales y límites óseos."
  },
  {
    "id": "UBA_V3_ADD_003",
    "pregunta": "Si un espécimen anatómico presenta una osificación completa del ligamento innominado de Hyrtl, ¿cuál de los siguientes trayectos nerviosos se vería directamente comprometido en su punto de emergencia exocraneal inicial?",
    "opciones": [
      "El trayecto inicial del nervio temporobucal.",
      "El origen del nervio del milohioideo.",
      "El reingreso del nervio recurrente meníngeo al cráneo.",
      "La división terminal del nervio maseterino."
    ],
    "correcta": 0,
    "pista": "Piense en el grupo de tres nervios que comparten su primer tramo del recorrido atravesando el Porus de Hyrtl.",
    "explicacion": "El texto explica que los nervios temporobucal, temporal profundo medio y témporo-maseterino comparten su primera parte del recorrido atravesando el Porus crotafítico buccinatorio de Hyrtl. Por ende, su osificación afectaría al temporobucal en su origen exocraneal. Evalúa correlación anatómica y trayecto."
  },
  {
    "id": "UBA_V3_ADD_004",
    "pregunta": "Durante el trayecto exocraneal profundo de los ramos del nervio mandibular ($V_3$), se describen espacios delimitados por el músculo pterigoideo externo. ¿Qué estructura pasa específicamente por el hiato interpterigoideo y qué relación muscular lo define?",
    "opciones": [
      "El nervio temporobucal; el hiato se localiza entre los dos fascículos del músculo pterigoideo externo.",
      "El nervio temporal profundo medio; el hiato se ubica entre el pterigoideo externo y la base del cráneo.",
      "El nervio témporo-maseterino; el hiato se dispone por fuera de la cara externa del fascículo superior.",
      "El nervio recurrente meníngeo; el hiato se encuentra entre el pterigoideo externo y el pterigoideo interno."
    ],
    "correcta": 0,
    "pista": "El prefijo 'inter' hace referencia a un espacio situado en medio de las porciones o fascículos de un mismo cuerpo muscular.",
    "explicacion": "El texto detalla que el nervio temporobucal, tras pasar el porus, se dirige al 'hiato interpterigoideo -> espacio entre los dos fascículos del pterigoideo externo'. Evalúa relaciones anatómicas cruzadas de alta prioridad."
  },
  {
    "id": "UBA_V3_ADD_005",
    "pregunta": "Con respecto a la inervación motora del músculo temporal, el texto describe el trayecto ascendente del nervio temporal profundo medio. ¿Qué relación guarda este nervio con el músculo pterigoideo externo para alcanzar la fosa temporal?",
    "opciones": [
      "Pasa por el hiato pterigocraneal y recorre el borde superior del pterigoideo externo.",
      "Atraviesa directamente el cuerpo del fascículo inferior del pterigoideo externo.",
      "Transcurre inferior al borde inferior del pterigoideo externo, cruzando la arteria alveolar.",
      "Se adosa a la cara interna de la mandíbula por debajo del fascículo superior."
    ],
    "correcta": 0,
    "pista": "Este ramo utiliza el espacio situado entre el borde superior del músculo y las estructuras óseas craneales superiores.",
    "explicacion": "El texto indica que el nervio temporal profundo medio 'pasa por el hiato pterigocraneal -> espacio entre el pterigoideo externo y la base del cráneo, y recorre el borde superior del pterigoideo externo'. Evalúa trayectos y relaciones intermusculares."
  },
  {
    "id": "UBA_V3_ADD_006",
    "pregunta": "Analizando la organización topográfica secuencial en la base del cráneo, ¿cómo se distribuyen de adelante hacia atrás los tres nervios temporales profundos al abandonar sus reparos iniciales?",
    "opciones": [
      "Nervio temporobucal, Nervio temporal profundo medio y Nervio témporo-maseterino.",
      "Nervio témporo-maseterino, Nervio temporal profundo medio y Nervio temporobucal.",
      "Nervio temporal profundo medio, Nervio temporobucal y Nervio témporo-maseterino.",
      "Nervio temporobucal, Nervio témporo-maseterino y Nervio temporal profundo medio."
    ],
    "correcta": 0,
    "pista": "La secuencia respeta el orden textual exacto en el que el autor enumera los componentes que se dirigen a las regiones anterior, media y posterior de la fosa temporal.",
    "explicacion": "El texto dictamina de forma explícita: 'Compuesto por 3 nervios diferentes, descriptos según se originan: de adelante hacia atrás: Nervio temporobucal - Nervio temporal profundo medio - Nervio temporomaseterino'. Evalúa clasificaciones y orientaciones topográficas espaciales."
  },
  {
    "id": "UBA_V3_ADD_007",
    "pregunta": "El nervio bucal, ramo terminal descendente del nervio temporobucal, posee conexiones funcionales de suma relevancia estomatológica. ¿Qué tipo de fibras recibe a través de su anastomosis con el ganglio ótico y cuál es su destino final?",
    "opciones": [
      "Fibras simpáticas y parasimpáticas destinadas a la zona del músculo buccinador.",
      "Fibras motoras somáticas destinadas al fascículo anterior del músculo temporal.",
      "Fibras propioceptivas puras destinadas a la cápsula de la articulación temporomandibular.",
      "Fibras sensitivas generales destinadas a la mucosa de las amígdalas palatinas."
    ],
    "correcta": 0,
    "pista": "Revise el desglose del nervio bucal, prestando atención a los componentes autonómicos incorporados tras salir del ganglio anexo a V3.",
    "explicacion": "El texto explicita bajo el apartado del nervio bucal: 'Anastomosis con el ganglio ótico (por medio de esta anastomosis le llegan fibras simpáticas y parasimpáticas a la zona del buccinador)'. Evalúa conexiones autónomas y territorios de distribución."
  },
  {
    "id": "UBA_V3_ADD_008",
    "pregunta": "Un preparado anatómico de fosa cigomática muestra un ramo nervioso que perfora el cuerpo del músculo pterigoideo externo a través de un hiatus para luego dividirse en la cara externa de este. ¿De qué estructura se trata según la bibliografía oficial de la cátedra?",
    "opciones": [
      "Del nervio témporo-maseterino.",
      "Del nervio temporal profundo medio.",
      "Del nervio temporobucal.",
      "Del nervio recurrente meníngeo."
    ],
    "correcta": 0,
    "pista": "Es el único nervio del grupo de los temporales que transfixia el vientre muscular del pterigoideo externo a través de un ojal o hiatus para llegar a su cara lateral.",
    "explicacion": "La página 60 concluye categóricamente que el nervio témporo-maseterino 'va a atravesar al pterigoideo externo a través del hiatus, sale por su cara externa, y se va a separar en sus dos ramas terminales'. Evalúa relaciones estructurales y trayecto."
  },
  {
    "id": "UBA_V3_ADD_009",
    "pregunta": "Al disecar minuciosamente la fosa temporal por debajo del plano muscular, se constata una serie de comunicaciones nerviosas. ¿Qué anastomosis conecta de forma directa al ramo temporal que viaja por el hiato pterigocraneal con el ramo terminal del nervio temporobucal?",
    "opciones": [
      "La anastomosis del nervio temporal profundo medio hacia adelante con el nervio temporal profundo anterior.",
      "La anastomosis del nervio temporal profundo medio hacia atrás con el nervio temporal profundo posterior.",
      "La comunicación superficial entre el nervio bucal y el nervio maseterino.",
      "El arco comunicante entre el nervio recurrente meníngeo y el nervio temporal profundo posterior."
    ],
    "correcta": 0,
    "pista": "Busque la comunicación anterior del nervio intermedio, recordando que el temporal profundo anterior es rama terminal del temporobucal.",
    "explicacion": "El texto detalla que el nervio temporal profundo medio posee dos anastomosis: 'Hacia adelante: se anastomosa con el N. temporal profundo anterior (rama del temporobucal)' y 'Hacia atrás: se anastomosa con el N. temporal profundo posterior'. Evalúa relaciones cruzadas y conexiones."
  },
  {
    "id": "UBA_V3_ADD_010",
    "pregunta": "El nervio recurrente meníngeo se caracteriza por un trayecto retrógrado muy específico. ¿Qué estructura vascular acompaña fielmente en su punto de entrada endocraneal a nivel de la fosa cigomática?",
    "opciones": [
      "La arteria meníngea media.",
      "La variedad profunda de la arteria maxilar interna.",
      "La arteria dentaria inferior en su origen.",
      "La arteria temporal profunda posterior."
    ],
    "correcta": 0,
    "pista": "Acomaña a la arteria nutricia principal de la duramadre que ingresa por el mismo foramen óseo menor de la base del cráneo.",
    "explicacion": "El texto especifica que el nervio recurrente meníngeo 'se introduce en el cráneo a través del agujero redondo menor junto a la arteria meníngea media'. Evalúa relaciones neurovasculares estrictas."
  },
  {
    "id": "UBA_V3_ADD_011",
    "pregunta": "Topográficamente, ¿cuál es la relación espacial del nervio bucal con respecto a los fascículos del músculo pterigoideo externo inmediatamente después de que el tronco del nervio temporobucal se bifurca?",
    "opciones": [
      "Pasa por la cara superficial del fascículo inferior del pterigoideo externo.",
      "Corre profundo al fascículo superior, adosado a la base del cráneo.",
      "Perfora transversalmente el tendón del fascículo inferior en dirección a la rama mandibular.",
      "Se ubica medial al fascículo superior en el interior del hiato pterigocraneal."
    ],
    "correcta": 0,
    "pista": "Este nervio desciende hacia la mejilla, cruzando por delante de la porción más baja y externa del músculo pterigoideo externo.",
    "explicacion": "El texto indica que el nervio bucal 'pasa por la cara superficial del fascículo inferior del pterigoideo externo'. Evalúa trayecto y relaciones musculares precisas."
  },
  {
    "id": "UBA_V3_ADD_012",
    "pregunta": "Considere las ramas terminales del nervio témporo-maseterino tras su emergencia por la cara externa del pterigoideo externo. ¿Cuáles son estas ramas y qué carácter funcional poseen respectivamente?",
    "opciones": [
      "El nervio temporal profundo posterior (motor para el temporal) y el nervio maseterino (motor para el masetero).",
      "El nervio temporal profundo anterior (motor) y el nervio bucal (sensitivo).",
      "El nervio maseterino (motor) y el nervio bucal (sensitivo/autónomo).",
      "El nervio temporal profundo medio (motor) y el nervio milohioideo (mixto)."
    ],
    "correcta": 0,
    "pista": "Son dos ramos eferentes puros destinados a la porción más posterior del temporal y al músculo potente de la cara externa de la rama mandibular.",
    "explicacion": "El texto divide al nervio témporo-maseterino en dos terminales: el 'N. temporal profundo posterior (ascendente, motor, para el músculo temporal)' y el 'Nervio maseterino (descendente, motor, para el músculo masetero)'. Evalúa ramificación y funcionalidad de ramos terminales."
  },
  {
    "id": "UBA_V3_ADD_013",
    "pregunta": "Si un estudiante de odontología diseca el borde superior del músculo pterigoideo externo en el hiato pterigocraneal, ¿qué estructura nerviosa encontrará discurriendo de forma inmediata por dicho límite muscular?",
    "opciones": [
      "El nervio temporal profundo medio.",
      "El nervio temporal profundo anterior.",
      "El nervio bucal en su ramo colateral.",
      "El tronco del nervio recurrente meníngeo."
    ],
    "correcta": 0,
    "pista": "Es el nervio temporal intermedio que transcurre entre el porus de Hyrtl y el plano óseo profundo de la fosa temporal.",
    "explicacion": "El texto menciona explícitamente que el nervio temporal profundo medio, al pasar por el hiato pterigocraneal, 'recorre el borde superior del pterigoideo externo'. Evalúa relaciones cruzadas y límites topográficos."
  },
  {
    "id": "UBA_V3_ADD_014",
    "pregunta": "De acuerdo con el orden y sistematización de los ramos colaterales exocraneales de la fosa cigomática expuestos por la cátedra, ¿cuál es el destino somatotópico y la función del nervio recurrente meníngeo?",
    "opciones": [
      "Transporta fibras sensitivas puras para las meninges de la región del agujero redondo menor.",
      "Lleva inervación motora refleja para los músculos tensores del tímpano.",
      "Proporciona inervación vasomotora simpática para la arteria maxilar interna en su totalidad.",
      "Recoge la sensibilidad propioceptiva profunda de la articulación temporomandibular."
    ],
    "correcta": 0,
    "pista": "Su nombre indica su carácter recurrente hacia el endocráneo y su destino protector sensitivo de las envolturas encefálicas.",
    "explicacion": "El texto define de forma literal que el nervio recurrente meníngeo 'es un nervio que transporta fibras sensitivas para las meninges de la región del orificio (agujero redondo menor)'. Evalúa correlaciones funcionales y territorios sensitivos."
  }
],
"temas diferencidos parte 4": [
  {
    "id": "UBA_V4_001",
    "pregunta": "¿Cuál es la función, tipo de fibras y destino específico del nervio temporal profundo anterior según el texto?",
    "opciones": [
      "Posee fibras motoras, se dirige por la cara superficial del pterigoideo externo, pasa entre el temporal y el plano óseo e inerva al músculo temporal.",
      "Posee fibras sensitivas, se dirige por la cara profunda del pterigoideo externo e inerva la mucosa de la región temporal.",
      "Es un ramo terminal mixto que atraviesa el músculo temporal para inervar la piel de la región de la sien.",
      "Posee fibras motoras, pasa por la cara interna del pterigoideo interno e inerva la articulación temporomandibular."
    ],
    "correcta": 0,
    "pista": "Siga el trayecto descrito en la primera sección de la ventana de trabajo respecto a su relación con el pterigoideo externo.",
    "explicación": "El concepto evalúa el nervio temporal profundo anterior (rama terminal del N. témporo-bucal). El texto afirma textualmente que posee fibras motoras, va por la cara superficial del pterigoideo externo, se introduce en el espacio entre el temporal y el plano óseo e inerva al músculo temporal. Los distractores proponen falsas variantes de fibras o relaciones no descritas."
  },
  {
    "id": "UBA_V4_002",
    "pregunta": "Con respecto al nervio bucal, ¿cuál es su origen descripto, tipo de fibras y trayecto inicial en relación al músculo pterigoideo externo?",
    "opciones": [
      "Es terminal del nervio témporo-bucal, posee fibras sensitivas y se dirige hacia abajo y adelante atravesando las dos porciones del pterigoideo externo o por un hiato.",
      "Es una rama colateral motora que pasa por encima del pterigoideo externo sin atravesarlo.",
      "Es una rama terminal del nervio dentario inferior que se distribuye exclusivamente por la cara interna del pterigoideo externo.",
      "Es un nervio vegetativo puro que acompaña a la arteria bucal a través del hiato del pterigoideo interno."
    ],
    "correcta": 0,
    "pista": "Identifique el tronco de origen del nervio bucal y la particularidad geométrica de su paso por el músculo pterigoideo externo.",
    "explicación": "El concepto evalúa el origen y trayecto del nervio bucal. Textualmente es terminal del témporo-bucal, posee fibras sensitivas, va hacia abajo y adelante y atraviesa las dos porciones del pterigoideo externo (o por un hiato). Los distractores inventan orígenes falsos o componentes motores/vegetativos puros no descritos en este fragmento."
  },
  {
    "id": "UBA_V4_003",
    "pregunta": "Una vez que el nervio bucal sale de la cara externa del músculo pterigoideo externo, ¿cuáles son sus dos ramos terminales descritos?",
    "opciones": [
      "Ramos superficiales (cutáneos) y ramos profundos (mucosos).",
      "Nervio milohioideo y nervio dentario anterior.",
      "Nervio temporal profundo anterior y nervio maseterino.",
      "Ramos óseos superiores y ramos gingivales palatinos."
    ],
    "correcta": 0,
    "pista": "Observe la división final del nervio bucal tras superar el hiato o cara externa del músculo.",
    "explicación": "El texto especifica que al salir por la cara externa del pterigoideo externo, el nervio bucal se separa en sus dos ramos terminales: ramos superficiales (cutáneos) y ramos profundos (mucosos). Los distractores emplean otras ramas del trigémino ausentes en la descripción de este nervio bucal."
  },
  {
    "id": "UBA_V4_004",
    "pregunta": "¿Qué estructuras específicas reciben inervación de los ramos superficiales (cutáneos) del nervio bucal?",
    "opciones": [
      "La piel de la mejilla y la piel de la comisura de los labios.",
      "La mucosa del carrillo y las encías de los molares inferiores.",
      "El músculo buccinador por su cara superficial exclusivamente.",
      "La piel de la región temporal y el ala de la nariz."
    ],
    "correcta": 0,
    "pista": "Busque las dos estructuras cutáneas precisas que reciben filetes de la rama superficial.",
    "explicación": "El texto señala que los ramos superficiales (cutáneos) dan inervación a la piel de la mejilla y a la piel de la comisura de los labios. Los distractores mencionan la mucosa (que pertenece a los profundos) o zonas fuera de la ventana de texto."
  },
  {
    "id": "UBA_V4_005",
    "pregunta": "¿Cuál es el trayecto y destino final de los ramos profundos (mucosos) del nervio bucal tras perforar el músculo buccinador?",
    "opciones": [
      "Perforan el buccinador sin inervarlo y terminan en la mucosa del carrillo y las encías de los molares inferiores.",
      "Inervan motoramente al buccinador y luego terminan en la mucosa del suelo de la boca.",
      "Se anastomosan con el nervio lingual dentro del espesor del músculo buccinador.",
      "Se dirigen hacia arriba para terminar en la mucosa del paladar duro."
    ],
    "correcta": 0,
    "pista": "Recuerde que el nervio bucal es sensitivo; determine si el buccinador recibe inervación motora de este nervio o si solo es perforado.",
    "explicación": "El texto establece que los ramos profundos perforan al músculo buccinador (sin inervarlo motoramente) y dan inervación a la mucosa del carrillo y a las encías de los molares inferiores. Los distractores adjudican erróneamente inervación motora al buccinador o destinos mucosos incorrectos."
  },
  {
    "id": "UBA_V4_006",
    "pregunta": "Según el texto de la ventana de trabajo, ¿cuál es el origen y el trayecto inicial del nervio témporo-profundo medio?",
    "opciones": [
      "Nace directamente del nervio maxilar inferior, se dirige hacia afuera por arriba del pterigoideo externo y se refleja hacia arriba para ingresar al músculo temporal.",
      "Es una rama del nervio témporo-bucal que camina por la cara interna del pterigoideo interno.",
      "Se origina del nervio dentario inferior y asciende perforando el pterigoideo externo.",
      "Nace del plexo dentario superior y cruza la fosa pterigomaxilar de forma oblicua."
    ],
    "correcta": 0,
    "pista": "Revise el nacimiento del nervio témporo-profundo medio directamente desde el tronco principal antes de relacionarse con el borde superior del músculo.",
    "explicación": "El texto explicita que el nervio témporo-profundo medio nace directamente del nervio maxilar inferior, se dirige hacia afuera pasando por arriba del pterigoideo externo y luego se refleja hacia arriba para introducirse en el músculo temporal. Los distractores proponen orígenes falsos (témporo-bucal, dentario inferior o plexo superior)."
  },
  {
    "id": "UBA_V4_007",
    "pregunta": "¿Qué tipo de fibras posee el nervio témporo-profundo medio y cuál es su territorio de distribución exclusivo?",
    "opciones": [
      "Fibras motoras destinadas a la inervación del músculo temporal.",
      "Fibras mixtas (sensitivas para la piel y motoras para el temporal).",
      "Fibras parasimpáticas secretoras para las glándulas de la región temporal.",
      "Fibras sensitivas para el periostio de la fosa esfenoidal."
    ],
    "correcta": 0,
    "pista": "Observe la función indicada en el texto al describir su inserción en el músculo temporal.",
    "explicación": "La ventana de trabajo adjudica al nervio témporo-profundo medio la presencia de 'fibras motoras' inervando al 'músculo temporal'. No menciona componentes mixtos ni autonómicos para este nervio."
  },
  {
    "id": "UBA_V4_008",
    "pregunta": "¿Cómo está constituido el tronco común de los nervios témporo-maseterino y qué ramos terminales emite al pasar por el borde superior del pterigoideo externo?",
    "opciones": [
      "Nace del maxilar inferior, va hacia afuera por arriba del pterigoideo externo y da el nervio temporal profundo posterior y el nervio maseterino.",
      "Nace del nervio bucal, pasa por debajo del pterigoideo externo y da ramos para el masetero y el pterigoideo interno.",
      "Es una subdivisión del nervio lingual que rodea el cuello del cóndilo mandibular.",
      "Es un tronco motor puro que nace del ganglio ótico y termina exclusivamente en la piel temporal."
    ],
    "correcta": 0,
    "pista": "Preste atención a las dos ramas específicas que se desprenden de este tronco común y su relación con el borde superior muscular.",
    "explicación": "El texto indica que el tronco témporo-maseterino nace del maxilar inferior, va hacia afuera por arriba del pterigoideo externo y se divide en sus dos ramos terminales: nervio temporal profundo posterior y nervio maseterino. Los distractores alteran los nombres de los ramos o su origen."
  },
  {
    "id": "UBA_V4_009",
    "pregunta": "¿Cuál es el trayecto y destino específico del nervio temporal profundo posterior tras separarse del tronco témporo-maseterino?",
    "opciones": [
      "Se refleja hacia arriba para introducirse en la cara profunda del músculo temporal, al cual inerva (fibras motoras).",
      "Se dirige horizontalmente hacia atrás para inervar la articulación temporomandibular y el conducto auditivo.",
      "Desciende por el borde anterior de la rama de la mandíbula para inervar el tercer molar.",
      "Cruza el agujero oval en sentido retrógrado para dar fibras duramadreanas posterior."
    ],
    "correcta": 0,
    "pista": "Busque la dirección del reflejo y la cara muscular por donde ingresa según el texto.",
    "explicación": "El fragmento especifica que el nervio temporal profundo posterior 'se refleja hacia arriba para introducirse en la cara profunda del músculo temporal al cual inerva (fibras motoras)'. Los distractores inventan trayectos hacia la ATM, dientes o endocráneo."
  },
  {
    "id": "UBA_V4_010",
    "pregunta": "¿Qué trayecto realiza el nervio maseterino y a través de qué estructura ósea pasa para llegar a su músculo efector?",
    "opciones": [
      "Va hacia afuera y abajo, pasa por la escotadura sigmoidea y llega a la cara profunda del músculo masetero.",
      "Va hacia adentro atravesando el ojal retrocondíleo de Juvara para alcanzar el cuello de la mandíbula.",
      "Desciende verticalmente por el conducto dentario posterior hasta la inserción inferior del masetero.",
      "Atraviesa el cuerpo del hueso malar para abordar al masetero por su cara superficial."
    ],
    "correcta": 0,
    "pista": "Identifique el accidente óseo mandibular característico situado entre el cóndilo y la apófisis coronoides mencionado en el texto.",
    "explicación": "El texto señala textualmente que el nervio maseterino 'va hacia afuera y abajo, pasa por la escotadura sigmoidea y de ahí llega a la cara profunda del músculo masetero al cual inerva (motor)'. Los distractores proponen otros reparos óseos o espacios vasculonerviosos."
  },
  {
    "id": "UBA_V4_011",
    "pregunta": "Con respecto a las colaterales del nervio maseterino, ¿qué estructura articular recibe filetes nerviosos según la ventana de trabajo?",
    "opciones": [
      "La articulación temporomandibular (ATM).",
      "La articulación alveolodentaria de los molares inferiores.",
      "La sincondrosis esfenooccipital.",
      "La sutura temporomalar."
    ],
    "correcta": 0,
    "pista": "Busque la única estructura articular explícitamente listada como colateral del nervio maseterino en el texto.",
    "explicación": "El texto indica de forma explícita bajo las colaterales del nervio maseterino: 'Filetes para la ATM'. Ninguna otra articulación es nombrada en esa sección."
  },
  {
    "id": "UBA_V4_012",
    "pregunta": "¿Cuál es la constitución anatómica del 'bucle' u 'ojal' del nervio auriculotemporal y qué estructura vascular lo atraviesa?",
    "opciones": [
      "Nace por dos raíces que abrazan a la arteria meníngea media y luego se unen para formar el nervio.",
      "Nace de una raíz única que es perforada por la vena maxilar interna a nivel del cuello del cóndilo.",
      "Está constituido por la anastomosis del nervio lingual y el nervio dentario inferior alrededor de la arteria carótida externa.",
      "Es un bucle fibroso dependiente del ligamento esfenomandibular que encierra a la arteria temporal superficial."
    ],
    "correcta": 0,
    "pista": "Identifique el vaso arterial específico meningeo implicado en el desdoblamiento del origen de este nervio.",
    "explicación": "El texto describe que el nervio auriculotemporal 'nace por dos raíces que abrazan a la arteria meníngea media y luego se unen para formar el nervio'. Las demás opciones alteran el tipo de vaso, el número de raíces o las estructuras nerviosas implicadas."
  },
  {
    "id": "UBA_V4_013",
    "pregunta": "¿Qué trayecto y relaciones topográficas adopta el nervio auriculotemporal una vez constituido su tronco en la región retromandibular?",
    "opciones": [
      "Se dirige hacia atrás, pasa por el ojal retrocondíleo de Juvara por arriba de los vasos maxilares internos, atraviesa el espacio retromandibular y asciende por delante del conducto auditivo externo.",
      "Se dirige hacia adelante cruzando la cara externa del pterigoideo interno y penetra en la glándula sublingual por debajo del conducto de Wharton.",
      "Asciende verticalmente atravesando el agujero redondo menor para terminar en las meninges de la fosa media.",
      "Pasa por dentro del ligamento esfenomandibular y desciende adosado a la línea milohioidea."
    ],
    "correcta": 0,
    "pista": "Siga la secuencia de reparos: ojal retrocondíleo, relación con vasos maxilares internos, espacio glandular o regional y conducto auditivo externo.",
    "explicación": "El texto indica literalmente que el nervio auriculotemporal 'se dirige hacia atrás, pasa por el ojal retrocondíleo de Juvara (por arriba de los vasos maxilares internos), atraviesa el espacio retromandibular, y asciende por delante del conducto auditivo externo...'. Los distractores cambian por completo la dirección o las relaciones."
  },
  {
    "id": "UBA_V4_014",
    "pregunta": "¿Con qué arteria y en qué región superficial se relaciona el nervio auriculotemporal en su trayecto ascendente terminal?",
    "opciones": [
      "Acompaña a la arteria temporal superficial en la región temporal.",
      "Acompaña a la arteria facial en la región geniana.",
      "Se sitúa por detrás de la arteria auricular posterior en la región mastoidea.",
      "Camina junto a la arteria meníngea media en la fosa temporal."
    ],
    "correcta": 0,
    "pista": "Mire el tramo final del trayecto del nervio auriculotemporal antes de emitir sus ramos terminales.",
    "explicación": "La ventana de trabajo menciona que en su porción ascendente el nervio auriculotemporal 'acompaña a la arteria temporal superficial en la región temporal'. Los distractores mencionan arterias o regiones ajenas a este pasaje."
  },
  {
    "id": "UBA_V4_015",
    "pregunta": "Según la ventana de trabajo, ¿cuáles son las colaterales del nervio auriculotemporal?",
    "opciones": [
      "Anastomosis con el nervio facial, ramos parotídeos, ramos para el conducto auditivo externo y filetes para la ATM.",
      "Ramo milohioideo, ramos dentarios anteriores y nervio timpánico.",
      "Nervio de la cuerda del tímpano y ramos sublinguales.",
      "Ramos comunicantes para el nervio óptico y ramos occipitales."
    ],
    "correcta": 0,
    "pista": "Busque la lista explícita de colaterales asociadas a la parótida, el conducto auditivo, la articulación mandibular y el VII par.",
    "explicación": "El texto enumera textualmente como colaterales del auriculotemporal: 'Anastomosis con el N. facial, Ramos parotídeos, Ramos para el conducto auditivo externo, Filetes para la ATM'. Los distractores mezclan ramas del nervio dentario inferior o del facial que no corresponden a esta lista."
  },
  {
    "id": "UBA_V4_016",
    "pregunta": "¿Qué tipo de información funcional conducen los ramos parotídeos del nervio auriculotemporal según las especificaciones del texto?",
    "opciones": [
      "Fibras vegetativas para la secreción de la glándula parótida, procedentes del ganglio ótico.",
      "Fibras motoras puras para las células mioepiteliales del conducto de Stenon.",
      "Fibras sensitivas especiales gustativas para el tercio posterior glandular.",
      "Fibras simpáticas vasoconstrictoras directas del plexo carotídeo interno sin pasar por ningún ganglio."
    ],
    "correcta": 0,
    "pista": "Considere la función glandular e identifique el ganglio de origen de la información especificado entre paréntesis.",
    "explicación": "El texto detalla textualmente: 'Ramos parotídeos (fibras vegetativas para la secreción de la glándula, vienen del ganglio ótico)'. Las demás opciones alteran la naturaleza de las fibras o el ganglio implicado."
  },
  {
    "id": "UBA_V4_017",
    "pregunta": "¿Qué estructuras específicas reciben inervación sensitiva a través de los ramos terminales del nervio auriculotemporal?",
    "opciones": [
      "La piel de la región temporal y el pabellón auricular.",
      "La mucosa del suelo de la boca y la encía lingual de los molares.",
      "El lóbulo de la oreja y la piel de la región mastoidea exclusivamente.",
      "La piel de la mejilla y la comisura labial."
    ],
    "correcta": 0,
    "pista": "Busque el territorio cutáneo terminal asignado a este nervio que justifica su propio nombre.",
    "explicación": "El texto establece que los ramos terminales del nervio auriculotemporal dan 'inervación sensitiva a la piel de la región temporal y pabellón auricular'. Los distractores corresponden al territorio del nervio bucal o a zonas no descritas en el texto."
  },
  {
    "id": "UBA_V4_018",
    "pregunta": "Con respecto al nervio dentario inferior, ¿cuál es su clasificación funcional y su trayectoria inicial en el espacio maxilofaríngeo?",
    "opciones": [
      "Es un nervio mixto, se dirige hacia abajo y adelante, pasando por el espacio maxilofaríngeo por fuera del nervio lingual.",
      "Es un nervio motor puro que desciende medial al ligamento esfenomandibular.",
      "Es un nervio sensitivo puro que corre por dentro del músculo pterigoideo interno en todo su trayecto.",
      "Es un ramo visceral que perfora la duramadre de la fosa craneal posterior."
    ],
    "correcta": 0,
    "pista": "Recuerde su naturaleza funcional mixta y su posición relativa con respecto al nervio lingual en el espacio maxilofaríngeo.",
    "explicación": "El texto describe al nervio dentario inferior como 'Nervio mixto', que 'se dirige hacia abajo y adelante, pasando por el espacio maxilofaríngeo por fuera del N. lingual'. Los distractores niegan su carácter mixto o invierten la relación espacial con el lingual."
  },
  {
    "id": "UBA_V4_019",
    "pregunta": "¿Qué relación anatómica mantiene el nervio dentario inferior con respecto a los vasos dentarios inferiores y al ligamento esfenomandibular antes de ingresar al conducto dentario?",
    "opciones": [
      "Se sitúa por delante de los vasos dentarios inferiores y pasa por dentro del ligamento esfenomandibular.",
      "Se sitúa por detrás de la arteria dentaria inferior y pasa por fuera del ligamento esfenomandibular.",
      "Se aloja en el espesor del ligamento esfenomandibular acompañado por la vena maxilar.",
      "Pasa por debajo del ligamento esfenomandibular, completamente separado de los vasos."
    ],
    "correcta": 0,
    "pista": "Analice minuciosamente la posición del nervio respecto a los vasos homónimos y al ligamento accesorio de la ATM.",
    "explicación": "El texto indica que el nervio dentario inferior 'se coloca por delante de los vasos dentarios inferiores, pasando por dentro del ligamento esfenomandibular...'. Los distractores modifican falsamente estas relaciones espaciales estrictas."
  },
  {
    "id": "UBA_V4_020",
    "pregunta": "¿Qué estructura ósea mandibular marca la entrada del nervio dentario inferior al conducto dentario y qué relación presenta con la espina de Spix?",
    "opciones": [
      "Ingresa por el orificio superior del conducto dentario, pasando por detrás de la espina de Spix.",
      "Ingresa por el agujero mentoniano, pasando por encima de la línea oblicua interna.",
      "Perfora la apófisis coronoides por delante de la espina de Spix.",
      "Ingresa por la fosa submaxilar pasando por debajo de la espina de Spix."
    ],
    "correcta": 0,
    "pista": "Busque el nombre del orificio y la posición relativa (delante/detrás) con respecto a la eminencia ósea piramidal de la cara interna de la rama mandibular.",
    "explicación": "El texto describe que el nervio dentario inferior 'ingresa al conducto dentario por su orificio superior pasando por detrás de la espina de Spix'. Los distractores mencionan otros orificios o relaciones anatómicas falsas."
  },
  {
    "id": "UBA_V4_021",
    "pregunta": "Durante su trayecto intraóseo dentro del conducto dentario inferior, ¿con qué estructuras vasculares se relaciona el nervio y qué ramos emite de manera inmediata?",
    "opciones": [
      "Camina acompañado por los vasos dentarios inferiores y emite el plexo dentario inferior.",
      "Se sitúa por encima de la arteria milohioidea y emite el nervio lingual aberrante.",
      "Se desliga de toda relación vascular y emite ramos perforantes para el músculo buccinador.",
      "Apaña a la arteria temporal profunda media y emite el nervio mentoniano de forma directa y única."
    ],
    "correcta": 0,
    "pista": "Identifique el paquete vasculonervioso intraóseo y la red nerviosa que se forma para las piezas dentarias inferiores según el texto.",
    "explicación": "El texto especifica que en el conducto dentario el nervio 'camina acompañado por los vasos dentarios inferiores' y 'va a emitir el plexo dentario inferior'. Los distractores incorporan arterias o trayectos que no figuran en este tramo del texto."
  },
  {
    "id": "UBA_V4_022",
    "pregunta": "¿Cuáles son los ramos terminales del nervio dentario inferior según la descripción de la ventana de trabajo?",
    "opciones": [
      "Nervio mentoniano y nervio incisivo.",
      "Nervio milohioideo y nervio lingual.",
      "Ramos parotídeos y ramos auriculares.",
      "Nervio bucal y ramos gingivales posteriores."
    ],
    "correcta": 0,
    "pista": "Identifique las dos ramas en las que se divide el nervio dentario inferior al finalizar su trayecto por el conducto principal.",
    "explicación": "El texto señala explícitamente bajo el título de ramos terminales del nervio dentario inferior: 'Nervio mentoniano' y 'Nervio incisivo'. Los distractores mezclan ramas colaterales o pertenecientes a otros troncos nerviosos."
  },
  {
    "id": "UBA_V4_023",
    "pregunta": "¿Qué trayecto realiza el nervio mentoniano (terminal del dentario inferior) y qué territorios reciben su inervación sensitiva?",
    "opciones": [
      "Sale por el agujero mentoniano y da inervación sensitiva a la piel y mucosa del labio inferior y de la eminencia mentoniana.",
      "Continúa por dentro del hueso maxilar inervando los caninos e incisivos inferiores.",
      "Atraviesa el músculo milohioideo para distribuirse por la piel del cuello.",
      "Se dirige hacia atrás rodeando el borde inferior de la mandíbula para inervar la glándula submentoniana."
    ],
    "correcta": 0,
    "pista": "Establezca el orificio de salida y los elementos blandos superficiales (cutáneos y mucosos) del sector anterior e inferior descritos en el texto.",
    "explicación": "El texto dice textualmente que el nervio mentoniano 'sale por el agujero mentoniano, da inervación sensitiva a la piel y mucosa del labio inferior y de la eminencia mentoniana'. El distractor que continúa por dentro del hueso corresponde al nervio incisivo."
  },
  {
    "id": "UBA_V4_024",
    "pregunta": "¿Cuál es el trayecto y territorio de inervación específico del nervio incisivo según el texto?",
    "opciones": [
      "Continúa el trayecto intraóseo del conducto dentario, emitiendo ramos para el canino y los incisivos inferiores junto con sus estructuras paradentarias.",
      "Sale por el agujero mentoniano junto al nervio homónimo para distribuirse por la encía vestibular anterior.",
      "Perfora la cortical interna de la mandíbula para distribuirse por la mucosa del piso de la boca.",
      "Se dirige hacia arriba cruzando la línea media para anastomosarse con el nervio nasopalatino."
    ],
    "correcta": 0,
    "pista": "Determine si este ramo terminal es intraóseo o extraóseo y a qué piezas dentarias anteriores se distribuye.",
    "explicación": "El texto describe al nervio incisivo indicando que 'continúa el trayecto del conducto (intraóseo) dando ramos para el canino y los incisivos (y estructuras paradentarias)'. Los distractores sugieren incorrectamente una salida al exterior o trayectos mucosos cruzados."
  },
  {
    "id": "UBA_V4_025",
    "pregunta": "¿Qué anastomosis presenta el nervio dentario inferior que le permite recibir fibras simpáticas y parasimpáticas, y con qué nervio comparte fibras de forma colateral?",
    "opciones": [
      "Se anastomosa con el nervio auriculotemporal (recibiendo fibras simpáticas y parasimpáticas) y se anastomosa con el nervio lingual (compartiendo fibras).",
      "Se anastomosa con el nervio facial a través de la cuerda del tímpano y con el nervio bucal a nivel del buccinador.",
      "Recibe un ramo del ganglio ótico directamente y se anastomosa con el nervio temporal profundo medio.",
      "Se une al nervio maseterino en la escotadura sigmoidea y al nervio milohioideo en el espacio sublingual."
    ],
    "correcta": 0,
    "pista": "Revise las primeras dos líneas del apartado de 'Colaterales' del nervio dentario inferior al final de la página 63.",
    "explicación": "El texto señala textualmente en las colaterales del dentario inferior: 'Anastomosis con el nervio auriculotemporal (por medio de ésta le llegan las fibras simpáticas y parasimpáticas)' y 'Anastomosis con el nervio lingual (comparten fibras)'. Los distractores inventan conexiones con otros nervios no declaradas en la ventana de trabajo."
  },
  {
    "id": "UBA_V4_026",
    "pregunta": "¿Cuál es la función, tipo de fibras y destino del ramo o nervio milohioideo desprendido del nervio dentario inferior?",
    "opciones": [
      "Posee fibras motoras destinadas a la inervación del músculo milohioideo y del vientre anterior del digástrico.",
      "Posee fibras sensitivas puras para la mucosa del surco alveololingual.",
      "Es un nervio vegetativo que estimula la secreción de la glándula submaxilar.",
      "Inerva al músculo pterigoideo interno y al vientre posterior del digástrico."
    ],
    "correcta": 0,
    "pista": "Identifique los dos componentes musculares específicos que reciben inervación motora de esta colateral según el texto de la página 63.",
    "explicación": "La ventana de trabajo describe al 'Ramo/ nervio milohioideo' detallando: 'Posee fibras motoras para el músculo milohioideo y el vientre anterior del digástrico'. Las demás opciones alteran la función o los músculos inervados (como el vientre posterior, inervado por el VII par)."
  },
  {
    "id": "UBA_V4_027",
    "pregunta": "¿Qué estructuras específicas reciben inervación de la última colateral mencionada del nervio dentario inferior en la página 63?",
    "opciones": [
      "Molares y premolares (ramos dentarios, óseos y gingivales).",
      "Incisivos y caninos superiores únicamente.",
      "La mucosa del paladar blando y la amígdala palatina.",
      "El periostio de la rama ascendente y la articulación temporomandibular."
    ],
    "correcta": 0,
    "pista": "Mire el último renglón del texto proporcionado, que detalla las estructuras diana para molares y premolares.",
    "explicación": "El texto menciona textualmente al final de la lista de colaterales: 'Ramos dentarios, óseos y gingivales para molares y premolares'. Los distractores proponen sectores anteriores o superiores totalmente incorrectos según la ventana analizada."
  },
  
  {
    "id": "UBA_V4_028",
    "pregunta": "¿Cuál es la clasificación funcional del nervio temporal profundo anterior y qué relación topográfica inicial presenta con el músculo pterigoideo externo?",
    "opciones": [
      "Es un nervio motor que discurre por la cara superficial del pterigoideo externo.",
      "Es un nervio sensitivo que pasa por la cara profunda del pterigoideo externo.",
      "Es un nervio mixto que perfora el tendón del pterigoideo externo.",
      "Es un nervio vegetativo que rodea el borde inferior del pterigoideo externo."
    ],
    "correcta": 0,
    "pista": "Revise las dos primeras líneas de la página 61 correspondientes a este ramo terminal del nervio témporo-bucal.",
    "explicacion": "El concepto evalúa la caracterización básica del nervio temporal profundo anterior. El texto afirma textualmente que 'Posee fibras motoras' y que 'Se dirige hacia arriba, por la cara superficial del pterigoideo externo'. Los distractores adjudican naturalezas funcionales o relaciones espaciales incorrectas según el texto fuente."
  },
  {
    "id": "UBA_V4_029",
    "pregunta": "Con respecto al nervio bucal, ¿cuál es su clasificación funcional básica y qué estructuras musculares u orificios atraviesa de manera general?",
    "opciones": [
      "Posee fibras sensitivas y atraviesa las dos porciones del pterigoideo externo o un hiato entre ellas.",
      "Posee fibras motoras y atraviesa el cuerpo del músculo temporal en su porción anterior.",
      "Es un ramo vegetativo que atraviesa el ojal retrocondíleo de Juvara.",
      "Es un nervio mixto que pasa por el orificio superior del conducto dentario."
    ],
    "correcta": 0,
    "pista": "Focalice en el componente funcional y en la particularidad del trayecto del nervio bucal al nivel de la fosa cigomática.",
    "explicacion": "El concepto evalúa el nervio bucal de forma intermedia. Según el texto, posee fibras sensitivas y se dirige hacia abajo y adelante atravesando las dos porciones del pterigoideo externo (o por un hiato). Los distractores confunden el tipo de fibras o le asignan reparos de otros nervios (como el auriculotemporal o el dentario)."
  }
],
"temas diferencidos parte 5": [
  {
    "id": "UBA_V4_001",
    "pregunta": "¿Qué ramas del nervio maxilar superior (V2) se anastomosan directamente para constituir el plexo dentario superior?",
    "opciones": [
      "Los nervios dentarios posteriores, medios y anteriores",
      "Los nervios esfenopalatinos, palatino anterior y nasopalatino",
      "Los nervios temporobucal, temporomaseterino y dentario inferior",
      "Los nervios pterigopalatinos, infraorbitarios y palatinos mayores"
    ],
    "correcta": 0,
    "pista": "La conformación de esta red nerviosa peridentaria superior depende de la unión de las tres ramas alveolares del segundo ramo del trigémino.",
    "explicacion": "La correcta es la A porque el texto dictamina taxativamente que 'Los nervios dentarios posteriores, medios y anteriores se anastemosan entre si conformando al plexo dentario'. Los distractores B, C y D corresponden a otros ramos del trigémino o subdivisiones que no configuran este plexo según la ventana de trabajo."
  },
  {
    "id": "UBA_V4_002",
    "pregunta": "Con respecto a la distribución terminal del plexo dentario superior, ¿cuál es su territorio específico de inervación?",
    "opciones": [
      "Piezas dentarias, hueso y encías de la arcada superior",
      "Suelo de la boca y encías de la arcada inferior exclusivamente",
      "Músculo milohioideo y vientre anterior del digástrico",
      "Glándula sublingual y mucosa del istmo de las fauces"
    ],
    "correcta": 0,
    "pista": "Asocie la ubicación del plexo con las estructuras de soporte y las piezas dentarias correspondientes a su nivel maxilar.",
    "explicacion": "La correcta es la A. El documento detalla que las ramas del plexo dentario van a dar 'ramos dentarios, ramos óseos y ramos gingivales' destinados a la arcada superior. Los distractores B, C y D corresponden a territorios del nervio mandibular (V3), ajenos al plexo dentario superior."
  },
  {
    "id": "UBA_V4_003",
    "pregunta": "¿Cuál es la disposición topográfica inicial y el trayecto del nervio milohioideo tras originarse como colateral?",
    "opciones": [
      "Se ubica en el canal milohioideo por debajo de la línea oblicua interna, invadiendo el espacio de la glándula submaxilar",
      "Atraviesa el conducto dentario inferior e ingresa inmediatamente en el espesor de la glándula parótida",
      "Se dirige hacia arriba por la cara superficial del pterigoideo externo invadiendo el espacio temporal",
      "Discurre por encima de la línea oblicua interna cruzando el trayecto del nervio lingual de forma externa"
    ],
    "correcta": 0,
    "pista": "Mire las relaciones óseas de la cara interna de la mandíbula y su vinculación con los compartimentos glandulares submandibulares.",
    "explicacion": "La correcta es la A. El texto indica explícitamente que el nervio milohioideo 'Se va a ubicar en el canal milohioideo, ubicado por debajo de la línea oblicua interna, invadiendo el espacio de la glándula submaxilar'. Las opciones B, C y D alteran las relaciones anatómicas e incorporan trayectos erróneos."
  },
  {
    "id": "UBA_V4_004",
    "pregunta": "¿Cuál es el destino motor terminal del nervio milohioideo según las especificaciones del texto?",
    "opciones": [
      "Músculo milohioideo y vientre anterior del digástrico",
      "Músculo milohioideo y vientre posterior del digástrico",
      "Músculo pterigoideo interno y músculo del martillo",
      "Músculo periéstafilo externo y porción horizontal del geniogloso"
    ],
    "correcta": 0,
    "pista": "Este nervio inerva dos estructuras musculares del suelo de la boca derivadas del primer arco faríngeo.",
    "explicacion": "La correcta es la A. El texto determina que el nervio milohioideo 'va a inervar al músculo milohioideo y al vientre anterior del digástrico'. Las opciones B, C y D mencionan músculos que reciben inervación de otros troncos nerviosos (como el facial o ramos directos de V3)."
  },
  {
    "id": "UBA_V4_005",
    "pregunta": "¿Cuál es el origen de las ramas dentarias, óseas y gingivales destinadas a los molares y premolares inferiores?",
    "opciones": [
      "El nervio dentario inferior",
      "El nervio milohioideo",
      "El nervio bucal",
      "El nervio lingual"
    ],
    "correcta": 0,
    "pista": "Considere qué tronco principal emite colaterales directas para las piezas de la arcada alveolar mandibular.",
    "explicacion": "La correcta es la A. La ventana de trabajo enumera dentro de los componentes del nervio dentario inferior a los 'Ramos dentarios, óseos y gingivales para molares y premolares'. Los distractores B, C y D no suministran estos ramos a los órganos dentarios inferiores."
  },
  {
    "id": "UBA_V4_006",
    "pregunta": "Al analizar el trayecto del nervio dentario inferior, ¿en qué punto específico emite su ramo terminal denominado nervio incisivo?",
    "opciones": [
      "A nivel del agujero mentoniano, antes de que el nervio mentoniano se exteriorice",
      "A nivel del agujero condíleo interno antes de ingresar al conducto mandibular",
      "En el interior de la glándula submaxilar antes de abordar el canal milohioideo",
      "Inmediatamente por debajo del cuello del cóndilo mandibular"
    ],
    "correcta": 0,
    "pista": "El ramo incisivo continúa por dentro del plano óseo anterior de la mandíbula justo donde emerge el ramo cutáneo homónimo.",
    "explicacion": "La correcta es la A. El documento expresa que el nervio dentario inferior 'A nivel del agujero mentoniano, da su ramo terminal que es el nervio incisivo'. Los distractores B, C y D proponen sitios anatómicos incorrectos y previos al conducto óseo."
  },
  {
    "id": "UBA_V4_007",
    "pregunta": "¿Qué piezas dentarias y tejidos adyacentes reciben inervación del nervio incisivo como ramo terminal del dentario inferior?",
    "opciones": [
      "Ramos dentarios, óseos y gingivales para caninos e incisivos inferiores",
      "Ramos exclusivamente gingivales para molares y premolares inferiores",
      "Ramos mucosos para el sector anterior del paladar duro",
      "Ramos óseos exclusivos para la sínfisis mentoniana sin afectación dentaria"
    ],
    "correcta": 0,
    "pista": "Identifique el sector anterior de la arcada inferior basándose en la nomenclatura de los dientes que le dan nombre al nervio.",
    "explicacion": "La correcta es la A. El texto describe que el nervio incisivo proporciona 'Ramos dentarios, óseos y gingivales para caninos e incisivos'. Las opciones B, C y D alteran las piezas dentarias inervadas o cambian el maxilar evaluado."
  },
  {
    "id": "UBA_V4_008",
    "pregunta": "¿Cuál es el destino anatómico de las fibras del nervio mentoniano tras atravesar el agujero homónimo?",
    "opciones": [
      "La piel del mentón y el labio inferior",
      "La mucosa del suelo de la boca y cara ventral de la lengua",
      "La piel de la región maseterina y del ángulo mandibular",
      "El músculo orbicular de los labios y músculo borla del mentón"
    ],
    "correcta": 0,
    "pista": "Este ramo terminal se convierte en una estructura puramente sensitiva superficial para la porción más inferior y anterior de la cara.",
    "explicacion": "La correcta es la A. Según la fuente, el nervio mentoniano 'Atraviesa el agujero mentoniano y va a dar inervación a la piel del mentón y labio inferior'. Las opciones B y C confunden territorios sensitivos de otros nervios, y la D propone un destino motor no correspondiente."
  },
  {
    "id": "UBA_V4_009",
    "pregunta": "¿Con qué estructura nerviosa establece anastomosis el nervio dentario inferior que funciona como su principal eferente funcional autónomo?",
    "opciones": [
      "El nervio auriculotemporal",
      "El nervio lingual",
      "El plexo perimeníngeo",
      "El nervio de Jacobson"
    ],
    "correcta": 0,
    "pista": "Esta comunicación permite encauzar fibras secretomotoras destinadas a la glándula salival mayor de la región parotídea.",
    "explicacion": "La correcta es la A. El texto señala: 'Anastomosis con el auriculotemporal → es el principal eferente. Le llegan al nervio auriculotemporal las fibras simpáticas y parasimpáticas, llegando a la glándula parótida dándole funcionalidad'. Los distractores B, C y D corresponden a otros ramos descriptos en páginas previas o posteriores sin esta relación directa."
  },
  {
    "id": "UBA_V4_010",
    "pregunta": "¿Cuál es la consecuencia funcional de la anastomosis entre el nervio dentario inferior y el auriculotemporal descrita en la ventana de trabajo?",
    "opciones": [
      "Conducir fibras simpáticas y parasimpáticas a la glándula parótida para otorgarle funcionalidad",
      "Aportar fibras motoras al vientre posterior del digástrico y músculo estilohioideo",
      "Proveer sensibilidad gustativa a los dos tercios anteriores de la lengua",
      "Transportar el contingente motor voluntario para el músculo temporal profundo anterior"
    ],
    "correcta": 0,
    "pista": "La anastomosis actúa como puente de paso de fibras vegetativas hacia una glándula salival mayor.",
    "explicacion": "La correcta es la A. El texto afirma literalmente que a través de dicha anastomosis 'Le llegan al nervio auriculotemporal las fibras simpáticas y parasimpáticas, llegando a la glándula parótida dándole funcionalidad'. Los distractores B, C y D confunden funciones motoras y gustativas de otros pares craneales."
  },
  {
    "id": "UBA_V4_011",
    "pregunta": "Al analizar las relaciones del nervio milohioideo, ¿qué estructura glandular ve invadido su espacio anatómico por el trayecto de este nervio?",
    "opciones": [
      "La glándula submaxilar",
      "La glándula sublingual",
      "La glándula parótida",
      "La glándula palatina anterior"
    ],
    "correcta": 0,
    "pista": "El canal óseo por donde transita este nervio se encuentra en íntima vecindad con la celda de esta glándula salival submandibular.",
    "explicacion": "La correcta es la A. La fuente estipula que el nervio milohioideo se ubica en el canal milohioideo, 'invadiendo el espacio de la glándula submaxilar'. Las opciones B, C y D corresponden a glándulas situadas en compartimentos topográficos distintos."
  },
  {
    "id": "UBA_V4_012",
    "pregunta": "Integrando la inervación de la arcada inferior, ¿qué ramos específicos se encargan de la inervación del sector que comprende estrictamente a los premolares y molares inferiores?",
    "opciones": [
      "Ramos dentarios, óseos y gingivales del nervio dentario inferior antes de su división terminal",
      "Ramos terminales del nervio incisivo tras pasar el agujero mentoniano",
      "Ramos musculares del nervio milohioideo en el canal homónimo",
      "Ramos colaterales directos procedentes de la anastomosis con el auriculotemporal"
    ],
    "correcta": 0,
    "pista": "Diferencie los ramos que emite el nervio dentario inferior a lo largo de su trayecto por el conducto mandibular de aquellos ramos que provee su división anterior terminal.",
    "explicacion": "La correcta es la A. La ventana de trabajo asocia de forma directa los 'Ramos dentarios, óseos y gingivales para molares y premolares' como colaterales del bloque del dentario inferior, mientras que los caninos e incisivos dependen del incisivo (ramo terminal). Los distractores B, C y D representan asignaciones territoriales incorrectas según el texto."
  },
  {
    "id": "UBA_V4_013",
    "pregunta": "Comparando los ramos del nervio mandibular (V3) expuestos, ¿cuál es la diferencia fundamental en el destino de los filetes terminales entre el nervio incisivo y el nervio mentoniano?",
    "opciones": [
      "El incisivo proporciona ramos profundos (dentarios, óseos y gingivales) anteriores; el mentoniano se distribuye en estructuras superficiales (piel y labio)",
      "El incisivo es un ramo exclusivamente motor para el suelo de la boca; el mentoniano es puramente glandular parasimpático",
      "El incisivo inerva molares y premolares; el mentoniano inerva la piel de la región temporal",
      "El incisivo emerge por el agujero mentoniano hacia la piel; el mentoniano permanece dentro del canal óseo mandibular"
    ],
    "correcta": 0,
    "pista": "Evalúe cuál de los dos ramos continúa un trayecto óseo-dentario interno y cuál se exterioriza a los planos blandos de recubrimiento.",
    "explicacion": "La correcta es la A. El texto indica que el nervio incisivo da 'Ramos dentarios, óseos y gingivales para caninos e incisivos' (profundos/dentofaciales anteriores), y el mentoniano 'va a dar inervación a la piel del mentón y labio inferior' (superficiales). Los distractores invierten las funciones, los trayectos o los agujeros de salida."
  },
  {
    "id": "UBA_V4_014",
    "pregunta": "Si un paciente presenta una pérdida selectiva de la función secretomotora de la glándula parótida, manteniendo intacta la sensibilidad general de la piel mentoniana, ¿qué comunicación nerviosa descrita en el texto podría estar afectada?",
    "opciones": [
      "La anastomosis del dentario inferior con el auriculotemporal",
      "El ramo colateral del nervio milohioideo",
      "La división terminal del nervio incisivo",
      "La conformación del plexo dentario superior"
    ],
    "correcta": 0,
    "pista": "Busque la conexión inter-nerviosa que actúa transportando fibras autónomas específicas para el parénquima parotídeo.",
    "explicacion": "La correcta es la A. El texto indica que mediante la 'Anastomosis con el auriculotemporal... Le llegan al nervio auriculotemporal las fibras simpáticas y parasimpáticas, llegando a la glándula parótida dándole funcionalidad'. Los distractores B, C y D no poseen vinculación funcional ni anatómica con la inervación de la glándula parótida según la ventana de texto."
  },
  {
    "id": "UBA_V4_015",
    "pregunta": "¿Qué elemento óseo sirve como límite superior y referencia directa para la ubicación del canal donde discurre el nervio milohioideo?",
    "opciones": [
      "La línea oblicua interna",
      "La línea oblicua externa",
      "El borde inferior del cuerpo mandibular",
      "La cresta temporal del plano óseo"
    ],
    "correcta": 0,
    "pista": "El canal nervioso se encuentra inmediatamente inferior a esta eminencia lineal de la cara interna de la mandíbula.",
    "explicacion": "La correcta es la A. El texto indica literalmente que el nervio milohioideo se ubica en el canal milohioideo, el cual está 'ubicado por debajo de la línea oblicua interna'. Los distractores B, C y D corresponden a accidentes óseos distintos que no delimitan dicho canal."
  },
  {
    "id": "UBA_V4_016",
    "pregunta": "¿Cuál es la composición anatómica de los ramos que integran el plexo dentario superior según la descripción literal del texto de cátedra?",
    "opciones": [
      "Los nervios dentarios posteriores, medios y anteriores anastomosados entre sí",
      "Ramos provenientes del ganglio submaxilar reunidos con el nervio bucal",
      "Ramos simpáticos del plexo perimeníngeo exclusivamente",
      "La unión de los nervios mentoniano, milohioideo e incisivo"
    ],
    "correcta": 0,
    "pista": "La descripción del plexo superior involucra únicamente la convergencia de tres ramos homónimos que descienden del maxilar superior.",
    "explicacion": "La correcta es la A. El inicio exacto de la ventana de trabajo señala: 'Los nervios dentarios posteriores, medios y anteriores se anastemosan entre si conformando al plexo dentario'. Los distractores combinan ramos del maxilar inferior o de sistemas autónomos de forma errónea."
  },
  {
    "id": "UBA_V4_017",
    "pregunta": "¿Qué tipo de fibras nerviosas transporta el nervio milohioideo para cumplir con su rol en la inervación de los músculos milohioideo y vientre anterior del digástrico?",
    "opciones": [
      "Fibras motoras",
      "Fibras parasimpáticas preganglionares",
      "Fibras puramente vegetativas simpáticas",
      "Fibras de sensibilidad especial gustativa"
    ],
    "correcta": 0,
    "pista": "Los efectores de este nervio son músculos estriados esqueléticos del suelo de la boca.",
    "explicacion": "La correcta es la A. Al determinar que este nervio 'va a inervar al músculo milohioideo y al vientre anterior del digástrico', se establece su naturaleza efectora motora sobre estas masas musculares. Los distractores B, C y D proponen componentes funcionales ajenos a la inervación muscular esquelética según la fuente."
  },
  {
    "id": "UBA_V4_018",
    "pregunta": "En la organización del nervio dentario inferior, ¿en qué orden se presentan los ramos destinados a las piezas dentarias inferiores a lo largo de su trayecto intracanalicular y terminal?",
    "opciones": [
      "Primero emite ramos para molares y premolares, y luego se divide en el ramo incisivo para caninos e incisivos",
      "Primero emite el ramo incisivo en la entrada del conducto y luego los ramos gingivales para los molares",
      "Emite simultáneamente ramos para todos los dientes desde el nervio milohioideo",
      "Origina ramos para los incisivos desde la anastomosis con el auriculotemporal"
    ],
    "correcta": 0,
    "pista": "Analice el orden cronológico de colaterales y terminales; los dientes posteriores reciben inervación previa a la bifurcación terminal del mentoniano.",
    "explicacion": "La correcta es la A. El texto detalla primero los 'Ramos dentarios, óseos y gingivales para molares y premolares' como parte de su trayecto, y luego especifica que 'A nivel del agujero mentoniano, da su ramo terminal que es el nervio incisivo (Ramos dentarios, óseos y gingivales para caninos e incisivos)'. Los distractores confunden esta secuencia y origen."
  },
  {
    "id": "UBA_V4_019",
    "pregunta": "De acuerdo con el texto, ¿cuál de las siguientes estructuras NO recibe filetes nerviosos directos por parte del nervio incisivo?",
    "opciones": [
      "Molares inferiores",
      "Caninos inferiores",
      "Incisivos inferiores",
      "Tejido óseo anterior de la mandíbula"
    ],
    "correcta": 0,
    "pista": "El nervio incisivo se limita al grupo dentario anterior de la arcada inferior.",
    "explicacion": "La correcta es la A. El texto limita el territorio del nervio incisivo a 'caninos e incisivos', además de sus porciones óseas y gingivales. Los molares reciben inervación previa directamente del tronco del dentario inferior. Por ende, los molares no pertenecen a su territorio."
  },
  {
    "id": "UBA_V4_020",
    "pregunta": "¿Qué ramos del plexo dentario superior se encargan de la inervación de la encía y del plano de soporte óseo maxilar superior?",
    "opciones": [
      "Los ramos gingivales y ramos óseos derivados del plexo",
      "Los ramos musculares del milohioideo",
      "Los filetes terminales del nervio mentoniano",
      "Las fibras de la anastomosis del auriculotemporal"
    ],
    "correcta": 0,
    "pista": "El plexo dentario no solo da ramos para las piezas dentarias propiamente dichas, sino también para sus tejidos de sostén periféricos.",
    "explicacion": "La correcta es la A. El texto describe que las ramas del plexo dentario superior van a dar 'ramos dentarios, ramos óseos y ramos gingivales'. Los distractores B, C y D corresponden a estructuras exclusivas de la mandíbula y región parotídea (V3)."
  },
  {
    "id": "UBA_V4_021",
    "pregunta": "Topográficamente, ¿cuál es la relación espacial que guarda el canal milohioideo con respecto a la línea oblicua interna de la mandíbula?",
    "opciones": [
      "Se encuentra situado por debajo de dicha línea",
      "Se encuentra situado por encima de dicha línea",
      "Cruza perpendicularmente el punto medio de dicha línea",
      "Se sitúa en la cara externa de la rama, opuesto a dicha línea"
    ],
    "correcta": 0,
    "pista": "Ubicación lineal interna: recuerde que el canal aloja un nervio que desciende hacia el espacio submaxilar.",
    "explicacion": "La correcta es la A. El texto consigna textualmente que el canal milohioideo está 'ubicado por debajo de la línea oblicua interna'. Los distractores B, C y D cambian la orientación anatómica relativa."
  },
  {
    "id": "UBA_V4_022",
    "pregunta": "Al realizar una intervención en la piel del mentón y el labio inferior, ¿cuál es la vía nerviosa exacta que recoge dicha información sensitiva superficial según los conceptos expuestos?",
    "opciones": [
      "Nervio mentoniano, el cual atraviesa el agujero mentoniano para unirse al tronco del dentario inferior",
      "Nervio incisivo, discurriendo íntegramente por el canal milohioideo",
      "Nervio milohioideo, atravesando el espacio de la glándula parótida",
      "Plexo dentario superior, enviando eferencias directas al nervio auriculotemporal"
    ],
    "correcta": 0,
    "pista": "Siga el trayecto centrípeto de la sensibilidad cutánea inferior desde la superficie cutánea hacia el interior del hueso mandibular.",
    "explicacion": "La correcta es la A. El texto describe que el nervio mentoniano 'Atraviesa el agujero mentoniano y va a dar inervación a la piel del mentón y labio inferior', siendo este un ramo del dentario inferior. Los distractores B, C y D plantean trayectos anatómicos absurdos e inexistentes en el texto."
  },
  {
    "id": "UBA_V4_023",
    "pregunta": "¿Qué trascendencia funcional posee el nervio auriculotemporal con respecto a la glándula parótida a la luz de las anastomosis descritas?",
    "opciones": [
      "Actúa como el receptor de las fibras simpáticas y parasimpáticas que le llegan por anastomosis, otorgándole funcionalidad a la glándula",
      "Suministra únicamente inervación propioceptiva al músculo milohioideo",
      "Inerva de forma motora voluntaria al vientre anterior del digástrico",
      "Bloquea la secreción salival parotídea mediante ramos del nervio incisivo"
    ],
    "correcta": 0,
    "pista": "El auriculotemporal es el receptor terminal de los componentes autónomos aportados por el dentario inferior para la glándula.",
    "explicacion": "La correcta es la A. La fuente aclara de forma explícita: 'Anastomosis con el auriculotemporal → es el principal eferente. Le llegan al nervio auriculotemporal las fibras simpáticas y parasimpáticas, llegando a la glándula parótida dándole funcionalidad'. Los distractores B, C y D mezclan funciones motoras o territorios que pertenecen al milohioideo o incisivo."
  },
  {
    "id": "UBA_V4_024",
    "pregunta": "¿Cuál de los siguientes enunciados define de manera exacta la constitución y colaterales del plexo dentario superior en la ventana de trabajo?",
    "opciones": [
      "Se forma por anastomosis de los nervios dentarios posteriores, medios y anteriores, y emite ramos dentarios, óseos y gingivales",
      "Se forma por ramos del nervio milohioideo y proporciona inervación al vientre anterior del digástrico",
      "Se constituye por fibras simpáticas que emergen del agujero mentoniano y terminan en la glándula submaxilar",
      "Se compone de ramos incisivos que inervan exclusivamente molares y premolares del maxilar"
    ],
    "correcta": 0,
    "pista": "Sintetice las primeras líneas de la página 64, donde se aclara tanto la formación como el destino tridimensional de sus ramos.",
    "explicacion": "La correcta es la A. Reúne los dos postulados iniciales del texto sobre el plexo dentario (origen por anastomosis de los tres nervios dentarios y ramos terminales óseos, dentarios y gingivales). Los distractores mezclan accidentes y nervios de la arcada inferior (V3)."
  },
  {
    "id": "UBA_V4_025",
    "pregunta": "Si se lesiona el nervio dentario inferior inmediatamente antes de emitir su ramo terminal incisivo, pero respetando las ramas colaterales previas, ¿cuál de los siguientes territorios perderá su inervación?",
    "opciones": [
      "Los caninos e incisivos inferiores, junto con la piel del mentón y labio inferior",
      "Los molares y premolares inferiores exclusivamente",
      "El músculo milohioideo y el espacio de la glándula submaxilar",
      "La glándula parótida por afectación de sus fibras motoras directas"
    ],
    "correcta": 0,
    "pista": "Determine qué ramos nacen a nivel del agujero mentoniano (ramos terminales) y qué ramos ya se han emitido con anterioridad (ramos colaterales para dientes posteriores).",
    "explicacion": "La correcta es la A. A nivel del agujero mentoniano el nervio dentario inferior se divide en sus ramos terminales: el nervio incisivo (caninos e incisivos) y el nervio mentoniano (piel del mentón y labio inferior). Si la lesión es en ese punto exacto, estos territorios se verán afectados. Los molares y premolares (B) ya recibieron sus ramos antes. El milohioideo (C) nació antes de entrar al conducto óseo."
  },
  
  {
    "id": "UBA_V4_016_REV",
    "pregunta": "Durante un abordaje quirúrgico profundo del suelo de la boca que compromete el plano inferior de la línea oblicua interna de la mandíbula, se lesiona el elemento nervioso que transita por el canal milohioideo. ¿Qué alteración compartimental y motora se manifestará de forma directa según el texto de la cátedra?",
    "opciones": [
      "Pérdida del estímulo motor en el músculo milohioideo y vientre anterior del digástrico, con potencial afectación del espacio de la glándula submaxilar",
      "Parálisis del vientre posterior del digástrico con denervación sensitiva de la piel del ángulo mandibular",
      "Pérdida selectiva de la secreción salival de la glándula sublingual por compromiso de sus ramos aferentes directos",
      "Anestesia exteroceptiva de las piezas molares y premolares de la arcada alveolar inferior"
    ],
    "correcta": 0,
    "pista": "Asocie la ubicación anatómica exacta descrita para este ramo colateral y evalúe la masa muscular y el compartimento glandular que resulta invadido por su trayecto.",
    "explicacion": "La correcta es la A porque el texto dictamina que el nervio milohioideo se ubica en el canal milohioideo, por debajo de la línea oblicua interna, 'invadiendo el espacio de la glándula submaxilar' y que su función es inervar al 'músculo milohioideo y al vientre anterior del digástrico'. Los distractores B, C y D proponen estructuras (vientre posterior, glándula sublingual o piezas dentarias molares) que no corresponden al trayecto o función del nervio milohioideo fijados en la ventana de trabajo."
  },
  {
    "id": "UBA_V4_026_COMP",
    "pregunta": "Analizando las comunicaciones nerviosas de la división mandibular del trigémino en la ventana de trabajo, ¿cuál es la jerarquía anatómica y el rol funcional asignado a la conexión establecida entre el nervio dentario inferior y el nervio auriculotemporal?",
    "opciones": [
      "Funciona como su principal eferente, sirviendo de vía de llegada para que las fibras simpáticas y parasimpáticas alcancen el auriculotemporal y otorguen funcionalidad a la glándula parótida",
      "Constituye un ramo terminal puramente sensitivo somático encargado de la inervación de la mucosa del labio inferior y de los incisivos",
      "Actúa como un plexo de anastomosis mutua destinado de manera exclusiva a la inervación ósea y gingival de los premolares superiores",
      "Representa una vía colateral motora voluntaria encargada de suplir la pérdida de función del músculo milohioideo y del vientre anterior del digástrico"
    ],
    "correcta": 0,
    "pista": "Examine los términos precisos con los que el texto describe esta anastomosis y el órgano diana sobre el cual ejerce su acción efectora.",
    "explicacion": "La correcta es la A. El texto de la fuente afirma textualmente: 'Anastomosis con el auriculotemporal → es el principal eferente. Le llegan al nervio auriculotemporal las fibras simpáticas y parasimpáticas, llegando a la glándula parótida dándole funcionalidad'. Los distractores B, C y D falsean la anatomía al proponer que es un ramo terminal cutáneo, que se distribuye en premolares superiores o que posee un carácter motor voluntario muscular."
  }
],
"temas diferencidos parte 6": [
  {
    "id": "UBA_VII_001",
    "pregunta": "De acuerdo con la clasificación funcional del Par VII (Nervio Facial) especificada en la cátedra, ¿cuál es su condición biológica e instrumental básica?",
    "opciones": [
      "Es un nervio mixto.",
      "Es un nervio exclusivamente motor con fibras accesorias simpáticas.",
      "Es un nervio sensorial puro que de forma homóloga incorpora un contingente motor.",
      "Es un nervio somatomotor con anastomosis exclusivas del sistema simpático cervical."
    ],
    "correcta": 0,
    "pista": "Revise el encabezado y la definición de tipo estructural dada en la página 86 de la ventana de trabajo.",
    "explicacion": "El texto explicita textualmente bajo el título del Par VII que su tipo es 'mixto', al portar fibras motoras, sensitivas y autonómicas. Los distractores proponen falsas clasificaciones funcionales o incorporan el componente simpático que no está descrito en los núcleos del origen real en esta sección."
  },
  {
    "id": "UBA_VII_002",
    "pregunta": "Al analizar el origen real de los componentes del Par VII, ¿dónde se localizan específicamente los somas de sus fibras sensitivas?",
    "opciones": [
      "En el Ganglio Geniculado.",
      "En el Núcleo Solitario de la sustancia gris bulbar.",
      "En el Ganglio de Gasser de la fosa craneal media.",
      "En el núcleo motor del facial situado en la protuberancia."
    ],
    "correcta": 0,
    "pista": "Identifique el cuerpo neuronal periférico que actúa como primera neurona de la vía aferente del facial según el texto de la página 86.",
    "explicacion": "El documento señala explícitamente que el origen real de las fibras sensitivas se encuentra en el Ganglio Geniculado (anexo al nervio facial). El núcleo solitario y el núcleo motor son estructuras centrales (SNC) y el ganglio de Gasser pertenece al nervio trigémino (Par V)."
  },
  {
    "id": "UBA_VII_003",
    "pregunta": "En el marco del origen real motor del Par VII, ¿en qué estructura del tronco encefálico se localiza su núcleo efector?",
    "opciones": [
      "En la protuberancia.",
      "En el bulbo raquídeo, inmediatamente por delante del núcleo ambiguo.",
      "En el pedúnculo cerebral, a nivel del mesencéfalo alto.",
      "En el suelo del cuarto ventrículo a nivel bulbar bajo."
    ],
    "correcta": 0,
    "pista": "Recuerde la división segmental del tronco encefálico asignada expresamente a este núcleo motor en la página 86.",
    "explicacion": "La ventana de trabajo dictamina textualmente que las fibras motoras nacen del 'núcleo motor del facial (ubicado en la protuberancia)'. Los demás distractores sitúan erróneamente el origen motor en el bulbo o en el mesencéfalo."
  },
  {
    "id": "UBA_VII_004",
    "pregunta": "Las fibras parasimpáticas o vegetativas del nervio facial nacen de dos núcleos bien deﬁrenciados. ¿Cuál es el destino efector final del material originado en el núcleo lagrimomuconasal?",
    "opciones": [
      "Glándulas lagrimales y mucosa nasal.",
      "Glándula submaxilar y glándula sublingual.",
      "Glándula parótida exclusivamente.",
      "Glándulas salivales mayores corporales."
    ],
    "correcta": 0,
    "pista": "Asocie el propio nombre compuesto del núcleo con las estructuras glandulares diana indicadas literalmente en la página 86.",
    "explicacion": "Según la descripción del origen real parasimpático, el núcleo lagrimomuconasal está destinado a las glándulas lagrimales y a la mucosa nasal. El control de las glándulas submaxilar y sublingual depende del núcleo salival superior, mientras que la parótida responde al glosofaríngeo (no mencionado en la ventana)."
  },
  {
    "id": "UBA_VII_005",
    "pregunta": "De acuerdo con el texto de la cátedra, ¿qué glándulas específicas reciben fibras secretomotoras provenientes del núcleo salival superior?",
    "opciones": [
      "La glándula submaxilar y la glándula sublingual.",
      "La glándula parótida y las glándulas palatinas.",
      "Las glándulas lagrimales exclusivamente.",
      "Todas las glándulas de la mucosa yugal y del labio inferior."
    ],
    "correcta": 0,
    "pista": "Busque las dos estructuras salivales submandibulares asociadas de forma directa al componente vegetativo del intermediario en la página 86.",
    "explicacion": "El texto indica de manera explícita que el núcleo salival superior envía fibras destinadas a la 'glándula submaxilar y sublingual'. Los distractores refieren a otras glándulas dependientes del núcleo lagrimomuconasal o de otros pares craneales."
  },
  {
    "id": "UBA_VII_006",
    "pregunta": "Al describir el origen aparente del Par VII, ¿cuál es la localización anatómica exacta y sus relaciones con los pares craneales vecinos en el tronco encefálico?",
    "opciones": [
      "En el surco bulboprotuberancial, en la fosita supraolivar, por fuera del VI par y por dentro del VIII par.",
      "En el surco preolivar del bulbo, inmediatamente por encima de las raíces del nervio vago.",
      "En la cara anterior de la protuberancia, por fuera de la emergencia del nervio trigémino.",
      "En la fosa interpeduncular mesencefálica, medial al origen aparente del nervio patético."
    ],
    "correcta": 0,
    "pista": "Preste atención a las fronteras internas y externas (pares VI y VIII) mencionadas al deﬁnir la fosita supraolivar en la página 86.",
    "explicacion": "Es la transcripción literal del texto de la cátedra: el origen aparente se sitúa en el 'surco bulboprotuberancial (fosita supraolivar, por fuera del VI par y por dentro del VIII par con su intermediario)'. Los distractores sitúan la emergencia en otros surcos o caras del tronco."
  },
  {
    "id": "UBA_VII_007",
    "pregunta": "En el origen aparente del Par VII se constata la presencia de dos raíces independientes. ¿Cómo está constituido este tronco nervioso doble según la nomenclatura de la cátedra?",
    "opciones": [
      "Por el nervio facial propiamente dicho (raíz motora) y el nervio intermediario de Wrisberg (raíz sensitiva y parasimpática).",
      "Por una raíz motora somática y una raíz simpática perivascular derivada de la arteria auditiva interna.",
      "Por el nervio facial profundo y el nervio petroso superficial mayor.",
      "Por una raíz vestibular y una raíz coclear que se fusionan de inmediato en el surco."
    ],
    "correcta": 0,
    "pista": "Examine los dos componentes macroscópicos descritos en el origen aparente antes de ingresar al peñasco (Pág. 86).",
    "explicacion": "El texto define que el tronco del facial posee estas dos raíces con sus respectivas especificaciones funcionales al emerger del tronco. El distractor B inventa un componente simpático; el C menciona una colateral intrapetrosa y el D describe las raíces del VIII par."
  },
  {
    "id": "UBA_VII_008",
    "pregunta": "Una vez que las raíces del Par VII abandonan el surco bulboprotuberancial, ¿cuál es el trayecto inicial intracraneal y la dirección que adoptan antes de penetrar en el plano óseo?",
    "opciones": [
      "Se dirigen hacia arriba, adelante y afuera, introduciéndose en el conducto auditivo interno.",
      "Se dirigen hacia abajo, atrás y adentro, buscando el agujero rasgado posterior.",
      "Corren horizontalmente hacia adelante para perforar la lámina cribosa del etmoides.",
      "Se dirigen externamente hacia la hendidura esfenoidal cruzando el seno cavernoso."
    ],
    "correcta": 0,
    "pista": "Siga la orientación espacial precisa descrita en la transición entre el origen aparente y el trayecto óseo en la página 86.",
    "explicacion": "El texto describe literalmente este vector tridimensional: las raíces 'se dirigen hacia arriba, adelante y afuera, introduciéndose en el conducto auditivo interno'. Los distractores plantean trayectos correspondientes a otros pares craneales (I, III, IV, VI, IX, X, XI)."
  },
  {
    "id": "UBA_VII_009",
    "pregunta": "Durante su permanencia en el conducto auditivo interno, ¿cuáles son las relaciones vasculonerviosas estrictas que mantiene el contingente del nervio facial?",
    "opciones": [
      "Va acompañado por el VIII par y por la arteria auditiva interna.",
      "Se relaciona medialmente con la arteria meníngea media y lateralmente con el nervio maxilar inferior.",
      "Se encuentra por encima de la arteria carótida interna y por detrás del nervio óptico.",
      "Es flanqueado por las venas yugulares internas y los senos petrosos inferiores exclusivamente."
    ],
    "correcta": 0,
    "pista": "Busque el par craneal sensorial y el vaso arterial que ingresan conjuntamente por el mismo orificio del peñasco temporal (Pág. 86).",
    "explicacion": "La ventana de trabajo estipula de manera literal que en el conducto auditivo interno el facial 'va acompañado por el VIII par y por la arteria auditiva interna'. Los distractores mencionan elementos vasculonerviosos de otras fosas o regiones craneales."
  },
  {
    "id": "UBA_VII_010",
    "pregunta": "Al ingresar al espesor del hueso temporal, el nervio facial recorre un conducto laberíntico labrado en el peñasco. ¿Qué nombre recibe esta estructura ósea en el texto de la cátedra?",
    "opciones": [
      "Acueducto de Falopio (o conducto facial).",
      "Conducto auditivo externo de la porción escamosa.",
      "Conducto carotídeo intrapetroso.",
      "Hiato de los nervios petrosos mayor y menor."
    ],
    "correcta": 0,
    "pista": "Recuerde el epónimo clásico y la denominación anatómica que recibe el túnel óseo que aloja las tres porciones del nervio (Pág. 87).",
    "explicacion": "El texto introduce formalmente el nombre de 'Acueducto de Falopio (o conducto facial)' al iniciar la descripción de su trayecto intrapetroso. Los distractores corresponden a conductos u orificios del temporal que no contienen al tronco principal del facial."
  },
  {
    "id": "UBA_VII_011",
    "pregunta": "El trayecto intrapetroso del Par VII está dividido en tres porciones bien diferenciadas. ¿Cuál es la orientación y las relaciones anatómicas de la primera porción del acueducto de Falopio?",
    "opciones": [
      "Es horizontal, perpendicular al eje del peñasco, y se ubica entre el caracol y el vestíbulo.",
      "Es vertical descendente, paralela al eje del peñasco, y se ubica por detrás de la apófisis estiloides.",
      "Es oblicua hacia adelante, paralela al borde superior del peñasco, y labrada sobre el techo del tímpano.",
      "Es una curva abierta hacia adelante que transcurre íntegramente por fuera del oído interno."
    ],
    "correcta": 0,
    "pista": "Analice la geometría interna de la porción laberíntica descrita en la página 87 con respecto al eje óseo del peñasco.",
    "explicacion": "El texto de la cátedra describe textualmente que la primera porción 'es horizontal, perpendicular al eje del peñasco, y se ubica entre el caracol y el vestíbulo'. Las opciones distractoras proponen direcciones verticales u oblicuas falsas para este primer segmento."
  },
  {
    "id": "UBA_VII_012",
    "pregunta": "Al finalizar la primera porción de su recorrido intrapetroso, el nervio facial realiza un cambio de dirección abrupto. ¿Qué accidente estructural y qué elemento neuronal marcan este hito topográfico?",
    "opciones": [
      "El codo de la primera curva del facial, donde se encuentra el Ganglio Geniculado.",
      "El hiato de Falopio, donde emerge el nervio petroso profundo mayor.",
      "El promontorio timpánico, donde se aloja el ganglio de Andersch.",
      "El agujero estilomastoideo, donde se origina el ganglio ótico."
    ],
    "correcta": 0,
    "pista": "Busque el término anatómico utilizado para deﬁnir la primera flexión angular del recorrido y el ganglio sensitivo que allí se aloja (Pág. 87).",
    "explicacion": "El texto indica que al terminar la primera porción se forma 'el codo de la primera curva del facial' y que 'aquí se encuentra su ganglio anexo, el Ganglio Geniculado'. Los distractores son accidentes u elementos pertenecientes a otros nervios o porciones."
  },
  {
    "id": "UBA_VII_013",
    "pregunta": "En una pieza anatómica de la región intrapetrosa, ¿qué fenómeno de fusión estructural ocurre precisamente a partir del codo de la primera curva del facial?",
    "opciones": [
      "El intermediario de Wrisberg acopla sus fibras al nervio facial, constituyendo un único nervio.",
      "El nervio facial se fusiona con el nervio estatoacústico para ingresar a la caja del tímpano.",
      "Las fibras motoras abandonan el tronco principal para dar origen al nervio de la cuerda del tímpano.",
      "Se produce la separación definitiva entre las fibras parasimpáticas y las fibras somáticas del tronco."
    ],
    "correcta": 0,
    "pista": "Examine las últimas líneas de la página 88 que detallan el comportamiento definitivo del intermediario de Wrisberg respecto al facial.",
    "explicacion": "La ventana de trabajo estipula de forma literal: 'A partir del codo de la primera curva del facial, el intermediario de Wrisberg acopla sus fibras al nervio facial (un único nervio)'. Los distractores plantean fusiones con el VIII par o desprendimientos axónicos falsos para este punto."
  },
  {
    "id": "UBA_VII_014",
    "pregunta": "Con respecto a la dirección y la topografía específica de la segunda porción (timpánica) del acueducto de Falopio, ¿cuál es su comportamiento anatómico?",
    "opciones": [
      "Es oblicua hacia atrás y afuera, recorriendo la pared medial de la caja del tímpano.",
      "Es estrictamente vertical, descendiendo por detrás de la pared anterior del conducto auditivo externo.",
      "Es transversal anterior, ubicándose por debajo de la trompa de Eustaquio.",
      "Es una sutil curvatura interna que perfora el techo de la fosa yugular."
    ],
    "correcta": 0,
    "pista": "Sitúe el recorrido del nervio en relación con la cavidad aérea media del oído y su pared interna (Pág. 87).",
    "explicacion": "El texto de la cátedra describe textualmente que la segunda porción 'es oblicua hacia atrás y afuera, recorriendo la pared medial de la caja del tímpano'. Las demás opciones alteran la dirección y las relaciones de vecindad ósea."
  },
  {
    "id": "UBA_VII_015",
    "pregunta": "Durante el trayecto de la porción timpánica del nervio facial, el acueducto presenta relaciones milimétricas fundamentales con dos accidentes de la pared medial del tímpano. ¿Cuáles son?",
    "opciones": [
      "Se ubica por encima de la ventana oval y por debajo del conducto semicircular horizontal.",
      "Se ubica por debajo de la ventana redonda y por encima del promontorio.",
      "Se halla por detrás de la apófisis piramidal y por delante del conducto carotídeo.",
      "Pasa de forma medial al mango del martillo y lateral al yunque de la cadena ósea."
    ],
    "correcta": 0,
    "pista": "Busque los dos elementos de la pared interna de la caja del tímpano (uno vestibular y otro laberíntico) que delimitan verticalmente al nervio en la página 87.",
    "explicacion": "Es la relación anatómica exacta consignada de forma literal: el acueducto en su segunda porción discurre 'por encima de la ventana oval y por debajo del conducto semicircular horizontal'. Los distractores inventan o cambian las orientaciones espaciales con respecto a las ventanas y conductos."
  },
  {
    "id": "UBA_VII_016",
    "pregunta": "Al caracterizar la tercera porción del acueducto de Falopio, ¿qué dirección toma el nervio facial y con qué estructura ósea se vincula en su tramo final intrapetroso?",
    "opciones": [
      "Es vertical hacia abajo, por detrás de la cavidad tímpanica, y termina en el agujero estilomastoideo.",
      "Es una curva horizontal externa que rodea el conducto auditivo externo para salir por la cisura de Glaser.",
      "Es oblicua hacia adelante penetrando en la fosa pterigomaxilar a través del agujero redondo.",
      "Es ascendente vertical hacia el vértice del peñasco perforando la duramadre basilar."
    ],
    "correcta": 0,
    "pista": "Identifique el orificio exocraneal por donde el nervio abandona definitivamente el espesor del peñasco del temporal según el texto (Pág. 87).",
    "explicacion": "El texto detalla literalmente que la tercera porción 'es vertical hacia abajo, por detrás de la cavidad tímpanica, terminando en el agujero estilomastoideo'. Los distractores asocian el nervio a direcciones incorrectas o a orificios como la cisura de Glaser o el agujero redondo."
  },
  {
    "id": "UBA_VII_017",
    "pregunta": "Un paciente presenta una lesión selectiva del tronco del nervio facial exactamente antes de ingresar al conducto auditivo interno. Basándose puramente en los núcleos de origen real analizados, ¿qué funciones vegetativas se verán comprometidas?",
    "opciones": [
      "La secreción de las glándulas lagrimales, de la mucosa nasal, y de las glándulas submaxilar y sublingual.",
      "Únicamente la secreción salival de la glándula parótida por compromiso del núcleo salival inferior.",
      "La función motora somática facial sin ninguna alteración glandular o visceral asociada.",
      "Exclusivamente la secreción lagrimal, quedando indemne el territorio salival mandibular."
    ],
    "correcta": 0,
    "pista": "Integre los territorios glandulares de los dos núcleos efectores viscerales del facial descritos en la página 86.",
    "explicacion": "Una lesión en este punto interrumpe todas las fibras autónomas procedentes tanto del núcleo lagrimomuconasal como del núcleo salival superior antes de su distribución periférica. La parótida depende del IX par (núcleo salival inferior), y el facial obligatoriamente porta eferencias vegetativas a través del intermediario."
  },
  {
    "id": "UBA_VII_018",
    "pregunta": "Si se produce una fractura del peñasco del temporal que destruye específicamente la estructura ósea situada entre el caracol y el vestíbulo, ¿qué porción anatómica del trayecto del facial estará afectada?",
    "opciones": [
      "La primera porción (laberíntica) del acueducto de Falopio.",
      "La segunda porción (timpánica) en su trayecto por la pared medial.",
      "La tercera porción (mastoidea) antes de su emergencia exocraneal.",
      "El origen aparente del nervio facial en la fosita supraolivar."
    ],
    "correcta": 0,
    "pista": "Recuerde las relaciones anatómicas internas que deﬁnen de modo exclusivo a la porción laberíntica en la página 87.",
    "explicacion": "El texto define que la primera porción del acueducto de Falopio transcurre horizontalmente y de forma perpendicular al eje del peñasco, justamente 'entre el caracol y el vestíbulo'. Las porciones timpánica y mastoidea se relacionan con la caja del tímpano y la región posterior de la mastoides respectivamente."
  },
  {
    "id": "UBA_VII_019",
    "pregunta": "En el diagnóstico por imágenes de una patología que destruye la pared medial de la caja del tímpano, inmediatamente por encima de la ventana oval, ¿qué porción del nervio facial corre el riesgo inminente de sufrir compresión?",
    "opciones": [
      "La segunda porción (timpánica) del acueducto de Falopio.",
      "La porción intracraneal previa al ingreso al conducto auditivo interno.",
      "La porción terminal del nervio una vez traspasado el agujero estilomastoideo.",
      "El origen real somatomotor situado en el espesor del puente."
    ],
    "correcta": 0,
    "pista": "Asocie la ventana oval y la pared medial de la cavidad aérea media con la subdivisión correspondiente del conducto facial (Pág. 87).",
    "explicacion": "La segunda porción está definida en el texto por recorrer la pared medial de la caja del tímpano, justamente 'por encima de la ventana oval'. Las porciones intracraneal, exocraneal (post-agujero estilomastoideo) o el origen real encefálico no guardan relación física con este accidente de la caja timpánica."
  },
  {
    "id": "UBA_VII_020",
    "pregunta": "Analizando la anatomía del desarrollo y trayecto del Par VII, ¿cuál es la condición anatómica del nervio a nivel de la segunda porción timpánica con respecto a sus componentes originales?",
    "opciones": [
      "Es un único nervio consolidado, dado que las fibras del intermediario de Wrisberg ya se acoplaron en la primera curva.",
      "Mantiene la separación macroscópica estricta en dos raíces paralelas e independientes dentro de la caja.",
      "Carece por completo de fibras sensitivas debido a que estas terminaron de forma absoluta en el ganglio geniculado.",
      "Está constituido únicamente por el componente motor, dado que las fibras autonómicas se desviaron en el conducto auditivo interno."
    ],
    "correcta": 0,
    "pista": "Recuerde el hito de unificación tisular que ocurre en el sector del ganglio geniculado según el documento (Págs. 87-88).",
    "explicacion": "El texto explicita que las fibras del intermediario se acoplan al facial a partir del codo de la primera curva, dando lugar a un 'único nervio' antes de emprender la porción timpánica. Las fibras sensitivas no terminan allí (el ganglio contiene sus somas) y las autonómicas continúan su trayecto integradas al tronco."
  },
  {
    "id": "UBA_VII_021",
    "pregunta": "Durante un abordaje quirúrgico de la mastoides, una perforación lesiona el sector óseo posterior a la cavidad timpánica en dirección vertical descendente. ¿Qué estructura del Par VII está siendo afectada?",
    "opciones": [
      "La tercera porción (mastoidea) del acueducto de Falopio.",
      "La primera porción (laberíntica) a nivel del origen real.",
      "El origen aparente del nervio facial en la fosita supraolivar.",
      "La emergencia del nervio intermediario de Wrisberg a nivel del conducto auditivo interno."
    ],
    "correcta": 0,
    "pista": "Asocie los términos 'vertical hacia abajo' y 'por detrás de la cavidad tympánica' con las subdivisiones del acueducto de Falopio (Pág. 87).",
    "explicacion": "La tercera porción está descrita textualmente como 'vertical hacia abajo, por detrás de la cavidad tímpanica'. Las porciones laberíntica, el origen aparente o el conducto auditivo interno ocupan localizaciones más anteriores, profundas o endocraneales."
  },
  {
    "id": "UBA_VII_022",
    "pregunta": "En el marco de las relaciones cruzadas del origen aparente, ¿cuál es la posición recíproca exacta entre el nervio facial y el nervio motor ocular externo (VI par)?",
    "opciones": [
      "El nervio facial emerge por fuera del VI par en el surco bulboprotuberancial.",
      "El nervio facial emerge por dentro y por debajo del VI par en la línea media bulbar.",
      "El nervio facial emerge superior al origen del VI par en pleno espesor del pedúnculo.",
      "Se encuentran separados por la emergencia de la arteria auditiva interna a nivel del agujero ciego."
    ],
    "correcta": 0,
    "pista": "Repase la descripción del origen aparente en la página 86 y el orden de los pares craneales de adentro hacia afuera.",
    "explicacion": "El texto determina que el origen aparente del facial es en la fosita supraolivar, especificando que se halla 'por fuera del VI par'. El VI par emerge medialmente en el surco, por lo que el facial es lateral (por fuera) con respecto a él."
  },
  {
    "id": "UBA_VII_023",
    "pregunta": "Estableciendo una comparación estricta entre el origen real sensitivo y el origen real motor del Par VII según la ventana de trabajo, ¿qué afirmación es correcta?",
    "opciones": [
      "El origen real motor es central y protuberancial, mientras que el origen real sensitivo es periférico y ganglionar.",
      "Ambos comparten una ubicación periférica común en el espesor del peñasco del hueso temporal.",
      "El origen real sensitivo se ubica en el bulbo raquídeo y el motor en el interior del ganglio geniculado.",
      "El origen real motor está constituido por células pseudomonopolares anexas al conducto auditivo interno."
    ],
    "correcta": 0,
    "pista": "Contraste la localización del núcleo motor del facial frente a la del ganglio geniculado de acuerdo con lo leído en la página 86.",
    "explicacion": "El texto sitúa al núcleo motor en la protuberancia (SNC, central) y al origen sensitivo en el Ganglio Geniculado (SNP, periférico), validando la distinción estructural clásica de la cátedra. Las demás opciones alteran o invierten los conceptos anatómicos básicos dados."
  },
  {
    "id": "UBA_VII_024",
    "pregunta": "Con respecto a las relaciones de vecindad del origen aparente del Par VII, ¿cuál es su disposición con respecto al nervio auditivo (VIII par) en el surco bulboprotuberancial?",
    "opciones": [
      "El nervio facial con su intermediario emerge por dentro del VIII par.",
      "El nervio facial emerge por fuera y por detrás de las raíces del VIII par.",
      "Emergen del mismo tronco común indiviso y se separan únicamente al llegar al conducto auditivo interno.",
      "El nervio facial cruza de manera oblicua y superficial al VIII par dentro del surco preolivar."
    ],
    "correcta": 0,
    "pista": "Determine qué par craneal ocupa la posición más externa o lateral en la fosita supraolivar según la descripción de la página 86.",
    "explicacion": "El texto especifica textualmente que el facial se sitúa 'por dentro del VIII par con su intermediario' a nivel de la fosita supraolivar. Por ende, el VIII par es el elemento más lateral de este sector del surco bulboprotuberancial."
  },
  {
    "id": "UBA_VII_025",
    "pregunta": "Si evaluamos el comportamiento de la porción timpánica del acueducto de Falopio con respecto al conducto semicircular horizontal, ¿cuál es su exacta correspondencia espacial?",
    "opciones": [
      "La porción timpánica discurre por debajo del conducto semicircular horizontal.",
      "La porción timpánica discurre lateral y superior al conducto semicircular horizontal.",
      "Se sitúa en un plano medial y rodea el vértice del conducto semicircular horizontal.",
      "Perfora la base ósea del conducto semicircular horizontal antes de transformarse en vertical."
    ],
    "correcta": 0,
    "pista": "Revise los límites superior e inferior de la segunda porción del conducto facial en la página 87.",
    "explicacion": "El texto de la cátedra consigna literalmente que la segunda porción pasa 'por debajo del conducto semicircular horizontal' (y por encima de la ventana oval). Los distractores proponen relaciones espaciales invertidas o falsas perforaciones óseas."
  },
  {
    "id": "UBA_VII_026",
    "pregunta": "Al considerar de manera integrada el trayecto del Par VII dentro del peñasco, ¿cuál es el orden secuencial correcto de las porciones que recorre el nervio desde su entrada ósea hasta su salida del temporal?",
    "opciones": [
      "Porción laberíntica (horizontal), porción timpánica (oblicua) y porción mastoidea (vertical).",
      "Porción timpánica (vertical), porción laberíntica (oblicua) y porción estilomastoidea (horizontal).",
      "Porción mastoidea (horizontal), porción geniculada (vertical) y porción vestibular (oblicua).",
      "Porción auditiva interna, porción del codo y porción exocraneal superficial anterior."
    ],
    "correcta": 0,
    "pista": "Ordene los tres segmentos del acueducto de Falopio descritos correlativamente en la ventana de trabajo (Pág. 87).",
    "explicacion": "Esta secuencia ordenada y las características direccionales de cada segmento (primera, segunda y tercera porción) se corresponden fielmente con el desglose del texto de las páginas 87 y 88 (laberíntica, timpánica y mastoidea). Las otras opciones alteran los nombres o mezclan accidentes limítrofes."
  },
  
  {
    "id": "UBA_VII_027_COMP",
    "pregunta": "Analizando la microtopografía del origen aparente del Par VII en el surco bulboprotuberancial, ¿qué disposición geométrica adoptan las raíces del facial y del nervio intermediario de Wrisberg en relación con los límites óseos y los pares craneales colindantes?",
    "opciones": [
      "El nervio intermediario de Wrisberg emerge en una posición intermedia, inmediatamente por fuera de la raíz motora del facial y por dentro del nervio estatoacústico.",
      "La raíz motora del facial se sitúa en el extremo más lateral de la fosita supraolivar, quedando el intermediario por dentro del VI par.",
      "El nervio intermediario emerge medial al VI par, obligando al tronco motor del facial a cruzar por delante del agujero ciego anterior.",
      "Ambas raíces emergen unificadas en un solo fascículo que se sitúa por debajo de la oliva bulbar, medial a las raíces del hipogloso."
    ],
    "correcta": 0,
    "pista": "Evalúe la secuencia anatómica estricta de adentro hacia afuera que se organiza en la fosita supraolivar (Pág. 86).",
    "explicacion": "El texto de la cátedra establece de forma explícita que en la fosita supraolivar el facial se ubica por fuera del VI par y por dentro del VIII par 'con su intermediario', lo que sitúa al intermediario de Wrisberg en una posición intermedia o adyacente entre la raíz motora y el componente del VIII par. Los distractores alteran este orden secuencial de adentro hacia afuera."
  },
  {
    "id": "UBA_VII_028_COMP",
    "pregunta": "Desde una perspectiva tridimensional y lesional dentro del peñasco del temporal, ¿cuál es el comportamiento de las fibras del nervio intermediario de Wrisberg en relación con el laberinto óseo durante la primera porción del acueducto de Falopio?",
    "opciones": [
      "Transcurren de forma puramente horizontal y perpendicular al eje del peñasco, situándose exactamente en el espacio comprendido entre el caracol y el vestíbulo antes de incorporarse al facial.",
      "Corren paralelas al eje longitudinal del peñasco, cruzando de manera oblicua por encima del techo de la cavidad timpánica media.",
      "Sufren un cambio de dirección vertical ascendente que las posiciona por fuera del vestíbulo e inmediatamente mediales al conducto carotídeo.",
      "Abandonan el acueducto de Falopio antes de llegar al primer codo para distribuirse de manera aislada en el espesor del caracol anterior."
    ],
    "correcta": 0,
    "pista": "Recuerde las características geométricas y las relaciones laberínticas descritas literalmente para la porción laberíntica en la página 87.",
    "explicacion": "La ventana de trabajo dictamina textualmente que la primera porción del acueducto de Falopio presenta una dirección 'horizontal, perpendicular al eje del peñasco, y se ubica entre el caracol y el vestíbulo'. Es en este tramo donde el intermediario viaja hacia el codo de la primera curva para acoplarse definitivamente al facial. Los distractores proponen orientaciones o destinos aberrantes que contradicen el texto."
  }

],
"temas diferenciados parte 7":[
  {
    "id": "UBA_VII_029_INT",
    "pregunta": "¿Cuál es la dirección anatómica característica que adopta el nervio facial durante su trayecto por la porción timpánica intrapetrosa?",
    "opciones": [
      "Hacia atrás y hacia afuera.",
      "Hacia adelante y hacia adentro.",
      "Vertical y descendente.",
      "Horizontal y rectilínea hacia adelante."
    ],
    "correcta": 0,
    "pista": "Esta porción se ubica entre el primer codo del nervio y su entrada a la porción mastoidea, discurriendo en íntima relación con las estructuras del oído medio.",
    "explicacion": "Evaluación: Trayecto y dirección de la porción timpánica. Según el texto oficial, la porción timpánica posee una 'Dirección hacia atrás y hacia afuera'. Los distractores son incorrectos porque 'vertical y descendente' corresponde a la porción mastoidea, y las demás opciones no representan la orientación real descrita en la ventana de trabajo."
  },
  {
    "id": "UBA_VII_030_COMP",
    "pregunta": "Durante su recorrido por la porción timpánica, ¿cuál es la disposición tridimensional exacta del nervio facial en relación con las cavidades del oído medio e interno?",
    "opciones": [
      "Por fuera del vestíbulo y por dentro de la caja del tímpano.",
      "Por dentro del vestíbulo y por fuera de la caja del tímpano.",
      "Por dentro del conducto auditivo interno y por fuera del vestíbulo.",
      "Por encima de la fosa yugular y por dentro del conducto auditivo externo."
    ],
    "correcta": 0,
    "pista": "El nervio discurre de forma intermedia entre la estructura receptora del equilibrio y la cavidad neumática principal del oído medio.",
    "explicacion": "Evaluación: Relaciones anatómicas complejas de la porción timpánica. La fuente establece textualmente: 'El nervio facial va a estar ubicado por fuera del vestíbulo y por dentro de la caja del tímpano'. Las demás opciones invierten o alteran estas relaciones espaciales estrictas, siendo incorrectas."
  },
  {
    "id": "UBA_VII_031_COMP",
    "pregunta": "Al transitar por la porción timpánica, ¿entre qué estructuras anatómicas específicas pasa el nervio facial justo antes de alcanzar la pared posterior de la caja del tímpano?",
    "opciones": [
      "Entre la ampolla del conducto semicircular superior y la ventana oval.",
      "Entre el aditus ad antrum y la fosa yugular.",
      "Entre la ampolla del conducto semicircular lateral y el agujero estilomastoideo.",
      "Entre la platina del estribo y el ganglio geniculado."
    ],
    "correcta": 0,
    "pista": "Busca la relación que involucra un componente del aparato vestibular y una ventana del oído medio que se encuentra tapada por la platina de un huesesillo.",
    "explicacion": "Evaluación: Relaciones óseas e intrapetrosas finas de la porción timpánica. El documento señala explícitamente que el nervio 'Pasa entre la ampolla del conducto semicircular superior y la ventana oval, que está tapada por la platina del estribo —> Llega a pared posterior de caja de tímpano'. Las opciones alternativas mezclan accidentes de la porción mastoidea o porciones externas que no corresponden a este hito."
  },
  {
    "id": "UBA_VII_032_INT",
    "pregunta": "¿Qué dirección y orientación espacial caracterizan a la porción mastoidea del nervio facial?",
    "opciones": [
      "Vertical y descendente.",
      "Horizontal hacia afuera.",
      "Oblicua hacia adelante y hacia abajo.",
      "Curva de concavidad anterior."
    ],
    "correcta": 0,
    "pista": "Es la última porción intrapetrosa del trayecto, la cual se dirige directamente hacia el orificio de salida en la base del cráneo.",
    "explicacion": "Evaluación: Dirección y morfología de la porción mastoidea. La ventana de trabajo estipula de forma directa: 'Porción mastoidea - Vertical y descendente'. Los distractores plantean orientaciones falsas que contradicen el texto base."
  },
  {
    "id": "UBA_VII_033_COMP",
    "pregunta": "Con respecto a las relaciones topográficas de la porción mastoidea del nervio facial, ¿cuál es su ubicación exacta en referencia al aditus ad antrum?",
    "opciones": [
      "Por debajo del aditus ad antrum.",
      "Por encima del aditus ad antrum.",
      "Por dentro del aditus ad antrum.",
      "Por fuera del aditus ad antrum."
    ],
    "correcta": 0,
    "pista": "El aditus ad antrum es la cavidad que comunica la caja del tímpano con el antro mastoideo; considera la dirección descendente del nervio en esta etapa.",
    "explicacion": "Evaluación: Relación topográfica con cavidades mastoideas. El texto aclara que la porción mastoidea se encuentra 'Ubicada por debajo del Aditus Adantrum → cavidad que comunica caja de tímpano con el antro mastoideo'. Modificar la posición relativa (arriba, adentro, afuera) constituye un error anatómico conforme a la fuente."
  },
  {
    "id": "UBA_VII_034_COMP",
    "pregunta": "¿Cómo se describen las relaciones anterior y posterior de la porción mastoidea del nervio facial con respecto a la fosa yugular y la caja del tímpano?",
    "opciones": [
      "Por delante de la fosa yugular y relacionado hacia adelante con la pared posterior de la caja del tímpano.",
      "Por detrás de la fosa yugular y relacionado hacia atrás con la pared anterior de la caja del tímpano.",
      "Por dentro de la fosa yugular y relacionado hacia adelante con el aditus ad antrum.",
      "Por fuera de la fosa yugular y relacionado hacia atrás con la ventana oval."
    ],
    "correcta": 0,
    "pista": "Recuerda que el nervio desciende por la pared posterior de la cavidad timpánica y pasa por delante de una fosa venosa importante.",
    "explicacion": "Evaluación: Relaciones cruzadas tridimensionales de la porción mastoidea. Según la ventana de trabajo, esta porción se sitúa 'Por delante de fosa yugular - Se relaciona hacia adelante con pared posterior de caja de tímpano'. Las demás opciones falsean las paredes de la caja o la posición relativa frente a la fosa yugular."
  },
  {
    "id": "UBA_VII_035_INT",
    "pregunta": "¿En qué accidente óseo del peñasco del temporal termina el trayecto intrapetroso del nervio facial para hacerse exocraneal?",
    "opciones": [
      "Agujero estilomastoideo.",
      "Agujero rasgado posterior.",
      "Conducto auditivo externo.",
      "Conducto carotídeo."
    ],
    "correcta": 0,
    "pista": "Se trata del punto final de la porción mastoidea donde el tronco del nervio desemboca en la región de la base del cráneo.",
    "explicacion": "Evaluación: Punto terminal del trayecto intrapetroso. El texto indica que la porción mastoidea 'Termina desembocando a nivel del agujero estilomastoideo'. Los distractores representan orificios o conductos del hueso temporal que no son el sitio de salida del facial."
  },
  {
    "id": "UBA_VII_036_COMP",
    "pregunta": "Identifique el ramo colateral del nervio facial que establece una comunicación anastomótica con el nervio neumogástrico (X):",
    "opciones": [
      "Ramo de la fosa yugular.",
      "Ramo anastomótico con el IX o asa de Haller.",
      "Ramo del vientre posterior del digástrico.",
      "Ramo sensitivo del conducto auditivo externo."
    ],
    "correcta": 0,
    "pista": "Esta colateral se desprende en las cercanías de una gran fosa venosa intrapetrosa y utiliza un conducto específico.",
    "explicacion": "Evaluación: Comunicaciones del nervio facial. La ventana de trabajo menciona: 'Ramo de la fosa yugular → anastomosis con el neumogástrico (X). Hay un conducto que se desprende de la...'. Por lo tanto, el ramo de la fosa yugular es el correcto; el asa de Haller comunica con el IX y los demás ramos no tienen función anastomótica con el X."
  },
  {
    "id": "UBA_VII_037_INT",
    "pregunta": "¿Cómo se define el origen, trayecto y destino del ramo anastomótico con el IX (asa de Haller) del nervio facial?",
    "opciones": [
      "Posee forma curva, se dirige hacia atrás y llega al ganglio de Anderch del nervio glosofaríngeo.",
      "Posee forma rectilínea, se dirige hacia adelante y llega al ganglio geniculado del nervio glosofaríngeo.",
      "Posee forma vertical, se dirige hacia abajo y llega al nervio neumogástrico en la fosa yugular.",
      "Posee forma curva, se dirige hacia afuera y llega a la pared posterior de la caja del tímpano."
    ],
    "correcta": 0,
    "pista": "Su descripción incluye una morfología arqueada y su término se da en un ganglio anexo del par IX situado en la base del cráneo.",
    "explicacion": "Evaluación: Anatomía del asa de Haller. La fuente define el 'Ramo anastomótico con el IX o asa de haller' como un 'Ramo anastomótico de forma curva que se dirige hacia atrás para llegar al nervio glosofaríngeo (al ganglio de Anderch)'. Los distractores modifican falsamente la morfología, dirección o ganglio terminal."
  },
  {
    "id": "UBA_VII_038_INT",
    "pregunta": "¿Cuál es la relevancia semiológica y clínica del ramo sensitivo del conducto auditivo externo (CAE) originado del nervio facial?",
    "opciones": [
      "Constituye la única zona palpable de inervación sensitiva del nervio facial.",
      "Inerva los músculos de la mímica auricular posterior.",
      "Transmite las fibras del gusto de los dos tercios anteriores de la lengua.",
      "Permite la evaluación refleja del músculo del estribo ante estímulos dolorosos."
    ],
    "correcta": 0,
    "pista": "Busca la particularidad clínica de este ramo respecto a su accesibilidad para el examen físico sensitivo directo.",
    "explicacion": "Evaluación: Territorio sensitivo y correlación clínica. El texto oficial indica explícitamente: 'Ramo sensitivo del CAE → unica zona palpable de inervación sensitiva del nervio facial'. Los distractores confunden ramos motores (auricular posterior), ramos vegetativos/sensoriales (gusto) o reflejos que no se asocian con la palpación sensitiva de este ramo."
  },
  {
    "id": "UBA_VII_039_INT",
    "pregunta": "En cuanto a su clasificación funcional, ¿qué tipo de fibras transporta el ramo auricular posterior del nervio facial?",
    "opciones": [
      "Fibras motoras.",
      "Fibras sensitivas puras.",
      "Fibras parasimpáticas del núcleo salival.",
      "Fibras simpáticas perivasculares."
    ],
    "correcta": 0,
    "pista": "Revise la anotación sintética que acompaña a este ramo en el texto de la Cátedra justo antes de los ramos musculares del cuello.",
    "explicacion": "Evaluación: Clasificación funcional de ramos colaterales. La ventana de trabajo define textualmente: 'Ramo auricular posterior → ramo motor'. Las demás opciones le asignan incorrectamente componentes sensitivos o autónomos ausentes en la descripción de la fuente."
  },
  {
    "id": "UBA_VII_040_COMP",
    "pregunta": "Al emerger por el agujero estilomastoideo, ¿cuáles son las relaciones topográficas exactas del ramo del vientre posterior del digástrico y del estilohioideo?",
    "opciones": [
      "Se ubica por dentro del vientre posterior del digástrico (VPD) y por fuera del estilohioideo.",
      "Se ubica por fuera del vientre posterior del digástrico (VPD) y por dentro del estilohioideo.",
      "Se ubica por dentro tanto del vientre posterior del digástrico como del estilohioideo.",
      "Se ubica por fuera tanto del vientre posterior del digástrico como del estilohioideo."
    ],
    "correcta": 0,
    "pista": "El ramo se sitúa en un plano intermedio entre ambos músculos justo después de que el tronco principal del facial abandona el peñasco.",
    "explicacion": "Evaluación: Relaciones cruzadas exocraneales de ramos del facial. La fuente detalla que para el 'Ramo del vientre posterior del digástrico y estilohioideo: Cuando sale del agujero estilomastoideo, se ubica por dentro del VPD y por fuera del estilohioideo inervando los de forma motora'. Las opciones alternativas invierten o alteran la posición de 'por dentro' y 'por fuera' para cada músculo."
  },
  {
    "id": "UBA_VII_041_INT",
    "pregunta": "¿Qué tipo de inervación y a qué estructuras específicas provee el ramo común para el vientre posterior del digástrico y el estilohioideo?",
    "opciones": [
      "Inervación motora para ambos músculos.",
      "Inervación sensitiva para el vientre posterior del digástrico e inervación motora para el estilohioideo.",
      "Inervación autónoma parasimpática para las glándulas suprayacentes.",
      "Inervación propioceptiva exclusiva para los husos neuromusculares de la región."
    ],
    "correcta": 0,
    "pista": "Preste atención a la última frase de la ventana de trabajo que especifica la acción funcional sobre estos dos efectores musculares.",
    "explicacion": "Evaluación: Función y territorio motor exocraneal. El documento señala que este ramo inerva al vientre posterior del digástrico y al estilohioideo 'de forma motora'. Las opciones alternativas introducen componentes sensitivos o autónomos incorrectos según la ventana de trabajo."
  },
  {
    "id": "UBA_VII_042_COMP",
    "pregunta": "Analizando globalmente las porciones intrapetrosas abordadas en el texto (timpánica y mastoidea), ¿cuál de las siguientes afirmaciones describe correctamente la transición relacional del nervio facial en el espesor del hueso temporal?",
    "opciones": [
      "Pasa de una dirección horizontal hacia atrás y afuera (timpánica), situada entre el vestíbulo y la caja del tímpano, a una dirección vertical descendente (mastoidea) por debajo del aditus ad antrum.",
      "Pasa de una dirección vertical ascendente (timpánica), situada por fuera de la fosa yugular, a una dirección horizontal hacia adelante (mastoidea) relacionada con la ventana oval.",
      "Pasa de una trayectoria curva por dentro del vestíbulo (timpánica) a una trayectoria oblicua por dentro del vientre posterior del digástrico (mastoidea).",
      "Pasa de un trayecto longitudinal exocraneal por el agujero estilomastoideo (timpánica) a una porción puramente anastomótica con el nervio neumogástrico (mastoidea)."
    ],
    "correcta": 0,
    "pista": "Sintetice los datos de dirección y relaciones clave de ambas porciones sucesivas contenidas en las páginas analizadas.",
    "explicacion": "Evaluación: Integración de trayectos y relaciones de múltiples porciones intrapetrosas. Esta pregunta difícil integra los datos de la porción timpánica ('Dirección hacia atrás y hacia afuera', 'ubicado por fuera del vestíbulo y por dentro de la caja del tímpano') con los de la porción mastoidea ('Vertical y descendente', 'Ubicada por debajo del Aditus Adantrum'). La primera opción es la única síntesis exacta y verídica basada rigurosamente en la fuente."
  },
  {
    "id": "UBA_VII_043_INT",
    "pregunta": "¿Cuál es la jerarquía anatómica e importancia de las porciones intrapetrosas del nervio facial mencionada implícitamente en el esquema o texto de la página 90-91?",
    "opciones": [
      "Se destaca a una de ellas como la más importante de las intrapetrosas.",
      "Se define que todas las porciones tienen igual longitud y carecen de ramos colaterales.",
      "Se establece que la porción laberíntica es la única que emite el asa de Haller.",
      "Se postula que la porción timpánica es puramente exocraneal."
    ],
    "correcta": 0,
    "pista": "Observe las anotaciones de las porciones (timpánica, laberíntica, mastoidea) y localice el comentario textual sobre cuál es considerada la más relevante.",
    "explicacion": "Evaluación: Interpretación de esquemas y texto de la ventana de trabajo. El documento contiene la anotación explícita: '... Porción timpánica laberintica Porción mastodea ... Lar + importante de las intrapetrosas'. Las demás opciones contienen afirmaciones falsas o contradicciones con la clasificación intrapetrosa."
  },
  {
    "id": "UBA_VII_044_COMP",
    "pregunta": "Al contrastar el ramo anastomótico con el IX (asa de Haller) y el ramo de la fosa yugular del nervio facial, ¿cuál es la diferencia fundamental en sus destinos y conexiones según la ventana de trabajo?",
    "opciones": [
      "El asa de Haller se dirige hacia atrás al ganglio de Anderch del glosofaríngeo, mientras que el ramo de la fosa yugular se anastomosa con el neumogástrico (X).",
      "El asa de Haller se conecta con el nervio neumogástrico (X), mientras que el ramo de la fosa yugular llega al ganglio geniculado.",
      "El asa de Haller inerva de forma motora al estilohioideo, mientras que el ramo de la fosa yugular provee la única zona palpable de inervación sensitiva.",
      "El asa de Haller es un ramo descendente exocraneal, mientras que el ramo de la fosa yugular es un ramo exclusivamente motor para el vientre posterior del digástrico."
    ],
    "correcta": 0,
    "pista": "Compare detalladamente los pares craneales con los que se comunica cada una de estas dos colaterales descritas en el texto.",
    "explicacion": "Evaluación: Comparación de conexiones y ramos anastomóticos. El texto señala que el ramo de la fosa yugular da una 'anastomosis con el neumogástrico (X)' y el 'Ramo anastomótico con el IX o asa de haller' se dirige 'hacia atrás para llegar al nervio glosofaríngeo (al ganglio de Anderch)'. La opción A refleja de manera perfecta esta distinción sin agregar elementos externos."
  },
  {
    "id": "UBA_VII_045_INT",
    "pregunta": "De acuerdo con la clasificación y descripción de ramos de la porción mastoidea y región exocraneal adyacente, ¿cuál de las siguientes estructuras NO corresponde a un ramo colateral mencionado en esta sección?",
    "opciones": [
      "Ramo lingual para los dos tercios anteriores.",
      "Ramo de la fosa yugular.",
      "Ramo anastomótico con el IX o asa de Haller.",
      "Ramo auricular posterior."
    ],
    "correcta": 0,
    "pista": "Excluya la estructura que no aparece listada entre los ramos descriptos en las páginas 89 a 91 de la ventana de trabajo.",
    "explicacion": "Evaluación: Identificación de componentes y límites de la ventana de trabajo. Los ramos de la fosa yugular, el asa de Haller y el auricular posterior están expresamente detallados en el texto. El 'ramo lingual' no figura en absoluto en este segmento, por lo que constituye la opción correcta a marcar por exclusión."
  },
  {
    "id": "UBA_VII_046_COMP",
    "pregunta": "Si un odontólogo realiza una maniobra diagnóstica basada en la 'única zona palpable de inervación sensitiva del nervio facial', ¿qué estructura anatómica está explorando y dónde se localiza?",
    "opciones": [
      "El ramo sensitivo del conducto auditivo externo (CAE).",
      "El ramo auricular posterior sobre la apófisis mastoides.",
      "El asa de Haller en el espesor del espacio retroestíleo.",
      "El ramo del vientre posterior del digástrico a nivel exocraneal."
    ],
    "correcta": 0,
    "pista": "Busca el ramo colateral específico cuya aclaración clínica resalta precisamente esta condición de ser palpable y superficial.",
    "explicacion": "Evaluación: Aplicación clínica de los territorios sensitivos. El documento asocia directamente la frase 'unica zona palpable de inervación sensitiva del nervio facial' con el 'Ramo sensitivo del CAE'. Los distractores asocian erróneamente esta propiedad con ramos motores o profundos como el asa de Haller o el digástrico."
  },
  {
    "id": "UBA_VII_047_COMP",
    "pregunta": "En la transición del nervio facial a través del agujero estilomastoideo hacia la región exocraneal, ¿cuál es el orden correcto de aparición de los ramos según la secuencia del texto de la Cátedra?",
    "opciones": [
      "Ramo de la fosa yugular, asa de Haller, ramo sensitivo del CAE, ramo auricular posterior y ramo del vientre posterior del digástrico/estilohioideo.",
      "Ramo auricular posterior, ramo sensitivo del CAE, ramo del vientre posterior del digástrico y ramo de la fosa yugular.",
      "Ramo del vientre posterior del digástrico, ramo de la fosa yugular, ramo auricular posterior y asa de Haller.",
      "Asa de Haller, ramo del vientre posterior del digástrico, ramo de la fosa yugular y ramo auricular posterior."
    ],
    "correcta": 0,
    "pista": "Siga rigurosamente el orden de las viñetas que se enumeran en la fuente a partir de la porción mastoidea y el agujero estilomastoideo.",
    "explicacion": "Evaluación: Organización secuencial del trayecto y colaterales. El texto lista los ramos en el siguiente orden estricto: 1. Ramo de la fosa yugular. 2. Ramo anastomótico con el IX o asa de haller. 3. Ramo sensitivo del CAE. 4. Ramo auricular posterior. 5. Ramo del vientre posterior del digástrico y estilohioideo. La primera opción refleja fielmente esta organización."
  },
  {
    "id": "UBA_VII_048_INT",
    "pregunta": "¿Qué relación espacial guarda la porción mastoidea del nervio facial respecto a la fosa yugular?",
    "opciones": [
      "Se ubica por delante de la fosa yugular.",
      "Se ubica por detrás de la fosa yugular.",
      "Se ubica por dentro de la fosa yugular.",
      "Se ubica por debajo de la fosa yugular."
    ],
    "correcta": 0,
    "pista": "Esta relación se menciona inmediatamente antes de detallar que el nervio se relaciona hacia adelante con la pared posterior de la caja del tímpano.",
    "explicacion": "Evaluación: Relaciones básicas de la porción mastoidea. La fuente indica de manera textual que la porción mastoidea está '- Por delante de fosa yugular'. Los distractores que proponen atrás, dentro o debajo contradicen el texto oficial."
  },
  {
    "id": "UBA_VII_049_COMP",
    "pregunta": "Considerando las estructuras musculares inervadas por el nervio facial al salir del agujero estilomastoideo, ¿cuál es la disposición del ramo muscular común respecto al músculo estilohioideo?",
    "opciones": [
      "Se ubica por fuera del estilohioideo.",
      "Se ubica por dentro del estilohioideo.",
      "Atraviesa de forma perpendicular al estilohioideo.",
      "Discurre por el borde inferior del estilohioideo sin cruzarlo."
    ],
    "correcta": 0,
    "pista": "La fuente detalla la posición del ramo frente a dos músculos (VPD y estilohioideo), utilizando las relaciones 'por dentro' y 'por fuera'.",
    "explicacion": "Evaluación: Relación específica exocraneal. El texto menciona textualmente que el ramo 'se ubica por dentro del VPD y por fuera del estilohioideo'. Por lo tanto, con respecto al estilohioideo, se encuentra 'por fuera'. Las demás opciones son incorrectas según la ventana de trabajo."
  },
  {
    "id": "UBA_VII_050_INT",
    "pregunta": "¿Qué característica morfológica macroscópica describe el texto para el ramo anastomótico con el nervio glosofaríngeo (IX)?",
    "opciones": [
      "Posee una forma curva.",
      "Es un ramo bifurcado en Y.",
      "Posee una forma rectilínea y corta.",
      "Es un ramo plexiforme irregular."
    ],
    "correcta": 0,
    "pista": "Esta característica morfológica le otorga su nombre clásico alternativo de 'asa'.",
    "explicacion": "Evaluación: Características macroscópicas de ramos colaterales. La fuente consigna explícitamente: 'Ramo anastomótico de forma curva que se dirige hacia atrás...'. Por ende, la opción que describe su forma curva es la correcta."
  },
  {
    "id": "UBA_VII_051_COMP",
    "pregunta": "Un paciente presenta una lesión selectiva del nervio facial inmediatamente por dentro del vientre posterior del digástrico, tras su emergencia del agujero estilomastoideo. Basándose estrictamente en la ventana de trabajo, ¿qué funciones específicas se verían afectadas?",
    "opciones": [
      "La inervación motora del vientre posterior del digástrico y del músculo estilohioideo.",
      "La sensibilidad táctil de la mitad posterior del conducto auditivo externo.",
      "La comunicación anastomótica con el ganglio de Anderch del glosofaríngeo.",
      "La inervación sensitiva de la caja del tímpano y de la fosa yugular."
    ],
    "correcta": 0,
    "pista": "Ubique el ramo que posee exactamente esa localización relacional exocraneal ('por dentro del VPD') y evalúe su territorio funcional.",
    "explicacion": "Evaluación: Correlación funcional de lesiones en puntos específicos del trayecto. El texto determina que el 'Ramo del vientre posterior del digástrico y estilohioideo... se ubica por dentro del VPD y por fuera del estilohioideo inervando los de forma motora'. Una lesión en este punto compromete selectivamente dicha función muscular. Las alternativas corresponden a ramos que se desprendieron previamente (intrapetrosos) o a funciones no asociadas en el texto."
  },
  {
    "id": "UBA_VII_052_INT",
    "pregunta": "Según la ventana de trabajo, ¿con qué porción del nervio facial se relaciona la estructura denominada 'Aditus Adantrum'?",
    "opciones": [
      "Porción mastoidea.",
      "Porción timpánica.",
      "Porción laberíntica.",
      "Porción exocraneal terminal."
    ],
    "correcta": 0,
    "pista": "Este accidente cavitario sirve como punto de referencia superior para describir el trayecto vertical y descendente del nervio.",
    "explicacion": "Evaluación: Relaciones topográficas de los segmentos del facial. El texto sitúa el 'Aditus Adantrum' bajo el título específico de 'Porción mastoidea', indicando que esta porción está 'Ubicada por debajo del Aditus Adantrum'. Vincularlo a otra porción es incorrecto según la fuente."
  },
  {
    "id": "UBA_VII_053_COMP",
    "pregunta": "Al analizar la inervación motora provista por el nervio facial dentro del rango de información de las páginas 89-91, ¿cuáles son los efectores musculares explícitamente citados que reciben ramos?",
    "opciones": [
      "El vientre posterior del digástrico y el estilohioideo.",
      "El vientre anterior del digástrico y el milohioideo.",
      "El músculo del estribo y los músculos cutáneos de la cara.",
      "El músculo temporal y el masetero."
    ],
    "correcta": 0,
    "pista": "Identifique los músculos que se mencionan de manera concreta en los ramos terminales/colaterales descritos al final del documento provisto.",
    "explicacion": "Evaluación: Delimitación estricta de territorios motores en la ventana de trabajo. En las páginas 89-91 el único ramo motor muscular desarrollado textualmente es el 'Ramo del vientre posterior del digástrico y estilohioideo' que los inerva de forma motora. El vientre anterior del digástrico y el milohioideo (opción B) o los músculos masticadores (opción D) pertenecen al trigémino. El músculo del estribo y los cutáneos de la cara (opción C) corresponden a páginas anteriores del documento general pero no están descritos en esta ventana de trabajo específica, quedando prohibida su elección."
  },

  {
    "id": "UBA_VII_054_COMP",
    "pregunta": "Conociendo que la porción mastoidea del nervio facial discurre por debajo del aditus ad antrum, ¿cómo define el texto de la Cátedra la funcionalidad anatómica de este último accidente?",
    "opciones": [
      "Es una cavidad que comunica la caja de tímpano con el antro mastoideo.",
      "Es un conducto óseo que comunica el vestíbulo con la fosa yugular.",
      "Es un orificio que comunica la pared posterior de la caja con el conducto auditivo externo.",
      "Es una hendidura que comunica el ganglio de Anderch con la ampolla del conducto semicircular superior."
    ],
    "correcta": 0,
    "pista": "Busque la definición exacta que el texto añade entre flechas o aclaraciones parentéticas al describir los hitos limítrofes de la porción mastoidea.",
    "explicacion": "Evaluación: Definición y conectividad de accidentes óseos regionales. El documento define al 'Aditus Adantrum' explícitamente como la 'cavidad que comunica caja de tímpano con el antro mastoideo'. Las opciones alternativas inventan comunicaciones con el vestíbulo, fosa yugular o CAE que no se encuentran en la ventana de trabajo."
  },
  {
    "id": "UBA_VII_055_COMP",
    "pregunta": "Analizando las relaciones espaciales cruzadas del nervio facial, ¿cuál es la estructura ósea u oído medio que actúa de forma común como hito de relación anterior para la porción mastoidea y como límite de llegada para la porción timpánica?",
    "opciones": [
      "La pared posterior de la caja del tímpano.",
      "La ampolla del conducto semicircular superior.",
      "La platina del estribo sobre la ventana oval.",
      "El conducto que se desprende de la fosa yugular."
    ],
    "correcta": 0,
    "pista": "Identifique el accidente de la caja del tímpano que es alcanzado al finalizar la trayectoria 'hacia atrás y afuera' y que luego queda situado por delante del segmento vertical descendente.",
    "explicacion": "Evaluación: Relaciones cruzadas e integración de porciones del trayecto intrapetroso. Para la porción timpánica, el texto indica que: 'Llega a pared posterior de caja de tímpano'. Para la porción mastoidea, señala que: 'Se relaciona hacia adelante con pared posterior de caja de tímpano'. Por lo tanto, dicha pared constituye el hito común de transición y relación entre ambos segmentos. Los distractores representan estructuras vinculadas a una sola de las porciones o ramos."
  }
],
"temas diferenciados parte 8": [
  {
    "id": "UBA_VII_TM_001_INT",
    "pregunta": "De acuerdo con la clasificación clásica, ¿cuántas ramas terminales se originan al dividirse el tronco principal del nervio facial?",
    "opciones": [
      "Dos ramas terminales.",
      "Tres ramas terminales.",
      "Cinco ramas terminales.",
      "Seis ramas terminales."
    ],
    "correcta": 0,
    "pista": "La clasificación clásica divide al tronco del nervio facial en grandes ejes principales antes de su distribución periférica fina.",
    "explicacion": "La correcta es la opción 0 porque la ventana de trabajo explicita que la clasificación clásica establece 2 ramas que se originan cuando se divide el tronco del nervio facial. Las demás opciones no corresponden a esta clasificación básica del tronco principal."
  },
  {
    "id": "UBA_VII_TM_002_DIF",
    "pregunta": "Si consideramos la subdivisión de las ramas terminales del nervio facial, ¿cuál de los siguientes grupos incluye correctamente ramos destinados al músculo frontal y al semiorbicular superior?",
    "opciones": [
      "El Grupo superior.",
      "El Grupo intercalado o suborbitario.",
      "El Grupo medio.",
      "El Grupo intermedio."
    ],
    "correcta": 0,
    "pista": "Asocie los músculos de la porción más elevada de la mímica facial (como el vientre frontal del occipitofrontal y la porción superior del ojo) con los ramilletes de la división facial.",
    "explicacion": "La correcta es la opción 0 porque textualmente el 'Grupo superior' emite la Rama Frontal (para el músculo frontal) y la Rama Palpebral (para el semiorbicular superior y superciliar). Las demás opciones agrupan ramos para porciones nasales, labiales o bucales inferiores."
  },
  {
    "id": "UBA_VII_TM_003_INT",
    "pregunta": "Dentro de la distribución periférica del nervio facial, ¿hacia qué estructuras se dirigen los filetes de la Rama Palpebral del grupo superior?",
    "opciones": [
      "Hacia el semiorbicular superior y el músculo superciliar.",
      "Hacia el semiorbicular inferior y los músculos nasales.",
      "Hacia el músculo frontal y el auricular anterior.",
      "Hacia el músculo buccinador y el triangular de los labios."
    ],
    "correcta": 0,
    "pista": "Esta rama se localiza en el grupo superior e inerva estructuras periorbitarias superiores.",
    "explicacion": "La correcta es la opción 0 porque el texto indica que la Rama Palpebral del grupo superior se distribuye en el semiorbicular superior y superciliar. Los distractores pertenecen a otros ramos u otros grupos de la división terminal."
  },
  {
    "id": "UBA_VII_TM_004_DIF",
    "pregunta": "Un paciente presenta parálisis aislada de los músculos de la pirámide nasal y del dorso nasal, junto con el semiorbicular inferior. ¿Qué grupo específico de ramos terminales del facial se encuentra afectado?",
    "opciones": [
      "El Grupo intercalado o suborbitario.",
      "El Grupo superior.",
      "El Grupo medio.",
      "El Grupo intermedio."
    ],
    "correcta": 0,
    "pista": "Este grupo se encuentra topográficamente entre losramos temporo-palpebrales superiores y los ramos que corren paralelos al conducto excretor parotídeo.",
    "explicacion": "La correcta es la opción 0 porque la fuente especifica que el 'Grupo intercalado o suborbitario' inerva el semiorbicular inferior y los músculos de la pirámide y del dorso nasal. Los distractores corresponden a otros grupos con inervaciones musculares distintas."
  },
  {
    "id": "UBA_VII_TM_005_INT",
    "pregunta": "Con respecto a la topografía de los ramos del Grupo medio del nervio facial, ¿cuál es su relación anatómica característica con el conducto de Stenon?",
    "opciones": [
      "Discurren de forma paralela al conducto de Stenon.",
      "Cruzan perpendicularmente por debajo del conducto de Stenon.",
      "Atraviesan el espesor de la pared del conducto de Stenon.",
      "Se originan directamente desde el interior del conducto de Stenon."
    ],
    "correcta": 0,
    "pista": "Busque la relación de paralelismo descrita para este grupo intermedio-superior de la cara.",
    "explicacion": "La correcta es la opción 0 porque el texto dicta textualmente para el 'Grupo medio': 'paralela al conducto de Stenon'. Las relaciones descritas en los distractores son incorrectas y falsas según el texto."
  },
  {
    "id": "UBA_VII_TM_006_DIF",
    "pregunta": "Al evaluar la función motora facial, se constata indemnidad en el músculo buccinador pero parálisis en los músculos cigomáticos, canino y elevadores del labio superior. ¿Cuál es el grupo de ramos terminales lesionado?",
    "opciones": [
      "El Grupo medio.",
      "El Grupo intermedio.",
      "El Grupo intercalado.",
      "El Grupo superior."
    ],
    "correcta": 0,
    "pista": "Diferencie el grupo que corre paralelo al conducto parotídeo de aquel denominado propiamente 'intermedio' en el texto.",
    "explicacion": "La correcta es la opción 0 porque el texto asigna al 'Grupo medio' la inervación de los músculos del labio superior y músculos por encima de la comisura labial (canino, elevador común, elevador propio, cigomáticos). El buccinador está a cargo del grupo intermedio, por lo cual se conserva sano."
  },
  {
    "id": "UBA_VII_TM_007_INT",
    "pregunta": "Según la descripción del texto de la Cátedra, ¿qué músculos específicos reciben inervación motora del denominado 'Grupo intermedio' del facial?",
    "opciones": [
      "El músculo buccinador y el triangular de los labios.",
      "El músculo canino y los músculos cigomáticos.",
      "El semiorbicular inferior y los músculos del dorso nasal.",
      "El músculo frontal y el semiorbicular superior."
    ],
    "correcta": 0,
    "pista": "Este grupo se clasifica entre el grupo medio (paralelo al conducto de Stenon) y el grupo inferior de la mandíbula.",
    "explicacion": "La correcta es la opción 0 porque bajo la sección de 'Grupo intermedio' se enumeran taxativamente dos músculos: 'Buccinador' y 'Triangular de los labios'. Los distractores son músculos asignados a otros grupos terminales."
  },
  {
    "id": "UBA_VII_TM_008_DIF",
    "pregunta": "Anatomía del Grupo inferior del facial: ¿Por cuántos nervios está constituido estructuralmente este grupo y cuál es la denominación del primero de ellos?",
    "opciones": [
      "Está formado por dos nervios, y el primero es el Nervio Marginal de Bockenheimer.",
      "Está formado por tres nervios, y el primero es la Rama Cervical transversa.",
      "Está formado por dos nervios, y el primero es el Nervio Cervicofacial clásico.",
      "Está formado por un único nervio denominado Nervio Mentoniano del facial."
    ],
    "correcta": 0,
    "pista": "El grupo inferior posee una mención nominal muy específica de un autor clásico alemán ligada a la mandíbula.",
    "explicacion": "La correcta es la opción 0 porque el texto indica explícitamente: 'Grupo inferior: formado por dos nervios / Nervio Marginal de Bockenheimer...'. Las otras opciones alteran el número de constituyentes o introducen nombres falsos conforme a la ventana analizada."
  },
  {
    "id": "UBA_VII_TM_009_INT",
    "pregunta": "Según la ventana de trabajo, ¿cuál es el segundo componente nervioso catalogado dentro del Grupo inferior del nervio facial?",
    "opciones": [
      "El Ramo cervical (inerva al cutáneo del cuello).",
      "El Nervio Marginal de Bockenheimer.",
      "El Ramo submentoniano de Jaffé.",
      "El Ramo estilohioideo posterior."
    ],
    "correcta": 0,
    "pista": "Es el ramo terminal encargado de la inervación del músculo platisma (cutáneo del cuello).",
    "explicacion": "La correcta es la opción 0 porque el texto detalla para el Grupo inferior al Nervio Marginal de Bockenheimer y seguidamente al 'Ramo cervical (inerva al cutáneo del cuello)'. Los distractores modifican los nombres o mezclan elementos no descritos como segundos componentes del grupo inferior."
  },
  {
    "id": "UBA_VII_TM_010_DIF",
    "pregunta": "Con respecto a la anatomía topográfica y quirúrgica de la región suprahioidea, ¿cómo se define y delimita el denominado Triángulo de Finochietto?",
    "opciones": [
      "Se define como el triángulo superior, limitado hacia abajo por el tendón del digástrico y el hioides, y hacia arriba por el borde inferior de la mandíbula.",
      "Se define como el triángulo inferior, limitado hacia arriba por el tendón del digástrico y hacia abajo por el hueso hioides.",
      "Se define como el espacio comprendido exclusivamente entre ambos vientres anteriores del músculo digástrico.",
      "Se define como la fosa comprendida entre el músculo milohioideo y el hiogloso por encima del hioides."
    ],
    "correcta": 0,
    "pista": "El texto define geométricamente dos triángulos (superior e inferior) utilizando el hioides, la mandíbula y el tendón del digástrico.",
    "explicacion": "La correcta es la opción 0 porque el texto expone literalmente: 'TRIANGULO DE FINOCHIETTO > Es el superior. Limitado: - Hacia abajo x tendon del digastrico y hioides / - Hacia arriba x borde inferior de la mandibula'. Las demás opciones invierten los límites o cambian las referencias óseas y musculares."
  },
  {
    "id": "UBA_VII_TM_011_INT",
    "pregunta": "En la subdivisión anatómica de la región submandibular descrita en la fuente, ¿qué estructuras establecen los límites del triángulo inferior?",
    "opciones": [
      "Hacia arriba por el tendón del digástrico y hacia abajo por el hueso hioides.",
      "Hacia arriba por el borde inferior de la mandíbula y hacia abajo por el tendón del digástrico.",
      "Hacia adelante por el vientre anterior del digástrico y hacia atrás por el vientre posterior.",
      "Hacia arriba por el músculo milohioideo y hacia abajo por el hioides."
    ],
    "correcta": 0,
    "pista": "El triángulo inferior se ubica inmediatamente por debajo del tendón intermedio del digástrico.",
    "explicacion": "La correcta es la opción 0 porque el texto describe para el triángulo inferior: 'Limitado: - Hacia arriba x el tendon del digastrico / - Hacia abajo x el hueso hioides'. La opción 1 describe al triángulo superior (Finochietto), y las otras opciones son incorrectas."
  },
  {
    "id": "UBA_VII_TM_012_DIF",
    "pregunta": "Analizando la relevancia clínica y la viabilidad quirúrgica de las subdivisiones regionales suprahioideas, ¿cuál de las siguientes afirmaciones es correcta según la fuente?",
    "opciones": [
      "En el triángulo inferior sí se pueden realizar intervenciones quirúrgicas, a diferencia del triángulo superior.",
      "En el Triángulo de Finochietto se pueden realizar amplias intervenciones debido a la ausencia de ramos nerviosos de riesgo.",
      "Ambos triángulos (superior e inferior) prohíben estrictamente cualquier abordaje quirúrgico por riesgo de parálisis masiva.",
      "El triángulo inferior no permite intervenciones por albergar al ramo cervical del facial de manera fija."
    ],
    "correcta": 0,
    "pista": "Examine cuál de las dos regiones especificadas por la Cátedra permite taxativamente procedimientos o incisiones operatorias.",
    "explicacion": "La correcta es la opción 0 porque el texto indica explícitamente: 'En el triangulo inferior si se pueden realizar intervenciones', en contraposición al superior (de Finochietto) donde se halla el submentoniano de Jaffé y está catalogado como 'no quirúrgico'."
  },
  {
    "id": "UBA_VII_TM_013_INT",
    "pregunta": "Identifique la estructura neurológica de riesgo que se localiza específicamente en el interior del Triángulo de Finochietto (triángulo superior):",
    "opciones": [
      "El submentoniano de Jaffé.",
      "El nervio marginal de Bockenheimer propiamente dicho.",
      "La rama cervical transversa profunda.",
      "El ramo anastomótico para el glosofaríngeo."
    ],
    "correcta": 0,
    "pista": "Se trata de un ramo del nervio facial mencionado entre paréntesis como 'no quirúrgico' debido a su ubicación en dicho triángulo superior.",
    "explicacion": "La correcta es la opción 0 porque el texto dice textualmente que en el Triángulo de Finochietto 'Aquí se localiza el submentoniano de Jaffé (no quirúrgico)'. Los distractores corresponden a otras estructuras que no están descritas dentro de este espacio superior."
  },
  {
    "id": "UBA_VII_TM_014_DIF",
    "pregunta": "Un cirujano planifica un abordaje submandibular y debe evitar lesionar el ramo submentoniano de Jaffé. Basándose estrictamente en los datos de la Cátedra, ¿cuál es la conducta topográfica correcta?",
    "opciones": [
      "Evitar la disección del triángulo superior (Finochietto), limitado entre el borde inferior mandibular, el tendón del digástrico y el hioides.",
      "Abordar libremente el Triángulo de Finochietto, ya que las intervenciones están permitidas allí.",
      "Realizar la incisión exclusivamente por encima del borde inferior de la mandíbula.",
      "Diseccionar el triángulo inferior, ya que allí se localiza de forma fija el submentoniano de Jaffé."
    ],
    "correcta": 0,
    "pista": "Relacione la prohibición operatoria ('no quirúrgico') con los límites exactos de la región que contiene a este nervio.",
    "explicacion": "La correcta es la opción 0 porque el submentoniano de Jaffé se ubica en el triángulo superior (Finochietto), el cual está limitado por el tendón del digástrico, el hioides y el borde inferior mandibular, estando catalogado como zona donde no se interviene. Los distractores falsean los límites o la conducta quirúrgica."
  },
  {
    "id": "UBA_VII_TM_015_INT",
    "pregunta": "Asocie correctamente el músculo de la mímica cutánea del cuello con el ramo terminal del nervio facial encargado de su control motor según el programa de la materia:",
    "opciones": [
      "Cutáneo del cuello — Ramo cervical del Grupo inferior.",
      "Cutáneo del cuello — Nervio Marginal de Bockenheimer.",
      "Triangular de los labios — Ramo cervical del Grupo inferior.",
      "Músculo frontal — Rama Palpebral del Grupo superior."
    ],
    "correcta": 0,
    "pista": "El texto especifica el músculo inervado por el ramo cervical inmediatamente al lado de su nombre entre paréntesis.",
    "explicacion": "La correcta es la opción 0 porque textualmente la fuente expone: 'Ramo cervical (inerva al cutáneo del cuello)'. Los distractores cruzan erróneamente los ramos con otros músculos faciales."
  },
  {
    "id": "UBA_VII_TM_016_DIF",
    "pregunta": "Al analizar las subdivisiones de los ramos terminales del facial, ¿qué elemento anatómico diferencia funcionalmente al Grupo medio del Grupo intermedio?",
    "opciones": [
      "El Grupo medio inerva los músculos por encima de la comisura labial, mientras que el Grupo intermedio inerva al buccinador y al triangular de los labios.",
      "El Grupo medio corre inferior al conducto de Stenon, mientras que el Grupo intermedio corre superior.",
      "El Grupo medio inerva al músculo frontal, mientras que el Grupo intermedio inerva al semiorbicular inferior.",
      "El Grupo medio es exclusivamente sensitivo, mientras que el Grupo intermedio posee fibras parasimpáticas secretoras."
    ],
    "correcta": 0,
    "pista": "Compare la lista de músculos efectores asignada a la porción paralela al conducto parotídeo frente a la porción media/baja.",
    "explicacion": "La correcta es la opción 0 porque la fuente detalla que el Grupo medio inerva músculos por encima de la comisura (canino, elevadores, cigomáticos) y el Grupo intermedio inerva específicamente al buccinador y triangular de los labios. Los distractores contienen relaciones o funciones falsas no descritas."
  },
  {
    "id": "UBA_VII_TM_017_INT",
    "pregunta": "Dentro del Grupo superior de las ramas terminales del facial, ¿cuáles son las estructuras diana de la Rama Temporal?",
    "opciones": [
      "El auricular anterior y el pabellón de la oreja.",
      "El músculo frontal exclusivamente.",
      "El semiorbicular superior y el superciliar.",
      "El conducto auditivo externo y la fosa temporal."
    ],
    "correcta": 0,
    "pista": "Se trata de las estructuras enumeradas inmediatamente después del término 'Rama Temporal' en el desglose del grupo superior.",
    "explicacion": "La correcta es la opción 0 porque el texto indica de forma explícitamente textual: 'Rama Temporal → auricular anterior y del pabellón de la oreja'. Las demás opciones corresponden a las ramas frontal o palpebral, o a conceptos ajenos a la ventana."
  },
  {
    "id": "UBA_VII_TM_018_DIF",
    "pregunta": "Si un paciente conserva la capacidad de arrugar la frente (músculo frontal) pero no puede cerrar el párpado superior con fuerza (semiorbicular superior), ¿qué componentes del Grupo superior demuestran una afectación disociada?",
    "opciones": [
      "Indemnidad de la Rama Frontal con lesión selectiva de la Rama Palpebral.",
      "Indemnidad de la Rama Temporal con lesión selectiva de la Rama Frontal.",
      "Lesión del Grupo intercalado con indemnidad total del Grupo superior.",
      "Lesión de la Rama Palpebral con indemnidad de la Rama Temporal."
    ],
    "correcta": 0,
    "pista": "Mapee cada músculo con su rama respectiva dentro del Grupo superior: Rama Frontal para el frontal y Rama Palpebral para el semiorbicular superior.",
    "explicacion": "La correcta es la opción 0 porque el texto asigna el músculo frontal a la Rama Frontal y el semiorbicular superior a la Rama Palpebral. Para perder la función del semiorbicular superior manteniendo el frontal, debe dañarse selectivamente la Rama Palpebral. Las demás combinaciones no se corresponden con las asignaciones musculares del texto."
  },
  {
    "id": "UBA_VII_TM_019_INT",
    "pregunta": "Según la nomenclatura y distribución de ramos adoptada por la Cátedra, ¿cuál de las siguientes estructuras NO forma parte de los músculos inervados por el Grupo medio?",
    "opciones": [
      "Músculo buccinador.",
      "Músculo canino.",
      "Músculo cigomático.",
      "Músculo elevador propio del labio superior."
    ],
    "correcta": 0,
    "pista": "Este músculo de la mejilla está explícitamente catalogado bajo la órbita del Grupo intermedio, no del Grupo medio.",
    "explicacion": "La correcta es la opción 0 porque el músculo buccinador pertenece al 'Grupo intermedio' según la fuente. El canino, cigomáticos y los elevadores pertenecen al 'Grupo medio' (músculos por encima de la comisura labial)."
  },
  {
    "id": "UBA_VII_TM_020_DIF",
    "pregunta": "En una lesión completa que involucre de forma conjunta al Grupo intermedio y al Grupo inferior de los ramos terminales del facial, ¿cuál de los siguientes pares musculares perderá por completo su inervación motora?",
    "opciones": [
      "Músculo buccinador y músculo cutáneo del cuello.",
      "Músculo frontal y músculo semiorbicular inferior.",
      "Músculos de la pirámide nasal y músculo canino.",
      "Músculo superciliar y músculo cigomático."
    ],
    "correcta": 0,
    "pista": "Busque un par muscular donde uno pertenezca al grupo intermedio y el otro al grupo inferior según el texto.",
    "explicacion": "La correcta es la opción 0 porque el buccinador pertenece al Grupo intermedio y el cutáneo del cuello pertenece al Grupo inferior (inervado por el ramo cervical). Los distractores mezclan músculos correspondientes a los grupos superior, intercalado o medio."
  },
  {
    "id": "UBA_VII_TM_021_INT",
    "pregunta": "En la organización general de los ramos terminales, ¿qué nombre recibe el ramillete o grupo que se sitúa inmediatamente por encima del Grupo medio y que se encarga de inervar la porción inferior del músculo orbicular de los ojos?",
    "opciones": [
      "Grupo intercalado o suborbitario.",
      "Grupo superior.",
      "Grupo intermedio.",
      "Grupo inferior."
    ],
    "correcta": 0,
    "pista": "Este grupo inerva al semiorbicular inferior y a los músculos del dorso nasal.",
    "explicacion": "La correcta es la opción 0 porque el texto denomina a esta sección como 'Grupo intercalado o suborbitario' y le asigna la inervación del 'Semiorbicular inferior'. Las demás opciones representan otros niveles de ramificación."
  },
  {
    "id": "UBA_VII_TM_022_DIF",
    "pregunta": "Analizando la ramificación terminal del nervio facial, si se produce una sección quirúrgica accidental del Nervio Marginal de Bockenheimer, ¿qué grupo terminal se ve afectado y qué otra rama de ese mismo grupo conserva su función si la lesión fue distal?",
    "opciones": [
      "Se afecta el Grupo inferior; conserva su función el Ramo cervical.",
      "Se afecta el Grupo intermedio; conserva su función el nervio del buccinador.",
      "Se afecta el Grupo medio; conserva su función la rama paralela a Stenon.",
      "Se afecta el Grupo intercalado; conserva su función el ramo suborbitario."
    ],
    "correcta": 0,
    "pista": "Identifique a qué grupo pertenece el nervio marginal mencionado y cuál es el otro nervio constituyente de ese mismo par.",
    "explicacion": "La correcta es la opción 0 porque el Nervio Marginal de Bockenheimer es uno de los dos nervios que forman el 'Grupo inferior'. El otro componente es el 'Ramo cervical'. Por ende, una lesión selectiva del primero afecta al grupo inferior pero permite la indemnidad distal del ramo cervical."
  },
  {
    "id": "UBA_VII_TM_023_INT",
    "pregunta": "De acuerdo con el texto de estudio, ¿cuál es el destino motor específico de la Rama Frontal perteneciente al Grupo superior?",
    "opciones": [
      "Músculo frontal.",
      "Auricular anterior.",
      "Semiorbicular superior.",
      "Músculo superciliar."
    ],
    "correcta": 0,
    "pista": "La rama lleva el mismo nombre del músculo diana de la región supraciliar de la frente.",
    "explicacion": "La correcta es la opción 0 porque el texto asocia de forma directa: 'Rama Frontal → músculo frontal'. Los distractores corresponden a los destinos de la Rama Temporal o de la Rama Palpebral."
  },
  {
    "id": "UBA_VII_TM_024_DIF",
    "pregunta": "Al realizar una incisión sobre la región mandibular inferior, un cirujano diseca una zona limitada hacia abajo por el hioides y el tendón del digástrico, y hacia arriba por la mandíbula. ¿Cómo se denomina este espacio y qué ramo nervioso contiene?",
    "opciones": [
      "Triángulo de Finochietto; contiene al submentoniano de Jaffé.",
      "Triángulo inferior; contiene al submentoniano de Jaffé.",
      "Triángulo de Finochietto; contiene al nervio marginal de Bockenheimer.",
      "Triángulo inferior; contiene al ramo cervical del facial."
    ],
    "correcta": 0,
    "pista": "Es el triángulo superior de la región y alberga un ramo considerado 'no quirúrgico'.",
    "explicacion": "La correcta es la opción 0 porque los límites señalados corresponden exactamente al Triángulo de Finochietto (triángulo superior), el cual alberga al submentoniano de Jaffé según la información literal de la ventana de trabajo. Las demás opciones alteran el nombre del espacio o del ramo nervioso contenido."
  },
  {
    "id": "UBA_VII_TM_025_INT",
    "pregunta": "Con respecto a las intervenciones en los espacios submandibulares delimitados por el tendón del digástrico y el hioides, ¿cuál es la consideración clínica del Triángulo de Finochietto?",
    "opciones": [
      "Es un espacio no quirúrgico.",
      "Es un espacio donde sí se pueden realizar intervenciones quirúrgicas libremente.",
      "Es un espacio destinado exclusivamente a la ligadura de la arteria lingual.",
      "Es un espacio de tránsito para el nervio vago e hipogloso mayor."
    ],
    "correcta": 0,
    "pista": "Observe la aclaración entre paréntesis que acompaña a la estructura contenida en este triángulo.",
    "explicacion": "La correcta es la opción 0 porque el texto asocia al submentoniano de Jaffé ubicado en el Triángulo de Finochietto con la aclaración '(no quirúrgico)'. En contraposición, aclara que en el triángulo inferior sí se pueden realizar intervenciones."
  },
  {
    "id": "UBA_VII_TM_026_DIF",
    "pregunta": "Un procedimiento quirúrgico lesiona selectivamente los ramos del Grupo superior destinados al músculo auricular anterior y al pabellón de la oreja, pero conserva intactos los filetes para los músculos de la frente y de la porción superior de la órbita. ¿Cómo se interpreta este hallazgo según la distribución descrita en el texto?",
    "opciones": [
      "Se ha producido una lesión aislada de la Rama Temporal, con indemnidad de las Ramas Frontal y Palpebral del mismo grupo.",
      "Se ha lesionado el Grupo intercalado o suborbitario, quedando preservado el tronco de la Rama Temporal superior.",
      "Se afectaron los componentes del Grupo medio que corren paralelos al conducto de Stenon.",
      "Existe un compromiso exclusivo de la Rama Frontal del facial con conservación de la Rama Palpebral profunda."
    ],
    "correcta": 0,
    "pista": "Mapee las tres subdivisiones específicas que el texto describe de manera interna para el denominado 'Grupo superior'.",
    "explicacion": "La correcta es la opción 0 porque el texto de la Cátedra explicita que el Grupo superior se divide en: Rama Temporal (para el auricular anterior y pabellón de la oreja), Rama Frontal (para el músculo frontal) y Rama Palpebral (para el semiorbicular superior y superciliar). Por ende, una pérdida selectiva en el pabellón y auricular anterior denota daño exclusivo de la Rama Temporal, preservando las otras dos."
  },
  {
    "id": "UBA_VII_TM_027_DIF",
    "pregunta": "Durante la disección anatómica de la región suprahioidea, se exponen dos compartimentos separados por el tendón del digástrico. Si se requiere trabajar en un área que permita intervenciones quirúrgicas seguras sin exponer el ramo submentoniano de Jaffé, ¿cuál es la conducta correcta basándose en los límites del texto?",
    "opciones": [
      "Operar exclusivamente en el triángulo inferior, limitado hacia arriba por el tendón del digástrico y hacia abajo por el hueso hioides.",
      "Abordar el Triángulo de Finochietto, limitado hacia arriba por el borde inferior de la mandíbula.",
      "Realizar una incisión paralela al conducto de Stenon en el triángulo clasificado como superior.",
      "Evitar ambos espacios suprahioideos debido a que el submentoniano de Jaffé discurre de forma fija en el hioides."
    ],
    "correcta": 0,
    "pista": "Recuerde cuál de los dos triángulos suprahioideos (el superior o el inferior) está catalogado textualmente como apto para intervenciones.",
    "explicacion": "La correcta es la opción 0 porque el texto determina que el Triángulo de Finochietto es el superior, alberga al submentoniano de Jaffé y es 'no quirúrgico'. En cambio, explicita que 'En el triangulo inferior sí se pueden realizar intervenciones', el cual está limitado hacia arriba por el tendón del digástrico y hacia abajo por el hueso hioides."
  }
],
"temas diferenciados parte 9":[
  {
    "id": "UBA_XII_001",
    "pregunta": "¿Cómo se clasifica funcionalmente el nervio hipogloso (par XII) y cuál es su destino general según el texto de la Cátedra?",
    "opciones": [
      "Es un nervio exclusivamente motor, destinado a la musculatura de la lengua y a los músculos infrahioideos.",
      "Es un nervio mixto con predominio motor, destinado a la musculatura lingual y suprahioidea.",
      "Es un nervio motor y sensitivo-propioceptivo, destinado a la lengua y a la mucosa del suelo de la boca.",
      "Es un nervio motor y autónomo parasimpático, destinado a las glándulas sublingual y submaxilar."
    ],
    "correcta": 0,
    "pista": "Revise el encabezado del Par XII al inicio de la página 97, donde se especifica taxativamente su tipo y sus dos grandes grupos musculares de destino.",
    "explicacion": "El texto define explícitamente al par XII como 'Tipo: motor' y añade que es un 'Nervio destinado a la musculatura de la lengua y a los músculos infrahioideos'. Los distractores mencionan componentes mixtos, sensitivos o autónomos que no figuran en la descripción textual de la ventana de trabajo."
  },
  {
    "id": "UBA_XII_002",
    "pregunta": "¿Cuál es la localización exacta del origen real de las fibras del nervio hipogloso?",
    "opciones": [
      "En el núcleo del hipogloso, situado en el bulbo raquídeo, correspondiente al ala blanca interna de la fosa romboidal.",
      "En el núcleo ambiguo, localizado en la porción posterior del bulbo raquídeo.",
      "En la fosita preolivar del bulbo raquídeo, adyacente a las pirámides anteriores.",
      "En el núcleo somatomotor del suelo del cuarto ventrículo, a nivel de la protuberancia anular."
    ],
    "correcta": 0,
    "pista": "Busque la correspondencia anatómica macroscópica del núcleo dentro del cuarto ventrículo señalada en el texto bajo 'Origen real'.",
    "explicacion": "La ventana de trabajo estipula que el origen real es el 'Núcleo del hipogloso: situado en el bulbo raquídeo. Corresponde al ala blanca interna de la fosa romboidal'. Los distractores mencionan el núcleo ambiguo (otro núcleo bulbar), la fosita preolivar (que es su origen aparente) o una localización protuberancial incorrecta."
  },
  {
    "id": "UBA_XII_003",
    "pregunta": "¿A través de qué reparo anatómico macroscópico emerge el nervio hipogloso del tronco encefálico (origen aparente)?",
    "opciones": [
      "Por el surco preolivar (o fosita preolivar) del bulbo raquídeo, mediante 10 a 15 filetes radiculares.",
      "Por el surco retroolivar del bulbo raquídeo, por encima del nervio accesorio.",
      "Por el surco bulboprotuberancial, por encima de las pirámides bulbares.",
      "Por la fosa interpeduncular, lateralmente al agujero ciego."
    ],
    "correcta": 0,
    "pista": "Distinga entre el surco anterior y el posterior en relación con la oliva bulbar, y observe el número de filetes indicados.",
    "explicacion": "Según el texto, el origen aparente se da 'Por el surco preolivar (fosita preolivar) del bulbo por medio de 10 a 15 filetes'. Las demás opciones ubican erróneamente la salida en el surco retroolivar o en otros niveles del tronco encefálico."
  },
  {
    "id": "UBA_XII_004",
    "pregunta": "Durante su trayecto intracraneal y antes de abandonar el cráneo, ¿qué comportamiento presentan las raíces del nervio hipogloso?",
    "opciones": [
      "Los filetes radiculares se dirigen hacia afuera y adelante, reuniéndose en dos fascículos que atraviesan la duramadre por orificios independientes.",
      "Los filetes se fusionan inmediatamente en un tronco único que perfora la duramadre en la fosa craneal media.",
      "Los filetes se dirigen hacia atrás y afuera para ingresar directamente al agujero rasgado posterior.",
      "Los filetes se comunican con el nervio neumogástrico antes de organizarse en fascículos durales."
    ],
    "correcta": 0,
    "pista": "Lea la sección de 'Trayecto' en la página 97, prestando atención a la dirección, la división en fascículos y la relación con la duramadre.",
    "explicacion": "El texto describe de forma precisa: 'Los filetes se dirigen hacia fuera y adelante. Se reúnen en dos fascículos que perforan la duramadre por dos orificios independientes'. Las demás opciones contradicen la dirección o el modo de atravesar la duramadre explicitado en la fuente."
  },
  {
    "id": "UBA_XII_005",
    "pregunta": "¿Qué accidente óseo de la base del cráneo atraviesa el nervio hipogloso para pasar de la cavidad craneal a la región supracervical?",
    "opciones": [
      "El conducto condíleo anterior (agujero condíleo anterior).",
      "El agujero condíleo posterior.",
      "El agujero rasgado posterior (foramen yugular).",
      "El conducto auditivo interno."
    ],
    "correcta": 0,
    "pista": "Busque el conducto óseo específico donde el texto menciona que los fascículos se unen finalmente en un solo tronco.",
    "explicacion": "El texto detalla que los fascículos 'se introducen en el conducto condíleo anterior (agujero condíleo anterior) donde se van a unir para formar un solo tronco'. Los distractores son otros orificios de la base del cráneo no indicados para este par craneal en el texto."
  },
  {
    "id": "UBA_XII_006",
    "pregunta": "Al emerger del conducto condíleo anterior, el nervio hipogloso ingresa a un espacio anatómico específico. ¿Cuál es este espacio y con qué estructuras vasculonerviosas se relaciona estrechamente?",
    "opciones": [
      "El espacio retroestíleo, ubicándose por detrás de la arteria carótida interna y por dentro del paquete vasculonervioso.",
      "El espacio preestíleo, situándose por fuera de la arteria carótida externa y de la vena yugular interna.",
      "El espacio retroestíleo, situándose por detrás de la vena yugular interna y por fuera de la carótida externa.",
      "La fosa pterigomaxilar, relacionándose de manera inmediata con la arteria maxilar interna."
    ],
    "correcta": 0,
    "pista": "Revise el apartado 'En el espacio retroestileo' al final de la página 97 y observe su posición exacta respecto a la carótida interna y al paquete vasculonervioso.",
    "explicacion": "La ventana de trabajo estipula textualmente: 'Al salir del conducto condíleo anterior penetra en el espacio retroestileo. Se ubica por detrás de la arteria carótida interna, por dentro del paquete vasculonervioso'. Las demás opciones alteran las relaciones topográficas o el espacio respectivo."
  },
  {
    "id": "UBA_XII_007",
    "pregunta": "Durante su descenso por el espacio retroestíleo, el par XII describe una relación íntima y un trayecto particular respecto al nervio neumogástrico (par X). ¿Cómo se describe esta relación en el texto?",
    "opciones": [
      "Se encuentra aplicado a la cara posterior del ganglio plexiforme del neumogástrico, introduciéndose en un canal o labrado sobre este.",
      "Pasa libremente por fuera del nervio neumogástrico sin establecer contacto íntimo con sus ganglios.",
      "Se sitúa por delante del ganglio yugular del neumogástrico, cruzándolo en ángulo recto.",
      "Se anastomosa con el ramo comunicante del neumogástrico antes de alcanzar la celda parotídea."
    ],
    "correcta": 0,
    "pista": "Busque el término específico 'ganglio plexiforme' en la página 97 y analice cómo interactúa físicamente el hipogloso con él.",
    "explicacion": "El texto explicita que en el espacio retroestíleo, el nervio hipogloso 'Está aplicado a la cara posterior del ganglio plexiforme del neumogástrico, parece labrado en él'. Las demás opciones proponen relaciones topográficas o ganglios incorrectos según la fuente."
  },
  {
    "id": "UBA_XII_008",
    "pregunta": "Al continuar su trayecto descendente, ¿cuál es el comportamiento relacional del nervio hipogloso respecto a los vasos carotídeos y la vena yugular interna en la región cervical lateral?",
    "opciones": [
      "Desciende por fuera de la arteria carótida interna y de la arteria carótida externa, cruzando la cara externa de esta última por debajo de la arteria occipital.",
      "Pasa por el espacio comprendido entre la arteria carótida interna y la arteria carótida externa, discurriendo por dentro de la vena yugular interna.",
      "Cruza por detrás de la bifurcación carotídea y discurre por dentro de la arteria carótida externa.",
      "Desciende verticalmente por el canal que forman la arteria carótida interna y la vena yugular interna, sin cruzar ninguna rama arterial lateralmente."
    ],
    "correcta": 0,
    "pista": "Siga el trayecto descrito al final de la página 97 e inicio de la 98, identificando por el lado de qué cara de las arterias pasa el nervio y cuál colateral arterial sirve de hito.",
    "explicacion": "El texto señala: 'Luego desciende por fuera de la arteria carótida interna y luego por fuera de la arteria carótida externa (cruza la cara externa de la carótida externa por debajo de la arteria occipital)'. Los distractores plantean trayectos mediales o intercarotídeos que contradicen la fuente."
  },
  {
    "id": "UBA_XII_009",
    "pregunta": "Al cruzar la arteria carótida externa, el nervio hipogloso modifica su dirección espacial. ¿Hacia dónde se dirige y qué estructura muscular cruza por su cara superficial en ese momento?",
    "opciones": [
      "Se dirige hacia adelante y arriba, cruzando la cara externa del músculo hiogloso.",
      "Se dirige hacia abajo y atrás, cruzando la cara profunda del músculo estilohioideo.",
      "Se dirige horizontalmente hacia adelante, pasando por dentro del músculo genihioideo.",
      "Se dirige hacia afuera, perforando el vientre posterior del músculo digástrico."
    ],
    "correcta": 0,
    "pista": "Examine el inicio de la página 98 para identificar el cambio de orientación del nervio y el músculo lingual clave con el que se relaciona por fuera.",
    "explicacion": "La ventana de trabajo describe: 'Se dirige hacia adelante y arriba, cruzando la cara externa del músculo hiogloso'. Los distractores sugieren direcciones u orientaciones musculares incorrectas (como pasar por dentro o ir hacia atrás) que no se corresponden con el texto."
  },
  {
    "id": "UBA_XII_010",
    "pregunta": "¿Qué vasos sanguíneos acompañan al nervio hipogloso en su trayecto sobre la cara externa del músculo hiogloso, y cuáles discurren por dentro de dicho músculo?",
    "opciones": [
      "Las venas linguales superficiales lo acompañan por fuera, mientras que la arteria lingual pasa por dentro del músculo hiogloso.",
      "La arteria lingual lo acompaña por fuera, mientras que las venas linguales profundas pasan por dentro del músculo.",
      "Tanto la arteria como las venas linguales acompañan al nervio por su cara externa.",
      "La arteria facial y sus venas satélites cruzan al nervio por fuera, aislando al músculo de la circulación lingual."
    ],
    "correcta": 0,
    "pista": "Busque la aclaración entre paréntesis en la página 98 que diferencia netamente la posición del nervio/venas respecto a la de la arteria homónima.",
    "explicacion": "El texto especifica de forma contundente: '(el nervio está acompañado por las venas linguales superficiales, la arteria lingual pasa por dentro del hiogloso)'. Las demás opciones confunden la disposición anatómica de la arteria y las venas en relación con el músculo hiogloso."
  },
  {
    "id": "UBA_XII_011",
    "pregunta": "Durante su trayecto en la región suprahioidea, el par XII se introduce en un espacio delimitado por estructuras glandulares y musculares. ¿Cuáles son estos límites según el texto?",
    "opciones": [
      "Por fuera se encuentra la glándula submaxilar y por dentro el músculo hiogloso.",
      "Por fuera se encuentra el músculo milohioideo y por dentro la glándula parótida.",
      "Por fuera se encuentra la glándula sublingual y por dentro el músculo genihioideo.",
      "Por dentro se encuentra la glándula submaxilar y por fuera el tendón intermedio del digástrico."
    ],
    "correcta": 0,
    "pista": "Revise el segundo párrafo de la página 98 para identificar las relaciones interna (por dentro) y externa (por fuera) del nervio en este sector.",
    "explicacion": "El texto define claramente la ubicación en este tramo: 'Por fuera se va a encontrar la glándula submaxilar, y por dentro el músculo hiogloso'. Los distractores mezclan otras glándulas o invierten los límites anatómicos citados."
  },
  {
    "id": "UBA_XII_012",
    "pregunta": "Al continuar su trayecto hacia la región anterior, el nervio hipogloso pasa por encima de un hito muscular específico antes de llegar a la lengua. ¿Cuál es ese músculo?",
    "opciones": [
      "El músculo milohioideo.",
      "El músculo estilohioideo.",
      "El músculo genihioideo.",
      "El músculo hioogloso."
    ],
    "correcta": 0,
    "pista": "Lea la frase inmediata posterior a la descripción de la glándula submaxilar en la página 98.",
    "explicacion": "La ventana de trabajo estipula textualmente: 'Luego va a pasar por encima del músculo milohioideo para llegar a la lengua'. Las otras opciones son músculos de la región pero no corresponden al trayecto descrito justo antes de abordar la masa lingual."
  },
  {
    "id": "UBA_XII_013",
    "pregunta": "El texto menciona un ramo colateral del nervio hipogloso de naturaleza sensitiva que se distribuye en las meninges de la fosa craneal posterior. ¿Cómo nace y qué particularidad funcional presenta?",
    "opciones": [
      "Es el ramo meníngeo o recurrente, que nace en el conducto condíleo anterior y cuyas fibras sensitivas provienen en realidad de una anastomosis con el plexo cervical (C1 y C2).",
      "Es el ramo meníngeo propio, que se origina directamente del núcleo del hipogloso en el bulbo.",
      "Es el ramo recurrentes del neumogástrico que se incorpora al hipogloso a nivel del agujero rasgado posterior.",
      "Es el ramo simpático meníngeo, originado a partir del plexo carotídeo interno dentro del conducto de la carótida."
    ],
    "correcta": 0,
    "pista": "Examine la sección 'Ramas colaterales' en la página 98, prestando atención al origen real de las fibras sensitivas de este ramo.",
    "explicacion": "El texto indica: '1- Ramo meníngeo o recurrente: nace en el conducto condíleo anterior, se distribuye por las meninges de la fosa occipital. Aporta la sensibilidad a esta zona (sus fibras sensitivas provienen de la anastomosis con el plexo cervical C1 y C2)'. Los distractores omiten o distorsionan este origen anastomótico extra-trigeminal."
  },
  {
    "id": "UBA_XII_014",
    "pregunta": "¿Cuál es el destino anatómico y el trayecto inicial del ramo colateral denominado 'descendente' o 'rama descendente' del nervio hipogloso?",
    "opciones": [
      "Nace cuando el hipogloso cruza a la arteria carótida interna, desciende por delante del paquete vasculonervioso y se anastomosa con el plexo cervical para formar el asa del hipogloso.",
      "Nace en el interior del conducto condíleo anterior, desciende por detrás de la vena yugular interna y termina directamente en el músculo esternocleidomastoideo.",
      "Nace al nivel de la glándula submaxilar, desciende por fuera del músculo milohioideo y termina en el vientre anterior del digástrico.",
      "Nace en la fosa romboidal, desciende junto al fascículo longitudinal posterior y termina en los núcleos vestibulares."
    ],
    "correcta": 0,
    "pista": "Mire el punto número 2 de las ramas colaterales. Identifique dónde se origina, por dónde desciende y con qué estructura se anastomosa.",
    "explicacion": "El texto establece: '2- Rama descendente: nace cuando el hipogloso cruza a la arteria carótida interna. Desciende por delante del paquete vasculonervioso del cuello, se anastomosa con el ramo descendente del plexo cervical formando el ASA DEL HIPOGLOSO'. Las otras opciones modifican el origen, las relaciones vasculares o el destino de la anastomosis."
  },
  {
    "id": "UBA_XII_015",
    "pregunta": "De acuerdo con la organización descrita para el asa del hipogloso, ¿qué músculos específicos reciben inervación motora a partir de los ramos nacidos de esta estructura?",
    "opciones": [
      "Todos los músculos infrahioideos, excepto el músculo tirohioideo.",
      "Únicamente los músculos esternotiroideo y omohioideo.",
      "Todos los músculos suprahioideos e infrahioideos por igual.",
      "Los músculos tirohioideo, genihioideo y estilohioideo."
    ],
    "correcta": 0,
    "pista": "Lea detenidamente la aclaración entre paréntesis que acompaña a la descripción del asa del hipogloso en la página 98.",
    "explicacion": "La ventana de trabajo especifica textualmente: '(del asa del hipogloso nacen ramos para todos los músculos infrahioideos menos para el tirohioideo)'. Los distractores afirman incorrectamente que inerva al tirohioideo o limitan la inervación a solo dos músculos."
  },
  {
    "id": "UBA_XII_016",
    "pregunta": "¿Qué ramo colateral del nervio hipogloso proporciona inervación motora al músculo tirohioideo y cuál es la particularidad de sus fibras según el texto?",
    "opciones": [
      "El ramo del tirohioideo, que nace por delante de la carótida externa y cuyas fibras motoras derivan de la anastomosis con el plexo cervical.",
      "La rama descendente del hipogloso, cuyas fibras se originan directamente en el núcleo bulbar del par XII.",
      "El ramo meníngeo recurrente, que desvía filetes motores hacia la región anterior del cuello.",
      "El ramo anastomótico para el nervio lingual, que intercambia fibras motoras a nivel del suelo de la boca."
    ],
    "correcta": 0,
    "pista": "Busque la colateral número 3 en la lista de ramas de la página 98. Observe de dónde provienen funcionalmente las fibras.",
    "explicacion": "El texto detalla: '3- Ramo del tirohioideo: nace por delante de la carótida externa... inerva al músculo tirohioideo (sus fibras provienen de la anastomosis con el plexo cervical)'. Las opciones incorrectas le atribuyen este rol a la rama descendente o sitúan el origen puramente en el núcleo motor del par XII."
  },
  {
    "id": "UBA_XII_017",
    "pregunta": "Entre las ramas colaterales destinadas a los músculos de la región suprahioidea y lingual, ¿cuáles son taxativamente enumeradas en las páginas 98 y 99 bajo los números 4, 5 y 6?",
    "opciones": [
      "El ramo del hiogloso, el ramo del estilogloso y el ramo del genihioideo.",
      "El ramo del milohioideo, el ramo del genihioideo y el ramo del estilohioideo.",
      "El ramo del palatogloso, el ramo del faringogloso y el ramo del amigdalogloso.",
      "El ramo del vientre posterior del digástrico, el ramo del estilohioideo y el ramo del hiogloso."
    ],
    "correcta": 0,
    "pista": "Revise de forma estricta los ítems 4, 5 y 6 situados entre el final de la página 98 y el inicio de la página 99.",
    "explicacion": "El texto enumera explícitamente: '4- Ramo del hiogloso... 5- Ramo del estilogloso... 6- Ramo del genihioideo'. Los distractores incluyen músculos inervados por otros pares craneales (como el milohioideo por el V, o el estilohioideo por el VII) o componentes que no figuran en dicho listado de la ventana de trabajo."
  },
  {
    "id": "UBA_XII_018",
    "pregunta": "Con respecto a las fibras que componen el ramo del músculo genihioideo (colateral número 6 del hipogloso), ¿qué especificación de origen real introduce el texto de la Cátedra?",
    "opciones": [
      "Sus fibras motoras provienen de la anastomosis con el plexo cervical.",
      "Sus fibras motoras se originan directamente de la porción más rostral del núcleo del hipogloso.",
      "Sus fibras son de carácter vegetativo simpático, procedentes del ganglio cervical superior.",
      "Sus fibras son puramente propioceptivas, destinadas a los husos neuromusculares linguales."
    ],
    "correcta": 0,
    "pista": "Lea el texto entre paréntesis inmediatamente posterior a la mención del 'Ramo del genihioideo' al principio de la página 99.",
    "explicacion": "La ventana de trabajo aclara explícitamente: '6- Ramo del genihioideo (sus fibras provienen de la anastomosis con el plexo cervical)'. Los distractores omiten esta indicación o proponen orígenes nucleares contrarios a la letra del texto."
  },
  {
    "id": "UBA_XII_019",
    "pregunta": "¿Dónde se originan exactamente los ramos terminales del nervio hipogloso y cuál es su destino anatómico final?",
    "opciones": [
      "Se originan una vez que el nervio alcanza y se apoya en la cara externa del músculo geniogloso, destinándose a los fascículos musculares de la lengua.",
      "Se originan al perforar el músculo milohioideo, distribuyéndose por la mucosa lingual del tercio posterior.",
      "Se originan en el espesor de la glándula sublingual, distribuyéndose por las papilas circunvaladas.",
      "Se originan por detrás del músculo hiogloso, dirigiéndose exclusivamente al septum lingual."
    ],
    "correcta": 0,
    "pista": "Diríjase al último apartado de la página 99 titulado 'Ramas terminales' y observe el reparo muscular externo sobre el cual se apoya el nervio.",
    "explicacion": "El texto indica de manera unívoca: 'Ramas terminales: Una vez que alcanza (se apoya) la cara externa del geniogloso, emite sus ramos terminales destinados a los fascículos musculares de la lengua'. Los distractores mencionan otras relaciones musculares, glandulares o destinos mucosos que no están avalados por el fragmento."
  },
  {
    "id": "UBA_XII_020",
    "pregunta": "Según la información provista en la última línea de la ventana de trabajo (página 99), ¿con qué nervio de la región establece el hipogloso sus 'importantes anastomosis' terminales?",
    "opciones": [
      "Con el nervio lingual.",
      "Con el nervio glosofaríngeo.",
      "Con el nervio cuerda del tímpano.",
      "Con el nervio milohioideo."
    ],
    "correcta": 0,
    "pista": "Mire el cierre absoluto del documento de la ventana de trabajo para identificar el nervio anastomótico nombrado.",
    "explicacion": "La frase de cierre de la página 99 dice textualmente: 'Tiene importantes anastomosis con el nervio lingual'. Los distractores representan otros nervios sensitivos o motores de la vecindad que no son mencionados en este fragmento como tal."
  },
  {
    "id": "UBA_XII_021",
    "pregunta": "Un estudiante de odontología analiza el trayecto del nervio hipogloso y observa que se relaciona con dos arterias caróideas. Si se considera la secuencia del flujo de salida desde el cráneo, ¿cuál es el orden preciso y las relaciones de cruzamiento con estas arterias?",
    "opciones": [
      "Primero desciende por fuera de la arteria carótida interna y luego por fuera de la arteria carótida externa, cruzando la cara externa de esta última por debajo del nacimiento de la arteria occipital.",
      "Primero se ubica por dentro de la arteria carótida interna y posteriormente cruza la cara interna de la arteria carótida externa.",
      "Desciende medial a la arteria carótida interna para luego emerger entre la carótida externa y la arteria facial.",
      "Cruza de forma exclusiva la cara profunda de la arteria carótida interna y luego rodea el tronco común de las arterias lingual y facial."
    ],
    "correcta": 0,
    "pista": "Integre los datos topográficos que unen el final de la página 97 con el inicio de la página 98, rastreando el término 'por fuera'.",
    "explicacion": "El texto integra cronológicamente el trayecto: 'Al salir del conducto condíleo anterior... penetra en el espacio retroestileo. Se ubica por detrás de la arteria carótida interna... Luego desciende por fuera de la arteria carótida interna y luego por fuera de la arteria carótida externa (cruza la cara externa de la carótida externa por debajo de la arteria occipital)'. Las demás opciones alteran radicalmente las relaciones 'por fuera' descritas en la fuente."
  },
  {
    "id": "UBA_XII_022",
    "pregunta": "En una disección anatómica del suelo de la boca, se desea identificar al nervio hipogloso sobre la cara externa del músculo hiogloso. Para evitar confusiones con la arteria lingual, ¿qué criterio topográfico estricto debe aplicarse según la Cátedra?",
    "opciones": [
      "El nervio hipogloso discurre por la cara externa del músculo hiogloso acompañado por las venas linguales superficiales, mientras que la arteria lingual pasa por dentro (cara profunda) de dicho músculo.",
      "La arteria lingual y el nervio hipogloso viajan juntos por la cara externa, separados únicamente por las venas linguales profundas.",
      "El nervio hipogloso se introduce por dentro del músculo hiogloso, mientras que la arteria lingual corre por encima del músculo milohioideo.",
      "El nervio pasa por fuera de la glándula submaxilar, aislándose por completo de la cara externa del hiogloso, el cual es reservado para la arteria."
    ],
    "correcta": 0,
    "pista": "Recuerde la distinción de planos que hace la guía mediante el uso de paréntesis al describir el trayecto suprahioideo en la página 98.",
    "explicacion": "El texto es muy preciso al discriminar los planos vasculonerviosos respecto al hiogloso: '(el nervio está acompañado por las venas linguales superficiales, la arteria lingual pasa por dentro del hiogloso)'. Por ende, encontrar elementos en la cara externa descarta a la arteria lingual, validando al nervio y sus venas satélites. Los distractores falsean estas posiciones relativas."
  },
  {
    "id": "UBA_XII_023",
    "pregunta": "Si un paciente presenta una lesión selectiva que afecta exclusivamente a los ramos motores originados directamente a partir de la estructura denominada 'Asa del Hipogloso', ¿cuál de los siguientes músculos conservará intacta su inervación de acuerdo con el texto?",
    "opciones": [
      "Músculo tirohioideo.",
      "Músculo esternotiroideo.",
      "Músculo omohioideo.",
      "Todos los músculos infrahioideos perderán su función sin excepción."
    ],
    "correcta": 0,
    "pista": "Identifique la única excepción explícita que el texto añade entre paréntesis al detallar los ramos derivados del asa del hipogloso.",
    "explicacion": "El texto afirma textualmente que 'del asa del hipogloso nacen ramos para todos los músculos infrahioideos menos para el tirohioideo'. Por lo tanto, ante una lesión del asa, el tirohioideo se conserva (pues su ramo nace de forma independiente, más adelante, por delante de la carótida externa). Los distractores niegan la excepción o seleccionan músculos que sí dependen del asa."
  },
  {
    "id": "UBA_XII_024",
    "pregunta": "Al analizar de manera integral los ramos colaterales del nervio hipogloso, se constata que varios de ellos conducen fibras cuya procedencia real es una anastomosis con el plexo cervical (C1 y C2) y no el núcleo bulbar. ¿Cuáles de estos ramos comparten esta característica según la ventana de trabajo?",
    "opciones": [
      "El ramo meníngeo o recurrente, el ramo del tirohioideo y el ramo del genihioideo.",
      "La rama descendente, el ramo del hiogloso y el ramo del estilogloso.",
      "El ramo del tirohioideo, el ramo del estilogloso y el ramo del geniogloso.",
      "El ramo meníngeo o recurrente, la rama descendente y el ramo del hiogloso."
    ],
    "correcta": 0,
    "pista": "Rastree los tres ramos específicos de la lista de colaterales (páginas 98 y 99) que contienen la aclaración explícita '(sus fibras provienen de la anastomosis con el plexo cervical)'.",
    "explicacion": "El texto especifica esta procedencia de fibras del plexo cervical únicamente para tres ramas: 1) Ramo meníngeo o recurrente ('sus fibras sensitivas provienen de la anastomosis con el plexo cervical C1 y C2'), 3) Ramo del tirohioideo ('sus fibras provienen de la anastomosis con el plexo cervical') y 6) Ramo del genihioideo ('sus fibras provienen de la anastomosis con el plexo cervical'). Las demás opciones agrupan ramos (como el del hiogloso o estilogloso) donde el texto no menciona dicha procedencia."
  },
  {
    "id": "UBA_XII_025",
    "pregunta": "Considere las relaciones espaciales del nervio hipogloso en el espacio retroestíleo y en la región suprahioidea. ¿Cuál es el orden de las estructuras internas (mediales) al nervio a medida que este avanza desde su salida craneal hacia la región lingual anterior?",
    "opciones": [
      "Primero se sitúa por detrás/fuera de la arteria carótida interna y aplicado al ganglio plexiforme del X; luego pasa por fuera del músculo hiogloso.",
      "Primero se ubica por dentro de la vena yugular interna y del músculo milohioideo; luego pasa por dentro del músculo hiogloso y de la glándula submaxilar.",
      "Primero se aplica a la cara interna del ganglio yugular del par X; luego discurre profundo al músculo hiogloso y superficial a la arteria lingual.",
      "Primero se sitúa por fuera de la carótida externa y por dentro de la carótida interna; luego pasa por encima de la glándula sublingual."
    ],
    "correcta": 0,
    "pista": "Siga paso a paso la secuencia relacional profunda (interna) que brinda el texto desde el final de la página 97 hasta el inicio de la 98.",
    "explicacion": "El texto describe ordenadamente que en el espacio retroestíleo el nervio está 'por detrás de la arteria carótida interna... aplicado a la cara posterior del ganglio plexiforme del neumogástrico', para luego dirigirse 'hacia adelante y arriba, cruzando la cara externa del músculo hiogloso'. Las otras opciones invierten las relaciones anatómicas internas y externas o confunden los compartimentos glandulares y musculares."
  },
  {
    "id": "UBA_XII_026",
    "pregunta": "De acuerdo con las descripciones anatómicas estrictas de las páginas 98 y 99, ¿cuál de las siguientes afirmaciones describe correctamente un límite o una relación del par XII en su porción suprahioidea anterior?",
    "opciones": [
      "El nervio se encuentra flanqueado por fuera por la glándula submaxilar y por dentro por el músculo hiogloso, pasando luego por encima del músculo milohioideo.",
      "El nervio se ubica por fuera del músculo milohioideo y por dentro de la glándula sublingual, pasando por debajo del hiogloso.",
      "El nervio queda encerrado por dentro por la glándula submaxilar y por fuera por el músculo estilogloso, pasando por debajo del milohioideo.",
      "El nervio se halla dispuesto entre la cara interna de la mandíbula y la cara externa del músculo milohioideo."
    ],
    "correcta": 0,
    "pista": "Sintetice el segundo párrafo completo de la página 98, prestando atención a qué estructura queda 'por fuera', cuál 'por dentro' y sobre cuál pasa 'por encima'.",
    "explicacion": "El texto estipula de forma literal: 'Por fuera se va a encontrar la glándula submaxilar, y por dentro el músculo hiogloso. Luego va a pasar por encima del músculo milohioideo para llegar a la lengua'. Todas las demás opciones mezclan u oponen estos términos relacionales espaciales."
  },
  
  {
    "id": "UBA_XII_027_COMP",
    "pregunta": "¿Cómo se organiza la transición estructural de los filetes radiculares del nervio hipogloso desde su emergencia en la superficie del bulbo raquídeo hasta que el tronco nervioso ingresa a la región cervical lateral?",
    "opciones": [
      "Emergen de 10 a 15 filetes por el surco preolivar, se dirigen hacia afuera y adelante agrupados en dos fascículos que perforan de forma independiente la duramadre, y finalmente se unen para formar un solo tronco dentro del conducto condíleo anterior.",
      "Emergen de 10 a 15 filetes por el surco retroolivar, avanzan en un fascículo dural único que se bifurca al cruzar el agujero rasgado posterior, reuniéndose nuevamente al ingresar al espacio retroestíleo.",
      "Emergen agrupados en dos troncos principales desde el ala blanca interna del cuarto ventrículo, perforan la duramadre por un único orificio y se dividen en 10 a 15 filetes en el interior del conducto condíleo anterior.",
      "Emergen por el surco preolivar como un tronco unificado que atraviesa la duramadre por dos orificios y se descompone en fascículos independientes al alcanzar el espacio retroestíleo por detrás de la carótida interna."
    ],
    "correcta": 0,
    "pista": "Siga la secuencia cronológica estricta de las páginas 97 y 98, rastreando el número de filetes, la cantidad de fascículos, los orificios durales y el sitio óseo de fusión.",
    "explicacion": "El reactivo evalúa la integración del trayecto inicial y óseo del par XII. El texto avala que los 10 a 15 filetes emergen del surco preolivar, van hacia afuera y adelante en dos fascículos con perforaciones durales independientes y se fusionan en un solo tronco en el conducto condíleo anterior. Los distractores alteran los surcos de emergencia, los sitios de fusión y la dinámica de los fascículos descrita en la fuente."
  },
  {
    "id": "UBA_XII_028_COMP",
    "pregunta": "Si durante un abordaje quirúrgico en la región cervical lateral alta se expone el espacio retroestíleo y se diseca el trayecto descendente del nervio hipogloso, ¿qué relaciones topográficas e improntas estructurales inmediatas deben constatarse según la Cátedra?",
    "opciones": [
      "El par XII se localiza inicialmente por detrás de la arteria carótida interna y por dentro del paquete vasculonervioso, encontrándose físicamente aplicado y como labrado en la cara posterior del ganglio plexiforme del neumogástrico.",
      "El par XII discurre por delante de la arteria carótida interna y por fuera del paquete vasculonervioso, labrando un canal sobre la cara anterior del ganglio yugular del neumogástrico.",
      "El par XII se ubica medial a la arteria carótida externa y lateral a la vena yugular interna, cruzando libremente a distancia del ganglio plexiforme del par X sin íntimo contacto fáctico.",
      "El par XII se sitúa posterior a la arteria occipital y profundo al paquete vasculonervioso, perforando el espesor del ganglio plexiforme del neumogástrico de adelante hacia atrás."
    ],
    "correcta": 0,
    "pista": "Analice minuciosamente los párrafos de relaciones del espacio retroestíleo al final de la página 97, atendiendo a las posiciones espaciales respecto a la carótida interna, el paquete vascular y el ganglio del par X.",
    "explicacion": "El concepto evaluado es la relación cruzada retroestílea de alta prioridad. El texto estipula taxativamente que penetra en dicho espacio, se ubica por detrás de la arteria carótida interna, por dentro del paquete vasculonervioso y está aplicado a la cara posterior del ganglio plexiforme del neumogástrico (parece labrado en él). Las opciones incorrectas proponen posiciones anteriores, relaciones con el ganglio yugular o trayectos perforantes que contradicen el documento."
  },
  {
    "id": "UBA_XII_029_COMP",
    "pregunta": "Un análisis morfofuncional de los ramos colaterales del par XII revela que la inervación de la región cervical anterior e infrahioidea presenta una compleja distribución de fibras. ¿Cómo se discrimina el origen y destino de estas ramas según el texto de la Cátedra?",
    "opciones": [
      "La rama descendente nace al cruzar la carótida interna y forma el asa del hipogloso para inervar a los infrahioideos excepto al tirohioideo; este último recibe un ramo independiente nacido por delante de la carótida externa, compartiendo ambos (asa y ramo del tirohioideo) fibras procedentes del plexo cervical.",
      "La rama descendente nace por delante de la carótida externa e inerva a todos los infrahioideos sin excepción, mientras que el ramo del tirohioideo nace en la carótida interna con fibras puramente bulbares.",
      "El asa del hipogloso se constituye en el interior del espacio retroestíleo inervando exclusivamente al tirohioideo y genihioideo, mientras que los ramos para el resto de los infrahioideos se originan de ramos musculares directos nacidos sobre el hiogloso.",
      "La rama descendente y el ramo del tirohioideo se originan conjuntamente en el conducto condíleo anterior, transportando fibras somatomotoras puras del núcleo del hipogloso que excluyen cualquier aporte del plexo cervical."
    ],
    "correcta": 0,
    "pista": "Compare de forma cruzada las especificaciones de las colaterales 2, 3 y 6 en las páginas 98 y 99, localizando los puntos de origen arterial y el origen de las fibras anotados entre paréntesis.",
    "explicacion": "El reactivo evalúa la integración de las colaterales cervicales anteriores. El texto establece que la rama descendente nace en el cruce con la carótida interna y forma el asa del hipogloso (ramos para los infrahioideos menos para el tirohioideo). El ramo del tirohioideo nace por delante de la carótida externa e inerva al tirohioideo. Ambos sistemas, junto al ramo del genihioideo, aclaran en sus respectivos paréntesis que sus fibras provienen de la anastomosis con el plexo cervical. Los distractores confunden los sitios de origen y las exclusiones musculares."
  },
  {
    "id": "UBA_XII_030_COMP",
    "pregunta": "Al examinar la estratigrafía anatómica de la región suprahioidea y del suelo de la boca profunda, el trayecto del nervio hipogloso describe relaciones musculares y vasculares altamente específicas. ¿Cuál es la disposición exacta de estas estructuras de acuerdo con la fuente?",
    "opciones": [
      "El nervio hipogloso discurre por la cara externa del músculo hiogloso acompañado por las venas linguales superficiales (mientras la arteria lingual pasa por dentro del músculo), se sitúa por dentro de la glándula submaxilar y luego pasa por encima del músculo milohioideo.",
      "El nervio hipogloso discurre profundo al músculo hiogloso junto con la arteria lingual, situándose por fuera de la glándula submaxilar y pasando por debajo del plano muscular del milohioideo.",
      "El nervio hipogloso corre superficial a las venas linguales superficiales y profundo a la arteria lingual, quedando alojado por fuera de la glándula submaxilar y por dentro del músculo milohioideo.",
      "El nervio hipogloso penetra directamente en el espesor del músculo hiogloso, cruzando por debajo de la arteria occipital y por fuera del músculo geniogloso antes de alcanzar la celda submaxilar."
    ],
    "correcta": 0,
    "pista": "Sintetice en un solo plano topográfico las relaciones del tramo suprahioideo medio (página 98) considerando la posición de las venas linguales, la arteria lingual, el hiogloso, la glándula submaxilar y el milohioideo.",
    "explicacion": "El reactivo evalúa de forma integrada la cobertura estructural y relacional cruzada suprahioidea. El texto explicita que el nervio cruza la cara externa del hiogloso acompañado de las venas linguales superficiales, que la arteria lingual pasa por dentro del hiogloso, que la glándula submaxilar queda por fuera, el hiogloso por dentro, y que luego el par XII pasa por encima del milohioideo. Las opciones incorrectas invierten o distorsionan la disposición de estos planos y fascias."
  }
]
  }
};