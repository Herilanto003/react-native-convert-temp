import { styles } from "./TemperatureDisplay.style";
import { Text } from "react-native";

export default function TemperatureDisplay({
  temperature,
  unit,
}: {
  temperature: string;
  unit: string;
}) {
  return (
    <Text style={styles.text}>
      {temperature} {unit}
    </Text>
  );
}
