"use client";
import { Card } from 'react-bootstrap';

export function DoctorNews() {
  return (
    <Card className="border-0 shadow-sm p-4 text-white d-flex flex-column h-100 w-100" style={{ borderRadius: '24px', background: 'linear-gradient(135deg, #9ab0e7ff 0%, #3b71ca 100%)', minHeight: '340px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
         <div className="rounded-circle border border-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', borderColor: 'rgba(255,255,255,0.4) !important' }}>
            <div className="rounded-circle bg-white" style={{ width: '10px', height: '10px' }}></div>
         </div>
         <span className="badge rounded-pill bg-white text-primary px-3 py-2" style={{ fontSize: '10px' }}>Today's info</span>
      </div>
      <h5 className="fw-bold mb-3 mt-2">News From The Doctor</h5>
      <p style={{ fontSize: '13px', opacity: 0.9, lineHeight: '1.6' }}>
        Our process is designed to make booking appointments, consultations, and treatments easy and convenient for you.
      </p>
      <div className="mt-auto d-flex gap-1 pt-4">
        <div className="bg-white rounded-pill" style={{ height: '4px', width: '30px' }}></div>
        <div className="bg-white opacity-50 rounded-pill" style={{ height: '4px', width: '30px' }}></div>
        <div className="bg-white opacity-50 rounded-pill" style={{ height: '4px', width: '30px' }}></div>
      </div>
    </Card>
  );
}
