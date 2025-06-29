import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";
import { useState } from "react";

export default function Pilot() {
  const router = useRouter();

  const [targetHeading, setTargetHeading] = useState(0);

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-accent">Welcome to Pilot</Text>

      <Button title="+"></Button>
    </View>
  );
}
