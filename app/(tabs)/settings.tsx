import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Settings() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Welcome to Settings</Text>
    </View>
  );
}
