import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setStep } from '../../redux/slices/masterSlice';
import styles from './ProgressBar.module.scss';

export const ProgressBar: FC = () => {
    const step = useAppSelector((state) => state.master.currentStep);
    //const step: number = 3;
    console.log(step);
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
            <div className={styles.progress}>
                {step === 1 && <div className={styles.progress_bar_one}></div>}
                {step === 2 && <div className={styles.progress_bar_two}></div>}
                {step === 3 && (
                    <div className={styles.progress_bar_three}></div>
                )}
                {step === 4 && <div className={styles.progress_bar_four}></div>}
                <ul className={styles.progress_num}>
                    <li className={styles.step_active}></li>
                    <li
                        className={step >= 2 ? styles.step_active : styles.step}
                    ></li>
                    <li
                        className={step >= 3 ? styles.step_active : styles.step}
                    ></li>
                    <li
                        className={
                            step === 4 ? styles.step_active : styles.step
                        }
                    ></li>
                </ul>
            </div>

            {/* <button
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
            </button> */}
            <br />
        </>
    );
};
