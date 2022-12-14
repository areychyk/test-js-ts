import {StudentType} from "../../Test-02/Test-02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./Test-03_01";

let student: StudentType;

beforeEach(() => {
    student = {
        name: "Denis",
        age: 25,
        isActive: false,
        address: {
            streetTitle: "Kazintza",
            city: {title: "Minsk", countryTitle: "Belarus"}
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "CSS"},
            {id: 3, title: "React"}
        ]
    }

})

test("test 3 new skill add to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()


})

test("test 4 student is active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test("test 5 student live in city", () => {

    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})