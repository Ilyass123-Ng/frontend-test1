// app/components/charts/Line-chart.jsx
"use client";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export function LineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        data: [18, 14, 25, 18],
        borderColor: '#3b71ca',
        borderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 150);
          gradient.addColorStop(0, 'rgba(59, 113, 202, 0.2)');
          gradient.addColorStop(1, 'rgba(59, 113, 202, 0)');
          return gradient;
        },
        pointRadius: (context) => (context.dataIndex === 1 ? 6 : 0),
        pointBackgroundColor: '#3b71ca',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
      {
        label: 'No Reports',
        data: [12, 18, 14, 22],
        borderColor: '#d1d9e6',
        borderWidth: 2,
        tension: 0.5,
        fill: false,
        pointRadius: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        min: 10,
        max: 30,
        ticks: { display: false },
        grid: { display: false, drawBorder: false }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#999' }
      }
    }
  };

  return <div style={{ height: '220px' }}><Line data={data} options={options} /></div>;
}
