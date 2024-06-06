import { useContext } from 'react';
import { TestContext } from '../App'
import ChildComponent from './ChildComponent'

const RuseContext = () => {
    const dulieu = useContext(TestContext);

    return (
        <div>
            <h3>useContext</h3>
            <h3>truyền dữ liệu từ component cha xuống component con mà không cần props</h3>
            {dulieu}
            <ChildComponent/>
        </div>
    );
};

export default RuseContext;
