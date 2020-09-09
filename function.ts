function combine(n1:number,n2:number):number{
    return n1 + n2
} 

function printing(num:number):void{
    console.log('Just printing not returning',num.toString())
}

printing(combine(29,5))

console.log('What is the return value of void,',printing(combine(29,5)))

console.log('run the instant function',()=>combine(29,5))

const btnSubmit = document.getElementById("btnSubmit")

let addFunciton = printing



function AddandDowhatever(n1:number,n2:number,callback:(num:number)=>number){

    const result =n1+n2
   return callback(result)
}
AddandDowhatever(5,29, (result)=>result*2)

btnSubmit.addEventListener('click',()=>alert(AddandDowhatever(5,29, (result)=>result*2))) 