import { useContext, useState, type ReactNode } from "react";
import { AccordionContext } from "../context/AccordionContext";

{/* <Accordion type="single">
<Accordion.Item value="1">
<Accordion.Trigger>Section 1</Accordion.Trigger>
<Accordion.Content>

      This is section 1.
</Accordion.Content>
</Accordion.Item>
 
  <Accordion.Item value="2">
<Accordion.Trigger>Section 2</Accordion.Trigger>
<Accordion.Content>

      This is section 2.
</Accordion.Content>
</Accordion.Item>
</Accordion>
  */}
const Accordion = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}
const AccordionItem = ({ children, value }: { children: ReactNode, value: string }) => {
    const context = useContext(AccordionContext);

    if (!context) throw new Error("Wrap inside provider");

    const { index, setIndex } = context;

    const toggle = () => {
        setIndex(prev => (prev === value ? null : value));
    };

    return (
        <div onClick={toggle}>
            {children}
        </div>
    );
}
const AccordionTrigger = ({ children }: { children: ReactNode }) => {
    return <div >{children}</div>
}
const AccordionContent = ({
    children,
    value,
}: {
    children: ReactNode;
    value: string;
}) => {
    const context = useContext(AccordionContext);

    if (!context) throw new Error("Wrap inside provider");

    const { index } = context;

    return (
        <>
            {index === value && <div>{children}</div>}
        </>
    );
};

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

// export default Accordion


export const AccordionDemo = () => {
    return <Accordion >
        <Accordion.Item value="1">
            <Accordion.Trigger>Section 1</Accordion.Trigger>
            <Accordion.Content value="1">

                This is section 1.
            </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="2">
            <Accordion.Trigger>Section 2</Accordion.Trigger>
            <Accordion.Content value="2">

                This is section 2.
            </Accordion.Content>
        </Accordion.Item>
    </Accordion>
}
