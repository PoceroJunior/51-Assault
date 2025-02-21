~~~
Enlace del video de Youtube: https://www.youtube.com/watch?v=Gs-S08Klm6w&ab_channel=ZepolStudios
~~~
# 51 Assault
*51 Assault es un juego de acción cooperativa en pixel art inspirado en los más recientes éxitos de los juegos roguelike y los hack and slash. Este documento presenta una visión general del proyecto, destacando sus aspectos clave. Combina la acción intensa y la estrategia cooperativa en un entorno pixel art que captura la esencia de la lucha desesperada de la humanidad contra una amenaza alienígena apocalíptica.*

~~~
Integrantes:
- Sergio López Llorente: https://github.com/SergioZepol | Usuario Github: SergioZepol (Anteriormente ZepolTtv) | s.lopezl.2021@alumnos.urjc.es
- Iván Jiménez Blas: Usuario Github: StrubleI | https://github.com/StrubleI | i.jimenezb.2021@alumnos.urjc.es
- Alejandro Serrejón Beltrán: Usuario Github: SerreGod | https://github.com/SerreGod | a.serrejon.2021@alumnos.urjc.es
- Elena Milara Mencía: Usuario Github: PoceroJunior | https://github.com/PoceroJunior | e.milara.2021@alumnos.urjc.es
- Sonia Montero Nogales: Usuario Github: Sonia6u | https://github.com/Sonia6u | s.montero.2019@alumnos.urjc.es
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
<p align=center>Figura 1.4.5 Carátula del juego “Enter the Gungeon”</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/1a27afa5-2db3-4af6-bd6f-2e6ebd06550f" width= '400' height='300'/>
</p>
<p align=center>Figura 1.4.6 Espacio jugable “Enter the Gungeon”</p>

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
 <p align=center> Figuras 2.3 Referencia de escenario de Looper</p>

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
<p align=center>Figuras 3.5.1 Referencia de escenario de recursos</p>
- Neko cascos: Por 15 segundos, aumenta la velocidad del movimiento del jugador en un 50% y su velocidad de ataque en un 30%. Durante ese periodo de tiempo se escuchará una canción de una serie anime. Tasa de spawneo: Media
  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/0f407cec-dcf6-4567-80ba-7a9d9afd1b54" width= '200' height='200'/>
</p>
<p align=center>Figuras 3.5.2 Referencia de escenario de recursos</p>

#### 3.1.6. Derrota	
Los jugadores pierden la partida cuando uno de los dos muere; es decir, su vida se reduce a cero puntos de vida.
<p align="center">
<img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/9362e0b6-f0d6-4ce6-8b16-c1e1aada4fe7"
</p>
  <p align=center>Figuras 3.1.6.3 Referencia de escenario de recursos</p>
  
#### 3.1.7. Victoria
Para conseguir superar el nivel, los jugadores precisarán de eliminar a cierta cantidad de enemigos antes de poder finalizar o sobrevivir el tiempo que se indique.
  
<p align="center">
<img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/0d22f604-6b9a-4843-9d0e-4ad6ece85276"
</p>
<p align=center>Figuras 3.1.7.1 Referencia de escenario de recursos</p>

##  4. Interfaz y flujo de juego
### 4.1. Estilo
Las interfaces del juego están diseñadas para reflejar el apartado artístico del mismo, caracterizado por un estilo moderno e industrial. Los elementos visuales se conformarán con una estética contemporánea, para crear una experiencia visualmente atractiva y coherente con el contexto del juego.

Los botones se presentarán con un tamaño generoso y una claridad visual notable, asegurando que sean fácilmente distinguibles y accesibles para el jugador. La tipografía utilizada será legible, proporcionando una experiencia de usuario fluida y agradable.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/97834b41-18b7-4ca8-92b7-c0eb375970c8" width= '500' height='300'/>
</p>

<p align=center>Figuras 4.1.1 Menú principal del juego</p>

En contraste, la interfaz durante el juego adoptará un enfoque minimalista. Se eliminarán las distracciones visuales innecesarias, permitiendo así que el jugador se sumerja completamente en la experiencia del juego. La información esencial, como el tiempo restante o cualquier otro indicador relevante para la partida en curso, se presentará de forma clara y concisa, garantizando que la atención del jugador esté plenamente centrada en la acción del juego.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/845a4b6a-d728-4543-800f-e5142bfbb403" width= '400' height='300'/>
</p>
<p align=center>Figuras 4.1.2 UI en partida</p>

### 4.2 Flujo de pantalla
Este enfoque meticuloso en el diseño de la interfaz no sólo respetará el estilo artístico del juego, sino que también contribuirá significativamente a la inmersión del jugador, creando una experiencia de juego envolvente y estéticamente coherente.
La primera escena que el jugador encontrará es la pantalla del menú principal, donde se le presentarán diversas opciones:

- Jugar: Al seleccionar esta opción, el jugador iniciará el juego y será dirigido a la pantalla de juego.
- Opciones: Esta opción permitirá acceder a los ajustes de sonido.
- Créditos: Al elegir esta opción, se mostrarán los nombres de los miembros del equipo de desarrollo del juego.
- Guía: Muestra un pequeño resumen de los controles y el objetivo del juego.
- Salir: Al seleccionar esta opción, el jugador saldrá del juego.

Tanto en las pantallas de opciones, créditos y guía, existirá un botón claramente visible que permitirá regresar al menú principal en cualquier momento.
En lo que respecta a la pantalla del juego, se mostrará el tiempo restante para que el juego concluya.
Es importante mencionar que las pantallas de victoria y derrota constituirán dos pantallas diferentes a las cuales el jugador será redirigido según el resultado alcanzado durante el juego. Estas escenas proporcionarán una distinción entre la victoria y la derrota, ofreciendo una experiencia inmersiva para el jugador.

Estos estados de las pantallas están reflejados en la siguiente imagen:

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/da982b24-6d08-4b90-83f0-c14fc2c82777" width= '800' height='600'/>
</p>
<p align=center>Figura 4.2 Estados del videojuego</p>


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
<p align=center>Figura 7.1 Música del juego</p>

## 8. Personajes, armas y habilidades
### 8.1 Personajes
Como se ha mencionado anteriormente el estilo artístico será sencillo y realizado en pixelart, con una temática moderna, ya que en la pantalla se mostrarán distintos tipos de enemigos y personajes deben distinguirse y verse con claridad.

La paleta de colores de los 2 personajes jugables serán complementarios, como ejemplo de otros juegos (por ejemplo, jugador 1 tonos rojizos, jugador 2 tonos azulados). Esto ayudará a distinguirlos de los enemigos.
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/ba9175f1-223b-4f29-a2cd-f6570f55afbc" width= '500' height='150'/>
</p>
<p align=center>Figura 8.1.1 Spritesheet del Jugador 1</p>


<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/92980019/a2966417-4a82-488a-80eb-6285b374c4bb" width= '500' height='150'/>
</p>
<p align=center>Figura 8.1.2 Spritesheet del Jugador 2</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/5f3778aa-a374-45fd-b36a-99d86d38c57a" width= '300' height='300'/>
</p>

<p align=center>Figura 8.1.3 Personajes principales</p>

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/435c3b02-c5c4-4164-b9da-b1293a892643" width= '300' height='300'/>
</p>
<p align=center>Figura 8.1.4 Personajes principales</p>


### 8.2 Armas y habilidades
#### 8.2.1 Armas
De cara a futuras implementaciones y dependiendo de con qué tipo de arma juegue el personaje, se dará la opción de cambiar de arma.

##### Cuerpo a Cuerpo
- Hacha: Arma base a elegir con la que empiezas la partida.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/3ec45934-e790-4c04-9bcd-356748ccf8dd" width= '300' height='300'/>
</p>
<p align=center>Figura 8.2.1 Hacha</p>


- Espada: Arma base a elegir con la que empiezas la partida.

<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/f012b5f6-c351-419a-81ff-148468594364" width= '300' height='300'/>
</p>
<p align=center>Figura 8.2.2 Espada</p>

##### A distancia
- Pistola: Tiene mucha cadencia de tiro pero bajo daño.

  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/842858db-7e73-45b7-a194-8bbaf938182b" width= '300' height='300'/>
</p>
<p align=center>Figura 8.3.1 Pistola</p>


- Ray Gun: Puede no tener tanta cadencia como la Machine Gun, pero sus proyectiles son muchísimo más letales.
 
  <p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100692877/d57f17d0-b231-428d-845f-2210094b1c91" width= '300' height='300'/>
</p>
<p align=center>Figura 8.3.2 RayGun</p>


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
  <p align=center>Figura 9.1 Cuatro dedos</p>

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
  <p align=center>Figura 9.2 Peces de lava</p>
  
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
  <p align=center>Figura 9.3 Estrellado</p>
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
  <p align=center>Figura 9.4 Carroñero</p>
  
## 10. Diagrama de clases
A continuación se muestra el diagrama de clases de la aplicación
<p align="center">
  <img src="https://github.com/PoceroJunior/51-Assault/assets/100695225/0bbbbba8-61a6-46d2-9057-35387a506658" width= '500' height='300'/>
</p>
  <p align=center>Figura 10.1 Diagrama de clases</p>

## 11. API REST 
Funcionalidades implementadas

El servidor puede saber en todo momento los clientes que se conectan y desconectan. Los clientes por su lado pueden saber el estado de la conexión del resto de clientes y del servidor en todo momento (P.Ej. visualizar los usuarios conectados). 

La funcionalidad que se ha implementado es un sistema de inicio y registro de sesión, en la que existe una persistencia de datos. La información se almacena en un txt para poder recuperarse en un futuro. De esta manera se demuestra la persistencia de la aplicación. 
Además, se ha agregado un contador de jugadores conectados para tener un registro de los jugadores que se encuentran en línea en ese momento.
Controladores

Para empezar, hemos creado dos elementos: un array lista para guardar todos los usuarios que se registren y al que accederemos para ver si pueden loguearse, y una variable tipo “long” para llevar el conteo de jugadores.

· GetMapping
La opción @GetMapping se usó con la única finalidad de recibir del servidor la variable contador, la cual va aumentando según los jugadores se conectan o, en su defecto, decrementa cuando se desconectan. La función que lo llama es obtenerContadorCierres que devuelve el contador almacenado en el controlador.

· PostMapping
El @PostMapping se usa varias veces en nuestro controlador para diferentes cosas:

La función LoginUser se encarga de explorar un archivo de tipo .txt en el cual se han almacenado previamente combinaciones de usuario y contraseña. Este procedimiento compara la información de usuario y contraseña proporcionada con los registros existentes. Si se encuentra una correspondencia entre los datos suministrados y los almacenados en el registro, la función emite un mensaje en la consola del sistema indicando "Inicio de sesión exitoso".
En cambio, si no se encuentra una coincidencia, se muestra el mensaje "Credenciales incorrectas" para notificar que el inicio de sesión no fue exitoso. La función RegisterUser registra un nuevo usuario a la lista existente, asignándole una id única para distinguirlo de los demás registros. Esta adición se realiza mediante el uso de la función saveInFile, la cual añade al nuevo usuario a la lista y almacena esta información en un archivo .txt. En este archivo se guardan tanto el usuario como su correspondiente contraseña, facilitando así su posterior uso en el proceso de inicio de sesión. 

La función DecrementarContadorCierres hace que los jugadores cada vez que cierren su navegador decrementa en 1 el valor de la variable “contador” para llevar la cuenta. En caso de que sea inferior a 0 por algún error, se quedará en 0. Devuelve un mensaje por consola que dice “Contador de cierres decrementado exitosamente”.

· PutMapping

El PutMapping solo tiene un uso en nuestro juego y es analizar el documento donde está la información de los usuarios y cambiar la contraseña de los que quieran hacerlo por otra nueva. 
Funciona gracias a la función updatePassword que usa de auxiliar otra función llamada updatePasswordInFile, encargada de comparar todos los usuarios y contraseñas del documento con el usuario y contraseña dados.
En caso de encontrarlo, mantiene el usuario y cambia la contraseña antigua por la nueva proporcionada por el propio usuario.

· DeleteMapping

Al igual que en el anterior, el DeleteMapping funciona gracias a una función llamada deleteUser que usa de auxiliar otra llamada deleteUserFromFile, encargada de comparar el usuario y la contraseña que recibe con todos los usuarios y contraseñas del documento.
En caso de encontrarlo, elimina ambos del documento y actualiza este con la nueva lista que se crea.

## 12. Websockets

Información Importante de las Funcionalidades:

Funcionalidades que se han llevado a cabo mediante WebSockets:

- Selección de personaje
- Posición jugadores de jugadores y sus armas, y sus animaciones y “flips”
- Evento de atacar y animaciones
- Pulsar el botón de pausa
- Pulsar el botón de salir

#### Selección de Personaje

Cuando los jugadores han dado a iniciar en la ventana de juego, se establece que se ha seleccionado el personaje correspondiente y se avisa al siguiente jugador que le de a iniciar para que este sea el jugador del otro color.

#### Posición de Jugadores y Armas, y sus Animaciones y “Flips”

Se actualiza la posición de los jugadores y sus armas, así como sus animaciones y “flips” (inversiones horizontales), para asegurar que la información de estado de cada jugador esté sincronizada en los dos clientes conectados.

#### Evento de Atacar y Animaciones

La funcionalidad de ataque permite que los jugadores realicen acciones de ataque, las cuales incluyen animaciones correspondientes. Estas acciones se sincronizan entre los clientes y el servidor.

#### Pulsar el Botón de Pausa

La acción de pausar el juego en la pantalla de uno de los clientes se comunica a través de WebSockets para también se pause en la pantalla del otro cliente. Sería equivalente a darle al botón de play dentro del menú de pausa ya que sería cambiar el valor booleano pasado anteriormente por este websocket de nuevo a “activado” para seguir jugando.

#### Pulsar el Botón de Salir

Similar al botón de pausa. Cuando un jugador decide salir del juego fuerza al otro cliente a también salirse ya que habrá terminado la partida.

## 13. Mejoras fase 5

Botón de guía con los controles del juego

Después de la fase 2 se añadió un botón en el menú que indica los controles del juego y que hacer para ganar y para perder (Explicación breve del juego).

Correcciones en el cronómetro de la Fase 2

Presentando la Fase 2 nos percatamos de que, por cada nueva partida iniciada en la misma sesión, el contador de la partida siempre era más rápido que el de la anterior.

Este problema al solucionarlo nos evitó muchos más problemas para la adaptación de nuestro juego a websockets.

Spawn de enemigos corregido  y mejorado

Al hacer los cambios pertinentes implementando websockets se optó por cambiar y mejorar el spawn de enemigos.

Publicación del juego en itch.io: https://aaaaa123456789.itch.io/51-assault

## 14. Instrucciones precisas para ejecutar la aplicación

~~~
Instrucciones para la ejecución:

Se creó un proyecto "Spring Starter Web" Tipo Maven y con la función "Spring Web", por ejemplo la llamaremos 51-Assault.

Para abrir el servidor desde spring tenemos que seleccionar esta carpeta como directorio de trabajo y lanzar la aplicación.

Luego debemos desplegar la carpeta "51-Assault" > "src/main/java" > "com.example.demo"

Aquí encontraremos el archivo "ServidorApplication.java", la cual debemos seleccionar con el click derecho del ratón, y seleccionar entre el menú de opciones que se despliega
"Run As..." > "Spring Boot App".

Para poder entrar al juego, necesitamos saber la ip del ordenador que lanza el servidor. Para esto seleccionamos la ipv4 haciendo la instrucción “ipconfig” en la consola del sistema.

Introduciremos esta misma ip en el espacio “ip” del siguiente enlace y accederemos a dicha página desde nuestro navegador: http://“ip”:8080

También se puede abrir el juego accediendo a esta dirección en el navegador:  http://localhost:8080

~~~

## 15. Equipo de desarrollo
El estudio Zepol Game Studios está conformado por:
- Sergio López Llorente
- Iván Jiménez Blas
- Alejandro Serrejón Beltrán
- Sonia Montero Nogales
- Elena Milara Mencía

## 16. Anexo y referencias
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


