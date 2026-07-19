import React from 'react'

type Variant1 = {
    variant: "confirm",
    onConfirm: () => void,
    onCancel: () => void
}

type Variant2 = {
    variant: "alert",
    onClose: () => void
}

type Variant3 = {
    variant: "custom";
    onClose?: never;
    onConfirm?: never;
}

type PropsType = Variant1 | Variant2 | Variant3
const Modal = (props: PropsType) => {
    if (props.variant === "confirm") {
        props.onConfirm();
        props.onCancel();
    }

    if (props.variant === "alert") {
        props.onClose();
    }

    return <h1>Hello</h1>;
}
const Modal_TS = () => {
    return (
        <>
            <Modal variant="confirm" onConfirm={ } onCancel={ } />
            <Modal variant="alert" onClose={ } />
            <Modal variant="custom" >  jnkkjl</Modal >

// invalid — should be a TYPE ERROR:
            <Modal variant="confirm" onClose={...} />
            <Modal variant="alert" onConfirm={...} />
        </>
    )
}

export default Modal_TS