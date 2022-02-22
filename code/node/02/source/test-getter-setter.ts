const bamboo = {
	info: {
		name: 'bamboo'
	},
	get name() {
		return this.info.name;
	},
	set name(val) {
		this.info.name = val;
	}
}

console.log(bamboo.name);
