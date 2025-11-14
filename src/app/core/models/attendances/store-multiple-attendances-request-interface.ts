import { AttendanceInterface } from "./attendance-interface";

export interface StoreMultipleAttendancesRequestInterface {
    attendance_date: string,
    attendances: AttendanceInterface[]
}
