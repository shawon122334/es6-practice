class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="kolimunnesa school";
    }
}
//we should make a constructor in class
//we can also pass parameter in constructor
const student1=new Student(1,"sabbir");
const student2=new Student(2,"suvo");
//we can access id name using object
console.log(student1.id,student2);