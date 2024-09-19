import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

function About({ animation }) {
    return (
        <motion.div
            {...animation}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
                'flex items-center justify-center text-lg font-semibold',
                'rounded-3xl bg-primary',
                'md:col-span-4 md:row-span-3',
                'sm:col-span-6 sm:row-span-3',
            )}
        >
            About
        </motion.div>
    );
}

export default About;
