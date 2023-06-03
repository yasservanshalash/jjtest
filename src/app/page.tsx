import JobCard from "@/components/cards/JobCard";
import FeaturedJobs from "@/components/layout/landing/featured_jobs/FeaturedJobs";
import CandidatesSection from "@/components/layout/landing/for_candidates/CandidatesSection";
import LandingHeader from "@/components/layout/landing/landing_header/LandingHeader";
import { useSession } from "next-auth/react";
import { prisma } from "../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export default async function Home() {
  // const newUser = await prisma.job.create({
  //   data: {
  //     Title: "",
  //     Employer: "",
  //     Location: "",
  //     YearsOfExperience: 1,
  //     Salary: 2,
  //     TypeOfContract: "",
  //     PositionNeeded: "",
  //     Category: "",
  //     Views: 420,
  //     JobDescription: "",
  //     Responsibilies: ["hello"],
  //     Attractions: ["hello"],
  //     JobSkills: ["hello"],
  //     OtherBenefits: ["hello"],
  //   },
  // });

  const newUser = await prisma.user.create({
    data: {
      email: "yasservanshalash@gmail.com",
    },
  });
  const users = await prisma.job.findMany();
  console.log(users);
  return (
    <main className="bg-white">
      <LandingHeader />
      <CandidatesSection />
      <FeaturedJobs />
      <section className="flex flex-col gap-5 mt-10">
        {/* <Image src={jobApplication} width="300" height="300" alt="job application" style={{filter: "invert(40%) sepia(58%) saturate(2780%) hue-rotate(349deg) brightness(98%) contrast(100%)"}} /> */}
      </section>
    </main>
  );
}
