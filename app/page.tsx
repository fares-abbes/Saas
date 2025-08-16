import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main className="">
      <h1 className="text-2xl underline">Dashboard</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="learn cryptography"
          topic="cryptography"
          subject="computer science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="123"
          name="learn cryptography"
          topic="cryptography"
          subject="computer science"
          duration={30}
          color="#ffda6e"
        />
        <CompanionCard
          id="123"
          name="learn cryptography"
          topic="cryptography"
          subject="computer science"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA /> 
      </section>
    </main>
  );
};

export default Page;
