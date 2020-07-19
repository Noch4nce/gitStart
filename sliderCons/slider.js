let sliderFact = {
    sliderMain: function (){
        let slider = {
            leftBtn: null, 
            rightBtn: null, 
        
            imgMain: null, 
        
            imgArray: [],
            currentImg: 0,
        
            start: function (elId) {
        
                let that = this;
        
                let selector = '#' + elId;
        
                let el = document.querySelector(selector);
        
                this.leftBtn = el.querySelector('.slideLeftBtn');
                this.rightBtn = el.querySelector('.slideRightBtn');
                this.imgMain = el.querySelector('.slideImg');
        
                this.leftBtn.addEventListener('click', function(e){
                    that.leftClick(e);
                });
                this.rightBtn.addEventListener('click', function(e){
                    that.rightClick(e);
                });
        
                this.imgArray.push('https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg');
                this.imgArray.push('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg');
                this.imgArray.push('https://i.ytimg.com/vi/Z4ls0-ZGnU4/maxresdefault.jpg');
                this.imgArray.push('https://www.scitecheuropa.eu/wp-content/uploads/2019/09/Nature-climate.jpg');
        
                this.imgMain.src = this.imgArray[this.currentImg];
                this.leftBtn.disabled = true;
            },
        
            leftClick: function (e) {
                this.currentImg--;
                this.imgMain.src = this.imgArray[this.currentImg];
                this.rightBtn.disabled = false;
                if (this.currentImg == 0) {
                    this.leftBtn.disabled = true;
                }
            },
        
            rightClick: function (e) {
                this.currentImg++;
                this.imgMain.src = this.imgArray[this.currentImg];
                this.leftBtn.disabled = false;
                if (this.currentImg == (this.imgArray.length - 1)) {
                    this.rightBtn.disabled = true;
                }
            }
        }
        return slider;
    }
}



