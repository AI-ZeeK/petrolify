import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Link, Stack, Tabs} from "expo-router";
import {Pressable, useColorScheme} from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="two" options={{headerShown: false}} />
      <Stack.Screen name="three" options={{headerShown: false}} />
    </Stack>
  );
}
