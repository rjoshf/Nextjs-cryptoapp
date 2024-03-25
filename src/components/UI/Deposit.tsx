import { motion } from 'framer-motion';

const Deposit: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
    return (
        <div>
            <h2>Deposit</h2>
            <label htmlFor="assestSelect" className="block">Choose an asset to Deposit:</label>
            <select id="assestSelect" className="text-black">
                <option>Bitcoin</option>
                <option>Ethereum</option>
            </select>
            <label htmlFor="amount" className="block">Amount:</label>
            <input type="number" id="amount" name="numberInput" step="0.0001" min="0" max="9999.9999" className="text-black" />
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

export default Deposit;