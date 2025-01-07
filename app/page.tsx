"use client";

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import {
  FaLaptopCode,
  FaSuitcase,
  FaGraduationCap,
  FaBullseye,
  FaCertificate,
  FaLinkedin
} from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdEmail, MdOutlinePhoneAndroid, MdLanguage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { ResumeData } from "@/interfaces";
import resumeData from "@/constants";

export default function Resume() {
  const {
    personalInfo,
    summary,
    keyAchievements,
    experience,
    projects,
    education,
    certifications,
    skills,
    languages,
  }: ResumeData = resumeData;

  const pdfRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!pdfRef.current) return;

    const element = pdfRef.current;
    const canvas = await html2canvas(element, { scale: 2 });

    const imageData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    const ratio = pageWidth / contentWidth;

    const scaledWidth = pageWidth;
    const scaledHeight = contentHeight * ratio;

    let yOffset = 0;

    while (yOffset < scaledHeight) {
      pdf.addImage(
          imageData,
          "PNG",
          0,
          -yOffset / ratio,
          scaledWidth,
          scaledHeight
      );

      if (yOffset + pageHeight < scaledHeight) {
        pdf.addPage();
      }

      yOffset += pageHeight;
    }

    pdf.save("resume.pdf");
  };


  return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-4 md:p-8" ref={pdfRef}>
        <div className="max-w-7xl w-full mx-auto">
          <div className="bg-white border shadow-lg p-4 md:p-6 rounded-xl mb-4 flex flex-col-reverse md:flex-row items-center justify-between ">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 text-4xl mb-4 justify-center md:justify-start">
                <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">{personalInfo.fullName}</h1>
              </div>
              <p className="text-xl md:text-2xl mb-8 flex justify-center md:justify-start">{personalInfo.jobTitle}</p>

              {/* Personal Info */}
              <ul className="flex flex-col md:flex-row gap-2 flex-wrap justify-center md:justify-start">
                <li className="flex items-center gap-1">
                  <MdEmail className="text-blue-500 inline-block align-middle"/>
                  <span className="align-middle">{personalInfo.email}</span>
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlinePhoneAndroid className="text-blue-500 align-middle"/>
                  <span className="align-middle">{personalInfo.phone}</span>
                </li>
                <li className="flex items-center gap-1">
                  <FaLocationDot className="text-blue-500"/>
                  <span className="align-middle">{personalInfo.location}</span>
                </li>
                <li className="flex items-center gap-1">
                  <FaLinkedin className="text-blue-500 align-middle"/>{" "}
                  <a href={personalInfo.linkedin} className="underline align-middle">
                    {personalInfo.linkedin}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-3 md:mb-0">
              <img src="photo.jpg" alt="photo" className="w-40 rounded-full"/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Left Section */}
            <div className="col-span-3 lg:col-span-1 bg-white border shadow-lg p-4 md:p-6 rounded-xl">
              {/* Summary */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaBullseye className="mr-2 text-green-500"/>
                  Summary
                </h2>
                <ul className="list-none text-sm flex gap-2 flex-wrap">
                  {summary.map((item, index) => (
                      <li key={index} className="p-2 bg-green-200 rounded-lg">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaLaptopCode className="mr-2 text-blue-500"/>
                  Skills
                </h2>
                <ul className="list-none text-sm flex gap-2 flex-wrap">
                  {skills.map((skill, index) => (
                      <li key={index} className="p-2 bg-blue-100 rounded-lg">{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <MdLanguage className="mr-2 text-orange-500"/>
                  Languages
                </h2>
                <ul className="flex flex-col flex-wrap gap-4">
                  {languages.map((lang, index) => (
                      <li key={index}>
                        <span className="bg-orange-100 p-2 rounded-lg">{lang.name}</span> <strong>{lang.level}</strong>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaGraduationCap className="mr-2 text-blue-500"/>
                  Education
                </h2>
                {education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-sm">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.duration}</p>
                    </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaCertificate className="mr-2 text-red-500"/>
                  Certifications
                </h2>
                <ul className="list-none text-sm flex gap-2 flex-wrap">
                  {certifications.map((cert, index) => (
                      <li key={index} className="p-2 bg-red-100 inline-block rounded-lg">
                        {cert.title}
                      </li>
                  ))}
                </ul>
              </div>

              {/* Download PDF Button */}
              <button
                  onClick={generatePDF}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Download PDF
              </button>
            </div>

            {/* Right Section */}
            <div className="col-span-3 lg:col-span-2 bg-white border shadow-lg p-4 md:p-6 rounded-xl">
              {/* Key Achievements */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <AiFillSafetyCertificate className="mr-2 text-blue-500"/>
                  Key Achievements
                </h2>
                <ul className="list-none text-sm">
                  {keyAchievements.map((achievement, index) => (
                      <li key={index} className="flex-col flex">
                        <strong>{achievement.title}:</strong> {achievement.details}<span></span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div className="mb-8 ">
                <h2 className="text-2xl font-semibold mb-2 flex items-center">
                  <FaSuitcase className="mr-2 text-blue-500"/>
                  Experience
                </h2>
                {experience.map((job, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      {job.company && (
                          <p className="text-sm text-gray-700">
                            {job.company} | {job.duration} | {job.location}
                          </p>
                      )}
                      <ul className="list-disc ml-6 text-sm">
                        {job.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                ))}
              </div>

              {/* Projects */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <GrProjects className="text-blue-500 mr-2"/>
                  Projects
                </h2>
                {projects.map((category, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl text-blue-500 italic mb-1">
                        {category.category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 border shadow p-4 rounded-lg"
                            >
                              <h4 className="text-lg font-semibold">{project.name}</h4>
                              <h6 className="text-xs text-blue-500">{project.link}</h6>
                              <ul className="list-disc ml-4 text-sm mt-2">
                                {project.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                              </ul>
                            </div>
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
