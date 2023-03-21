import { Furniture } from './furniture';
import { Wardrobe } from './wardrobe';

describe ('Wardrobe Testing', () =>{
  let wardrobe:Wardrobe;
  beforeEach(() =>
  {
    wardrobe = new Wardrobe("Wardrobe", 13)
  }
  )
  it("Створення екземпляру класу", ()=>{
    expect(wardrobe).toBeTruthy();
  })
  it("Перевірка getPrice() для V = 13", ()=>{
    let price = 13*75;
    expect(wardrobe.getPrice()).toBe(price);
  })
  it("Перевірка getName()", ()=>{
    expect(wardrobe.getName()).toBe("Wardrobe");
  })
  it("Перевірка show()", ()=>{
    expect(wardrobe.show()).toBe("Назва = " + "Wardrobe");
  })
});
