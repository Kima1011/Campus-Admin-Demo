# CAMPUS ADMIN — Higher Education & Career Discovery Platform

<div align="center">
  <h3>India's Premier Higher Education Discovery Platform</h3>
  <p>Inspired by Shiksha.com — Verified Colleges, NIRF Rankings, Placement CTCs, Cutoffs, Exams, and Multi-College Comparison</p>
</div>

---

## 🌟 Overview
**CAMPUS ADMIN** is a full-featured, production-ready Indian higher education and career discovery platform inspired by the functional breadth, information density, and interactive tools of Shiksha.com. It features an original visual brand identity, universal omnisearch, multi-faceted filtering, a 14-tab institutional profile system, side-by-side comparison matrices, multi-exam admission predictors, study abroad portals, and a comprehensive administration dashboard.

---

## 🚀 Key Features

### 1. Universal Omnisearch & Multi-Facet Directory
- **Omnisearch Bar:** Unified search across 40+ colleges, courses, entrance examinations, and cities with trending quick chips.
- **Dynamic Filters:** Filter by 8 Academic Streams (Engineering, Management, Medical, Design, Law, Commerce, Humanities, Hospitality), 18 Indian States, and 12 Institution Types (IITs, NITs, IIITs, IIMs, AIIMS, NLUs, etc.).
- **Sorting Engine:** Instant sorting by NIRF Ranking (Best First), Average CTC (High to Low), Student Ratings, and Alphabetical order.

### 2. Comprehensive 14-Tab College Profile
Each institution (e.g. `/colleges/iit-madras`) features an authenticated profile with 14 dedicated tabs:
1. **Overview:** Official history, campus size, highlights, summary, quick stats.
2. **Courses & Fees:** Tabular directory of degrees, duration, total tuition fees, seat matrix, eligibility, and direct apply actions.
3. **Admissions:** 4-step flowchart, eligibility summary, and official portal links.
4. **Placements:** 3-year historical placement trends, median vs. average CTC, and verified recruiter lists.
5. **Cutoffs:** Opening & closing ranks by course, category (General, OBC, SC, ST, EWS), and quota.
6. **Rankings:** NIRF 2024, QS, Outlook, and India Today historical records.
7. **Scholarships:** Merit-cum-means schemes, National Scholarship Portal (NSP), and alumni endowments.
8. **Infrastructure:** Hostels, libraries, computing clusters, and sports facilities.
9. **Campus Life:** Student festivals, cultural clubs, traditions, and campus culture.
10. **Faculty:** Student-to-faculty ratios, doctoral credentials, and research output.
11. **Reviews:** Verified student reviews with rating criteria breakdowns and a "Write a Review" modal.
12. **Compare:** Peer institutions comparison launcher.
13. **FAQs:** Interactive accordions answering common institutional questions.
14. **Contact:** Physical address, official institutional link, verified data source, and last-verified date.

### 3. Side-by-Side Comparison Matrix (`/compare`)
- Compare up to 4 institutions simultaneously.
- Dynamic dropdown to add peer institutions into vacant slots.
- Deep comparative breakdown across institutional classification, fees, placements, exams accepted, and ratings.
- Printable report view with desktop print and PDF export styling.

### 4. Multi-Exam Admission & Rank Predictor (`/predictor`)
- Predict admission chances for **JEE Main (B.Tech)**, **NEET UG (Medical)**, and **CAT (MBA)**.
- Input rank / percentile, category (General, OBC-NCL, EWS, SC, ST), and home state domicile.
- Results evaluated into **High Probability** (Green), **Moderate Probability** (Amber), and **Reach Probability** (Rose).

### 5. Specialized Portals
- **Study Abroad (`/study-abroad`):** Destination guides for USA (3-Yr STEM OPT), Germany (Tuition-free public universities), UK, Canada, Australia, and Ireland with living costs and post-study work visa rules.
- **Entrance Examinations Hub (`/exams`):** Comprehensive exam schedules (JEE Main, Advanced, NEET UG, CAT, GATE, CLAT) with registration windows, patterns, and syllabus breakdowns.
- **Degree & Career Paths (`/courses`):** Program duration, eligibility, average tuition fees, and salary projections.
- **Student Reviews Forum (`/reviews`):** Verified peer feedback with pros/cons and 5-star criteria submission.
- **Educational News & Circulars (`/news`):** Editorial articles, admission alerts, and exam notifications.
- **Student Dashboard (`/dashboard`):** Personalized student portal for saved colleges and counseling tracking.

### 6. Master Admin Management Console (`/admin`)
- System status and verification metrics.
- College directory manager with live status links.
- Student enquiry and lead tracking with status progression (`PENDING` → `CONTACTED` → `RESOLVED`).
- Student reviews moderation deck.
- Bulk Data Center (`/api/admin/export`): One-click JSON database backup and Microsoft Excel-compatible CSV export.

---

## 🛠️ Tech Stack & Architecture

- **Frontend & Routing:** Next.js 14 (App Router) with React 18 and TypeScript.
- **Styling:** Tailwind CSS with custom academic palette and responsive breakpoints.
- **Icons:** Lucide React icons.
- **Database & ORM:** Prisma ORM with SQLite database (easily switchable to PostgreSQL).
- **State Management:** React Context API with persistent `localStorage` synchronization.

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18.17+ or v20+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd "College campus"

# Install dependencies
npm install

# Push Prisma schema to SQLite database
npx prisma db push

# Seed the database with 41+ verified Indian institutions, exams, and articles
node prisma/seed.js

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 📄 License
This project is created for educational and career discovery demonstration purposes. All institutional trademarks belong to their respective statutory and academic bodies.

