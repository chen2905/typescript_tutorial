type combineTypeOfNumAndString = number|string
type resultConversion ='as-number'|'as-string'|''

function combine (num1:combineTypeOfNumAndString, num2:combineTypeOfNumAndString, outPutType:resultConversion=''){
    let result
    if (typeof(num1)==='number'&&typeof(num2)==='number'){
        result = num1+num2
    }else{
        if(outPutType.toLowerCase()==='as-number'){

            result = +num1 + +num2
        }else{
            result = num1.toString()+num2.toString()
        }
        
    }


    return result
}

const combineResultNum = combine (29,5)
console.log('number result:',combineResultNum )

const combineResultStr = combine('Pray to you',' my mighty God')
console.log('string result:',combineResultStr)

const combineNumAndStrResult =combine('2',9)
console.log('num and str result: ',combineNumAndStrResult)

const combineStrToNum =combine('2','9','as-number')
console.log('str and str to num result: ',combineStrToNum)