import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlesPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articlepage/:id" element={<ArticlePage />} />
            </Routes>
        </>
    )

}

export default App;
