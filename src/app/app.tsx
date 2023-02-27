// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Landing from './landing/landing'
import { RoutesCart } from '@design/cart';
export function App() {
  return (
      <Routes>
        <Route path="/" element={<RoutesCart />}></Route>
        <Route path="/cart" element={<RoutesCart />}></Route>
      </Routes>
   );
}

export default App;
