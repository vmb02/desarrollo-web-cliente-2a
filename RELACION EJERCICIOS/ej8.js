function countby(x,y) {

    let array = [];

    if(x < 0 || y < 0) {
        console.log(array);
    } else {
        for(let i = 1; i <= y; i++) {
            array.push(i*x);
        }
        console.log(array);
    }
}

countby(4,3);