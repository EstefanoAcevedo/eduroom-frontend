import { AttendanceInterface } from "./attendance-interface";

export interface StoreMultipleAttendancesResponseInterface {
    message: string,
    data: AttendanceInterface[],
    error?: string
}
