import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const TickIcon = (props: SvgProps) => (
    <Svg
        width={30}
        height={22}
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2 11.6L10.6667 20L28 2"
            stroke="#969696"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default TickIcon;
