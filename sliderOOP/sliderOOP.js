let slider = {
    leftButton: document.getElementById('leftBtnId'),
    rightButton: document.getElementById('rightBtnId'),
    imgMain: document.getElementById('imgId'),

    imgArray: [],
    currentImg: 0,
    
    

    start: function () {
        let that = this;

        this.leftButton.addEventListener('click', function(e){
            that.leftButtonOp(e)
        });
        this.rightButton.addEventListener('click', function(e){
            that.rightButtonOp(e)
        });

        this.imgArray.push('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png');
        this.imgArray.push('https://images.theconversation.com/files/336248/original/file-20200520-152302-97x8pw.jpg');
        this.imgArray.push('https://www.sciencenews.org/wp-content/uploads/2020/02/021520_catallergies_main-1028x579.jpg');
        this.imgArray.push('https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg');

        this.imgMain.src = this.imgArray[this.currentImg];
        this.leftButton.disabled = true;
    },


    leftButtonOp: function (e) {
        this.currentImg--;
        this.imgMain.src = this.imgArray[this.currentImg];
        this.rightButton.disabled = false;
        if (this.currentImg == 0) {
            this.leftButton.disabled = true;
        }
    },

    rightButtonOp: function (e) {
        this.currentImg++;
        this.imgMain.src = this.imgArray[this.currentImg];
        this.leftButton.disabled = false;
        if (this.currentImg == (this.imgArray.length - 1)) {
            this.rightButton.disabled = true;
        }
    }
};