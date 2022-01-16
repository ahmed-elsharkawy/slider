let images = Array.from(document.getElementsByTagName("IMG"));
let cover = document.getElementById("cover");
let selected = document.getElementById("selected"); 
let close = document.getElementById("close");
let previus = document.getElementById("previus");
let next = document.getElementById("next");

let currentIndex;

for(let i=0; i<images.length; i++){
    images[i].addEventListener('click', openImage);
}
function openImage(e){
    let clickedImg = e.target.src;
    cover.classList.replace('d-none', 'd-flex');
    selected.style.backgroundImage = `url("${clickedImg}")`;
    currentIndex = images.indexOf(e.target);
}
close.addEventListener('click', closeImage);
function closeImage(){ 
    cover.classList.replace('d-flex', 'd-none');
}
previus.addEventListener('click', previusImage);
function previusImage(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex = images.length-1;
    }
    let imgSrc = images[currentIndex].src;
    selected.style.backgroundImage = `url("${imgSrc}")`;
}
next.addEventListener('click', nextImage);
function nextImage(){
    currentIndex++;
    if(currentIndex == images.length){
        currentIndex = 0;
    }
    let imgSrc = images[currentIndex].src;
    selected.style.backgroundImage = `url("${imgSrc}")`;
}
document.addEventListener('keydown', function(e){
    if(e.keyCode == 39){
        nextImage();
    }else if(e.keyCode == 37){
        previusImage();
    }else if(e.keyCode == 27){
        closeImage();
    }
})