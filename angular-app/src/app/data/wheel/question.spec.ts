import {Question} from './question';

describe('WheelQuestion', () => {
  it('should create an instance', () => {
    expect(new Question("F", "Auf welchen Teil des Fahrrads werden Mantel und Schlauch aufgezogen?", "Felge", false, false),
    ).toBeTruthy();
  });
});
