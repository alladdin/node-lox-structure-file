
var MiniServerInfo = function (params, heatPeriod, coolPeriod, user) {
    this.tempUnit = (params.tempUnit == 0) ? 'C' : 'F';
    this.serialNr = params.serialNr;
    this.name = params.msName;
    this.projectName = params.projectName;
    this.localUrl = params.localUrl;
    this.remoteUrl = params.remoteUrl;
    this.currency = params.currency;
    this.location = params.location;
    this.languageCode = params.languageCode;
    this.categoryTitle = params.catTitle;
    this.roomTitle = params.roomTitle;
    this.miniserverType = (params.miniserverType == 0) ? 'regular' : 'GO';
    this.sortByRating = params.sortByRating;
    this.heatPeriod = heatPeriod;
    this.coolPeriod = coolPeriod;
    this.currentUser = user;
};

module.exports = MiniServerInfo;
