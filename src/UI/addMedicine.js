import React,{useContext, useState} from "react";

import CartContext from "./contextFom";

const AddMedicine = () => {
   
    const medictx = useContext(CartContext)

    const [medicineName,setMedicineName] = useState('');
    const [medicineDescription,setMedicineDescription] = useState('');
    const [medicinePrice,setMedicinePrice] = useState('');


    const changeMedicineNameHandler = event => {
        setMedicineName(event.target.value)
    }

    const changeMedicineDescriptionHandler = event => {
        setMedicineDescription(event.target.value)
    }

    const changeMedicinePriceHandler = event => {
        setMedicinePrice(event.target.value)
    }

    const onSubmitHandler = event => {
        event.preventDefault();

        const medicine = {
            name: medicineName,
            des: medicineDescription,
            price: medicinePrice
        }
        console.log(medicine)

        medictx.addMedicines({
            name: medicineName,
            des: medicineDescription,
            price: medicinePrice
        })

        



    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="name">Medicine Name</label>
            <input type="text" id="name" value={medicineName} onChange={changeMedicineNameHandler}></input>

            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={medicineDescription} onChange={changeMedicineDescriptionHandler}></input>

            <label htmlFor="price">Price</label>
            <input type="number" id="price" value={medicinePrice} onChange={changeMedicinePriceHandler}></input>

           

            <button>Add</button>
        </form>
    )
}

export default AddMedicine