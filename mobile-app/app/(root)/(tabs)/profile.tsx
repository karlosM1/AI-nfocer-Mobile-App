import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/Custom/InputField";
import { icons, images } from "@/constants";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>My profile</Text>

        <View style={styles.imageContainer}>
          <Image source={images.profiles} style={styles.profileImage} />
        </View>

        <View style={styles.infoContainer}>
          <InputField
            label="First name"
            placeholder={"Not Found"}
            style={[styles.inputContainer, { padding: 14 }]}
            editable={false}
          />

          <InputField
            label="Last name"
            placeholder={"Not Found"}
            style={[styles.inputContainer, { padding: 14 }]}
            editable={false}
          />

          <InputField
            label="Email"
            placeholder={"Not Found"}
            style={[styles.inputContainer, { padding: 14 }]}
            editable={false}
          />

          <InputField
            label="Phone"
            placeholder={"Not Found"}
            style={[styles.inputContainer, { padding: 14 }]}
            editable={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "JakartaBold",
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 1, // Android shadow
  },
  infoContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    padding: 14,
  },
});
