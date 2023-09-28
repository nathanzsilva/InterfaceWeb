import {Routes, Route} from 'react-router-dom'

import Home from '../paginas/home'
import { Quiz } from '../paginas/quiz';
import Ranking from '../paginas/ranking';

function RoutesApp() {
    return (
        <Routes>
            <Route path="*" element={<Home />} />                        
            <Route path="quiz" element={<Quiz />} />                        
            <Route path="ranking" element={<Ranking />} />                        
        </Routes >
    )
}

export default RoutesApp; 