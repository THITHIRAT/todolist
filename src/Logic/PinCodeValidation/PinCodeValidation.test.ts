import pinCodeValidation from './PinCodeValidation';

describe('pinCodeValidation', () => {
  it('123456 should return false', () => {
    const reponse = pinCodeValidation(123456);
    expect(reponse).toBeFalsy();
  });

  it('172839 should return true', () => {
    const reponse = pinCodeValidation(172839);
    expect(reponse).toBeTruthy();
  });

  it('111822 should return false', () => {
    const reponse = pinCodeValidation(111822);
    expect(reponse).toBeFalsy();
  });

  it('112762 should return true', () => {
    const reponse = pinCodeValidation(112762);
    expect(reponse).toBeTruthy();
  });

  it('123743 should return false', () => {
    const reponse = pinCodeValidation(123743);
    expect(reponse).toBeFalsy();
  });

  it('321895 should return false', () => {
    const reponse = pinCodeValidation(321895);
    expect(reponse).toBeFalsy();
  });

  it('124578 should return true', () => {
    const reponse = pinCodeValidation(124578);
    expect(reponse).toBeTruthy();
  });

  it('112233 should return false', () => {
    const reponse = pinCodeValidation(112233);
    expect(reponse).toBeFalsy();
  });

  it('882211 should return false', () => {
    const reponse = pinCodeValidation(882211);
    expect(reponse).toBeFalsy();
  });

  it('887712 should return true', () => {
    const reponse = pinCodeValidation(887712);
    expect(reponse).toBeTruthy();
  });
});
