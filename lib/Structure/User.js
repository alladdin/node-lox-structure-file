
var User = function (params) {
    this.name = params.name;
    this.uuid = params.uuid;
    this.isAdmin = params.isAdmin;
    this.changePassword = params.changePassword;
};

module.exports = User;
