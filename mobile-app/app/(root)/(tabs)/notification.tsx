import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import NotificationCard from "@/components/Custom/NotificationCard";
import { images, icons } from "@/constants";

// Define the violation type
interface Violation {
  number_plate: string;
  timestamp: string;
  isHelmet: string;
  cropped_image: string;
}

interface ViolationsResponse {
  violations: Violation[];
  total_count: number;
}

const Notification = () => {
  const [violations, setViolations] = useState<Violation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Configure API URL based on environment
  // For Expo, we need to use the IP address of your computer on the local network
  // Your FastAPI server should be running on this IP address
  const API_URL = "http://127.0.0.1:8000"; // Replace 8000 with your FastAPI port

  const fetchViolations = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log(
        "Fetching violations from:",
        `${API_URL}/mobile/violations?limit=50&offset=0`
      );

      // Use axios instead of fetch
      const response = await axios.get(
        `${API_URL}/mobile/violations?limit=50&offset=0`,
        {
          timeout: 10000, // 10 second timeout
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response status:", response.status);
      console.log("Received data:", response.data);

      if (response.data && Array.isArray(response.data.violations)) {
        setViolations(response.data.violations);
      } else {
        console.log("Unexpected data format:", response.data);
        setError("Received invalid data format from server");
      }
    } catch (error) {
      console.error("Error fetching violations:", error);

      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          console.log("Request timed out");
          setError("Request timed out. Server might be unavailable.");
        } else if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Error response data:", error.response.data);
          console.log("Error response status:", error.response.status);
          setError(`Server error: ${error.response.status}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Error request:", error.request);
          setError(
            "No response received from server. Check if the server is running."
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error message:", error.message);
          setError(`Request failed: ${error.message}`);
        }
      } else {
        console.log("Non-axios error:", error);
        setError(
          `Failed to load notifications: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchViolations();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString();
    } catch (e) {
      return dateString;
    }
  };

  // For testing - create mock violations if needed
  const createMockViolations = () => {
    return [
      {
        number_plate: "ABC123",
        timestamp: new Date().toISOString(),
        isHelmet: "No Helmet",
        cropped_image: "", // Base64 image would be too long to include here
      },
      {
        number_plate: "XYZ789",
        timestamp: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        isHelmet: "No Helmet",
        cropped_image: "",
      },
    ];
  };

  // Uncomment this to use mock data for testing
  useEffect(() => {
    setViolations(createMockViolations());
    setLoading(false);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={violations.length > 0 ? violations : []}
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
              marginTop: 50,
              padding: 20,
            }}
          >
            {loading ? (
              <ActivityIndicator size="large" color={"#000"} />
            ) : error ? (
              <>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "red",
                    marginBottom: 10,
                  }}
                >
                  Error
                </Text>
                <Text style={{ textAlign: "center", marginBottom: 20 }}>
                  {error}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#2196F3",
                    padding: 10,
                    borderRadius: 5,
                  }}
                  onPress={fetchViolations}
                >
                  <Text style={{ color: "white" }}>Try Again</Text>
                </TouchableOpacity>
              </>
            ) : (
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
              {/* Debug button to show API URL */}
              <TouchableOpacity
                onPress={() => Alert.alert("API URL", API_URL)}
                style={{
                  padding: 5,
                }}
              >
                <Text style={{ fontSize: 12, color: "#666" }}>Debug</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        renderItem={({ item }: { item: Violation }) => (
          <NotificationCard
            // Keep these fields static as requested
            riderName="John Doe"
            message="Hello, how are you?"
            address="123 Main St"
            paymentStatus="Paid"
            // Add violation data
            violation={`You have been fined 400 pesos for ${item.isHelmet}. License plate: ${item.number_plate}`}
            dateTime={formatDate(item.timestamp)}
            // Pass the image if your NotificationCard component can display it
            violationImage={
              item.cropped_image
                ? `data:image/jpeg;base64,${item.cropped_image}`
                : undefined
            }
          />
        )}
        keyExtractor={(item, index) =>
          `${item.number_plate}-${item.timestamp}-${index}`
        }
        onRefresh={fetchViolations}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};

export default Notification;
