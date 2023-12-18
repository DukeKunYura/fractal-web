import { FC } from 'react';
import styles from './header.module.scss';
import { ProgressBar } from '../../components/progressBar/ProgressBar';

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>Form title</div>
            <ProgressBar />
        </div>
    );
};
export default Header;
