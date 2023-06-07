import React from "react";

const CartContext = React.createContext({
    addMedicines: (medicine) => {}
});

export default CartContext