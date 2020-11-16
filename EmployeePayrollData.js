class EmployeePayRollData {

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() { return this._name; }
    set name(name) {  
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) {
        this._name = name;
    }
    else throw 'Name Is Incorrect';
} 
    get id() { return this._id; }
    set id(id) {  
        if (id>0) {
        this._id = id;
    }
    else throw 'id Is Incorrect';
    } 
    get salary() { return this._salary; }
    set salary(salary) {  
        if (salary>0) {
        this._salary = salary;
    }
    else throw 'Salary Is Incorrect';
    } 
    get gender() { return this._gender; }
    set gender(gender) {  
        let genderRegex = RegExp('^[MFmf]{1}$');
        if (genderRegex.test(gender)) {
        this._gender = gender;
    }
    else throw 'Gender Is Incorrect';
    } 
    get startDate() { return this._startDate; }
    set startDate(startDate) {  
        if (startDate<=new Date()) {
        this._startDate = startDate;
    }
    else throw 'Start Date Is Incorrect';
    }

    //method 
    toString() {
        const options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", start date = " + empDate;
    }   
 }


//Check Name
try {
    let newEmployeePayrollData2 = new EmployeePayRollData(1, "Ter", 30000, "F", new Date());
    console.log(newEmployeePayrollData2.toString());
} catch (e) {
    console.error(e);
}

//Check Id
try {
    let newEmployeePayRollData3 = new EmployeePayRollData(0, "Mark", 2000, "F", new Date());
    console.log(newEmployeePayRollData3.toString());
} catch (e) {
    console.error(e);
}
//Check Salary
try {
    let newEmployeePayrollData3 = new EmployeePayRollData(2, "Mark", 0, "F", new Date());
    console.log(newEmployeePayrollData3.toString());
 } catch (e) {
    console.error(e);
}
//Check Gender
try {
    let newEmployeePayrollData3 = new EmployeePayRollData(2, "Mark", 2000, "K", new Date());
    console.log(newEmployeePayrollData3.toString());
} catch (e) {
    console.error(e);
}

//Check Date
try {
    let newEmployeePayrollData3 = new EmployeePayRollData(2, "Mark", 2000, "M", new Date('2021-04-11T10:20:30Z'));
    console.log(newEmployeePayrollData3.toString());
} catch (e) {
    console.log(e);
} 