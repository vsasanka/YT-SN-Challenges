var BaseDAL = Class.create();
BaseDAL.prototype = {
    initialize: function() {
    },

	insert: function(options, payload) {
        if (!options || !payload || !options.table) {
            return BaseDALMessages.REQUIRED_TABLE_AND_PAYLOAD;
        }

        var gr = new GlideRecord(options.table);
        for (var key in payload) {
            if (gr.isValidField(key)) {
                gr.setValue(key, payload[key]);
            }
        }
        return gr.insert();
    },

    query: function(options) {
        if (!options || !options.table) {
            return BaseDALMessages.REQUIRED_TABLE_AND_PAYLOAD;
        }

        var gr = new GlideRecord(options.table);
        if (options.encodedQuery) {
            gr.addEncodedQuery(options.encodedQuery);
        }
        gr.query();
        return gr;
    },

    update: function(options, payload) {
        var gr = this.query(options);
        while (gr.next()) {
            for (var key in payload) {
                if (gr.isValidField(key)) {
                    gr.setValue(key, payload[key]);
                }
            }
            gr.update();
        }
    },

    type: 'BaseDAL'
};
