# 51 Assault
*51 Assault es un juego de acción cooperativa en pixel art inspirado en los más recientes éxitos de los juegos roguelike y los hack and slash. Este documento presenta una visión general del proyecto, destacando sus aspectos clave. Combina la acción intensa y la estrategia cooperativa en un entorno pixel art que captura la esencia de la lucha desesperada de la humanidad contra una amenaza alienígena apocalíptica.*

~~~
Integrantes:
- Sergio López Llorente: s.lopezl.2021@alumnos.urjc.es | Usuario Github: ZepolTtv
- Iván Jiménez Blas: i.jimenezb.2021@alumnos.urjc.es | Usuario Github: StrubleI
- Alejandro Serrejón Beltrán: a.serrejon.2021@alumnos.urjc.es | Usuario Github: SerreGod
- Elena Milara Mencía: e.milara.2021@alumnos.urjc.es | Usuario Github: PoceroJunior
- Sonia Montero Nogales: s.montero.2019@alumnos.urjc.es | Usuario Github: Sonia6u
~~~

# 51 Assault: Documento de diseño de videojuego
## 1. Introducción
### 1.1 Concepto de juego 
*51 Assault* es un juego de acción en tiempo real que sumerge a los jugadores en una lucha desafiante contra una invasión alienígena. Controlarán a dos soldados, cada uno con sus habilidades, mientras enfrentan hordas de enemigos para tratar de sobrevivir ante dicha amenaza.

### 1.2 Caracteristicas principales
El juego se sostiene con los siguientes pilares fundamentales:

- Mecánicas sencillas: El gameplay del juego es sencillo y todo el mundo tiene la oportunidad de jugar. Es un juego fácil de jugar, pero difícil de dominar. Tiene muchas dinámicas que emergen de las mecánicas que complican el juego de forma exponencial para los jugadores que quieran aprender del mismo a un nivel mucho más profundo.

- Cooperación Estratégica: La jugabilidad en equipo es fundamental. Los jugadores deben colaborar y utilizar habilidades complementarias para superar desafíos y avanzar en la historia. Las dinámicas creadas a partir de la jugabilidad general del mismo.

- Simplicidad estética: El juego es sencillo de entender al usar un estilo pixel art. Aporta un encanto visual distintivo al juego y permite un enfoque detallado en la dirección artística que no deja lugar a dudas.

### 1.3 Género
*51 Assault* se encuentra dentro del género de acción y estrategia roguelike, fusionando elementos de hack and slash con mecánicas cooperativas.

### 1.4 Referencias
  Algunos de los videojuegos roguelike de los que se ha tomado inspiración son:

<p align= "center"><strong> Vampire Survivors </strong> </p>
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/6559df3e-78e5-43dc-9255-2687336e59ce)" width= '500' height='300'/>
</p>
<p align=center>Figura 1.4.1 Espacio jugable “Vampire Survivors”</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/1256e844-7bb9-4a87-8682-50847b1d5de1" width= '500' height='300'/>
</p>
<p align=center>Figura 1.4.2 Carátula del juego “Vampire Survivors”</p>

<p align= "center"><strong> Brotato </strong> </p>
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/2a82ad13-ba48-4e43-a607-90ddbf7e8d77" width= '500' height='300'/>
</p>
<p align=center>Figura 1.4.3 Espacio jugable “Brotato”</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/bb9dd02f-60d7-40b0-9d85-1d9fa21bf4eb" width= '400' height='300'/>
</p>
<p align=center>Figura 1.4.4 Carátula del juego “Brotato”</p>

<p align= "center"> <strong>Enter the Gungeon</strong> </p>
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/cdbdb680-08d8-4269-97fb-9995b2ab409a" width= '300' height='400'/>
</p>
<p align=center>Figura 1.4.6 Carátula del juego “Enter the Gungeon”</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/1a27afa5-2db3-4af6-bd6f-2e6ebd06550f" width= '400' height='300'/>
</p>
<p align=center>Figura 1.4.5 Espacio jugable “Enter the Gungeon”</p>

<p align= "center"> <strong>The Binding of Isaac</strong> </p>
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/30b738e9-cec7-471c-8a68-5c39b5bd7f69" width= '400' height='300'/>
</p>
<p align=center>Figura 1.4.7 Espacio jugable “The Binding of Isaac”</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/9ad21605-682f-4879-9c67-5bc7c1ac2544" width= '300' height='400'/>
</p>
<p align=center>Figura 1.4.8 Carátula del juego “The Binding of Isaac”</p>

### 1.5 Plataforma de salida
El juego estará disponible exclusivamente en PC, lo que permite concentrar esfuerzos en la optimización y la experiencia de juego en esta plataforma.
### 1.6 Objetivo
El objetivo principal de *51 Assault* es sobrevivir durante 5 minutos proporcionar una experiencia de juego intensa en la que los jugadores enfrentan la invasión alienígena en conjunto y desbloqueen mejoras para conseguirlo. 
### 1.7 Público objetivo
El público objetivo se sitúa alrededor de los mayores del PEGI 12.
Entre los jugadores, encontramos los siguientes arquetipos:

- Jugadores de acción cooperativa: Aquellos que disfrutan colaborar con amigos o compañeros en juegos que requieren estrategia y comunicación en tiempo real.

- Amantes de los juegos retro y pixel art: Los aficionados a la estética pixel art encontrarán en *51 Assault* una experiencia visual algo nostálgica que evoca los clásicos de la era de los 16 bits.

- Fanáticos del género hack and slash: Quienes buscan combates intensos y emocionantes se sentirán atraídos por la acción frenética y las habilidades implementadas en *51 Assault*.

- Entusiastas de la ciencia ficción: Los amantes de la ciencia ficción apreciarán la estética alien envolvente y los elementos misteriosos que rodean a la invasión alienígena.

### 1.8 Estilo visual
- Estética Pixel Art: Cada personaje, enemigo y entorno se ha diseñado con píxeles, lo que proporciona un aspecto único y una sensación retro al juego.

- Atmósfera Oscuro-Futurista: El mundo de *"51 Assault"* está inmerso en un ambiente oscuro y futurista, donde las ruinas y la tecnología avanzada se mezclan en una lucha desesperada por la supervivencia.

- Detalles Cautivadores: A pesar de la simplicidad del pixel art, se presta atención a los detalles para crear una experiencia visual rica y cautivadora que sumerge a los jugadores en el universo del juego.

## 2. Mapa de juego
Nos imaginamos que nuestros personajes se han infiltrado en las instalaciones militares en Nevada “Area 51”. Han notado la intrusión y han cerrado las puertas, estás atrapado.

El mapa será un espacio plano (sin alturas) basado en una idea de como podría ser el interior de la base (como si fuesen hangares subterráneos). En un principio, no habrá colisiones ni objetos por este mapa, excepto los límites definidos. En caso de necesitar complicar el escenario, se crearán paredes y elementos como cajas que entorpezcan el camino de los jugadores. De esta manera, la dinámica cambia de forma radical e incluso se puede focalizar la zona de aparición de enemigos para complicar el escenario. 


El mapa tendrá delimitadas dos zonas cuadradas. 
- La primera de estas, ocupando por completo el espacio generable, se usará para spawnear enemigos en las zonas externas de la pantalla para que no haya popup de los mismos. 

- La segunda será de, aproximadamente, 3 ⁄ 4 del total generable. Estando dentro de la primera, evita que se generen enemigos en su espacio visible. Será lo que el jugador vea en todo momento. El espacio es, en un principio, estático, y es la zona jugable en la que spawnean power ups y armas para que usen los jugadores.

### 2.1 Escenario
Para el escenario se ha decidido implementar una paleta de colores grisáceos-industriales que hagan recordar a lo ya descrito, “un hangar subterráneo”. Además, se han elegido a conciencia para que más adelante, los colores de los personajes y de los enemigos se puedan diferenciar bien del mapa, para mejor visibilidad y menor confusión.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/b33f5e55-aa43-4075-8da6-b0510546c938" width= '300' height='300'/>
</p>
<p align=center>Figura 2.1 Paleta de colores del escenario</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/20aa1a44-d57d-475f-a7f7-22e8d456f89c" width= '400' height='300'/>
</p>
<p align=center>Figuras 2.2 Referencia de escenario de Pokémon</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/1ab06611-854c-4da1-87ef-c45f635c62b6" width= '400' height='300'/>
</p>
<p align=center>Figuras 2.3 Referencia de escenario de Looper</p>

## 3. Mecánicas de juego
En esta sección se entrará en detalle con las mecánicas que se implementaran en el juego *51-Assault*. Se hará hincapié en todos los aspectos jugables de este, como también en las bases fundamentales para cualquier partida típica que se llegue a jugar como la cooperación, la intensidad de nivel, los focos de aparición… Junto a esto, se explicará una lista de enemigos y de personajes jugables con sus respectivas armas, habilidades, objetos, características etc. 

Para terminar, se hará un detallado sobre las físicas del videojuego, el movimiento del mundo plano, la detección de colisiones, el funcionamiento de la salud y el tipo de disparo.

### 3.1 Jugabilidad
#### 3.1.1. Nivel
Existirá un único nivel en el que se desarrollará el juego, con posibilidad de ampliación a otros niveles de mayor dificultad, con diferente escenario, enemigos y armas en el futuro. En este nivel el jugador tendrá total libertad para moverse por toda la zona utilizando WASD dentro de unos límites preestablecidos. Los enemigos aparecerán fuera de la pantalla pero nunca fuera del mundo para mejorar la progresión y la intensidad de la partida

#### 3.1.2. Focos de aparición
Los personajes principales aparecerán en el centro del mapa al empezar la partida y los enemigos aparecerán fuera de la pantalla atraídos por los personajes principales.

#### 3.1.3. Intensidad
La dificultad del juego será proporcional al tiempo que sobrevivan los personajes, implementando nuevos enemigos y más de estos. Para contrarrestarlo, se otorgarán habilidades y armas a los protagonistas con el fin de poder seguir sobreviviendo.

#### 3.1.4. Habilidades y armas de personajes
Los personajes principales empezarán el nivel con un arma principal y sin habilidades. A lo largo del nivel, según los enemigos que hayan eliminado, aparecerá en pantalla una interfaz que permitirá a los jugadores elegir la habilidad o el arma que prefieran.

#### 3.1.5. Recursos obtenibles	
Para hacer frente a la oleada constante de enemigos, los jugadores dispondrán de una ayuda adicional. Serán capaces de recoger items (objetos) al caminar por encima de ellos, sin necesidad de pulsar otro botón adicional. Dichos recursos aparecerán progresivamente en el terreno de juego y funcionarán como consumibles, mejoras o boosts (potenciadores) temporales. 
Cada objeto tiene unas propiedades y funcionalidades únicas. Sin embargo, depende de los jugadores el saber gestionar cuándo recogerlos, ya que los objetos se activan al momento de entrar en contacto con el cuerpo del jugador. 
Algunos de los tipos de recursos obtenibles son:

- Onigiri: Regenera 3 PV (puntos de vida). Tasa de spawneo: Alta

- Dango: Regenera 5 PV. Tasa de spawneo: Media

  Referencia:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/45c9363c-7420-4a80-a438-c763c8109111" width= '300' height='300'/>
</p>
- Bento box: Aumenta en 1 PV la vida máxima del jugador. Tasa de spawneo: Muy Baja

- Neko cascos: Por 15 segundos, aumenta la velocidad del movimiento del jugador en un 50% y su velocidad de ataque en un 30%. Durante ese periodo de tiempo se escuchará una canción de una serie anime. Tasa de spawneo: Media
  
Referencia:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/ea288c4b-a0f7-4e93-8c2b-7bc79178f2ad" width= '300' height='300'/>
</p>
- La Colección: Si entre los dos jugadores han recogido siete mangas y uno de los dos muere, la Colección se consume y el jugador regresa a la vida con 5 PV.
Tasa de spawneo: Limitada a 7 mangas en toda la partida.

- Torreta: El jugador se queda inmóvil durante 8 segundos en el sitio en el que ha sido recogida la torreta, pero su velocidad de ataque aumenta en un 100%.
Tasa de spawneo: Baja

- Escudo eléctrico: Un aura dorada protege al jugador de un golpe que pueda recibir. Desaparece cuando recibe un golpe o cuando transcurren 10 segundos.
Tasa de spawneo: Baja


- Onda láser: Una onda expansiva elimina a los enemigos que se encuentren en un radio determinado de distancia. Tras efectuar el ataque láser, ésta desaparece.
Tasa de Spawneo: Baja


- Acelerador de partículas: El arma del jugador hace 1 PD (punto de daño) adicional.
Tasa de spawneo: Muy baja


#### 3.1.6. Derrota	
Los jugadores pierden la partida cuando uno de los dos muere; es decir, su vida se reduce a cero puntos de vida. (Hay dos excepciones: con una de las habilidades “Resurgir del fénix” o usando “La Colección”).

#### 3.1.7. Victoria
Para conseguir superar el nivel, los jugadores precisarán de eliminar a cierta cantidad de enemigos antes de poder finalizar.

## 4. Interfaz y flujo de juego
### 4.1. Estilo
Las interfaces del juego están diseñadas para reflejar el apartado artístico del mismo, caracterizado por un estilo moderno e industrial. Los elementos visuales se conformarán con una estética contemporánea, para crear una experiencia visualmente atractiva y coherente con el contexto del juego.

Los botones se presentarán con un tamaño generoso y una claridad visual notable, asegurando que sean fácilmente distinguibles y accesibles para el jugador. La tipografía utilizada será legible, proporcionando una experiencia de usuario fluida y agradable.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/21fa6c47-b098-44ff-b717-27b4739bc06b" width= '300' height='300'/>
</p>
<p align=center>Figuras 4.1 Referencias de UI</p>

En contraste, la interfaz durante el juego adoptará un enfoque minimalista. Se eliminarán las distracciones visuales innecesarias, permitiendo así que el jugador se sumerja completamente en la experiencia del juego. La información esencial, como el tiempo restante o cualquier otro indicador relevante para la partida en curso, se presentará de forma clara y concisa, garantizando que la atención del jugador esté plenamente centrada en la acción del juego.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/ea3d9200-6947-400f-b144-939f17469e0b" width= '400' height='300'/>
</p>
<p align=center>Figuras 4.2 Referencias de la UI en partida</p>

### 4.2 Flujo de pantalla
Este enfoque meticuloso en el diseño de la interfaz no sólo respetará el estilo artístico del juego, sino que también contribuirá significativamente a la inmersión del jugador, creando una experiencia de juego envolvente y estéticamente coherente.
La primera escena que el jugador encontrará es la pantalla del menú principal, donde se le presentarán diversas opciones:

- Jugar: Al seleccionar esta opción, el jugador iniciará el juego y será dirigido a la pantalla de juego.
- Opciones: Esta opción permitirá acceder a ajustes generales, como configuraciones de sonido y otras preferencias.
- Créditos: Al elegir esta opción, se mostrarán los nombres de los miembros del equipo de desarrollo del juego.
- Salir: Al seleccionar esta opción, el jugador saldrá del juego.

Tanto en las pantallas de Créditos como en las de Opciones, existirá un botón claramente visible que permitirá regresar al menú principal en cualquier momento.
En lo que respecta a la pantalla del juego, se mostrará el tiempo restante para que el juego concluya.
Es importante mencionar que las pantallas de victoria y derrota constituirán dos pantallas diferentes a las cuales el jugador será redirigido según el resultado alcanzado durante el juego. Estas escenas proporcionarán una distinción entre la victoria y la derrota, ofreciendo una experiencia inmersiva para el jugador.

Estos estados de las pantallas están reflejados en la siguiente imagen:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/da687003-0ec9-4843-a838-911310385ac2" width= '550' height='300'/>
</p>
<p align=center>Figura 4.1 Estados del videojuego</p>


## 5. Niveles de dificultad
La dificultad del juego es la misma (predeterminada) en todas las partidas. No obstante, esta va aumentando conforme más prosperemos durante esta. 

Mientras que nuestros 2 personajes, al matar enemigos reciben mejoras para matar más rápido, nuevas habilidades o mejores armas, la vida y aparición de enemigos aumenta y es igual para todas las partidas.

El aumento de dificultad se va a implementar de la siguiente forma. Guardaremos un atributo con la media de los personajes o jugadores, que almacene cuantos enemigos han matado entre los 2. Cuando ese valor vaya aumentando en una cantidad concreta establecida (50/100/150), multiplicaremos una variable “dificultad” por algún valor, por ejemplo “dificultad = dificultad*1.1”.

Dentro de lo que puede afectar esta variable, durante el ciclo del juego se hace un check de su valor, y dependiendo de condiciones if provocará que aparezcan más enemigos o de distintos tipos.

De esta manera, como en el juego el ataque es automático, es “complicado” que un jugador mate bastantes más enemigos que el otro, por lo que hacer la cuenta por enemigos es algo más controlado que hacerlo por tiempo.

## 6. Estilo de juego
En nuestro tipo de juego, al ser un hack slash cooperativo, será conveniente la cooperación entre los dos jugadores. La coordinación y la comunicación entre los 2.

A visión de futuro de la partida, los personajes deberían escoger habilidades complementarias o compartidas, centrar una estrategia puntual o en la que las habilidades se compenetren.

Por ejemplo, uno podría mantener habilidades de alta resistencia y curación, mientras que el otro podría haber optado por habilidades para hacer mucho daño y movilidad. Esto fomenta la estrategia y la elección de armas para enfrentar las hordas con el aumento de la dificultad, y permite a los usuarios adaptarse a su estilo de juego preferido.

## 7. Música y Audio

Los efectos de audio estarán creados a mano. Se usarán elementos comunes para crear los sonidos de los personajes y enemigos y los menús tendrán su propio apartado en el que se podrá 

La música estará sonando constantemente de fondo. Será de estilo 16bit, pero sonará alejada. De forma general, se cambiará mediante triggers de objetos y enemigos concretos para adaptar el modelo.


## 8. Personajes, armas y habilidades
### 8.1 Personajes
Como se ha mencionado anteriormente el estilo artístico será sencillo y realizado en pixelart, con una temática moderna, ya que en la pantalla se mostrarán distintos tipos de enemigos y personajes deben distinguirse y verse con claridad.

La paleta de colores de los 2 personajes jugables serán complementarios, como ejemplo de otros juegos (por ejemplo, jugador 1 tonos azulados, jugador 2 tonos rojizos). Ayudará a distinguirlos de los enemigos, que usarían paletas verdes / grisáceas.
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/865bc48c-e62b-4fed-b2d7-a8f600fe06e6" width= '650' height='200'/>
</p>
<p align=center>Figura 7.1 Referencias visuales rojizas</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/c55a0acf-35f3-4be2-bf76-b5a0de3d125e" width= '650' height='200'/>
</p>
<p align=center>Figura 7.2 Referencias visuales grisáceas/verdes</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/abf320a2-9f28-4268-883e-da2d03527b37" width= '300' height='300'/>
</p>
<p align=center>Figura 7.3 Referencia de las paletas de color (personajes vs enemigos)</p>

### 8.2 Armas y habilidades
#### 8.2.1 Armas
Dependiendo de con qué tipo de arma juegue el personaje, optará por 3 tipos distintos de habilidad (por tipo de arma) además de otras 6 habilidades generales cada vez que suba de nivel.

Entre estas habilidades, se podrán seleccionar 1 entre 3 por cada nivel que se suba. Las habilidades ya escogidas no volverán a aparecer en próximas elecciones.

A nivel 5 nuestra arma predeterminada evolucionará a su versión mejorada.

##### Cuerpo a Cuerpo
- Hacha: Arma base a elegir con la que empiezas la partida. Daño elevado pero baja velocidad.

- Katana: Arma mejorada. Tiene un daño parecido al hacha pero lo compensa con más rango y más velocidad.

##### A distancia
- Machine Gun: Arma base con la que empiezas la partida. Tiene mucha cadencia de tiro pero bajo daño.

- Ray Gun:  Arma mejorada, dispara rayos láser. Puede no tener tanta cadencia como la Machine Gun, pero sus proyectiles son muchísimo más letales.

#### 8.2.2 Habilidades generales
- Habilidad 1 (Vampirismo): Matar enemigos tiene una probabilidad del 10% de regenerar la vida.

- Habilidad 2 (Atleta): Corres un 5% más rápido.

- Habilidad 3 (Resurgir del fénix): Solo se puede escoger 1 vez esta habilidad en toda la partida. Cuando te matan, tienes una segunda oportunidad: 5 segundos de invulnerabilidad y puedes seguir con la partida.

- Habilidad 4 (Coraza): Aumenta en un 10% tu resistencia a los golpes.

- Habilidad 5 (Suertudo): Aumenta la aparición de recursos obtenibles en un 15%

- Habilidad 6 (Letal): Aumenta el daño que realizas un 10%

#### 8.2.3 Habilidades jugando con armas cuerpo a cuerpo
- Habilidad 1 (Limpieza): Tus armas cuerpo a cuerpo tienen mayor zona de barrido (ataques más grandes)

- Habilidad 2 (Thumbaround): Tu habilidad y manejo con las armas cuerpo a cuerpo aumenta y atacas un 10% más rápido

- Habilidad 3 (Remolino): Cada 5 segundos, haces un barrido alrededor de tu personaje que provoca bastante daño.

#### 8.2.4 Habilidades jugando con armas a distancia
- Habilidad 1 (Sobreenfriamiento):  la velocidad de las balas aumenta un 5%

- Habilidad 2 (Rayo láser): crea una rayo láser cada 10s que se dispara hacia el enemigo más cercano al personaje y daña a los enemigos detrás del mismo.

- Habilidad 3 (Onda sónica): Lanza una onda expansiva cada 5 segundos, que realiza muy poco daño pero impacta a todos los enemigos en pantalla.

## 9. Enemigos
Existen diferentes tipos de enemigos que atacarán al jugador. Conforme avance el tiempo de juego, aparecerán adversarios de clases más fuertes. 

El ataque y vida de los enemigos están ligados a su tipo, así como su forma de enfrentarse al jugador y de moverse. Además, cada tipo de enemigo tiene un sprite asociado, es decir, una apariencia que lo distingue de otras clases. Tipos:

- Cuatro dedos (PV (Puntos de vida): 2   PD (Puntos de daño): 2)
  Descripción: Una abominación que se arrastra por el suelo e intenta tocar desesperadamente a los jugadores con uno de sus cuatro dedos, el cuál está iluminado de rojo.
  Trasfondo: Es una criatura inocente capaz de otorgar a otras razas la inmortalidad con su mero tacto. Sin embargo, desconoce que para los humanos su contacto no es una bendición sino una maldición y tan solo les sustrae la vida.
  Velocidad de movimiento: Media
  Tipo de ataque: Cuerpo a cuerpo.
  
- Serpiente láser (PV: 2  PD: 3)
  Descripción: Ágil reptil negro con forma de pistola. Su boca se abre para disparar rayos de plasma. Cada vez que lo hace, se queda quieta y una extremidad que sobresale de su cuello se contrae, a modo de gatillo.
  Trasfondo: Se dice que hace tan solo doce lunas, era usada en su planeta natal como arma de fuego. Pero esto llegó a su fin cuando descubrieron que sus portadores no tenían otras armas para defenderse de ellas.
  Velocidad de movimiento: Alta
  Velocidad de ataque: Baja
  Tipo de ataque: Rayo.

- Planetario (PV: 4  PD: 1)
  Descripción: Planetas enanos que giran en torno a un pequeño sol. Es como una galaxia funcional en miniatura. Cuando ataca, lanza pequeños planetas a altas velocidades.
  Trasfondo: En sus pequeños orbes habitaba todo un ecosistema de seres vivos, el cuál fue destruido cuando los Planetarios entraron en la atmósfera terrestre por accidente. Ahora buscan consuelo en la destrucción de todo lo ajeno.
  Velocidad de movimiento: Baja
  Velocidad de ataque: Alta
  Tipo de ataque: Proyectil
  Referencias:
  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/7cd992bf-c11a-477e-a77f-5f588f473b19" width= '300' height='300'/>
</p>
  
- Peces de Lava (PV: 6  PD: 2)
  Descripción: Criaturas de lava que están cubiertas por una esfera de vidrio. Por unos orificios que rodean su cápsula, disparan bolas de magma.
  Trasfondo: Los peces de lava habitan dentro de prácticamente todos los planetas y forman parte de su núcleo. Cuando salen al exterior, se convierten en magma y pierden tanto su conciencia como su forma. Estos monstruos han sido cubiertos en vidrio para que no pierdan su esencia.
  Velocidad de movimiento: Ninguna. Permanecen estáticos.
  Velocidad de ataque: Media
  Tipo de ataque: Proyectil
  Referencia:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/3bc2a68b-a364-42a6-b420-8dfb1ede73ff" width= '300' height='300'/>
</p>

- Estrellado (PV: 7  PD: 1)
  Descripción: Dispara rayos dorados en cinco direcciones distintas equidistantes. A la vez, lanza proyectiles en forma de estrella hacia el jugador. 
  Trasfondo: Cobran vida de los restos de estrellas fugaces a las que se les ha pedido un deseo. Cada vez que un Estrellado muere, se cumple el deseo con el que fueron creados. 
  Velocidad y patrón de movimiento: Alta
  Velocidad de ataque: Alta
  Tipo de ataque: Rayos y proyectiles
  Referencias:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/7e0d3fe6-bfcd-481c-b447-0e79964c5e9f" width= '300' height='300'/>
</p>

- Carroñero (PV: 10  PD: 5)
  Descripción: Alienígena alto y alargado con mandíbulas enormes. Una resistente coraza lo protege de ataques mientras muerde a diestro y siniestro.
  Trasfondo: Los Carroñeros son hambrientas criaturas que habitan en agujeros negros y solo han conocido la materia muerta. Cuando fueron traídos a la Tierra, su voracidad aumentó y sus gustos cambiaron. Ahora solo se conforman con lo que está vivo.
  Velocidad y patrón de movimiento: Media
  Velocidad de ataque: Media
  Tipo de ataque: Cuerpo a cuerpo
  Referencias:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/742f1636-46a7-40ea-8407-f137e43502f2" width= '300' height='300'/>
</p>
En cuanto a sus paletas de colores, nos remitimos a los usados en el anterior apartado para demostrar el contraste con el de los jugadores:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/6b951402-e7f7-4ae1-bc1b-ac2f4a5eb0eb" width= '300' height='300'/>
</p>
<p align=center>Figura 8.1 Referencia de las paletas de color enemigos</p>

## 10. Equipo de desarrollo
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/7b877746-218d-4715-8c01-6705d83c5e59" width= '300' height='300'/>
</p>

El estudio Zepol Game Studios está conformado por:
- Sergio López Llorente
- Iván Jiménez Blas
- Alejandro Serrejón Beltrán
- Sonia Montero Nogales
- Elena Milara Mencía

## 11. Anexo y referencias
- (s.f.). GitHub: Let’s build from here · GitHub. https://github.com/dsaltares/sion-tower/blob/master/doc/gdd/gdd.pdf

- poncle. (2022). Vampire Survivors [Videojuego]. https://store.steampowered.com/app/1794680/Vampire_Survivors/

- Nicalis, Inc. & Edmund McMillen. (2014). The Binding of Isaac: Rebirth [Videojuego]. Nicalis, Inc. https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/

- Blobfish. (2023). Brotato [Videojuego]. 
https://store.steampowered.com/app/1942280/Brotato/

- Coolors - The super fast color palettes generator! (s.f.). Coolors.co. https://coolors.co/

- penusbmic | pixel artist on Instagram: "Working on some doods” (WIP). (s.f.). Instagram. 
https://www.instagram.com/p/CIx8WFBH2kR/?igshid=1dzog3rit911a

- penusbmic | pixel artist on Instagram: "Working on some new doods" (sci-fi pack 11). (s.f.). Instagram. https://www.instagram.com/p/CLRjdUJnnJb/?igshid=mxvk1apchjtb&amp;epik=dj0yJnU9VjFnLTlPU2JkNU9yb01oUm9nOUtaWm9qMHViaU11UTQmcD0wJm49S1BNQngyUG9rVi1EUU9mbTdGRGxFdyZ0PUFBQUFBR1Vyd3Rr

- Weiterleitungshinweis. (s.f.). Google. https://www.google.com/url?sa=i&amp;url=https://www.freepik.es/vector-premium/lindo-gato-oreja-auriculares-auriculares-bluetooth-diseno-ilustracion-vectorial_17451473.htm&amp;psig=AOvVaw32QCDTUl0NCQvdBbWpc43a&amp;ust=1697639123808000&amp;source=images&amp;cd=vfe&amp;opi=89978449&amp;ved=0CBEQjRxqFwoTCPj3tNek_YEDFQAAAAAdAAAAABAE
- Ilustración de la dulzura japonesa dango street food | Vector Premium. (2022, 20 de junio). Freepik. https://www.freepik.es/vector-premium/ilustracion-dulzura-japonesa-dango-street-food_28498398.htm
- vecteezy. (s.f.). https://es.vecteezy.com/png-gratis/estrella-fugaz.
- Google-Ergebnis für https://cdn.pixabay.com/photo/2022/02/15/07/46/insect-7014450_1280.png. (s.f.). Google. https://www.google.com/imgres?imgurl=https://cdn.pixabay.com/photo/2022/02/15/07/46/insect-7014450_1280.png&amp;tbnid=qA8X5qg8vKaqcM&amp;vet=12ahUKEwjBxp6Gqf2BAxXTnycCHSCgDIwQMygWegUIARCqAQ..i&amp;imgrefurl=https://pixabay.com/es/vectors/insecto-escarabajo-dibujo-7014450/&amp;docid=D93FZEjTkHwTFM&amp;w=1280&amp;h=711&amp;q=insecto%20dibujo&amp;ved=2ahUKEwjBxp6Gqf2BAxXTnycCHSCgDIwQMygWegUIARCqAQ
- Equipo Editorial de ExpertoAnimal. (2016, 25 de febrero). Pez dorado - Características, cuidados y salud (con fotos). expertoanimal.com. https://www.expertoanimal.com/carpas/pez-dorado.html
- Qué es una galaxia y cómo se forman estas “colonias espaciales” - National Geographic en Español. (s.f.). National Geographic en Español. https://www.ngenespanol.com/el-espacio/que-es-una-galaxia-y-como-se-forman-estas-colonias-espaciales/

- Pokemon Rojo Fuego Gameboy Advance Laboratorio Pokémon
https://pokemon.fandom.com/es/wiki/Laboratorio_del_profesor_Oak


- Looper - The Last Mission by Coding4rtist. (s.f.). itch.io. https://coding4rtist.itch.io/looper-the-last-mission
Sci-fi User Interface by buch415.deviantart.com on @DeviantArt | Pixel art design, Pixel art tutorial, Pixel art games. (s.f.). Pinterest. https://ar.pinterest.com/pin/560276009878561744/
Released my own Vampire Survivors-like game! - Godot Forums. (s.f.). Godot Forums. https://godotforums.org/d/31391-released-my-own-vampire-survivors-like-game


