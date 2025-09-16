import React from 'react';
import { StatusBar, View} from 'react-native';
import { NativeRouter } from 'react-router-native';

import theme from '@/theme/theme';
import Router from '@/navigation/Router';
import { GeneralProvider } from '@/context/GeneralProvider';

export default function App() {  
  return (
    <View>
      <NativeRouter>
        <GeneralProvider>
          <StatusBar backgroundColor={theme.color.base} />
          <Router />
        </GeneralProvider>
      </NativeRouter>
    </View>
  );
}

