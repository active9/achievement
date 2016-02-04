var achievement = require('../');

achievement.rewards.add('New User', function() {
	return 'New User Achievement';
});

achievement.once('New User', function(user, cb) {
	achievement.rewards.get('New User', function(result) {
		return cb(result(), user);
	});
});

achievement.emit('New User', 'Joe', function(result, user) {
	// You could expand this to use push or desktop notification methods
	console.log('Achievement:', result, user);
});

achievement.emit('New User Again', 'Joe', function(result, user) {
	// This should not emit again
	console.log('Achievement Again:', result, user);
});