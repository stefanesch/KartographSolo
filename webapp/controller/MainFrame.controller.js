sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	

	return Controller.extend("KartographSolo.KartographSolo.controller.MainFrame", {
		
		onInit: function () {
			
			var Spielfeld = [11][11];
			for (var row = 0; row < 11; row++)
			{
				for ( var col = 0; col < 11; col++ )
				{
				    Spielfeld[row][col] = "leer";
				}
			}

		}
	});
});