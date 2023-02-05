const slider= {
    slide_image : document.getElementById("slide_img"),
    dateit : function() { 
        date_fix = new Date();
        seconds = date_fix.getSeconds();
        if(seconds==0 && seconds<10){
            slider.slide_image.src="images/PO-0029.png";
            slider.slide_image.style.animationName='move_one';
        }
        else if(seconds==10 && seconds<20){
            slider.slide_image.src="images/advert1.jpg";
            slider.slide_image.style.animationName='move_one';

        }
        else if(seconds==20 && seconds<30){
            slider.slide_image.src="images/advert2.jpg";
            slider.slide_image.style.animationName='move_one';
        }
        else if(seconds==30 && seconds<40){
            slider.slide_image.src="images/advert3.jpg";
            slider.slide_image.style.animationName='move_one';

        }
        else if(seconds==40 && seconds<50){
            slider.slide_image.src="images/advert4.jpg";
            slider.slide_image.style.animationName='move_one';
        }
        else if(seconds==50 && seconds<=60){
            slider.slide_image.src="images/advert5.png";
            slider.slide_image.style.animationName='move_one';
        }
    }

}
setInterval(slider.dateit, 1000);