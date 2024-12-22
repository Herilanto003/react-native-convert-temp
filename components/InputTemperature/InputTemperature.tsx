import { TextInput, View } from "react-native";
import { styles } from "./InputTemperature.style";

export default function InputTemperature({
  defaultValue,
  onChange,
  unit,
}: {
  defaultValue?: string;
  onChange?: (value: string) => void;
  unit?: string;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter temperature"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={(value) => onChange && onChange(value)}
      />

      <TextInput style={styles.unit}> {unit} </TextInput>
    </View>
  );
}
