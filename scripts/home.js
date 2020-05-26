function inspire(){
    const date = document.getElementById('weeklyInsight').value;

    console.log('inspiring')
    switch(date){
        case "2020-05-26":
            link = document.getElementById('video')
            link.setAttribute('src', "https://player.vimeo.com/video/186141191")
            vidname = document.getElementById('videoname');
            vidname.setAttribute('href',"https://vimeo.com/186141191")
            vidname.innerText = '"Adrift"'
            break;
        
        case "2020-05-19":
            link = document.getElementById('video')
            link.setAttribute('src', "https://player.vimeo.com/video/418623973")
            
            vidname = document.getElementById('videoname');
            vidname.setAttribute('href',"https://vimeo.com/channels/staffpicks/418623973")
            vidname.innerText = '"Jack & Ellington"'
            break;
        case "2020-05-12":
            link = document.getElementById('video')
            link.setAttribute('src', "https://player.vimeo.com/video/412071250")
            
            vidname = document.getElementById('videoname');
            vidname.setAttribute('href',"https://vimeo.com/412071250")
            vidname.innerText = '"MAN 2020"'
            break;

        case "2020-05-05":
            link = document.getElementById('video')
            link.setAttribute('src', "https://player.vimeo.com/video/390608374?color=9b9b9b&title=0&byline=0&portrait=0&badge=0")
            
            vidname = document.getElementById('videoname');
            vidname.setAttribute('href','https://vimeo.com/390608374')
            vidname.innerHTML = '"Nothing at Stake"'

            break;
        case "2020-04-28":
            link = document.getElementById('video')
            link.setAttribute('src', "https://www.youtube.com/embed/OJWRb1OHauw")
            
            vidname = document.getElementById('videoname');
            vidname.setAttribute('href','https://www.youtube.com/embed/OJWRb1OHauw')
            vidname.innerText = '"KAMAUU: Hometown Glory"'
            break;
        case "2020-04-21":
            link = document.getElementById('video')
            link.setAttribute('src', "https://player.vimeo.com/video/348304224")
            
            vidname = document.getElementById('videoname');
            vidname.setAttribute('href','https://vimeo.com/348304224')
            vidname.innerText = '"AFRONAUTS"'
            break;
        
    }
}

function main(){
    inspire();
    document.getElementById('weeklyInsight').addEventListener('change', function(evt){
        inspire();
    });
}

document.addEventListener("DOMContentLoaded", main);
