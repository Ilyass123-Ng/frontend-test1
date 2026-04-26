"use client";
import { useState } from 'react';

export function Manage() {
    const [appearInput, setAppearInput] = useState(false);
    const handleSearch = () => {
        setAppearInput(!appearInput);
    }
    const [search, setSearch] = useState('');
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className="container-fluid p-0 fade-in">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div className="d-flex gap-2 flex-wrap">

                    <button className="btn btn-manage rounded-pill shadow-sm border-0 d-flex align-items-center gap-2 px-3 py-2">
                      <i className="fa-solid fa-arrow-down-short-wide text-primary"></i> 
                      <span className="fw-500">Filter</span>
                    </button>
                    <button className="btn btn-manage rounded-pill shadow-sm border-0 d-flex align-items-center gap-2 px-3 py-2">
                      <i className="fa-regular fa-calendar text-primary"></i> 
                      <span className='text-nowrap fw-500'>Monthly</span>
                      <i className="fa-solid fa-angle-down opacity-50"></i>
                    </button>
                    <button className="btn btn-manage rounded-pill shadow-sm border-0 d-flex align-items-center gap-2 px-3 py-2">
                      <i className="fa-solid fa-download text-primary"></i>
                      <span className="fw-500">Download</span>
                    </button>
                </div>
                <div className="d-flex align-items-center">
                    <div className={`d-flex align-items-center bg-light rounded-pill px-2 transition-all ${appearInput ? 'w-100 shadow-sm border' : ''}`} style={{ transition: 'all 0.5s ease', minHeight: '38px' }}>
                        <button className="btn p-1 border-0 btn-manage rounded-pill" onClick={handleSearch}>
                            <i className={`fa-solid ${appearInput ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
                        </button>
                        {appearInput && (
                            <input
                                type="text"
                                className="form-control border-0 bg-transparent shadow-none"
                                placeholder="Search..."
                                value={search}
                                onChange={handleSearchChange}
                                autoFocus
                            />
                        )}
                    </div>
                    {!appearInput && (
                        <>
                            <button className="btn mx-2 text-nowrap btn-manage rounded-pill"><i className="fa-solid fa-people-line"></i> Support</button>
                            <button className="btn mx-2 text-nowrap btn-manage rounded-pill"><i className="fa-solid fa-table"></i> Layout</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}