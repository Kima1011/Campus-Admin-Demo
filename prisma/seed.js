// prisma/seed.js - Master Seed Script for CAMPUS ADMIN
const { PrismaClient } = require('@prisma/client');
const { collegesData, examsData, articlesData } = require('./seedData');
const { collegesDataPart2 } = require('./seedDataPart2');
const { collegesDataPart3 } = require('./seedDataPart3');

const prisma = new PrismaClient();

async function main() {
  console.log('--- Starting CAMPUS ADMIN Database Seeding ---');

  // Clear existing records to ensure clean state
  await prisma.review.deleteMany();
  await prisma.collegeFaq.deleteMany();
  await prisma.cutoffRecord.deleteMany();
  await prisma.placementRecord.deleteMany();
  await prisma.rankingRecord.deleteMany();
  await prisma.courseOffering.deleteMany();
  await prisma.enquiry.deleteMany();
  await prisma.college.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.article.deleteMany();
  await prisma.user.deleteMany();

  console.log('Cleared existing records.');

  const allColleges = [...collegesData, ...collegesDataPart2, ...collegesDataPart3];
  console.log(`Seeding ${allColleges.length} verified premier institutions across India...`);

  for (const c of allColleges) {
    const { courses, cutoffs, placements, rankings, faqs, ...collegeFields } = c;

    const college = await prisma.college.create({
      data: {
        ...collegeFields,
        courses: {
          create: courses || []
        },
        cutoffs: {
          create: cutoffs || []
        },
        placements: {
          create: placements || []
        },
        rankings: {
          create: rankings || []
        },
        faqs: {
          create: faqs || []
        },
        reviews: {
          create: [
            {
              authorName: "Rohan Verma",
              course: courses && courses[0] ? courses[0].courseName : "B.Tech",
              batchYear: 2024,
              ratingOverall: 4.8,
              ratingFaculty: 4.9,
              ratingInfra: 4.7,
              ratingPlacement: 4.9,
              title: "World class academic rigor and life changing exposure",
              pros: "Top tier peer group, exceptional lab facilities, and unparalleled campus recruitment packages.",
              cons: "High academic workload, intense competition during semester exams.",
              verified: true
            },
            {
              authorName: "Ananya Iyer",
              course: courses && courses[0] ? courses[0].courseName : "B.Tech",
              batchYear: 2023,
              ratingOverall: 4.7,
              ratingFaculty: 4.6,
              ratingInfra: 4.8,
              ratingPlacement: 4.8,
              title: "Exceptional freedom and campus culture",
              pros: "Proactive alumni network, 24/7 library access, vibrant cultural festivals and clubs.",
              cons: "Mess food is average at times, administrative processes can be slow.",
              verified: true
            }
          ]
        }
      }
    });

    console.log(`✓ Seeded ${college.shortName} (${college.city}, ${college.state})`);
  }

  console.log(`\nSeeding ${examsData.length} Entrance Examinations...`);
  for (const ex of examsData) {
    await prisma.exam.create({ data: ex });
    console.log(`✓ Exam: ${ex.name}`);
  }

  console.log(`\nSeeding ${articlesData.length} Educational Articles & Circulars...`);
  for (const art of articlesData) {
    await prisma.article.create({ data: art });
    console.log(`✓ Article: ${art.title}`);
  }

  // Create initial demo admin and student accounts
  console.log('\nSeeding Demo User Accounts...');
  await prisma.user.create({
    data: {
      name: "Admin Officer",
      email: "admin@campusadmin.com",
      passwordHash: "campusadmin@2025", // In production hashed with bcrypt
      role: "ADMIN",
      city: "New Delhi",
      phone: "+91 98765 43210"
    }
  });

  await prisma.user.create({
    data: {
      name: "Aakash Sharma",
      email: "student@example.com",
      passwordHash: "student@2025",
      role: "STUDENT",
      city: "Mumbai",
      phone: "+91 91234 56789",
      streamInterest: "Engineering",
      savedColleges: JSON.stringify(["iit-madras", "iit-bombay", "bits-pilani"])
    }
  });

  // Seed sample enquiry
  await prisma.enquiry.create({
    data: {
      name: "Sneha Patel",
      email: "sneha.patel@gmail.com",
      phone: "+91 98220 11223",
      city: "Ahmedabad",
      courseInterested: "B.Tech in Computer Science and Engineering",
      message: "Looking for scholarship guidance and hostel seat availability for 2025 admissions.",
      status: "PENDING"
    }
  });

  console.log('✓ Created Admin & Student users and sample enquiries.');
  console.log('--- Database Seeding Completed Successfully! ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
