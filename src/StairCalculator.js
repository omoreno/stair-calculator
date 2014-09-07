window.StairCalculator = window.StairCalculator || {};

(function(StairCalculator, undefined) {
	
	function Calculator() {
		var calculator = {};

		var roundToTwoDecimals = function(number){
			return Math.round(number * Math.pow(10,2)) / Math.pow(10,2);
		};

		calculator.calculate = function(input){
			var result = {};
			result.stepRisers = Math.ceil(input.heigh / input.stepRise);
			result.steps = result.stepRisers - 1;
			result.stepRise = roundToTwoDecimals(input.heigh / result.stepRisers);
			result.stepRun = roundToTwoDecimals(64 - (2 * result.stepRise));
			result.length = result.steps * result.stepRun;
			
			return result;
		};

		return calculator;
	};
	
	StairCalculator.Factory = StairCalculator.Factory || { };
	StairCalculator.Factory.Calculator = Calculator;

}(window.StairCalculator));