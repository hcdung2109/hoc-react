import {memo} from 'react';

const Rmemo = ({count}) => {
    console.log('re-render memo');

    return (
        <div>
            <h3>******** React.memo : ghi nhớ lại các prop của Component => quyết định có cần render lại component không ? => tối ưu hiệu năng</h3>
            <p>Count : {count}</p>
        </div>
    );
};

export default memo(Rmemo);