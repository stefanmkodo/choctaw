import iBeacons from "./iBeacons.json";
import UDIDItem from "@/app/components/UDIDItem";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex mb-8">
                <h1 className="flex w-full justify-center ">
                    iBeacons
                </h1>
            </div>


            <ul className={"w-full flex flex-col"}>
                <li className={"bg-[#E61753] text-white p-4"}>
                    <ul className={"w-full flex flex-row text-center"}>
                        <li className={"w-1/3"}>UDID</li>
                        <li className={"w-1/3"}>Alias Name</li>
                        <li className={"w-1/3"}>Notification Id</li>
                    </ul>
                </li>
                {iBeacons.map((iBeacon, i) => {
                    return (<li key={iBeacon.udid} className={`p-4  hover:bg-gray-400 ${i % 2 === 0 ? "bg-gray-300" : "bg-gray-100"}`}>
                        <ul className={"w-full flex flex-row text-center"}>
                            <UDIDItem udid={iBeacon.udid}/>
                            <li className={"w-1/3"}>{iBeacon.alias}</li>
                            <li className={"w-1/3"}>{iBeacon.notificationId}</li>
                        </ul>
                    </li>)
                })}
            </ul>
        </main>
    )
}
