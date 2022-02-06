document.getElementById("list-view").onclick = function () {
    // alert('correct code');
    document.getElementById("card-view").className = 'cards-list'; 
    showHide("list-view", false);
    showHide('grid-view', true);
};
document.getElementById("grid-view").onclick = function () {
    // alert('correct code');
    
    document.getElementById("card-view").className = 'cards'; 
    showHide("grid-view", false);
    showHide('list-view', true);
};


function showHide(id,  show) {
    
    let x = document.getElementById(id);
    if (show) {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
  }