import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Pilot() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent">Welcome to Pilot</Text>
      {/* <Link href="../map">Go to map</Link> */}
    </View>
  );
}
