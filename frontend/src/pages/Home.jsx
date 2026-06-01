// import Registration from "../components/home/Registration";
import Infrastructure from "../components/home/Infrastructure";
import Pathways from "../components/home/Pathways";
import HeroSection from "../components/home/HeroSection";
import Objectives from "../components/home/Objectives";
import Impact from "../components/home/impact/Impact";



const Home = () => {
  return (
    <>

      <HeroSection />

     <section id="objectives">
  <Objectives />
</section>

     <section id="impact">
  <Impact />
</section>


     <section id="pathways">
  <Pathways />
</section>

    <section id="facilities">
       <Infrastructure />
    </section>
     
      {/* <Registration /> */}

    </>
  );
};

export default Home;