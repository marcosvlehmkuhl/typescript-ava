import test from 'ava';

abstract class EmployeeType {
  static ENGINEER: number = 0;
  static SALESMAN: number = 1;
  static MANAGER: number = 2;

  abstract getTypeCode(): number;
  abstract payAmount(): number;

  static newType(type: number): EmployeeType {
    switch(type) {
      case EmployeeType.ENGINEER:
        return new Engineer();
      case EmployeeType.SALESMAN:
        return new Salesman();
      case EmployeeType.MANAGER:
        return new Manager();
      default:
        throw new Error('Incorrect Employee')
    }
  }
}

class Engineer extends EmployeeType {
  getTypeCode(): number {
    return EmployeeType.ENGINEER;
  }

  payAmount(): number {
    return 400;
  }
}

class Salesman extends EmployeeType {
  getTypeCode(): number {
    return EmployeeType.SALESMAN;
  }

  payAmount(): number {
    return 800;
  }
}

class Manager extends EmployeeType {
  getTypeCode(): number {
    return EmployeeType.MANAGER;
  }

  payAmount(): number {
    return 1200;
  }
}

class Employee {
  type: EmployeeType;
  constructor(type: number) {
    this.type = EmployeeType.newType(type)
  }

  getType(): number {
    return this.type.getTypeCode();
  }

  payAmount(): number {
    return this.type.payAmount()
  }
}

test('Employee', t => {
  const engineer = new Employee(0)
  const salesman = new Employee(1)
  const manager = new Employee(2)
  
  t.is(engineer.payAmount(), 400)
  t.is(salesman.payAmount(), 800)
  t.is(manager.payAmount(), 1200)
});