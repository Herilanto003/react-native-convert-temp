import { UNITS } from "@/constants";

export const getOppositeUnit = (unit: string) => {
  return unit === UNITS.CELSIUS ? UNITS.FAHRENHEIT : UNITS.CELSIUS;
};

export const convertTemperature = (temperature: any, unit: string) => {
  //   const temp = parseFloat(temperature);
  if (unit === UNITS.CELSIUS) {
    return (temperature - 32) / 1.8;
  } else {
    return temperature * 1.8 + 32;
  }
};

export const isIceTemperature = (value: any, unit: string) => {
  if (unit === UNITS.CELSIUS) {
    return value <= 0;
  } else {
    return value <= 32;
  }
};
