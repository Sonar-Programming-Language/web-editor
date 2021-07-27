import { AppContext } from "context";
import React, { ReactElement } from "react";
import { FaPlay } from "react-icons/fa";
import IconButton from "./IconButton";

interface Props {
    onClick: (e: Event) => void;
    icon: ReactElement;
    marginX?: number;
}

const ConsoleButton = (props: Props) => {
    const context = React.useContext(AppContext);

    const [iconColor, setIconColor] = React.useState(context.theme.depression1);

    return (
        <span style={{ marginLeft: props.marginX, marginRight: props.marginX }}>
            <IconButton
                icon={
                    <span style={{ color: iconColor }}>
                        {props.icon}
                    </span>
                }
                onClick={(e) => props.onClick(e)}
                onMouseIn={() => setIconColor(context.theme.depressionDeep)}
                onMouseOut={() => setIconColor(context.theme.depression1)}
            />
        </span>
    );
}

export default ConsoleButton;