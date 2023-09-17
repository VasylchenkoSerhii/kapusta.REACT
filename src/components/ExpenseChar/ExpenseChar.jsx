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
        borderWidth: 1,
        barThickness: isMobile ? 15 : 38,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
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
        },
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
