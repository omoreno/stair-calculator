window.StairCalculator = window.StairCalculator || {};

(function(StairCalculator, undefined) {
	
	function Calculator() {
		var calculator = {};

		var roundToTwoDecimals = function(number){
			return Math.round(number * Math.pow(10,2)) / Math.pow(10,2);
		};

		calculator.calculate = function(input){
			var result = {};
			result.steps = Math.ceil(input.heigh / input.stepRise);
			result.stepRise = roundToTwoDecimals(input.heigh / result.steps);
			result.stepRun = roundToTwoDecimals(64 - (2 * result.stepRise));
			
			return result;
		};

		return calculator;
	};
	
	StairCalculator.Factory = StairCalculator.Factory || { };
	StairCalculator.Factory.Calculator = Calculator;

}(window.StairCalculator));