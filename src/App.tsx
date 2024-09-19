import { cn } from './utils/cn';
import About from './components/About';
import Avatar from './components/Avatar';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Socials from './components/Socials';
import Work from './components/Work';

const scaleAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: {
        delay: 0.2,
        duration: 0.3,
    },
};

function App() {
    return (
        <>
            <div
                className={cn(
                    'h-screen w-full gap-4 bg-background p-6',
                    'sm:grid sm:h-full sm:grid-cols-12 sm:grid-rows-8',
                    'flex flex-col',
                )}
            >
                <Navigation animation={scaleAnimation} />
                <Intro animation={scaleAnimation} />
                <Avatar />
                <Work animation={scaleAnimation} />
                <About animation={scaleAnimation} />
                <Contact animation={scaleAnimation} />
                <Socials animation={scaleAnimation} />
            </div>
        </>
    );
}

export default App;
