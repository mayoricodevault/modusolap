package
{
	import com.flexmonster.pivot.FlexPivotComponent;
	import com.flexmonster.pivot.model.export.ExportType;
	import com.flexmonster.pivot.model.report.DestinationType;
	import com.flexmonster.pivot.view.ViewType;
	import com.flexmonster.pivot.view.charts.ChartType;
	import com.flexmonster.pivot.view.grid.vo.PivotGridCell;
	import com.flexmonster.pivot.vo.ConditionValueObject;
	import com.flexmonster.pivot.vo.ConnectionParams;
	import com.flexmonster.pivot.vo.FormatValueObject;
	import com.flexmonster.pivot.vo.OptionsValueObject;
	
	import localizations.Localization;
	
	import mx.collections.ArrayCollection;
	import mx.collections.ArrayList;
	import mx.core.IFlexDisplayObject;
	import mx.managers.PopUpManager;
	
	import type.ReportType;
	
	import view.ToolbarView;
	import view.window.ConditionalFormattingWindow;
	import view.window.ConnectionWindow;
	import view.window.FormatCellsWindow;
	import view.window.LayoutOptionsWindow;
	import view.window.PageOrientationWindow;
	import view.window.RemoteCSVWindow;
	import view.window.RemoteReportWindow;

	public class Model
	{
		static private var instance:Model;
		
		public var pivot:FlexPivotComponent;
		public var application:AllInOneDemo;
		
		public function Model()
		{
			if(instance)throw("Use getInstance() method");
		}

		/**
		 * 
		 *  New Report
		 * 
		 **/
		
		public function newReport(type:String = ""):void
		{
			if(!pivot) return;
			
			var window:*;
			
			var connectionParams:ConnectionParams;
			
			switch(type)
			{
				case ReportType.NEW_LOCAL_CSV:
					connectionParams = new ConnectionParams();
					connectionParams.dataSourceType = "CSV";
					connectionParams.browseForFile = true;
					this.pivot.connectTo(connectionParams);
					break;
				case ReportType.NEW_LOCAL_OCSV:
					connectionParams = new ConnectionParams();
					connectionParams.dataSourceType = "OCSV";
					connectionParams.browseForFile = true;
					this.pivot.connectTo(connectionParams);
					break;
				case ReportType.NEW_REMOTE_CSV:
					window = new RemoteCSVWindow();
					window.onApplyCallback = onRemoteCSVApply;
					this.addPopUp(window);
					break;
				case ReportType.NEW_OLAP:
					window = new ConnectionWindow();
					window.pivot = this.pivot;
					this.addPopUp(window);
					break;
			}
		}
		
		private function onRemoteCSVApply(url:String):void
		{
			var connectionParams: ConnectionParams = new ConnectionParams();
			connectionParams.dataSourceType = "CSV";
			connectionParams.filename = url;
			this.pivot.connectTo(connectionParams);
		}
		
		/**
		 * 
		 *  Open Report
		 * 
		 **/
		
		public function openReport(type:String):void
		{
			if(!pivot) return;
			
			switch(type)
			{
				case ReportType.OPEN_LOCAL:
					this.pivot.open();
					break;
				case ReportType.OPEN_REMOTE:
					var window:RemoteReportWindow = new RemoteReportWindow();
					window.onOpenCallback = loadReport;
					this.addPopUp(window);
					break;
			}
		}
		
		public function loadReport(url:String):void
		{
			this.pivot.load(url);
		}
		
		/**
		 * 
		 *	Save Report
		 * 
		 **/
		
		public function saveReport():void
		{
			if(!pivot) return;
			
			this.pivot.save("report.xml", DestinationType.FILE);
		}
		
		/**
		 * 
		 * 	Grid & Charts views
		 * 
		 **/
		
		public function switchView(type:String):void
		{
			if(!pivot) return;
			if(type == ViewType.GRID)
			{
				this.pivot.showGrid();
			}
			else if(ChartType.validType(type))
			{
				var multiple:Boolean = this.pivot.getOptions().chartMultipleMeasures;
				this.pivot.showCharts(type, multiple);
			}
		}
		
		public function chartsMultipleHandler(item:Object):void {
			if(!pivot) return;
			var type:String = this.pivot.getOptions().chartType;
			var multiple:Boolean = !this.pivot.getOptions().chartMultipleMeasures;
			item.icon = multiple ? ToolbarView.iconCbxSelected : ToolbarView.iconCbxUnselected;
			application.toolbarView.tabCharts.refreshItem(item);
			this.pivot.showCharts(type, multiple);
		}
		
		/**
		 * 
		 *	Format Cells 
		 * 
		 **/
		
		public function setCellsFormat():void
		{
			if(!pivot) return;
			var cell:PivotGridCell = this.pivot.getSelectedCell();
			
			var measures:ArrayCollection = new ArrayCollection(this.pivot.getMeasures());
			var measure:Object = (cell) 
				? cell.measure
				: measures.length > 0 ? measures.getItemAt(0) : null;
			var window:FormatCellsWindow = new FormatCellsWindow();
			if (measure){
				window.measureName = measure.caption;
				window.measureUniqueName = measure.uniqueName;
				window.measureFormat = this.pivot.getFormat(measure.uniqueName);
			} else {
				window.measureName = null;
				window.measureUniqueName = null;
				window.measureFormat = null;
			}
			window.onApplyCallback = onFormatCellsApply;
			this.addPopUp(window);
			window.measuresList = measures;
		}
		
		private function onFormatCellsApply(formatVO:FormatValueObject,measureName:String = null):void
		{
			var measureUniqueName:String = (measureName)?measureName:this.pivot.getSelectedCell().measure.uniqueName;
			this.pivot.setFormat(formatVO, measureUniqueName);
			this.pivot.refresh();
		}
		
		/**
		 * 
		 *	Layout options 
		 * 
		 **/
		
		public function setLayoutOptions():void
		{
			if(!pivot) return;
			
			var options:Object = this.pivot.getOptions();
			var window:LayoutOptionsWindow = new LayoutOptionsWindow();
			window.showGrandTotals = options.showGrandTotals;
			window.showTotals = options.showTotals;
			window.onApplyCallback = onLayoutOptionsApply;
			this.addPopUp(window);
		}
		
		private function onLayoutOptionsApply(showGrandTotals:String, showTotals:Boolean):void
		{
			if(!pivot) return;
			
			var options:OptionsValueObject = new OptionsValueObject();
			options.showGrandTotals = showGrandTotals;
			options.showTotals = showTotals;
			this.pivot.setOptions(options);
			this.pivot.refresh();
		}
		
		/**
		 * 
		 * Conditional Formatting
		 * 
		 **/
		
		public function setConditionalFormatting():void
		{
			if(!pivot) return;
			
			var conditionsArray:Array = this.pivot.getAllConditions();
			var measures:ArrayList = new ArrayList(this.pivot.getMeasures());
			var window:ConditionalFormattingWindow = new ConditionalFormattingWindow();
			window.measures = measures;
			window.addConditionHandler = this.pivot.addCondition;
			window.refreshHandler = this.pivot.refresh;
			window.removeAllHandler = this.pivot.removeAllConditions;
			
			for(var i:int = 0; i < conditionsArray.length; i++)
			{
				var conditionVO:ConditionValueObject = conditionsArray[i];
				if(!conditionVO.trueStyle) continue;
				var formula:Object = parseFormula(conditionVO.formula);
				var condition:Object = conditionVO.toObject();
				condition.value1 = formula.value1;
				condition.value2 = formula.value2;
				condition.sign = formula.sign;
				window.addCondition(condition);
			}
			
			this.addPopUp(window);
		}
		
		private static function parseFormula(formula:String):Object
		{
			var parseNumber:RegExp = /\W\d+\.*\d*/g;
			var parseSign:RegExp = /<=|>=|<|>|=|=|!=/g;
			var numbers:Array = String(formula).match(parseNumber);
			var signs:Array = String(formula).match(parseSign);
			
			return {
				value1: numbers[0].toString().replace(/\s/, ''),
				value2: (numbers.length > 1) ? numbers[1].toString().replace(/\s/, '') : '',
				sign: signs.join('')
			};
		}
		
		/**
		 * 
		 *	Styles 
		 * 
		 **/
		
		public function setStyle(styleName:String):void
		{
			if(!pivot) return;
			
			switch(styleName) {
				case Localization.Cocoa:
					this.application.styleManager.loadStyleDeclarations('css/flex_cocoa.swf');
					this.pivot.setStyleSheet({
						backgroundColor: "#FFFFFF",
						backgroundAlpha: 1,
						borderColor: "#77604a",
						color: "#000",
						fontSize: 11,
						fontFamily: "Lucida Sans Unicode"
					});
					this.pivot.refresh();
					break;
				case Localization.Navy:
					this.application.styleManager.loadStyleDeclarations('css/flex_navy.swf');
					this.pivot.setStyleSheet({
						backgroundColor: "#FFFFFF",
						backgroundAlpha: 1,
						borderColor: "#5b6c8f",
						color: "#444659",
						fontSize: 11,
						fontFamily: "Lucida Sans Unicode"
					});
					this.pivot.refresh();
					break;
				case Localization.Emerald:
					this.application.styleManager.loadStyleDeclarations('css/flex_emerald.swf');
					this.pivot.setStyleSheet({
						backgroundColor: "#FFFFFF",
						backgroundAlpha: 1,
						borderColor: "#4c7e4e",
						color: "#000",
						fontSize: 11,
						fontFamily: "Lucida Sans Unicode"
					});
					this.pivot.refresh();
					break;
				case Localization.Blueberry:
					this.application.styleManager.loadStyleDeclarations('css/flex_blueberry.swf');
					this.pivot.setStyleSheet({
						backgroundColor: "#FFFFFF",
						backgroundAlpha: 1,
						borderColor: "#444659",
						color: "#272835",
						fontSize: 11,
						fontFamily: "Lucida Sans Unicode"
					});
					this.pivot.refresh();
					break;
				case Localization.Raspberry:
					this.application.styleManager.loadStyleDeclarations('css/flex_raspberry.swf');
					this.pivot.setStyleSheet({
						backgroundColor: "#FFFFFF",
						backgroundAlpha: 1,
						borderColor: "#963f3f",
						color: "#000",
						fontSize: 11,
						fontFamily: "Lucida Sans Unicode"
					});
					this.pivot.refresh();
					break;
				case Localization.Asphalt:
					this.application.styleManager.loadStyleDeclarations('css/flex_asphalt.swf');
					this.pivot.setStyleSheet({
						backgroundColor: "#FFFFFF",
						backgroundAlpha: 1,
						borderColor: "#999999",
						color: "#555555",
						fontSize: 11,
						fontFamily: "Lucida Sans Unicode"
					});
					this.pivot.refresh();
					break;
				default:
					break;
			}
		}
		
		private var currentActiveWindow:IFlexDisplayObject;
		private function addPopUp(window:IFlexDisplayObject):void
		{
			if (currentActiveWindow) this.removePopUp(currentActiveWindow);
			
			currentActiveWindow = window;
			PopUpManager.addPopUp(window, application);
			PopUpManager.centerPopUp(window);
		}
		
		private function removePopUp(window:IFlexDisplayObject):void
		{
			PopUpManager.removePopUp(window);
		}
		
		/**
		 * 
		 * 	Fields list
		 * 
		 **/
		
		public function showFieldsList(value:Boolean = true):void
		{
			if(!pivot) return;
			
			if (value) {
				this.pivot.openFieldsList();
			} else {
				this.pivot.closeFieldsList();
			}
		}
		
		/**
		 * 
		 * 	Export
		 * 
		 **/
		
		public function exportReport(type:String):void {
			if(!pivot) return;
			
			if(type == "print") {
				this.pivot.print();	
			} else if(ExportType.validType(type)) {
				if (type == ExportType.PDF) {
					var window:PageOrientationWindow = new PageOrientationWindow();
					window.onApplyCallback = this.pivot.export;
					this.addPopUp(window);
				} else {
					this.pivot.export(type);
				}
			}
		}
		
		/**
		 * 
		 * 	Zoom
		 * 
		 **/
		
		public function zoom(value:Number):void
		{
			if(!pivot) return;
			
			this.pivot.zoom(value * 0.01);
		}
		
		/**
		 * 
		 * 	Full screen
		 * 
		 **/
		
		public function fullScreen():void
		{
			if(!pivot) return;
			
			this.application.toggleFullScreen();
		}
		
		/**
		 * 
		 *	Other methods 
		 * 
		 **/
		
		static public function getInstance():Model
		{
			if(instance == null) instance = new Model();
			
			return instance;
		}
	}
}