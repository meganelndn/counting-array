"use strict";
window.addEventListener("DOMContentLoaded", init);

const array = [];
let i;

function init() {
    i = 0;
    loop();
}

function loop() {
    console.clear()

    //add 1+ element to beginning of array
    array.unshift(i)
    i++;

    //show counting array in console
    console.log(array)

    if (array.length < 9) {
        setTimeout(loop, 500)
    } else {
        //if array longer than 9 items, remove last element continuously
        array.pop(i)
        setTimeout(loop, 500)
    }
}