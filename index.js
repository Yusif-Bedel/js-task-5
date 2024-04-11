                                            //!task5-1
// let voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: true}
//     ];



// let salam=voters.reduce((number,voters)=>{
//     if(voters.voted==true){
//         number++
//     }
//     return number
// },0
// )
// console.log(salam)
                                        //!task5-2
// let wishlist = [
// { title: "Tesla Model S", price: 1 },
// { title: "4 carat diamond ring", price: 1 },
// { title: "Fancy hacky Sack", price: 1 },
// { title: "Gold fidgit spinner", price: 1 },
// { title: "A second Tesla Model S", price: 1 }
// ];
// let salam=wishlist.reduce((number,wishlist)=>{
//     number+=wishlist.price
//     return number
// },0
// )
// console.log(salam)
                                       //!task5-3
// let cumle=prompt("cumle daxil edin")
// function salam(cumle) {
//     let sagol=cumle.split(' ')
//     let eded=sagol[0]
//     for (let i = 0; i < sagol.length; i++) {
//         if(sagol[i].length>eded.length){
//             eded=sagol[i]
//         }
//     }
//     return eded
// }
// console.log(salam(cumle))
                                    //!tak5-4
// let sozler="salam sagol kamil"
// function yusif(sozler) {
//     let bedel=sozler.split(' ')
//     let men=""
//     for (let i = 0; i < bedel.length; i++) {
//         bedel[i]=bedel[i][0].toUpperCase() + bedel[i].slice(1)
//         men=men+bedel[i]+" "
//     }
//     return men
// }
// console.log(yusif(sozler))  
                                  //!tak5-5
// let cumle="gece zulmet ve qaranliq ureyim susdu bir anliq yadima dusdu cavanliq"
// function cewka(cumle,number) {
//     let piyada=cumle.split(" ")
//     let newArray=piyada.splice(0,number)
//     return newArray.join(" ")
// }
// console.log(cewka(cumle,5))
                            