import {Routes, Route} from 'react-router-dom'

import Home from '../paginas/home'
import { Detalhes } from '../paginas/detalhes';

function RoutesApp() {
    return (
        <Routes>
            <Route path="*" element={<Home />} />                        
            <Route path="post/:id" element={<Detalhes />} />                        
        </Routes >
    )
}

export default RoutesApp; 