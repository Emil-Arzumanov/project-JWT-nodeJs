class UserController {
    async registration(reg, res, next) {
        try {

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