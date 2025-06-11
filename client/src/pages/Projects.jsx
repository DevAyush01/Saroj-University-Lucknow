import React, { useState } from 'react';
import  Layout  from '../components/Layout';

const ResearchProjects = () => {
  const [activeTab, setActiveTab] = useState('electronics');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = {
    electronics: {
      name: "Electronics Department",
      projects: [
        "Automatic Street Lighting system using IoT",
        "Smart Building Project using PIR",
        "Smart Water Monitoring System using IoT",
        "IoT based Weather Monitoring",
        "Smart Irrigation System using IoT",
        "Health Monitoring Wearable Glove",
        "Animatronic Hand",
        "Home Automation System",
        "GPS & GSM based Tracker",
        "IoT using Raspberry Pi",
        "Automated Railway Crossing",
        "Access Control with RFID",
        "Biometric Authentication",
        "Persistence of Vision",
        "Robotic Arm",
        "Smart Lighting System",
        "Gesture Based Robotics",
        "Mobile Robotics",
        "Bluetooth Robotics",
        "Swarm Robotics",
        "Sensor Guided Robotics",
        "Voice Controlled Robot",
        "WiFi Controlled robot"
      ]
    },
    electrical: {
      name: "Electrical Department",
      projects: [
        "IoT based Weather Monitoring",
        "Smart Irrigation System using IoT",
        "Home Automation System",
        "Automatic Street Lighting system using IoT",
        "Smart Building Project using PIR",
        "Smart Water Monitoring System using IoT",
        "Animatronic Hand",
        "PCB Manufacturing",
        "Automatic Solar Tracker",
        "Access Control with RFID",
        "Smart Energy Meter using GSM",
        "Health Monitoring Wearable Glove",
        "Solar and Smart Energy Systems",
        "Robotic Arm",
        "Smart Lighting System",
        "Hexapod",
        "Gesture Based Robotics",
        "Mobile Robotics",
        "Bluetooth Robotics",
        "Swarm Robotics",
        "Sensor Guided Robotics",
        "Voice Controlled Robot",
        "WiFi Controlled robot"
      ]
    },
    mechanical: {
      name: "Mechanical Department",
      projects: [
        "CNC Machine using Arduino",
        "Automobile Prototyping",
        "CFD",
        "Robotic Arm",
        "Hexapod",
        "Gesture Based Robotics",
        "Mobile Robotics",
        "Bluetooth Robotics",
        "Swarm Robotics",
        "Sensor Guided Robotics",
        "Voice Controlled Robot",
        "WiFi Controlled robot",
        "Design and Fabrication of Car/Wheel Dollies using Hydraulic Ratchet Mechanism",
        "Pneumatic Reciprocating Power Hacksaw Machine Project",
        "Design and Fabrication of Pneumatic Bearing Puller Project",
        "Stirling Engine Project",
        "Battery Drive Motorized Agriculture Weeder",
        "Pneumatic Operated Double Hacksaw Project",
        "Automatic Pneumatic Hammer Machine Project",
        "Automatic Pneumatic Paper Cutting Machine Project",
        "Design and Fabrication of Pneumatic Vice Project",
        "Pneumatic Scissor Lift Jack Project",
        "Pneumatic Sand Filtering Project",
        "Pneumatic Paper Cup Making Machine Project",
        "Pneumatic Sheet Metal Cutting Machine",
        "Electricity Generator Tiles Project",
        "Pneumatic Power Steering System",
        "Mini Belt grinder Project",
        "Drill Press Project",
        "Table Saw Project",
        "Solenoid Engine Project",
        "Air Powered Car Project",
        "Four Wheel Steering Mechanism Project",
        "Box Transport Mechanism Project",
        "360-Degree Rotating Vehicle",
        "Zero Friction Electromagnetic Braking System Project",
        "Gear Based Quick Return Mechanism",
        "Pneumatic Powered Metal Pick and Place Arm",
        "Robotic Vehicle using Ackermann Steering Mechanism",
        "Six Legged Spider Bot using Klann Mechanism",
        "Theo Jansen Mechanism 4 Legs Spider Bot",
        "Automatic Motorized Bench Vise",
        "Power Generator Forearms Machine",
        "Levitating Frictionless Vertical Windmill",
        "Power Generator Pulley Rowing Machine",
        "Staircase Climbing Trolley",
        "Manual Roller Bending Machine",
        "Bench Tapping Machine",
        "E Skateboard With Motion Sensing",
        "Motorized Smart Turning Mechanism",
        "Pneumatic Powered Wall Climbing Robot",
        "Coin Based Cola & Soda Vending Machine",
        "Power Generation Using Electromagnetic Suspension",
        "Motorized Scotch Yoke Mechanism Piston",
        "360 Degree Flexible Drilling Machine",
        "Mini Conveyor using Geneva Mechanism",
        "Mini Hacksaw Powered By Beam Engine",
        "Design & Fabrication Of Mechanical Footstep Power Generator",
        "Motorized Chain Mechanism Hacksaw",
        "Remote Controlled Mini Forklift",
        "Regenerative Braking System Project",
        "Mini Windmill Power Generation Project",
        "3 DOF Hydraulic Extractor Mini JCB",
        "Steering Mechanism Vehicle With Joystick Control",
        "Bedini Wheel Using Electromagnetic Flux Generation",
        "Automatic Mechanical Garage Door Opener",
        "Automatic Paper Cutting Machine Using Geneva Mechanism",
        "Design & Fabrication of Automated Punching Machine",
        "2 Wheel Drive Forklift For Industry Warehouses",
        "Design & Fabrication of Attachable Wheelchair Automator",
        "Automated Portable Hammering Machine",
        "Automatic Seed Sowing Robot",
        "Faulty Product Detection And Separation System",
        "Pedal Operated Hacksaw",
        "Pedal Powered Electricity Generator Project",
        "Plant Irrigation Water Sprinkler Robot",
        "Mini Conveyor Belt Mechanism",
        "Dual Motor Electric Go-Kart For Rough Terrain",
        "Automated 5Dof Robotic Arm Mechanism",
        "Automated Coconut Scraping Machine",
        "Automated Double Hacksaw Project",
        "Pedal Powered Water Purifier Project",
        "Automatic Blackboard / Whiteboard Cleaner System",
        "Automated Drain/Gutter Cleaner Project",
        "Automated 5Dof Robotic Arm Mechanism",
        "Automatic MotorBike Stand Slider",
        "Contactless Eddy Braking System",
        "Design & Fabrication of Motorized Scissor Jack",
        "Electromagnetic Braking System",
        "Gearless Transmission Using Elbow Mechanism",
        "Pulley Based Movable Crane Robot",
        "Push Based Box Transport Mechanism",
        "Sand Filter & Separator Project",
        "Electromagnetic Braking System",
        "Gearless Transmission Using Elbow Mechanism",
        "Rough Terrain Beetle Robot",
        "Smart Solar Grass Cutter With Lawn Coverage",
        "Single Stage Gear Reducer Project",
        "Torque Generator Mechanism",
        "High Performance Hovercraft With Power Turning",
        "2 Wheel Drive Forklift For Industry Warehouses",
        "Motorized 2 Wheel Scooter Project",
        "Fire Fighter Robot With Night Vision Camera",
        "Long Range Spy Robot With Night Vision",
        "Long Range Spy Robot With Obstacle Detection",
        "Long Range Spy Robot With Metal Detection",
        "Remote Controlled Automobile Using Rf",
        "Remote Controlled Robotic Arm Using Rf",
        "Android Controlled Robotic Arm",
        "Hand Motion Controlled Robotic Arm",
        "Hand Motion Controlled Robotic Vehicle",
        "Rf Controlled Spy Robot With Night Vision Camera",
        "Hovercraft Controlled By Android",
        "Fully Automated Solar Grass Cutter Robot",
        "Remote Controlled Pick & Place Robotic Vehicle",
        "MC Based Line Follower Robot",
        "Agricultural Robot Project",
        "Fire Fighter Robot Project",
        "RF Controlled Robotic Vehicle",
        "RF Controlled Robotic Vehicle With Metal Detection Project",
        "Obstacle Avoider Robotic Vehicle",
        "Voice Controlled Robotic Vehicle",
        "Advanced Footstep Power Generation System"
      ]
    }
  };

  const filteredProjects = departments[activeTab].projects.filter(project =>
    project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
 <div className="min-h-screen  py-16 bg-blue-700">
  <div className="max-w-8xl mx-auto px-4">
    
    {/* Header Section */}
    <div className="text-center mb-12 bg-blue-800 py-10 rounded-lg">
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
        Research & Development Projects
      </h1>
      <p className="mt-5 max-w-xl mx-auto text-xl text-blue-100">
        Innovative projects across various departments
      </p>
    </div>

    {/* Search Bar */}
    <div className="mb-8 max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>

    {/* Department Tabs */}
    <div className="mb-8">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex flex-wrap justify-center">
          {Object.keys(departments).map((dept) => (
            <button
              key={dept}
              onClick={() => {
                setActiveTab(dept);
                setSearchTerm('');
              }}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === dept
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {departments[dept].name}
            </button>
          ))}
        </nav>
      </div>
    </div>

    {/* Projects Count */}
    <div className="mb-6 text-center">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
        {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
      </span>
    </div>

    {/* Projects Grid */}
    {filteredProjects.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="px-6 py-8 sm:p-6 bg-gradient-to-r from-indigo-500 to-purple-600">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-white p-2 rounded-md">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-medium text-white truncate">{project}</h3>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {departments[activeTab].name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">No projects found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    )}
  </div>
</div>

    </Layout>
  );
};

export default ResearchProjects;