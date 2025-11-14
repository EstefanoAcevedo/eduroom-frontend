export interface PreviousAttendanceInterface {
    attendance_id: number,
    attendance_date: string,
    attendance_is_justified: boolean,
    attendance_state_id: number,
    created_at: string,
    updated_at: string,
    enrollment: {
        enrollment_id: number,
        enrollment_academic_year: string,
        enrollment_status: string,
        subject_id: number,
        commission_id: number,
        created_at: string,
        updated_at: string,
        user: {
            user_id: 3,
            user_name: string,
            user_lastname: string
        }
    }
}
