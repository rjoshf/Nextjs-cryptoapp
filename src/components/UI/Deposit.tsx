import { useState } from 'react';
import { motion } from 'framer-motion';

const Deposit: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
    const [selectedAssest, setSelectedAssest] = useState("Bitcoin");

    const [enteredNumber, setEnteredNumber] = useState("");

    const assestChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAssest(event.target.value)
    }

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredNumber(event.target.value);
    }

    const depositHandler = async () => {
        console.log(selectedAssest)
        await fetch("/api/deposit", {
            method: 'PATCH',
            body: JSON.stringify({ selectedAssest, enteredNumber: +enteredNumber }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <div>
            <h2>Deposit</h2>
            <label htmlFor="assestSelect" className="block">Choose an asset to deposit:</label>
            <select id="assestSelect" className="text-black" onChange={assestChangeHandler} value={selectedAssest}>
                <option>Bitcoin</option>
                <option>Ethereum</option>
            </select>
            <label htmlFor="amount" className="block">Amount:</label>
            <input type="number" id="amount" name="numberInput" step="0.0001" min="0" max="9999.9999" className="text-black" onChange={amountChangeHandler} value={enteredNumber} />
            <div>
                <motion.button whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 100 }} onClick={onCancel}>
                    Cancel
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 100 }} onClick={depositHandler}>
                    Deposit
                </motion.button>
            </div>
        </div>
    )
}

export default Deposit;