import { cn } from '../utils/cn';
import { motion } from 'framer-motion';

function Intro({ animation }) {
    return (
        <motion.div
            {...animation}
            className={cn(
                'flex items-center justify-center text-lg font-semibold',
                'rounded-3xl bg-primary',
                'md:col-span-5 md:row-span-4',
                'sm:col-span-8 sm:row-span-4',
            )}
        >
            Intro
        </motion.div>
    );
}

export default Intro;
