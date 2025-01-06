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
import resumeData from "@/constants"; // Assuming the file is stored as resumeData.js

interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

interface Achievement {
  title: string;
  details: string;
}

interface Experience {
  title: string;
  company?: string;
  duration: string;
  location?: string;
  description: string[];
}

interface ProjectItem {
  name: string;
  link: string;
  description: string[];
}

interface ProjectCategory {
  category: string;
  items: ProjectItem[];
}

interface Education {
  degree: string;
  school: string;
  duration: string;
}

interface Language {
  name: string;
  level: string;
}

interface CertificationItem {
  title: string;
  description: string;
}

interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string[];
  keyAchievements: Achievement[];
  experience: Experience[];
  projects: ProjectCategory[];
  education: Education[];
  certifications: CertificationItem[];
  skills: string[];
  languages: Language[];
}

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

  return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
        <div className="bg-white border shadow-lg p-8 rounded-xl mb-6 flex items-center justify-between">
          {/* Header */}
          <div>
            <div className="flex items-center gap-4 text-4xl mb-4">
              <h1 className="text-5xl font-bold">{personalInfo.fullName}</h1>
            </div>
            <p className="text-2xl mb-8">{personalInfo.jobTitle}</p>

            {/* Personal Info */}
            <ul className="flex gap-2 flex-wrap">
              <li className="flex items-center gap-1">
                <MdEmail className="text-blue-500"/> {personalInfo.email}
              </li>
              <li className="flex items-center gap-1">
                <MdOutlinePhoneAndroid className="text-blue-500"/> {personalInfo.phone}
              </li>
              <li className="flex items-center gap-1">
                <FaLocationDot className="text-blue-500"/> {personalInfo.location}
              </li>
              <li className="flex items-center gap-1">
                <FaLinkedin className="text-blue-500"/>{" "}
                <a
                    href={personalInfo.linkedin}
                    className="underline"
                >
                  {personalInfo.linkedin}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img src="photo.jpg" alt="photo" className="w-40 rounded-full"/>
          </div>
        </div>

        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="bg-white border shadow-lg p-8 rounded-xl">
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
                  <MdLanguage className="mr-2 text-orange-500" />
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
            </div>

            {/* Right Section */}
            <div className="col-span-2 bg-white border shadow-lg p-8 rounded-xl">
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
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        );
        }
