/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export class Cpp extends Subjects.Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      super();
      this.teacher = teacher;
    }

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher";
      }
      return "Available Teacher: " + this.teacher.firstName
    }

  }

  export interface Teacher {
    experienceTeachingC: number;
  }
}
