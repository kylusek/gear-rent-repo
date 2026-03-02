import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.tsx';
import Dashboard from '../pages/Dashboard';
import Inventory from '../pages/Inventory';
import Rentals from '../pages/Rentals';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="inventory" element={<Inventory/>}/>
                    <Route path="rentals" element={<Rentals/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;