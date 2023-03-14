/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  export class React extends Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
      super();
      this.teacher = teacher;
    }

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return "No available teacher";
      }
      return "Available Teacher: " + this.teacher.firstName
    }

  }

  export interface Teacher {
    experienceTeachingReact?: number;
  }
}
