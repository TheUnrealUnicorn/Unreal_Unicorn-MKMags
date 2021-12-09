exports.mod = (mod_data) => {
    let base = fileIO.readParsed(global.db.user.cache.items);

    for (let file in base.data) {
        let fileData = base.data[file];
        if (fileData._id === "5fc22d7c187fea44d52eda44") {
            fileData._props.Slots[1]._props.filters[0].Filter.push("mk25");
        }
    }
	
	    for (let file in base.data) {
        let fileData = base.data[file];
        if (fileData._id === "5fc22d7c187fea44d52eda44") {
            fileData._props.Slots[1]._props.filters[0].Filter.push("mk50");
        }
    }
    fileIO.write(global.db.user.cache.items, base);
    logger.logSuccess(`[MOD] MKMags Applied`);
}