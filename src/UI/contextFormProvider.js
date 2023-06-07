import CartContext from "./contextFom";
import React,{useState} from "react";

const CartProvider = props => {

    const [medicineData,setMedicineData] = useState([])

    const addMedicineHandler = medicine => {
        setMedicineData(medicine)
    }

    const CartContext = {
        addMedicine: addMedicineHandler
    }

    return (
        <CartContext.Provider value={CartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider