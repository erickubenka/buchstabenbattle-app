import {WheelQuestion} from './wheel-question';

describe('WheelQuestion', () => {
  it('should create an instance', () => {
    expect(new WheelQuestion("F", "Auf welchen Teil des Fahrrads werden Mantel und Schlauch aufgezogen?", "Felge", false, false),
    ).toBeTruthy();
  });
});
