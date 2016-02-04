#Achievement
![Event Driven Reward System](https://raw.githubusercontent.com/active9/achievement/master/achievement.png)

Achievement is a simple event driven reward system written in NodeJS.

#INSTALLING
Using Git:
```bash
git clone https://github.com/active9/achievement
cd achievement*
npm install
```

Using NPM:
```bash
npm install achievement
```

#MODULE
Above may run included as a module in your projects.
```js
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

```


~Enjoy!

#CONTRIB

Achievement is open-source via the MIT license we encourage Forking.

#LICENSE
MIT



