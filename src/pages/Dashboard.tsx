import { DashboardNav } from '../components/DashboardNav';

export function Dashboard() {
  return (
    <>
      <DashboardNav></DashboardNav>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="h2">Dashboard</div>
          </div>
        </div>
      </div>
    </>
  );
}
