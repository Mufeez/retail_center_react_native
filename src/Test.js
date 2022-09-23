/* const numbers =[1,2,3]
let duplicateNumbers = [1,2,3,...numbers]
console.log(duplicateNumbers) */


//reducers 

state =[]

products =[{title:"product1",price:200},{title:"product2",price:200},{title:"product3",price:200}]

const updated_state= [...state,...products]

console.log(updated_state)