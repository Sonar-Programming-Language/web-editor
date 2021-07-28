import React from 'react';

interface Props {
    text?: string;
    children?: React.ReactElement;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    width?: number;
    height?: number;
    borderRadius?: number;
    borderRadiusTopLeft?: number;
    borderRadiusTopRight?: number;
    borderRadiusBottomLeft?: number;
    borderRadiusBottomRight?: number;
    textColor?: string;
    fontSize?: number;
    fontWeight?: number;
    backkgroundColor?: string;
}

const Button = (props: Props) => {
    return (
        <button
            className={`btn-no-outline`}
        >

        </button>
    );
}