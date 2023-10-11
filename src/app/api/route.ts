import {NextRequest, NextResponse} from "next/server";

import iBeacons from "../iBeacons.json";

export async function POST(req: NextRequest, res: NextResponse) {
    const result = await req.json();
    const udid = String(result?.udid);
    const iBeacon = iBeacons.find(ib => ib.udid === udid);

    if (iBeacon)
        return NextResponse.json({alias: iBeacon.alias, notificationId: iBeacon.notificationId})

    return NextResponse.json({},{status: 404});
}
