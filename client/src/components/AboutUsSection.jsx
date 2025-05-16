import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            About <span className="text-orange-600">Saroj International University</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering minds, transforming lives, and shaping the future through excellence in education.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Saroj University Campus" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-semibold">Our State-of-the-Art Campus</h3>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Empowering Futures Since 2001
            </h3>
            <p className="text-gray-600 mb-6">
              Saroj University, Lucknow is a premier institution dedicated to providing world-class education 
              and fostering innovation. Established with a vision to create leaders of tomorrow, we offer 
              a transformative learning experience that combines academic rigor with practical exposure.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-3">50+</div>
                <h4 className="font-bold text-gray-800 mb-2">Programs Offered</h4>
                <p className="text-gray-600">From engineering to management and humanities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-4xl mb-3">100+</div>
                <h4 className="font-bold text-gray-800 mb-2">Expert Faculty</h4>
                <p className="text-gray-600">Highly qualified and industry-experienced</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                NAAC Accredited
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Industry Partnerships
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Research Focused
              </span>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;