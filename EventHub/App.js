import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const handleButton = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
      <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
        Mai Nguyễn Hoàng Lộc
      </Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: 80,
          backgroundColor: "gray",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={handleButton}
      >
        <Text style={{ color: "white" }}>Enter Me</Text>
      </TouchableOpacity>
    </View>
  );
}
