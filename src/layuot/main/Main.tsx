import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/homePage/HomePage';
import NoMatchPage from '../../pages/noMatch/NoMatchPage';
import TwoStepPage from '../../pages/twoStepPage/TwoStepPage';
import ThreeStepPage from '../../pages/threeStepPage/ThreeStepPage';
import FourStepPage from '../../pages/fourStepPage/FourStepPage';

const Main: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/two-step" element={<TwoStepPage />} />
            <Route path="/three-step" element={<ThreeStepPage />} />
            <Route path="/four-step" element={<FourStepPage />} />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>
    );
};

export default Main;
