"use client"
export default function UDIDItem({udid} : {udid: string}) {
    function onUDIDClick(e: any) {
        navigator.clipboard.writeText(e.target.innerText).then(r => console.log(e.target.innerText));
    }

    return <li className={"w-1/3 cursor-copy"} onClick={onUDIDClick}>{udid}</li>
}
