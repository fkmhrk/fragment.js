function TitleFragment() {
    this.getBody = function() {
	return '<h1>Welcome</h1';
    };
}
TitleFragment.prototype = Fragment;