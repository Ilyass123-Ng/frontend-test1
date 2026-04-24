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
        data: [40, 72, 35, 50, 45, 60],
        borderRadius: 20,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          if (context.dataIndex === 1 || context.dataIndex === 4) {
             gradient.addColorStop(0, '#3b71ca');
             gradient.addColorStop(1, '#a2c2f7');
             return gradient;
          }
          return '#f3f6faff'; 
        },
        borderWidth: 1,
        borderColor: (context) => (context.dataIndex === 1 || context.dataIndex === 4 ? 'transparent' : '#e0e6ed'),
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { 
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1a2b4b',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 15,
        displayColors: true,
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 10,
        max: 80,
        ticks: { 
          values: [10, 30, 50, 70],
          callback: (value) => value,
          color: '#999' 
        },
        grid: {
          color: (context) => (context.tick.value === 50 ? '#3b71ca' : '#f0f0f0'),
          lineWidth: (context) => (context.tick.value === 50 ? 1 : 1),
          borderDash: (context) => (context.tick.value === 50 ? [5, 5] : []),
          drawBorder: false,
        }
      },
      x: { 
        grid: { display: false }, 
        ticks: { color: '#999' } 
      }
    }
  };

  const plugins = [{
    id: 'horizontalLine',
    afterDraw: (chart) => {
      const { ctx, scales: { y, x } } = chart;
      const yValue = y.getPixelForValue(50);
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(x.left, yValue);
      ctx.lineTo(x.right, yValue);
      ctx.strokeStyle = '#3b71ca';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Point on the left
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.arc(x.left, yValue, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#3b71ca';
      ctx.fill();
      ctx.restore();
    }
  }];

  return <div style={{ height: '220px', width: '100%' }}><Bar data={data} options={options} plugins={plugins} /></div>;
}
