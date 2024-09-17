import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated, { RotateInDownLeft, useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '../../theme/theme';

type PointsViewProps = {
  isOpen: boolean,
  points: number
}

export default function PointsView({isOpen, points}: PointsViewProps) {
  const angle = useSharedValue(0)
  const translationY = useSharedValue(0)

  useEffect(() => {
    angle.value = withTiming(isOpen ? 180 : 0, {duration: 300})
    translationY.value = withTiming(isOpen ? 6 : 0, {duration: 300})
  }, [isOpen])

  return (
    <View style={styles.container}>
      <Text style={styles.font28}>{points}</Text>
      <Text style={styles.font28}> pts </Text>
      <Animated.View style={{top: translationY, rotation: angle}}>
        <Icon
          name="caretdown"
          color={theme.color.grey}
          size={18}
          style={styles.arrow}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2
  },
  font28: {
    fontSize: theme.fontSize.F28
  },
  arrow: {
    top: 2
  }
})
