
// in this code I created filter function 
let selected = 0;
let javascript = document.getElementById("javascript");
let CSharf = document.getElementById("CSharf");
let figma = document.getElementById("figma");
let html = document.getElementById("html");
let css = document.getElementById("css");
let scss = document.getElementById("scss");

function toggleActive() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach((button, index) => {
    if (index === selected) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function alll() {
  selected = 0;
  toggleActive();
  javascript.style.display = 'block';
  CSharf.style.display = 'block';
  figma.style.display = 'block';
  html.style.display = 'block';
  css.style.display = 'block';
  scss.style.display = 'block';
};

function front() {
  selected = 1;
  toggleActive();
  javascript.style.display = 'block';
  CSharf.style.display = 'none';
  figma.style.display = 'none';
  html.style.display = 'block';
  css.style.display = 'block';
  scss.style.display = 'block';
};

function back() {
  selected = 2;
  toggleActive();
  javascript.style.display = 'block';
  CSharf.style.display = 'block';
  figma.style.display = 'none';
  html.style.display = 'none';
  css.style.display = 'none';
  scss.style.display = 'none';
};

function design() {
  selected = 3;
  toggleActive();
  javascript.style.display = 'none';
  CSharf.style.display = 'none';
  figma.style.display = 'block';
  html.style.display = 'none';
  css.style.display = 'none';
  scss.style.display = 'none';
};

function data() {
  selected = 4;
  toggleActive();
  javascript.style.display = 'none';
  CSharf.style.display = 'none';
  figma.style.display = 'none';
  html.style.display = 'none';
  css.style.display = 'none';
  scss.style.display = 'none';
};


// this code s for appering information cards for courses

  // Function to toggle the visibility of the information card


  function toggleInfo() {
    var infoCard = document.querySelector('.infCard');
    if (infoCard.style.display === 'none' || infoCard.style.display === '') {
      infoCard.style.display = 'block';
    } else {
      infoCard.style.display = 'none';
    }
  }
    
      

 