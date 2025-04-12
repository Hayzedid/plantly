// app/onboarding.tsx

import { PlantlyButton } from "@/components/plantlyButton";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function OnboardingScreen() {
  const completeOnboarding = useUserStore((state) => state.completeOnboarding);
  const router = useRouter();

  const handlePress = () => {
    completeOnboarding();
    router.replace("/"); // Go to home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Plantly</Text>
      <Text style={styles.tagline}>Keep your plant hydrated</Text>
      <PlantlyButton title="Let me in" onPress={handlePress} />
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
  headline: {
    fontSize: 42,
    color: "green",
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 24,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
});
