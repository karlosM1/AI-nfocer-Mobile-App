import { View, Text, Image, ScrollView, StyleSheet, Alert } from "react-native";
import { Link, router } from "expo-router";
import InputField from "@/components/Custom/InputField";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { useState } from "react";
import CustomButton from "@/components/Custom/CustomButton";
import OAuth from "@/components/Custom/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContent}>
          <Image style={styles.imageWithOverlay} source={images.riderh} />
          <Text style={styles.text}>Create You Account</Text>
        </View>
        <View style={styles.Formcontainer}>
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChange={(event) =>
              setForm({ ...form, name: event.nativeEvent.text })
            }
          />
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
            title="Sign Up"
            onPress={onSignUpPress}
            style={styles.button}
          />

          <OAuth />
          <Link href="/sign-in" style={styles.link}>
            Already have an account? <Text style={styles.linkText}>Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  imageWithOverlay: {
    width: "100%",
    height: 250,
    zIndex: 0,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    opacity: 0.5,
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
