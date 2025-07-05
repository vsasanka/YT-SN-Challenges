var IncidentOption = Class.create();
IncidentOption.prototype = {
    initialize: function() {
    },

	getInsertBasic: function() {
        return {
            options: {
                table: 'incident'
            },
            payload: {
                short_description: 'Sample Incident',
                description: 'Created using DAL-BAL pattern',
                category: 'inquiry',
                impact: 3,
                urgency: 3
            }
        };
    },

    type: 'IncidentOption'
};
