var r = document.querySelector(':root');
//Circles doodles variables
var g1 = "5x10";
var s1 = "20vw";
var g2 = "10x10";
var s2 = "10vw";
var g3 = "12x10";
var s3 = "8.333vw";
//Clover doodle variables
var cg1 = "4 / 100vmax";
var cg2 = "5 / 100vmax";
var cg3 = "5 / 100vmax"; 
var cc1 = "12";
var cc2 =  "10";
var cc3 =  "4";
//Squares doodle variables
var sg1 = "10 / 100vmax";
var sg2 = "18 / 100vmax";
//function that adjusts doodles based on screen size
function myFunction(x) {
  if (window.matchMedia("(min-width: 1100px)").matches) {
  r.style.setProperty('--my-grid', g3);
             r.style.setProperty('--my-size', s3);
             r.style.setProperty('--my-grid2', cg3);
             r.style.setProperty('--my-calc2', cc3);
             r.style.setProperty('--my-grid3', sg2);
     
            doodle.update();
  } else if (window.matchMedia("(min-width: 800px)").matches) { // If media query matches
      r.style.setProperty('--my-grid', g2);
      r.style.setProperty('--my-grid3', sg1);
             r.style.setProperty('--my-size', s2);
              r.style.setProperty('--my-grid2', cg2);
             r.style.setProperty('--my-calc2', cc2);
     
            doodle.update();
  } else {
    r.style.setProperty('--my-grid', g1);
    r.style.setProperty('--my-size', s1);
     r.style.setProperty('--my-grid2', cg1);
    r.style.setProperty('--my-calc2', cc1);
     r.style.setProperty('--my-grid3', sg1);
    doodle.update();}
  

}
var x = window.matchMedia("(min-width: 800px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); 
var y = window.matchMedia("(min-width: 1100px)");
myFunction(y); // Call listener function at run time
y.addListener(myFunction); 

/*Circles doodle animate*/
function simulateClick() {
  if(t === 1||t === 3){
    doodle.update();}
      }
var circles = document.getElementsByClassName("circles");
for(var i = 0; i < circles.length; i++){
    circles[i].addEventListener('click', simulateClick);
  }
//Class list of vids links  
var yt = document.getElementsByClassName("ytlist");

//Vars and a function to change text colors on active vids
var firstClick = false;
var lastClick = 0;
function firstClickCheck(l, n) {
     console.log(l);
      console.log(n);
    console.log(firstClick);
    if(firstClick === true){
       yt[n].className = yt[n].className.replace("ytcol", "ytcol2"); 
       yt[l].className = yt[l].className.replace("ytcol2", "ytcol"); 
    } 
    else{
        yt[n].className = yt[n].className.replace("ytcol", "ytcol2"); 
      firstClick = true;  
    }
    console.log(firstClick);

}
//YouTube vids variables  
var curentvid;
var vid1 = 'PebUde00V9o';
var vid2 = '_TLzor3qSmQ';
var vid3 = 'f6lX1uKectg';
var vid4 = 'sSEsvu8vZOY';
var vid5 = 'aKF53fS-oBM';
var vid6 = 'j_aUFuZA9oo';
var teenage = "ZPzyN8Qq5XA";
currentvid = vid3;
// 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: "PebUde00V9o",
        events: {
        }
      });
    }
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }
    function newvid1() {
          player.cueVideoById({videoId:"PebUde00V9o",'startSeconds': 1});
          firstClickCheck(lastClick, 0); 
          lastClick = 0;
          }
function newvid2() {
          player.cueVideoById({videoId:"_TLzor3qSmQ",'startSeconds': 1});
           firstClickCheck(lastClick, 1); 
          lastClick = 1;
          }
function newvid3() {
          player.cueVideoById({videoId:"f6lX1uKectg",'startSeconds': 1});
           firstClickCheck(lastClick, 2);
          lastClick = 2;
          }
function newvid4() {
          player.cueVideoById({videoId:"sSEsvu8vZOY",'startSeconds': 1});
           firstClickCheck(lastClick, 3); 
          lastClick = 3;
          }
    function newvid5() {
          player.cueVideoById({videoId:"NfOCQj25Y_0",'startSeconds': 1});
           firstClickCheck(lastClick, 4); 
          lastClick = 4;
          }
    function newvid6() {
          player.cueVideoById({videoId:"aKF53fS-oBM",'startSeconds': 1});
           firstClickCheck(lastClick, 5); 
          lastClick = 5;
          }
      yt[0].addEventListener('click', newvid1);
      yt[1].addEventListener('click', newvid2);
      yt[2].addEventListener('click', newvid3);
      yt[3].addEventListener('click', newvid4);
      yt[4].addEventListener('click', newvid5);
      yt[5].addEventListener('click', newvid6);
      
      var t = 1;
var title = document.getElementById("title");
var sb = document.getElementById("siteby");
var h2 = document.getElementsByTagName("h2");
var h3 = document.getElementsByTagName("h3");
var fclass = [
  "h2-indie-font-size",
  "indie-font-size",
  "jua-font-size",
 
];

/*change theme*/
function simulateClick2() {
  t++;
  if (t > 2) {
    t = 1;
  }

  if (t === 1) {
    title.style.color = "#333";
    sb.style.color = "#333";
    doodle.style.background = "white";
    for (i = 0; i < h2.length; i++) {
      h2[i].style.fontFamily = "Jua, sans-serif";
      h2[i].className = h2[i].className.replace(fclass[0], fclass[2]);
    }
    for (i = 0; i < h3.length; i++) {
      h3[i].style.fontFamily = "Jua, sans-serif";
      h3[i].className = h3[i].className.replace(fclass[1], fclass[2]);
    }
    r.style.setProperty("--my-colbg", "#b5cce5");
    r.style.setProperty("--my-col1", "#b5cce5");
    r.style.setProperty("--my-col2", "#d9e5f2");
   /* for (i = 0; i < h2.length; i++) {
      h2[i].style.fontWeight = 800;
    }*/
  } else if (t === 2) {
    title.style.color = "white";
    sb.style.color = "white";
    doodle.style.background = "#0a0c27";
    for (i = 0; i < h2.length; i++) {
      h2[i].style.fontFamily = "Indie Flower,cursive";
      h2[i].className = h2[i].className.replace(fclass[2], fclass[0]);
    }
    for (i = 0; i < h3.length; i++) {
      h3[i].style.fontFamily = "Indie Flower,cursive";
      h3[i].className = h3[i].className.replace(fclass[2], fclass[1]);
    }
    r.style.setProperty("--my-colbg", "#b1cdcd");
    r.style.setProperty("--my-col1", "#7da7a7");
    r.style.setProperty("--my-col2", "#deeaea");
   /* for (i = 0; i < h2.length; i++) {
      h2[i].style.fontWeight = 600;
    }
    for (i = 0; i < h3.length; i++) {
      h3[i].style.fontWeight = 600;
    }*/
  }
  /*doodle change*/
  doodle.use = "var(--rule" + [t] + ")";
}
var ct = document.getElementById("ct");

ct.addEventListener("click", simulateClick2);


        