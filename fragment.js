function FragmentManager(id) {
    this.top = null;
    this.fragments = new Array();

    this.push = function(fragment) {
	if (this.top != null) {
            this.top.pause(id);
            this.fragments.push(this.top);
	}
	this.top = fragment;
	$(id).html(fragment.getBody());
    };
    this.replace = function(fragment) {
        this.fragments = new Array();
        this.top = fragment;
	$(id).html(fragment.getBody());
    }
    this.back = function() {
        if (this.fragments.length == 0) return;
        this.top = this.fragments.pop();
	this.top.resume();
        $(id).html(this.top.getBody());
	this.top.viewCreated();
    };
    this.refresh = function() {
        $(id).html(this.top.getBody());
    }
}

var Fragment = {
    getBody : function() {},
    pause : function(id){},
    resume: function(){},
    viewCreated: function(){},
};
