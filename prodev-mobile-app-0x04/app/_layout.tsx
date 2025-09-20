import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      {/* ✅ Control the status bar color */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
        <Stack.Screen name="/" />
        <Stack.Screen name="join" />
        <Stack.Screen name="signin" />
      </Stack>
    </>
  );
}
