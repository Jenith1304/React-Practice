import { useState, type ReactNode } from "react";

{/* <Accordion
  items={items}
  renderTrigger={(item) => <span>{item.title}</span>}
  renderPanel={(item) => <span>{item.content}</span>}
/> */}

const items = [
    {
        id: 1,
        title: "Introduction",
        content: "This is the introduction section."
    },
    {
        id: 2,
        title: "Features",
        content: "Here we describe the main features."
    },
    {
        id: 3,
        title: "Conclusion",
        content: "This is the conclusion of the document."
    }
];


const Practical42_AccordionRenderProps = () => {
    return (

        <Accordion
            items={items}
            renderTrigger={(item) => <span>{item.title}</span>}
            renderPanel={(item) => <span>{item.content}</span>}
        />

    )
}

export default Practical42_AccordionRenderProps
type Item = {
    id: number,
    title: string,
    content: string
}
type PropsType = {
    items: Item[],
    renderTrigger: (item: Item) => ReactNode,
    renderPanel: (item: Item) => ReactNode
}

const Accordion = ({ items, renderTrigger, renderPanel }: PropsType) => {
    const [openId, setOpenId] = useState(items[0].id)
    function handleOpenItem(id: number) {
        setOpenId((prev) => {
            if (prev == id) {
                return 0
            }
            return id
        })
    }
    return (
        <>
            {items.map((item, index) => {
                return <div>

                    <button onClick={() => handleOpenItem(item.id)}>{renderTrigger(item)}</button>
                    {openId == item.id && <p>{item.content}</p>}
                </div>
            })}
        </>
    )
}

// items={items}
//   renderTrigger={(item) => <span>{item.title}</span>}
//   renderPanel={(item) => <span>{item.content}</span>}