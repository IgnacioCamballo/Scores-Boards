import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { useNavigate } from 'react-router-native'
import Icon from 'react-native-vector-icons/AntDesign'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import theme from '@/theme/theme'
import translations from "@/lenguage/lenguage.json"

import Button from '@/components/atoms/Button'


type TrucoRulesProps = {

}

export default function TrucoRules({}: TrucoRulesProps) {
   const {lenguage} = useGeneralHooks()
  const navigate = useNavigate() 

  return (
    <View>
      <Button press={() => navigate("/truco")} color={theme.color.grey} style={styles.button}>
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
          <Text style={styles.textmiddle}>Sumar puntos hasta llegar a un total de 30.</Text>
          <Text style={styles.textTitle}>Reglas:</Text>
          <Text style={styles.textmiddle}>• Se juega con la baraja española de 40 cartas, descartando los 8 y 9</Text>
          <Text style={styles.textmiddle}>• En cada mano los jugadores reciben 3 cartas, con las que disputan los dos lances.</Text>
          <Text style={styles.textTitle}>Truco:</Text>
          <Text style={styles.textmiddle}>• El lance de truco consiste en disputar 3 bazas, una por carta, y lo gana quien logra dos de las tres bazas.</Text>
          <Text style={styles.textmiddle}>• Cada baza es ganada por la carta más alta según la siguiente jerarquía:</Text>
          <Text style={styles.textmiddle}>• As de espadas</Text>
          <Text style={styles.textmiddle}>• As de bastos</Text>
          <Text style={styles.textmiddle}>• 7 de espadas</Text>
          <Text style={styles.textmiddle}>• 7 de oro</Text>
          <Text style={styles.textmiddle}>• 3 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• 2 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• 1 de oro y 1 de copa</Text>
          <Text style={styles.textmiddle}>• 12 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• 11 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• 10 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• 7 de copa y 7 de basto</Text>
          <Text style={styles.textmiddle}>• 6 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• 5 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• 4 de cualquier tipo</Text>
          <Text style={styles.textmiddle}>• El jugador que gana una baza es quien da comienzo a la siguiente lanzando una carta.</Text>
          <Text style={styles.textmiddle}>
            • Si en una baza dos rivales empatan por jugar cartas del mismo valor, se llama baza parda. En este caso el truco lo gana quien 
            haya conseguido una baza en primer lugar. Si las tres bazas son pardas, gana la pareja que tiene la mano.
          </Text>
          <Text style={styles.textmiddle}>
            • Quien gana el truco obtiene 1 punto. Sin embargo, durante la disputa del truco los jugadores pueden lanzar apuestas 
            incrementales antes de jugar su carta. El rival puede aceptar la apuesta o dar por perdido el lance de truco con el valor que 
            tenga en ese momento.
          </Text>
          <Text style={styles.textmiddle}>• Si se apuesta Truco, quien gana logra 2 puntos.</Text>
          <Text style={styles.textmiddle}>• El rival puede aumentar la apuesta con un Retruco, que vale 3 puntos.</Text>
          <Text style={styles.textmiddle}>• Finalmente, puede aumentarse hasta Vale 4 (4 puntos).</Text>
          <Text style={styles.textmiddle}>
            • La tercera baza no se disputa cuando el resultado del truco ya queda decidido al disputar la segunda baza. Quien tiene 
            malas cartas también puede renunciar a disputar la mano mediante la opción irse al mazo.
          </Text>
          <Text style={styles.textTitle}>Envido:</Text>
          <Text style={styles.textmiddle}>
            • El lance de Envido se disputa opcionalmente, si alguno de los dos ultimos participantes de la ronda abre una apuesta o 
            para responder a una apuesta truco. Si el turno pasa por todos los jugadores sin que apuesten sobre el envido, el lance 
            ya no se disputa.
          </Text>
          <Text style={styles.textmiddle}>
            • El envido lo gana el jugador que con sus tres cartas obtenga el valor más alto. Este valor se contabiliza del siguiente 
            modo:
          </Text>
          <Text style={styles.textmiddle}>• En caso de tener 2 cartas de un mismo palo, se suman los índices de ambas y a dicha suma se le añaden 20 más.</Text>
          <Text style={styles.textmiddle}>• En caso de tener las 3 cartas de un mismo palo, se suman los dos índices más altos, y a dicha suma se le añaden 20 más.</Text>
          <Text style={styles.textmiddle}>• Si las 3 cartas son de diferentes palos, el valor del envido es el índice más alto de las 3 cartas.</Text>
          <Text style={styles.textmiddle}>• A estos efectos, el valor de las figuras es cero.</Text>
          <Text style={styles.textmiddle}>• En caso de empate, gana el jugador que es mano.</Text>
          <Text style={styles.textmiddle}>• Las apuestas posibles en el envido son las siguientes:</Text>
          <Text style={styles.textmiddle}>• Envido: vale 2 puntos.</Text>
          <Text style={styles.textmiddle}>• Real Envido: vale 3 puntos.</Text>
          <Text style={styles.textmiddle}>
            • Falta Envido: si el ganador del envido lleva ventaja o su rival no ha alcanzado los 15 puntos (está en malas), gana 
            directamente el chico (partida). En caso contrario, suma la cantidad de puntos que su rival necesitaría para alcanzar los
            30 puntos.
          </Text>
          <Text style={styles.textmiddle}>
            • La primera apuesta de envido puede ser revocada con un nuevo envido. El segundo envido y el real envido pueden 
            revocarse con una apuesta superior.
          </Text>
          <Text style={styles.textmiddle}>
            • Si la primera apuesta es rechazada, el ganador obtiene un punto. Si se rechaza la revocación de una apuesta, 
            el ganador obtiene la suma de los puntos que el rival ya había apostado.
          </Text>
          <Text style={styles.textmiddle}>
            • Cuando se cierra una apuesta de envido, y antes de continuar con la disputa del truco, los jugadores indican 
            inmediatamente su jugada sin necesidad de enseñar sus cartas, y la puntuación se contabiliza de inmediato. Las cartas deben mostrarse al final del lance.
          </Text>
          <Text style={styles.textmiddle}>• Si el lance finaliza con la disputa del envido, el lance del truco no se disputa.</Text>         
        </ScrollView>
      }
      {lenguage === "en" && 
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.textTitle}>Objective:</Text>
          <Text style={styles.textmiddle}>Score points until you reach a total of 30.</Text>
          <Text style={styles.textTitle}>Rules:</Text>
          <Text style={styles.textmiddle}>• It is played with the Spanish deck of 40 cards, discarding the 8 and 9.</Text>
          <Text style={styles.textmiddle}>• In each hand, players receive 3 cards, with which they dispute the lance.</Text>
          <Text style={styles.textTitle}>Truco:</Text>
          <Text style={styles.textmiddle}>
            • The Truco lance consists of disputing 3 rounds, one per card, and it is won by the one who achieves two of the three rounds.
          </Text>
          <Text style={styles.textmiddle}>
            • Each round is won by the highest card according to the following hierarchy:
          </Text>
          <Text style={styles.textmiddle}>• Ace of swords</Text>
          <Text style={styles.textmiddle}>• Ace of clubs</Text>
          <Text style={styles.textmiddle}>• 7 of swords</Text>
          <Text style={styles.textmiddle}>• 7 of gold</Text>
          <Text style={styles.textmiddle}>• 3 of any kind</Text>
          <Text style={styles.textmiddle}>• 2 of any kind</Text>
          <Text style={styles.textmiddle}>• 1 of gold and 1 of cup</Text>
          <Text style={styles.textmiddle}>• 12 of any kind</Text>
          <Text style={styles.textmiddle}>• 11 of any kind</Text>
          <Text style={styles.textmiddle}>• 10 of any kind</Text>
          <Text style={styles.textmiddle}>• 7 of cup and 7 of club</Text>
          <Text style={styles.textmiddle}>• 6 of any kind</Text>
          <Text style={styles.textmiddle}>• 5 of any kind</Text>
          <Text style={styles.textmiddle}>• 4 of any kind</Text>
          <Text style={styles.textmiddle}>
            • The player who wins a round is the one who starts the next one by playing a card.
          </Text>
          <Text style={styles.textmiddle}>
            • If in a round two rivals tie by playing cards of the same value, it is called a tied round. In this case, the truco is won by the one
            who has won a round first. If all three rounds are tied, the team that has started the hand wins.
          </Text>
          <Text style={styles.textmiddle}>
            • The one who wins the truco gets 1 point. However, during the dispute of the truco, players can make incremental bets before playing their card.
          </Text>
          <Text style={styles.textmiddle}>The rival can accept the bet or give up the truco with the value it has at that moment.</Text>
          <Text style={styles.textmiddle}>• If Truco is bet, the winner gets 2 points.</Text>
          <Text style={styles.textmiddle}>• The rival can increase the bet with a Retruco, which is worth 3 points.</Text>
          <Text style={styles.textmiddle}>• Finally, it can be increased to Vale 4 (4 points).</Text>
          <Text style={styles.textmiddle}>
            • If the rival accepts the bet, the game continues with the new value. If not, the truco is resolved with the previous value.
          </Text>
          <Text style={styles.textmiddle}>
            • The third round is not disputed when the result of the truco is already decided when disputing the second round. The team who has bad cards can also
            give up disputing the hand by going to the deck option.
          </Text>
          <Text style={styles.textTitle}>Envido:</Text>
          <Text style={styles.textmiddle}>
            • The Envido lance is disputed optionally, if one of the last two participants in the round opens a bet or to respond to a truco bet. 
            If the turn passes through all players without betting on the envido, the lance is no longer disputed.
          </Text>
          <Text style={styles.textmiddle}>  
            • The envido is won by the player who with his three cards obtains the highest value. This value is calculated as follows:  
          </Text>
          <Text style={styles.textmiddle}>• In case of having 2 cards of the same suit, the indices of both are added and 20 more are added to that sum.</Text>
          <Text style={styles.textmiddle}>• In case of having all 3 cards of the same suit, the two highest indices are added, and 20 more are added to that sum.</Text>
          <Text style={styles.textmiddle}>• If the 3 cards are of different suits, the value of the envido is the highest index of the 3 cards.</Text>
          <Text style={styles.textmiddle}>• For these purposes, the value of the figures (12, 11, 10) is zero.</Text>
          <Text style={styles.textmiddle}>• In case of a tie, the player who's team started the round wins.</Text>
          <Text style={styles.textmiddle}>• The possible bets in the envido are as follows:</Text>
          <Text style={styles.textmiddle}>• Envido: worth 2 points.</Text>
          <Text style={styles.textmiddle}>• Real Envido: worth 3 points.</Text>
          <Text style={styles.textmiddle}>
            • Falta Envido: if the winner of the envido has an advantage or his rival has not reached 15 points (he is in bad), he directly wins the chico (match).
          </Text>
          <Text style={styles.textmiddle}> In case not, he adds the amount of points that his rival would need to reach 30 points.</Text>
          <Text style={styles.textmiddle}>
            • The first envido bet can be revoked with a new envido. The second envido and the real envido can be revoked with a higher bet.
          </Text>
          <Text style={styles.textmiddle}>
            • If the first bet is rejected, the winner gets one point. If the revocation of a bet is rejected, the winner gets the sum of the points that the rival had already bet.
          </Text>
          <Text style={styles.textmiddle}>
            • When a bet of envido is closed, and before continuing with the dispute of the truco, the players immediately indicate their play without the need to show their cards,
            and the score is counted immediately, the cards have to be shown at the end of the lance.
          </Text>
          <Text style={styles.textmiddle}>• If the lance ends with the dispute of the envido, the lance of the truco is not disputed.</Text>

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