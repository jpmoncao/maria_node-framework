import { User } from "../models/User.js";

export const models = {
    sync: function () {
        User.sync();
    }
}