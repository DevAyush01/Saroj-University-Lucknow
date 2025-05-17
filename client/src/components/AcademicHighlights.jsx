import { FaGraduationCap, FaFlask, FaUsers, FaChartLine, FaHandshake, FaAward, FaArrowRight } from 'react-icons/fa';

const AcademicHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Academic Programs Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Our Academic Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all">
              <FaGraduationCap className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Undergraduate Programs</h3>
              <p className="text-gray-600 mb-4">50+ cutting-edge programs across engineering, management, arts, and sciences.</p>
              <a href="#" className="text-indigo-600 font-medium flex items-center">
                Explore Programs <FaArrowRight className="ml-2" />
              </a>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all">
              <FaFlask className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Research Initiatives</h3>
              <p className="text-gray-600 mb-4">₹25+ crore annual research funding with 15 dedicated research centers.</p>
              <a href="#" className="text-indigo-600 font-medium flex items-center">
                Research Areas <FaArrowRight className="ml-2" />
              </a>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-xl hover:shadow-lg transition-all">
              <FaUsers className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Faculty Excellence</h3>
              <p className="text-gray-600 mb-4">200+ faculty members including 15 Shanti Swarup Bhatnagar awardees.</p>
              <a href="#" className="text-indigo-600 font-medium flex items-center">
                Meet Our Faculty <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Student Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Google India",
                quote: "The industry-aligned curriculum at Saroj University gave me the perfect launchpad for my tech career.",
                image: "/images/student1.jpg"
              },
              {
                name: "Rahul Verma",
                role: "Entrepreneur",
                quote: "The startup incubation center helped turn my classroom project into a ₹2 crore business.",
                image: "/images/student2.jpg"
              },
              {
                name: "Anjali Patel",
                role: "Oxford University (PhD)",
                quote: "Research mentorship at Saroj prepared me for doctoral studies at world-class institutions.",
                image: "/images/student3.jpg"
              }
            ].map((student, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <img src={student.image} alt={student.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold">{student.name}</h4>
                    <p className="text-sm text-gray-600">{student.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{student.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* University Achievements */}
        <div className="bg-indigo-900 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <FaChartLine className="text-5xl mx-auto mb-4 text-indigo-300" />
              <p className="text-4xl font-bold mb-2">97%</p>
              <p className="text-indigo-200">Placement Rate</p>
            </div>
            <div>
              <FaGraduationCap className="text-5xl mx-auto mb-4 text-indigo-300" />
              <p className="text-4xl font-bold mb-2">34K+</p>
              <p className="text-indigo-200">Alumni Network</p>
            </div>
            <div>
              <FaHandshake className="text-5xl mx-auto mb-4 text-indigo-300" />
              <p className="text-4xl font-bold mb-2">200+</p>
              <p className="text-indigo-200">Industry Partners</p>
            </div>
            <div>
              <FaAward className="text-5xl mx-auto mb-4 text-indigo-300" />
              <p className="text-4xl font-bold mb-2">25</p>
              <p className="text-indigo-200">National Awards</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to be part of Saroj International University?</h3>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Join India's fastest growing university with world-class infrastructure and industry-aligned curriculum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://seglko.in8.nopaperforms.com/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium">
              Apply Now
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicHighlights;