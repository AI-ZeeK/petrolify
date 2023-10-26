import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
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
    <ScrollView className=" bg-gray-100 h-screen font-Poppins ">
      {isActivityIndicator && (
        <View className="z-40 absolute  w-full h-full  top-0 flex justify-center items-center">
          <View className="z-40 absolute bg-blue-800 w-full h-full opacity-20 top-0 flex justify-center items-center"></View>
          <ActivityIndicator size={120} color="rgb(30 64 175)" />
        </View>
      )}
      <View className="px-8 min-h-screen w-full flex gap-y-8 justify-center items-center">
        <View className="flex gap-y-12 w-full  justify-center items-center">
          <View className="rounded-md border bg-white border-gray-200 flex flex-row justify-center gap-x-2 w-full items-center">
            <View className="p-2 rounded-md flex justify-center items-center  w-12 h-12">
              <FontAwesome name="credit-card" size={24} color={"#000"} />
            </View>
            <TextInput
              placeholder="Card number"
              secureTextEntry={true}
              className="font-Poppins py-3 px-2 text-lg w-4/5"
            />
          </View>
          <View className="flex flex-row  gap-x-4 px-4">
            <View className="rounded-md border w-1/2 bg-white border-gray-200">
              <TextInput
                placeholder="Expiry date"
                secureTextEntry={true}
                keyboardType="numeric"
                className="font-Poppins text-center py-3 px-2 text-lg w-4/5"
              />
            </View>
            <View className="rounded-md border w-1/2 bg-white border-gray-200">
              <TextInput
                placeholder="CVV"
                secureTextEntry={true}
                keyboardType="numeric"
                className="font-Poppins text-center py-3 px-2 text-lg w-4/5"
              />
            </View>
          </View>
          <View className="flex gap-x-4 w-full justify-center items-center">
            <View>
              <Text className="font-Poppins text-lg text-gray-600 text-center">
                Please ensure you enter your accurate card details
              </Text>
            </View>
          </View>
          <View className="bg-gray-300 w-full flex flex-row justify-center gap-x-2 items-center p-3 rounded-full">
            <Link
              href={"/(payments)/profile"}
              className="text-white font-Poppins text-xl"
            >
              Add card
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
