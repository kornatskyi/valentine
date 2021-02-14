

document.addEventListener('click', function (e) {

    let element = document.createElement('div');

    console.log(parseInt(randomNumber(1, 4)));

    switch (parseInt(randomNumber(1, 4))) {
        case 1:
          
            $(element).css('-webkit-animation', 'falling 3s 0s forwards');
            break;
        case 2:
            $(element).css('-webkit-animation', 'falling3 3s 0s forwards');

            $(element).css('--heart-color', 'rgb(228, 0, 190)');
            break;
        case 3:
            $(element).css('-webkit-animation', 'falling2 3s 0s forwards');
            break;

        default:
            break;
    }


    let cursorPosition = getCursorXY(e);

    $(element).css('top', cursorPosition[1]);
    $(element).css('left', cursorPosition[0]);

    element.className = "heart";

    document.querySelector('body').appendChild(element);
    setTimeout(
        () => {
            element.remove()
        }, 2000);
});

function getCursorXY(e) {
    return [(window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
    (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)];
}

// Function to generate random number  
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

