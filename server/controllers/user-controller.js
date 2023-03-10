const userService = require("../service/user-service");

class UserController {
    async registration(reg, res, next) {
        try {
            const {email, password} = reg.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            console.log(e);
        }
    }
    async login(reg, res, next) {
        try {

        } catch (e) {
            console.log(e);
        }
    }
    async logout(reg, res, next) {
        try {

        } catch (e) {
            console.log(e);
        }
    }
    async activate(reg, res, next) {
        try {

        } catch (e) {
            console.log(e);
        }
    }
    async refresh(reg, res, next) {
        try {

        } catch (e) {
            console.log(e);
        }
    }
    async getUsers(reg, res, next) {
        try {
            res.json(["123","456"]);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController();