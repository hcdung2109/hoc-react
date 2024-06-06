import { memo} from 'react';

const RuseCallback = ({handleClick}) => {
    console.log('re-rend use callback');

    return (
        <div>
            <h3>useCallBack</h3>
            <button onClick={handleClick}>Click useCallBack function</button>
        </div>
    );
};

export default memo(RuseCallback);