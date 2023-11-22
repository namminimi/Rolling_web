import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import List from './pages/list/List';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </div>
    );
}

export default App;
