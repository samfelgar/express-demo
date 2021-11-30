const UserModel = require('../../models/user');

const UserController = {
    async index(req, res) {
        const users = await UserModel.findAll();

        res.json({
            data: users,
        });
    },

    async show(req, res) {
        const { id } = req.params;
        const user = await UserModel.findByPk(id);

        if (user === null) {
            res.status(404).json({
                message: 'Unable to find user',
            });
            return;
        }

        res.json({
            data: user,
        });
    },

    async store(req, res) {
        const { msisdn, name, access_level, password } = req.body;
        const user = await UserModel.create({
            msisdn,
            name,
            access_level,
            password
        });

        res.json({
            data: user
        });
    },

    async update(req, res) {
        const { id } = req.params;

        const user = await UserModel.findByPk(id);

        if (user === null) {
            res.status(404).json({
                message: 'Unable to find user',
            });
            return;
        }

        await user.update(req.body);

        res.json({
            data: user,
        });
    },

    delete(req, res) {
        res.json({
            message: 'users.delete'
        });
    }
};

module.exports = UserController;