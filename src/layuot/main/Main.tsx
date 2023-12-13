import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/homePage/HomePage';
import NoMatchPage from '../../pages/noMatch/NoMatchPage';

const Main: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>
    );
};

export default Main;
