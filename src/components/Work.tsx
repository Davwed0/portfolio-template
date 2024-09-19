import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

function Work({ animation }) {
    return (
        <motion.div
            {...animation}
            className={cn(
                'flex items-center justify-center text-lg font-semibold',
                'rounded-3xl bg-primary',
                'md:order-none md:col-span-4 md:row-span-6',
                'order-6 sm:col-span-12 sm:row-span-4',
            )}
        >
            Work
        </motion.div>
    );
}

export default Work;
