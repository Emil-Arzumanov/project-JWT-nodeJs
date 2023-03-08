const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с потовым адресом ${email} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const  user = await UserModel.create({email, password:hashPassword, activationLink});
        await mailService.sendActivationMail(email, activationLink);
    }
}
//TODO: 27:05
module.exports = new UserService;