export default {};

declare global {
  interface Base {
    id: number;
    user_id: string;
    slug: string;
  }

  interface MyPages extends Base {
    title: string;
    img: string;
    component: 'Home' | 'Skills' | 'Experience';
    data: MyHome;
    sort: number;
  }

  interface MyHome extends Base {
    name: string;
    jobTitle: string;
    summary: string;

    page_id: number;
  }

  interface MySkills extends Base {
    name: string;
    new: boolean;
    category: string;
    icon?: string;
    duration: number;

    page_id: number;
  }

  interface MyExperience extends Base {
    position: string;
    company: string;
    tags: string[];
    from: number;
    to: number;
    responsibilities: string[];
    skills: number[];

    page_id: number;
  }
}
