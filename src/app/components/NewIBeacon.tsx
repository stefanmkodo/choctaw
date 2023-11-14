"use client"

import {useState} from "react";

export function NewIBeacon(){
    const [state, setState] = useState({});

    function onChange(e: any){
        console.log(e.target.name, e.target.value);
        setState({[e.target.name]:e.target.value})
    }

    function onSave(){

    }

    return (
        <>
            <ul className={"w-full flex flex-row text-center"}>
                <li >UUID<input name={"uuid"} onChange={onChange}/></li>
                <li className={"w-1/3"}><input name={"alias"} onChange={() => {}}/></li>
                <li className={"w-1/3"}><input name={"notificationId"} onChange={() => {}}/></li>
            </ul>
            <button>Cancel</button>
            <button onClick={onSave}>Save</button>
        </>
    )
}
