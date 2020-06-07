$(document).ready(function (){
  var modal = $('.modal'),
  modalBtn = $('[data-toggle="modal"]'),
  closeBtn = $('.modal__close');
  thank = $('.thank')
  
$(document).on('keydown', function(e) {
if (e.keyCode == 27)
modal.removeClass('modal--visible');
});
modalBtn.on('click', function () {
modal.toggleClass('modal--visible');
});
closeBtn.on('click', function (){
modal.toggleClass('modal--visible');
});
thank.on('click', function () {
thank.removeClass('thank--visible');
});

$('.modal').click(function(e) {
  if ($(e.target).closest('.modal__dialog').length == 0) {
    modal.removeClass('modal--visible');				
  }
});	




var swiper = new Swiper('.benifit .swiper-container', {
  loop: true,
  centeredSlides: true,
  slidesPerView:3,
  navigation: {
    nextEl: '.benifit .swiper-button-next',
    prevEl: '.benifit .swiper-button-prev',
  },
})
var swiper = new Swiper('.lesson .swiper-container', {
  navigation: {
nextEl: '.lesson .swiper-button-next',
prevEl: '.lesson .swiper-button-prev',
},
  pagination: {
    el: '.lesson .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
})
var swiper = new Swiper('.reviews .swiper-container', {
  loop: true,
  centeredSlides: true,
});


    // Валидация формы
    $(".modal__form").validate({
      errorElement: "div",
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength:15
        },
        userPhone: "required",
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        checkbox: {
          required : true
        } 
        
      },
        messages: {
          
          checkbox: "Примите соглашение",
          userName: {
            required:"Имя обязательно",
            minlength: "Имя не короче двух букв",
            maxlength: "Имя не длиньше 15 букв"
          } ,
          userPhone: "Телефон обязателен",
          userEmail: {
            required: "Укажите email",
            email: "введите формате: name@domain.com"
          },
        
      },
      submitHandler: function(form) {
        $.ajax ({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            thank.toggleClass('thank--visible');
            $(form)[0].reset();
            modal.removeClass('modal--visible');
          }
        });
      }
    });
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Телефон обязателен"});

    
    $(".pin__form").validate({
      errorElement: "div",
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength:15
        },
        userPhone: "required",
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        checkbox: {
          required : true
        }
        
      },
        messages: {
          userName: {
            required:"Имя обязательно",
            minlength: "Имя не короче двух букв",
            maxlength: "Имя не длиньше 15 букв"

          } ,
          userPhone: "Телефон обязателен",
          userEmail: {
            required: "Укажите email",
            email: "введите формате: name@domain.com"
          },
        checkbox: "Примите соглашение"
    },
    submitHandler: function(form) {
      $.ajax ({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          thank.toggleClass('thank--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          
        }
      });
    }

    });

    $(".bid__form").validate({
      errorElement: "div",
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength:15
        },
        userPhone: "required",
        // compound rule
        userEmail: {
          required: true,
          email: true
        },
        checkbox: {
          required : true
        }
        
      },
        messages: {
          userName: {
            required:"Имя обязательно",
            minlength: "Имя не короче двух букв",
            maxlength: "Имя не длиньше 15 букв"

          } ,
          userPhone: "Телефон обязателен",
          userEmail: {
            required: "Укажите email",
            email: "введите формате: name@domain.com"
          },
        checkbox: "Примите соглашение"
    },
    submitHandler: function(form) {
      $.ajax ({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          thank.toggleClass('thank--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
    });
    

    var player;
  $('.way .video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '395',
      width: '100%',
      videoId: 'O321R3JvCpM',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event){
    event.target.playVideo();
  }


  var player;
  $('.video__play-1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
      height: '395',
      width: '100%',
      videoId: 'O321R3JvCpM',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event){
    event.target.playVideo();
  }

  var player;
  $('.video__play-2').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player2', {
      height: '395',
      width: '100%',
      videoId: 'O321R3JvCpM',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event){
    event.target.playVideo();
  }

  var player;
  $('.video__play-3').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player3', {
      height: '395',
      width: '100%',
      videoId: 'O321R3JvCpM',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event){
    event.target.playVideo();
  }
  
});

document.addEventListener ('DOMContentLoaded', function (){
  const links = document.querySelectorAll ('.menu__link');

  for(let i = 0; i<links.length; i++){
    links[i].addEventListener('click', function (event) {
      event.preventDefault();
      
      const blockID = event.target.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: "start"
      })
    })
  }
});