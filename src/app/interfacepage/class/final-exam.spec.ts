import { Exam } from './exam';
import { FinalExam } from './final-exam';
import { Test } from './test';
import { Trial } from './trial';

describe('FinalExam', () => {
  let exam: Exam;
  let exam1: FinalExam;
  let test: Test;
  let trial: Trial; 
  beforeEach(() => {
    exam = new Exam("Кросс платформна розробка");
    exam1 = new FinalExam("Архітектура IC");
    test = new Test();
    trial = new Trial();
  })
  it("Створення екземпляру класу Exam", () => {
    expect(exam).toBeTruthy();
  })
  it("Створення екземпляру класу FinalExam", () => {
    expect(exam1).toBeTruthy();
  })
  it("Створення екземпляру класу Test", () => {
    expect(test).toBeTruthy();
  })
  it("Створення екземпляру класу Trial", () => {
    expect(trial).toBeTruthy();
  })
});
