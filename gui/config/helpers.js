const path = require('path');

const rootPath = path.resolve(__dirname, '..');
function root(...args) {
	return path.join.apply(path, [rootPath].concat(Array.prototype.slice.call(args, 0)));
}
exports.root = root;
