sap.ui.jsview("service_denme.page", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf service_denme.page
	*/ 
	getControllerName : function() {
		return "service_denme.page";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf service_denme.page
	*/ 
	createContent : function(oController) {
oTable = new sap.ui.table.Table({
	title: "aktivite rapor",
	visibleRowCount: 8,
	selectionMode: sap.ui.table.SelectionMode.Single
});
oCol1 = new sap.ui.table.Column({
	label : new sap.ui.commons.Label({text: "Aktivite"}),
	template: new sap.ui.commons.TextView().bindProperty("text", "Aktvt")
});

oTable.addColumn(oCol1);

var sServiceUrl = "proxy/http/s4hana.sapanka.local:8000/sap/opu/odata/SAP/Z_AKTIVITE_FIORI_RAPOR_SRV/";
oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, false);
oTable.setModel(oModel);
oTable.bindRows("/ItResultTableSet");
return oTable;
	}

});
