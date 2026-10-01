import { BrowserRouter,Routes,Route } from "react-router";
import App from './pages/app/App.jsx';
import Contato from './pages/contato';
import Contas from './pages/contas';







export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/contas" element={<Contas />} />
            </Routes>
        </BrowserRouter>
    )
}