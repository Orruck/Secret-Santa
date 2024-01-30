function shuffle(array) {
    let randomizedArray = [];
    let copyOfArray = array.slice();
    let currentIndex = copyOfArray.length;
    let randomIndex;

    while(currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        randomizedArray.push(copyOfArray[randomIndex]);
        
        copyOfArray.splice(randomIndex, 1);
        currentIndex--;
    }

    randomizedArray = reshuffle(array, randomizedArray)

    return randomizedArray;
}

function reshuffle(array, arrayCopy) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === arrayCopy[i]){
            console.log(`${array[i]} ${arrayCopy[i]} "EQUALS"`);
            console.log(array)
            console.log(arrayCopy)
            
            // removeIndex, push removedIndex into randomIndex
            let currentArrayItem = arrayCopy[i];
            arrayCopy.splice(i, 1);

            arrayCopy.splice((arrayCopy.length+1) * Math.random() | 0, 0, currentArrayItem);
            
            i = 0;
        }
    }

    return arrayCopy;
}

export { shuffle }