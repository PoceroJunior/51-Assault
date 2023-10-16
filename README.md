# 51 Assault
*51 Assault es un juego de acción cooperativa en pixel art inspirado en los más recientes éxitos de los juegos roguelike y los hack and slash. Este documento presenta una visión general del proyecto, destacando sus aspectos clave. Combina la acción intensa y la estrategia cooperativa en un entorno pixel art que captura la esencia de la lucha desesperada de la humanidad contra una amenaza alienígena apocalíptica.*

~~~
Integrantes
- Sergio López Llorente: 
- Iván Jiménez Blas: 
- Alejandro Serrejón Beltrán: a.serrejon.2021@alumnos.urjc.es
- Sonia Montero Nogales:
- Elena Milara Mencía: e.milara.2021@alumnos.urjc.es
~~~

# 51 Assault: Documento de diseño de videojuego

## Indice
---
~~~
1. Introducción
  1.1 Concepto de juego 
  1.2 Caracteristicas principales
  1.3 Género
  1.4 Referencias
  1.5 Plataforma de salida
  1.6 Objetivo
  1.7 Público objetivo
  1.8 Estilo visual
2. Mapa de juego
  2.1 Escenario
3. Mecánicas de juego
  3.1 Jugabilidad
    3.1.1. Nivel
    3.1.2. Focos de aparición
    3.1.3. Intensidad
    3.1.4. Habilidades y armas de personajes
    3.1.5. Recursos obtenibles	
    3.1.6. Derrota	
    3.1.7. Victoria
4. Interfaz y flujo de juego
  4.1. Estilo
  4.2 Flujo de pantalla
5. Niveles de dificultad
6. Estilo de juego
7. Personajes, armas y habilidades
  7.1 Personajes
  7.2 Armas y habilidades
    7.2.1 Armas
      Cuerpo a Cuerpo
      A distancia
    7.2.2 Habilidades generales
    7.2.3 Habilidades jugando con armas cuerpo a cuerpo
    7.2.4 Habilidades jugando con armas a distancia
8. Enemigos
9. Equipo de desarrollo
10. Anexo y referencias
~~~
## Indice
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

  **Vampire Survivors**
![FJ4Tw-nWQAcljSH](https://github.com/PoceroJunior/51-Assault/assets/92980019/6559df3e-78e5-43dc-9255-2687336e59ce)
<p style="text-align: center;">Figura 1.4.1 Espacio jugable “Vampire Survivors”</p>

![2x1_NSwitchDS_VampireSurvivors](https://github.com/PoceroJunior/51-Assault/assets/92980019/1256e844-7bb9-4a87-8682-50847b1d5de1)
<p style="text-align: center;">Figura 1.4.2 Carátula del juego “Vampire Survivors”</p>

  **Brotato**
![images](https://github.com/PoceroJunior/51-Assault/assets/92980019/2a82ad13-ba48-4e43-a607-90ddbf7e8d77)
<p style="text-align: center;">Figura 1.4.3 Espacio jugable “Brotato”</p>
  
![2x1_NSwitchDS_Brotato_image1600w](https://github.com/PoceroJunior/51-Assault/assets/92980019/bb9dd02f-60d7-40b0-9d85-1d9fa21bf4eb)
<p style="text-align: center;">Figura 1.4.4 Carátula del juego “Brotato”</p>

  **Enter the Gungeon**
  ![EnterTheGungeon_S2_1200x1600_1200x1600-4d79aae1e860c191c706e4e8bfdef244](https://github.com/PoceroJunior/51-Assault/assets/92980019/cdbdb680-08d8-4269-97fb-9995b2ab409a)
<p style="text-align: center;">Figura 1.4.6 Carátula del juego “Enter the Gungeon”</p>

![enter-the-gungeon-104807](https://github.com/PoceroJunior/51-Assault/assets/92980019/1a27afa5-2db3-4af6-bd6f-2e6ebd06550f)
<p style="text-align: center;">Figura 1.4.5 Espacio jugable “Enter the Gungeon”</p>

  **The Binding of Isaac**
  ![The-Binding-Of-Isaac-Rebirth-1024x680](https://github.com/PoceroJunior/51-Assault/assets/92980019/30b738e9-cec7-471c-8a68-5c39b5bd7f69)
<p style="text-align: center;">Figura 1.4.7 Espacio jugable “The Binding of Isaac”</p>

![The_Binding_of_Issac_Rebirth_cover](https://github.com/PoceroJunior/51-Assault/assets/92980019/9ad21605-682f-4879-9c67-5bc7c1ac2544)
<p style="text-align: center;">Figura 1.4.8 Carátula del juego “The Binding of Isaac”</p>

### 1.5 Plataforma de salida
### 1.6 Objetivo
### 1.7 Público objetivo
### 1.8 Estilo visual

## 2. Mapa de juego
### 2.1 Escenario

## 3. Mecánicas de juego

### 3.1 Jugabilidad
#### 3.1.1. Nivel
#### 3.1.2. Focos de aparición
#### 3.1.3. Intensidad
#### 3.1.4. Habilidades y armas de personajes
#### 3.1.5. Recursos obtenibles	
#### 3.1.6. Derrota	
#### 3.1.7. Victoria

## 4. Interfaz y flujo de juego

### 4.1. Estilo

### 4.2 Flujo de pantalla

## 5. Niveles de dificultad

## 6. Estilo de juego

## 7. Personajes, armas y habilidades
### 7.1 Personajes
### 7.2 Armas y habilidades
#### 7.2.1 Armas
##### Cuerpo a Cuerpo
##### A distancia
#### 7.2.2 Habilidades generales
#### 7.2.3 Habilidades jugando con armas cuerpo a cuerpo
#### 7.2.4 Habilidades jugando con armas a distancia

## 8. Enemigos

## 9. Equipo de desarrollo

## 10. Anexo y referencias

