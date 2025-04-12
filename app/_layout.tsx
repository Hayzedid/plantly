import { Stack } from "expo-router";

export default function RootLayout() {
    return(
        <Stack>
            <Stack.Screen 
            name="onboarding" 
            options={{ headerShown: false }} />
            <Stack.Screen 
            name="(tabs)" 
            options={{ headerShown: false, Animation: "fade" }} />
            <Stack.Screen 
            name="new" 
            options={{ title: "New plant", presentation: "modal" }} />
         </Stack>
    )
}