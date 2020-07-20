function SliderCons () {
        this.prevBtn = null;
        this.nextBtn = null;
        this.imgMain = null; 
            
        this.imgArray = [];
        this.currentImg = 0;

        this.start = function (elID) {
        
            let that = this;
    
            let elSelect = '#' + elID;
    
            let el = document.querySelector(elSelect);
    
            this.prevBtn = el.querySelector('.prevBtnClass');
            this.nextBtn = el.querySelector('.nextBtnClass');
            this.imgMain = el.querySelector('.imgClass');
    
            this.prevBtn.addEventListener('click', function (){
                that.prevClick();
            });
            this.nextBtn.addEventListener('click', function (){
                that.nextClick();
            });
    
            this.imgArray.push('https://wallscloud.net/uploads/cache/1977700299/1049851-1024x576-MM-90.jpg');
            this.imgArray.push('https://wallpapercave.com/wp/wp4578805.jpg');
            this.imgArray.push('https://c4.wallpaperflare.com/wallpaper/523/180/28/wow-blizzard-art-world-of-warcraft-warcraft-hd-wallpaper-preview.jpg');
            this.imgArray.push('https://wallpaperset.com/w/full/5/2/9/212596.jpg');
    
            this.imgMain.src = this.imgArray[this.currentImg];
            this.prevBtn.disabled = true;
        }

        this.prevClick = function () {
            this.currentImg--;
            this.imgMain.src = this.imgArray[this.currentImg];
            this.nextBtn.disabled = false;
            if (this.currentImg == 0) {
                this.prevBtn.disabled = true
            }
        },
    
        this.nextClick = function () {
            this.currentImg++;
            this.imgMain.src = this.imgArray[this.currentImg];
            this.prevBtn.disabled = false;
            if (this.currentImg == (this.imgArray.length - 1)) {
                this.nextBtn.disabled = true
            }
        }
    };
