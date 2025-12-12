export interface UserInterface {
    user_id?: number;
    user_cuil: string;
    user_email: string;
    user_lastname: string;
    user_name: string;
    user_tel: string;
    user_address: string;
    user_location: string;
    created_at?: string;
    updated_at?: string;
    rol?: string;
    roles?: string[];
}
