import moonIcon from "../assets/StatusIcons/Moon.svg";
import rainIcon from "../assets/StatusIcons/Rain.svg";
import sunIcon from "../assets/StatusIcons/Sunny.svg";

export const calculateImageLogo = (
  item: {
    conditions: string;
    datetime: string;
    datetimeEpoch: number;
    temp: string;
    tempmax: string;
    description: string;
    humidity: string;
    windspeed: string;
    feelslikemax: string;
  },
  currentTime: number
): string | undefined => {
  if (item.conditions.toLowerCase().includes("clear") && currentTime < 18) {
    return sunIcon;
  } else if (
    item.conditions.toLowerCase().search("clear") &&
    currentTime > 18
  ) {
    return moonIcon;
  } else if (
    item.conditions.toLowerCase().search("cloudy") &&
    currentTime > 18
  ) {
    return moonIcon;
  } else if (
    item.conditions.toLowerCase().search("cloudy") &&
    currentTime < 18
  ) {
    return rainIcon;
  } else {
    return "";
  }
};
