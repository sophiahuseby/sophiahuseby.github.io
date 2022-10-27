const employees = [

        {
            name : "Sam",
            department : "Tech",
            designation : "Manager",
            salary : "400000",
            raise : "true"
        },
    
        {
            name : "Mary",
            department : "Finance",
            designation : "Trainee",
            salary : "18500",
            raise : "true"
        },
    
        {
            name : "Bill",
            department : "HR",
            designation : "Executive",
            salary : "21200",
            raise : "false"
        }
    ];

console.log("Problem 1", [Sam, Mary, Bill]);

const company = {
    companyName : "Tech Stars",
    website : "www.techstars.site",
    employees : [Sam, Mary, Bill],
};

console.log("Problem 2", company);


company.employees.push({
    name : "Anna",
    department : "Tech",
    designation : "HR",
    salary : "25600",
    raise : "false"
});

console.log("Problem 3", company);


let sum = 0;
for (let i = 0; i < company.employees.length; i ++){
    sum += company.employees[i].salary;
}

console.log("Problem 4", sum);


for (let i = 0; i < company.employees.length; i ++){
    if(company.employees[i].raise){
        company.employees[i].salary *= 1.1;
        company.employees[i].raise = false;
    }
}

console.log("Problem 5", company);


const workHomeEmployees = ['Anna', 'Sam'];

for (var i = 0; i < company.employees.length; i ++){
    company.employees[i].workHome = workHomeEmployees.includes(company.employees[i].name);
}

console.log("Problem 6", company);