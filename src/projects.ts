import gym from '../src/assets/gym.jpg'
import grad from '../src/assets/grad.jpg'
import pheonix from '../src/assets/pheonix.png'
import cambridge from '../src/assets/cambridge.png'
import ecommerce from '../src/assets/ecommerce.jpg'
import social from '../src/assets/socialjpg.jpg'
const projects = [
    {   
        id: 1,
        name: 'Atwa Personal Trainer',
        description: 'Customized workout plans for users, with new and modern design , in addition to a new and modern design for the admin panel',
        image: gym,
        link: 'https://github.com/mazen250/Atwa',
        technologies: ['React', 'Node', 'MongoDB'],
    },
    {   
        id: 2,
        name: 'Graduation Project',
        description: 'Intelligent system for student and recruiters to connect and find the best match for them and add skills to their profile based on their dynamic behavior and their interests usnig machine learning',
        image: grad,
        link: 'https://github.com/mazen250/grad',
        technologies: ['React', 'Node', 'MongoDB', 'Python'],
    }
    ,{
        id: 3,
        name: 'Pheonix Academy',
        description: 'A website you can check your certificate and get it in pdf format, and you can check your courses and your grades',
        image: pheonix,
        link: 'https://phoenixacademy.uk.com/about.html',
        technologies: ['html', 'css', 'php', 'mysql'],
    }
    ,{
        id: 4,
        name: 'E-commerce',
        description: 'A website for selling and buying products, with a modern design and a new way to show products',
        image: ecommerce,
        link: 'https://github.com/mazen250/biscotti-client',
        technologies: ['React', 'Node', 'MongoDB','express'],
    }
    ,{
        id: 5,
        name: 'Social Media App',
        description: 'A fully functional social media app with a modern design and a new way to show posts,like,comment , and chat with your friends',
        image: social,
        link: 'https://github.com/mazen250/Social-Network-App-PHP-Mysql',
        technologies: ['html', 'css', 'php', 'mysql'],
    },
    {
        id: 6,
        name: 'Cambridge',
        description: ' website you can check your certificate and get it in pdf format, and you can check your courses and your grades',
        image: cambridge,
        link: 'https://amrfayez247.github.io/cambridge/index.html',
        technologies: ['html', 'css', 'php', 'mysql'],

    }
]
export default projects