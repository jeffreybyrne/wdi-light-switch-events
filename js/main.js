document.addEventListener('DOMContentLoaded', function() {
  const lightSwitch = document.getElementsByClassName('switch')[0];
  const statusText = document.querySelector('.status');
  const body = document.querySelector('body');
  lightSwitch.addEventListener('click', function() {
    lightSwitch.classList.toggle('on');
    lightSwitch.classList.toggle('off');
    body.classList.toggle('light');
    body.classList.toggle('dark');
    if (statusText.innerText == "It's so bright in here!") {
      statusText.innerText = "Hey, who turned off the lights?"
    } else {
      statusText.innerText = "It's so bright in here!"
    }
  })
});
