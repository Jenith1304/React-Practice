import React from 'react'

const users: User[] = [
    { id: 1, name: "Satyam", age: 25 },
    { id: 2, name: "Mantu", age: 30 },
];

type User = {
    id: number, name: string, age: number
}

type UserKey<T> = keyof T

type PropsType<T> = {
    data: T[];
    sortKey: UserKey<T>;
    onSortChange: (key: UserKey<T>) => void
}
const SortableTable = <T,>({ data, sortKey, onSortChange }: PropsType<T>) => {
    return <h1>Hello</h1>
}
const SortableTable_2 = () => {
    return (
        <>
            <SortableTable
                data={users}
                sortKey="name"      // must be a key of the row type
                onSortChange={(key) => console.log(key)}
            />

// invalid — should be a TYPE ERROR:
            <SortableTable data={users} sortKey="age" onSortChange={...} />
        </>
    )
}

export default SortableTable_2