import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ExpenseChar({ transactions }) {
  const descriptions = transactions.map(transaction => transaction.description);
  const sums = transactions.map(transaction => transaction.sum);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const barData = {
    labels: descriptions,
    datasets: [
      {
        label: 'Sum',
        data: sums,
        backgroundColor: '#FF751D',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      // Додаємо налаштування плагіну datalabels для відображення суми над стовпчиками
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'black',
        font: {
          weight: 'bold',
        },
        formatter: value => `${value} UAH`,
      },
    },
    scales: {
      x: {
        type: 'category',
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
    },
    datasets: {
      bar: {
        barThickness: 38,
      },
    },
  };

  return <Bar data={barData} options={options} />;
}
