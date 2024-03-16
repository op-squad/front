import Feature from "../components/Feature";
import NavBar from "../components/NavBar";

function Landing() {
  return (
    <div className="min-h-screen font-inter">
      <NavBar />

      {/* Hero section */}
      <div className="flex bg-gray-200 px-40 h-screen flex-col justify-center gap-8">
        <h1 className="font-bold text-7xl">
          AI-Powered Precision for <br />
          Medical Diagnosis
        </h1>
        <p className="font-light text-2xl">
          Maximize efficiency in patient care with <br />
          our advanced AI technology for accurate <br />
          diagnoses and streamlined time <br /> management.
        </p>
        <button className="bg-black font-semibold mb-24 py-2 px-12 w-fit text-white">
          Join US Now!
        </button>
      </div>

      {/* Features section */}
      <section className="flex flex-col h-screen gap-16 justify-center">
        <h1 className="flex justify-center font-bold text-7xl">We Offer...</h1>
        <div className="flex gap-40 justify-center px-64">
          <Feature
            name="Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis,
        nulla vitae."
          />

          <Feature
            name="Feature 2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime perferendis odio."
          />

          <Feature
            name="Feature 3"
            description="Laudantium voluptatum repellat eveniet ipsum. Quasi tenetur illo officiis. Cum."
          />
        </div>
      </section>
    </div>
  );
}

export default Landing;
