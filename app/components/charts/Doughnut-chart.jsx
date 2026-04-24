"use client";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart() {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ['#3b71ca', '#f0f2f5'],
        borderWidth: 0,
        circumference: 360,
        rotation: 0,
      },
    ],
  };

  const options = {
    cutout: '85%', // Pour un anneau très fin
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div style={{ height: '120px', position: 'relative' }}>
      <Doughnut data={data} options={options} />
      {/* Texte au centre du cercle */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}>
        <h4 className="mb-0 fw-bold">85%</h4>
        <span className="badge bg-success-subtle text-success rounded-pill" style={{ fontSize: '10px' }}>+0.75%</span>
      </div>
    </div>
  );
}
