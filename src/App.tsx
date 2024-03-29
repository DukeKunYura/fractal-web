import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import Main from './layuot/main/Main';
import './App.css';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layuot/header/Header';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Header />
                    <Main />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
