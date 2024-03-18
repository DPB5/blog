const form = document.getElementById('theme-chooser');
const themeSelect = document.getElementById('theme');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const chosenTheme = themeSelect.value;
  let message;

  if (chosenTheme === 'galaxy') {
    targetUrl = 'KidCalc1.html';
  } else if (chosenTheme === 'dinosaur') {
    targetUrl = 'https://www.website2.com';
  } else if (chosenTheme === 'marvel') {  
    targetUrl = 'https://www.website3.com';;
  }


  if (targetUrl) {
    window.location.href = targetUrl;
  }
});
