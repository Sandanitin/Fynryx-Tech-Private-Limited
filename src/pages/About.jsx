import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Us</h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We empower learners with industry-relevant skills that prepare them for the future of work. Through expert mentorship, hands-on training, and practical projects, we help students turn their potential into lasting success.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To close the gap between education and industry by offering high-quality, practical training that builds confidence and expertise in technology and innovation.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            To build a dynamic learning community that sparks curiosity, creativity, and career advancement, shaping the next generation of innovators and leaders.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer industry-aligned training programs designed to help you gain practical skills and achieve lasting career success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Career-Focused Learning</h3>
            <p className="text-gray-700">
              Our programs are built around real-world industry demands, helping you gain practical skills that drive career growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Mentors</h3>
            <p className="text-gray-700">
              Gain insights and guidance from seasoned industry professionals who support you at every step of your learning journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Certification</h3>
            <p className="text-gray-700">
              Earn certificates that are respected and valued by leading companies across industries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Hands-on Projects</h3>
            <p className="text-gray-700">
              Turn your learning into action through real projects and case studies that strengthen your skills and enhance your portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Connect with Us Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Connect with Us</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Scan the QR code to open our Google Form and submit your contact information.
          </p>
          
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-indigo-100">
              <div className="relative inline-block">
                <img 
                  src="/qrcode_docs.google.com[1].png" 
                  alt="Google Form QR Code" 
                  className="w-52 h-52 md:w-64 md:h-64 object-contain"
                />
                <div className="absolute -top-3 -right-3 bg-brand text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 001 1zm0 5h1.586a1 1 0 01.707.293l.707.707a1 1 0 001.414 0l.707-.707a1 1 0 01.707-.293H19a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v.01M9 20h.01M15 20h.01M20 9h.01M4 15h.01" />
                  </svg>
                </div>
              </div>
              <p className="mt-6 text-gray-800 font-bold text-xl">Google Form QR Code</p>
              <p className="mt-2 text-gray-600">Scan to connect with us</p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-xl px-6 py-3 shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 font-medium">Quick & Easy Process</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-3 shadow-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-700 font-medium">Secure Submission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to take the next step Section */}
      <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to take the next step in your career?</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Explore our wide range of professional training programs today.
        </p>
        <a 
          href="/courses" 
          className="inline-block bg-brand text-white px-8 py-4 rounded-lg font-medium hover:bg-brand-light transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-lg"
        >
          Browse Courses
        </a>
      </section>
    </div>
  );
};

export default About;