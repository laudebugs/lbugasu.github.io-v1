function inspire() {
  let days = (new Date()).getUTCDay()
  let weekOf = new Date(document.getElementById("weeklyInsight").value)
  console.log(days)
  weekOf.setDate(weekOf.getDate()-days)
  console.log(formatDate(weekOf))
  fetch('https://raw.githubusercontent.com/lbugasu/lbugasu.github.io/master/scripts/weeklyVideos.json')
  .then(response => response.json())
  .then(data=>{
    console.log(data[formatDate(weekOf)])
    link = document.getElementById("video");
    link.setAttribute("src", data["embed-link"]);
    vidname = document.getElementById("videoname");
    vidname.setAttribute("href", data["video-link"]);
    vidname.innerText = data["title"];
  } )
  .catch(error => console.error(error));

  
}

function main() {
  let d = formatDate(new Date())
  document.getElementById("weeklyInsight").value = d;
  inspire();
  document
    .getElementById("weeklyInsight")
    .addEventListener("change", function (evt) {
      inspire();
    });
}

document.addEventListener("DOMContentLoaded", main);

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}