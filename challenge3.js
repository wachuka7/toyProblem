//Write a program whose major task 
//is to calculate an individual’s Net Salary
// by getting the inputs of basic salary 
//and benefits. 
//Calculate the payee (i.e. Tax), 
//NHIF Deductions, 
//NSSF Deductions, 
//gross salary, and 
//net salary. 



function calculateNetSalary() {
    //a program to calculate the net salary after 
    //NSSF deduction, NHIF contribution and tax
    //the user is first prompted to input the basic salary
    let basicSalary = parseFloat(prompt("Enter the basic salary: "));
    
 //the user is then prompted to input the benefits
    let benefits = parseFloat(prompt("Enter the benefits: "));
//we calculate the gross salary by adding the benefits
    let grossSalary = basicSalary + benefits;
//then calculate the nhif deductions according to the gross salary
    let nhifDeduction = 0;

    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;    
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1500;            
    } else if (grossSalary>= 100000) {
        nhifDeduction = 1700;
    } else {
        alert("Invalid Input");
    }
//nssfDeduction is 6% of the gross salary
    let nssfDeduction = grossSalary * 0.06;
    
    // get the taxable income by deducting the nhif and nssf
    taxableIncome= grossSalary- (nssfDeduction+nhifDeduction);

    let tax = 0;
    let taxRate = 0;
//calculate tax according to the taxable income
    if (taxableIncome <= 24000) {
        taxRate = 0.1;
    } else if (taxableIncome <= 32333) {
        taxRate = 0.25;
    } else if (taxableIncome <= 500000) {
        taxRate = 0.30;
    } else if (taxableIncome <= 800000) {
        taxRate = 0.325;
    } else {
        taxRate = 0.35;
    } else if (taxableIncome >800000) {
        taxRate= 0.35;
    }
    else {
        alert("Invalid Input");

    tax = taxableIncome* (taxRate);
//calculation for gross salary 
    let netSalary = grossSalary - tax - nhifDeduction-nssfDeduction;
//sending an alert to the user that shows 
//Net Salary, 
//Tax,
//NHIF deductions,
//NSSF deductions and 
//Gross salary
//All the items in 2 decimals
    alert( "Gross Salary: " + grossSalary.toFixed(2) + " Ksh\n"+
          "Tax: " + tax.toFixed(2) + " Ksh\n" +
          "NHIF Deduction: " + nhifDeduction.toFixed(2) + " Ksh\n" +
          "NSSF Deduction: " + nssfDeduction.toFixed(2) + " Ksh\n" +
          "Net Salary: " + netSalary.toFixed(2) + " Ksh\n"
         );
}
//calling the fuction for calculating the net salary
calculateNetSalary();