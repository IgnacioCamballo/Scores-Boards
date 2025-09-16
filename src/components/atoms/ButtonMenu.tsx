import useGeneralHooks from '@/hooks/useGeneralHooks'
import theme from '@/theme/theme'
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

type ButtonMenuProps = {
  onPress?: () => void
}

export default function ButtonMenu({onPress}: ButtonMenuProps) {
  const { setModalMenu } = useGeneralHooks()

  return (
    <Icon
      name='bars'
      color={theme.color.white}
      size={32}
      style={styles.menuIcon}
      onPress={() => {
        setModalMenu(true);
        if (onPress) onPress();
      }}
    />
  )
}

const styles = StyleSheet.create({
  menuIcon: {
    position: "absolute",
    top: 28,
    right: 20
  }
})