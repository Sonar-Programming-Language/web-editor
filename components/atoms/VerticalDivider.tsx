import React from 'react';
import { AppContext } from "context";

const VerticalDivider = (props: any) => {
    const context = React.useContext(AppContext);

    return (
        <div
            style={{
                width: '5px',
                background: context.theme.border1
            }}
        />
    );
}

export default VerticalDivider;