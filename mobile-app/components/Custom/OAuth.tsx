import React from "react";
import { Alert, Image, Text, View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";
const OAuth = () => {
  const handleGoogleSignIn = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.separator} />
      </View>

      <CustomButton
        title="Log In with Google"
        style={styles.customButton}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={styles.iconLeft}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};
export default OAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#D3D3D3",
  },
  orText: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  customButton: {
    marginTop: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconLeft: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});
