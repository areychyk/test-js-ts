// const repo = {
//     saveAsync(data: any) {
//         const promise = new Promise((resolve, reject) => {
//             try {
//                 localStorage.setItem('some key', JSON.stringify(data))
//                 resolve()
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         return promise
//     }
// }


// repo.saveAsync({sdsds:'sdfsdfsd'})
// .then(()=>
//     console.log('saved'))
// .catch(()=>console.log('error'))


// const run = async () => {
//     await repo.saveAsync({sdsds: 'sdfsdfsd'})
//     console.log('saved')
//
// }
//
//
// run()


// console.log(12)
//
//
//
// setTimeout(()=>{
//     console.log(1)
//     setTimeout(()=>{
//         console.log(2)
//         setTimeout(()=>{
//             console.log(3)
//         },1000)
//     },1000)
// },1000)
//
//
// function wait(ms:number){
//
//     return new Promise<void>((resolve)=>{
//         setTimeout(()=>{
//             resolve()
//         },ms)
//     })
//
// }
//
// async function run(){
//     await wait(1000)
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
// }
//
// run()
//
// console.log(run())