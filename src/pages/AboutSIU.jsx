import React from "react"
import { motion } from "framer-motion"
import Layout  from "../components/Layout"
import { Globe, BookOpen, Users2, ShieldCheck } from "lucide-react"

export default function AboutUs() {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-16 text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Saroj International University is a beacon of transformative education, innovation, and global excellence.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1 }}
              className="h-1 bg-white/40 mx-auto mt-6 rounded-full"
            />
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="bg-white/90 text-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-indigo-800">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              Saroj International University (SIU) was founded with a vision to redefine higher education through a global lens.
              Built on decades of educational leadership by the Saroj Educational Group, SIU offers a multidisciplinary
              environment that nurtures academic excellence, ethical leadership, and transformative innovation.
              With world-class faculty, cutting-edge research facilities, and a vibrant student community, SIU stands at the
              frontier of modern learning.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <FeatureCard
              icon={<BookOpen className="w-10 h-10 text-indigo-700" />}
              title="Academic Excellence"
              description="Rigorous programs, distinguished faculty, and a research-driven ecosystem."
            />
            <FeatureCard
              icon={<Users2 className="w-10 h-10 text-indigo-700" />}
              title="Student-Centric Approach"
              description="Holistic development with strong mentorship and support systems."
            />
            <FeatureCard
              icon={<Globe className="w-10 h-10 text-indigo-700" />}
              title="Global Exposure"
              description="International collaborations and cross-cultural learning opportunities."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-10 h-10 text-indigo-700" />}
              title="Ethics & Innovation"
              description="Rooted in values, committed to progressive thinking and impact."
            />
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
