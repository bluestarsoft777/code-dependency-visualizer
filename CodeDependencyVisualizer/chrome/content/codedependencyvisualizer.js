FBL.ns(function() { with (FBL) {

	var panelName = "CodeDependencyVisualizer";
	var panelTitle = "Code Dependencies";
	
	var InitializePlate = domplate(
	{
		InitializeTag:
			DIV({class: "default"},
					"The " + panelTitle + " panel has just been opened."
			)
	});
	
	/************************************************************
	 * 															*
	 * 					Module Implementation					*
	 *															*
	 ************************************************************/
	
	Firebug.CodeDependencyModule = extend(Firebug.Module,
		{
			showPanel: function(browser, panel)
			{				
				// Write a message when panel gets active
				context = Firebug.currentContext;
				
			    var panel = context.getPanel(panelName);
			    var parentNode = panel.panelNode;
			    var root = InitializePlate.InitializeTag.replace(
			        {}, parentNode, InitializePlate);
			}
		});	
	
	
	/************************************************************
	 * 															*
	 * 					Panel Implementation					*
	 *															*
	 ************************************************************/
	
	function CodeDependencyPanel() {}
	CodeDependencyPanel.prototype = extend(Firebug.Panel,
	{
		name: panelName,
		title: panelTitle,

		initialize: function() 
		{
			Firebug.Panel.initialize.apply(this, arguments);
		}
	});
	
	
	/************************************************************
	 * 															*
	 * 		Registering Panel, Module and CSS Styles			*
	 *															*
	 ************************************************************/
 
	Firebug.registerPanel(CodeDependencyPanel);
	Firebug.registerModule(Firebug.CodeDependencyModule);
	Firebug.registerStylesheet("chrome://codedependencyvisualizer/skin/style.css");
}});