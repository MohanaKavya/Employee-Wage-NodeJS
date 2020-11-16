//UC_10 Using JS Objects to Store Working Days, Daily Working Hours and Daily Wage
    const IS_PART_TIME = 0;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NO_OF_WORKING_DAYS = 20;
    const MAX_HOURS_MONTHLY = 100;
    let employeeDailyHoursAndWageArray = new Array();

    function getWorkingHours(employeeCheck) {
        switch (employeeCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    function getWage(workingHours) {
        return workingHours * WAGE_PER_HOUR;
    }
    var employeeHours = 0;
    var employeeWorkingDays = 0;
    while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays <= NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let employeeCheck = Math.floor(Math.random() * 10) % 3;
        let employeeWorkingHours = getWorkingHours(employeeCheck);
        employeeHours += employeeWorkingHours;
        employeeDailyHoursAndWageArray.push(
            {
                dayCount: employeeWorkingDays,
                dailyHours: employeeWorkingHours,
                dailyWages: getWage(employeeWorkingHours),
                toString() {
                    return "\nDay" + this.dayCount + " => Working Hours is: " + this.dailyHours + " Wage earned = " + this.dailyWages
                },
            });
    }
    console.log("UC10 Showing daily hours worked and wage earned: " + employeeDailyHoursAndWageArray);

//UC11A - UC11D Using Object Functions along with Arrow Functions
let totalWageEarned = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWages > 0)
                                                    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWages, 0);
console.log("Total wage UC11A - " + totalWageEarned);
let totalHour = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
                                              .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("Total hours UC11A - " + totalHour);
process.stdout.write("11B- Logging Full Work Days");
employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).
forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDaysString = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
.map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n11C- Part Working Days" + partWorkingDaysString);

let noWorkingDays = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
.map(dailyHrsAndWage => dailyHrsAndWage.dayCount);
console.log("11D- Non working days: " + noWorkingDays); 

