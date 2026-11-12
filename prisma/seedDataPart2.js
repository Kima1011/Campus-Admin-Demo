// prisma/seedDataPart2.js - Second batch of verified institutions
// Covering NITs, IIITs, Medical, Law, State Universities, and Private Universities

const collegesDataPart2 = [
  {
    slug: "iim-lucknow",
    name: "Indian Institute of Management Lucknow",
    shortName: "IIM Lucknow",
    collegeType: "IIM",
    ownership: "Public / Government",
    established: 1984,
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226013",
    address: "Prabandh Nagar, IIM Road, Lucknow, Uttar Pradesh",
    campusSize: "200 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "AMBA, AACSB",
    naacGrade: "A++",
    nirfRank: 6,
    nirfCategory: "Management",
    nirfYear: 2024,
    overview: "IIM Lucknow is the fourth IIM in India, known for academic rigor, agribusiness management, and its modern satellite campus in Noida for executive education.",
    admissionProcess: "Admission is conducted via CAT score, WAT and Personal Interview.",
    eligibilitySummary: "Bachelor's degree with 50% marks + CAT 98.5+ percentile.",
    highestPackage: 123.0,
    averagePackage: 32.2,
    medianPackage: 30.0,
    placementYear: 2024,
    topRecruiters: "McKinsey, BCG, Bain, Mastercard, Amazon, Microsoft, TAS",
    facilities: "Gyanodaya Library, Sports Complex, 16 Hostels, Computer Center",
    officialWebsite: "https://www.iiml.ac.in",
    admissionUrl: "https://www.iiml.ac.in/admission",
    sourceReference: "NIRF 2024 Management & IIM Lucknow Placement Report 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.8,
    reviewCount: 165,
    isFeatured: true,
    courses: [
      {
        courseName: "PGP in Management (MBA)",
        degreeLevel: "PG",
        stream: "Management",
        specialization: "General Management",
        duration: "2 Years",
        totalTuitionFee: "₹20.75 Lakhs",
        annualFee: "₹10.37 Lakhs",
        seats: 480,
        examAccepted: "CAT",
        eligibility: "Bachelor's degree with 50% + CAT 98.5+ percentile"
      }
    ],
    cutoffs: [
      { courseName: "PGP (MBA)", examName: "CAT 2024", round: "PI Shortlist", category: "General", quota: "All India", openingRank: 98, closingRank: 99.2 }
    ],
    placements: [
      { year: 2024, highestPackage: 123.0, averagePackage: 32.2, medianPackage: 30.0, placementRate: "100%", totalOffers: 576, topRecruiters: "McKinsey, BCG, Mastercard" }
    ],
    rankings: [
      { agency: "NIRF", rank: 6, category: "Management", year: 2024 }
    ],
    faqs: [
      { question: "What is IIM Lucknow known for?", answer: "IIM Lucknow is renowned for its intense academic curriculum, finance and marketing faculties, and PGP-ABM program." }
    ]
  },

  {
    slug: "iim-kozhikode",
    name: "Indian Institute of Management Kozhikode",
    shortName: "IIM Kozhikode",
    collegeType: "IIM",
    ownership: "Public / Government",
    established: 1996,
    city: "Kozhikode",
    state: "Kerala",
    pincode: "673570",
    address: "IIMK Campus P.O., Kunnamangalam, Kozhikode, Kerala",
    campusSize: "112 Acres (Hilltop)",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "EQUIS, AMBA",
    naacGrade: "A++",
    nirfRank: 4,
    nirfCategory: "Management",
    nirfYear: 2024,
    overview: "Set on two picturesque hillocks in the Western Ghats of Kerala, IIM Kozhikode is ranked 4th in India by NIRF 2024. It is pioneer of gender diversity in management education and Indian Business Museum.",
    admissionProcess: "Admission is via CAT score followed by WAT and Personal Interview.",
    eligibilitySummary: "Bachelor's degree with 50% + CAT 98+ percentile.",
    highestPackage: 72.0,
    averagePackage: 28.05,
    medianPackage: 27.0,
    placementYear: 2024,
    topRecruiters: "Bain, McKinsey, Deloitte, PwC, Goldman Sachs, JPMorgan Chase, Reliance",
    facilities: "Indian Business Museum, Hilltop Amphitheatres, Modern Air-conditioned Hostels",
    officialWebsite: "https://www.iimk.ac.in",
    admissionUrl: "https://www.iimk.ac.in/academics/pgp/admission",
    sourceReference: "NIRF 2024 Management & IIMK Official Placements 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.8,
    reviewCount: 145,
    isFeatured: true,
    courses: [
      {
        courseName: "Post Graduate Programme in Management (PGP/MBA)",
        degreeLevel: "PG",
        stream: "Management",
        specialization: "General Management",
        duration: "2 Years",
        totalTuitionFee: "₹20.50 Lakhs",
        annualFee: "₹10.25 Lakhs",
        seats: 480,
        examAccepted: "CAT",
        eligibility: "Bachelor's with 50% marks + CAT 98+ percentile"
      }
    ],
    cutoffs: [
      { courseName: "PGP (MBA)", examName: "CAT 2024", round: "PI Shortlist", category: "General", quota: "All India", openingRank: 98, closingRank: 99.1 }
    ],
    placements: [
      { year: 2024, highestPackage: 72.0, averagePackage: 28.05, medianPackage: 27.0, placementRate: "100%", totalOffers: 559, topRecruiters: "Bain, McKinsey, Deloitte" }
    ],
    rankings: [
      { agency: "NIRF", rank: 4, category: "Management", year: 2024 }
    ],
    faqs: [
      { question: "Where is IIM Kozhikode campus located?", answer: "It is located atop two scenic hillocks in Kunnamangalam, Kozhikode, offering breathtaking panoramic views." }
    ]
  },

  {
    slug: "spjimr-mumbai",
    name: "S.P. Jain Institute of Management and Research",
    shortName: "SPJIMR Mumbai",
    collegeType: "Private Autonomous",
    ownership: "Private / Bharatiya Vidya Bhavan",
    established: 1981,
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400058",
    address: "Bhavan's Campus, Munshi Nagar, Andheri West, Mumbai, Maharashtra",
    campusSize: "45 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "AACSB, AMBA, AICTE",
    naacGrade: "A++",
    nirfRank: 20,
    nirfCategory: "Management",
    nirfYear: 2024,
    overview: "SPJIMR is a premier private business school situated in Mumbai. Widely admired for its profile-based admission calls, Autumn Internships, and non-classroom learning initiatives like Abhyudaya and DOCC.",
    admissionProcess: "Admits through CAT and GMAT with early profile-based calls and regular score-based shortlist followed by two rounds of group interviews.",
    eligibilitySummary: "Bachelor's degree with 50% + CAT 85+ percentile for profile calls or 95+ for score calls.",
    highestPackage: 81.0,
    averagePackage: 33.0,
    medianPackage: 31.5,
    placementYear: 2024,
    topRecruiters: "HUL, P&G, ITC, BCG, McKinsey, Bain & Company, Amazon, Microsoft, Tata Sons",
    facilities: "FinTech Lab, Abhyudaya Community Centre, Executive Hostels, Cultural Amphitheatre",
    officialWebsite: "https://www.spjimr.org",
    admissionUrl: "https://spjimr.org/admissions",
    sourceReference: "Financial Times Global MBA 2024 & SPJIMR Placement Statement 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.8,
    reviewCount: 150,
    isFeatured: true,
    courses: [
      {
        courseName: "PGDM (Post Graduate Diploma in Management)",
        degreeLevel: "PG",
        stream: "Management",
        specialization: "Marketing, Finance, Operations, Information Management",
        duration: "2 Years",
        totalTuitionFee: "₹22.50 Lakhs",
        annualFee: "₹11.25 Lakhs",
        seats: 300,
        examAccepted: "CAT / GMAT",
        eligibility: "Bachelor's degree with 50% marks + CAT/GMAT + interview"
      }
    ],
    cutoffs: [
      { courseName: "PGDM", examName: "CAT 2024", round: "Profile/Score", category: "General", quota: "All India", openingRank: 85, closingRank: 96 }
    ],
    placements: [
      { year: 2024, highestPackage: 81.0, averagePackage: 33.0, medianPackage: 31.5, placementRate: "100%", totalOffers: 340, topRecruiters: "HUL, P&G, BCG, McKinsey" }
    ],
    rankings: [
      { agency: "NIRF", rank: 20, category: "Management", year: 2024 },
      { agency: "FT Global Masters in Management", rank: 35, category: "Global", year: 2024 }
    ],
    faqs: [
      { question: "What is profile-based call at SPJIMR?", answer: "Candidates with exceptional academic records and extracurricular achievements can be shortlisted even before CAT results are declared." }
    ]
  },

  {
    slug: "pgimer-chandigarh",
    name: "Postgraduate Institute of Medical Education and Research",
    shortName: "PGIMER Chandigarh",
    collegeType: "Central Medical Autonomous",
    ownership: "Public / Government",
    established: 1962,
    city: "Chandigarh",
    state: "Chandigarh",
    pincode: "160012",
    address: "Sector 12, Chandigarh",
    campusSize: "277 Acres",
    logoUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Institute of National Importance, NMC",
    naacGrade: "A++",
    nirfRank: 2,
    nirfCategory: "Medical",
    nirfYear: 2024,
    overview: "PGIMER Chandigarh holds NIRF Rank 2 in India for Medical institutions. It is a world-class apex tertiary care hospital and postgraduate research institution dedicated to superspecialty healthcare.",
    admissionProcess: "MD/MS/MDS admissions are through INI CET; DM/MCh admissions are through INI SS.",
    eligibilitySummary: "MBBS degree recognized by NMC and completed compulsory rotatory internship.",
    highestPackage: 30.0,
    averagePackage: 17.5,
    medianPackage: 15.0,
    placementYear: 2024,
    topRecruiters: "Premier Government & Private Superspecialty Hospitals, Academic Faculty",
    facilities: "Nehru Hospital, Advanced Eye Centre, Advanced Cardiac Centre, Research Blocks",
    officialWebsite: "https://pgimer.edu.in",
    admissionUrl: "https://pgimer.edu.in",
    sourceReference: "NIRF 2024 Medical & PGIMER Official",
    lastVerified: "2024-10-18",
    ratingOverall: 4.9,
    reviewCount: 110,
    isFeatured: true,
    courses: [
      {
        courseName: "MD / MS in Clinical Disciplines",
        degreeLevel: "PG",
        stream: "Medical",
        specialization: "Radio-Diagnosis, Internal Medicine, Surgery",
        duration: "3 Years",
        totalTuitionFee: "₹3,500",
        annualFee: "₹1,160",
        seats: 310,
        examAccepted: "INI CET",
        eligibility: "MBBS degree + INI CET top percentile"
      }
    ],
    cutoffs: [
      { courseName: "MD Radio-Diagnosis", examName: "INI CET 2024", round: "Round 1", category: "General", quota: "All India", openingRank: 1, closingRank: 25 }
    ],
    placements: [
      { year: 2024, highestPackage: 30.0, averagePackage: 17.5, medianPackage: 15.0, placementRate: "100%", totalOffers: 280, topRecruiters: "Top Medical Colleges, Apollo, Fortis" }
    ],
    rankings: [
      { agency: "NIRF", rank: 2, category: "Medical", year: 2024 }
    ],
    faqs: [
      { question: "Does PGIMER offer MBBS?", answer: "No, PGIMER offers only postgraduate (MD/MS) and superspecialty (DM/MCh) degrees along with paramedical and nursing programs." }
    ]
  },

  {
    slug: "kgmu-lucknow",
    name: "King George's Medical University",
    shortName: "KGMU Lucknow",
    collegeType: "State Medical University",
    ownership: "Public / Government",
    established: 1905,
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226003",
    address: "Shah Mina Rd, Chowk, Lucknow, Uttar Pradesh",
    campusSize: "100 Acres",
    logoUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    accreditation: "NMC, NAAC A+",
    naacGrade: "A+",
    nirfRank: 12,
    nirfCategory: "Medical",
    nirfYear: 2024,
    overview: "Established in 1905, KGMU is one of the oldest and largest government medical universities in India, treating over 10,000 outpatients daily across its vast heritage campus in Lucknow.",
    admissionProcess: "MBBS admissions are through NEET UG via MCC (15% All India Quota) and UP DGME (85% State Quota).",
    eligibilitySummary: "Class 12 with 50% in PCB + NEET UG score.",
    highestPackage: 22.0,
    averagePackage: 13.0,
    medianPackage: 11.5,
    placementYear: 2024,
    topRecruiters: "KGMU Hospital, Max Healthcare, Apollo, Medanta The Medicity",
    facilities: "4,500-Bed Hospital, Centenary Hospital, Historic Clock Tower, Resident Hostels",
    officialWebsite: "https://www.kgmu.org",
    admissionUrl: "https://upneet.gov.in",
    sourceReference: "NIRF 2024 Medical & UP NEET Counselling 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.6,
    reviewCount: 220,
    isFeatured: true,
    courses: [
      {
        courseName: "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
        degreeLevel: "UG",
        stream: "Medical",
        specialization: "General Medicine",
        duration: "5.5 Years",
        totalTuitionFee: "₹2.25 Lakhs",
        annualFee: "₹45,000",
        seats: 250,
        examAccepted: "NEET UG",
        eligibility: "10+2 with 50% in PCB + NEET UG rank"
      }
    ],
    cutoffs: [
      { courseName: "MBBS (AIQ)", examName: "NEET UG 2024", round: "Round 1", category: "General", quota: "All India", openingRank: 120, closingRank: 1450 }
    ],
    placements: [
      { year: 2024, highestPackage: 22.0, averagePackage: 13.0, medianPackage: 11.5, placementRate: "100%", totalOffers: 250, topRecruiters: "Max, Apollo, Medanta" }
    ],
    rankings: [
      { agency: "NIRF", rank: 12, category: "Medical", year: 2024 }
    ],
    faqs: [
      { question: "How many beds does KGMU hospital have?", answer: "KGMU has approximately 4,500 beds across various medical and surgical units, making it one of the largest in Asia." }
    ]
  },

  {
    slug: "nalsar-hyderabad",
    name: "NALSAR University of Law",
    shortName: "NALSAR Hyderabad",
    collegeType: "National Law University",
    ownership: "Public / State Statutory",
    established: 1998,
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500101",
    address: "Justice City, Shameerpet, Medchal-Malkajgiri, Hyderabad, Telangana",
    campusSize: "55 Acres",
    logoUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&q=80",
    accreditation: "Bar Council of India, UGC, NAAC A++",
    naacGrade: "A++",
    nirfRank: 3,
    nirfCategory: "Law",
    nirfYear: 2024,
    overview: "NALSAR University of Law in Hyderabad is ranked 3rd nationally by NIRF 2024. Renowned for its residential campus in Shameerpet, moot court victories, and corporate law placements.",
    admissionProcess: "Admission to BA LLB (Hons.) and LLM is through CLAT.",
    eligibilitySummary: "Class 12 with 45% + CLAT top rank.",
    highestPackage: 20.0,
    averagePackage: 15.5,
    medianPackage: 14.5,
    placementYear: 2024,
    topRecruiters: "Shardul Amarchand Mangaldas, Trilegal, Khaitan & Co, Cyril Amarchand Mangaldas, Luthra & Luthra",
    facilities: "Moot Court Halls, Air-conditioned Law Library, 8 Hostels, Sports Complex",
    officialWebsite: "https://www.nalsar.ac.in",
    admissionUrl: "https://consortiumofnlus.ac.in",
    sourceReference: "NIRF 2024 Law & Consortium of NLUs 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.8,
    reviewCount: 135,
    isFeatured: true,
    courses: [
      {
        courseName: "B.A. LL.B. (Hons.)",
        degreeLevel: "UG",
        stream: "Law",
        specialization: "Corporate & Cyber Law",
        duration: "5 Years",
        totalTuitionFee: "₹13.50 Lakhs",
        annualFee: "₹2.70 Lakhs",
        seats: 132,
        examAccepted: "CLAT UG",
        eligibility: "10+2 with 45% marks + CLAT UG Top 175 rank"
      }
    ],
    cutoffs: [
      { courseName: "B.A. LL.B. (Hons.)", examName: "CLAT 2024", round: "Round 1", category: "General", quota: "All India", openingRank: 99, closingRank: 175 }
    ],
    placements: [
      { year: 2024, highestPackage: 20.0, averagePackage: 15.5, medianPackage: 14.5, placementRate: "95%", totalOffers: 92, topRecruiters: "Trilegal, Khaitan & Co, SAM" }
    ],
    rankings: [
      { agency: "NIRF", rank: 3, category: "Law", year: 2024 }
    ],
    faqs: [
      { question: "What is the CLAT cutoff for NALSAR?", answer: "General category cutoffs typically close around All India Rank 165-175." }
    ]
  },

  {
    slug: "anna-university",
    name: "Anna University Chennai",
    shortName: "Anna University",
    collegeType: "State University",
    ownership: "Public / Government",
    established: 1978,
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600025",
    address: "Sardar Patel Road, Guindy, Chennai, Tamil Nadu",
    campusSize: "189 Acres",
    logoUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    accreditation: "UGC, AICTE, NAAC A++ (CGPA 3.83)",
    naacGrade: "A++",
    nirfRank: 13,
    nirfCategory: "Engineering",
    nirfYear: 2024,
    overview: "Anna University is a premier public state university located in Guindy, Chennai. Its College of Engineering, Guindy (CEG) is one of the oldest technical colleges in Asia, dating back to 1794.",
    admissionProcess: "Undergraduate admissions are conducted through Tamil Nadu Engineering Admissions (TNEA) based on Class 12 PCM normalized cutoffs.",
    eligibilitySummary: "Class 12 with Physics, Chemistry, and Math; TNEA normalized cutoff (199+/200 for CEG CSE).",
    highestPackage: 40.0,
    averagePackage: 8.5,
    medianPackage: 7.2,
    placementYear: 2024,
    topRecruiters: "TCS, Infosys, Cognizant, Caterpillar, Hyundai, Qualcomm, Zoho, Amazon",
    facilities: "CEG Campus, Ramanujan Computing Centre, Central Library, Hostels, Swimming Pool",
    officialWebsite: "https://www.annauniv.edu",
    admissionUrl: "https://www.tneaonline.org",
    sourceReference: "NIRF 2024 Engineering & TNEA Official 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.6,
    reviewCount: 410,
    isFeatured: true,
    courses: [
      {
        courseName: "B.E. in Computer Science and Engineering (CEG Campus)",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Computer Science",
        duration: "4 Years",
        totalTuitionFee: "₹2.20 Lakhs",
        annualFee: "₹55,000",
        seats: 300,
        examAccepted: "TNEA (12th Marks)",
        eligibility: "10+2 with PCM + TNEA aggregate 199.5+/200"
      }
    ],
    cutoffs: [
      { courseName: "B.E. CSE CEG", examName: "TNEA 2024", round: "Round 1", category: "General", quota: "Home State", openingRank: 1, closingRank: 150 }
    ],
    placements: [
      { year: 2024, highestPackage: 40.0, averagePackage: 8.5, medianPackage: 7.2, placementRate: "88%", totalOffers: 1850, topRecruiters: "Caterpillar, Qualcomm, Zoho" }
    ],
    rankings: [
      { agency: "NIRF", rank: 13, category: "Engineering", year: 2024 }
    ],
    faqs: [
      { question: "How does admission work for Anna University CEG?", answer: "Admission for Tamil Nadu seats is strictly through TNEA based on Class 12 board marks (Math 100 + Physics 50 + Chemistry 50 = 200 total)." }
    ]
  },

  {
    slug: "jadavpur-university",
    name: "Jadavpur University Kolkata",
    shortName: "Jadavpur University",
    collegeType: "State University",
    ownership: "Public / Government",
    established: 1955,
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700032",
    address: "188, Raja S.C. Mallick Rd, Jadavpur, Kolkata, West Bengal",
    campusSize: "58 Acres",
    logoUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    accreditation: "UGC, NAAC A",
    naacGrade: "A",
    nirfRank: 9,
    nirfCategory: "University",
    nirfYear: 2024,
    overview: "Jadavpur University in Kolkata is famed for delivering world-class engineering, arts, and science education at negligible tuition fees (~₹10,000 for 4 years of engineering). Ranked 9th among universities by NIRF 2024.",
    admissionProcess: "Engineering admissions are conducted through the West Bengal Joint Entrance Examination (WBJEE). Arts and Science admit via university entrance tests.",
    eligibilitySummary: "Class 12 with 60% in PCM + WBJEE top rank.",
    highestPackage: 85.0,
    averagePackage: 12.8,
    medianPackage: 10.5,
    placementYear: 2024,
    topRecruiters: "Google, Microsoft, Amazon, Texas Instruments, Airbus, PwC, Samsung, Schlumberger",
    facilities: "Central Library with over 6.5 lakh volumes, Salt Lake Second Campus, TEQIP labs",
    officialWebsite: "http://www.jaduniv.edu.in",
    admissionUrl: "https://wbjeeb.nic.in",
    sourceReference: "NIRF 2024 University & WBJEE 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.7,
    reviewCount: 380,
    isFeatured: true,
    courses: [
      {
        courseName: "B.Tech in Computer Science and Engineering",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Computer Science",
        duration: "4 Years",
        totalTuitionFee: "₹10,000",
        annualFee: "₹2,500",
        seats: 64,
        examAccepted: "WBJEE",
        eligibility: "10+2 with 60% in PCM + WBJEE Top 100 rank"
      }
    ],
    cutoffs: [
      { courseName: "B.Tech CSE", examName: "WBJEE 2024", round: "Round 1", category: "General", quota: "Home State", openingRank: 1, closingRank: 95 }
    ],
    placements: [
      { year: 2024, highestPackage: 85.0, averagePackage: 12.8, medianPackage: 10.5, placementRate: "92%", totalOffers: 910, topRecruiters: "Google, Microsoft, Texas Instruments" }
    ],
    rankings: [
      { agency: "NIRF", rank: 9, category: "University", year: 2024 }
    ],
    faqs: [
      { question: "Why is Jadavpur University so affordable?", answer: "As a state university with strong government subvention, 4-year B.Tech tuition is under ₹10,000 total, making it one of the most cost-effective engineering institutes worldwide." }
    ]
  },

  {
    slug: "thapar-institute",
    name: "Thapar Institute of Engineering and Technology",
    shortName: "Thapar Institute",
    collegeType: "Deemed University",
    ownership: "Private",
    established: 1956,
    city: "Patiala",
    state: "Punjab",
    pincode: "147004",
    address: "Bhadson Rd, Adarsh Nagar, Prem Nagar, Patiala, Punjab",
    campusSize: "250 Acres",
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=160&q=80",
    bannerUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    accreditation: "NAAC A+, UGC, ABET",
    naacGrade: "A+",
    nirfRank: 22,
    nirfCategory: "Engineering",
    nirfYear: 2024,
    overview: "Thapar Institute (TIET) is one of North India's oldest and most prestigious private engineering universities, ranked 22nd by NIRF 2024. It has academic partnership with Trinity College Dublin and strong corporate tie-ups.",
    admissionProcess: "B.Tech admissions are based 50% on JEE Main percentile and 50% on Class 12 board marks.",
    eligibilitySummary: "Class 12 with 70% in PCM and JEE Main score.",
    highestPackage: 55.75,
    averagePackage: 11.9,
    medianPackage: 9.5,
    placementYear: 2024,
    topRecruiters: "Microsoft, Amazon, Apple, American Express, Bain, Deloitte, JP Morgan, Samsung",
    facilities: "Nava Nalanda Central Library, Modern Learning Laboratories, 14 Hostels, Sports Complex",
    officialWebsite: "https://www.thapar.edu",
    admissionUrl: "https://admissions.thapar.edu",
    sourceReference: "NIRF 2024 Engineering & TIET Placement Brochure 2024",
    lastVerified: "2024-10-18",
    ratingOverall: 4.5,
    reviewCount: 310,
    isFeatured: true,
    courses: [
      {
        courseName: "B.E. in Computer Engineering",
        degreeLevel: "UG",
        stream: "Engineering",
        specialization: "Computer Engineering",
        duration: "4 Years",
        totalTuitionFee: "₹18.50 Lakhs",
        annualFee: "₹4.62 Lakhs",
        seats: 480,
        examAccepted: "JEE Main / 12th Board",
        eligibility: "10+2 with 70% in PCM + JEE Main 96+ percentile"
      }
    ],
    cutoffs: [
      { courseName: "B.E. Computer Engineering", examName: "JEE Main 2024", round: "Round 2", category: "General", quota: "Outside Punjab", openingRank: 12000, closingRank: 32000 }
    ],
    placements: [
      { year: 2024, highestPackage: 55.75, averagePackage: 11.9, medianPackage: 9.5, placementRate: "90%", totalOffers: 1820, topRecruiters: "Microsoft, Amazon, Amex" }
    ],
    rankings: [
      { agency: "NIRF", rank: 22, category: "Engineering", year: 2024 }
    ],
    faqs: [
      { question: "What is the Punjab quota at Thapar?", answer: "50% of the total seats are reserved for students who completed Class 12 in the state of Punjab." }
    ]
  }
];

module.exports = { collegesDataPart2 };

