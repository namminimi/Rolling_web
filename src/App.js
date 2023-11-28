import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import List from './pages/list/List';
import Post from './pages/post/Post';
import SubHeader from './components/sub-header/SubHeader';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/list" element={<List />} />
                <Route
                    path="/post"
                    element={
                        <>
                            <SubHeader />
                            <Post />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
