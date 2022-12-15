//
//
// test ("Test 1 Should take old men older then 90",()=>{
//     const ages = [18,20,22,100,90,14];
//
//
//
//     const oldAges=ages.filter((a)=>a>90);
//     expect(oldAges.length).toBe(1)
//     expect(oldAges[0]).toBe(100)
// })
//
//
// test("Test 2 Should take courses chipper 160",()=>{
//
//     const courses =[
//         {title:"CSS", price:110},
//         {title:"JS", price:200},
//         {title:"REACT", price:150},
//     ]
//
//     const cheapCourses =(course:CoursesType)=>course.price <160
//
//
//     const chipPredicate=courses.filter(c=>c.price<160);
//
//     expect(chipPredicate.length).toBe(2)
//     expect(chipPredicate[0].title).toBe("CSS")
// })
//
//
// test("Test 3 get only completed tasks",()=>{
//     const tasks=[
//         {id:1,title:"Bread", isDone:false},
//         {id:2,title:"Milk", isDone:true},
//         {id:3,title:"Salt", isDone:false},
//         {id:4,title:"Sugar", isDone:true},
//     ]
//
//     const completedTasks = tasks.filter(t=>t.isDone)
//
//     expect(completedTasks.length).toBe(2)
//     expect(completedTasks[0].id).toBe(2)
//
//
// })