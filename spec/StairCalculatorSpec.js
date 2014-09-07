describe("Stair Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = StairCalculator.Factory.Calculator();
  });

  it("rounds to next step rise on step rises calculation", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.stepRisers).toBe(14);
  });

  it("number of steps should be one less than step rises", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.steps).toBe(13);
  });

  it("rounds to two decimal the step rise", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.stepRise).toBe(17.86);
  });

  it("rounds to two decimal the step run", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.stepRun).toBe(28.28);
  });

  it("get total length", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.length).toBe(367.64);
  });

  it("get angle", function() {
    var input = { stepRise: 18, heigh: 250 };

    var result = calculator.calculate(input);
    
    expect(result.angle).toBe(32.27);
  });

});