import { View, Text, StyleSheet, Image } from "react-native";
import { icons, images } from "@/constants";
interface NotificationCardProps {
  riderName: string;
  message: string;
  address: string;
  dateTime: string;
  paymentStatus: string;
}
const NotificationCard = ({
  riderName,
  message,
  address,
  dateTime,
  paymentStatus,
}: NotificationCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <View style={styles.imageContainer}>
          <Image
            source={images.samplemaps}
            resizeMode="contain"
            style={{ width: 80, height: 90, borderRadius: 12 }}
          />

          <View style={styles.contentContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={icons.to}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.message} numberOfLines={1}>
                {address}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={icons.point}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.message}>{address}</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerMessage}>
          <View style={styles.messageChildContainer}>
            <Text style={styles.time}>Date & Time</Text>
            <Text style={styles.time}>{dateTime}</Text>
          </View>

          <View style={styles.messageChildContainer}>
            <Text style={styles.time}>Rider</Text>
            <Text style={styles.time}>{riderName}</Text>
          </View>

          <View style={styles.messageChildContainer}>
            <Text style={styles.time}>Payment Status</Text>
            <Text style={styles.time}>{paymentStatus}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 1,
  },
  containerChild: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 20,
    flex: 1,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  message: {
    fontSize: 12,
  },
  containerMessage: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: 20,
    borderRadius: 12,
    padding: 9,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  messageChildContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  time: {
    fontSize: 14,
    color: "#A3A3A3",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoText: {},
});
