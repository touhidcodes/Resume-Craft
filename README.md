# Resume Craft
**Build your resume. Tell your story.**

[Live demo](https://resume-craft-nine.vercel.app/) · [Report an issue](https://github.com/touhidcodes/Resume-Craft/issues)

## Table of Contents 📖

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Start the frontend](#start-the-frontend)
  - [API configuration](#api-configuration)
  - [Available scripts](#available-scripts)
- [Development challenges](#development-challenges)
- [Contributing](#contributing)
  - [Pull request workflow](#pull-request-workflow)
  - [Commit message format](#commit-message-format)
- [Future direction](#future-direction)
- [Team and contact](#team-and-contact)
- [License](#license)

## Project overview

- **Objective:** Build a feature-rich, easy-to-use online resume builder that helps people create professional, visually appealing application documents.
- **Target Audience:** Job seekers, students, and professionals across industries.

| Problem                                                                     | How Resume Craft addresses it                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Starting from a blank page makes it hard to structure a resume.             | Templates provide editable sections for experience, education, skills, and more.              |
| Tailoring a resume for each role can mean reformatting the entire document. | Live previews, template switching, and section reordering let users see changes as they work. |
| Application files become difficult to track and reuse.                      | A dashboard keeps saved resumes and cover letters together for editing and duplication.       |

**Unique selling point (USP)** — Users can build both documents, reuse a saved version for a new application, and export PDFs from the same workspace.

## MVP and key features

## Project Overview 📊

### Cover Letter Builder

- **Objective:** Build an advanced yet user-friendly online resume builder platform to empower individuals in creating professional, visually appealing resumes effortlessly.
- **Target Audience:** Job seekers, students, and professionals across diverse industries.
- **Key Metrics:**
  - Resume Creation Time: <5 minutes
  - Template Customization Options: 5+
  - User Satisfaction Rate: 95%
  - Daily Active Users: 10+
- **Deployment:** Hosted on Vercel with a CI/CD pipeline.

## ✨ Key Features

#### 1. **Resume Builder**

- Effortlessly create professional resumes in minutes.
- Access **5+ customizable templates** to suit various industries and roles.
- **Live Preview**: See your resume update in real-time as you edit.
- Add, edit, and rearrange sections like work experience, skills, and education with ease.
- Export resumes in **PDF** format, ensuring compatibility across job application platforms.
- **Usage Limit:** Free users can create a 5 free of resumes and cover letters.
- **Subscription Available:** Unlock unlimited resume & cover letter creation, premium templates, and advanced features through our subscription plans.

#### 2. **Cover Letter Builder**

- Craft tailored cover letters to complement your resume.
- Choose from **modern templates** designed for professional use.

#### 3. **User Dashboard**

- Manage all your resumes and cover letters in one place.
- Track and update existing documents with ease.
- **Resume History**: Access previously created resumes for quick edits.

#### 4. **Admin Dashboard**

- Full control over platform management with a **role-based system**.
- View, approve, or manage user-generated resumes and cover letters.
- **User Management**: Add, edit, or deactivate user accounts.

#### 5. **Analytics and Insights**

- **Comprehensive Admin Analytics**:
  - Track platform usage, active users, and template popularity.
  - Monitor export counts and user engagement metrics.
- **Charts and Visual Data**:
  - Visualize user activity trends with real-time charts and graphs.
  - Identify growth opportunities with actionable insights.

#### 6. **User-Created Resumes**

- Maintain a library of user-created resumes for easy duplication or reference.
- Quick-start options for users to build resumes based on their saved preferences.

#### 7. **Additional Features**

- **Fully Responsive**: Accessible on desktop, tablet, and mobile devices.
- **Data Security**: Ensures user data is encrypted and stored securely.
- **Scalable Infrastructure**: Hosted on Vercel for reliability and speed.
- **Continuous Updates**: Regularly adding new templates and features to stay ahead of industry trends.

## Tech Stack 🛠️

- **Frontend:** React.js, Next.js, TypeScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Prisma ORM
- **Authentication:** Firebase, JWT
- **Deployment:** Vercel

- Git
- Node.js 20.x, as specified in `package.json`, with npm

### Start the frontend

```bash
git clone https://github.com/touhidcodes/Resume-Craft.git
cd Resume-Craft
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) or the URL printed by Vite. Create an account or sign in to try the document workflow.

### API configuration

The frontend uses the hosted Resume Craft API by default. The default setup requires no local API server, database, or environment variables. Sign-in, saved documents, and dashboard data depend on the hosted services being reachable.

```bash
npm run dev
```

## Team Overview 👥

Our team is a passionate group of innovators dedicated to building Resume Craft, combining our unique skills to deliver a seamless resume-building experience.

| Name           | Role                          | Contributions                                                            |
| -------------- | ----------------------------- | ------------------------------------------------------------------------ |
| Touhidur Zaman | Team Leader & GitHub Manager  | Led the team, managed GitHub repository, ensured project coordination.   |
| MD Rifat       | Co-Leader & Backend Developer | Designed and implemented backend APIs and system architecture.           |
| Imtiaz Tamim   | Backend Developer             | Contributed to API development and database management.                  |
| Emon Ahmed     | Frontend Developer            | Built responsive UI components and optimized frontend performance.       |
| Rakib Ahmed    | Frontend Developer            | Developed user-facing features and ensured cross-platform compatibility. |
| Nur Muhammad   | Frontend Developer            | Implemented core frontend functionality and styled components.           |

| Challenge                                             | Solution                                                                                     |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Keeping editable fields and the live preview in sync  | The editor and templates read shared document state so changes are reflected as users type.  |
| Handling edits and duplicates for both document types | The dashboard offers separate actions for updating an existing document and creating a copy. |

Contributions are what make the open-source community an amazing place!

### Steps to contribute:

- Fork the Project
- Create a branch (`git checkout -b feature/AmazingFeature`)
- Commit changes (`git commit -m 'Add some AmazingFeature'`)
- Push the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## Future direction

- Add role-specific templates and test how applicant tracking systems parse exported PDFs.
- Add autosave and version history so users can recover earlier drafts.
- Improve keyboard navigation and small-screen editing.
- Add subscription checkout for the plans shown on the pricing page.

## Contact 📬

[LinkedIn](https://www.linkedin.com/in/touhidur-zaman/) · [Email Touhidur Zaman](mailto:touhidcodes@gmail.com)

Touhidur Zaman - [@touhidcodes](https://www.linkedin.com/in/touhidur-zaman/) - touhidcodes@gmail.com

Resume Craft is licensed under the [MIT License](LICENSE.txt).
