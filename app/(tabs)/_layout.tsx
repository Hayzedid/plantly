// import { Link, Redirect } from "expo-router";
// import { Tabs } from "expo-router";
// import Entypo from '@expo/vector-icons/Entypo';
// import Feather from '@expo/vector-icons/Feather';
// import { useUserStore } from '../../store/userStore';
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { Pressable } from "react-native";

// export default function Layout() {
// const  hasfinishedOnboarding  = useUserStore((state) => 
//   state.hasfinishedOnboarding
// );

//   if (!hasfinishedOnboarding) {
//     return <Redirect href="/onboarding" />;
//   }

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "#29b365",
//         tabBarShowLabel: false,
//         tabBarStyle: { backgroundColor: "#fff" }, 
//       }}
//     >
//       <Tabs.Screen
//         name="(home)"
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ size, color }: { size: number; color: string }) => (
//             <Entypo name="leaf" size={size} color={color} />
//           ),
//           headerRight: () => (
//                       <Link href="/new" asChild>
//                         <Pressable hitSlop={20} style={{ marginRight: 18 }}>
//                           <AntDesign
//                             name="pluscircleo"
//                             size={24}
//                             color="green"
//                           />
//                         </Pressable>
//                       </Link>
//                     ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ size, color }: { size: number; color: string }) => (
//             <Feather name="user" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import { Redirect, Tabs, Link } from "expo-router";
import { Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useUserStore } from "../../store/userStore";

type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
};

export default function Layout() {
  const hasfinishedOnboarding = useUserStore((state) => state.hasfinishedOnboarding);

  if (!hasfinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#29b365",
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }: TabBarIconProps) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20} style={{ marginRight: 18 }}>
                <AntDesign name="pluscircleo" size={24} color="green" />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }: TabBarIconProps) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
