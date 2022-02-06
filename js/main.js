const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;

let content = document.getElementById('assignments');
let contentOptions = [
  {link: 'week1/index1.html', text: 'Week 1'},
  {link: 'week2/index2.html', text: 'Week 2'},
  {link: 'week3/index3.html', text: 'Week 3'},
  {link: 'week4/index.html', text: 'Week 4'},
  {link: 'week5/index.html', text: 'Week 5'},
  {link: 'week6/index.html', text: 'Week 6'}
];

for ( {link, text} of contentOptions){
  content.innerHTML += `<li> <a id="${text}" href="${link}">${text}<a/> </li>`;
}
