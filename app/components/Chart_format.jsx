"use client";
import { Card, Button } from 'react-bootstrap';


export function ChartFormat({ children, title, button, showBadges = false }) {
  return (
    <Card className="border-0 shadow-sm p-4" style={{ borderRadius: '24px' }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0 fw-bold" style={{ color: '#2c3e50' }}>{title}</h6>
        {button && (
          <Button variant="outline-light" className="text-primary rounded-pill btn-sm px-3 border">
            {button}
          </Button>
        )}
      </div>
      
      {showBadges && (
        <div className="d-flex gap-2 mb-3">
          <span className="badge rounded-pill p-2 px-3" style={{ backgroundColor: '#1a2b4b', fontSize: '10px' }}>
            15 Report
          </span>
          <span className="badge rounded-pill p-2 px-3 border text-primary" style={{ backgroundColor: '#f0f7ff', fontSize: '10px' }}>
            <i className="fa-solid fa-circle me-1" style={{ fontSize: '6px' }}></i> 10 No Report
          </span>
        </div>
      )}

      {children}
    </Card>
  );
}
