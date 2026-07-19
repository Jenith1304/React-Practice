import { Children, createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

{/* <Dropdown>
  <Dropdown.Trigger>
    Open Menu
  </Dropdown.Trigger>

  <Dropdown.Menu>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}

type ContextType = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}
const DropDownContext = createContext<ContextType | undefined>(undefined)

const useDropDown = () => {
    const context = useContext(DropDownContext)
    if (!context) throw new Error("Please wrap in provider")
    return context
}


const Dropdown = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(true)
    return <DropDownContext.Provider value={{ setOpen, open }}>{children}</DropDownContext.Provider>
}

const DropDownTrigger = ({ children }: { children: ReactNode }) => {
    const { setOpen } = useDropDown()
    return <button onClick={() => { setOpen((prev) => !prev) }}>{children}</button>
}

const DropdownMenu = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}

const DropdownItem = ({ children }: { children: ReactNode }) => {
    const { open } = useDropDown()
    return <>{open && <div>{children}</div>}</>
}

Dropdown.Trigger = DropDownTrigger
Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem

import React from 'react'

const Practical45_DropDown = () => {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                Open Menu
            </Dropdown.Trigger>

            <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Practical45_DropDown