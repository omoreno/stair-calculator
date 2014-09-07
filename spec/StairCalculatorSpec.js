describe("Stair Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = StairCalculator.Factory.Calculator();
  });

  it("rounds to next step rise on steps calculation", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.steps).toBe(14);
  });

  it("rounds to two decimal the step rise", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.stepRise).toBe(17.86);
  });

});