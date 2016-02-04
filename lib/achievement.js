var doorbell = require('doorbell');
var reward = require('reward');
var achievement = {
	rewards: reward
};
achievement = doorbell(achievement);
module.exports = achievement;