function calcula() {
    let arr = [1,2,3,4,5,6];
    let arrRes = [];

    let sumaParcial = 0;
    for(i=0;i<arr.length;i++) {
        sumaParcial += arr[i];
        console.log(sumaParcial);

        arrRes.push(sumaParcial);
    }
console.log(arrRes);


}
calcula();