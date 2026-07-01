import React from 'react'
enum Mode {
    UPI,
    CreditCard
}
type UPI = {
    mode: Mode.UPI,
    upiId: string
}
type CreditCard = {
    mode: Mode.CreditCard,
    cvv: number,
    cardNumber: number
}
type PaymentProps = UPI | CreditCard
function PaymentMode(props: PaymentProps) {
    if (props.mode === Mode.UPI) {
        return <div>UPI ID: {props.upiId}</div>;
    }

    return (
        <div>
            Card: {props.cardNumber}
            <br />
            CVV: {props.cvv}
        </div>
    );
}
export const Practical30_EnumModeTS = () => {

    return (
        <>
            <PaymentMode
                mode={Mode.UPI}
                upiId="mantu@okicici"
            />

            <PaymentMode
                mode={Mode.CreditCard}
                cvv={123}
                cardNumber={1234567890}
            />
        </>
    )

}
