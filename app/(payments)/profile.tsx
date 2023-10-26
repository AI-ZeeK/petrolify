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
      <View className="px-8 h-screen bg-gray-100 w-full flex gap-y-8 justify-center items-center p-8">
        <View className="flex justify-end items-end w-full">
          <Text className="text-gray-400 font-Poppins underline">change</Text>
        </View>
        <View className="flex  gap-y-2 rounded-xl bg-white  justify-center items-center p-4 pt-2 pb-8">
          <View className="flex flex-row gap-y-2 rounded-xl  w-full justify-center items-center ">
            <View className="w-2/5"></View>
            <View className="flex w-3/5 rounded-md justify-start items-start gap-y-2">
              <Text className="font-Poppins text-lg pl-2 font-semibold">
                Marvis Ade
              </Text>
              <Text className="font-Poppins text-md text-gray-400 pl-2 font-semibold">
                marvisades@gmail.com
              </Text>
              <Text className="font-Poppins text-md pl-2 font-semibold">
                +234 0905667324
              </Text>
            </View>
          </View>
          <Text className="text-sm pt-2 text-gray-400 font-Poppins">
            Receipts will be sent to your email.
          </Text>
        </View>
        <View className="flex flex-row rounded-xl bg-white w-full justify-between items-center p-4 gap-x-2">
          <View className="flex rounded-xl justify-start items-start">
            <Text className="font-semibold text-lg font-Poppins">
              Home address
            </Text>
            <Text className="text-gray-400 font-Poppins">
              Enter home location
            </Text>
          </View>
          <FontAwesome name="pencil" size={24} color={"#aeaeae"} />
        </View>
        <View className="flex flex-row rounded-xl bg-white w-full justify-between items-center p-4 gap-x-2">
          <View className="flex rounded-xl justify-start items-start">
            <Text className="font-semibold text-lg font-Poppins">
              Work address
            </Text>
            <Text className="text-gray-400 font-Poppins">
              Enter work location
            </Text>
          </View>
          <FontAwesome name="pencil" size={24} color={"#aeaeae"} />
        </View>
        <View className="flex flex-row rounded-xl bg-white w-full justify-between items-center p-4 gap-x-2">
          <View className="flex rounded-xl justify-start items-start">
            <Text className="font-semibold text-lg font-Poppins">
              Communication preference
            </Text>
          </View>
          <FontAwesome name="arrow-right" size={24} color={"#aeaeae"} />
        </View>
        <View className="flex gap-y-32  w-full justify-center items-center">
          <View className=" w-full flex flex-row justify-center gap-x-2 items-center p-3 rounded-full">
            <Link
              href={"/"}
              className="text-gray-400 font-Poppins text-xl gap-x-4 flex flex-row"
            >
              <Text>Sign-out</Text>{" "}
              <FontAwesome name="sign-out" size={24} color={"#aeaeae"} />
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
