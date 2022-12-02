import React, { useState } from 'react';

import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import { DashboardNav } from '../components/DashboardNav';

export function Entrega() {
  const steps = [
    'Información Personal',
    'Información del Conductor',
    'Finalizar entrega',
  ];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Formularios

  const InformacionPersonal = () => {
    return (
      <form className="row row-cols-2">
        <div className="col mb-2">
          <label className="form-label">Tipo de documento</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>C.C</option>
            <option selected>Pasaporte</option>
          </select>
        </div>
        <div className="col mb-2">
          <label className="form-label">Número de documento</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Tipo de documento</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Empresa</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Nombre Completo</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Fecha de nacimiento</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Genero</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Telefono 1</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Telefono 2</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Correo electronico</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Nivel escolaridad</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Dirección</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Dirección</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Código postal</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Fecha de vencimiento de la licencia
          </label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Número de licencia de conducción</label>
          <input className="form-control" type="text" />
        </div>
      </form>
    );
  };

  const InformacionConductor = () => {
    return (
      <form className="row row-cols-2">
        <div className="col mb-2">
          <label className="form-label">
            Fecha de expedición de la licencia
          </label>
          <input className="form-control" type="date" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Fecha de vigencia de la categoría
          </label>
          <input className="form-control" type="date" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Adjuntar parte frontal de la licencia
          </label>
          <input className="form-control" type="file" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Adjuntar parte posterior de la licencia
          </label>
          <input className="form-control" type="file" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Categoría autorizada</label>
          <select className="form-control" name="" id="">
            <option value="">B1</option>
          </select>
        </div>
        <div className="col mb-2">
          <label className="form-label">Grupo sanguineo</label>
          <select className="form-control" name="" id="">
            <option value="">A+</option>
          </select>
        </div>
      </form>
    );
  };

  const Contrato = () => {
    return (
      <form className="row row-cols-2">
        <div className="col mb-2">
          <label className="form-label">Adjuntar contrato</label>
          <input className="form-control" type="file" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Kilometraje del vehiculo al momento de la entrega
          </label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Nivel de gasolina en litros al momento de la entrega
          </label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">
            Número de documento del empleado que realizó la entrega
          </label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Hora de la entrega</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col mb-2">
          <label className="form-label">Adjuntar fotos del vehiculo</label>
          <input className="form-control" type="file" />
        </div>
      </form>
    );
  };

  return (
    <div>
      <DashboardNav></DashboardNav>
      <div className="container-fluid">
        <Stepper className="my-4" activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === 0 ? (
          <InformacionPersonal />
        ) : activeStep === 1 ? (
          <InformacionConductor />
        ) : (
          <Contrato />
        )}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Atras
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </Box>
      </div>
    </div>
  );
}
