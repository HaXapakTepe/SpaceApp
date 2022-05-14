$('.analytics__item').on('click', function () {
  $(this).toggleClass('analytics__item--active');
  $('.analytics__item').not($(this)).removeClass('analytics__item--active');
});


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
      borderWidth: 2,
      lineTension: 0.5
    }]
  },
  options: {
    maintaiAsoectRatio: true,
    scales: {
      y: {
        suggestedMin: 30,
        suggestedMax: 60
      },
      x: {
        // display: false
      }
    }
  }
});