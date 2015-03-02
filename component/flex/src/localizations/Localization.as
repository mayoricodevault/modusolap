package localizations
{
	public class Localization
	{
		static public const ENG:int = 1; //English
		static public const ESP:int = 2; //Spanish
		static public const POR:int = 3; //Portuguese
		static public const CHN:int = 4; //Chinese
		
		// Menu
		[Bindable] static public var Connect:String = "Connect";
		[Bindable] static public var LocalCSV:String = "To local CSV";
		[Bindable] static public var LocalOCSV:String = "To local OCSV";
		[Bindable] static public var RemoteCSV:String = "To remote CSV";
		[Bindable] static public var OlapXMLA:String = "To OLAP (XMLA)";
		[Bindable] static public var Open:String = "Open";		
		[Bindable] static public var LocalReport:String = "Local report";
		[Bindable] static public var RemoteReport:String = "Remote report";
		[Bindable] static public var Save:String = "Save";
		[Bindable] static public var Grid:String = "Grid";
		[Bindable] static public var Charts:String = "Charts";
		[Bindable] static public var Bar:String = "Bar";
		[Bindable] static public var Line:String = "Line";
		[Bindable] static public var Scatter:String = "Scatter";
		[Bindable] static public var Pie:String = "Pie";
		[Bindable] static public var BarStack:String = "Bar stack";
		[Bindable] static public var BarLine:String = "Bar line";
		[Bindable] static public var MultipleValues:String = "Multiple values";
		[Bindable] static public var Format:String = "Format";
		[Bindable] static public var FormatCells:String = "Format cells";
		[Bindable] static public var ConditionalFormatting:String = "Conditional formatting";
		[Bindable] static public var Options:String = "Options";
		[Bindable] static public var Styles:String = "Styles";
		[Bindable] static public var Blueberry:String = "Blueberry";
		[Bindable] static public var Asphalt:String = "Asphalt";
		[Bindable] static public var Navy:String = "Navy";
		[Bindable] static public var Emerald:String = "Emerald";
		[Bindable] static public var Cocoa:String = "Cocoa";
		[Bindable] static public var Raspberry:String = "Raspberry";
		[Bindable] static public var FullScreen:String = "Full screen";
		[Bindable] static public var Zoom:String = "Zoom";
		[Bindable] static public var Export:String = "Export";
		[Bindable] static public var Print:String = "Print";
		[Bindable] static public var ToHTML:String = "To HTML";
		[Bindable] static public var ToCSV:String = "To CSV";
		[Bindable] static public var ToExcel:String = "To Excel";
		[Bindable] static public var ToImage:String = "To Image";
		[Bindable] static public var ToPDF:String = "To PDF";
		[Bindable] static public var Fields:String = "Fields";
		// General		
		[Bindable] static public var OK:String = "OK";
		[Bindable] static public var Apply:String = "Apply";
		[Bindable] static public var Cancel:String = "Cancel";
		[Bindable] static public var Value:String = "Value";
		// Connect		
		[Bindable] static public var LoadRemoteCSV:String = "Open remote CSV";
		[Bindable] static public var OlapConnectionTool:String = "OLAP Connection Tool";
		[Bindable] static public var SelectDataSource:String = "Select data source";
		[Bindable] static public var SelectCatalog:String = "Select catalog";
		[Bindable] static public var SelectCube:String = "Select cube";
		[Bindable] static public var ProxyUrl:String = "Proxy URL";
		[Bindable] static public var DataSourceInfo:String = "Data Source Info";
		[Bindable] static public var Catalog:String = "Catalog";
		[Bindable] static public var Cube:String = "Cube";
		[Bindable] static public var Credentials:String = "credentials";
		[Bindable] static public var Username:String = "Username";
		[Bindable] static public var Password:String = "Password";
		// Report
		[Bindable] static public var OpenRemoteReport:String = "Open remote report";
		// Format
		[Bindable] static public var Left:String = "left";
		[Bindable] static public var Right:String = "right";
		[Bindable] static public var ThousandsSeparator:String = "Thousands separator";
		[Bindable] static public var DecimalSeparator:String = "Decimal separator";
		[Bindable] static public var DecimalPlaces:String = "Decimal places";
		[Bindable] static public var CurrencySymbol:String = "Currency symbol";
		[Bindable] static public var CurrencySymbolAlign:String = "Currency symbol align";
		[Bindable] static public var NullSymbol:String = "Null symbol";
		[Bindable] static public var TextAlign:String = "Text align";
		[Bindable] static public var None:String = "None";
		[Bindable] static public var Space:String = "(Space)";
		// Conditional
		[Bindable] static public var AddCondition:String = "+ Add condition";
		[Bindable] static public var LessThan:String = "Less than";
		[Bindable] static public var GreaterThan:String = "Greater than";
		[Bindable] static public var LessThanOrEqualTo:String = "Less than or equal to";
		[Bindable] static public var GreaterThanOrEqualTo:String = "Greater than or equal to";
		[Bindable] static public var EquelTo:String = "Equal to";
		[Bindable] static public var Between:String = "Between";
		[Bindable] static public var And:String = "and";
		[Bindable] static public var NotEqualTo:String = "Not equal to";
		[Bindable] static public var AllValues:String = "All values";
		// Options
		[Bindable] static public var LayoutOptions:String = "Layout options";
		[Bindable] static public var GrandTotals:String = "Grand totals";
		[Bindable] static public var OffForRowsAndColumns:String = "Off for rows and columns";
		[Bindable] static public var OnForRowsAndColumns:String = "On for rows and columns";
		[Bindable] static public var OnForRowsOnly:String = "On for rows only";
		[Bindable] static public var OnForColumnsOnly:String = "On for columns only";
		[Bindable] static public var Subtotals:String = "Subtotals";
		[Bindable] static public var DoNotShowSubtotals:String = "Do not show subtotals";
		[Bindable] static public var ShowAllSubtotals:String = "Show all subtotals";
		// Export PDF
		[Bindable] static public var ChoosePageOrientation:String = "Choose page orientation";
		[Bindable] static public var Landscape:String = "Landscape";
		[Bindable] static public var Portrait:String = "Portrait";
		
		static public var localized:Boolean = false;
		
		public function Localization()
		{
		};
		
		public static function setLocalization():void{
			if (localized) return;
			
			localized = true;
			
			switch (AllInOneDemo.LOCALIZATION)
			{
				case ESP:
					// Menu
					Connect = "Conectar";
					LocalCSV = "A CSV (local)";
					LocalOCSV = "A OCSV (local)";
					RemoteCSV = "A CSV (URL)";
					OlapXMLA = "A OLAP (XMLA)";
					Open = "Abrir";
					LocalReport = "Informe local";
					RemoteReport = "URL del informe";
					Save = "Guardar\ninforme";
					Grid = "Vista de\ncuadrícula";
					Charts = "Gráficos";
					Bar = "Barras";
					Line = "Lineales";
					Scatter = "Dispersión";
					Pie = "Tarta";
					BarStack= "Barras\napiladas";
					BarLine= "Barras\lineales";
					MultipleValues = "Valores múltiples";
					Format = "Formato";
					FormatCells = "Aplicar formato a celdas";
					ConditionalFormatting = "Formato condicional";
					Options = "Totales";
					Styles = "Estilos";
					Blueberry = "Arándano";
					Asphalt = "Asfalto";
					Navy = "Azul marino";
					Emerald = "Esmeralda";
					Cocoa = "Cacao";
					Raspberry = "Frambuesa";
					FullScreen = "Pantalla completa";
					Zoom = "Zoom";
					Export = "Exportar";
					Print = "Imprimir";
					ToHTML = "A HTML";
					ToCSV = "A CSV";
					ToExcel = "A Excel";
					ToImage = "A Image";
					ToPDF = "A PDF";
					Fields = "Campos";
					// General
					Apply = "Aplicar";
					Cancel = "Cerrar";
					Value = "Valor";
					// Connect
					LoadRemoteCSV = "Cargar CSV";
					OlapConnectionTool = "Cargar OLAP";
					SelectDataSource = "Seleccionar el origen de datos";
					SelectCatalog = "Seleccionar catálogo";
					SelectCube = "Seleccione cubo";
					ProxyUrl = "URL del proxy";
					DataSourceInfo = "Información sobre las origen de datos";
					Catalog = "Catálogo";
					Cube = "Cubo";
					Credentials = "credenciales";
					Username = "Nombre de usuario";
					Password = "Contraseña";
					// Report
					OpenRemoteReport = "Abrir archivo de la Web";
					// Format
					Left = "izquierda";
					Right = "derecha";
					ThousandsSeparator = "Separador de millar";
					DecimalSeparator = "Separador decimal";
					DecimalPlaces = "Cifras decimales";
					CurrencySymbol = "Símbolo de divisa";
					CurrencySymbolAlign = "Alineación de símbolo de divisa";
					NullSymbol = "Símbolo nulo";
					TextAlign = "Alineación del texto";
					None = "None";
					Space = "(Space)";
					// Conditional
					AddCondition = "+ Añadir condición";
					LessThan = "Menor que";
					GreaterThan = "Mayor que";
					LessThanOrEqualTo = "Menor que o igual a";
					GreaterThanOrEqualTo = "Mayor que o igual a";
					EquelTo = "Igual a";
					Between = "Entre";
					And = "y";
					NotEqualTo = "Distinto de";
					AllValues = "Todos los valores";
					// Options
					LayoutOptions = "Opciones de disposición";
					GrandTotals = "Totales globales";
					Subtotals = "Subtotales";
					OffForRowsAndColumns = "Desactivado para filas y columnas";
					OnForRowsAndColumns = "Activado para filas y columnas";
					OnForRowsOnly = "Activado solo para filas";
					OnForColumnsOnly = "Activado solo para columnas";
					DoNotShowSubtotals = "No mostrar subtotales";
					ShowAllSubtotals = "Mostrar todos los subtotales";
					// Export PDF
					ChoosePageOrientation = "Elija la orientación de página";
					Landscape = "Del paisaje";
					Portrait = "De retrato";
				break;
				case POR:
					// Menu
					Connect = "Conectar";
					LocalCSV = "Arquivo local CSV";
					LocalOCSV = "Arquivo local OCSV";
					RemoteCSV = "Arquivo remoto CSV";
					OlapXMLA = "OLAP (XMLA)";
					Open = "Abrir";
					LocalReport = "Relatório local";
					RemoteReport = "Relatório remoto";
					Save = "Salvar";
					Grid = "Tabela";
					Charts = "Gráficos";
					Bar = "Barras";
					Line = "Linhas";
					Scatter = "Dispersão";
					Pie = "Pizza";
					BarStack = "Barra empilhado";
					BarLine = "Barra / linha";
					MultipleValues = "Vários valores";
					Format = "Formato";
					FormatCells = "Formatar células";
					ConditionalFormatting = "Formatação condicional";
					Options = "Opções";
					Styles = "Estilos";
					Blueberry = "Blueberry";
					Asphalt = "Asphalt";
					Navy = "Navy";
					Emerald = "Emerald";
					Cocoa = "Cocoa";
					Raspberry = "Raspberry";
					FullScreen = "Tela cheia";
					Zoom = "Zoom";
					Export = "Exportar";
					Print = "Imprimir";
					ToHTML = "Para HTML";
					ToCSV = "Para CSV";
					ToExcel = "Para Excel";
					ToImage = "Para Image";
					ToPDF = "Para PDF";
					Fields = "Campos";
					// General
					Apply = "Aplicar";
					Cancel = "Cancelar";
					Value = "Valor";
					// Connect
					LoadRemoteCSV = "Abrir CSV remoto";
					OlapConnectionTool = "Ferramenta conexão OLAP";
					SelectDataSource = "Selecionar fonte de dados";
					SelectCatalog = "Selecionar catálogo";
					SelectCube = "Selecionar cubo";
					ProxyUrl = "URL Proxy";
					DataSourceInfo = "Informações da fonte de dados";
					Catalog = "Catálogo";
					Cube = "Cubo";
					Credentials = "credenciais";
					Username = "Nome de usuário";
					Password = "Senha";
					// Report
					OpenRemoteReport = "Abrir relatório remoto";
					// Format
					Left = "esquerda";
					Right = "direita";
					ThousandsSeparator = "Separador milhar";
					DecimalSeparator = "Separador decimal";
					DecimalPlaces = "Quantde decimais";
					CurrencySymbol = "Símbolo moeda";
					CurrencySymbolAlign = "Alinhamento moeda";
					NullSymbol = "Valor nulo";
					TextAlign = "Alinhamento";
					None = "Nenhum";
					Space = "(Espaço)";
					// Conditional
					AddCondition = "+ Adicionar condição";
					LessThan = "Menor que";
					GreaterThan = "Maior que";
					LessThanOrEqualTo = "Menor igual que";
					GreaterThanOrEqualTo = "Maior igual que";
					EquelTo = "Igual";
					Between = "Entre";
					And = "e";
					NotEqualTo = "Diferente de";
					AllValues = "Todos valores";
					// Options
					LayoutOptions = "Opções de Layout";
					GrandTotals = "Totais gerais";
					Subtotals = "Subtotais";
					OffForRowsAndColumns = "Desligado para linhas e colunas";
					OnForRowsAndColumns = "Ligado para linhas e colunas";
					OnForRowsOnly = "Ligado apenas para linhas";
					OnForColumnsOnly = "Ligado apenas para colunas";
					DoNotShowSubtotals = "Não exibir subtotais";
					ShowAllSubtotals = "Exibir todos os subtotais";
					// Export PDF
					ChoosePageOrientation = "Orientação da página";
					Portrait = "Retrato";
					Landscape = "Paisagem";
				break;
				case CHN:
					// Menu
					Connect = "连接";
					LocalCSV = "CSV (本地)";
					LocalOCSV = "OCSV (本地)";
					RemoteCSV = "CSV (URL)";
					OlapXMLA = "OLAP (XMLA)";
					Open = "打开";
					LocalReport = "本地报告";
					RemoteReport = "报告URL";
					Save = "保存";
					Grid = "数据网格";
					Charts = "图表";
					Bar = "柱状图";
					Line = "拆线图";
					Scatter = "分部图";
					Pie = "饼图";
					BarStack = "柱状面积图";
					BarLine = "柱状拆线图";
					MultipleValues = "多值比较";
					Format = "格式";
					FormatCells = "单元格格式";
					ConditionalFormatting = "条件格式";
					Options = "选项";
					Styles = "风格";
					Blueberry = "蓝莓";
					Asphalt = "沥青";
					Navy = "深蓝色";
					Emerald = "翠";
					Cocoa = "可可";
					Raspberry = "覆盆子";
					FullScreen = "全屏";
					Zoom = "缩放";
					Export = "输出";
					Print = "打印";
					ToHTML = "生成HTML";
					ToCSV = "生成CSV";
					ToExcel = "生成Excel";
					ToImage = "生成图片";
					ToPDF = "生成PDF";
					Fields = "数据";
					// General
					OK = "是";
					Apply = "设置";
					Cancel = "取消";
					Value = "值";
					// Connect
					LoadRemoteCSV = "载入CSV";
					OlapConnectionTool = "载入OLAP";
					SelectDataSource = "选择数据源";
					SelectCatalog = "选择目录";
					SelectCube = "选择多维数据集";
					ProxyUrl = "代理URL";
					DataSourceInfo = "数据源信息";
					Catalog = "目录";
					Cube = "立方体";
					Credentials = "证书";
					Username = "用户名";
					Password = "密码";
					// Report
					OpenRemoteReport = "打开网络文件";
					// Format
					Left = "左";
					Right = "右";
					ThousandsSeparator = "千分位（，）";
					DecimalSeparator = "小数点分隔符";
					DecimalPlaces = "小数位数";
					CurrencySymbol = "货币符号";
					CurrencySymbolAlign = "货币符号位置";
					NullSymbol = "空值标志";
					TextAlign = "文本对齐";
					None = "无";
					Space = "(空)";
					// Conditional
					AddCondition = "+ 添加条件";
					LessThan = "小于";
					GreaterThan = "大于";
					LessThanOrEqualTo = "小于等于";
					GreaterThanOrEqualTo = "大于等于";
					EquelTo = "等于";
					Between = "之间";
					And = "和";
					NotEqualTo = "不等于";
					AllValues = "所有的值";
					// Options
					LayoutOptions = "布局选项";
					GrandTotals = "总计";
					Subtotals = "小计";
					OffForRowsAndColumns = "行和列不显示";
					OnForRowsAndColumns = "行和列显示";
					OnForRowsOnly = "只有行显示";
					OnForColumnsOnly = "只有列显示";
					DoNotShowSubtotals = "不显示小计";
					ShowAllSubtotals = "显示所有小计";
					// Export PDF
					ChoosePageOrientation = "输出水平";
					Landscape = "风景";
					Portrait = "人像";
				break;
			}
			
		}
	}
}