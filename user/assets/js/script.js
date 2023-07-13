// Scroll Reveal
ScrollReveal().reveal('.card', {delay : 500});

// Jquery
$(document).ready(function() {
  var slides = $('.banner-slide');
  var currentSlide = 0;

  function showSlide() {
    slides.eq(currentSlide).addClass('active');
    slides.eq(currentSlide - 1).removeClass('active');
    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(showSlide, 7000);
  }

  showSlide();

  $('.hamMenu').click(function() {  
    $(this).toggleClass('active')
    $('.menu').toggleClass('active');
  })

  $('.drop-menu').click(function() {
    var $dropdown = $(this).find('ul');
    if ($dropdown.hasClass('active')) {
      $dropdown.removeClass('active');
    } else {
      $('.drop-menu ul').removeClass('active');
      $dropdown.addClass('active');
    }
  });


  
// =================== HALAMAN PROFIL ===============

  $(".profil-sub-menu").click(function() {
    $(".profil-sub-menu").removeClass('active')
    $(this).addClass('active');
  });

  $('.tupoksi-content').hide();
  $('.kebijakan-content').hide();
  $('.struktur-org-content').hide();
  $('.visimisi-content').show();
  $('#profil-tupoksi').click(function(){
    $('.tupoksi-content').slideDown();
    $('.visimisi-content').hide();
    $('.kebijakan-content').hide();
    $('.struktur-org-content').hide();
  });

  $('#profil-visimisi').click(function(){
    $('.visimisi-content').slideDown();
    $('.tupoksi-content').hide();
    $('.kebijakan-content').hide();
    $('.struktur-org-content').hide();
  });
  $('#profil-kebijakan').click(function(){
    $('.visimisi-content').hide();
    $('.tupoksi-content').hide();
    $('.kebijakan-content').slideDown();
    $('.struktur-org-content').hide();
  });
  $('#profil-struktur').click(function(){
    $('.visimisi-content').hide();
    $('.tupoksi-content').hide();
    $('.kebijakan-content').hide();
    $('.struktur-org-content').slideDown();
  });

    // Cek URL saat halaman dimuat
    var url = window.location.href;
    var targetUrl1 = '/user/page/profil.html#tupoksi';
    var targetUrl2 = '/user/page/profil.html#kebijakan';
    var targetUrl3 = '/user/page/profil.html#struktur-organisasi';
  
    if (url.indexOf(targetUrl1) > -1) {
      $('.tupoksi-content').show();
      $('.visimisi-content').hide();
      $('.kebijakan-content').hide();
      $('.struktur-org-content').hide();
      $(".profil-sub-menu").removeClass('active')
      $('#profil-tupoksi').addClass('active')
    }else if(url.indexOf(targetUrl2) > -1){
      $('.tupoksi-content').hide();
      $('.visimisi-content').hide();
      $('.kebijakan-content').show();
      $('.struktur-org-content').hide();
      $(".profil-sub-menu").removeClass('active')
      $('#profil-kebijakan').addClass('active')
    }else if(url.indexOf(targetUrl3) > -1){
      $('.tupoksi-content').hide();
      $('.visimisi-content').hide();
      $('.kebijakan-content').hide();
      $('.struktur-org-content').show();
      $(".profil-sub-menu").removeClass('active')
      $('#profil-struktur').addClass('active')
    }

});






// Vanila Javascript
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('active', window.scrollY>0);
});

// home berita terbaru

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000, // Delay antara perpindahan slide (ms)
  },
});

// Menambahkan event listener saat ukuran layar berubah
window.addEventListener("resize", function () {
  // Memeriksa lebar layar saat ini
  var windowWidth = window.innerWidth;

  // Mengubah jumlah slidesPerView berdasarkan lebar layar
  if (windowWidth <= 550) {
    swiper.params.slidesPerView = 1;
  } else if (windowWidth <= 700) {
    swiper.params.slidesPerView = 2;
  }else if (windowWidth <= 990) {
    swiper.params.slidesPerView = 3;
  } else {
    swiper.params.slidesPerView = 4;
  }


  // Mengupdate swiper
  swiper.update();
});





// ===> home galeri ( IMAGE SLIDER)
const carousel = document.getElementById('galeri-carousel'),
firstImg = carousel.querySelectorAll("img")[0];
 btnArrow = document.querySelectorAll(".btn-grup .btn-arrow");


let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 10;

btnArrow.forEach(icon => {
  icon.addEventListener("click", () =>{
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  })
})

// slider dengan mouse

const dragStar = (e) =>{
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let positionDIff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDIff;
}
const dragStop = () =>{
  isDragStart = false;
}
carousel.addEventListener('mousedown', dragStar);
carousel.addEventListener('touchstart', dragStar);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('touchend', dragStop);



