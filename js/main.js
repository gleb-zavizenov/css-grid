(() => {

  // Declaring variables for elements
  let navigation = document.querySelector(".nav");
  let dropdown = document.querySelector(".dropdown");
  let dropLinks = document.querySelectorAll('.burgerMenu-link');

  // Function to toggle nav bar
  function toggleNav(e){
    e.preventDefault();

    if(this.nodeName == 'A'){
      // Scrolling to the specific section on a page
      // window.scrollTo({
      //   top:this.offsetTop,
      //   behavior: 'smooth'
      // });
    };

    dropdown.classList.toggle('dropdown-active');
  }

  // Adding action to the nav bar on click
  navigation.addEventListener('click', toggleNav);
  dropLinks.forEach(link => link.addEventListener('click', toggleNav))

})();
