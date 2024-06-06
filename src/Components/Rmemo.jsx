import {memo} from 'react';

const Rmemo = ({count}) => {
    console.log('re-render memo');

    return (
        <div>
            <h3>React.memo</h3>
            <p>Count : {count}</p>
        </div>
    );
};

export default memo(Rmemo);