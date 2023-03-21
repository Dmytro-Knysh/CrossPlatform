import { Sofa } from './sofa';

describe('Sofa testing', () => {
  let sofa:Sofa;
  beforeEach(() =>
  {
    sofa = new Sofa("Sofa", 13)
  }
  )
  it("Створення екземпляру класу", ()=>{
    expect(sofa).toBeTruthy();
  })
  it("Перевірка getPrice() для S = 13", ()=>{
    let price = Math.ceil(Math.pow(13, 2)/3 + 5000);
    expect(sofa.getPrice()).toBe(price);
  })
  it("Перевірка getName()", ()=>{
    expect(sofa.getName()).toBe("Sofa");
  })
  it("Перевірка show()", ()=>{
    expect(sofa.show()).toBe("Назва = " + "Sofa");
  })
});
