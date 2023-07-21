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

  const barData = {
    labels: descriptions,
    datasets: [
      {
        label: 'Sum',
        data: sums,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
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
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          offset: true,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar data={barData} options={options} />;
}
