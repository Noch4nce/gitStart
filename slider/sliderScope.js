let leftButton = document.getElementById('leftId');
let rightButton = document.getElementById('rightId');

let imgMain = document.getElementById('imgId');

leftButton.addEventListener('click', leftButtonOp);
rightButton.addEventListener ('click', rightButtonOp);

let imgArray = [];
imgArray.push ('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png');
imgArray.push ('https://images.theconversation.com/files/336248/original/file-20200520-152302-97x8pw.jpg');
imgArray.push ('https://www.sciencenews.org/wp-content/uploads/2020/02/021520_catallergies_main-1028x579.jpg');
imgArray.push ('https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg');

let currentImg = 0;
imgMain.src = imgArray[currentImg];

leftButton.disabled = true;

function leftButtonOp () {
    currentImg--;
    imgMain.src = imgArray[currentImg];
    rightButton.disabled = false;
    if (currentImg == 0){
        leftButton.disabled = true;
    }
}

function rightButtonOp () {
    currentImg++;
    imgMain.src = imgArray[currentImg];
    leftButton.disabled = false;
    if (currentImg == (imgArray.length - 1)){
        rightButton.disabled = true;
    }
}

