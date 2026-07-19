{/* <DataTable
  data={users}
  columns={[
    {
      key: "name",
      header: "Name",
      render: (user) => (
        <strong>{user.name}</strong>
      ),
    },
    {
      key: "email",
      header: "Email",
      render: (user) => user.email,
    },
    {
      key: "actions",
      header: "",
      render: (user) => (
        <button>Edit</button>
      ),
    },
  ]}
/> */}

const users: User[] = [
    {
        id: 1,
        name: "John",
        email: "john@test.com",
    },
    {
        id: 2,
        name: "Jenith",
        email: "john@test.com",
    },
    {
        id: 3,
        name: "John",
        email: "john@test.com",
    },
]
type User = {
    id: number, name: string, email: string
}

type PropsType<T> = {
    data: T[]
    columns: { key: string, header: string, render: (user: T) => ReactNode }[]
}

const DataTable = <T,>({ data, columns }: PropsType<T>) => {
    console.log(users)
    return <table border={1}>
        <thead>
            <tr>
                {columns.map(column => (
                    <th key={column.key}>
                        {column.header}
                    </th>
                ))}
            </tr>
        </thead>

        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {columns.map(column => (
                        <td key={column.key}>
                            {column.render(item)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
}
import React, { type ReactNode } from 'react'

const Practical47_DataTable = () => {
    return (
        <DataTable
            data={users}
            columns={[
                {
                    key: "name",
                    header: "Name",
                    render: (user) => (
                        <strong>{user.name}</strong>
                    ),
                },
                {
                    key: "email",
                    header: "Email",
                    render: (user) => user.email,
                },
                {
                    key: "actions",
                    header: "",
                    render: (user) => (
                        <button>Edit</button>
                    ),
                },
            ]}
        />
    )
}

export default Practical47_DataTable