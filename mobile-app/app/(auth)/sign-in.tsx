import { View, Text, Image, ScrollView, StyleSheet, Alert } from "react-native";
import { Link, router } from "expo-router";
import InputField from "@/components/Custom/InputField";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { useState } from "react";
import CustomButton from "@/components/Custom/CustomButton";
import OAuth from "@/components/Custom/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {
    try {
      router.push("/(root)/(tabs)/home");
    } catch (error) {
      // Handle any errors
      Alert.alert("Error", "Failed to sign in. Please try again.");
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContent}>
          <Image style={styles.image} source={images.riderh} />
          <Text style={styles.text}>Welcome 👋 </Text>
        </View>
        <View style={styles.Formcontainer}>
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.nativeEvent.text })
            }
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.nativeEvent.text })
            }
          />
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            style={styles.button}
          />

          <OAuth />
          <Link href="/sign-up" style={styles.link}>
            Don't have an account? <Text style={styles.linkText}>Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContent: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  image: {
    zIndex: 0,
    width: "100%",
    height: 250,
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    position: "absolute",
    bottom: 24,
    left: 24,
  },
  Formcontainer: {
    padding: 20,
  },
  button: {
    marginTop: 24,
  },
  link: {
    fontSize: 18,
    textAlign: "center",
    color: "#A0AEC0",
    marginTop: 40,
  },
  linkText: {
    color: "#3182CE",
  },
});
