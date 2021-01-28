import { useEffect } from 'react';

function useOnClickOutside(ref){
    useEffect(() => {

        const listener = (event) => {

            if(!ref.current || ref.current.contains(event.target)){
                console.log(ref.current, "hey hey");
            }
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        }
        
    }, [])
}

export { useOnClickOutside };