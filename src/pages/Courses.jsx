import React from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const courses = [
    {
      name: "Data Science & AI",
      description:
        "Master data analysis, machine learning, and AI tools to become a data-driven innovator.",
      image: "/datascience.jpg",
    },
    {
      name: "Salesforce Development",
      description:
        "Learn Salesforce CRM, Apex, and Lightning framework to build powerful business solutions.",
      image: "/salesforce.jpg",
    },
    {
      name: "Java Full Stack Development",
      description:
        "Gain expertise in Java, Spring Boot, React, and databases to build complete web solutions.",
      image: "/javafullstack.jpg",
    },
    {
      name: "Web Development",
      description:
        "Become a full-stack web developer with HTML, CSS, JavaScript, React, and Node.js.",
      image: "/webdevelopment.jpg",
    },
    {
      name: "UI/UX Design",
      description:
        "Learn to design stunning, user-centered interfaces using Figma and design principles.",
      image: "/uiux.jpg",
    },
    {
      name: "Digital Marketing",
      description:
        "Master SEO, social media, and ad campaigns to grow businesses in the digital era.",
      image: "/digitalmarketing.jpg",
    },
    {
      name: "Software Testing (Manual + Automation)",
      description:
        "Understand testing fundamentals, automation tools, and QA workflows for real-world projects.",
      image: "/softwaretesting.jpg",
    },
    {
      name: "Cyber Security",
      description:
        "Learn ethical hacking, network defense, and threat analysis to secure digital systems.",
      image: "/cybersecurity.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-brand-50 to-white text-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Professional Courses
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of industry-relevant courses designed to accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => {
            // Define which courses are Popular (first 3) and which are New (rest)
            const isPopular = index < 3;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${isPopular ? 'bg-orange-500' : 'bg-brand'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {isPopular ? "Popular" : "New"}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 min-h-[3rem]">{course.name}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-grow">{course.description}</p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a 
                      href={`https://wa.me/916303336490?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(course.name)}%20course!`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-600 transition duration-300 shadow hover:shadow-md flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.361.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <Link 
                      to="/contact" 
                      className="flex-1 text-center bg-brand text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-light transition duration-300 shadow hover:shadow-md"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}