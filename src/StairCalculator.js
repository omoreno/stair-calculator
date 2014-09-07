window.StairCalculator = window.StairCalculator || {};

(function(StairCalculator, undefined) {
	
	function Calculator() {
		var calculator = {};
		calculator.calculate = function(input){
			var result = {};
			result.steps = Math.ceil(input.heigh / input.stepRise);
			return result;
		};

		return calculator;
	};
	
	StairCalculator.Factory = StairCalculator.Factory || { };
	StairCalculator.Factory.Calculator = Calculator;

}(window.StairCalculator));