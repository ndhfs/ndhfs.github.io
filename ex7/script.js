import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import JustValidate from 'just-validate';
import Chart from 'chart.js/auto';

// Swiper init
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination' },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// JustValidate init
const validator = new JustValidate('#form');
validator
  .addField('[name="name"]', [{ rule: 'required', errorMessage: 'Введите имя' }])
  .addField('[name="email"]', [
    { rule: 'required' },
    { rule: 'email', errorMessage: 'Неверный email' },
  ])
  .onSuccess(() => {
    alert('Форма отправлена!');
    document.getElementById('form').reset();
  });

// Chart.js init
const ctx = document.getElementById('chart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'React'],
    datasets: [{
      label: 'Изучено, %',
      data: [100, 90, 85, 60],
      backgroundColor: ['#e44d26', '#264de4', '#f7df1e', '#61dafb']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
