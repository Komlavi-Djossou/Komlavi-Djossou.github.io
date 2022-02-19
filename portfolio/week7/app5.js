import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});
myHikes.hikeList;


function saveComment(){
  var hikeName = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  console.log('Hike Name: ' + hikeName);
  console.log('Comment: '+ comment);

  
  return false;
}

document.getElementById("submit-btn").addEventListener("click", saveComment);