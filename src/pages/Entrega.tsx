import { useParams } from 'react-router-dom';
import { vehicles } from '../data/vehicle';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { DashboardNav } from '../components/DashboardNav';

export function Entrega() {
    const params = useParams();
    const vehicle = vehicles.find((vehicle) => vehicle.id === Number(params.id));
    const steps = ['Información Personal', 'Información del Conductor', 'Finalizar entrega'];
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <div>
            <DashboardNav></DashboardNav>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {
                            activeStep === 0 ? (
                                <form>
                                    <label>Información Personal</label>
                                    <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '20px', rowGap: '2rem', columnGap: '2rem' }}>
                                        <span>
                                            <label>Tipo de documento</label>
                                            <select style={{ width: '100%' }} name="" id="">
                                                <option value="">C.C</option>
                                            </select>
                                        </span>
                                        <span>
                                            <label>Número de documento</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Tipo de documento</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Empresa</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Nombre Completo</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Fecha de nacimiento</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Genero</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Telefono 1</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Telefono 2</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Correo electronico</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Nivel escolaridad</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Dirección</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Dirección</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Código postal</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Fecha de vencimiento de la licencia</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Número de licencia de conducción</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                    </Box>
                                </form>
                            ) : activeStep === 1 ? (
                                <form>
                                    <label>Información Personal del Conductor</label>
                                    <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '20px', rowGap: '2rem' }}>
                                        <span>
                                            <label>Fecha de expedición de la licencia</label>
                                            <input style={{ width: '100%' }} type="date" />
                                        </span>
                                        <span>
                                            <label>Fecha de vigencia de la categoría</label>
                                            <input style={{ width: '100%' }} type="date" />
                                        </span>
                                        <span>
                                            <button>Adjuntar parte frontal de la licencia</button>
                                        </span>
                                        <span>
                                            <button>Adjuntar parte posterior de la licencia</button>
                                        </span>
                                        <span>
                                            <label>Categoría autorizada</label>
                                            <select style={{ width: '100%' }} name="" id="">
                                                <option value="">B1</option>
                                            </select>
                                        </span>
                                        <span>
                                            <label>Grupo sanguineo</label>
                                            <select style={{ width: '100%' }} name="" id="">
                                                <option value="">A+</option>
                                            </select>
                                        </span>
                                        <span>
                                            <button>Cambio de vehiculo</button>
                                        </span>
                                        <span>
                                            <button>Guardar</button>
                                        </span>
                                    </Box>
                                </form>
                            ) : (
                                <form>
                                    <label>Información Personal del Conductor</label>
                                    <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', padding: '20px', rowGap: '2rem' }}>
                                        <span>
                                            <button style={{ width: '100%' }}>Adjuntar contrato</button>
                                        </span>
                                        <span>
                                            <button style={{ width: '100%' }}>Adjuntar contrato</button>
                                        </span>
                                        <span>
                                            <label>Kilometraje del vehiculo al momento de la entrega</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Nivel de gasolina en litros al momento de la entrega</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Número de documento del empleado que realizó la entrega</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <label>Hora de la entrega</label>
                                            <input style={{ width: '100%' }} type="text" />
                                        </span>
                                        <span>
                                            <button style={{ width: '100%' }}>Ajuntar fotos</button>
                                        </span>
                                        <span>
                                            <button style={{ width: '100%' }}>Finalizar entrega</button>
                                        </span>
                                    </Box>
                                </form>
                            )
                        }
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div >

    );
}
