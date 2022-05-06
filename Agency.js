class Member {
    constructor (name, role, department,language){
      this._name = name
      this._role = role
      this._department = department
      this._langauge = language
    }
    
    get name() {return this._name}
    get role() {return this._role}
    get department(){ return this._department}
    get language () { return this._language}
    
    jobInfo(){
      console.log( `My name is ${this.name}, My role is ${this.role} in ${this.department} department`)
    }
    
  }
    
  class Manager extends Member{
    constructor(name, role, employees,department,language){
        super(name,role,department,language)
        this._employees=employees
    }  
    get employees() {return this._employees}
    
  
  }
  
  class Teacher extends Member{
    constructor(name, role,department,language,numOfStudents){
      super(name, role,department, language)
      this._numOfStudents = numOfStudents
    }
    get numOfStudents(){
      return this.numOfStudents
    }
    className(){
      console.log(`I teach a course in ${this._language}`)
    }
  }
  
  class Student extends Member{
    constructor (name, role, language, studyGroup){
      super (name, role, language)
      this._studyGroup = studyGroup
    }
    get studyGroup () {return this._studyGroup}
    
  }
  
  
  let bob = new Teacher("Bob","teacher", "education", "JS", 30)
  let john = new Student("John","student","PHP","group1")
  let leon = new Manager("Leon","ceo",5,"faculty","Python")
  
  let persons = [bob,john,leon]
  for(let x of persons){
    x.jobInfo()
  }