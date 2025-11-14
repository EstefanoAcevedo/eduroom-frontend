import { AttendanceInterface } from "./attendance-interface";

export interface UpdateMultipleAttendancesRequestInterface {
    attendance_date: string,
    attendances: AttendanceInterface[]
}
