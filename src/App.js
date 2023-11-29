import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import List from './pages/list/List';
import Post from './pages/post/Post';
import SubHeader from './components/sub-header/SubHeader';
import ColorCase from './pages/colorCase/ColorCase';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/list" element={<List />} />
                <Route path="/post">
                    <Route
                        index
                        element={
                            <>
                                <SubHeader />
                                <Post />
                            </>
                        }
                    />
                    <Route path=":id" element={<ColorCase />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
