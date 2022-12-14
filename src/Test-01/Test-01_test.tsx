// import {mult, splitIntoWorld, sum} from "./Test-01";
// //data
// let a:number;
// let b:number;
// let c:number;
//
// beforeEach(()=>{
//     a=1;
//     b=2;
//     c=3;
// })
//
// test("test1 sum should be correct", () => {
//
// //action
//     const result1 = sum(a, b);
//     const result2 = sum(a, c);
//
//     //expect result
//
//     expect(result1).toBe(3);
//     expect(result2).toBe(4);
//
// })
//
//
// test("test2 multiply should be correct", () => {
//
// //action
//     const result1 = mult(a, b);
//     const result2 = mult(a, c);
//
//     //expect result
//
//     expect(result1).toBe(2);
//     expect(result2).toBe(3);
//
// })
//
// test("test3 splitting into world should be correct",()=>{
//
//     const sentences1 = "Hello my friend!";
//     const sentences2 = "Js - the best programming language";
//
//     const result1 = splitIntoWorld(sentences1);
//     const result2 = splitIntoWorld(sentences2);
//
//     expect(result1.length).toBe(3)
//     expect(result1[0]).toBe("hello")
//     expect(result1[1]).toBe("my")
//     expect(result1[2]).toBe("friend")
//
//
//     expect(result2.length).toBe(5)
//     expect(result2[0]).toBe("js")
//     expect(result2[1]).toBe("the")
//     expect(result2[2]).toBe("best")
//     expect(result2[3]).toBe("programming")
//     expect(result2[4]).toBe("language")
// })
