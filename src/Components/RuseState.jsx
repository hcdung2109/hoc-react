import React, {useState, useCallback, useMemo, useEffect} from 'react';
import Rmemo from "./Rmemo";
import RuseCallback from "./RuseCallback";
import RuseMemo from "./RuseMemo";
import RuseContext from "./RuseContext";
import RuseEffect from "./RuseEffect";

const RuseState = () => {
    const [name, setName] = useState('Học useState');
    const [count, setCount] = useState(0);
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = useCallback(() => {
        setCount(prevState => prevState + 1)
    }, []);

    const [infoUser, setInfoUser] = useState({
        name: 'Hoang Cong Dung',
        age: 32
    });

    const handleUpdate = () => {
        setInfoUser({
            ...infoUser,
            address: "Ha Noi"
        })
    };

    const btnAddJob = () => {
        setJobs(prevState => [...prevState, job]);
        setJob('')

    };

    const total = useMemo(() => {
        let result = jobs.reduce((result, job) => {
            console.log('jobs');

            return result + parseInt(job);
        }, 0);

        return result;
    }, [jobs]);

    /*useEffect(() => {
        console.log('Mounted');
    });*/

    /*useEffect(() => {
        console.log('Mounted');
    }, []);*/

    /*useEffect(() => {
       console.log('changed');
    }, [count]);*/

    useEffect(() => {
        console.log('Mounted');

        // cleanup function
        return () => {

        }

    }, []);

    function toggle() {
        setIsHidden(false);
    }


    return (
        <div>
            <h3>Use State</h3>
            <p>{name}</p>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click</button>
            <h3>VD 2 :</h3>
            <p>{ JSON.stringify(infoUser) }</p>
            <button onClick={handleUpdate}>Update</button>
            <h3>To do list: </h3>
            <input value={job} onChange={e => setJob(e.target.value)}/>
            <button onClick={btnAddJob}>Add job</button>
            <ul>
                {jobs.map((job, index) => (
                        <li key={index}>{job}</li>
                    )
                )}
            </ul>
            <p>Tổng: {total}</p>

            <RuseEffect />
            <button onClick={toggle}>Show/Hide Component</button>

            <Rmemo />
            <RuseCallback handleClick={handleClick}/>
            <RuseMemo/>
            <RuseContext/>
        </div>
    );
};

export default RuseState;
