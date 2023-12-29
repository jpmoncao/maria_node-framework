import { User } from '../models/User.js'

export default class UsersService {
    constructor() { }

    public async findAll(): Promise<User[]> {
        return await User.findAll();
    }

    public async findById(id_user: string): Promise<User | null> {
        return await User.findOne({
            where: {
                id_user
            }
        });
    }
};