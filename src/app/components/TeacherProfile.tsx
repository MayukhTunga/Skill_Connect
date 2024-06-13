
import React from 'react';

const TeacherProfile: React.FC = () => {
  const teacher = {
    name: 'Bonnie Patterson',
    title: 'Developer and Lead Instructor',
    bio: `
Hello! I'm Alex Johnson, a passionate web developer with over 15 years of experience in the tech industry. My journey began when I was a teenager, tinkering with HTML and CSS to create simple websites. Today, I am a Senior Web Development Instructor at a leading tech bootcamp, where I have the privilege of helping aspiring developers kickstart their careers.

Throughout my career, I've worked with numerous programming languages and frameworks, including JavaScript, React, Node.js, and Python. I love staying up-to-date with the latest industry trends and technologies, and I'm always eager to share this knowledge with my students.

Teaching is my greatest passion. I believe in a hands-on, project-based approach to learning, where students can apply theoretical concepts to real-world scenarios. My goal is to make complex topics accessible and enjoyable, ensuring that every student feels confident in their ability to build amazing web applications.

In my courses, you'll find a blend of structured lessons, practical exercises, and plenty of coding challenges. I strive to create an inclusive and supportive learning environment where students can thrive and achieve their full potential.

When I'm not coding or teaching, you can find me exploring the outdoors, playing guitar, or experimenting with new recipes in the kitchen. I'm excited to be a part of your web development journey and can't wait to see what you'll create!

`,
    imageUrl: '/images/TeacherDP.jpg',
    stats: {
      students: '42,069,420',
      reviews: '696,969',
      rating: '4.9',
    },
    social: {
      website: '#',
      twitter: '#',
      linkedin: '#',
    },
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto  shadow-lg rounded-xl overflow-hidden mt-8 p-8 border-2 bg-black">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-purple-700">{teacher.name}</h1>
            <h2 className="text-xl text-white">{teacher.title}</h2>
            <div className="mt-4">
              <span className="block text-white font-bold">Total students</span>
              <span className="block text-2xl font-bold text-purple-700">{teacher.stats.students}</span>
            </div>
            <div className="mt-2">
              <span className="block text-white font-bold">Rating</span>
              <span className="block text-2xl font-bold text-white">{teacher.stats.rating} <span className='text-yellow-500'>★</span></span>
            </div>
            <div className="mt-2">
              <span className="block text-white font-bold">Reviews</span>
              <span className="block text-2xl font-bold text-purple-700">{teacher.stats.reviews}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img className="h-32 w-32 rounded-full border-2" src={teacher.imageUrl} alt="Teacher profile picture" />
            <div className="mt-4 flex flex-col">
              <a href={teacher.social.website} className="mt-2  text-center font-medium text-purple-600 bg-slate-300 py-2 px-4 rounded-lg hover:bg-violet-700 hover:text-white">Website</a>
              <a href={teacher.social.twitter} className="mt-2  text-center font-medium text-purple-600 bg-slate-300 py-2 px-4 rounded-lg hover:bg-violet-700 hover:text-white">Twitter</a>
              <a href={teacher.social.linkedin} className="mt-2  text-center font-medium text-purple-600 bg-slate-300 py-2 px-4 rounded-lg hover:bg-violet-700 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-white">About me</h3>
          <p className="mt-4 text-white whitespace-pre-line">{teacher.bio}</p>
        </div>
      </div>
      <h1 className='text-white text-3xl mt-8 font-bold'>My <span className='text-violet-600'>Courses</span></h1>
      <div className='mx-auto py-96 bg-black shadow-lg rounded-xl overflow-hidden mt-8 p-8 border-2'>

      </div>
    </div>
  );
};

export default TeacherProfile;
