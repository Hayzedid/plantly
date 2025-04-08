import { Text, View, StyleSheet, Button } from "react-native";
import { useUserStore } from "../../store/userStore";
import { PlantlyButton } from "@/components/plantlyButton";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHadOnboarded);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <PlantlyButton title="Go to Onboarding" onPress={toggleHasOnboarded} />
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
