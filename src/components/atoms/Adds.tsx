import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'

import useGeneralHooks from '@/hooks/useGeneralHooks'
import theme from '@/theme/theme'

export default function Adds({bannerId}: {bannerId: string}) {
  const { addsInitialized } = useGeneralHooks()

  return (
    addsInitialized &&
    <View style={styles.publicidad}>
      <BannerAd
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        unitId={bannerId}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  publicidad: {
    height: 70,
    width: "100%",
    backgroundColor: theme.color.white,
    position: "relative",
    bottom: 0
  },
})