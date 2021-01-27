import { useLayoutEffect } from 'react';

function useBodyScrollLock(){
    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';

        return function cleanUp () {
            document.body.style.overflow = '';
        }
    });
}

export { useBodyScrollLock };