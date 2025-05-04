import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground className="flex flex-row min-w-[112] h-20 mt-4 justify-center items-center rounded-full overflow-hidden">
        <Image
          source={icon}
          tintColor="#A8B5DB"
          className="size-7 mr-1"
        ></Image>
        <Text className="text-cyan-500 font-semibold justify-center font-kanit-bold uppercase">
          {title}
        </Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full h-20 mt-4 justify-center items-center rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-10" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 0,
          marginHorizontal: 0,
          marginBottom: 0,
          height: 65,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
          paddingLeft: 15,
          paddingRight: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.map} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.map} title="Map" />
          ),
        }}
      />
      <Tabs.Screen
        name="pilot"
        options={{
          title: "Pilot",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.steering} title="Pilot" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.settings} title="Settings" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
