import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface NotificationCardProps {
  riderName: string;
  message: string;
  address: string;
  dateTime: string;
  paymentStatus: string;
  violation: string;
  violationImage?: string;
}

const NotificationCard = ({
  riderName,
  message,
  address,
  dateTime,
  paymentStatus,
  violation,
  violationImage,
}: NotificationCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.riderName}>{riderName}</Text>
        <Text style={styles.dateTime}>{dateTime}</Text>
      </View>

      <Text style={styles.message}>{message}</Text>
      <Text style={styles.address}>{address}</Text>

      <View style={styles.divider} />

      <Text style={styles.violation}>{violation}</Text>

      {violationImage && (
        <Image
          source={{ uri: violationImage }}
          style={styles.violationImage}
          resizeMode="contain"
        />
      )}

      <View style={styles.footer}>
        <Text
          style={[
            styles.paymentStatus,
            { color: paymentStatus === "Paid" ? "#4CAF50" : "#F44336" },
          ]}
        >
          {paymentStatus}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  riderName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dateTime: {
    fontSize: 12,
    color: "#666",
  },
  message: {
    fontSize: 14,
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },
  violation: {
    fontSize: 14,
    color: "#F44336",
    marginBottom: 12,
  },
  violationImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  paymentStatus: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default NotificationCard;
