import { FlatList, StyleSheet } from "react-native";
import { usePlantStore } from "@/store/plantStore";
import { PlantlyButton } from "@/components/plantlyButton";
import { useRouter } from "expo-router";
import { PlantCard } from "@/components/PlantCard";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    padding: 12,
  },
});
