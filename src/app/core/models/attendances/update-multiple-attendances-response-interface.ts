import { AttendanceInterface } from "./attendance-interface";

export interface UpdateMultipleAttendancesResponseInterface {
    message: string,
    data: AttendanceInterface[],
    error?: string
}
