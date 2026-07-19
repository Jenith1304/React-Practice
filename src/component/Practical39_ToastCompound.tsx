import { Children, createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

{/* <Tabs defaultValue="profile">
  <Tabs.List>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="profile">Profile content</Tabs.Content>
  <Tabs.Content value="settings">Settings content</Tabs.Content>
</Tabs> */}

type ContextType = {
    currentTab: "profile" | "settings",
    setCurrentTab: Dispatch<SetStateAction<"profile" | "settings">>
}
const TabConxtext = createContext<ContextType | undefined>(undefined)

const useTabContext = () => {
    const context = useContext(TabConxtext)
    if (!context) throw new Error("Please wrap in provider")
    return context
}

const Tabs = ({ children, defaultValue }: { children: ReactNode, defaultValue: "profile" | "settings" }) => {
    const [currentTab, setCurrentTab] = useState<"profile" | "settings">(defaultValue)
    return <TabConxtext.Provider value={{ currentTab, setCurrentTab }}>{children}</TabConxtext.Provider>
}
const TabList = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}

const TabTrigger = ({ value, children }: { value: "profile" | "settings", children: ReactNode }) => {
    const { setCurrentTab } = useTabContext()
    return <button onClick={() => setCurrentTab(value)}>{children}</button>
}

const TabContent = ({ value, children }: { value: "profile" | "settings", children: ReactNode }) => {
    const { currentTab, setCurrentTab } = useTabContext()
    return <>{currentTab == value && <div>{children}</div>}</>
}


Tabs.List = TabList
Tabs.Content = TabContent
Tabs.Trigger = TabTrigger

const Practical39_ToastCompound = () => {
    return (
        <Tabs defaultValue="profile">
            <Tabs.List>
                <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="profile">Profile content</Tabs.Content>
            <Tabs.Content value="settings">Settings content</Tabs.Content>
        </Tabs>
    )
}

export default Practical39_ToastCompound
