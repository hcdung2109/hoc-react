import { memo} from 'react';

const RuseCallback = ({handleClick}) => {
    console.log('re-rend use callback');

    return (
        <div>
            <h3>------------------------------------------------------</h3>
            <h3>useCallBack : giúp tránh tạo ra những hàm mới không cần thiết , thường dùng kèm với memo</h3>
            <button onClick={handleClick}>Click useCallBack function</button>
        </div>
    );
};

export default memo(RuseCallback);