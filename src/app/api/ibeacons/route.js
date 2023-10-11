import {NextRequest, NextResponse} from "next/server";
import iBeacons from "../../iBeacons.json";

export async function GET() {
    return NextResponse.json(iBeacons);
}
