

import {useEffect, useState} from "react";

function Seed() {
    const [seed, setSeed] = useState([]);

    useEffect(() =>{
fetch('https://wxuanh-holiday.herokuapp.com/api/holidays/seed')
.then(response => response.json())
.then(data => console.log(data));

    }, []);
    return(
        <>
        <h1>Seed</h1>
        <pre>{JSON.stringify(seed, null, 2)}</pre>

        </>
    )
}

export default Seed;