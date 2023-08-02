
let questions = [
  {
    numb: 0,
    unidad: "Unidad 0",
    question: "Esta pregunta es de prueba!! No borrar",
    answer: "La decisión para determinadas condiciones es única y siempre la misma.",
    options: [
      "Las acciones o alternativas posibles están signadas al azar. ",
      "La decisión para determinadas condiciones es única y siempre la misma.",
      "Las mismas entradas producen resultados diferentes.",
      "Se basa en la probabilidad y estadística.",
      
    ]
  },

  //UNIDAD 1
    {
    numb: 1,
    unidad: "Unidad 1",
    question: "¿Cuál es el modelo determinístico?",
    answer: "La decisión para determinadas condiciones es única y siempre la misma.",
    options: [
      "Las acciones o alternativas posibles están signadas al azar. ",
      "La decisión para determinadas condiciones es única y siempre la misma.",
      "Las mismas entradas producen resultados diferentes.",
      "Se basa en la probabilidad y estadística.",
      
    ]
  },
    {
    numb: 2,
    unidad: "Unidad 1",
    question: "¿Cuál es el proceso estocástico?",
    answer: "Las acciones o alternativas posibles estan asignadas por el azar",
    options: [
      "Bajo las mismas condiciones se producen los mismos resultados.",
      "La solución está basada en una condición estática.",
      "Las mismas entradas producen resultados diferentes.",
      "Las acciones o alternativas posibles estan asignadas por el azar"
      //'<img src="Data/Imagenes/Logo.jpg" alt="logo" width="10%" height="5%"> '
    ]
  },

    {
    numb: 3,
    unidad: "Unidad 1",
    question: "Considere el experimento de lanzar un dado, si nos interesa el número que aparece en la cara superior, el espacio muestral seria…",
    answer: "S={1,2,3,4,5,6}",
    options: [
      "S={1,3,5,6}",
      "S={1,2,3,4,5,6}",
      "S={0,1,2,3,4,5,6}",
      "S={2,6}"
    ]
  },
    {
    numb: 4,
    unidad: "Unidad 1",
    question: "Un hotel va a hospedar a siete estudiantes de posgrado que asisten a una conferencia ¿De cuantas formas los puede asignar a una habitación triple ya dos dobles?",
    answer: "210",
    options: [
      "211",
      "610",
      "210",
      "480"
    ]
  },
    {
    numb: 5,
    unidad: "Unidad 1",
    question: "¿De cuantas maneras puede extraerse un conjunto de 5 cartas de una baraja inglesa?",
    answer: "2,593,960",
    options: [
      "2,593,960",
      "311,875,200",
      "260",
      "120"
    ]
  },


   {
    numb: 6,
    unidad: "Unidad 1",
     question: "¿Qué es un evento? ",
    answer: "Es un subconjunto de un espacio muestral.",
    options: [
      "Conjunto de todos los posibles resultados de un experimento aleatorio.",
      "Es un subconjunto de un espacio muestral.",
       "Conjunto de personas celebrando algún suceso.",
       "Es un subconjunto fuera del espacio muestral."
     ]
   },

   {
    numb: 7,
    unidad: "Unidad 1",
     question: "¿Qué es un complemento?",
    answer: "Es un subconjunto de todos los elementos que no estan en el evento.",
    options: [
      "Es la unión de un evento con el conjunto vacío.",
      "Es el subconjunto que contiene a los elementos de un evento.",
       "Es la intersección de dos o más eventos.",
       "Es un subconjunto de todos los elementos que no estan en el evento."
     ]
   },

   {
    numb: 8,
    unidad: "Unidad 1",
     question: "¿Cuáles son las tecnicas de conteo?",
    answer: "Se emplean para encontrar el número de resultados posibles que suceda en un evento.",
    options: [
      "Se emplean para encontrar el número de resultados posibles que suceda en un evento.",
      "Se emplean para contar el tiempo que tardará en hacerse una operación.",
       "Son técnicas que facilitan contar de manera descendente.",
       "Son técnicas que facilitan contar de manera ascendente-"
     ]
   },
   {
    numb: 9,
    unidad: "Unidad 1",
     question: "¿Cuántos puntos muestrales hay en el espacio muestral cuando se lanza un par de dados una vez?",
    answer: "n1n2 = (6)(6) = 36 formas posibles",
    options: [
      "n1/n2= 6/6 = 1 forma posible.",
      "n1n2 = (6)(6) = 36 formas posibles",
       "2^n = 2^6 = 64 formas posibles.",
       "n1+n1 = 6+6 = 12 formas posibles."
     ]
   },


   {
    numb: 10,
    unidad: "Unidad 1",
     question: "¿Qué es una permutación?",
    answer: "Arreglo de un conjunto donde el orden es lo importante.",
    options: [
      "Arreglo de un conjunto donde el orden es lo importante.",
      "Método gráfico que nos permite ver cada uno de los resultados posibles en un evento o experimento.",
       "El número de maneras en las que se pueden seleccionar r objetos de un conjunto con n elementos, sin importar el orden de selección.",
       "Es la suma de todos los eventos."
     ]
   },

   {
    numb: 11,
    unidad: "Unidad 1",
     question: "Dado los elementos: a, b, c. Determine las permutaciones que se pueden formar con todos los elementos.",
    answer: "3P3 = 3! = 3x2x1=6",
    options: [
      "3P3 = 3^3 = 27",
      "3P3 = (3)(3) = 9",
       "3C3 = 3!/3!0! = 1",
       "3P3 = 3! = 3x2x1=6"
     ]
   },

   
   {
    numb: 12,
    unidad: "Unidad 1",
     question: "¿Qué son las combinaciones?",
    answer: "Numero de formas de seleccionar r objeto de n sin importar el orden.",
    options: [
      "Método gráfico que nos permite ver cada uno de los resultados posibles en un evento o experimento.",
      "Numero de formas de seleccionar r objeto de n sin importar el orden.",
       "Arreglo de un conjunto donde el orden es lo importante.",
       "Es la suma de todos los eventos."
     ]
   },
   
   {
    numb: 13,
    unidad: "Unidad 1",
     question: "Si A y A´ son eventos complementarios, entonces: ",
    answer: "P(A) + P(A´) = 1",
    options: [
      "P(A) + P(A´) = {}",
      "P(A) + P(A´) = P(A n A´)",
       "P(A) + P(A´) = 1",
       "P(A) + P(A´) = - P(A) "
     ]
   },
   
   {
    numb: 14,
    unidad: "Unidad 1",
     question: "Un lote consta de 10 artículos sin defecto, 4 con pequeños defectos y2 con defectos graves; Se elige un artículo al azar ¿Cuál es la probabilidad de que no tenga defectos?",
    answer: "62%",
    options: [
      "62%",
      "58%",
       "63%",
       "50%"
     ]
   },
   
   {
    numb: 15,
    unidad: "Unidad 1",
     question: "Si cada articulo codificado en un catálogo empieza con 3 letras distintas seguidas por 4 dígitos distintos de cero, calcule la probabilidad de seleccionar aleatoriamente uno de estos artículos codificados que tenga como primera letra una vocal y el ultimo digito sea par.",
    answer: "85%",
    options: [
      "75%",
      "80%",
       "76%",
       "85%"
     ]
   },

   {
    numb: 16,
    unidad: "Unidad 1",
     question: "Un cargamento de 150 lavadoras contiene 10 defectuosas y 140 no defectuosas, se eligen al azar 20 lavadoras y se clasifican ¿Cuál es la probabilidad de que se encuentren al menos 2 artículos defectuosos?",
    answer: "60%",
    options: [
      "30%",
      "15%",
       "60%",
       "52%"
     ]
   },   
   
   {
    numb: 17,
    unidad: "Unidad 1",
     question: "Si A y B son mutuamente excluyentes, entonces ",
    answer: "A n B = 0",
    options: [
      "A n B ≠ 0",
      "A n B = 0",
       "A n B = P(A) + P(B)",
       "Ninguna de las anteriores."
     ]
   },

   {
    numb: 18,
    unidad: "Unidad 1",
     question: "¿Qué es la probabilidad condicional? ",
    answer: "La probabilidad de que ocurra un evento B cuando se sabe que ya ocurrió algún evento A.",
    options: [
      "La probabilidad de que ocurra un evento B cuando se sabe que ya ocurrió algún evento A.",
      "Se determina acorde a la frecuencia de ocurrencia de un fenómeno.",
       "La cantidad de eventos que sucedan de forma positiva será la misma cantidad que favorezca los resultados deseados.",
       "Su valor se determina partiendo del razonamiento y conociendo todas las posibilidades en las que un evento puede ocurrir."
     ]
   },

   {
    numb: 19,
    unidad: "Unidad 1",
     question: "¿Cuándo son independientes dos eventos?",
    answer: "P(B|A) = P(B) ó P(A|B) = P(A)",
    options: [
      "A n B ≠ 0",
      "P(A)>P(B)",
       "P(B|A) = P(B) ó P(A|B) = P(A)",
       "Ninguna de las anteriores."
     ]
   },

   {
    numb: 20,
    unidad: "Unidad 1",
     question: "De 6 números positivos y 8 números negativos se eligen 4 números al azar y se multiplican ¿Cuál es la probabilidad de que el producto sea un numero positivo?",
    answer: "50%",
    options: [
      "20%",
      "72%",
       "36%",
       "50%"
     ]
   },

   {
    numb: 21,
    unidad: "Unidad 1",
     question: "Tenemos una caja con 31 galletas, 9 de chocolate y 22 de nuez, se extraen galletas una seguida de la otra ¿Cuál es la probabilidad de que la primera sea de chocolate y la segunda de nuez?",
    answer: "21%",
    options: [
      "21%",
      "23%",
       "25%",
       "20%"
     ]
   },

   {
    numb: 22,
    unidad: "Unidad 1",
     question: "¿Qué son los eventos independientes?",
    answer: "Son independientes si es el resultado del segundo evento no es afectado por el prime evento.",
    options: [
      "Es cuando el resultado de un evento está directamente relacionado con otro.",
      "Son independientes si es el resultado del segundo evento no es afectado por el prime evento.",
       "Es un evento fuera del espacio muestral.",
       "Todas las anteriores."
     ]
   },

   {
    numb: 23,
    unidad: "Unidad 1",
     question: "También puede definirse la probabilidad que ocurra B condicionada a A:",
    answer: "P(B¦A) = P(A∩B)/P(A)",
    options: [
      "P(B¦A) = P(A∩B)/P(A)",
      "P(B¦A) = P(A∩B)/P(B)",
       "P(B¦A) = P(A)/P(A∩B)",
       "P(B¦A) = P(B)/P(A∩B)"
     ]
   },

   {
    numb: 24,
    unidad: "Unidad 1",
     question: "Girar dos veces una ruleta que contiene tres partes, dos partes naranjas y tres partes violetas, obtener dos verdes consecutivos:",
    answer: "6.25%",
    options: [
      "6%",
      "5.25%",
       "6.25%",
       "5%"
     ]
   },

   {
    numb: 25,
    unidad: "Unidad 1",
     question: "Una urna contiene 4 bolas rojas y 3 bolas verdes. Bob seleccionará al azar 2 bolas de la urna, sin reemplazo. ¿Cuál es la probabilidad de que elija 2 bolas rojas?",
    answer: "22.49%",
    options: [
      "25.45%",
      "20%",
       "22.49%",
       "23%"
     ]
   },

   {
    numb: 26,
    unidad: "Unidad 1",
     question: "¿Qué es la regla de Bayes?",
    answer: "Formula para calcular una probabilidad condicionada (que suceso A ocurra dado que suceso B ya ha ocurrido).",
    options: [
      "Es una formula para calcular el numero de combinaciones posibles de un evento.",
      "Formula para calcular la probabilidad del complemento de un evento.",
       "Formula para encontrar el numero de ventos posibles fuera del espacio muestral.",
       "Formula para calcular una probabilidad condicionada (que suceso A ocurra dado que suceso B ya ha ocurrido)."
     ]
   },

   {
    numb: 27,
    unidad: "Unidad 1",
     question: "Tenemos tres urnas distintas: U1 con 5 bolas rojas y 3 azules, U2 con 3 bolas rojas y 2 azules y U3 con 2 bolas rojas y 4 azules. Escogemos una urna al azar y extraemos una bola. Si la bola ha sido azul, ¿Cuál es la probabilidad de que haya sido extraída de la urna U2?",
    answer: "27.74%",
    options: [
      "27.74%",
      "25.42%",
       "36.50%",
       "18.39%"
     ]
   },

   {
    numb: 28,
    unidad: "Unidad 1",
     question: "Si un envase ha sido fabricado por la fábrica de esta empresa en Estados Unidos ¿Cuál es la probabilidad de que sea defectuoso?",
    answer: "3.2%",
    options: [
      "7.2%",
      "3.2%",
       "5.8%",
       "4.6%"
     ]
   },

   //aqui comienza la unidad 2

   {
    numb: 29,
    unidad: "Unidad 2",
     question: "Σx f(x) = 1 es una propiedad de ",
    answer: "Una función masa de probabilidad",
    options: [
      "La varianza",
      "Una variable aleatoria",
       "Una función masa de probabilidad",
       "Una distribución de probabilidad de VAC "
     ]
   },

   {
    numb: 30,
    unidad: "Unidad 2",
     question: "La distribución de probabilidad de la variable aleatoria discreta X es f(x) =  ( 3 x)(1/4)x (3/4)3-x, x=0, 1, 2, 3. Calcule la media de X.",
    answer: "0.75",
    options: [
      "0.75",
      "0.14",
       "0.54",
       "1.03"
     ]
   },

   {
    numb: 31,
    unidad: "Unidad 2",
     question: "Calcule P (0 < X ≤ 1) para f(x) = { (x2/3), para -1< x < 2 ó 0, en otro caso}",
    answer: "1/9",
    options: [
      "5/3",
      "2/3",
       "1/8",
       "1/9"
     ]
   },

   {
    numb: 32,
    unidad: "Unidad 2",
     question: "¿A qué se llama desviación estándar?",
    answer: "La raiz cuadrada positiva de la varianza",
    options: [
      "Si la varianza es continua ",
      "La raiz cuadrada positiva de la varianza",
       "Una variable aleatoria con distribución de probabilidad",
       "Si la varianza es discreta"
     ]
   },

   {
    numb: 33,
    unidad: "Unidad 2",
     question: "Todas son ejemplos de variables aleatorias continuas, excepto…",
    answer: "Edad en años",
    options: [
      "Peso de las vacas de una granja ",
      "Tiempo de atención en ventanilla",
       "Edad en años",
       "Estatura de los jugadores de la NBA"
     ]
   },

   {
    numb: 34,
    unidad: "Unidad 2",
     question: "Todas son ejemplos de variables aleatorias discretas, excepto…",
    answer: "Peso",
    options: [
      "Numero de estudiantes en una clase",
      "Numero de niños en una familia",
       "Numero de autos que entran en un estacionamiento",
       "Peso"
     ]
   },

   {
    numb: 35,
    unidad: "Unidad 2",
     question: "Las variables continuas son aquellas que",
    answer: "Se pueden medir",
    options: [
      "Se pueden medir",
      "Se expresan con valores enteros",
       "Toman un valor mayor a 1",
       "Se pueden contar"
     ]
   },

   {
    numb: 36,
    unidad: "Unidad 2",
     question: "Calcule el calor esperado de g(x)=4x+3, f(x) = { (x2/3), para -1< x < 2 o 0, para otro caso}",
    answer: "8",
    options: [
      "7",
      "8",
       "16/8",
       "15/6"
     ]
   },

   {
    numb: 37,
    unidad: "Unidad 2",
     question: "Cuando una variable aleatoria puede tomar valores medidos, se le llama?",
    answer: "Variable aleatoria continua",
    options: [
      "Variable continua",
      "Variable aleatoria continua",
       "Variable discreta",
       "Variable aleatoria discreta"
     ]
   },

  
   {
    numb: 38,
    unidad: "Unidad 2",
     question: "¿A que se le llama la raiz cuadrada positiva de la varianza para una distribución de VAD y VAC?",
    answer: "Desviación estándar de X",
    options: [
      "Desviación estándar de X",
      "Función de la distribución acumulativa",
       "Valor esperado de X",
       "Función masa de probabilidad."
     ]
   },

   {
    numb: 39,
    unidad: "Unidad 2",
     question: "¿Qué representa la siguiente ecuación? U = E(X) = ∫∞-∞xf(x)dx",
    answer: "Esperanza matemática si X es continua",
    options: [
      "Esperanza matemática si X es discreta",
      "Función de densidad de probabilidad",
       "Esperanza matemática si X es continua",
       "Varianza"
     ]
   },


   {
    numb: 40,
    unidad: "Unidad 2",
     question: "¿Cuál de las siguientes opciones es una variable aleatoria continua por conteo?",
    answer: "Artículos vendidos de una tienda de zapatos",
    options: [
      "Distancia de la Tierra al Sol",
      "Kilometraje de un automóvil",
       "Años de una estatua en pie",
       "Artículos vendidos de una tienda de zapatos"
     ]
   },

   {
    numb: 41,
    unidad: "Unidad 2",
     question: "Si una persona compra un boleto para una rifa en la que se puede ganar $5,000 o un segundo premio de $2,000 con probabilidades de 0.001 y 0.003 respectivamente ¿Cuál es el precio justo para pagar por la papeleta?",
    answer: "$11",
    options: [
      "$11",
      "$21",
       "$28",
       "$10"
     ]
   },

   {
    numb: 42,
    unidad: "Unidad 2",
     question: "En una caja se tiene 12 canicas: 8 azules y 4 rojas. El juego consiste en extraer una canica, si es azul gana $40 y si es roja pierde $80 ¿Cuál es la esperanza matemática de ganar al extraer una canica?",
    answer: "0",
    options: [
      "3/80",
      "0",
       "1",
       "80/3"
     ]
   },

   {
    numb: 43,
    unidad: "Unidad 2",
     question: "Suponga un juego con un dado, en este juego el jugador gana $20 si obtiene un 2, $40 si obtiene 4 y pierde $30 si obtiene 6; en tanto que ni pierde ni gana se obtiene otro resultado. Hallar la suma de dinero esperado.",
    answer: "5",
    options: [
      "11/2",
      "16/3",
       "5",
       "4/3"
     ]
   },

   {
    numb: 44,
    unidad: "Unidad 2",
     question: "Obtener la varianza de lanzar un par de dados",
    answer: "35/6",
    options: [
      "91/6",
      "35/12",
       "7/2",
       "35/6"
     ]
   },

   {
    numb: 45,
    unidad: "Unidad 2",
     question: "El conjunto de pares ordenados (x, f(x)) es una, excepto…",
    answer: "Función acumulativa de probabilidad",
    options: [
      "Función de probabilidad",
      "Función masa de probabilidad",
       "Función acumulativa de probabilidad",
       "Distribución de probabilidad"
     ]
   },

   {
    numb: 46,
    unidad: "Unidad 2",
     question: "¿Cuál es el tipo de variable aleatoria donde se pueden tomar valores en una escala continua?",
    answer: "Variable aleatoria continua",
    options: [
      "Variable independiente",
      "Variable aleatoria continua",
       "Variable dependiente",
       "Variable aleatoria discreta"
     ]
   },

   // aqui empieza Unidad 4

   {
    numb: 47,
    unidad: "Unidad 4",
     question: "¿Cuál es la fórmula de la distribución de probabilidad conjunta de una variable discreta?",
    answer: "f(x,y) = P (X = x, Y = y)",
    options: [
      "f(x,y) ≤ 0",
      '<img src="Data/Imagenes/Unidad 4/47-B.JPG" alt="logo" width="100px" height="50px">',
       "f(x,y) = P (X = x, Y = y)",
       "P (X ≠ x, Y ≠ y) = f (x, y)"
     ]
   },

   {
    numb: 48,
    unidad: "Unidad 4",
     question: "Es una propiedad de la distribución de probabilidad conjunta de una variable discreta:",
    answer:"B. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/48-A.JPG' alt='logo' width='120px' height='40px'>",
      "B. <img src='Data/Imagenes/Unidad 4/48-B.JPG' alt='logo' width='120px' height='40px'>",
      "C. <img src='Data/Imagenes/Unidad 4/48-C.JPG' alt='logo' width='120px' height='40px'>",
      "D. <img src='Data/Imagenes/Unidad 4/48-D.JPG' alt='logo' width='120px' height='40px'>"
     ]
   },

   {
    numb: 49,
    unidad: "Unidad 4",
     question: "Una urna contiene 2 canicas rojas, 3 verdes y 2 amarillas. Si se sacan 3 canicas sin reemplazo, ¿Cuál es la fórmula de distribución conjunta?",
    answer: "C. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/49-A.JPG' alt='logo' width='200px' height='80px'>",
      "B. <img src='Data/Imagenes/Unidad 4/49-B.JPG' alt='logo' width='200px' height='80px'>",
      "C. <img src='Data/Imagenes/Unidad 4/49-C.JPG' alt='logo' width='200px' height='80px'>",
      "D. <img src='Data/Imagenes/Unidad 4/49-D.JPG' alt='logo' width='200px' height='80px'>"
     ]
   },

   {
    numb: 50,
    unidad: "Unidad 4",
     question: "¿Cuál es la fórmula de la distribución marginal de X?",
    answer: "B. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/50-A.JPG' alt='logo' width='400px' height='80px'>",
      "B. <img src='Data/Imagenes/Unidad 4/50-B.JPG' alt='logo' width='400px' height='80px'>",
      "C. <img src='Data/Imagenes/Unidad 4/50-C.JPG' alt='logo' width='400px' height='80px'>",
      "D. <img src='Data/Imagenes/Unidad 4/50-D.JPG' alt='logo' width='400px' height='80px'>"
     ]
   },

   {
    numb: 51,
    unidad: "Unidad 4",
     question: "Una compañía fabrica zapatos de mujer y hombre según la siguiente tabla, siendo X el numero pares de zapatos de hombre producidos y Y el numero de pares zapatos de mujer. ¿Cuál es la probabilidad de que se produzcan más pares zapatos de mujer que de hombre?  <img src='Data/Imagenes/Unidad 4/51-Tabla.JPG' alt='logo' width='600px' height='400px'>",
    answer: "0.35",
    options: [
      "0.4",
      "0.35",
       "0.30",
       "0.28"
     ]
   },

   {
    numb: 52,
    unidad: "Unidad 4",
     question: "¿Cuál es la fórmula de la densidad marginal g(x) de una VAC?",
    answer: "A. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/52-A.JPG' alt='logo' width='400px' height='80px'>",
      "B. <img src='Data/Imagenes/Unidad 4/52-B.JPG' alt='logo' width='400px' height='80px'>",
      "C. <img src='Data/Imagenes/Unidad 4/52-C.JPG' alt='logo' width='400px' height='80px'>",
      "D. <img src='Data/Imagenes/Unidad 4/52-D.JPG' alt='logo' width='400px' height='80px'>"
     ]
   },

   {
    numb: 53,
    unidad: "Unidad 4",
     question: "Calcule g(x) para la función de densidad conjunta: <img src='Data/Imagenes/Unidad 4/53-Figura.JPG' alt='fig' width='600px' height='200px'>",
    answer: "A. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/53-A.JPG' alt='logo' width='200px' height='80px'>",
      "B. <img src='Data/Imagenes/Unidad 4/53-B.JPG' alt='logo' width='200px' height='80px'>",
      "C. <img src='Data/Imagenes/Unidad 4/53-C.JPG' alt='logo' width='200px' height='80px'>",
      "D. <img src='Data/Imagenes/Unidad 4/53-D.JPG' alt='logo' width='200px' height='80px'>"
     ]
   },

   {
    numb: 54,
    unidad: "Unidad 4",
     question: "¿Cuál es la distribución condicional de la variable aleatoria Y, dado que X = x?",
    answer: "C. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/54-A.JPG' alt='logo' width='400px' height='100px'>",
      "B. <img src='Data/Imagenes/Unidad 4/54-B.JPG' alt='logo' width='400px' height='100px'>",
      "C. <img src='Data/Imagenes/Unidad 4/54-C.JPG' alt='logo' width='400px' height='100px'>",
      "D. <img src='Data/Imagenes/Unidad 4/54-D.JPG' alt='logo' width='400px' height='100px'>"
     ]
   },

   {
    numb: 55,
    unidad: "Unidad 4",
     question: "Calcule la densidad condicional f (y | x) de la siguiente función de densidad conjunta: <img src='Data/Imagenes/Unidad 4/55-Figura.JPG' alt='logo' width='600px' height='200px'>",
    answer: "A. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/55-A.JPG' alt='logo' width='400px' height='100px'>",
      "B. <img src='Data/Imagenes/Unidad 4/55-B.JPG' alt='logo' width='400px' height='100px'>",
      "C. <img src='Data/Imagenes/Unidad 4/55-C.JPG' alt='logo' width='400px' height='100px'>",
      "D. <img src='Data/Imagenes/Unidad 4/55-D.JPG' alt='logo' width='400px' height='100px'>"
     ]
   },

   {
    numb: 56,
    unidad: "Unidad 4",
     question: "Si dice que las variables aleatorias X e Y son independientes entonces:",
    answer: "A. f(x,y)=g(x)h(y)",
    options: [
      "A. f(x,y)=g(x)h(y)",
      "B. f(x,y)=f(x|y)h(y)",
      "C. f(x,y)=f(y|x)h(y)",
      "D. f(x,y)=f(x)h(y)"
     ]
   },

   {
    numb: 57,
    unidad: "Unidad 4",
     question: "Si dice que las variables aleatorias X e Y son dependientes entonces:",
    answer: "f(x,y)=g(x)h(y)",
    options: [
      "A.	f(x,y)= f(x)h(y)",
      "B. f(x,y)=f(x|y)h(y)",
      "C. f(x,y)=f(y|y)h(y)",
      "D. f(x,y)=f(x) + h(y)"
     ]
   },

   {
    numb: 58,
    unidad: "Unidad 4",
     question: "Una caja contiene 3 desarmadores de cruz y 5 planos. Si se sacan 3 desarmadores al azar sin reemplazo, ¿Cuál es la fórmula de distribución conjunta?",
    answer: "A. ",
    options: [
      "A. <img src='Data/Imagenes/Unidad 4/58-A.JPG' alt='logo' width='400px' height='100px'>",
      "B. <img src='Data/Imagenes/Unidad 4/58-B.JPG' alt='logo' width='400px' height='100px'>",
      "C. <img src='Data/Imagenes/Unidad 4/58-C.JPG' alt='logo' width='400px' height='100px'>",
      "D. <img src='Data/Imagenes/Unidad 4/58-D.JPG' alt='logo' width='400px' height='100px'>"
     ]
    },

    {
      numb: 59,
      unidad: "Unidad 4",
       question: "Propiedad de una función de densidad conjunta de una vac:",
      answer: "C. ",
      options: [
      "A. <img src='Data/Imagenes/Unidad 4/59-A.JPG' alt='logo' width='400px' height='100px'>",
      "B. <img src='Data/Imagenes/Unidad 4/59-B.JPG' alt='logo' width='400px' height='100px'>",
      "C. <img src='Data/Imagenes/Unidad 4/59-C.JPG' alt='logo' width='400px' height='100px'>",
      "D. <img src='Data/Imagenes/Unidad 4/59-D.JPG' alt='logo' width='400px' height='100px'>"
       ]
     },


     //aqui empieza la unidad 3
    {
      numb: 60,
      unidad: "Unidad 3",
       question: "Una máquina fabrica una determinada pieza y se sabe que produce un 7 por 1000 de piezas defectuosas. Hallar la probabilidad de que al examinar 50 piezas sólo haya una defectuosa",
      answer: "C. 0.2481",
      options: [
      "A. 0.6158",
      "B. 0.2554",
      "C. 0.2481",
      "D. 0.0745"
       ]
     },

     {
      numb: 61,
      unidad: "Unidad 3",
       question: "En una ciudad la necesidad de dinero para comprar drogas se establece como la razón del 75% de los robos. Cual es la probabilidad de que entre los siguientes cinco casos de robo dos resulten de la necesidad de dinero para comprar drogas",
      answer: "B. 0.08789",
      options: [
      "A. 0.8788",
      "B. 0.08789",
      "C. 0.6613",
      "D. 0.2133"
       ]
     },

     {
      numb: 62,
      unidad: "Unidad 3",
       question:"La media y la varianza de la distribución hipergeométrica es:",
      answer: "C. ",
      options: [
      "A. <img src='Data/Imagenes/Unidad 3/3-A.JPG' alt='logo' width='400px' height='100px'>",
      "B. <img src='Data/Imagenes/Unidad 3/3-B.JPG' alt='logo' width='400px' height='100px'>",
      "C. <img src='Data/Imagenes/Unidad 3/3-C.JPG' alt='logo' width='400px' height='100px'>",
      "D. <img src='Data/Imagenes/Unidad 3/3-D.JPG' alt='logo' width='400px' height='100px'>"
       ]
     },

     {
      numb: 63,
      unidad: "Unidad 3",
       question: "¿Cuál es la fórmula de la varianza en una distribución geométrica?",
      answer: "A. ",
      options: [
      "A. <img src='Data/Imagenes/Unidad 3/4-A.JPG' alt='logo' width='200px' height='200px'>",
      "B. <img src='Data/Imagenes/Unidad 3/4-B.JPG' alt='logo' width='200px' height='200px'>",
      "C. <img src='Data/Imagenes/Unidad 3/4-C.JPG' alt='logo' width='200px' height='200px'>",
      "D. <img src='Data/Imagenes/Unidad 3/4-D.JPG' alt='logo' width='200px' height='200px'>"
       ]
     },

     {
      numb: 64,
      unidad: "Unidad 3",
       question: "Si cada prueba tiene más de dos resultados posibles ¿En que se convierte?",
      answer: "C. Experimento multinomial",
      options: [
      "A. Experimento binomial",
      "B. Experimento cuatrinomio",
      "C. Experimento multinomial",
      "D. Experimento trinomial"
       ]
     },

     {
      numb: 65,
      unidad: "Unidad 3",
       question: "Un lote contiene 100 piezas de un proveedor de tubería local y 200 unidades de un proveedor de tubería del estado vecino. Si se seleccionan 4 piezas al azar y sin reemplazo. ¿Cuál es la probabilidad de que todas sean del proveedor local?",
      answer: "A. 0.0119",
      options: [
      "A. 0.0119",
      "B. 0.119",
      "C. 0.0283",
      "D. 0.0166"
       ]
     },

     {
      numb: 66,
      unidad: "Unidad 3",
       question: "La probabilidad de éxito de una determinada vacuna es 0.66. Calcula la probabilidad de que una vez administrada a 21 pacientes dos de ellos contraigan la enfermedad",
      answer: "C. 0.0090",
      options: [
      "A. 0.3333",
      "B. 0.2111",
      "C. 0.0090",
      "D. 0.0166"
       ]
     },

     {
      numb: 67,
      unidad: "Unidad 3",
       question: "¿Cuál es la fórmula para calcular las probabilidades de Poisson?",
      answer: "B. ",
      options: [
      "A. <img src='Data/Imagenes/Unidad 3/8-A.JPG' alt='logo' width='400px' height='100px'>",
      "B. <img src='Data/Imagenes/Unidad 3/8-B.JPG' alt='logo' width='400px' height='100px'>",
      "C. <img src='Data/Imagenes/Unidad 3/8-C.JPG' alt='logo' width='400px' height='100px'>",
      "D. <img src='Data/Imagenes/Unidad 3/8-D.JPG' alt='logo' width='400px' height='100px'>"
       ]
     },

     {
      numb: 68,
      unidad: "Unidad 3",
       question: "La distribución de Poisson se relaciona con…",
      answer: "B. Distribución Binomial",
      options: [
      "A. Distribución normal",
      "B. Distribución Binomial",
      "C. Distribución hipergeométrica",
      "D. Distribución geométrica"
       ]
     },

     {
      numb: 69,
      unidad: "Unidad 3",
       question: "Es una distribución de probabilidad discreta que expresa, a partir de una frecuencia de ocurrencia media, la probabilidad de que ocurra un determinado número de eventos durante cierto período de tiempo.",
      answer: "B. Distribución de Poisson",
      options: [
      "A. Distribución Normal",
      "B. Distribución de Poisson",
      "C. Distribución Binomial",
      "D. Distribución Hipergeométrica"
       ]
     },

     //aqui empieza la unidad 5

     {
      numb: 70,
      unidad: "Unidad 5",
       question: "A que teorema hace referencia la siguiente formula:<img src='Data/Imagenes/Unidad 5/figura1.JPG' alt='logo' width='200px' height='100px'>",
      answer: "A. Teorema del límite central",
      options: [
      "A. Teorema del límite central",
      "B. Teorema de Bayes",
      "C. Teorema de la Probabilidad Total",
      "D. Ninguna de las anteriores"
       ]
     },

     
     {
      numb: 71,
      unidad: "Unidad 5",
       question: "Las distribuciones muestrales de X en el teorema del límite central describen:",
      answer: "D. La variabilidad de los promedios muestrales alrededor de la media de la población μ",
      options: [
      "A. La media de las medias obtenidas,",
      "B. El cuadrado de distribución normal estándar.",
      "C. La media de la población μ.",
      "D. La variabilidad de los promedios muestrales alrededor de la media de la población μ"
       ]
     },

     
     {
      numb: 72,
      unidad: "Unidad 5",
       question: "Las distribución de probabilidad de un estadístico se llama:",
      answer: "B. Distribución muestral",
      options: [
      "A. Distribucion de Poisson",
      "B. Distribución muestral",
      "C. Distribución normal",
      "D. Distribución Binomial"
       ]
     },
     
     {
      numb: 73,
      unidad: "Unidad 5",
       question: "En un estudio de 277 compradoras adultas seleccionadas al azar, 69 dijeron que siempre que un artículo anunciado no se encontraba en su supermercado local, solicitaban vale. ¿Cuál es el intervalo de confianza de 99% para la verdadera proporción de compradoras adultas que solicitan vale en tales situaciones?",
      answer: "B. [0.18, 0.32]",
      options: [
      "A. [0.28, 0.44]",
      "B. [0.18, 0.32]",
      "C. [0.11, 0.21]",
      "D. [0.57, 0.82]"
       ]
     },
     
     {
      numb: 74,
      unidad: "Unidad 5",
       question: "Se desea un intervalo de confianza (IC) para el promedio verdadero de pérdida de carga μ (watts) para cierto tipo de motor de inducción cuando la corriente de línea se mantiene en 10 Amps. Para una velocidad de 1500 rpm. Supón que la pérdida de carga está normalmente distribuida con σ = .30. Calcula un IC de 95% para μ cuando n = 25 y x = .3.58",
      answer:"B. [46.54,70.06]",
      options: [
      "A. [18.45,50.89]",
      "B. [46.54,70.06]",
      "C. [12.24,64.78]",
      "D. [10.24,50.32]"
       ]
     },
     
     {
      numb: 75,
      unidad: "Unidad 5",
       question: "Se desea un intervalo de confianza (IC) para el promedio verdadero de pérdida de carga μ (watts) para cierto tipo de motor de inducción cuando la corriente de línea se mantiene en 10 Amps. Para una velocidad de 1500 rpm. Supón que la pérdida de carga está normalmente distribuida con σ = .30. Calcula un IC de 95% para μ cuando n = 100 y x = .3.58",
      answer: "D. [52.42,64.18]",
      options: [
      "A. [45.87,24.82]",
      "B. [56.12,61.34]",
      "C. [74.24,41.12]",
      "D. [52.42,64.18]"
       ]
     },
     
     {
      numb: 76,
      unidad: "Unidad 5",
       question: "Se desea un intervalo de confianza (IC) para el promedio verdadero de pérdida de carga μ (watts) para cierto tipo de motor de inducción cuando la corriente de línea se mantiene en 10 Amps. Para una velocidad de 1500 rpm. Supón que la pérdida de carga está normalmente distribuida con σ = .30. Calcula un IC de 99% para μ cuando n = 100 y x= .3.58",
      answer: "A. [50.575, 66.025]",
      options: [
      "A. [50.575, 66.025]",
      "B. [52.42,64.18]",
      "C. [10.14,36.45]",
      "D. [52.85,35.197]"
       ]
     },
     
     {
      numb: 77,
      unidad: "Unidad 5",
       question: "Se desea un intervalo de confianza (IC) para el promedio verdadero de pérdida de carga μ (watts) para cierto tipo de motor de inducción cuando la corriente de línea se mantiene en 10 Amps. Para una velocidad de 1500 rpm. Supón que la pérdida de carga está normalmente distribuida con σ = .30. Calcula un IC de 82% para μ cuando n = 100 y x = .3.58",
      answer: "B. [54.28,62,82]",
      options: [
      "A. [50.575,66.025]",
      "B. [54.28,62,82]",
      "C. [44.82,24.56]",
      "D. [46.54,64.78]"
       ]
     },
     
     {
      numb: 78,
      unidad: "Unidad 5",
       question: " Para cada una de 18 muestras de perforación de depósitos de carbonato impregnado de petróleo, se midió la cantidad de saturación de gas residual después de una inyección de solvente de un flujo de agua. Las observaciones, en porcentaje de volumen de poros, fueron:<br/> <img src='Data/Imagenes/Unidad 5/figura9.JPG' alt='logo' width='300px' height='100px'> <br/> Calcula un intervalo de confianza al 98% para el verdadero promedio de cantidad de saturación de gas residual.",
      answer: "C. [33.53,43.79]",
      options: [
      "A. [36.49,48.12]",
      "B. [45.24,69.78]",
      "C. [33.53,43.79]",
      "D. [31.18,41.68]"
       ]
     },
     
     {
      numb: 79,
      unidad: "Unidad 5",
      question: "Considera los siguientes 1000 intervalos de confianza al 95% para μ que un consultor en estadística obtendrá para varios clientes. Supón que los conjuntos de datos sobre los que están basados los intervalos se seleccionan de manera independiente entre sí. ¿Cuántos de estos 1000 intervalos esperas que capturen el valor correspondiente de μ ? ¿Cuál es la probabilidad de que entre 940 y 960 de estos intervalos contengan el valor correspondiente de μ ? (sugerencia: sea Y el número entre los 1000 intervalos que contienen μ . ¿Qué clase de variable aleatoria es Y ?",
      answer: "B. 0.8714",
      options: [
      "A. 0.4824",
      "B. 0.8714",
      "C. 0.2416",
      "D. 0.1423"
       ]
     },

     {
      numb: 80,
      unidad: "Unidad 5",
      question: " En su incansable búsqueda de un sistema de llenado adecuado, cierta empresa prueba dos máquinas. Automat -fill se usa para llenar 21 frascos que dan una desviación estándar de 2.1 onzas. Con Robo-fill se llenan 16 frascos y da una desviación estándar de 1.9 onzas en el llenado. Si la empresa tiene que elegir uno de estos sistemas en función de la uniformidad de llenado. ¿Cuál deberá seleccionar? Usa α = 10.0 ",
      answer: "C. Cualquiera de las dos",
      options: [
      "A. Automat-fill",
      "B. Robo-fill",
      "C. Cualquiera de las dos",
      "D. Ninguna de las dos"
       ]
     }

     

];