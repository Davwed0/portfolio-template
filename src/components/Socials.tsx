import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

function Socials({ animation }) {
    return (
        <motion.div
            {...animation}
            className={cn(
                'flex items-center justify-center text-lg font-semibold',
                'rounded-3xl bg-primary',
                'md:order-none md:col-span-4 md:row-span-1',
                'order-7 sm:col-span-12 sm:row-span-1',
            )}
        >
            Socials
        </motion.div>
    );
}

export default Socials;
