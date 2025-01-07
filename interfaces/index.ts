export interface PersonalInfo {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
}

export interface Achievement {
    title: string;
    details: string;
}

export interface Experience {
    title: string;
    company?: string;
    duration: string;
    location?: string;
    description: string[];
}

export interface ProjectItem {
    name: string;
    link: string;
    description: string[];
}

export interface ProjectCategory {
    category: string;
    items: ProjectItem[];
}

export interface Education {
    degree: string;
    school: string;
    duration: string;
}

export interface Language {
    name: string;
    level: string;
}

export interface CertificationItem {
    title: string;
    description: string;
}

export interface ResumeData {
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
