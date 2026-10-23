TalentFlow — AI Hiring Platform
TalentFlow is a full-stack AI-powered hiring platform designed to help recruiters manage the complete recruitment lifecycle from one dashboard.

Features
Recruiter dashboard with hiring pipeline overview
Candidate creation and profile management
Resume upload and resume parsing
AI-powered candidate summaries
Candidate ranking based on job requirements
Skill matching and skill-gap identification
Candidate search and filtering
Interview scheduling and tracking
AI recruiter copilot for hiring questions
AI-generated interview questions
Job opening management
Candidate status tracking
Responsive recruiter experience
Deployment-ready Next.js architecture
AI Capabilities
The AI recruiter copilot helps recruiters:

Summarize candidate resumes
Extract skills, experience, education, and achievements
Compare candidates against a job description
Recommend suitable candidates
Identify missing or weak skills
Generate technical and behavioral interview questions
Suggest follow-up questions for interviews
Provide structured hiring insights
Technology Stack
Next.js with App Router
React
TypeScript
Tailwind CSS
shadcn/ui
Vercel AI SDK
Vercel AI Gateway
REST API route handlers
Responsive and accessible UI
Vercel deployment
Application Workflow
A recruiter signs in to the platform.
The recruiter creates a job opening and adds requirements.
Candidate resumes are uploaded and organized.
Resume information is parsed into structured candidate data.
AI analyzes candidate skills and experience.
Candidates are ranked according to the job requirements.
The recruiter reviews recommendations and candidate profiles.
Interviews are scheduled and tracked.
The AI copilot assists with interview preparation and hiring decisions.
The recruiter updates each candidate through the hiring pipeline.
Project Architecture
app/
├── api/
│   └── copilot/
│       └── route.ts       # AI recruiter copilot API
├── page.tsx               # Main TalentFlow application
├── layout.tsx             # Application layout and metadata
└── globals.css            # Global styles and design tokens
Getting Started
Install dependencies
npm install
Start the development server
npm run dev
Open http://localhost:3000 in your browser.

Environment Variables
Configure the required AI Gateway environment variable in your local environment or Vercel project settings:

AI_GATEWAY_API_KEY=your_key_here
Do not commit secrets or environment files to the repository.

API Example
The recruiter copilot is exposed through:

POST /api/copilot
Example request:

{
  "message": "Create interview questions for a senior React developer"
}
Production Deployment
TalentFlow can be deployed using Vercel:

Push the project to GitHub.
Import the repository into Vercel.
Configure the required environment variables.
Deploy the application.
Verify the production URL and AI copilot workflow.
Why This Project Is Interview-Ready
This project demonstrates practical end-to-end product development skills:

Building a real-world HR workflow
Designing reusable and responsive frontend components
Creating server-side API routes
Integrating AI into a business application
Structuring data for candidate and job management
Handling forms, validation, and user interactions
Designing recruiter-focused dashboards
Applying accessibility and responsive design principles
Preparing an application for cloud deployment
Future Improvements
Database persistence for jobs, candidates, and interviews
Role-based access for recruiters, hiring managers, and interviewers
Secure authentication and session management
Calendar provider integration
Email notifications and interview reminders
PDF resume upload and extraction
Interview feedback forms
Hiring analytics and reporting
Audit logs for recruiter activity
Bias monitoring and explainable candidate scoring
License
This project is intended for portfolio, learning, and demonstration purposes.
