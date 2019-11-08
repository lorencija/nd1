let maxrows = document.getElementById('text').getAttribute('maxRows');
// let maxrows=10;
let minrows = document.getElementById('text').getAttribute('minRows');
// let minRows = 4;
let text = document.getElementById('text');

function textareadimension() {
    text.style.minHeight = (minrows-1) * 15 + 'px';
    text.style.maxHeight = (maxrows) * 15 + 'px';
}

let observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on' + event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}

function resize() {
    let str = text.style.height;
    str = str.replace('px', '') * 1;
    if (str >= maxrows) {
        text.style.overflow = 'auto';
    }
    text.style.height = 'auto';
    text.style.height = (text.scrollHeight+15) + 'px';
}

function delayedResize() {
    window.setTimeout(resize, 4)
}

textareadimension();
observe(text, 'change', delayedResize);
observe(text, 'cut', delayedResize);
observe(text, 'paste', delayedResize);
observe(text, 'drop', delayedResize);
observe(text, 'keydown', delayedResize);

text.focus();
text.select();
resize();
