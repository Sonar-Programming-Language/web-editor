interface Props {
    icon: any;
    children?: any;
    onClick: (e: Event) => void;
    onMouseIn?: (e: Event) => void;
    onMouseOut?: (e: Event) => void;
}

const IconButton = (props: Props) => {
    return (
        <button
            className={`inline-block bg-transparent btn-no-outline`}
            onClick={e => props.onClick(e as unknown as Event)}
            onMouseOver={e => props.onMouseIn && props.onMouseIn(e as unknown as Event)}
            onMouseOut={e => props.onMouseOut && props.onMouseOut(e as unknown as Event)}
        >
            {props.icon}
        </button>
    );
}


export default IconButton;