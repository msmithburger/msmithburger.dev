import { Github, Twitter, Figma, Linkedin } from "lucide-react";

import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoPython from "/public/images/logos/icon-python.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoGraphQL from "/public/images/logos/icon-graphql.svg";
import LogoAWS from "/public/images/logos/icon-aws.svg";
import LogoAWSLight from "/public/images/logos/icon-aws-light.svg";
import LogoTerraform from "/public/images/logos/icon-terraform.svg";
import LogoServerless from "/public/images/logos/icon-serverless.svg";
import LogoPrisma from "/public/images/logos/icon-prisma.svg";
import LogoPrismaLight from "/public/images/logos/icon-prisma-light.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoMui from "/public/images/logos/icon-mui.svg";
import LogoAuth0 from "/public/images/logos/icon-auth0.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoWordpress from "/public/images/logos/icon-wordpress.svg";
import LogoWordpressLight from "/public/images/logos/icon-wordpress-light.svg";
import LogoVSCode from "/public/images/logos/icon-vs-code.svg";
import LogoNotion from "/public/images/logos/icon-notion.svg";
import LogoDocker from "/public/images/logos/icon-docker.svg";
import LogoLinear from "/public/images/logos/icon-linear.svg";
import LogoLinearLight from "/public/images/logos/icon-linear-light.svg";
import LogoUpwork from "/public/images/logos/icon-upwork.svg";
import LogoSyrup from "/public/images/logos/logo-syrup.jpg";
import LogoXngage from "/public/images/logos/logo-xngage.jpg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";
import Image from "next/image";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/msmithburger",
  GITHUB_REPO: "https://github.com/msmithburger/msmithburger.dev",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Work",
    href: "#work",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/msmithburger",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/mattsmithburger/",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <Image
        src={LogoUpwork}
        alt="Upwork"
        className={className}
        width={24}
        height={24}
      />
    ),
    url: "https://www.upwork.com/freelancers/~019d82731062ab67bd",
  },
];

export const PREFERRED_TECHNOLOGIES: TechDetails[] = [
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "GraphQL",
    logo: LogoGraphQL,
    url: "https://graphql.org/",
  },
  {
    label: "AWS",
    logo: LogoAWS,
    darkModeLogo: LogoAWSLight,
    url: "https://aws.amazon.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
];

export const PREFERRED_TOOLS: TechDetails[] = [
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "VSCode",
    logo: LogoVSCode,
    url: "https://code.visualstudio.com/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
  {
    label: "Notion",
    logo: LogoNotion,
    url: "https://notion.so/",
  },
  {
    label: "Linear",
    logo: LogoLinear,
    darkModeLogo: LogoLinearLight,
    url: "https://linear.app/",
  },
];

export const OTHER_TECHNOLOGIES: TechDetails[] = [
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Prisma",
    logo: LogoPrisma,
    darkModeLogo: LogoPrismaLight,
    url: "https://www.prisma.io/",
  },
  {
    label: "Terraform",
    logo: LogoTerraform,
    url: "https://www.terraform.io/",
  },
  {
    label: "Serverless",
    logo: LogoServerless,
    url: "https://www.serverless.com/",
  },
  {
    label: "MUI",
    logo: LogoMui,
    url: "https://mui.com/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Sass",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Wordpress",
    logo: LogoWordpress,
    darkModeLogo: LogoWordpressLight,
    url: "https://wordpress.org/",
  },
  {
    label: "Auth0",
    logo: LogoAuth0,
    url: "https://auth0.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: "Upwork logo",
    position: "Independent Full Stack Developer",
    startDate: new Date(2020, 7),
    currentlyWorkHere: true,
    summary: [
      "Top 1% on the platform with 100% project success.",
      "Designed and implemented custom web applications using a modern tech stack including TypeScript, React (Next.js), Node.js, Tailwind, and AWS.",
      "Collaborated with clients to understand requirements, provide technical guidance, and ensure project milestones were met, resulting in a 100% project success rate and high client satisfaction.",
      "Delivered tailored solutions for clients in diverse industries, including e-commerce, healthcare, finance, and education, demonstrating adaptability and deep technical expertise.",
    ],
  },
  {
    logo: LogoSyrup,
    logoAlt: "Syrup logo",
    position: "Founding Full Stack Developer",
    startDate: new Date(2022, 6),
    endDate: new Date(2023, 6),
    summary: [
      "Built numerous vital features for launch using Next.js, Node.js, TypeScript, GraphQL, PostgreSQL, and AWS, contributing to a robust and scalable platform.",
      "Authored comprehensive standards documentation for incoming developers, ensuring consistency and quality in future development efforts.",
      "Designed and managed a sophisticated data architecture to handle large-scale data ingestion and analytics, leveraging AWS services.",
      "Integrated with OpenAI API to enable real-time email marketing content and campaigns.",
    ],
  },
  {
    logo: LogoXngage,
    logoAlt: "Xngage logo",
    position: "Lead Front End Developer",
    startDate: new Date(2016, 6),
    endDate: new Date(2020, 8),
    summary: [
      "Led the UI practice, establishing workflow processes and consistent coding standards, significantly improving code quality and team efficiency across all projects.",
      "Coordinated project requirements to implementation, providing accurate sizing estimates and detailed task breakdowns.",
      "Initiated the adoption of cutting-edge frontend technologies and frameworks, keeping the consultancy at the forefront of industry trends and standards.",
      "Actively engaged with clients to understand their unique needs, leading to tailored UI solutions that directly addressed key business challenges.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Accounting Portal Web App",
    description:
      "Project for a specialized accounting firm. Their goal was to modernize their client communication and workflow away from a complex excel spreadsheet and into a custom web app. The solution seamlessly integrated with QuickBooks Online, facilitating the direct retrieval of client data. AWS Lambda was used to process data through numerous proprietary calculations. The UI was built with unique and interactive data visualization tools, allowing clients to conveniently engage with and understand their financial data. Eventually, this app became a full fledged SaaS used by many other accounting firms.",
    technologies: [
      "React.js",
      "Next.js",
      "MUI",
      "Typescript",
      "Node.js",
      "AWS: Lambda",
      "PostgreSQL",
      "Prisma",
      "Terraform",
    ],
  },
  {
    name: "Senior Health Education Web App",
    description:
      "Project for EdTech startup focused on senior health. This classroom based application was built to empower older adults with memory loss, Alzheimer’s, dementia, or related conditions through scheduled online classes. My role was to build out the admin portal for the already existing classroom app. This app allowed instructors and administration the ability to manage courses, classes, and participants in one central location. Even though the classroom app was already in progress when I came aboard, I spent considerable amounts of time helping with the socket connections and Agora API.",
    url: "https://www.togetherseniorhealth.com/",
    technologies: [
      "React.js",
      "Next.js",
      "MUI",
      "Typescript",
      "Node.js",
      "AWS: Lambda, S3",
      "MongoDB",
      "Socket.io",
      "Agora (Video Streaming API)",
    ],
  },
  {
    name: "Crime Analytics Web App",
    description:
      "Project for a crime analytics startup wanting to rework their existing infrastructure and enhance the applications UI. This was a complete overhaul of the existing AWS infrastructure from Beanstalk to ECS using Terraform. Many services were split out from the previous monolith including a full data pipeline using Airflow. The UI was also refactored from React.js and vanilla JavaScript to Next.js and TypeScript.",
    technologies: [
      "React.js",
      "Next.js",
      "Typescript",
      "Node.js",
      "GraphQL",
      "AWS: ECS, S3",
      "Apache Airflow",
      "Neo4j",
      "Okta",
      "Terraform",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [];
