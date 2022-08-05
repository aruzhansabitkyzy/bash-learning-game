import {useEffect, useRef} from 'react';

 const useDidMountedEffect = (func, dep) => {
       const didMount = useRef(false)
 
       useEffect(() => {
        console.log(didMount.current + " current")
            if(didMount.current) {
                console.log("false")
                func()
            }
            else  {
                console.log("true")
                didMount.current = true
            }
       }, dep);
}

export default useDidMountedEffect;