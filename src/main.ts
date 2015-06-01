import capacitor = require('capacitor');

capacitor.invariant(true);

class MyStore extends capacitor.IndexedListStore {
	constructor() {
		super();
	}
}