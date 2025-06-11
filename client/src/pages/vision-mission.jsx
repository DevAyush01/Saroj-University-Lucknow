import { motion } from "framer-motion"
import { Lightbulb, Target, Globe, BookOpen } from "lucide-react"
import Layout from "../components/Layout"

export default function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-18">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center text-white mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Vision & Mission</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Driving innovation, excellence, and inclusivity in global education.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1 }}
              className="h-1 bg-white/40 mx-auto mt-6 rounded-full"
            />
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Lightbulb className="text-blue-700 w-10 h-10" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To emerge as a world-class institution of higher learning that empowers students through quality education, cutting-edge research, and global exposure—fostering ethical leaders, thinkers, and innovators for a sustainable and inclusive future.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="p-4 bg-indigo-100 rounded-full">
                  <Target className="text-indigo-700 w-10 h-10" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Our Mission</h2>
                <ul className="text-gray-700 text-lg leading-relaxed space-y-4 list-disc pl-6">
                  <li>
                    To deliver transformative education that nurtures critical thinking, creativity, and leadership.
                  </li>
                  <li>
                    To build a vibrant research culture that addresses real-world challenges.
                  </li>
                  <li>
                    To promote inclusivity, integrity, and social responsibility in all spheres.
                  </li>
                  <li>
                    To collaborate globally, fostering diverse perspectives and innovation.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}
