import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ScoreDetailIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2 8.55556V6.48148C2.68308 5.90293 3.06606 5.57855 3.74914 5H12.4948M2 8.55556H22.5333M2 8.55556V11.8889M22.5333 8.55556V6.48148L21.2405 5H19.6435M22.5333 8.55556V11.8889M2 11.8889H22.5333M2 11.8889V15.2963M22.5333 11.8889V15.2963M2 15.2963V17.2963L3.74914 19H12.4948M2 15.2963H22.5333M22.5333 15.2963V17.2963L20.7842 19H19.6435M12.4948 5V19M12.4948 5H15.841M12.4948 19H15.841M15.841 5V19M15.841 5H19.6435M15.841 19H19.6435M19.6435 5V19"
            stroke="#253C51"
            strokeWidth={1.4}
        />
    </Svg>
);
export default ScoreDetailIcon;
