import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
    const [res_data, setResData] = useState();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                console.log(res.data);
                setResData(res.data);
            })
            .catch((err) => console.log(err));
    });

    // const lol = () => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/posts`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setResData(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // };

    // useEffect(() => {
    //     lol();
    // }, []);

    return (
        <div>
            {res_data?.map((val, ind, arr) => {
                return (
                    <div className="border border-2 rounded-5 border-dark w-75 mx-auto p-4 my-3" key={ind}>
                        <h5>UserID: {val.userId}</h5>
                        <h5>ID: {val.id}</h5>
                        <h5>Title: {val.title}</h5>
                        <h5>Body: {val.body}</h5>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
