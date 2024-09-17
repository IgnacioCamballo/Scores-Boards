import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import theme from '../../theme/theme'
import Button from '../atoms/Button'

type ButtonSumProps = {
  total: number,
  setTotal: React.Dispatch<React.SetStateAction<number>> 
}

export default function ButtonsSum({total, setTotal}: ButtonSumProps) {
  return (
    <View style={styles.container}>
      <View style={styles.add}>
        <Button style={styles.button} color={theme.color.grey} width={80} press={() => setTotal(total + 1000)}>
          <Text style={styles.font16}>+1000</Text>
        </Button>
        
        <Button style={styles.button} color={theme.color.grey} width={80} press={() => setTotal(total + 100)}>
          <Text style={styles.font16}>+100</Text>
        </Button>
        
        <Button style={styles.button} color={theme.color.grey} width={80} press={() => setTotal(total + 50)}>
          <Text style={styles.font16}>+50</Text>
        </Button>
      </View>
      
      <View style={styles.rest}>
        <Button style={styles.button} color={theme.color.grey} width={80} press={() => setTotal(total - 1000)}>
          <Text style={styles.font16}>-1000</Text>
        </Button>
        
        <Button style={styles.button} color={theme.color.grey} width={80} press={() => setTotal(total - 100)}>
          <Text style={styles.font16}>-100</Text>
        </Button>
        
        <Button style={styles.button} color={theme.color.grey} width={80} press={() => setTotal(total - 50)}>
          <Text style={styles.font16}>-50</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  font16: {
    fontSize: theme.fontSize.F16,
    lineHeight: 20
  },
  font24: {
    fontSize: theme.fontSize.F24,
    lineHeight: 28
  },
  add: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12
  },
  rest: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4
  },
  button: {
    height: 36
  }
})