import {
  FaUser,
  FaLaptopCode,
  FaSuitcase,
  FaGraduationCap,
  FaInfoCircle,
  FaBullseye,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa";

export default function Resume() {
  const personalInfo = [
    { label: "Email", value: "stanislav@example.com" },
    { label: "Phone", value: "+380 67 123 4567" },
    { label: "Location", value: "Ukraine, Kharkiv" },
    { label: "Languages", value: "Ukrainian (Native), English (Intermediate)" },
  ];

  const technicalSkills = [
    "HTML, CSS, JavaScript, React, VueJS",
    "Magento 2, Shopify, WordPress",
    "Responsive Layout, Accessibility",
    "Git, SCSS, TailwindCSS",
  ];

  const projects = {
    Magento: [
      {
        name: "Nuko E-Supermarket",
        description: [
          "Developed Magento 2 customizations, breadcrumbs, and advanced menus.",
          "Implemented a PWA-like mobile layout for improved responsiveness.",
        ],
        duration: "5 months",
      },
      {
        name: "SFERA",
        description: [
          "Performed frontend development and bug fixes for a Magento 2 store.",
          "Enhanced user experience through UI improvements.",
        ],
        duration: "3 months",
      },
    ],
    Shopify: [
      {
        name: "Swimwear World",
        description: [
          "Customized Shopify themes and optimized frontend layouts.",
          "Integrated Liquid templates for dynamic product displays.",
        ],
        duration: "3 months",
      },
      {
        name: "Modern Style",
        description: [
          "Built custom Shopify theme for a fashion store.",
          "Integrated advanced cart functionality and responsive designs.",
        ],
        duration: "4 months",
      },
    ],
    WordPress: [
      {
        name: "Creative Agency Site",
        description: [
          "Developed a WordPress site using Elementor for a design agency.",
          "Implemented SEO optimization and enhanced page speed.",
        ],
        duration: "2 months",
      },
      {
        name: "Health Blog",
        description: [
          "Customized WordPress theme and integrated plugins for blogging functionality.",
          "Added multilingual support using WPML.",
        ],
        duration: "3 months",
      },
    ],
    NextJS: [
      {
        name: "Portfolio Builder",
        description: [
          "Developed a portfolio website using Next.js and TailwindCSS.",
          "Optimized performance and implemented image handling with Next/Image.",
        ],
        duration: "2 months",
      },
      {
        name: "Learning Hub",
        description: [
          "Built an e-learning platform with reusable Next.js components.",
          "Implemented user authentication with NextAuth.",
        ],
        duration: "6 months",
      },
    ],
  };

  return (
      <div className="min-h-screen bg-white text-textPrimary p-8">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg">
          {/* Left Section */}
          <div className="bg-white text-background border shadow-lg p-8 rounded-[50px] mt-[80px] -mr-[80px] z-10 h-full">
            <div className="flex gap-4 text-5xl justify-end">
              <FaGlobe />
              <FaBriefcase/>
            </div>

            {/* Personal Info */}
            <div className="bg-background rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-xl font-heading font-bold flex items-center">
                <FaInfoCircle className="mr-2 text-accent" />
                Personal Info
              </h2>
              <ul className="mt-4 space-y-2">
                {personalInfo.map((info, index) => (
                    <li key={index} className="text-sm text-textSecondary">
                      <strong>{info.label}: </strong>
                      {info.value}
                    </li>
                ))}
              </ul>
            </div>

            {/* Career Objective */}
            <div className="bg-background rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-heading font-bold flex items-center">
                <FaBullseye className="mr-2 text-accent" />
                Career Objective
              </h2>
              <p className="text-sm mt-2 text-textSecondary">
                Active and communicative <strong>Frontend Developer</strong> with
                <strong> 4 years</strong> of experience, specializing in
                <strong> Magento 2, Shopify, WordPress, and NextJS</strong>.
                Focused on delivering high-quality, pixel-perfect web solutions.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="bg-background rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-heading font-bold flex items-center">
                <FaLaptopCode className="mr-2 text-secondaryAccent" />
                Technical Skills
              </h2>
              <ul className="list-disc list-inside text-sm mt-2 text-textSecondary">
                {technicalSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="bg-background rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-heading font-bold flex items-center">
                <FaGraduationCap className="mr-2 text-accent" />
                Education
              </h2>
              <p className="text-sm mt-2 text-textSecondary">
                KHARKIV NATIONAL UNIVERSITY OF RADIO ELECTRONICS<br />
                Honors degree in “Data Security in Telecommunication Systems,”
                2001
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2 bg-cardBackground p-8 rounded-[50px] pl-[80px] pt-[80px]">
            <h1 className="text-4xl font-heading font-bold flex items-center justify-end">
              <FaUser className="mr-2 text-accent"/>
              Stanislav Aleksandronets
            </h1>
            <p className="text-lg my-6 text-textSecondary flex justify-start">
              <span className="border-white border rounded-[50px] py-4 px-8 text-2xl">Ecommerce Frontend Developer</span>
            </p>

            <h2 className="text-2xl font-heading font-bold flex items-center">
              <FaSuitcase className="mr-2 text-secondaryAccent"/>
              Notable Projects by Technology
            </h2>

            {/* Projects */}
            {Object.keys(projects).map((tech, index) => (
                <div key={index} className="mt-8">
                  <h3 className="text-xl font-heading font-bold text-accent">
                    {tech} Projects
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {projects[tech].map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-background rounded-lg shadow-md p-6 w-full md:w-[48%]"
                        >
                          <h4 className="text-lg font-heading font-semibold">
                            {project.name}
                          </h4>
                          <p className="text-sm mt-2 text-textSecondary">
                            Duration: {project.duration}
                          </p>
                          <ul className="list-disc list-inside text-sm mt-2 text-textSecondary">
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
  );
}
