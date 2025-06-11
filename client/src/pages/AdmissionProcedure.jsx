import React from "react"
import { motion } from "framer-motion"
import  Layout  from "../components/Layout"
import { LogIn, UserPlus, ClipboardCheck, CreditCard, Download } from "lucide-react"

export default function AdmissionProcedure() {
  const steps = [
    {
      title: "Step 1: Fill Basic Details",
      description:
        "Begin by filling out your basic information on the application form. This includes your name, email, and mobile number.",
      icon: <UserPlus className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Step 2: Receive Login Credentials",
      description:
        "Once submitted, you'll receive your login ID and password on your registered email and mobile number.",
      icon: <LogIn className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Step 3: Login and Complete Form",
      description:
        "Use the credentials to log in to your application dashboard. Fill in your academic, personal, and contact details.",
      icon: <ClipboardCheck className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Step 4: Pay Application Fee",
      description:
        "Make a secure online payment of the application fee using UPI, debit/credit card, or net banking.",
      icon: <CreditCard className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Step 5: Download Application Form",
      description:
        "Once submitted and paid, download your filled application form for your reference and future use.",
      icon: <Download className="w-8 h-8 text-indigo-600" />,
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-18">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Admission Procedure</h1>
            <p className="text-xl text-white/80">
              A simple 5-step process to apply to Saroj International University.
            </p>
            <div className="h-1 w-24 bg-white/40 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Step Cards */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-start"
              >
                <div className="mb-4">{step.icon}</div>
                <h2 className="text-xl font-bold text-indigo-800 mb-2">{step.title}</h2>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Apply Now CTA */}
          <div className="text-center mt-16">
            <a
              href="https://siu.in8.nopaperforms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full transition duration-300 shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}
