import React, { useRef, MouseEvent, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { motion } from 'framer-motion';

export default function Modal({ open, children, onClose }: { open: boolean; children: ReactNode; onClose: () => void }) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const handleDialogClick = (event: MouseEvent) => {
        event.stopPropagation(); // Prevent click from propagating to the backdrop
    };

    if (!open) return null;

    return ReactDOM.createPortal(
        (
            <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black bg-opacity-60" onClick={onClose}>
                <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} initial="hidden" animate="visible" exit="hidden" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold z-20 bg-purple-900 rounded-lg shadow-md animate-slide-down-fade-in duration-300 ease-out p-5 max-w-90 max-h-90vh overflow-auto" onClick={handleDialogClick} ref={dialogRef}>
                    {children}
                </motion.div>
            </div>
        ),
        document.getElementById('portal-root')!
    );
}
