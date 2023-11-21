import { Routes, Route } from 'react-router-dom';
import { NewHome } from '../components/NewHome';
import { DummyPage } from '../components/DummyPage';

const RoutesPage = () => {
    return (
        <>
            <div className='layout'>
                <Routes>
                    <Route path="/dummy" element={<DummyPage />} />
                    <Route path="/" element={<NewHome />} />
                </Routes>
            </div >
        </>
    )
}

export { RoutesPage }