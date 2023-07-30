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
import { CharContainer, Section } from './ExpenseChar.styled';

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
        datalabels: {
          display: true,
          anchor: isMobile ? 'end' : 'end', // Змінюємо якщо орієнтація горизонтальна
          align: 'top',
          color: 'black',
          font: { weight: 'bold' },
          formatter: value => `${value} UAH`,
        },
      },
    ],
  };

  const options = {
    responsive: true,
    borderRadius: 10,
    // layout: {
    //   padding: {
    //     top: 70,
    //   },
    // },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        callbacks: {
          label: context => `Сумма транзакції: ${context.parsed.y} UAH`,
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: 'black',
        font: {
          weight: 'bold',
        },
        formatter: value => `${value} UAH`,
        display: 'auto',
      },
    },

    scales: {
      x: {
        type: 'category',
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: isMobile ? false : true,
        },
      },
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          display: isMobile ? true : false,
          position: 'top',
        },
      },
    },
    datasets: {
      bar: {
        barThickness: isMobile ? 15 : 38,
      },
    },
    indexAxis: isMobile ? 'y' : 'x',
  };

  return (
    <Section>
      <CharContainer>
        <Bar data={barData} options={options} />
      </CharContainer>
    </Section>
  );
}
