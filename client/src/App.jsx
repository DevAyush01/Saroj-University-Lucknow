import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import VisionMission from './pages/vision-mission'
import LeadershipMessage from './pages/leadership'
import AboutUs from './pages/AboutSIU'
import Programs from './pages/Programs'
import AdmissionProcedure from './pages/AdmissionProcedure'
import PlacementPage from './pages/PlacementPage'
import TermsAndConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ResearchPublications from './pages/Publications'
import ResearchProjects from './pages/Projects'

export default function App() {
  return (
    <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/about/about-siu" element={<AboutUs />} />
   <Route path="/about/vision-mission" element={<VisionMission />} />

   <Route path="/about/leadership" element={<LeadershipMessage/>} />

   <Route path="/programs/courses-offered" element={<Programs/>} />
    <Route path="/admissions/procedure" element={<AdmissionProcedure/>} />

        <Route path="/placement" element={<PlacementPage/>} />

        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />

        <Route path="/terms-conditions" element={<TermsAndConditions/>} />

        <Route path="/research/projects" element={<ResearchProjects/>} />
        <Route path="/research/publications" element={<ResearchPublications/>} />




    </Routes>
  )
}
