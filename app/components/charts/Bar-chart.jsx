// app/components/charts/Bar-chart.jsx
"use client";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function BarChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [40, 70, 45, 60, 50, 65],
        borderRadius: 10,
        barThickness: 25,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          // Highlight February (index 1) and May (index 4)
          if (context.dataIndex === 1 || context.dataIndex === 4) {
            gradient.addColorStop(0, '#3b71ca');
            gradient.addColorStop(1, '#a2c2f7');
            return gradient;
          }
          return '#f0f2f5'; 
        },
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 0, max: 80,
        ticks: { stepSize: 20, color: '#999' },
        grid: { color: (context) => context.tick.value === 50 ? '#3b71ca' : '#f0f0f0', drawBorder: false }
      },
      x: { grid: { display: false }, ticks: { color: '#999' } }
    }
  };

  return <div style={{ height: '200px' }}><Bar data={data} options={options} /></div>;
}
