import { useState } from 'react';

import { motion } from 'framer-motion';

const Withdraw: React.FC<{ onCancel: () => void; }> = ({ onCancel }) => {

    const [selectedAssest, setSelectedAssest] = useState("bitcoin");

    const [enteredNumber, setEnteredNumber] = useState(0);

    const assestChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAssest(event.target.value)
    }

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredNumber(+event.target.value);
    }

    return (
        <div>
            <h2>Withdraw</h2>
            <label htmlFor="assestSelect" className="block">Choose an asset to withdraw:</label>
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
                <motion.button whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 100 }} onClick={onCancel}>
                    Deposit
                </motion.button>
            </div>
        </div>
    )
}

export default Withdraw;