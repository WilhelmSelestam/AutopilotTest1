import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Map() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent">Welcome to Map</Text>
      {/* <Link href="../map">Go to map</Link> */}
    </View>
  );
}
