 
        

  document.addEventListener('DOMContentLoaded', function () {
  var toggleLink = document.getElementById('toggleTerrasses');
  var popup = document.getElementById('subPopup');

  if (toggleLink && popup) {
    toggleLink.addEventListener('click', function (event) {
      event.preventDefault();
      popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
    });
  }
});


