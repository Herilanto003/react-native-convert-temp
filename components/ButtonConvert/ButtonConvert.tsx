import { Text, TouchableOpacity } from "react-native";
import { s } from "./style";

export default function ButtonConvert({
  unit,
  onPress,
}: {
  unit?: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
