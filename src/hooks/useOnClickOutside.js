import { useEffect } from 'react';

function useOnClickOutside(ref){
    useEffect(() => {

        const listener = () => {
            console.log(ref.current, "hey hey");
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        
    }, [])
}

export { useOnClickOutside };