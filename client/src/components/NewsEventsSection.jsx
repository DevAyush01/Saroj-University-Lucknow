import { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaNewspaper, 
  FaTrophy, 
  FaMicrophone, 
  FaBookOpen,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      title: "Saroj University Ranked Among Top 50 Emerging Universities in India",
      date: "May 15, 2024",
      excerpt: "Saroj University has been ranked 47th in the prestigious National Institutional Ranking Framework (NIRF) among emerging universities, marking a significant achievement in our academic journey.",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"

    },
    {
      id: 2,
      title: "New Center for AI Research Established with ₹5 Crore Grant",
      date: "April 28, 2024",
      excerpt: "The university has launched a state-of-the-art Center for Artificial Intelligence Research, funded by a generous grant from the Ministry of Education.",
      category: "Research",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"

    },
    {
      id: 3,
      title: "Annual Convocation Ceremony Honors 1,200 Graduates",
      date: "March 20, 2024",
      excerpt: "Honorable Chief Minister of Uttar Pradesh graced the 5th Annual Convocation as Chief Guest, awarding degrees to our brightest graduates.",
      category: "Campus Event",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"

    }
  ];

  const events = [
    {
      id: 1,
      title: "International Conference on Sustainable Technologies",
      date: "June 10-12, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "University Auditorium",
      description: "Join global experts discussing innovations in renewable energy, green architecture, and sustainable urban development.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"

    },
    {
      id: 2,
      title: "Tech Fest 2024: Innovation Challenge",
      date: "July 5-7, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Engineering Block",
      description: "Annual technology festival featuring hackathons, robotics competitions, and startup pitch sessions with ₹2 lakh in prizes.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"

    },
    {
      id: 3,
      title: "Alumni Meet & Career Networking Session",
      date: "August 15, 2024",
      time: "2:00 PM - 7:00 PM",
      location: "University Lawn",
      description: "Connect with successful Saroj University alumni from top companies and explore career opportunities.",
      registrationLink: "#",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at Saroj University
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'news' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              <FaNewspaper className="w-5 h-5 mr-2" />
              University News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'events' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              <FaCalendarAlt className="w-5 h-5 mr-2" />
              Upcoming Events
            </button>
          </div>
        </div>

        {/* News Content */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
                    Read More <FaArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events Content */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="relative bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-indigo-600">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 pr-8">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaClock className="w-4 h-4 mr-2 text-indigo-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-indigo-500" />
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Register Now
                    </button>
                    <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center">
                      Details <FaArrowRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#" className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:bg-indigo-50 transition-colors">
            <FaTrophy className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-gray-900">Achievements</h3>
            <p className="text-sm text-gray-600 mt-1">Our milestones and awards</p>
          </a>
          <a href="#" className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:bg-indigo-50 transition-colors">
            <FaMicrophone className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-gray-900">Press Releases</h3>
            <p className="text-sm text-gray-600 mt-1">Official statements</p>
          </a>
          <a href="#" className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:bg-indigo-50 transition-colors">
            <FaCalendarAlt className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-gray-900">Academic Calendar</h3>
            <p className="text-sm text-gray-600 mt-1">Important dates</p>
          </a>
          <a href="#" className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:bg-indigo-50 transition-colors">
            <FaBookOpen className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="font-semibold text-gray-900">Campus Life</h3>
            <p className="text-sm text-gray-600 mt-1">Student activities</p>
          </a>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl flex items-center mx-auto">
            View All {activeTab === 'news' ? 'News' : 'Events'}
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;