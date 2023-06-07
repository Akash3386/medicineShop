import React from "react";


const medicine = [
    {
        id: 'm1',
        name: 'paracetamol',
        description: 'used to solve fever',
        price: '10'
    },
    {
        id: 'm2',
        name: 'dolo',
        description: 'used to solve fever',
        price: '12'
    }

]

const AvailableMedicine = props => {
    console.log(medicine)
    const medi = medicine.map((med) => (
        // console.log(med.id)
        <li key={med.id}>{med.name} {med.description}  {med.price}</li>
    ))
    return (medi)   
}

export default AvailableMedicine