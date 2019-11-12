describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy();
  });

  it('can land a plane', function() {
    expect(airport.land(plane)).toEqual(plane);
  });

  describe('taking off', function() {
    beforeEach(function() {
      airport.land(plane);
    });

    it('can take off a plane', function() {
      expect(airport.takeOff(plane)).toEqual(plane);
    });

    it('no longer has the plane', function() {
      airport.takeOff(plane);
      expect(airport._planes).not.toContain(plane);
    });
  });
});
