import { BrowserRouter , Route , Routes } from 'react-router-dom';

import Home from './Pages/Home';
import MoviePage from './Pages/MoviePage';
import NotFound from './Pages/NotFound';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/:category/:slug/:title' element={<MoviePage/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}
