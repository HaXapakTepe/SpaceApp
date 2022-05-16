$('.menu__link').on('click', function () {
  $(this).toggleClass('menu__link--active');
  $('.menu__link').not($(this)).removeClass('menu__link--active');
});

$('.analytics__item').on('click', function () {
  $(this).toggleClass('analytics__item--active');
  $('.analytics__item').not($(this)).removeClass('analytics__item--active');
});

$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
})


const swiper = new Swiper('.slider__wrap', {
  pagination: {
    el: '.swiper-pagination-bullets',
    clickable: true,
  },
});

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Данные',
      data: ["38", "44", "49", "51", "54", "56"],
      backgroundColor: ['#E01E2E'],
      borderColor: ['#E01E2E'],
      borderJoinStyle: 'round',
      lineTension: 0.5,
      borderWidth: 2,
      radius: 5
    }]
  },
  options: {
    scales: {
      yAxis: {
        suggestedMin: 30,
        suggestedMax: 60,
        ticks: {
          font: {
            size: 14,
            color: '#999999'
          },
        },
      },
      xAxes: {
        ticks: {
          font: {
            size: 16,
            weight: 700,
            height: 19,
            color: '#666666',
          },
        }
      },
    },
  }
});