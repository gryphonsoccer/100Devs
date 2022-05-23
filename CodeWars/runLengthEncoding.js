var runLengthEncoding = function(str){
    let bob = str.split('')
    let vince = []
    let jim = []
    for(let i = 0;i<bob.length;i++){
            vince.push([1,bob[i]])
        }
    for(let i = 0;i<vince.length;i++){
        if(jim.length>0 && jim[jim.length-1][1]==vince[i][1]){
            let randy = [vince[i][0]+jim[jim.length-1][0],vince[i][1]]
            jim.pop()
            jim.push(randy)
        }else{
            jim.push(vince[i])
        }
    }
    return jim
}

runLengthEncoding('Succck my dick')