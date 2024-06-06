import React, {useEffect} from 'react';

const RuseEffect = () => {

    useEffect(() => {

        // cleanup function
        return () => {
            console.log("unmount")
        };
    }, []);

    return (
        <div>
            <h3>Component useEffect</h3>
        </div>
    );
};

export default RuseEffect;
