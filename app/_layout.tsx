import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { useFonts } from "@expo-google-fonts/kanit/useFonts";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Kanit: require("../assets/fonts/Kanit/Kanit-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error; // Handle font loading errors

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded, error]);

  // Render nothing or a loading indicator until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="movie/[id]" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen> */}
    </Stack>
  );
}
