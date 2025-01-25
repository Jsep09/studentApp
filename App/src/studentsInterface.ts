export interface Root {
  student: {
    students: Student[];
    currentUser: null;
  };
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  major: string;
  gpa: number;
}
