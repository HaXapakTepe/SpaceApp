// var elem = document.querySelector('analytics__item');
// var elemActive = document.querySelector('.analytics__item--active');

// classBtnNightMode.addEventListener('click', function (e) {
//   elemBody.classList.toggle('night');
//   if (elemBody.getAttribute('class', 'night')) {
//     classBtnNightMode.textContent = 'Выключить ночной режим';
//   } else {
//     classBtnNightMode.textContent = 'Включить ночной режим';
//   };
// });



// const item = document.querySelectorAll('.analytics__item')
// item.forEach(item => {
//   item.addEventListener('click', (e) => {
//     item.forEach(el => {
//       el.classList.remove('analytics__item--active');
//     });
//     item.classList.add('analytics__item--active')
//   })
// });

$('.analytics__item').on('click', function () {
  $(this).toggleClass('analytics__item--active');
  $('.analytics__item').not($(this)).removeClass('analytics__item--active');
});




// $(this).toggleClass('analytics__item--active').next().slideToggle(300);