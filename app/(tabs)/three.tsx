import {FontAwesome} from "@expo/vector-icons";
import {Link} from "expo-router";
import {useState} from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TabThreeScreen() {
  const [isActivityIndicator, setIsActivityIndicator] =
    useState<boolean>(false);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");

  //   const handleInputChange = (e: any) =>
  //   setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
  const handleNumberChange = (text: string) => {
    // Remove any non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, "");

    // You can set your maximum value here (e.g., 100)
    const maxNumber = 9;

    if (numericValue === "" || parseInt(numericValue) <= maxNumber) {
      setNumber1(numericValue);
    }
  };
  const handlePress = () => {
    // Handle the button press here
    // Alert.alert("Button Pressed!");
    setIsActivityIndicator(true);
    setTimeout(() => {
      setIsActivityIndicator(false);
      //   router.replace("/(home)/foryou");
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
            Please enter the verification code sent to you
          </Text>
        </View>
        <View className="flex gap-y-12 w-full justify-center items-center">
          <View className="flex flex-row gap-x-4 w-full justify-center items-center">
            <View className="flex border-2 w-[20%] h-16 border-gray-200 overflow-hidden flex-row rounded-md  justify-center items-center">
              <TextInput
                placeholder="0"
                secureTextEntry={true}
                value={number1}
                onChangeText={(text) => handleNumberChange(text)}
                keyboardType="numeric"
                className="font-Poppins py-3 px-2 text-center text-2xl"
              />
            </View>
            <View className="flex border-2 w-[20%] h-16 border-gray-200 overflow-hidden flex-row rounded-md  justify-center items-center">
              <TextInput
                placeholder="0"
                secureTextEntry={true}
                keyboardType="numeric"
                className=" font-Poppins py-3 px-2 text-center text-2xl"
              />
            </View>
            <View className="flex border-2 w-[20%] h-16 border-gray-200 overflow-hidden flex-row rounded-md  justify-center items-center">
              <TextInput
                placeholder="0"
                secureTextEntry={true}
                keyboardType="numeric"
                className="font-Poppins py-3 px-2 text-center text-2xl"
              />
            </View>
            <View className="flex border-2 w-[20%] h-16 border-gray-200 overflow-hidden flex-row rounded-md  justify-center items-center">
              <TextInput
                placeholder="0"
                secureTextEntry={true}
                keyboardType="numeric"
                className=" font-Poppins py-3 px-2 text-center text-2xl"
              />
            </View>
          </View>

          <View>
            <Link
              href={"/"}
              className="font-MontserratR text-gray-400 font-light text-sm"
            >
              Resend code in 0:15
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
