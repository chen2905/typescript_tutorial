function add(n1:number, n2:number,showResult:boolean,phrase:string){

    if(typeof(n1)!=='number'||typeof(n2)!=='number'){
        throw new Error('Incorrect input')
    }

    const result =n1+n2
    if(showResult){
        console.log(phrase+result)
    }else{
        return result
    }
  
}
const num1 =29
const num2 =80
const printResult =true
const strPhrase ='This is result:'
const result = add(num1,num2,printResult,strPhrase)

 