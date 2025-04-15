import * as React from "react";
import Svg, { G, Path, Defs, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CircleMinusIcon = (props: SvgProps) => (
    <Svg
        width={33}
        height={34}
        viewBox="0 0 33 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#filter0_d_600_4)">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 3.89227C9.59659 3.89227 4 9.50237 4 16.4224C4 23.3425 9.59659 28.9526 16.5 28.9526C23.4034 28.9526 29 23.3425 29 16.4224C29 9.50237 23.4034 3.89227 16.5 3.89227ZM11.9545 15.2833C11.6532 15.2833 11.3641 15.4033 11.151 15.617C10.9379 15.8306 10.8182 16.1203 10.8182 16.4224C10.8182 16.7245 10.9379 17.0143 11.151 17.2279C11.3641 17.4415 11.6532 17.5615 11.9545 17.5615H21.0455C21.3468 17.5615 21.6359 17.4415 21.849 17.2279C22.0621 17.0143 22.1818 16.7245 22.1818 16.4224C22.1818 16.1203 22.0621 15.8306 21.849 15.617C21.6359 15.4033 21.3468 15.2833 21.0455 15.2833H11.9545Z"
                fill="#3B5062"
            />
        </G>
        <Defs></Defs>
    </Svg>
);
export default CircleMinusIcon;
