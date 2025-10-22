import { UserInterface } from "../users/user-interface";

export interface RegisterResponseInterface {
    message: string;
    access_token: string;
    token_type: string;
    user: UserInterface;
}
