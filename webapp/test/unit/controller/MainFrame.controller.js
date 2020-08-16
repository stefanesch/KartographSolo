/*global QUnit*/

sap.ui.define([
	"KartographSolo/KartographSolo/controller/MainFrame.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MainFrame Controller");

	QUnit.test("I should test the MainFrame controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});