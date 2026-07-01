import type { ReactNode } from "react";

{/* <Dialog>
    <Dialog.Trigger>
        Open
    </Dialog.Trigger>

    <Dialog.Content>
        Hello
    </Dialog.Content>
</Dialog> */}
export const Dialog = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}
export const DialogTrigger = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}
