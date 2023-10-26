import {MaterialIcons, FontAwesome} from "@expo/vector-icons";
import {router} from "expo-router";
import {useState} from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TabOneScreen() {
  const [isActivityIndicator, setIsActivityIndicator] =
    useState<boolean>(false);

  const handlePress = () => {
    // Handle the button press here
    // Alert.alert("Button Pressed!");
    setIsActivityIndicator(true);
    setTimeout(() => {
      setIsActivityIndicator(false);
      router.replace("/(tabs)/two");
    }, 2000);
  };
  return (
    <ScrollView className="bg-white h-screen font-Poppins">
      {/* {isActivityIndicator && (
        <View className="z-40 absolute  w-full h-full  top-0 flex justify-center items-center">
          <View className="z-40 absolute bg-blue-800 w-full h-full opacity-20 top-0 flex justify-center items-center"></View>
          <ActivityIndicator size={120} color="rgb(30 64 175)" />
        </View>
      )} */}
      <View className="px-8 h-screen flex gap-8 justify-center items-center">
        <View className="flex w-full p-4 ">
          <Text className="font-Montserrat  text-[40px]">Sign Up</Text>
        </View>
        <View className="flex gap-y-12 w-full justify-center items-center  p-2">
          <View className="flex border-2 w-full border-gray-200 rounded-md overflow-hidden">
            <TextInput
              placeholder="Enter email"
              className="font-Poppins px-4 py-3 border-gray-400 focus-within:bg-gray-200 text-start w-full"
            />
          </View>
          <View className=" flex border-2 w-full border-gray-200 rounded-md overflow-hidden">
            <TextInput
              placeholder="Enter password"
              className="font-Poppins px-4 py-3 border-gray-400 focus-within:bg-gray-200 text-start w-full"
            />
          </View>

          <View className="flex justify-center items-center w-full">
            <TouchableOpacity
              className="bg-[#FA4A0C] px-4 rounded-full flex justify-center items-center"
              onPress={handlePress}
            >
              <Text className="font-Poppins text-white text-xl p-2 text-center">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex justify-center w-full flex-col items-center p-2">
          <View className="bg-[#5899ed] w-full flex flex-row justify-start gap-x-2 items-center p-3 rounded-md">
            <View className="bg-[#1877F2] rounded-md h-6 w-6 flex justify-center items-center">
              <FontAwesome name="facebook-f" size={12} color={"#fff"} />
            </View>
            <Text className="text-white">Continue with Facebook</Text>
          </View>
          {/* <View className="bg-[#5899ed] w-full flex flex-row justify-start gap-x-2 items-center p-3 rounded-md">
            <View className="bg-[#1877F2] rounded-md h-6 w-6 flex justify-center items-center">
              <FontAwesome name="facebook-f" size={12} color={"#fff"} />
            </View>
            <Text className="text-white">Continue with Facebook</Text>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
}
