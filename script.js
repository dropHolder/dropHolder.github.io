// Running words===============================

let delay = 70;
let nextm = 0;
let msg = new Array(
    'Do you wanna see my job?',
    'Press that button, then!',
);

function start_print() { do_print(msg[0], 0, 1); }
function do_print(text, pos, dir) {
    let out = text.substring(0, pos) + '|';
    document.querySelector(".header-describe").innerHTML = out;
    pos += dir;
    if (pos > text.length)
        setTimeout('do_print("' + text + '",' + pos + ',' + (-dir) + ')', delay * 10);
    else {
        if (pos < 0) {
            if (++nextm >= msg.length) nextm = 0;
            text = msg[nextm];
            dir = -dir;
        }
        setTimeout('do_print("' + text + '",' + pos + ',' + dir + ')', delay);
    }
}
start_print();





//Button scroll


let button = document.querySelector('.fa-chevron-down');

console.log(button);

document.querySelector('.fa-chevron-down').addEventListener('click', scroll);

function scroll() {
    console.log(window.pageYOffset);
    if (window.pageYOffset < 680) {
        window.scrollBy(0, 30);
        setTimeout(scroll, 20);
    }
    else {
        clearTimeout(scroll);
        window.scrollTo(0, 680);
    }
}