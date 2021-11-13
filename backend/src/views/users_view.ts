import userModel from "../models/UserModel";

export default {
    render(user: userModel) {
        return{
            userName: "@"+user.userName,
            name: user.name,
            email: user.email,
            deleteTime: user.deleteTime,
            id: user.id,
            creationTime: user.creationTime,
            updateTime: user.updateTime
        };
    },

    renderMany(users: userModel[]) {
        return users.map(user => this.render(user));
    }
};