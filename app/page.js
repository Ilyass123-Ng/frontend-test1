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
import { TrendLineChart } from "./components/charts/TrendLine-chart.jsx";
import { ChartFormat } from "./components/Chart_format.jsx";
import { MedicalInfo } from "./components/components_charts/MedicalInfo.jsx";
import { DoctorNews } from "./components/components_charts/DoctorNews.jsx";
import { DoctorList } from "./components/components_charts/DoctorList.jsx";
import { CheckupProgress } from "./components/components_charts/CheckupProgress.jsx";

export default function Home() {
  return (
    <main className="py-4"> 
      <Container className="px-3">
        <div className="mb-4">
          <Hero />
        </div>
        <div className="mb-5">
          <Manage />
        </div>
        
        <Row className="mb-4">
          {/* */}
          <Col  md={3} className="mb-4 d-flex">
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
          <Col  md={3} className="mb-4 d-flex">
            <DoctorNews />
          </Col>

          {/*  health trend trendline chart */}
          <Col md={3} className="mb-4 d-flex">
  <ChartFormat title="Health Trend Chart" button={<i className="fa-solid fa-ellipsis"></i>}>
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10px', left: '0', zIndex: 10 }}>
        <div className="d-flex align-items-center gap-2">
          <h2 className="fw-bold mb-0" style={{ color: '#2c3e50' }}>85%</h2>
          <span className="badge rounded-pill border text-primary bg-light" style={{ fontSize: '10px' }}>+0.75%</span>
        </div>
      </div>
      <div className="py-2">
        <TrendLineChart />
      </div>
    </div>
  </ChartFormat>
</Col>


          {/* checkup progress */}
          <Col  md={3} className="mb-4 d-flex">
            <ChartFormat title="Checkup progress" button={<i className="fa-solid fa-ellipsis"></i>}>
              <CheckupProgress />
            </ChartFormat>
          </Col>
        </Row>

        <Row>
          {/* medical info */}
          <Col  md={3} className="mb-4 d-flex">
            <ChartFormat title="Medical Information" button="See Details">
              <MedicalInfo />
            </ChartFormat>
          </Col>

          {/* patient health bar chart */}
          <Col  md={6} className="mb-4 d-flex">
            <ChartFormat title="Patient health report" button="See Details">
              <div className="d-flex gap-4 mb-4 small fw-bold">
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle border border-info" style={{ width: '12px', height: '12px', backgroundColor: '#fff' }}></span>
                  <span className="text-secondary">Progress</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="rounded-circle" style={{ width: '12px', height: '12px', backgroundColor: '#3b71ca' }}></span>
                  <span className="text-secondary">Recovery</span>
                </div>
              </div>
              <BarChart />
            </ChartFormat>
          </Col>

          {/* list doctors */}
          <Col  md={3} className="mb-4 d-flex">
            <ChartFormat title="My Doctor" button="See Details">
              <DoctorList />
            </ChartFormat>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
