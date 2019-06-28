console.log("Random", Math.random());

//Me robe esto de MDN
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
alert(getRandomInt(100,999));