console.log("Welcome to Rhythm");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let masterSongname = document.getElementById('masterSongname');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName : "1.Sunflower x Bad Liar", filePath:"1.mp3", coverPath:"cover2.jpg"},
    {songName : "2.kesariya", filePath:"2.mp3", coverPath:"cover2.jpg"},
    {songName : "3.Srivalli", filePath:"3.mp3", coverPath:"cover2.jpg"},
    {songName : "4.Abhi kuch dino se", filePath:"4.mp3", coverPath:"cover2.jpg"},
    {songName : "5.Behchalla", filePath:"5.mp3", coverPath:"cover2.jpg"},
    {songName : "6.Duaa", filePath:"6.mp3", coverPath:"cover2.jpg"},
    {songName : "7.Ghungroo", filePath:"7.mp3", coverPath:"cover2.jpg"},
    {songName : "8.Jai Jai Shivashankar", filePath:"8.mp3", coverPath:"cover2.jpg"},
    {songName : "9.Jugraffia", filePath:"9.mp3", coverPath:"cover2.jpg"},
    {songName : "10.Khariyat", filePath:"10.mp3", coverPath:"cover2.jpg"},

]
songItems.forEach((element, i)=>{
    
     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//Handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

//lsiten to even
audioElement.addEventListener('timeupdate',()=>{
    
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})
const makeALLPlays =()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
        
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach(function (element) {
    element.addEventListener('click', (e) => {
        makeALLPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        masterSongname.innerHTML = songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
       
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<0){
        songIndex=0;
    }else{

    songIndex-=1;}
    audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        masterSongname.innerHTML = songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex=0;
    }else{

    songIndex+=1;}
    audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        masterSongname.innerHTML = songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})