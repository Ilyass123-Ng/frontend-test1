import { ProgressBar } from 'react-bootstrap';

export function CheckupProgress() {
  const items = [
    { date: '22 Agustus, 2024', val: 70, color: '#3b71ca' },
    { date: '16 Agustus, 2024', val: 40, color: '#1a1f25ff' }
  ];

  return (
    <div className="d-flex flex-column gap-4 py-2">
      {items.map((elem, key) => (
        <div key={key} className="d-flex align-items-start gap-3">
          <div className="bg-light p-2 rounded-3 text-primary d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
            <i className="fa-regular fa-calendar"></i>
          </div>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between mb-1">
              <span className="fw-bold" style={{fontSize:'13px'}}>{elem.date}</span>
            </div>
            <ProgressBar now={elem.val} style={{height:'6px',backgroundColor:'#f0f2f5'}} />
          </div>
        </div>
      ))}
    </div>
  );
}
