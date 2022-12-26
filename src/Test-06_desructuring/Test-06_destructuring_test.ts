type ManType={
    name:string
    age:number
    lessons:Array<{title:string}>
    address:{
        street:{
            title:string
        }
    }
}


let props:ManType;

beforeEach(()=>{
    props={
        name:"Denis",
        age:25,
        lessons:[{title:"1"},{title:"2"}],
        address:{
            street:{
                title:"Kazintsa"
            }
        }
    }
})

test("123",()=>{



    // const age=props.age;
    // const lessons=props.lessons

    const {age,lessons}=props

    const {title}=props.address.street


    expect(age).toBe(25)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Kazintsa")


})


