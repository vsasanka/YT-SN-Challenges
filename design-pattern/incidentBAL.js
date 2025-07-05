var IncidentBAL = Class.create();
IncidentBAL.prototype = {

	initialize: function() {
        this.dal = new BaseDAL();
        this.options = new IncidentOption();
    },

    createBasicIncident: function() {
        var config = this.options.getInsertBasic();
        return this.dal.insert(config.options, config.payload);
    },

    updateAllSampleIncidents: function() {
        var options = {
            table: 'incident',
            encodedQuery: 'short_description=Sample Incident'
        };
        var payload = {
            state: 2 // In Progress
        };
        this.dal.update(options, payload);
    },

    type: 'IncidentBAL'
};
