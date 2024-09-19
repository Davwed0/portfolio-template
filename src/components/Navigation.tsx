import { cn } from '.././utils/cn';
import { motion } from 'framer-motion';

function Navigation({ animation }) {
    return (
        <motion.div
            {...animation}
            className={cn(
                'flex items-center justify-center text-lg font-semibold',
                'col-span-12 row-span-1',
                'rounded-3xl bg-primary p-8 text-black',
                'w-fill h-auto',
            )}
        >
            Navigation
        </motion.div>
    );
}

export default Navigation;
