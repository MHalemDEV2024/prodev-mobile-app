import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* ✅ Transparent StatusBar */}
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      {/* Header */}
      <View style={[styles.navGroup, { marginTop: 66 }]}>
        <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
        <View style={{ padding: 5 }}>
          <Image source={HEROLOGOGREEN} />
        </View>
      </View>

      {/* Title */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.largeText}>Create Your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your details to create a new account.
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        {/* Email */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.placeholderText}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.inputField} />
        </View>

        {/* Password */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.placeholderText}>Password</Text>
          <View style={styles.passwordGroup}>
            <TextInput style={{ flex: 1 }} secureTextEntry />
            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
          </View>
        </View>

        {/* Confirm Password */}
        <View>
          <Text style={styles.placeholderText}>Confirm Password</Text>
          <View style={styles.passwordGroup}>
            <TextInput style={{ flex: 1 }} secureTextEntry />
            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
          </View>
        </View>
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider}></View>
      </View>

      {/* Social Buttons */}
      <View style={styles.socialMediaButtonGroup}>
        <TouchableOpacity style={styles.socialMediaButton}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.socialMediaButtonText}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.socialMediaButtonText}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.subTextGroup}>
        <Text style={styles.subText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.subTextJoin}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
