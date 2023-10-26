import {MaterialIcons, FontAwesome} from "@expo/vector-icons";
import {Link, router} from "expo-router";
import {useState} from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {RadioButton} from "react-native-paper";

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
    <ScrollView className="bg-gray-100 h-screen font-Poppins">
      {/* {isActivityIndicator && (
        <View className="z-40 absolute  w-full h-full  top-0 flex justify-center items-center">
          <View className="z-40 absolute bg-blue-800 w-full h-full opacity-20 top-0 flex justify-center items-center"></View>
          <ActivityIndicator size={120} color="rgb(30 64 175)" />
        </View>
      )} */}
      <View className="px-8 h-screen flex gap-8 justify-center items-center">
        <View className="flex w-full p-4 ">
          <Text className="font-Montserrat  text-3xl">Payment Method</Text>
        </View>
        <View className="flex gap-y-4 rounded-xl bg-white w-full justify-center items-center p-4 pb-8">
          <View className="flex flex-row w-full rounded-md justify-start items-center gap-x-2">
            <RadioButton value="first" />
            <View className="p-2 rounded-md flex justify-center items-center bg-gray-300 w-12 h-12">
              <FontAwesome name="credit-card" size={24} color={"#fff"} />
            </View>
            <Text className="font-Poppins text-lg pl-2">
              Add debit/credit card
            </Text>
          </View>
          <View className="h-[1px] w-full bg-gray-200" />
          <View className="flex flex-row w-full rounded-md justify-start items-center gap-x-2">
            <RadioButton value="first" />
            <View className="p-2 rounded-md flex justify-center items-center bg-gray-300 w-12 h-12">
              <MaterialIcons name="account-balance" size={24} color={"#fff"} />
            </View>
            <Text className="font-Poppins text-lg pl-2">Bank account</Text>
          </View>
          <View className="h-[1px] w-full bg-gray-200" />
          <View className="flex flex-row w-full rounded-md justify-start items-center gap-x-2">
            <RadioButton value="first" />
            <View className="p-2 rounded-md flex justify-center items-center bg-gray-300 w-12 h-12">
              <MaterialIcons name="money" size={24} color={"#fff"} />
            </View>
            <Text className="font-Poppins text-lg pl-2">Paypal</Text>
          </View>
        </View>
        <View className="flex justify-center w-full flex-col items-center p-2">
          <View className="bg-gray-300 w-full flex flex-row justify-center gap-x-2 items-center p-3 rounded-full">
            <Link
              href={"/(payments)/newcard"}
              className="text-white font-Poppins text-xl"
            >
              Update
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
