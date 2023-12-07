function calculateAge(birthday) {
  const birthday_arr = birthday.split('/');
  const birthday_date = new Date(
    birthday_arr[2],
    birthday_arr[1] - 1,
    birthday_arr[0]
  );
  const ageDifMs = Date.now() - birthday_date.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

module.exports = {
  experience: {
    age: `${calculateAge('20/04/2020')}`,
  },
  basic: [
    {
      title: 'Residencia',
      content: 'Medellín - Colombia',
    },
    {
      title: 'Ciudad',
      content: 'Medellín - Colombia',
    },
    {
      title: 'Edad',
      content: `${calculateAge('07/01/2001')} Años`,
    },
    {
      title: 'Correo Electrónico',
      content: 'granadarodasvaleria@gmail.com',
    },
  ],
  languages: [
    {
      title: 'PHP/Laravel',
      content: '90',
    },
    {
      title: 'Vue',
      content: '85',
    },
    {
      title: 'React',
      content: '80',
    },
    {
      title: 'NodeJs',
      content: '60',
    },
    {
      title: 'Go',
      content: '40',
    },
  ],
  knowledge: [
    'SQL, Firebase, MongoDB',
    'CSS, SASS, Tailwind, Bootstrap',
    'TDD, Jest, Cypress',
    'Static Analysis Tools , CI/CD',
    'Practicas Devops, AWS, Cloud',
    'Flexible a las nuevas tecnologías',
  ],
  networks: [
    {
      title: 'github',
      content: 'https://github.com/vale0722',
    },
    {
      title: 'in',
      content: 'https://www.linkedin.com/in/vale0722/',
    },
    {
      title: 'whatsapp',
      content: 'https://api.whatsapp.com/send?phone=3128150756',
    },
  ],
  works: [
    {
      title: 'Trainee Developer',
      logo: 'evertec.png',
      dates: 'Abril 2020 - Septiembre 2020',
    },
    {
      title: 'Junior Developer',
      logo: 'evertec.png',
      dates: 'Septiembre 2020 - Febrero 2021',
    },
    {
      title: 'Development Engineer (Mid)',
      logo: 'evertec.png',
      dates: 'Febrero 2021 - Mayo 2022',
    },
    {
      title: 'Semi Senior Development',
      logo: 'evertec.png',
      dates: 'Mayo 2022 - Actual',
    },
    {
      title: 'Senior Development',
      logo: 'evertec.png',
      dates: 'Noviembre 2023 - Actual',
    },
  ],
  educations: [
    {
      title: 'Bachiller técnico en informática',
      site: 'Ins. Edu. Gilberto Alzate Avendaño',
      dates: '04-Dic 2017',
    },
    {
      title: 'Formación técnica en desarrollo de software',
      site: 'Politécnico Jaime Isaza Cadavid',
      dates: '04-Dic 2017',
    },
    {
      title: 'Estudiante de ingeniería de sistemas',
      site: 'Universidad de Antioquia',
      dates: '2018 - actual',
    },
  ],
  additional: [
    {
      title: 'Curso Diplomado Introducción a Matlab',
      site: 'Universidad de Medellín',
      dates: '2016-Dic',
    },
    {
      title: 'AWS CLOUD practitioner Essentials',
      site: 'Amazon Web Services',
      dates: '2021-sept',
    },
  ],
  idioms: [
    {
      title: 'Español',
      value: '100',
    },
    {
      title: 'Inglés',
      value: '40',
    },
  ],
  hobbies: [
    {
      title: 'Leer',
      description:
        'La lectura para mí es una forma de distraerme,' +
        'me encanta más que todo la fantasía y el romance más si se pasa de cursi',
      img: 'read.jpeg',
    },
    {
      title: 'Cantar',
      description:
        '(Aunque sea en la ducha) He participado en coros de música lírica, pero la verdad canto de todo.',
      img: 'sing.jpg',
    },
    {
      title: 'Mascotas',
      description:
        'En general soy amante a la naturaleza, pero encuentro en mis mascotas una compañía fiel... Tengo 2 perros y 1 gatito.',
      img: 'pets.jpg',
    },
    {
      title: 'Ver películas',
      description:
        'De mis planes favoritos es ver peliculas en casa, preparar algo delicioso y disfrutar lo que el mundo del cine tiene para mí.',
      img: 'cinema.jpeg',
    },
  ],
};
