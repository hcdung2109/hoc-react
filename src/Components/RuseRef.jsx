import {useRef, useState, useImperativeHandle, useEffect} from 'react';

const RuseRef = () => {
    const [count, setCount] = useState(0);

    const tieude = useRef();
    const ref = useRef(0); // luôn tra về 1 object , có property = current

    const tang = () => {
        ref.current = setInterval(() => {
           setCount(prevState => prevState + 1);
        }, 1000);
    };

    const dung = () => {
        clearInterval(ref.current);
    };

    useEffect(() => {
        console.log(tieude)
    }, []);


    return (
        <div>
            <h3 ref={tieude}>useRef</h3>
            <p>Lưu các giá trị qua một biến tham chiếu bên ngoài function Component</p>
            {count}
            <button onClick={tang}>TĂNG</button>
            <button onClick={dung}>DỪNG</button>
        </div>
    );
};

export default RuseRef;