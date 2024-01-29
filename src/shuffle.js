function shuffle(array) {
    let randomizedArray = [];
    let copyOfArray = array;
    let currentIndex = copyOfArray.length;
    let randomIndex;

    while(currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        randomizedArray.push(copyOfArray[randomIndex]);
        
        copyOfArray.splice(randomIndex, 1);
        currentIndex--;
    }

    return randomizedArray;
}

export { shuffle }