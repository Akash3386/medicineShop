// import logo from './logo.svg';
// import './App.css';

import AddMedicine from "./UI/addMedicine.js";
import AvailableMedicine from "./UI/availableMedicine.js";
import CartProvider from "./UI/contextFormProvider.js";

function App() {
  return (
    <CartProvider>
        <AddMedicine></AddMedicine>
        <AvailableMedicine/>
    </CartProvider>
  );
}

export default App;
