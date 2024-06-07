import {memo} from 'react';

const Rmemo2 = () => {
    console.log('re-render memo 2');

    return (
        <div>
            <h3>******** React.memo ví dụ 2</h3>
        </div>
    );
};

export default memo(Rmemo2);