



export function DoctorList() {
  const doctors = [
    { name: 'Dr. Leslie Alexander', hospital: 'Hasan Sadikin Hospital', img: './user-profile.png' },
    { name: 'Dr. Savannah Nguyen', hospital: 'Hasan Sadikin Hospital', img: './user-profile.png' },
    { name: 'Dr. Darlene Robertson', hospital: 'Hasan Sadikin Hospital', img: './user-profile.png' },
  ];

  return (
    <div className="d-flex flex-column gap-3 py-1">
      {doctors.map((elem, key) => (
        <div key={key} className="d-flex align-items-center justify-content-between">
        
          <div className="d-flex align-items-center ">
            <div className="position-relative">
              <img src={elem.img} className="rounded-circle" width="40" height="40" alt="doctor" style={{ objectFit: 'cover' }}/>
              <div className="position-absolute bottom-0 end-0"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0 fw-bold small text-dark">{elem.name}</h6>
              <small className="text-secondary" style={{ fontSize: '10px' }}>{elem.hospital}</small>
            </div>
            
          </div>
        </div>
        
      ))}
    </div>
  );
}
