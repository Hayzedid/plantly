
import { Redirect, Stack } from "expo-router";
import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
// import { useUserStore, UserState } from '../store/userStore';
// import { useUserStore, UserState } from '../../../store/userStore';
import { useUserStore } from '../../store/userStore';

export default function Layout() {
    const { hasfinishedOnboarding } = useUserStore((state) => ({ hasfinishedOnboarding: state.hasfinishedOnboarding }));


   if (!hasfinishedOnboarding) {return ( <Redirect href="/onboarding"/>); }
   return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <Entypo name="leaf" size={24} color="black" /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: () =><Feather name="user" size={24} color="black" /> }} />
   </Tabs>
   );
 }