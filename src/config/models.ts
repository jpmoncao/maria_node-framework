import { Users } from "../models/Users.js";
import { Tuites } from "../models/Tuites.js";
import { TuitesComments } from "../models/TuitesComments.js";
import { TuitesLikes } from "../models/TuitesLikes.js";
import { TuitesRetuites } from "../models/TuitesRetuites.js";

export const models = {
    sync: function () {
        Users.sync();
        Tuites.sync();
        TuitesComments.sync();
        TuitesLikes.sync();
        TuitesRetuites.sync();
    }
}