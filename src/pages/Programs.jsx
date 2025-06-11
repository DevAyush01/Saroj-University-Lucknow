import React from "react"
import { motion } from "framer-motion"
import  Layout  from "../components/Layout"
import { GraduationCap, BookMarked, BookOpen, ArrowRight } from "lucide-react"

export default function Programs() {
  const categories = [
    {
      title: "Undergraduate Programs (UG)",
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      courses: [
        "B.Tech (Computer Science, Mechanical, Civil, Electrical)",
        "BBA (Bachelor of Business Administration)",
        "BCA (Bachelor of Computer Applications)",
        "B.Sc (Biotechnology, Agriculture, PCM, Zoology)",
        "B.A (Psychology, Political Science, English Literature)",
        "LLB (5-Year Integrated Law)",
        "B.Ed (Bachelor of Education)"
      ],
    },
    {
      title: "Postgraduate Programs (PG)",
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      courses: [
        "M.Tech (CSE, Civil, Mechanical)",
        "MBA (Finance, HR, Marketing, International Business)",
        "MCA (Master of Computer Applications)",
        "M.Sc (Biotech, Chemistry, Mathematics)",
        "MA (Economics, History, Sociology)",
        "LLM (Corporate Law, Constitutional Law)"
      ],
    },
    {
      title: "Diploma & Certification Programs",
      icon: <BookMarked className="w-8 h-8 text-indigo-600" />,
      courses: [
        "Diploma in Engineering (Polytechnic)",
        "Certificate in Data Analytics",
        "Diploma in Agriculture",
        "Certificate in Digital Marketing",
        "Diploma in Early Childhood Education",
        "Bridge Programs for Lateral Entry"
      ],
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl text-white/80">
              Explore a diverse range of industry-relevant and future-ready programs at SIU.
            </p>
            <div className="h-1 w-24 bg-white/40 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-xl font-bold text-indigo-800">{category.title}</h2>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {category.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a
              href="https://siu.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full transition duration-300 shadow-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
