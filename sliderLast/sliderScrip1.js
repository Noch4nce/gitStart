function SliderCons () {
    this.prevBtn = null;
    this.nextBtn = null;
    this.imgMain = null;

    this.imgArray = [];
    this.currentImg = 0;

    this.start = function (elId) {
        let that = this;

        let divId = '#' + elId;
        let el = document.querySelector(divId)

        this.prevBtn = el.querySelector('.prevClass');
        this.nextBtn = el.querySelector('.nextClass');
        this.imgMain = el.querySelector('.imgClass');

        this.prevBtn.addEventListener('click', function () {
            that.prevClick();
        });
        this.nextBtn.addEventListener('click', function () {
            that.nextClick();
        });

        this.imgArray.push('https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg');
        this.imgArray.push('https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg');
        this.imgArray.push('https://prod-wolt-venue-images-cdn.wolt.com/5e9ed940634ff8fe31e88912/82bf3a34-83d5-11ea-b0a6-0a586469ca09_food_coma8_menu.jpg');
        this.imgArray.push('https://www.healthline.com/hlcmsresource/images/AN_images/AN138-Pizza-732x549-Thumb_0.jpg');

        this.imgMain.src = this.imgArray[this.currentImg];
        this.prevBtn.disabled = true;
    };

    this.prevClick = function () {
        this.currentImg--;
        this.imgMain.src = this.imgArray[this.currentImg];
        this.nextBtn.disabled = false;

        if (this.currentImg == 0) {
            this.prevBtn.disabled = true;
        }
    };

    this.nextClick = function () {
        this.currentImg++;
        this.imgMain.src = this.imgArray[this.currentImg];
        this.prevBtn.disabled = false;

        if (this.currentImg == (this.imgArray.length - 1)) {
            this.nextBtn.disabled = true;
        }
    }
};


