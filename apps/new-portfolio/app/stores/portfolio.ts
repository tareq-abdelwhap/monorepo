export const usePortfolioStore = defineStore('portfolioStore', () => {
  const findSkill = (skillsArray: string[]) => {
    return skillsDB.value.filter(skill =>
      skillsArray
        .map(arr => arr.toLowerCase())
        .includes(skill.name.toLowerCase())
    );
  };

  const skillsDB = ref([
    {
      name: 'HTML',
      type: 'frontend',
      color: 'text-red-500',
      bgColor: 'bg-red-900',
      borderColor: 'border-red-900',
      icon: 'logos:html-5',
      actualYears: 0,
      duration: '+5 years',
      new: false,
    },
    {
      name: 'CSS',
      type: 'frontend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'logos:css-3',
      actualYears: 0,
      duration: '+5 years',
      new: false,
    },
    {
      name: 'Tailwind',
      type: 'frontend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'logos:tailwindcss-icon',
      actualYears: 0,
      duration: '+1 years',
      new: false,
    },
    {
      name: 'Javascript',
      type: 'frontend',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-900',
      borderColor: 'border-yellow-500',
      icon: 'logos:javascript',
      actualYears: 0,
      duration: '+5 years',
      new: false,
    },
    {
      name: 'jQuery',
      type: 'frontend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'devicon:jquery',
      actualYears: 0,
      duration: '+5 years',
      new: false,
    },
    {
      name: 'Vue3',
      type: 'frontend',
      color: 'text-green-500',
      bgColor: 'bg-green-900',
      borderColor: 'border-green-900',
      icon: 'logos:vue',
      actualYears: 0,
      duration: '+4 years',
      new: false,
    },
    {
      name: 'Nuxt3',
      type: 'frontend',
      color: 'text-green-500',
      bgColor: 'bg-green-900',
      borderColor: 'border-green-900',
      icon: 'logos:nuxt-icon',
      actualYears: 0,
      duration: '+1 years',
      new: false,
    },
    {
      name: 'Ionic Vue',
      type: 'frontend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'logos:ionic-icon',
      actualYears: 0,
      duration: '+1 years',
      new: false,
    },
    {
      name: 'Pinia',
      type: 'frontend',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-900',
      borderColor: 'border-yellow-500',
      icon: 'logos:pinia',
      actualYears: 0,
      duration: '+3 years',
      new: false,
    },
    {
      name: 'Typescript',
      type: 'frontend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'logos:typescript-icon',
      actualYears: 0,
      duration: '+1 years',
      new: false,
    },
    /* Backend */
    {
      name: 'PHP',
      type: 'backend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'logos:php',
      actualYears: 0,
      duration: '+5 years',
      new: false,
    },
    {
      name: 'Laravel',
      type: 'backend',
      color: 'text-red-500',
      bgColor: 'bg-red-900',
      borderColor: 'border-red-900',
      icon: 'logos:laravel',
      actualYears: 0,
      duration: '+4 years',
      new: false,
    },
    {
      name: 'MySQL',
      type: 'backend',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'logos:mysql',
      actualYears: 0,
      duration: '+4 years',
      new: false,
    },
    {
      name: 'Redis',
      type: 'backend',
      color: 'text-red-500',
      bgColor: 'bg-red-900',
      borderColor: 'border-red-900',
      icon: 'logos:redis',
      actualYears: 0,
      duration: '+1 months',
      new: false,
    },
    {
      name: 'NodeJS',
      type: 'backend',
      color: 'text-green-500',
      bgColor: 'bg-green-900',
      borderColor: 'border-green-900',
      icon: 'logos:nodejs-icon',
      actualYears: 0,
      duration: '+1 months',
      new: true,
    },
    {
      name: 'Express',
      type: 'backend',
      color: 'text-black',
      bgColor: 'bg-black',
      borderColor: 'border-black',
      icon: 'devicon:express',
      actualYears: 0,
      duration: '+1 months',
      new: true,
    },
    {
      name: 'MongoDB',
      type: 'backend',
      color: 'text-green-500',
      bgColor: 'bg-green-900',
      borderColor: 'border-green-900',
      icon: 'logos:mongodb-icon',
      actualYears: 0,
      duration: '+1 months',
      new: true,
    },

    {
      name: 'Git',
      type: 'other',
      color: 'text-orange-500',
      bgColor: 'bg-orange-900',
      borderColor: 'border-orange-900',
      icon: 'logos:git-icon',
      actualYears: 0,
      duration: '+3 years',
      new: false,
    },
    {
      name: 'Bitbucket',
      type: 'other',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: 'logos:bitbucket',
      actualYears: 0,
      duration: '+1 years',
      new: false,
    },
    {
      name: 'OOP',
      type: 'other',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: '',
      actualYears: 0,
      duration: '+3 years',
      new: false,
    },
    {
      name: 'SOLID',
      type: 'other',
      color: 'text-blue-500',
      bgColor: 'bg-blue-900',
      borderColor: 'border-blue-900',
      icon: '',
      actualYears: 0,
      duration: '+3 years',
      new: false,
    },
  ]);

  const skills = computed(() => {
    const currentYear = new Date().getFullYear();

    return skillsDB.value.map(currentSkill => {
      const skillExp = experiences.value.filter(exp => {
        return exp.skills.some(skill => skill.name === currentSkill.name);
      });

      skillExp.forEach(exp => {
        const startYear = Number(exp.date[0]);
        const yearsWorked = currentYear - startYear - 1;

        if (yearsWorked > currentSkill.actualYears) {
          currentSkill.actualYears = yearsWorked;
          currentSkill.duration = `+${yearsWorked} years`;
        }
      });

      return currentSkill;
    });
  });

  const experiences = ref([
    {
      position: 'Warehouse Manager',
      company: 'Milano Export and Import',
      tags: ['Cairo, Egypt', 'Full-Time', 'On-Site'],
      date: ['2017', '2019'],
      responsibilities: [
        'Warehouse Manager',
        'I developed a small system to facilitate warehouse management and sold it to the company when I resigned.',
      ],
      skills: findSkill([
        'HTML',
        'CSS',
        'Javascript',
        'Ajax',
        'MySQL',
        'jQuery',
        'PHP',
      ]),
    },
    {
      position: 'Personal Goal Pursuit',
      company: 'Career Break',
      tags: ['Cairo'],
      date: ['2019', '2020'],
      responsibilities: [
        'I was on a break because I was attending a full-stack diploma program at the Russian Cultural Center.',
      ],
      skills: findSkill([]),
    },
    {
      position: 'Full-Stack Developer',
      company: 'Al-Tarek and Islam Auto',
      tags: ['Cairo, Egypt', 'Full-Time', 'Hybird'],
      date: ['2020', '2023'],
      responsibilities: [
        'Designed and developed a full ERP system, streamlining business processes and increasing efficiency.',
        'Developed dynamic web applications with PHP and MySQL, focusing on enhancing user engagement and optimizing performance. Proficiently mastered AJAX and Vue.js to create interactive interfaces.',
        'API integration for seamless third-party service integration.',
        "Integrated additional functionalities such as Dropzone for efficient file uploads and Chart.js for advanced data visualization and enhances the application's analytical capabilities.",
      ],
      skills: findSkill([
        'Javascript',
        'Vue3',
        'Pinia',
        'PHP',
        'Laravel',
        'MySQL',
        'Git',
        'OOP',
        'SOLID',
      ]),
    },
    {
      position: 'Full-Stack Developer',
      company: 'Real Deal EG',
      tags: ['Cairo, Egypt', 'Full-Time', 'Remote'],
      date: ['2023', 'Present'],
      responsibilities: [
        'Implementing a modular architecture with HMVC, service and repository patterns for high maintainability.',
        'Architected scalable and maintainable front-end systems using component-based approaches with Vue.js 3 and Nuxt 3.',
        'Enhanced application performance with lazy loading, code splitting, and optimized state management using Pinia.',
        'Employed Tailwind CSS for responsive and maintainable styling.',
        'Created reusable components and libraries to enhance productivity and consistency.',
        'Improving code quality and minimizing runtime errors by implementing type-safe practices with TypeScript.',
        'Collaborated closely with UI/UX designers using Figma to deliver cohesive and user-friendly interfaces.',
      ],
      skills: findSkill([
        'Javascript',
        'Vue3',
        'Nuxt3',
        'Typescript',
        'Tailwind',
        'Laravel',
        'MySQL',
        'Redis',
        'Bitbucket',
      ]),
    },
  ]);

  return {
    experiences,
    skills,
  };
});
