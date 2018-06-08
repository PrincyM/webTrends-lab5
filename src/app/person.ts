export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

 /*   getAge(): number {
         // return an accurate age based on thedateOfBirth.

         let today: Date = new Date(); // create an instance of new Date object

         let age: number = today.getFullYear() - this.dateOfBirth.getFullYear(); // get the age

         if(this.dateOfBirth.getDate() > today.getDate()     // if the date of birth is ahead than today
             &&
             this.dateOfBirth.getMonth() > today.getMonth())
             {
                 age--;
             }

             return age;

     }
     */
}
