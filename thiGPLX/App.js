import React, { useCallback, useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { SafeAreaView, StatusBar } from "react-native";

import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { AppNavigator } from "./screen/AppNavigator";

import { default as theme } from "./src/assets/custom-theme.json";

import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-fast-toast";

import { ModalPortal } from "react-native-modals";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ToastProvider>
      <Provider store={store}>
        <SafeAreaView
          style={{ flex: 1, marginTop: StatusBar.currentHeight }}
          onLayout={onLayoutRootView}
        >
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
            <AppNavigator />
            <ModalPortal />
          </ApplicationProvider>
        </SafeAreaView>
      </Provider>
    </ToastProvider>
  );
}
