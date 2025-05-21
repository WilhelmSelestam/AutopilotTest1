import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <Text>Wellcome to autopilot</Text>
    </View>
  );
}
