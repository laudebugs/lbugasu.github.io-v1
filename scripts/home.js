function inspire() {
  const date = document.getElementById("weeklyInsight").value;

  console.log("inspiring");
  switch (date) {
    case "2020-06-30":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/431803145");
      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/431803145");
      vidname.innerText = 'The Walking Fish"';
      break;

    case "2020-06-23":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/428523994");
      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/428523994");
      vidname.innerText = '"QUICK FIX"';
      break;
    case "2020-06-16":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/295751086");
      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/295751086");
      vidname.innerText = "MÚKÙNÉ";
      break;
    case "2020-06-09":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/200331788");
      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/200331788");
      vidname.innerText = 'Kenzo "The Realest Real"';
      break;
    case "2020-06-02":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/405211306");
      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/4052113063");
      vidname.innerText = "The 1619 Project of the New York Times Magazine";
      break;
    case "2020-05-26":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/422664003");
      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/422664003");
      vidname.innerText = "Freedom is a Serious Crime";
      break;
    case "2020-05-19":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/418623973");

      vidname = document.getElementById("videoname");
      vidname.setAttribute(
        "href",
        "https://vimeo.com/channels/staffpicks/418623973"
      );
      vidname.innerText = '"Jack & Ellington"';
      break;
    case "2020-05-12":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/412071250");

      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/412071250");
      vidname.innerText = '"MAN 2020"';
      break;

    case "2020-05-05":
      link = document.getElementById("video");
      link.setAttribute(
        "src",
        "https://player.vimeo.com/video/390608374?color=9b9b9b&title=0&byline=0&portrait=0&badge=0"
      );

      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/390608374");
      vidname.innerHTML = '"Nothing at Stake"';

      break;
    case "2020-04-28":
      link = document.getElementById("video");
      link.setAttribute("src", "https://www.youtube.com/embed/OJWRb1OHauw");

      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://www.youtube.com/embed/OJWRb1OHauw");
      vidname.innerText = '"KAMAUU: Hometown Glory"';
      break;
    case "2020-04-21":
      link = document.getElementById("video");
      link.setAttribute("src", "https://player.vimeo.com/video/348304224");

      vidname = document.getElementById("videoname");
      vidname.setAttribute("href", "https://vimeo.com/348304224");
      vidname.innerText = '"AFRONAUTS"';
      break;
  }
}

function main() {
  inspire();
  document
    .getElementById("weeklyInsight")
    .addEventListener("change", function (evt) {
      inspire();
    });
}

document.addEventListener("DOMContentLoaded", main);
