import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M17 2L7 12L17 22"
            stroke={props?.stroke || "white"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default ArrowIcon;
