import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCard from "@/components/Custom/NotificationCard";
import { images, icons } from "@/constants";
const Notification = () => {
  const loading = false;
  return (
    <SafeAreaView>
      <FlatList
        data={[1, 2, 3, 4]}
        style={{ paddingHorizontal: 20 }}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  resizeMode="contain"
                  style={{ width: 200, height: 200 }}
                  alt="No Result"
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  No Notification Found
                </Text>
              </>
            ) : (
              <ActivityIndicator size="small" color={"#000"} />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 20,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Notification ⛔
              </Text>
              {/* <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 9999,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={icons.out}
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  alt="Sign Out"
                />
              </TouchableOpacity> */}
            </View>
          </>
        )}
        renderItem={() => (
          <NotificationCard
            riderName="John Doe"
            message="Hello, how are you?"
            address="123 Main St"
            dateTime="January 7, 2025 10:30 AM"
            paymentStatus="Paid"
            violation="You have been fined 400 pesos for not wearing a helmet in a required area."
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Notification;
