import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent font-kanit-bold">Welcome</Text>
      <Link href="../map">Go to map</Link>
    </View>
  );
}
