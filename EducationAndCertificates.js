// src/EducationAndCertificates.js
import React from "react";

export default function EducationAndCertificates() {
  const education = [
    {
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      institution: "Sethu Institute of Technology",
      year: "2017-2021",
      description: "CGPA:9.3",
    },
    {
      degree: "Internship",
      institution: "BSNL",
      year: "2019",
      description: "Attend training on BROAD BAND TECHNICIAN from 15.05.2019 to 29.06.2019",
    },
  ];

  return (
    <section id="education" className="py-20 px-5 bg-primary text-white">
      <div className="max-w-5xl mx-auto">
        {/* Education Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold border-b-4 border-secondary inline-block mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-sm text-gray-500 mb-2">{edu.institution} - {edu.year}</p>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
