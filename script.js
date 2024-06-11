$(document).ready(function() {
  // Initialize background slider
  $('.background-slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.slicks-prev'),
    nextArrow: $('.slicks-next')
  });

  // Define menu items
  const menuItems = [
    { text: "Про компанію", href: "#about" },
    { text: "Новини", href: "#gallery-section" },
    { text: "Партнери", href: "#partners" },
    { text: "Контакти", href: "#" }
  ];

  const langItems = [
    { text: "ua", href: "/" },
    { text: "en", href: "/" }
  ];

  const mainMenuItems = [
    { text: "АГРОНОМІЧНИЙ СУПРОВІД", href: "/" },
    { text: "CRОPWISE OPERATIONS", href: "/" },
    { text: "АГРОХІМІЧНИЙ АНАЛІЗ", href: "/" },
    { text: "АГРАРНІ БПЛА", href: "/" },
    { text: "АГРООБЛАДНАННЯ", href: "/" }
  ];

  const footerMenuItems = [
    { text: "Про компанію", href: "#about" },
    { text: "Агрономічний супровід", href: "#gallery-section" },
    { text: "Crоpwise Operations", href: "#" },
    { text: "Агрохімічний аналіз", href: "#" },
    { text: "Аграрні БПЛА", href: "#" },
    { text: "Агрообладнання", href: "#" },
    { text: "Новини", href: "#" },
    { text: "Партнери", href: "#partners" },
    { text: "Контакти", href: "#" }
  ];

  // Function to create HTML code for menu items
  function createListItems(items) {
    return items.map(item => `<li><a href="${item.href}">${item.text}</a></li>`).join('');
  }

  // Function to add menu items to the page
  $('#menu-list').html(createListItems(menuItems));
  $('#lang-list').html(createListItems(langItems));
  $('#main-menu-list').html(createListItems(mainMenuItems));
  $('.footer-list').html(createListItems(footerMenuItems));
});


document.addEventListener("DOMContentLoaded", function() {
  // Duplicate logos in the logo slider
  const logoSlider = document.getElementById('logo-slider');
  logoSlider.innerHTML += logoSlider.innerHTML + logoSlider.innerHTML;

  const fadeFromTopElements = document.querySelectorAll(`[data-animation="fadeFromBottom"]`);

  fadeFromTopElements.forEach((element) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add("fadeFromBottom");
          observer.unobserve(target);
        }
      })
    }, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    observer.observe(element);
  })
});
