import {StudentType} from "../../Test-02/Test-02";


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getDate(),
        title: skill
    })
}

export const makeStudentActive = (stud: StudentType) => {
    stud.isActive = true;

}

export const doesStudentLiveIn = (stud: StudentType, city:string) => {
    return stud.address.city.title === city

}