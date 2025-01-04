import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Userdetails from './pages/Userdetails';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users/:id" element={<Userdetails />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
