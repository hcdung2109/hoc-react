import {useContext} from 'react';
import {TestContext} from "../App";

const ChildComponent = () => {
    const dulieu = useContext(TestContext);

    return (
        <div>
            <h3>Child Component</h3>
            {dulieu}
        </div>
    );
};

export default ChildComponent;
