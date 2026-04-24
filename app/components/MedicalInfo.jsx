


export function MedicalInfo() {
  const details = [
    { label: 'Medical History', value: 'Medical inpatient care' },
    { label: 'Current Medications', value: 'Herbal medicine' },
    { label: 'Allergies', value: 'No allergies present' },
    { label: 'Primary Physician', value: 'Dr. Leslie Alexander' },
  ];

  return (
    <>
    <hr />
    <div className="py-2">
    
      <div className="d-flex align-items-center justify-content-between mb-4">
        
        <div className="d-flex align-items-center gap-3">
          <img src="./user-profile.png" className="rounded-circle" width="50" height="50" alt="patient" style={{ objectFit: 'cover' }}/>
          <div>
            <h6 className="mb-0 fw-bold">Yassine Amrani</h6>
            <small className="text-secondary">Patient</small>
          </div>
          
        </div>
        <div className="p-2 border rounded-3 bg-light d-flex  align-items-center justify-content-center">
            <i className="fa-solid fa-qrcode text-dark" style={{ fontSize: '20px' }}></i>
        </div>
      </div>
      <hr />

      <div className="row g-3">
        {details.map((elem, key) => (
          <div key={key} className="col-6">
            <small className="text-secondary d-block" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{elem.label}</small>
            <span className="fw-bold text-dark" style={{ fontSize: '11px' }}>{elem.value}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
