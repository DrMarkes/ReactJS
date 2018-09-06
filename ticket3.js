class Human {
	
  constructor(params) {
  	const { name, age, dateOfBirth } = params;
  	this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }
  
  displayInfo() {
  	const {
  	  name,
      age,
      dateOfBirth,
    } = this;
    
    return {
      name,
      age,
      dateOfBirth,
    };
  }
}

class Employee extends Human {

  constructor(params) {
  	super(params);
  	const { salary, department } = params;
  	this.salary = salary;
    this.department = department;
  }

  displayInfo() {
  	const {
      salary,
      department,
    } = this;
    
    return {
      ...super.displayInfo(),
      salary,
      department,
    };
  }
}

class Developer extends Employee {

  constructor(params) {
  	super(params);
  	this.manager = null;
  }

  addManager(manager) {
  	if (this.manager === manager) {
    	return this;
    }
    
    if (this.manager) {
    	this.manager.removeDeveloper(this);
    }
    
  	this.manager = manager;
    manager.addDeveloper(this);
    
    return this;
  }
  
  getManager() {
  	return this.manager;
  }
}


class Manager extends Employee {

  constructor(params) {
    super(params);
  	this.developers = [];
  }
  
  getDevelopers() {
  	return this.developers;
  }
  
  addDeveloper(developer) {
  	
  	if (this.developers.indexOf(developer) !== -1) {
    	return this;
    }
    
    this.developers.push(developer);
  	developer.addManager(this);
    
    return this;
  }
  
  removeDeveloper(developer) {
  	this.developers = this.developers.filter((item) => {
    	return developer !== item;
    });
  }
}


const developer1 = new Developer({
  name: 'Developer1',
  age: 33,
  dateOfBirth: '05-05-1985',
  salary: 5,
  department: 'department1',
});

const developer2 = new Developer({
  name: 'Developer2',
  age: 30,
  dateOfBirth: '05-05-1975',
  salary: 2,
  department: 'department2',
});

const manager1 = new Manager({
  name: 'Manager1',
  age: 21,
  dateOfBirth: '05-05-1965',
  salary: 20,
  department: 'department1',
});

const manager2 = new Manager({
  name: 'Manager2',
  age: 81,
  dateOfBirth: '05-05-1945',
  salary: 200,
  department: 'department2',
});


console.log('Developer1 displayInfo', developer1.displayInfo());
console.log('Developer2 displayInfo', developer2.displayInfo());
console.log('Manager1 displayInfo', manager1.displayInfo());
console.log('Manager2 displayInfo', manager2.displayInfo());

manager1.addDeveloper(developer1);
developer2.addManager(manager1);

console.log('manager1.addDeveloper(developer1);');
console.log('developer2.addManager(manager1);');

console.log('Developer1 getManager', developer1.getManager());
console.log('Manager1 getDevelopers', manager1.getDevelopers());

developer1.addManager(manager2);
console.log('developer1.addManager(manager2);');
console.log('Manager2 getDevelopers', manager2.getDevelopers());
console.log('Manager1 getDevelopers', manager1.getDevelopers());

