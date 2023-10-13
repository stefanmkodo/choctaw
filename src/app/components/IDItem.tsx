"use client"
export default function IDItem({uuid, minor, major} : {uuid: string, minor: number, major: number}) {
    function onIDClick(e: any) {
        navigator.clipboard.writeText(e.target.innerText).then(r => console.log(e.target.innerText));
    }

    return <li className={"w-1/3 cursor-copy"} onClick={onIDClick}>{`${uuid}:${major}:${minor}`}</li>
}
