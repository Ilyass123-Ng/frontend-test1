"use client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Hero } from "./components/hero.jsx";
import { Manage } from "./components/manage.jsx";
import { LineChart } from "./components/charts/Line-chart.jsx";
import { BarChart } from "./components/charts/Bar-chart.jsx";
import { DoughnutChart } from "./components/charts/Doughnut-chart.jsx";
import { TrendLineChart } from "./components/charts/TrendLine-chart.jsx";
import { ChartFormat } from "./components/Chart_format.jsx";
import { MedicalInfo } from "./components/MedicalInfo.jsx";
import { DoctorNews } from "./components/DoctorNews.jsx";
import { DoctorList } from "./components/DoctorList.jsx";
import { CheckupProgress } from "./components/CheckupProgress.jsx";

export default function Home() {
  return (
    <main className="py-4"> 
      <Container fluid className="px-5">
        <div className="mb-4">
          <Hero />
        </div>
        <div className="mb-5">
          <Manage />
        </div>
        
        <Row className="mb-4">
          {/* */}
          <Col lg={3} md={6} className="mb-4">
            <ChartFormat title="Health Report Pending" button="Report" showBadges={true}>
              <div style={{ position: 'relative', marginTop: '-10px' }}>
                <div style={{
                  position: 'absolute',
                  left: '33%',
                  top: '0',
                  bottom: '15%',
                  borderLeft: '2px dashed #d1d9e6',
                  zIndex: 1
                }}></div>
                <LineChart />
              </div>
            </ChartFormat>
          </Col>

          {/*  news pour doctor */}
          <Col lg={3} md={6} className="mb-4">
            <DoctorNews />
          </Col>

          {/*  health trend doughnut chart */}
<Col lg={3} md={6} className="mb-4">
  <ChartFormat title="Health Trend Chart" button={<i className="fa-solid fa-ellipsis"></i>}>
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10px', left: '0', zIndex: 10 }}>
        <div className="d-flex align-items-center gap-2">
          <h2 className="fw-bold mb-0" style={{ color: '#2c3e50' }}>85%</h2>
          <span className="badge rounded-pill border text-primary bg-light" style={{ fontSize: '10px' }}>+0.75%</span>
        </div>
      </div>
      <div className="pt-4">
        <TrendLineChart />
      </div>
    </div>
  </ChartFormat>
</Col>


          {/* checkup progress */}
          <Col lg={3} md={6} className="mb-4">
            <ChartFormat title="Checkup progress" button={<i className="fa-solid fa-ellipsis"></i>}>
              <CheckupProgress />
            </ChartFormat>
          </Col>
        </Row>

        <Row>
          {/* medical info */}
          <Col lg={3} md={12} className="mb-4">
            <ChartFormat title="Medical Information" button="See Details">
              <MedicalInfo />
            </ChartFormat>
          </Col>

          {/* patient health bar chart */}
          <Col lg={6} md={12} className="mb-4">
            <ChartFormat title="Patient health report" button="See Details">
              <div className="d-flex gap-4 mb-4 small fw-bold">
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: 'rgba(59, 113, 202, 0.4)' }}></span>
                  <span className="text-secondary">Progress</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle" style={{ width: '8px', height: '8px', backgroundColor: '#1a2b4b' }}></span>
                  <span className="text-secondary">Recovery</span>
                </div>
              </div>
              <BarChart />
            </ChartFormat>
          </Col>

          {/* list doctors */}
          <Col lg={3} md={12} className="mb-4">
            <ChartFormat title="My Doctor" button="See Details">
              <DoctorList />
            </ChartFormat>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
