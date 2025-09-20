import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      {/* ✅ Make the status bar transparent */}
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {/* ✅ Company Logo */}
          <View style={styles.companyLogo}>
            <Image source={HEROLOGO} />
          </View>

          {/* ✅ Text Group */}
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>

          {/* ✅ Footer */}
          <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
            {/* 🔹 Button Group */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/join")}
              >
                <Text style={{ ...styles.textSmall, color: "black" }}>
                  Join here
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.transparentButton}
                onPress={() => router.push("/signin")}
              >
                <Text style={styles.textSmall}>Sign In</Text>
              </TouchableOpacity>
            </View>

            {/* 🔹 Navigation Prompt */}
            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <Text style={{ color: "white" }}>Continue to home</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginTop: 60, // ✅ Pushes logo below status bar safely
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});
