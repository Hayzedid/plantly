import {
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { PlantlyImage } from "@/components/plantimage";
import { PlantlyButton } from "@/components/plantlyButton";
import { useState } from "react";
import { useRouter } from "expo-router";
import { usePlantStore } from "@/store/plantStore";
import * as ImagePicker from "expo-image-picker";

export default function NewScreen() {
  const router = useRouter();
   const addPlant = usePlantStore((state) => state.addPlant);
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();
  const [imageUri, setImageUri] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert("Validation Error", "Give your plant a name");
    }

    if (!days) {
      return Alert.alert(
        "Validation Error",
        `How often does ${name} need to be watered?`,
      );
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation Error",
        "Watering frequency must be a be a number",
      );
    }

    console.log("Adding plant", name, days);
    addPlant(name, Number(days), imageUri);
     router.back();
  };


  const handleChooseImage = async () => {
       if (Platform.OS === "web") {
         return;
       }
    
       const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [1, 1],
         quality: 1,
       });
    
       if (!result.canceled) {
         setImageUri(result.assets[0].uri);
       }
     };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.centered}>
        
      </View>
      <TouchableOpacity
        style={styles.centered}
        onPress={handleChooseImage}
        activeOpacity={0.8}
      >
       <PlantlyImage imageUri={imageUri} />
     </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="E.g. Casper the Cactus"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency (every x days)</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="E.g. 6"
        keyboardType="number-pad"
      />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: "#000000",
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  centered: {
    alignItems: "center",
    marginBottom: 24,
  },
});
