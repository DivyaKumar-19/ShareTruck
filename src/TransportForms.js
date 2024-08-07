import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import ReceiverForm from './ReceiverForm';
import './FormStyles.css';

const TransportForms = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(2);
    };

    const handlePrev = () => {
        setStep(1);
    };

    return (
        <div className={`form-wrapper step-${step}`}>
            {step === 1 && <CustomerForm onNext={handleNext} />}
            {step === 2 && <ReceiverForm onPrev={handlePrev} />}
        </div>
    );
};

export default TransportForms;
