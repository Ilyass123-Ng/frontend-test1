"use client";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export function TrendLineChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [{
      data: [15, 45, 45, 85], // Tendance montante
      borderColor: '#3b71ca',
      borderWidth: 2,
      tension: 0.1, // Aspect plus "droit" comme le PDF
      pointRadius: 0,
      fill: true,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 150);
        gradient.addColorStop(0, 'rgba(59, 113, 202, 0.15)');
        gradient.addColorStop(1, 'rgba(59, 113, 202, 0)');
        return gradient;
      },
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#f0f0f0',
          drawBorder: false
        },
        ticks: { color: '#999', padding: 10 }
      },
      y: {
        display: false,
        min: 0,
        max: 100
      }
    }
  };

  return <div style={{ height: '140px', width: '100%' }}><Line data={data} options={options} /></div>;
}
