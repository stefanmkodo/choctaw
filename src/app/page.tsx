import iBeacons from "./iBeacons.json";
import IDItem from "@/app/components/IDItem";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <div className="z-10 max-w-5xl w-full flex items-center justify-center mb-8">
                <Image src={"/ibeacon.png"} alt={"iBeacon icon"} width={100} height={100}/>
                <h1 className="flex justify-center ml-8 text-white">
                    iBeacons
                </h1>
            </div>


            <ul className={"w-full flex flex-col"}>
                <li className={"bg-mkodo-accent text-white p-4 mb-2"}>
                    <ul className={"w-full flex flex-row text-center"}>
                        <li className={"w-1/3"}>ID</li>
                        <li className={"w-1/3"}>Alias Name</li>
                        <li className={"w-1/3"}>Notification Id</li>
                    </ul>
                </li>
                {iBeacons.map((iBeacon, i) => {
                    return (<li key={`${iBeacon.uuid}:${iBeacon.major}:${iBeacon.minor}`}
                                className={`p-4 hover:bg-mkodo-dark bg-mkodo-light text-white mb-2`}>
                        <ul className={"w-full flex flex-row text-center"}>
                            <IDItem uuid={iBeacon.uuid} minor={iBeacon.minor} major={iBeacon.major}/>
                            <li className={"w-1/3"}>{iBeacon.alias}</li>
                            <li className={"w-1/3"}>{iBeacon.notificationId}</li>
                        </ul>
                    </li>)
                })}
            </ul>
        </main>
    )
}
