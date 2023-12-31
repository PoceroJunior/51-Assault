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
El objetivo principal de *51 Assault* es sobrevivir durante 3 minutos proporcionar una experiencia de juego intensa en la que los jugadores enfrentan la invasión alienígena en conjunto.
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

El mapa tendrá delimitadas dos zonas. 

- La primera de estas, ocupando por completo el espacio generable, se usará para spawnear enemigos en las zonas externas de la pantalla para que no haya pop-up de los mismos. 

- La segunda será de, aproximadamente, 3 ⁄ 4 del total generable. Estando dentro de la primera, evita que se generen enemigos en su espacio visible. Será lo que el jugador vea en todo momento. El espacio es, en un principio, estático.

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
Existirá un único nivel en el que se desarrollará el juego, con posibilidad de ampliación a otros niveles de mayor dificultad, con diferente escenario, enemigos y armas en el futuro. En este nivel los jugadorwa tendrán total libertad para moverse por toda la zona utilizando WASD (en el caso del jugador 1) y IJKL (en el caso del jugador 2) dentro de unos límites preestablecidos. Los enemigos aparecerán fuera de la pantalla pero nunca fuera del mundo para mejorar la progresión y la intensidad de la partida.

#### 3.1.2. Focos de aparición
Los personajes principales aparecerán en el centro del mapa al empezar la partida y los enemigos aparecerán fuera de la pantalla atraídos por los personajes principales.

#### 3.1.3. Intensidad
La dificultad del juego será proporcional al tiempo que sobrevivan los personajes, implementando nuevos enemigos y más de estos.

#### 3.1.4. Armas de personajes
Los personajes principales empezarán el nivel con un arma principal.

#### 3.1.5. Recursos obtenibles	
Para hacer frente a la oleada constante de enemigos; y de cara a futuras implementaciones, los jugadores dispondrán de una ayuda adicional. Serán capaces de recoger items (objetos) al caminar por encima de ellos, sin necesidad de pulsar otro botón adicional. Dichos recursos aparecerán progresivamente en el terreno de juego y funcionarán como consumibles, mejoras o boosts (potenciadores) temporales. 
Cada objeto tiene unas propiedades y funcionalidades únicas. Sin embargo, depende de los jugadores el saber gestionar cuándo recogerlos, ya que los objetos se activan al momento de entrar en contacto con el cuerpo del jugador. 
Algunos de los tipos de recursos obtenibles son:

- Dango: Regenera 5 PV. Tasa de spawneo: Media

  Referencia:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/2303afdb-0dd6-4c73-b098-f5f2f738f4f0" width= '200' height='200'/>

- Neko cascos: Por 15 segundos, aumenta la velocidad del movimiento del jugador en un 50% y su velocidad de ataque en un 30%. Durante ese periodo de tiempo se escuchará una canción de una serie anime. Tasa de spawneo: Media
  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/0f407cec-dcf6-4567-80ba-7a9d9afd1b54" width= '200' height='200'/>
</p>

#### 3.1.6. Derrota	
Los jugadores pierden la partida cuando uno de los dos muere; es decir, su vida se reduce a cero puntos de vida.
<p align="center">
<img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/9362e0b6-f0d6-4ce6-8b16-c1e1aada4fe7"
</p>
  
#### 3.1.7. Victoria
Para conseguir superar el nivel, los jugadores precisarán de eliminar a cierta cantidad de enemigos antes de poder finalizar o sobrevivir el tiempo que se indique.
  
<p align="center">
<img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/0d22f604-6b9a-4843-9d0e-4ad6ece85276"
</p>

## 4. Interfaz y flujo de juego
### 4.1. Estilo
Las interfaces del juego están diseñadas para reflejar el apartado artístico del mismo, caracterizado por un estilo moderno e industrial. Los elementos visuales se conformarán con una estética contemporánea, para crear una experiencia visualmente atractiva y coherente con el contexto del juego.

Los botones se presentarán con un tamaño generoso y una claridad visual notable, asegurando que sean fácilmente distinguibles y accesibles para el jugador. La tipografía utilizada será legible, proporcionando una experiencia de usuario fluida y agradable.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/97834b41-18b7-4ca8-92b7-c0eb375970c8" width= '500' height='300'/>
</p>

<p align=center>Figuras 4.1 Menú principal del juego</p>

En contraste, la interfaz durante el juego adoptará un enfoque minimalista. Se eliminarán las distracciones visuales innecesarias, permitiendo así que el jugador se sumerja completamente en la experiencia del juego. La información esencial, como el tiempo restante o cualquier otro indicador relevante para la partida en curso, se presentará de forma clara y concisa, garantizando que la atención del jugador esté plenamente centrada en la acción del juego.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/845a4b6a-d728-4543-800f-e5142bfbb403" width= '400' height='300'/>
</p>
<p align=center>Figuras 4.2 UI en partida</p>

### 4.2 Flujo de pantalla
Este enfoque meticuloso en el diseño de la interfaz no sólo respetará el estilo artístico del juego, sino que también contribuirá significativamente a la inmersión del jugador, creando una experiencia de juego envolvente y estéticamente coherente.
La primera escena que el jugador encontrará es la pantalla del menú principal, donde se le presentarán diversas opciones:

- Jugar: Al seleccionar esta opción, el jugador iniciará el juego y será dirigido a la pantalla de juego.
- Opciones: Esta opción permitirá acceder a los ajustes de sonido.
- Créditos: Al elegir esta opción, se mostrarán los nombres de los miembros del equipo de desarrollo del juego.
- Salir: Al seleccionar esta opción, el jugador saldrá del juego.

Tanto en las pantallas de Créditos como en las de Opciones, existirá un botón claramente visible que permitirá regresar al menú principal en cualquier momento.
En lo que respecta a la pantalla del juego, se mostrará el tiempo restante para que el juego concluya.
Es importante mencionar que las pantallas de victoria y derrota constituirán dos pantallas diferentes a las cuales el jugador será redirigido según el resultado alcanzado durante el juego. Estas escenas proporcionarán una distinción entre la victoria y la derrota, ofreciendo una experiencia inmersiva para el jugador.

Estos estados de las pantallas están reflejados en la siguiente imagen:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/e677f099-a41a-4f7d-a005-0647ece4c083" width= '590' height='600'/>
</p>
<p align=center>Figura 4.1 Estados del videojuego</p>


## 5. Niveles de dificultad
La dificultad del juego es la misma (predeterminada) en todas las partidas. Pero esto no lo exime de tener dificultad, ya que gestionar y sobrevivir a varios enemigos se presta complicado.

## 6. Estilo de juego
En nuestro tipo de juego, al ser un hack slash cooperativo, será conveniente la cooperación entre los dos jugadores. La coordinación y la comunicación será especialmente importante conforme pase el tiempo y las oleadas sean más numerosas y dificiles de manejar.

## 7. Música y Audio

A visión de futuro la música estará creados a mano. Será de estilo 16bit, pero sonará de manera constante y se escuchará alejada. 
Actualmente la música de 51-Assault no es original si no que es la siguiente canción:

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/2c8e14c0-33b7-4c53-908c-2df73d5f7c64" width= '500' height='100'/>
</p>

## 8. Personajes, armas y habilidades
### 8.1 Personajes
Como se ha mencionado anteriormente el estilo artístico será sencillo y realizado en pixelart, con una temática moderna, ya que en la pantalla se mostrarán distintos tipos de enemigos y personajes deben distinguirse y verse con claridad.

La paleta de colores de los 2 personajes jugables serán complementarios, como ejemplo de otros juegos (por ejemplo, jugador 1 tonos rojizos, jugador 2 tonos azulados). Esto ayudará a distinguirlos de los enemigos.
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/ba9175f1-223b-4f29-a2cd-f6570f55afbc" width= '500' height='150'/>
</p>
<p align=center>Figura 7.1 Spritesheet del Jugador 1</p>


<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/a2966417-4a82-488a-80eb-6285b374c4bb" width= '500' height='150'/>
</p>
<p align=center>Figura 7.3 Spritesheet del Jugador 2</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/5f3778aa-a374-45fd-b36a-99d86d38c57a" width= '300' height='300'/>
</p>
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/435c3b02-c5c4-4164-b9da-b1293a892643" width= '300' height='300'/>
</p>
<p align=center>Figura 7.4 Personajes principales</p>


### 8.2 Armas y habilidades
#### 8.2.1 Armas
De cara a futuras implementaciones y dependiendo de con qué tipo de arma juegue el personaje, se dará la opción de cambiar de arma.

##### Cuerpo a Cuerpo
- Hacha: Arma base a elegir con la que empiezas la partida.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/3ec45934-e790-4c04-9bcd-356748ccf8dd" width= '300' height='300'/>
</p>
<p align=center>Figura 8.1 Hacha</p>


- Espada: Arma base a elegir con la que empiezas la partida.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/f012b5f6-c351-419a-81ff-148468594364" width= '300' height='300'/>
</p>
<p align=center>Figura 8.2 Espada</p>

##### A distancia
- Pistola: Tiene mucha cadencia de tiro pero bajo daño.

  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/842858db-7e73-45b7-a194-8bbaf938182b" width= '300' height='300'/>
</p>
<p align=center>Figura 8.3 Pistola</p>


- Ray Gun: Puede no tener tanta cadencia como la Machine Gun, pero sus proyectiles son muchísimo más letales.
 
  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/d57f17d0-b231-428d-845f-2210094b1c91" width= '300' height='300'/>
</p>
<p align=center>Figura 8.4 RayGun</p>


## 9. Enemigos
Existen diferentes tipos de enemigos que atacarán al jugador. Conforme avance el tiempo de juego, aparecerán adversarios de clases más fuertes. 

El ataque y vida de los enemigos están ligados a su tipo, así como su forma de enfrentarse al jugador y de moverse. Además, cada tipo de enemigo tiene un sprite asociado, es decir, una apariencia que lo distingue de otras clases. Tipos:

- Cuatro dedos (PV (Puntos de vida): 2   PD (Puntos de daño): 2)
  Descripción: Una abominación que se arrastra por el suelo e intenta tocar desesperadamente a los jugadores con uno de sus cuatro dedos, el cuál está iluminado de rojo.
  Trasfondo: Es una criatura inocente capaz de otorgar a otras razas la inmortalidad con su mero tacto. Sin embargo, desconoce que para los humanos su contacto no es una bendición sino una maldición y tan solo    les sustrae la vida.
  Velocidad de movimiento: Media
  Tipo de ataque: Cuerpo a cuerpo.
  Referencia:
  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/4d461806-4afd-4440-9ddf-ebf8cef93902" width= '300' height='300'/>
  </p>

- Peces de Lava (PV: 6  PD: 2)
  Descripción: Criaturas de lava que están cubiertas por una esfera de vidrio. Por unos orificios que rodean su cápsula, disparan bolas de magma.
  Trasfondo: Los peces de lava habitan dentro de prácticamente todos los planetas y forman parte de su núcleo. Cuando salen al exterior, se convierten en magma y pierden tanto su conciencia como su forma. Estos monstruos han sido cubiertos en vidrio para que no pierdan su esencia.
  Velocidad de movimiento: Ninguna. Permanecen estáticos.
  Velocidad de ataque: Media
  Tipo de ataque: Cuerpo a cuerpo.
  Referencia:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/a6d4bb6a-79d7-494c-8757-b1b5dbba81d7" width= '300' height='300'/>
</p>

- Estrellado (PV: 7  PD: 1)
  Descripción: Dispara rayos dorados en cinco direcciones distintas equidistantes. A la vez, lanza proyectiles en forma de estrella hacia el jugador. 
  Trasfondo: Cobran vida de los restos de estrellas fugaces a las que se les ha pedido un deseo. Cada vez que un Estrellado muere, se cumple el deseo con el que fueron creados. 
  Velocidad y patrón de movimiento: Alta
  Velocidad de ataque: Alta
  Tipo de ataque: Cuerpo a cuerpo
  Referencias:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/89eb0efc-9cfa-472f-874b-212b1bdf4874" width= '300' height='300'/>
</p>

- Carroñero (PV: 10  PD: 5)
  Descripción: Alienígena alto y alargado con mandíbulas enormes. Una resistente coraza lo protege de ataques mientras muerde a diestro y siniestro.
  Trasfondo: Los Carroñeros son hambrientas criaturas que habitan en agujeros negros y solo han conocido la materia muerta. Cuando fueron traídos a la Tierra, su voracidad aumentó y sus gustos cambiaron. Ahora solo se conforman con lo que está vivo.
  Velocidad y patrón de movimiento: Media
  Velocidad de ataque: Media
  Tipo de ataque: Cuerpo a cuerpo
  Referencias:
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/a15c330d-3d65-414d-8807-da1aeedb4953" width= '300' height='300'/>
</p>

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


