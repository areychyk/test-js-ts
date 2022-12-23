import React from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType

}

export const MenComponent: React.FC<PropsType> = ({title,man}) => {
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{man.name}</div>
    </div>
}
