const resultsList = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  resultsList.append(`${name}: ${value} `);
  resultsList.append(document.createElement("br"));
});

const formEl=document.getElementById('format');

document.querySelector('.formget').addEventListener('click',()=>{
 formEl.style.display='none'
})