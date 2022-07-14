function perfectSquare(num) {
    let isPerfect = false;
    for (let i = 0; i <= num; i++) {
        if (num == i * i) {
            isPerfect = true;
        }
    }
    console.log(isPerfect);
}
perfectSquare(0);
perfectSquare(1);
perfectSquare(4);
perfectSquare(5);

