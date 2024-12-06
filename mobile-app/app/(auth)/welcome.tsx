import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { onboarding } from "@/constants";
import CustomButton from "@/components/Custom/CustomButton";

const onBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.swiper} />}
        activeDot={
          <View style={[styles.swiper, { backgroundColor: "#0286FF" }]} />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View style={styles.swiperView} key={item.id}>
            <Image
              style={styles.swiperImage}
              source={item.image}
              resizeMode="contain"
            />
            <View style={styles.swiperContent}>
              <Text style={styles.swiperTitle}>{item.title}</Text>
            </View>
            <Text style={styles.swiperDescription}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        style={styles.customButton}
      />
    </SafeAreaView>
  );
};

export default onBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  button: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  swiper: {
    width: 32,
    height: 4,
    marginLeft: 1,
    marginRight: 1,
    backgroundColor: "#E2E8F0",
    borderRadius: 34,
  },
  swiperView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  swiperImage: {
    width: "100%",
    height: 300,
  },
  swiperContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 16,
  },
  swiperTitle: {
    color: "black",
    fontSize: 44,
    fontWeight: "bold",
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  swiperDescription: {
    fontSize: 20,
    fontWeight: "normal",
    alignItems: "center",
    color: "#718096",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 3,
  },
  customButton: {
    width: "80%",
    marginTop: 30,
  },
});
