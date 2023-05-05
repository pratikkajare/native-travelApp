import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row px-8 items-center justify-between mt-12">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">Hello beauty today</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center bg-gray-400 rounded-md shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full object-cover rounded-md"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-2xl mt-4">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Discover;
