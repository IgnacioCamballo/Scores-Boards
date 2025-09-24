export default {
  "expo": {
    "name": "Tablas de Puntos",
    "slug": "anotador-de-puntajes",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
        "backgroundColor": "#09765B"
      },
      //cambiar entre el primero para produccion local y segundo para eas. El archivo debe estar cargado en la sesion de eas. de ahi se busca con el process.env desde el servidor eas
      "googleServicesFile": "./google-services.json",
      //"googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
      "package": "com.Anotadordepuntaje"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "9b887a9a-5820-4413-a653-4c91c0515369"
      }
    },
    "owner": "ignaciocamballo",
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/crashlytics",
      [
        "expo-font",
        {
          "fonts": ["./assets/fonts/LakkiReddy-Regular.ttf"]
        }
      ],
      [
        "react-native-google-mobile-ads",
        {
          "androidAppId": "ca-app-pub-4926030013898312~7320718360",
          "iosAppId": "ca-app-pub-4926030013898312~8140812186"
        }
      ],
      [
        "expo-build-properties",
        {
          "android": {
            "kotlinVersion": "1.9.22",
            "compileSdkVersion": 34,
            "targetSdkVersion": 34,
            "minSdkVersion": 23
          }
        }
      ]
    ]
  }
}
