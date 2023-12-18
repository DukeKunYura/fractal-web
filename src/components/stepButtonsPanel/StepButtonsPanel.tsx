import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setStep } from '../../redux/slices/masterSlice';
import styles from './StepButtonsPanel.module.scss';

export const StepButtonsPanel: FC = () => {
    const step = useAppSelector((state) => state.master.currentStep);
    const dispatch = useAppDispatch();

    const handlePrev = () => {
        if (step !== 1) {
            dispatch(setStep(step - 1));
        }
    };

    const handleNext = () => {
        if (step !== 4) {
            dispatch(setStep(step + 1));
        }
    };

    return (
        <>
            <button
                onClick={() => {
                    handlePrev();
                }}
            >
                {'<--'}
            </button>
            <button
                onClick={() => {
                    handleNext();
                }}
            >
                {'-->'}
            </button>
            <br />
        </>
    );
};
