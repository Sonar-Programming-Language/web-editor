import { AppContext } from 'context';
import React from 'react';


interface Props {
    firstChild: React.ReactElement | string;
    secondChild: React.ReactElement | string;
    selected: number;
    activeColor?: string;
    inactiveColor?: string;
    itemWidths?: number;
    itemHeights?: number;
    itemBorderRadius?: number;
    activeHoverColor?: string;
    inactiveHoverColor?: string;
    onChange: (selected: number) => void;
}


const ToggleButton = ({
    firstChild, secondChild, selected, activeColor,
    inactiveColor, itemWidths, itemHeights, itemBorderRadius,
    activeHoverColor = '#999', inactiveHoverColor = '#999',
    onChange
}: Props) => {
    const context = React.useContext(AppContext);

    const item = {
        actvColor: activeColor ?? 'skyblue',
        inactvColor: inactiveColor ?? '#ccc',
        height: itemHeights ?? 18,
        width: itemWidths ?? 32,
        borderRadius: itemBorderRadius ?? 16,
    }

    const [_selected, setSelected] = React.useState(selected);

    const onChangeHandler = (selected: number) => {
        setSelected(selected);
        onChange(selected);
    }

    return (
        <span style={{ fontSize: 12 }}>
            <button className={`btn-no-outline px-2 transition duration-300`} style={{
                background: _selected == 1 ? item.actvColor : item.inactvColor,
                borderTopLeftRadius: item.borderRadius,
                borderBottomLeftRadius: item.borderRadius,
                height: item.height,
                width: item.width
            }}
                onClick={() => onChangeHandler(1)}
                onMouseOver={e => e.currentTarget.style.background = (_selected == 1 ? activeHoverColor : inactiveHoverColor)}
                onMouseOut={e => e.currentTarget.style.background = (_selected == 1 ? item.actvColor : item.inactvColor)}
            >
                {firstChild}
            </button>
            <button className={`btn-no-outline px-2`} style={{
                background: _selected == 2 ? item.actvColor : item.inactvColor,
                borderTopRightRadius: item.borderRadius,
                borderBottomRightRadius: item.borderRadius,
                height: item.height,
                width: item.width
            }}
                onClick={() => onChangeHandler(2)}
                onMouseOver={e => e.currentTarget.style.background = (_selected == 2 ? activeHoverColor : inactiveHoverColor)}
                onMouseOut={e => e.currentTarget.style.background = (_selected == 2 ? item.actvColor : item.inactvColor)}
            >
                {secondChild}
            </button>
        </span>
    );
}

export default ToggleButton;