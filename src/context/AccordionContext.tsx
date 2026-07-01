import { createContext, type Dispatch, type SetStateAction } from "react";

type AccordionType = {
    index: string | null,
    setIndex: Dispatch<SetStateAction<string | null>>
}
export const AccordionContext = createContext<AccordionType | undefined>(undefined)