import React from 'react';
import { Link } from 'react-router-dom';

export function DashboardNav() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-primary"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" alt="Logo" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/devolucion">
                Devolucion
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='entrega'>Entrega</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
