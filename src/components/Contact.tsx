import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

function Contact({ animation }) {
    return (
        <motion.div
            {...animation}
            className={cn(
                'flex items-center justify-center text-lg font-semibold',
                'rounded-3xl bg-secondary',
                'md:col-span-4 md:row-span-3',
                'sm:col-span-6 sm:row-span-3',
            )}
        >
            Contact
        </motion.div>
    );
}

export default Contact;
