/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export class Java extends Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      super();
      this.teacher = teacher;
    }

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return "No available teacher";
      }
      return "Available Teacher: " + this.teacher.firstName
    }

  }

  export interface Teacher {
    experienceTeachingJava?: number;
  }
}