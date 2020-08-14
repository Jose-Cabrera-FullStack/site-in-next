export interface MenuItem {
  id: number;
  title: string;
  slug: string;
}

export interface MenuGroup {
  id: number;
  title: string;
  courses: Array<MenuItem>;
}

export interface Course {

}

export interface Lesson {
  
}