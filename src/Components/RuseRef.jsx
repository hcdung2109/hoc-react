import {useRef, useState, useImperativeHandle} from 'react';

const RuseRef = () => {
    const [count, setCount] = useState(0);

    const ref = useRef(0);
    console.log(ref);

    const tang = () => {
        ref.current = setInterval(() => {
           setCount(prevState => prevState + 1);
        }, 1000);
    };

    const dung = () => {
        clearInterval(ref.current);
    };

    return (
        <div>
            <h3>useRef</h3>
            <p>Lưu các giá trị qua một biến tham chiếu bên ngoài function Component</p>
            {count}
            <button onClick={tang}>TĂNG</button>
            <button onClick={dung}>DỪNG</button>
        </div>
    );
};

export default RuseRef;