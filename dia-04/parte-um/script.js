function contador(){
    for(let i = 1; i <= 100; i +=5){
        if(i % 2 !== 0){
            continue;
        }
        console.log(i)
    }
}

contador()