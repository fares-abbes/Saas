import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <main className="">
      <h1 className="text-2xl underline">Popular Companion</h1>
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
        <CompanionList />
        <CTA />
      </section>
    </main>
  );
}

export default Page