import { ImageBackground, Text, View } from "react-native";
import { styles } from "@/index.style";
import HotBg from "../assets/hot.png";
import ColdBg from "../assets/cold.png";
import InputTemperature from "@/components/InputTemperature/InputTemperature";
import { useEffect, useState } from "react";
import TemperatureDisplay from "@/components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_UNIT, DEFAULT_TEMPERATURE, UNITS } from "@/constants";
import {
  getOppositeUnit,
  isIceTemperature,
} from "@/services/temperature-service";
import { convertTemperature } from "@/services/temperature-service";
import ButtonConvert from "@/components/ButtonConvert/ButtonConvert";

export default function Page() {
  const [temperature, setTemperature] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentBg, setCurrentBg] = useState(HotBg);
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemperature() {
    const valueAsFloat = parseFloat(temperature);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperature(valueAsFloat, oppositeUnit).toFixed(1).toString();
  }

  useEffect(() => {
    const tempAsFloat = parseFloat(temperature);
    if (!isNaN(tempAsFloat)) {
      const isColdBg = isIceTemperature(tempAsFloat, currentUnit);
      setCurrentBg(isColdBg ? ColdBg : HotBg);
    }
  }, [temperature]);

  return (
    <ImageBackground source={currentBg} style={styles.container}>
      <View style={styles.workspace}>
        <TemperatureDisplay
          temperature={getConvertedTemperature()}
          unit={oppositeUnit}
        />
        <InputTemperature
          unit={currentUnit}
          defaultValue="0"
          onChange={setTemperature}
        />

        <ButtonConvert
          unit={currentUnit}
          onPress={() => setCurrentUnit(oppositeUnit)}
        />
      </View>
    </ImageBackground>
  );
}
