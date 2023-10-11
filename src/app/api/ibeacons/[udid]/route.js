import {NextRequest, NextResponse} from "next/server";
import iBeacons from "../../../iBeacons.json";

export async function GET(req, context) {
    const result = context.params;
    const udid = String(result?.udid);
    const iBeacon = iBeacons.find(ib => ib.udid === udid);
    
    // return details of the found iBeacon
    if (iBeacon)
        return NextResponse.json({alias: iBeacon.alias, notificationId: iBeacon.notificationId})
    
    if(!iBeacon && udid) {
        return NextResponse.json({},{status: 404});
    }
    
    // return all iBeacons
    return NextResponse.json(iBeacons);
}
