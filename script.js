const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click',() => {
	toggleIcon.classList.toggle("ri-sun-line");
	document.body.classList.toggle("dark-mode");

});

  const menuIcon = document.getElementById('menu-line');
  const closeIcon = document.getElementById('close-line');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'inline';
  });

  closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.style.display = 'inline';
    closeIcon.style.display = 'none';
  });
