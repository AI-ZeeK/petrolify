import {FontAwesome} from "@expo/vector-icons";
import {Link, router} from "expo-router";
import {useState} from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TabTwoScreen() {
  const [isActivityIndicator, setIsActivityIndicator] =
    useState<boolean>(false);

  const handlePress = () => {
    // Handle the button press here
    // Alert.alert("Button Pressed!");
    setIsActivityIndicator(true);
    setTimeout(() => {
      setIsActivityIndicator(false);
      router.replace("/(tabs)/three");
    }, 2000);
  };
  return (
    <ScrollView className=" bg-white h-screen font-Poppins ">
      {isActivityIndicator && (
        <View className="z-40 absolute  w-full h-full  top-0 flex justify-center items-center">
          <View className="z-40 absolute bg-blue-800 w-full h-full opacity-20 top-0 flex justify-center items-center"></View>
          <ActivityIndicator size={120} color="rgb(30 64 175)" />
        </View>
      )}
      <View className="px-8 h-screen w-full flex gap-y-8 justify-center items-center">
        <View className="flex w-full p-4 ">
          <Text className="font-Montserrat  text-[20px]">
            Enter your phone number
          </Text>
          <Text className="fon font-MontserratR text-gray-400 font-light text-sm">
            We will send a code to verify your mobile number
          </Text>
        </View>
        <View className="flex gap-y-32  w-full justify-center items-center">
          <View className="flex border-2 border-gray-200 overflow-hidden flex-row rounded-md w-full justify-between items-center">
            <View className="text-gray-600 flex justify-center items-center px-2">
              <Text className="font-semibold text-xl">+234</Text>
            </View>
            <TextInput
              placeholder="Type your password"
              secureTextEntry={true}
              keyboardType="numeric"
              className="w-[80%] font-Poppins py-3 px-2 text-start"
            />
          </View>

          <View className=" flex justify-center items-center w-full">
            <TouchableOpacity
              className="bg-[#FA4A0C] px-4 py-3 w-full rounded-[30px] flex  justify-center items-center"
              onPress={handlePress}
            >
              <Text className="font-Poppins  text-white text-xl  text-center">
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
