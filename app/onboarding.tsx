import { PlantlyButton } from "@/components/plantlyButton";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

export default function OnboardingScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHadOnboarded);
  const router = useRouter();
  const handlepress = () => {
    toggleHasOnboarded();
    router.replace("/"); 
  }
  return (
    <View style={styles.container}>
      <PlantlyButton title="Let me in" onPress={ handlepress} />
      <Text style={styles.text}>Onboarding</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
});