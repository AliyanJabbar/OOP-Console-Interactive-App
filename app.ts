#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Teacher {
    name: string;
    constructor(name: string) {
          this.name = name;
        }
      }
    
      class Student {
          name: string;
          constructor(name: string) {
              this.name = name;
        }
      }
    
      class Person {
        teachers: Teacher[] = [];
        
        students: Student[] = [];
        
        addTeacher(teacher: Teacher) {
          this.teachers.push(teacher);
        }
    
        addStudent(student: Student) {
          this.students.push(student);
        }
    }
    
    let person = new Person();
console.log(chalk.green("~".repeat(125)))
console.log(chalk.yellow("-".repeat(48)),chalk.bold.magenta("OOP CONSOLE INTERACTIVE APP"),chalk.yellow("-".repeat(48)))
console.log(chalk.yellow("-".repeat(52)),chalk.red("MADE BY"),chalk.italic.red("ALIYAN KHAN"),chalk.yellow("-".repeat(52)))
console.log(chalk.green("~".repeat(125)))
    while(true){
    
      let user = await inquirer.prompt({
        type: "list",
        message: chalk.bold.yellow("WHAT WOULD YOU LIKE TO DO?"),
        name: "select",
        choices: ["INTERACT WITH TEACHER", "INTERACT WITH STUDENT", "EXIT"],
      });
    
      if (user.select === "INTERACT WITH TEACHER") {
        let user = await inquirer.prompt({
          type: "input",
          message: chalk.bold.yellow(
            "WRITE THE TEACHER'S NAME YOU LIKE TO INTERACT WITH..."
          ),
          name: "data",
        });
    
        let teacher = person.teachers.find((val) => val === user.data.toUpperCase());
    
        if (!teacher) {
          person.addTeacher(user.data.toUpperCase());
          console.log(
            chalk.bold.green(`TEACHER ${user.data.toUpperCase()} HAS BEEN ADDED SUCCESSFULLY!!!`)
          );
          console.log(person.teachers);
          console.log(
            chalk.bold.blue(`HELLO! I AM ${user.data.toUpperCase()}. NICE TO MEET YOU!`)
          );
        }else {
          console.log(
            chalk.bold.blue(`HELLO! I AM ${user.data.toUpperCase()}. NICE TO MEET YOU!`)
          );
        }
      }
      if (user.select === "INTERACT WITH STUDENT") {
        let user = await inquirer.prompt({
          type: "input",
          message: chalk.bold.yellow(
            "WRITE THE STUDENT'S NAME YOU LIKE TO INTERACT WITH..."
          ),
          name: "data",
        });
    
        let student = person.students.find((val) => val === user.data.toUpperCase());
    
        if (!student) {
          person.addStudent(user.data.toUpperCase());
          console.log(
            chalk.bold.green(`STUDENT ${user.data.toUpperCase()} HAS BEEN ADDED SUCCESSFULLY!!!`)
          );
          console.log(person.students);
          console.log(
            chalk.bold.blue(`HELLO! I AM ${user.data.toUpperCase()}. NICE TO MEET YOU!`)
          );
        }else {
          console.log(
            chalk.bold.blue(`HELLO! I AM ${user.data.toUpperCase()}. NICE TO MEET YOU!`)
          );
        }
      }
      if (user.select === "EXIT") {
        console.log(chalk.italic.red("EXITING..."));
        process.exit();
      }
    
    
}
  