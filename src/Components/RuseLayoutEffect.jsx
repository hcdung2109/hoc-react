import React, {useEffect, useLayoutEffect, useState} from 'react';

function RuseLayoutEffect(props) {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    };

    /*useEffect(() => {
        if (count > 5) setCount(0)
    }, [count]);*/

    useLayoutEffect(() => {
        if (count > 5)
            setCount(0)
    }, [count]);

    console.log(count)

    return (
        <div>
            <h3>RuseLayoutEffect</h3>
            <h1>{count}</h1>
            <button onClick={increase}>click</button>
        </div>
    );
}

export default RuseLayoutEffect;
