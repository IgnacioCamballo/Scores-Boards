import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useNavigate } from 'react-router-native'
import Icon from 'react-native-vector-icons/AntDesign'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import Button from '@/components/atoms/Button'


type RulesFarkleProps = {
}

export default function RulesFarkle({}: RulesFarkleProps) {
  const {lenguage} = useGeneralHooks()
  const navigate = useNavigate()

  return (
    <View>
      <Button press={() => navigate("/farkle")} color={theme.color.grey} style={styles.button}>
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
          <Text style={styles.textmiddle}>Ser el jugador con el mayor puntaje sobre 10.000.</Text>
          <Text style={styles.textTitle}>Reglas:</Text>
          <Text style={styles.textmiddle}>• Podes jugar con 5 or 6 dados.</Text>
          <Text style={styles.textmiddle}>• Los 5 y los 1 tienen valor propio.</Text>
          <Text style={styles.textmiddle}>• Los demas números sumarán si consigues tres o mas del mismo número en una sola tirada.</Text>
          <Text style={styles.textmiddle}>
            • Otras combinaciones de numeros tendran valos si las consigues en una sola tirada. 
            Nota: Dados de diferentes tiradas no pueden agregarse juntos. Por ejemplo, si separas un
            5 (50 puntos) enn la primera tirada y dos 5 (100 puntos) en la segunda tirada, 
            tienes 150 puntos. No puedes sumarlos juntos para hacer tres 5 (500 puntos).
          </Text>
          <Text style={styles.textmiddle}>• Al menos 1 dado que sume puntos debe separarse en cada turno</Text>
          <Text style={styles.textTitle}>Puntajes:</Text>
          <Text style={styles.textmiddle}>• 1 simple = 100</Text>
          <Text style={styles.textmiddle}>• 5 simple = 50</Text>
          <Text style={styles.textmiddle}>• Tres 1 = 1.000</Text>
          <Text style={styles.textmiddle}>• Tres 2 = 200</Text>
          <Text style={styles.textmiddle}>• Tres 3 = 300</Text>
          <Text style={styles.textmiddle}>• Tres 4 = 400</Text>
          <Text style={styles.textmiddle}>• Tres 5 = 500</Text>
          <Text style={styles.textmiddle}>• Tres 6 = 600</Text>
          <Text style={styles.textmiddle}>• Cuatro iguales = numero x 200</Text>
          <Text style={styles.textmiddle}>• Cuatro 1 = 2.000</Text>
          <Text style={styles.textmiddle}>• Cinco iguales = numero x 400</Text>
          <Text style={styles.textmiddle}>• Cinco 1 = 4.000</Text>
          <Text style={styles.textmiddle}>• Seis iguales = numero x 800</Text>
          <Text style={styles.textmiddle}>• Seis 1 = 10.000</Text>
          <Text style={styles.textmiddle}>• 1-5 o 2-6 en una tirada = 500</Text>
          <Text style={styles.textmiddle}>• 1-6 en una tirada = 1.500</Text>
          <Text style={styles.textTitle}>Como Jugar:</Text>
          <Text style={styles.textmiddle}>
            • Todos los jugadores tiran un dado. El que saque el número mas alto comienza, pasando el turno a la izquierda. 
          </Text>
          <Text style={styles.textmiddle}>
            • Cuando sea tu turno, tira los dados.
            Cualquier dado que salga del area de juego se tirará devuelta.
          </Text>
          <Text style={styles.textmiddle}>
            • Despues de cada tirada, separa al menos 1 dado que sume puntos y vuelve a tirar el resto.
            Debes separar al menos 1 dado que sume puntos en cada tirada y mantener la cuenta de tus puntos para cada turno.
          </Text>
          <Text style={styles.textmiddle}>
            • Si tienes suficiente suerte como para separar los 5 o 6 dados con los que juegas, puedes volver a tirar todos los dados
            y seguir acumulando puntos en el total de tu turno.
          </Text>
          <Text style={styles.textmiddle}>
            • Si no puedes separar nungún dado de tu tirada, pierdes el total de los puntos de ese turno y el juego pasa al jugador a la izquierda. 
            no tener dados para separar y perder el turno puede pasar en la primer tirada o en cualquier otra. 
          </Text>
          <Text style={styles.textmiddle}>
            • Para sumar puntos la primera vez, debes sumar un mínimo de 750 puntos antes de terminar tu turno.
          </Text>
          <Text style={styles.textmiddle}>
            • Luego de haber tenido una ronda en la que sumes al menos 750 puntos, podras dejar de tirar y sumar
            puntos si el puntaje de tu turno supera los 250 puntos y sumar esos puntos a tu puntaje acumulado.
            Una vez que tus puntos se sumana l puntaje acumulado al final del turno, estos estan seguros y no puedes perderlos.
          </Text>
          <Text style={styles.textTitle}>Como ganar:</Text>
          <Text style={styles.textmiddle}>
            • Cuando un jugador acumula un puntaje igual o superor a 10.000 puntos, cada uno de los otros 
            jugadores tiene un último turno para superar el puntaje del primer jugador. El jugador con 
            puntaje más alto será el ganador.
            
          </Text>
          <Text style={styles.textmiddle}> </Text>
        </ScrollView>
      }
      {lenguage === "en" && 
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.textTitle}>Object:</Text>
          <Text style={styles.textmiddle}>Be the player with the highest score over 10.000.</Text>
          <Text style={styles.textTitle}>Farkle Facts:</Text>
          <Text style={styles.textmiddle}>• You can play with 5 or 6 dice.</Text>
          <Text style={styles.textmiddle}>• Single 1s and 5s are worth points.</Text>
          <Text style={styles.textmiddle}>• Other numbers count if you get three or more of the same number in a single roll.</Text>
          <Text style={styles.textmiddle}>
            • Other combinations of numbers are worth points if you get them in a single
            roll. Note: Dice from multiple rolls cannot be added together. For example, if
            you set aside one 5 (50 points) on your first roll and two 5s (100 points) on
            your second roll, you have 150 points. You cannot add them together to
            make three 5s (500 points).
          </Text>
          <Text style={styles.textmiddle}>• Some scoring dice must be removed after every roll</Text>
          <Text style={styles.textTitle}>Scoring:</Text>
          <Text style={styles.textmiddle}>• Single 1 = 100</Text>
          <Text style={styles.textmiddle}>• Single 5 = 50</Text>
          <Text style={styles.textmiddle}>• Three 1 = 1.000</Text>
          <Text style={styles.textmiddle}>• Three 2 = 200</Text>
          <Text style={styles.textmiddle}>• Three 3 = 300</Text>
          <Text style={styles.textmiddle}>• Three 4 = 400</Text>
          <Text style={styles.textmiddle}>• Three 5 = 500</Text>
          <Text style={styles.textmiddle}>• Three 6 = 600</Text>
          <Text style={styles.textmiddle}>• Four of any number = number x 200</Text>
          <Text style={styles.textmiddle}>• Four 1 = 2.000</Text>
          <Text style={styles.textmiddle}>• Five of any number = number x 400</Text>
          <Text style={styles.textmiddle}>• Five 1 = 4.000</Text>
          <Text style={styles.textmiddle}>• Six of any number = number x 800</Text>
          <Text style={styles.textmiddle}>• Six 1 = 10.000</Text>
          <Text style={styles.textmiddle}>• 1-5 or 2-6 straight = 500</Text>
          <Text style={styles.textmiddle}>• 1-6 straight = 1.500</Text>
          <Text style={styles.textTitle}>Play:</Text>
          <Text style={styles.textmiddle}>
            • All players roll one Die. Whoever has the highest roll goes first, with play
            passing to the left. 
          </Text>
          <Text style={styles.textmiddle}>
            • When it's your turn, roll the Dice.
            Any Dice that roll off the playing area are rolled again.
          </Text>
          <Text style={styles.textmiddle}>
            • After each roll, set aside Dice that are worth points and roll the rest of them.
            You must remove at least one Die after each roll and keep a running total of
            your points for that turn.
          </Text>
          <Text style={styles.textmiddle}>
            • If you're lucky enough to set aside all six Dice, you can roll them all again to
            build your running total.
          </Text>
          <Text style={styles.textmiddle}>
            • If you cannot set aside any Dice after a roll, that's a Farkle. You lose your
            running total of points for that turn and play passes to the left. A Farkle could
            happen on your first roll or when you roll the remaining Dice. 
          </Text>
          <Text style={styles.textmiddle}>
            • To get on the Score Pad for the first time, you must have a running total of
            750 points before you stop rolling.
          </Text>
          <Text style={styles.textmiddle}>
            • After your first score of 750 points or more is recorded, you may stop rolling
            at any time if you are above 250 and add your running total for that turn to
            your accumulated score. Once your points are entered on the Score Pad,
            they are safe, and you cannot lose them.
          </Text>
          <Text style={styles.textTitle}>Winning:</Text>
          <Text style={styles.textmiddle}>
            • When a player's accumulated score is 10,000 or more, each of the
            other players has one last turn to beat that total. The player with the highest
            score wins.
          </Text>
          <Text style={styles.textmiddle}> </Text>
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