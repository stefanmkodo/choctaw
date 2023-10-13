import {NextRequest, NextResponse} from "next/server";
import iBeacons from "../../../iBeacons.json";

export async function GET(req, context) {
    const result = context.params;
    const id = String(result?.id);
    const iBeacon = iBeacons.find(i => `${i.uuid}:${i.major}:${i.minor}` === id);
    
    // return details of the found iBeacon
    if (iBeacon)
        return NextResponse.json({alias: iBeacon.alias, notificationId: iBeacon.notificationId})
    
    if(!iBeacon && id) {
        return NextResponse.json({},{status: 404});
    }
    
    // return all iBeacons
    return NextResponse.json(iBeacons);
}
