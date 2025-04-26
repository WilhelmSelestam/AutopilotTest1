import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Welcome</Text>
      {/* This Link component will navigate to the route defined by map/index.tsx */}
      <Link href="../map">Go to map</Link>
    </View>
  );
}
