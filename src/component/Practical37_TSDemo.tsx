// import React, { useState } from 'react'

import { useState, type ChangeEvent, type ReactElement } from "react"


// function useToggleGroup<T>(options: T[]) {
//   const [selected, setSelected] = useState(options[0]);

//   return [selected, setSelected] as const;
// }
// const Practical37_TSDemo = () => {
//     const [selected, setSelected] = useToggleGroup(["light", "dark"] as const);
// setSelected("dark");
//   return (
//     <div>Practical37_TSDemo</div>
//   )
// }

// export default Practical37_TSDemo


// . Create a generic Table component where the columns prop only accepts keys from the objects inside the data prop.

// TypeScript
{/* <Table
  data={[
    { id: 1, name: "John", age: 25 }
  ]}
  columns={["id", "name"]}
/>

const Data = [
  { id: 1, name: "John", age: 25 }
]
type Data = typeof Data
type columns = (keyof  Data[number])[]
const something:columns=["name","id","age"] */}



// type="text" should require value: string
// type="number" should require value: number
// type="checkbox" should require checked: boolean

// <Input type="text" value="John" />
// <Input type="number" value={25} />
// <Input type="checkbox" checked />

// type Text = {
//   type: "text",
//   value: string
// }
// type Number = {
//   type: "number",
//   value: number
// }
// type Checkbox = {
//   type: "checkbox",
//   checked: boolean
// }

// type InputProps = Text | Number | Checkbox



// function Input(props: InputProps) {
//   switch (props.type) {
//     case "text":
//       return <input type="text" value={props.value} />
//     case "checkbox":
//       return <input type="checkbox" checked={props.checked} />
//     case "number":
//       return <input type="number" value={props.value} />
//   }
// }


// 4. Create a Button component.
// Rules:
// Either href
// OR onClick
// Never both
// Never neither
// TypeScript
// <Button href="/" />
// <Button onClick={() => {}} />

// type LinkButton = {
//   href: string;
//   onClick?: never;
// };
// type ActionButton = {
//   onClick: () => void;
//   href?: never;
// };

// type ButtonProps = LinkButton | ActionButton

// function Button(props: ButtonProps) {
//   if ("href" in props) {
//     return <a href={props.href} />
//   }
//   return <button onClick={props.onClick} >Button</button>
// }


// 5. Create a custom type guard isAdmin().

// TypeScript
// type Admin = { role: "admin"; permissions: string[]; };
// type User = { role: "user"; orders: number[]; };
// type Person = Admin | User;

// function isAdmin(person: Person): person is Admin {
//   return person.role =="admin"
// }

// function print(person: Person) {
//   if (isAdmin(person)) {
//     person.permissions;
//   } else {
//     person.orders;
//   }
// }



// // 6. Handle the following response safely without using type assertions.

// // TypeScript
// type Success = {
//   success: true;
//   data: string[];
// };
// type Failure = {
//   success: false;
//   message: string;
// };
// type Response = Success | Failure;
// function handleResponse(response: Response) {
//   switch (response.success) {
//     case true: return response.data
//     case false: return response.message
//   }
// }


// 7. Create a generic useFetch hook so that the returned data type is inferred automatically.

// TypeScript
// type User = {
//   id: number,
//   name: string
// }

// import { useEffect, useState } from "react";

// function useFetch<T>(url: string) {
//   const [data, setData] = useState<T>();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error>();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(url);
//         const result: T = await response.json();

//         setData(result);
//       } catch (err) {
//         setError(err as Error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [url]);

//   return {
//     data,
//     loading,
//     error,
//   };
// }
// const { data} = useFetch<User[]>("/users");
// const { data: products } =
//   useFetch<Product[]>("/products");



// 8. Create a generic List component.
// Requirements:
// Infer the item type automatically.
// renderItem should receive the correct type.

// TypeScript


// type ListType<T> = {
//   items: T[],
//   renderItem: (item: T) => ReactElement
// }

// const List = <T,>({ items, renderItem }: ListType<T>) => {
//   return <>{
//     items.map((item) => renderItem(item))
//   }</>
// }
// import React from 'react'

// const Practical37_TSDemo = () => {
//   return (
//     <List
//       items={[1, 2, 3]}
//       renderItem={(item) => <p>{item}</p>}
//     />
//   )
// }

// export default Practical37_TSDemo


// 9. Controlled vs Uncontrolled Input
// Create an Input component.
// Requirements:
// Accept either value + onChange
// OR defaultValue
// Never both together.

// TypeScript
{/* <Input
  value="John"
  onChange={() => {}}
/>
<Input
  defaultValue="John"
/>

type StateType = {
  value: string,
  onChange: (e: ChangeEvent) => void,
  defaultValue?: never
}
type RefType = {
  defaultValue: string,
  value?: never
  onChange?: never,
}

type PropsType = StateType | RefType
const Input = (props: PropsType) => {
  if ("defaultValue" in props) {
    const [value, setValue] = useState(props.defaultValue);

    return (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
  return (
    <input
      value={props.value}
      onChange={props.onChange}
    />
  );
} */}


// 10. Create a Dropdown component.
// value should only accept the id of objects inside options.

// TypeScript
{/* <Dropdown
  options={[
    { id: 1, label: "React" },
    { id: 2, label: "Vue" },
  ]}
  value={2}
/>
const opt = [
  { id: 1, label: "React" },
  { id: 2, label: "Vue" },
] as const
type Options = typeof opt
type keys = Options[number]["id"]

type DropdownType<T extends readonly { id: unknown }[]> = {

  options: T
  value: T[number]["id"]
}

const Dropdown = <T extends readonly { id: unknown }[]>({ options, value }: DropdownType<T>) => {
  return <h1>hello</h1>
}
import React from 'react'

const Practical37_TSDemo = () => {
  return (
    <Dropdown
      options={[
        { id: 1, label: "React" },
        { id: 2, label: "Vue" },
      ] as const}
      value={1}
    />
  )
}

export default Practical37_TSDemo */}





// 11. Create a Menu component.
// defaultItem should only accept the key from menu items.

// TypeScript


// type MenuType<T extends readonly { key: unknown }[]> = {
//   items: T,
//   defaultItem: T[number]["key"]
// }

// const Menu = <T extends readonly { key: unknown }[]>({ items, defaultItem }: MenuType<T>) => {
//  return <h1></h1>
// }
// import React from 'react'

// const Practical37_TSDemo = () => {
//   return (
//     <Menu
//   items={[
//     { key: "home", label: "Home" },
//     { key: "about", label: "About" },
//   ] as const}
//   defaultItem="home"
// />
//   )
// }

// export default Practical37_TSDemo


// 12. Create a Table component.
// sortBy should only accept keys from the row object.

// TypeScript


// type TableType<T extends readonly unknown[]> = {
//   data: T,
//   sortBy: keyof T[number]
// }

// const Table = <T extends readonly unknown[]>({ data, sortBy }: TableType<T>) => {
//   return <h1></h1>
// }
// import React from 'react'

// const Practical37_TSDemo = () => {
//   return (
//     <Table
//       data={[
//         {
//           id: 1,
//           name: "John",
//           age: 25,
//         },
//       ] as const}
//       sortBy="name"
//     />
//   )
// }

// export default Practical37_TSDemo



// 13. Create a reusable MultiSelect.
// value should only contain values that exist inside options.

// TypeScript


type MultiSelectType<T extends readonly unknown[]> = {
  options: T,
  value: T[number][]

}
const MultiSelect = <const T extends readonly unknown[]>({ options, value }: MultiSelectType<T>) => {
  return <h1></h1>
}
import React from 'react'

const Practical37_TSDemo = () => {
  return (
    <MultiSelect
      options={["React", "Vue", "Angular"]}
      value={["Angular", "React", "Vue"]}
    />
  )
}

export default Practical37_TSDemo