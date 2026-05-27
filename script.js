let anime = "naruto";
let current = 0;

function loadEpisode(index){
  document.getElementById("player").src = episodes[anime][index];
  document.getElementById("title").innerText = anime + " Episode " + (index + 1);
}

function next(){
  if(current < episodes[anime].length - 1){
    current++;
    loadEpisode(current);
  }
}

function prev(){
  if(current > 0){
    current--;
    loadEpisode(current);
  }
}
loadEpisode(0);