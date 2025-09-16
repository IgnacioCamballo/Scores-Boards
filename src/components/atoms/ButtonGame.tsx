import useGeneralHooks from '@/hooks/useGeneralHooks'
import theme from '@/theme/theme'
import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions, Image, ImageSourcePropType } from 'react-native'
import { useNavigate } from 'react-router-native'

type ButtonGameProps = {
link: string,
title: string,
img: ImageSourcePropType
}

export default function ButtonGame({link, title, img}: ButtonGameProps) {
  const navigate = useNavigate()
  const {lenguage} = useGeneralHooks()

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigate(link)}>
      <Image source={img} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width * 0.35,
    height: 180,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: (Dimensions.get("window").width * 0.35) * 0.75,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.color.base
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.color.softGrey
    }
})