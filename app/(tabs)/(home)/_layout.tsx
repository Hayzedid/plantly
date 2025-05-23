
import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

 export default function Layout() {
   return (
     <Stack>
     {/* <Stack.Screen name="index" /> */}
     <Stack.Screen
       name="index"
       options={{
         title: "Home",
         headerRight: () => (
           <Link href="/new" asChild>
             <Pressable hitSlop={20}>
               <AntDesign
                 name="pluscircleo"
                 size={24}
                 color = "green"
               />
             </Pressable>
           </Link>
         ),
       }}
     />
      <Stack.Screen
       name="plants/[plantId]"
       options={{
         title: "",
         headerBackTitleVisible: false,
         headerTintColor: "black",
       }}
     />
     </Stack>
   );
 }