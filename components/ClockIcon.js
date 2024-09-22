import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgClockIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="clockIcon_svg__lucide clockIcon_svg__lucide-clock-9"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} />
    <Path d="M12 6v6H7.5" />
  </Svg>
);
export default SvgClockIcon;

