import React from 'react';
import { Checkbox } from './components/checkbox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './constantes/routes';
import { Main } from './pages/main/Main';
import { Button } from './components/button';
import { Radio } from './components/radio';
import { Select } from './components/select/Select';
import { Header } from './components/header';

function App() {
  const [idx, setIdx] = React.useState(0);
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper" style={{ margin: 100 }}>
        <Checkbox />
        <Button variant="orange">Проверить цены</Button>
        <Button variant="outlined">Проверить цены</Button>
        <Radio />
        <Select options={['ghh', 'gghgj']} selectedIbdex={idx} setSelectedIndex={setIdx} />
        <Routes>
          <Route path={routes.main} element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
