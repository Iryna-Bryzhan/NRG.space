// var player;

//   function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//       videoId: 'mYetREFwf9w',
//       playerVars: {
//         autoplay: 1,
//         loop: 1,
//         playlist: 'mYetREFwf9w'
//       },
//       events: {
//         onReady: onPlayerReady,
//         onStateChange: onPlayerStateChange
//       }
//     });
//   }

//   function onPlayerReady(event) {
//     event.target.playVideo();
//   }

//   function onPlayerStateChange(event) {
//     if (event.data === YT.PlayerState.ENDED) {
//       player.playVideo(); // Запустити відео знову після закінчення
//     }
//   }


document.addEventListener('DOMContentLoaded', () => {

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
          document.querySelector(".header").style.height = "90px";
          document.querySelector(".header").style.top = "0";
          document.querySelector(".header").style.boxShadow = '0px 0px 15px rgb(0 0 0 / 50%)';
          document.querySelector(".header").style.background = 'rgba(32, 27, 51, 90%)';
          document.querySelector(".header").style.transition = '0.1s';
  
      } else {
          document.querySelector(".header").style.height = "";
          document.querySelector(".header").style.top = "30px";
          document.querySelector(".header").style.boxShadow = '';
          document.querySelector(".header").style.background = '';
          document.querySelector(".header").style.transition = '0.1s';
      }
  }
  
   // Получаем ссылки на иконку и текст
   const icon = document.getElementById('call-icon');
   const text = document.getElementById('call-text');
  
   // Функция для переключения между иконкой и текстом
   function toggleIconAndText() {
       if (icon.style.display === 'none') {
           icon.style.display = 'inline';
           text.style.display = 'none';
       } else {
           icon.style.display = 'none';
           text.style.display = 'inline';
       }
   }
  
  // Запускаем функцию toggleIconAndText каждые 2 секунды
  setInterval(toggleIconAndText, 3500);
  
  
    // $(document).ready(function(){
    //   $('.slider').slick({
    //     arrows:true,
    //     dots:true,
    //     slidesToShow:3,
    //     autoplay:true,
    //     speed:2000,
    //     autoplaySpeed:2000,
    //     responsive:[
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow:2
    //         }
    //       },
    //       {
    //         breakpoint: 550,
    //         settings: {
    //           slidesToShow:1
    //         }
    //       }
    //     ]
    //   });
    // });
  
  // Получаем все элементы слайдера
  var slider = document.querySelector('.itcss__items');
  var slides = slider.querySelectorAll('.itcss__item');
  var prevButton = document.querySelector('.itcss__control_prev');
  var nextButton = document.querySelector('.itcss__control_next');
  var slideIndex = 0;
  
  // Устанавливаем начальный индекс слайда
  showSlide(slideIndex);
  
  // Функция для отображения выбранного слайда
  function showSlide(index) {
    // Скрываем все слайды
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    // Показываем выбранный слайд
    slides[index].style.display = 'block';
  }
  
  // Обработчик события для кнопки "Предыдущий слайд"
  prevButton.addEventListener('click', function(e) {
    e.preventDefault();
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  });
  
  // Обработчик события для кнопки "Следующий слайд"
  nextButton.addEventListener('click', function(e) {
    e.preventDefault();
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });
  
  // Добавляем свайп на мобильных устройствах
  var touchStartX = 0;
  var touchEndX = 0;
  slider.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
  });
  
  slider.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  });
  
  function handleSwipe() {
    var swipeThreshold = 100; // Минимальное расстояние свайпа для переключения слайда
    var swipeDirection = touchEndX - touchStartX;
    if (swipeDirection > swipeThreshold) {
      // Свайп влево
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      showSlide(slideIndex);
    } else if (swipeDirection < -swipeThreshold) {
      // Свайп вправо
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }
  }
  
  // Автоматическое переключение слайдов каждые 2 секунды
  var intervalId;
  
  function startSlider() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
  }
  
  // Запускаем автоматическое переключение
  startSlider();
  
  // Получаем все миниатюры слайдов
  var thumbnails = document.querySelectorAll('.itcss__thumbnail');
  
  // Обработчик события для клика по миниатюре слайда
  
  // Обработчик события для клика по миниатюре слайда
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(e) {
      e.preventDefault();
      // Получаем индекс миниатюры слайда
      var thumbnailIndex = Array.prototype.indexOf.call(thumbnails, e.currentTarget);
      // Отображаем соответствующий слайд
      showSlide(thumbnailIndex);
      slideIndex = thumbnailIndex; // Обновляем значение текущего индекса слайда
    });
  }
  // Получаем все миниатюры слайдов
  var thumbnails = Array.from(document.querySelectorAll('.itcss__thumbnail'));
  
  // Обработчик события для клика по миниатюре слайда
  thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function(e) {
      e.preventDefault();
      // Отображаем соответствующий слайд
      showSlide(index);
      slideIndex = index; // Обновляем значение текущего индекса слайда
    });
  });
  
  // Найдите контейнер миниатюр
  var thumbnailsContainer = document.getElementById('thumbnails-container');
  
  // Создайте функцию для добавления миниатюры
  function addThumbnail(imageUrl) {
    // Создайте элемент миниатюры
    var thumbnailElement = document.createElement('div');
    thumbnailElement.classList.add('itcss__thumbnail');
  
    // Создайте элемент изображения миниатюры
    var thumbnailImage = document.createElement('img');
    thumbnailImage.src = imageUrl;
    thumbnailImage.alt = '';
  
    // Добавьте изображение миниатюры в элемент миниатюры
    thumbnailElement.appendChild(thumbnailImage);
  
    // Добавьте элемент миниатюры в контейнер миниатюр
    thumbnailsContainer.appendChild(thumbnailElement);
  }
  
  // Получите все фото из слайдера
  var slides = document.querySelectorAll('.itcss__item');
  slides.forEach(function(slide) {
    // Получите URL изображения слайда
    var imageUrl = slide.querySelector('img').src;
  
    // Добавьте миниатюру для каждого фото
    addThumbnail(imageUrl);
  });
  // Получаем все миниатюры слайдов
  var thumbnails = Array.from(document.querySelectorAll('.itcss__thumbnail'));
  
  // Функція для обробки натискання на мініатюру слайда
  function handleThumbnailClick(index) {
    // Отображаем соответствующий слайд
    showSlide(index);
    slideIndex = index; // Обновляем значение текущего индекса слайда
  }
  
  // Обработчик события для клика по миниатюре слайда
  thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function(e) {
      e.preventDefault();
      handleThumbnailClick(index);
    });
  
    // Додатковий обробник подій для тач-подій на мобільних пристроях
    thumbnail.addEventListener('touchstart', function(e) {
      e.preventDefault();
      handleThumbnailClick(index);
    });
  });
  
  
  
  const btnJoin = document.querySelector('.btn-join');
  const btnFirstScreen = document.querySelector('.btn-first-screen')
  const modalForm = document.querySelector('.modal-form');
  const modal = document.querySelector('.modal');
  const formJoin = document.querySelector('.form-join');
  const formJoinInput = document.querySelector('.form-join-input');
  const modalSuccess = document.querySelector('.modal-success');
  const modalError = document.querySelector('.modal-error');
  // Получаем ссылку на элемент с классом "call-phone"
  const callPhone = document.querySelector('.call-phone');
  
  // Получаем ссылку на модальное окно с классом "modal-form-call"
  const modalFormCall = document.querySelector('.modal-form-call');
  
  // Добавляем обработчик события "click" на элемент "callPhone"
  callPhone.addEventListener('click', function() {
    // При клике на "callPhone" отображаем модальное окно
    modalFormCall.style.display = 'block';
  });
  
  
  btnJoin.addEventListener('click', () => {
    modalForm.style.display = "block"
  })
  // btnFirstScreen.addEventListener('click', () => {
  //   modalForm.style.display = "block"
  // })
  modalForm.addEventListener('click', (event) => {
    if (!modal.contains(event.target) || event.target === formJoin) {
      modalForm.style.display = "none";
    }
  });
  
  const btnClose = document.querySelector(".close");
  const btnCloseCall = document.querySelector(".close-call")
   btnClose.addEventListener('click', () => {
       modalForm.style.display = "none";
   })
  
   btnCloseCall.addEventListener('click', () => {
    modalFormCall.style.display = "none";
  })
  
  
   btnJoin.addEventListener('click', () => {
    modalForm.style.display = "block"
  })
  
  
  formJoin.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const teamInput = document.getElementById('team');
    const tariffInput = document.getElementById('tariff').value;
  
  
    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const teamValue = teamInput.value.trim();
  
    let isValid = true; // Змінна для відстеження успішності валідації
  
    if (nameValue === '') {
      setErrorFor(nameInput, "Введіть своє ім'я");
      isValid = false;
    } else {
      setSuccessFor(nameInput);
    }
  
    if (phoneValue === '') {
      setErrorFor(phoneInput, 'Введіть свій телефон');
      isValid = false;
    } else if (!validatePhone(phoneValue)) {
      setErrorFor(phoneInput, 'Введіть коректний номер телефону');
      isValid = false;
    } else {
      setSuccessFor(phoneInput);
    }
  
    if (emailValue === '') {
      setErrorFor(emailInput, 'Введіть свою електронну пошту');
      isValid = false;
    } else if (!validateEmail(emailValue)) {
      setErrorFor(emailInput, 'Введіть коректну електронну пошту');
      isValid = false;
    } else {
      setSuccessFor(emailInput);
    }
  
    // if (teamValue === '') {
    //   setErrorFor(teamInput, 'Введіть кількість людей');
    //   isValid = false;
    // } else {
    //   setSuccessFor(teamInput);
    // }
  
  
   
    const data = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      team: teamValue,
      tariff: tariffInput
    };
    
    const params = Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
    
    
  // Перевірка, чи всі поля форми мають успішний стан
  if (isValid) {
    // Виклик функції для відправки даних на сервер
    sendFormJoinToServer(params, (success) => {
      if (success) {
        // Форма успішно відправлена
        // modalForm.style.display = "none";
       
          // Очищення форми
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    teamInput.value = '';
  
    // Очищення блоків помилок
    setSuccessFor(nameInput);
    setSuccessFor(phoneInput);
    setSuccessFor(emailInput);
    setSuccessFor(teamInput);
      
    
  
  
    modalForm.appendChild(modalSuccess);
  
   modalSuccess.style.display = "block";
   modalSuccess.style.top = "3%"
        function closeSuccess(){
          modalSuccess.style.display = "none"
          modalForm.style.display = "none";
        }
  
      setTimeout(closeSuccess, 3000)
     
      console.log('Дані форми "formJoin" відправлено на сервер');
    // alert("Заявка успішно відправлена")
  
  } else {
        // Помилка під час відправки форми
   modalForm.appendChild(modalError)
   
   modalError.style.display = "block";
   modalError.style.top = "3%"
        function closeError(){
          modalError.style.display = "none"
        }
  
      setTimeout(closeError, 4000)
        console.log('Помилка під час відправки форми "formJoin"');
      }
    });
  } 
  
  
  });
  
  function sendFormJoinToServer(params, callback) {
    const url = '/code/form-handler.php';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    })
      .then(response => response.text())
      .then(result => {
        // Обробка відповіді від сервера
        console.log(result);
        callback(result)
      })
      .catch(error => console.log( error));
    } 
  // Виконати логіку відправки форми на сервер
  // Після отримання відповіді викликати callback з аргументом success, що вказує на успішність відправки форми
  // Наприклад:
  // Відправка форми з використанням fetch API
  
  
  // Функції валідації і відображення помилок
  
  
  function setErrorFor(input, message) {
    const formGroup = input.closest('.form-join-input-item');
    const errorDiv = formGroup.querySelector('.error');
    errorDiv.innerText = message;
    formGroup.classList.add('error');
  }
  
  function setSuccessFor(input) {
    const formGroup = input.closest('.form-join-input-item');
    const errorDiv = formGroup.querySelector('.error');
    errorDiv.innerText = '';
    formGroup.classList.remove('error');
  }
  
  function validatePhone(phone) {
    const phoneRegex = /^\+?3?8?(0\d{9})$/;
      return phoneRegex.test(phone);
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  const form = document.querySelector('.form');
  
      // Додаємо обробник події для подання форми
      form.addEventListener('submit', function (event) {
          event.preventDefault(); // Зупиняємо стандартну поведінку форми (наприклад, перезавантаження сторінки)
  
          // Отримуємо значення полів форми
          const nameInput = document.getElementById('name-call');
          const phoneInput = document.getElementById('phone-call');
          const emailInput = document.getElementById('email-call');
  
          // Отримуємо посилання на блоки помилок
          const nameError = document.getElementById('name-error');
          const phoneError = document.getElementById('phone-error');
          const emailError = document.getElementById('email-error');
  
          // Виконуємо валідацію для кожного поля
  
          // Валідація імені
          if (nameInput.value.trim() === '') {
              nameError.textContent = 'Введіть своє ім\'я';
          } else {
              nameError.textContent = '';
          }
  
          // Валідація телефону
          // const phonePattern = /^\+?3?8?(0\d{9})$/; // Патерн для перевірки формату телефонного номера
          if (phoneInput.value === '') {
            phoneError.textContent = 'Введіть номер телефону';
          } else if (!validatePhone(phoneInput.value)) {
              phoneError.textContent = 'Введіть коректний номер телефону';
          } else {
              phoneError.textContent = '';
          }
       
          // Валідація електронної пошти
          // const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // Патерн для перевірки формату електронної пошти
          if (emailInput.value === '') {
            emailError.textContent = 'Введіть електронну пошту';
          } else if  (!validateEmail(emailInput.value)) {
          emailError.textContent = 'Введіть коректну електронну пошту';
          } else {
          emailError.textContent = '';
          }
  
        
      // Перевірка чи всі поля пройшли валідацію
      if (nameError.textContent === '' && phoneError.textContent === '' && emailError.textContent === '') {
        // Створення об'єкта з введеними даними
        const dataCall = {
          name: nameInput.value,
          phone: phoneInput.value,
          email: emailInput.value,
        };
  
        const params = Object.keys(dataCall)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(dataCall[key]))
        .join('&');
  
          sendFormJoinToServer(params, (success) => {
            if (success) {
              // Форма успішно відправлена
              // modalForm.style.display = "none";
  
    
   
              form.appendChild(modalSuccess)
              modalSuccess.style.display = "block";
              modalSuccess.style.top = "auto"
            
              function closeSuccessModal() {
              form.removeChild(modalSuccess)
          }
          setTimeout(closeSuccessModal, 3000)
      
                 // Очищення форми
                 nameInput.value = '';
                 phoneInput.value = '';
                 emailInput.value = '';
                 
          // Очищення блоків помилок
          setSuccessFor(nameInput.value);
          setSuccessFor(phoneInput.value);
          setSuccessFor(emailInput.value);
  
        
         console.log('Дані форми "formJoin" відправлено на сервер');
             
        // лоадер, успішно відправлен
         
     } else {
      
           // Помилка під час відправки форми
        form.appendChild(modalError)
        modalError.style.display = "block";
        modalError.style.top = "auto"
        function closeError(){
          modalError.style.display = "none"
        }
  
      setTimeout(closeError, 4000)
        console.log('Помилка під час відправки форми "formJoin"');
      }
       });
  
      //   sendFormJoinToServer(params, () =>{
          
      //     if (success) {
      //       // Форма успішно відправлена
      //       // modalForm.style.display = "none";
      //       console.log('Дані форми "formJoin" відправлено на сервер');
      //         // Очищення форми
      //         nameInput.value = '';
      //         phoneInput.value = '';
      //         emailInput.value = '';
      
      //   modalForm.style.display = "none";
      //   const success = document.querySelector('.modal-success');
      
      //    success.style.display = "block";
      //   setTimeout('success.style.display = "none"', 2000)
       
      //   // alert("Заявка успішно відправлена")
      
      //   // Очищення блоків помилок
      //   setSuccessFor(nameInput.value);
      //   setSuccessFor(phoneInput.value);
      //   setSuccessFor(emailInput.value);
       
          
      // } else {
      //       // Помилка під час відправки форми
      //       console.log('Помилка під час відправки форми "formJoin"');
      //     }
      //   });
      
  
  
    // // Очищення форми після відправки
    //       nameInput.value = '';
    //       phoneInput.value = '';
    //       emailInput.value = '';
  
    //       // Очищення блоків помилок
    //       nameError.textContent = '';
    //       phoneError.textContent = '';
    //       emailError.textContent = '';
    //       // alert('Заявка успішно відправлена')
         
     
    //     })
  
        };
  
        // Відправлення даних на сервер (розкоментуйте реальний код для відправки на сервер)
        // sendFormData(formData);
  
       
    });
  
  
    const formCall = document.querySelector('.form-call');
    const modalCall = document.querySelector('.modal-form-call');
    const errorContent = document.querySelector('.error-content');
    const successContent = document.querySelector('.success-content');
    
    // Додаємо обробник події для подання форми
    formCall.addEventListener('submit', function (event) {
      event.preventDefault(); // Зупиняємо стандартну поведінку форми (наприклад, перезавантаження сторінки)
    
      // Отримуємо значення полів форми
      const nameInputCall = document.getElementById('name-back-call');
      const phoneInputCall = document.getElementById('phone-back-call');
    
      // Отримуємо посилання на блоки помилок
      const nameErrorCall = document.getElementById('name-error-call');
      const phoneErrorCall = document.getElementById('phone-error-call');
    
      // Виконуємо валідацію для кожного поля
    
      // Валідація імені
      if (nameInputCall.value.trim() === '') {
        nameErrorCall.textContent = 'Введіть своє ім\'я';
      } else {
        nameErrorCall.textContent = '';
      }
    
      // Валідація телефону
      // const phonePattern = /^\+?3?8?(0\d{9})$/; // Патерн для перевірки формату телефонного номера
      if (phoneInputCall.value === '') {
        phoneErrorCall.textContent = 'Введіть номер телефону';
      } else if (!validatePhone(phoneInputCall.value)) {
        phoneErrorCall.textContent = 'Введіть коректний номер телефону';
      } else {
        phoneErrorCall.textContent = '';
      }
    
      // Перевірка чи всі поля пройшли валідацію
      if (nameErrorCall.textContent === '' && phoneErrorCall.textContent === '') {
        // Створення об'єкта з введеними даними
        const dataBackCall = {
          name: nameInputCall.value,
          phone: phoneInputCall.value,
        };
    
        const params = Object.keys(dataBackCall)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(dataBackCall[key]))
          .join('&');
    
        sendFormJoinToServer(params, (success) => {
          if (success) {
            // Форма успішно відправлена
   
    
       formCall.appendChild(modalSuccess);
            modalSuccess.style.display = "block";
            modalSuccess.style.top = "10%";
            successContent.style.maxWidth = "50%";
    
            function closeSuccess() {
              modalSuccess.style.display = "none";
              modalCall.style.display = "none";
            }
    
            setTimeout(closeSuccess, 3000);
            
            // Очищення форми
            nameInputCall.value = '';
            phoneInputCall.value = '';
    
            // Очищення блоків помилок
            setSuccessFor(nameInputCall);
            setSuccessFor(phoneInputCall);
            
            console.log('Дані форми "formJoin" відправлено на сервер');
          } else {
            // Помилка під час відправки форми
            formCall.appendChild(modalError);
            modalError.style.display = "block";
            modalError.style.top = "10%";
            errorContent.style.maxWidth = "50%";
    
            function closeError() {
              modalError.style.display = "none";
              modalCall.style.display = "none";
            }
    
            setTimeout(closeError, 4000);
    
            console.log('Помилка під час відправки форми "formJoin"');
          }
        });
      }   });
    });
    
  
    // document.addEventListener("DOMContentLoaded", function() {
    //   var animatedElements = document.querySelectorAll(".advantage");
  
    //   animatedElements.forEach(function(element, index) {
    //     var waypoint = new Waypoint({
    //       element: element,
    //       handler: function() {
    //         setTimeout(function() {
    //         element.classList.add("animate__animated", "animate__zoomIn");
    //       }, index * 1000); // Затримка в мілісекундах
    //         this.destroy();
    //       },
    //       offset: "100%"
    //     });
    //   });
    // });
  
    document.addEventListener("DOMContentLoaded", function() {
      var animatedElements = document.querySelectorAll(".detail");
  
      animatedElements.forEach(function(element, index) {
        var waypoint = new Waypoint({
          element: element,
          handler: function() {
            setTimeout(function() {
              element.classList.add("animate__animated", "animate__pulse");
            }, index * 500); // Затримка в мілісекундах
            this.destroy();
          },
          offset: "75%"
        });
      });
    });
  
  
    document.addEventListener("DOMContentLoaded", function() {
      var animatedElements = document.querySelectorAll(".partner-item");
  
      animatedElements.forEach(function(element) {
        var waypoint = new Waypoint({
          element: element,
          handler: function() {
            element.classList.add("animate__animated", "animate__zoomIn");
            this.destroy();
          },
          offset: "100%"
        });
      });
    });
    
  
    document.addEventListener('DOMContentLoaded', function() {
      var menuLinks = document.querySelectorAll('.menu-list a');
      for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', smoothScroll);
      }
    });
    function smoothScroll(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    