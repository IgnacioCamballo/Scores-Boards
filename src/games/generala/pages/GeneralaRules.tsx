import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import Icon from 'react-native-vector-icons/AntDesign'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import Button from '@/components/atoms/Button'

export default function GeneralaRules() {
 const {lenguage} = useGeneralHooks()
  const navigate = useNavigate()

  const {from} = useParams()

  return (
    <View>
      <Button press={() => navigate(from === "1" ? "/generala/play" : "/generala")} color={theme.color.grey} style={styles.button}>
        <Icon
          name="doubleleft"
          color={theme.color.black}
          size={18}
        />
        <Text>{translations.back.find(i => i.lenguage === lenguage)?.text}</Text>
      </Button>

      {lenguage === "es" && 
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.textTitle}>Objetivo:</Text>
          <Text style={styles.textmiddle}>Ser el jugador con el mayor puntaje.</Text>
          <Text style={styles.textTitle}>Reglas:</Text>
          <Text style={styles.textmiddle}>• En primer lugar se determina quién comienza el juego lanzando un dado, el orden sigue las agujas del reloj</Text>
          <Text style={styles.textmiddle}>
            • Cada jugador puede hacer hasta tres tiros por turno y debe completar una categoría por vuelta, 
            por lo cual al finalizar el juego cada participante tendrá puntaje en cada una de las diez categorias.
          </Text>
          <Text style={styles.textmiddle}>
            • El jugador comienza tirando los cinco dados. Si obtiene en los cinco el mismo número habrá
            hecho generala servida y automáticamente gana el juego. Aún cuando se trate de un número en el cual ya haya hecho puntaje,
            se computará como generala servida. Si en su primer tiro el jugador hace un "juego mayor",
            apartará el o los dados que desee conservar y hará su segundo tiro con los restantes. Si lo desea, puede arrojar nuevamente
            los cinco dados, pues no está obligado todavía a elegir una categoría.
          </Text>
          <Text style={styles.textmiddle}>
            • Del mismo modo, en su segundo tiro apartará los dados que le resulten más convenientes y
            tirará con los restantes por tercera y última vez
          </Text>
          <Text style={styles.textmiddle}>
            • Si el jugador hace un "juego mayor" dentro de sus tres tiros, puede elegir entre anotar el puntaje correspondiente 
            a ese juego o multiplicar los dados del mismo número y anotar ese puntaje en la casilla perteneciente a ese número
          </Text>
          <Text style={styles.textmiddle}>
            • Una vez que el jugador haya completado su vuelta y anotado su puntaje, pasa los dados al
            participante de su izquierda y el juego continúa
          </Text>
          <Text style={styles.textTitle}>Puntaje:</Text>
          <Text style={styles.textmiddle}>
            • Para calcular el puntaje correspondiente a una categoría de número, se multiplica el total de dados donde éste 
            aparece por dicho número. Por ejemplo: tres 6 valen 18 puntos para el seis; dos 4 valen 8 puntos para el cuatro.
          </Text>
          <Text style={styles.textmiddle}>
            • Cuando se hace generala, poker o full, los valores que indican los dados no se tienen en
            cuenta para el puntaje. Por ejemplo, sea la generala de 1 ó de 6, vale 50 puntos.   
          </Text>
          <Text style={styles.textmiddle}>
            • Nótese sin embargo, que si un jugador ha hecho generala y luego saca cinco de un mismo
            número puede anotarse puntaje en dicho número si todavía no lo ha hecho. Por ejemplo, si
            un jugador ya ha hecho generala y saca cinco 6, se anotará 30 puntos al seis.
          </Text>
          <Text style={styles.textmiddle}>
            • Cuando se han completado todas las categorías del juego, se suman los puntajes.
            Gana el jugador que ha alcanzado el máximo puntaje.
          </Text>
          <Text style={styles.textTitle}>Juegos Mayores</Text>
          <Text style={styles.textmiddle}>
            • Generala = 5 dados del mismo número = 50 pts. Cuando esto se logra de un solo tiro, se llama
            generala servida y el jugador automáticamente gana el juego.
          </Text>
          <Text style={styles.textmiddle}>• Poker = 4 dados de un mismo número = 40 pts.</Text>
          <Text style={styles.textmiddle}>• Full = 3 de un mismo número y un par = 30 pts.</Text>
          <Text style={styles.textmiddle}>• Escalera = 1-2-3-4-5 ó 2-3-4-5-6 = 20 pts.</Text>
          <Text style={styles.textmiddle}>
            • Importante: se suman 5 puntos en cualquiera de los juegos mayores (salvo la generala) cuando son servidos, es decir, 
            que se logran en el primer tiro.
          </Text>
         
        </ScrollView>
      }
      {lenguage === "en" && 
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.textTitle}>Objective:</Text>
          <Text style={styles.textmiddle}>To be the player with the highest score.</Text>
          <Text style={styles.textTitle}>Rules:</Text>
          <Text style={styles.textmiddle}>
            • First, it is determined who starts the game by rolling a die, the order follows the clockwise direction.
          </Text>
          <Text style={styles.textmiddle}>
            • Each player can make up to three rolls per turn and must complete one category per round,
            so that at the end of the game each participant will have a score in each of the ten categories.
          </Text>
          <Text style={styles.textmiddle}>
            • The player starts by rolling the five dice. If they get the same number on all five, they will have made a "Yahtzee on the first roll" and automatically win the game.
            Even if it is a number in which they have already scored, it will be counted as a "Yahtzee on the first roll". If the player makes a "major hand" on their first roll,
            they will set aside the die or dice they wish to keep and make their second roll with the remaining dice. If they wish, they can roll all five dice again, as they are not yet obliged to choose a category.
          </Text>
          <Text style={styles.textmiddle}>
            • If the player does not achieve a "Yahtzee on the first roll", they can continue rolling the dice up to two more times, trying to improve their score.
          </Text>
          <Text style={styles.textmiddle}>
            • After the third roll, the player must choose a category to score their result. If they cannot or do not want to score in any category, they must choose one to mark with a zero.
          </Text>
          <Text style={styles.textmiddle}>
            • Once the player has completed their turn and recorded their score, they pass the dice to the participant on their left and the game continues.
          </Text>
          <Text style={styles.textTitle}>Scoring:</Text>
          <Text style={styles.textmiddle}>
            • To calculate the score corresponding to a number category, multiply the total of dice where that number appears by that number.
            For example: three 6s are worth 18 points for the six; two 4s are worth 8 points for the four.
          </Text>
          <Text style={styles.textmiddle}>
            • When a player makes a "major hand" (Yahtzee, Four of a Kind, Full House, or Straight), the values indicated by the dice are not taken into account for the score. For example, whether it's a Yahtzee of 1s or 6s, it is worth 50 points.

          </Text>
          <Text style={styles.textmiddle}>
            • However, if a player has made a Yahtzee and then rolls five of the same number, they can score in that number category if they haven't done so yet.
            For example, if a player has already made a Yahtzee and rolls five 6s, they will score 30 points in the sixes category.
          </Text>
          <Text style={styles.textmiddle}>
            • Note: If a player has already scored Yahtzee with a number and then rolls 5 of that number, they can choose to keep the score in that number category if they wish. For example, if a player has already scored Yahtzee with 4s and then rolls five 4s, they can choose to score 20 points in the fours category instead of the Yahtzee score.
          </Text>
          <Text style={styles.textmiddle}>
            • When all categories of the game have been completed, the scores are added up.
          </Text>
          <Text style={styles.textmiddle}>
            • The player with the highest total score at the end of the game wins.
          </Text>
          <Text style={styles.textTitle}>Major Hands</Text>
          <Text style={styles.textmiddle}>• Generala = 5 dice of the same number = 50 pts. When this is achieved in a single roll, it is called "yahtzee on the first roll" and the player automatically wins the game.</Text>
          <Text style={styles.textmiddle}>• Poker = 4 dice of the same number = 40 pts.</Text>
          <Text style={styles.textmiddle}>• Full House = 3 of a kind and a pair = 30 pts.</Text>
          <Text style={styles.textmiddle}>• Straight = 1-2-3-4-5 or 2-3-4-5-6 = 20 pts.</Text>
          <Text style={styles.textmiddle}>
            • Important: 5 points are added in any of the major hands (except for the generala) when they are served, that is, when they are achieved on the first roll.
          </Text>
        </ScrollView>
      }
    </View>  
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 4
  },
  button: {
    zIndex: 1,
    position: "absolute",
    top: -60,
    flexDirection: "row",
    width: 72,
    justifyContent: "center"
  },
  textTitle: {
    fontSize: theme.fontSize.F28,
    fontWeight: "500",
    color: theme.color.base
  },
  textmiddle: {
    fontSize: theme.fontSize.F18
  }
})