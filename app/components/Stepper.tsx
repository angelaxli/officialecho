"use client";

import React from 'react';

interface StepperProps {
    currentStep: number;
    steps: string[];
}

const Stepper = ({ currentStep, steps }: StepperProps) => (
    <div className="flex items-center justify-center">
        {steps.map((step, index) => (
            <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${currentStep >= index + 1 ? 'bg-stone-800 text-white' : 'bg-stone-200 text-stone-500'}`}>
                        {index + 1}
                    </div>
                    <p className={`mt-2 text-sm font-medium ${currentStep >= index + 1 ? 'text-stone-800' : 'text-stone-500'}`}>{step}</p>
                </div>
                {index < steps.length - 1 && (
                    <div className={`flex-auto border-t-2 transition-colors mx-4 ${currentStep > index + 1 ? 'border-stone-800' : 'border-stone-200'}`}></div>
                )}
            </React.Fragment>
        ))}
    </div>
);

export default Stepper;