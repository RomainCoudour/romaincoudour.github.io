const TypeWriter = function ({
	el,
	contents,
	pauseSpeed,
	writeSpeed,
	deleteSpeed,
}) {
	this.contents = contents;
	this.pauseSpeed = pauseSpeed;
	this.writeSpeed = writeSpeed;
	this.deleteSpeed = deleteSpeed;
	this.el = el;
	this.i = 0;
	this.content = "";
	this.isDeleting = false;
	this.stopped = false;
};

TypeWriter.prototype.start = function () {
	this.stopped = false;
	setTimeout(() => {
		this.tick();
	}, 300);
};

TypeWriter.prototype.stop = function () {
	this.stopped = true;
};

TypeWriter.prototype.tick = function () {
	const currContent = this.contents[this.i];
	if (this.isDeleting) {
		this.content = currContent.substring(0, this.content.length - 1);
	} else {
		this.content = currContent.substring(0, this.content.length + 1);
	}
	this.el.innerHTML = this.content;
	let timemout = 0;
	if (!this.isDeleting && this.content.length === currContent.length) {
		timemout = this.pauseSpeed;
		this.isDeleting = true;
	} else if (this.isDeleting && this.content === "") {
		this.isDeleting = false;
		timemout = this.pauseSpeed;
		this.i = (this.i + 1) % this.contents.length;
	} else {
		timemout = this.isDeleting ? this.deleteSpeed : this.writeSpeed;
	}
	if (this.stopped && this.content === "") {
		return;
	}
	setTimeout(() => {
		this.tick();
	}, timemout);
};
