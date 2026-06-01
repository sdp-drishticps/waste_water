import { useState } from "react";
import axios from "axios";

const inputStyles = `
  h-[48px]
  md:h-[52px]
  w-full
  rounded-[6px]
  px-[14px]
  md:px-[16px]
  text-[15px]
  md:text-[16px]
  font-light
  font-['Roboto_Condensed']
  text-black
  outline-none
  bg-transparent
  placeholder:text-[#999999]
  border
  border-[#d9d9d9]
  shadow-[0px_7px_4px_-3px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)]
`;

const glassInputStyle = {
  background:
    "linear-gradient(180deg, rgba(209, 236, 244, 0.3) -47.2%, rgba(216, 223, 227, 0.3) 41.99%, rgba(255, 255, 255, 0.3) 192.8%)",
};

const buttonStyle = {
  background:
    "linear-gradient(180deg, rgba(34, 64, 85, 0.3) 9.34%, rgba(128, 212, 255, 0.3) 34.72%, rgba(31, 117, 160, 0.3) 72.8%, rgba(154, 221, 255, 0.3) 108.57%, rgba(34, 69, 89, 0.3) 140.88%)",
};

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    stakeholderCategory: "",
    moduleInterest: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const { data } = await axios.post(
      "http://localhost:5000/api/registrations",
      formData
    );

    alert(
      data.message || "Registration submitted successfully!"
    );

    setFormData({
      fullName: "",
      email: "",
      stakeholderCategory: "",
      moduleInterest: "",
    });
  } catch (error) {
    console.error(error);

    alert(
      error?.response?.data?.message ||
        "Failed to submit registration"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="w-full overflow-hidden bg-white py-[60px] sm:py-[80px] lg:py-[100px] font-['Roboto_Condensed']">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col items-center text-center">
          <h2
            className="
              text-[28px]
              leading-[1.2]
              font-semibold
              text-black
              sm:text-[36px]
              lg:text-[48px]
              lg:leading-[56px]
            "
          >
            Ready to Make an Impact?
          </h2>

          <p
            className="
              mt-[16px]
              max-w-[760px]
              text-[15px]
              leading-[1.7]
              font-light
              text-black
              sm:text-[17px]
              lg:mt-[22px]
              lg:text-[18px]
              lg:leading-[30px]
            "
          >
            Join our upcoming hands-on training modules,
            submit innovative ideas, or schedule an
            industrial visit.

            <br className="hidden md:block" />

            <span className="font-medium text-[#148CCB]">
              Registration is open
            </span>{" "}
            for the next cohort of environmental stewards.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
            mt-[40px]
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:mt-[70px]
            lg:grid-cols-5
            lg:gap-4
            lg:items-end
          "
        >
          <div className="flex flex-col">
            <label className="mb-[8px] text-[15px] md:text-[16px] font-light text-black">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter"
              className={inputStyles}
              style={glassInputStyle}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-[8px] text-[15px] md:text-[16px] font-light text-black">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter"
              className={inputStyles}
              style={glassInputStyle}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-[8px] text-[15px] md:text-[16px] font-light text-black">
              Stakeholder Category
            </label>

            <select
              name="stakeholderCategory"
              value={formData.stakeholderCategory}
              onChange={handleChange}
              className={`${inputStyles} appearance-none cursor-pointer text-[#999999]`}
              style={glassInputStyle}
              required
            >
              <option value="" disabled hidden>
                Select
              </option>

              <option value="School Student" className="text-black">
                School Student
              </option>

              <option value="College / Researcher" className="text-black">
                College / Researcher
              </option>

              <option value="Industry Professional" className="text-black">
                Industry Professional
              </option>

              <option value="Community Member" className="text-black">
                Community Member
              </option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-[8px] text-[15px] md:text-[16px] font-light text-black">
              Module Interest
            </label>

            <select
              name="moduleInterest"
              value={formData.moduleInterest}
              onChange={handleChange}
              className={`${inputStyles} appearance-none cursor-pointer text-[#999999]`}
              style={glassInputStyle}
              required
            >
              <option value="" disabled hidden>
                Select
              </option>

              <option
                value="Basic: Awareness & Fundamentals"
                className="text-black"
              >
                Basic: Awereness & Fundamentals
              </option>

              <option
                value="Intermediate: Quality & Instruments"
                className="text-black"
              >
                Intermediate: Quality & Instruments
              </option>

              <option
                value="Advanced: AI/ML & Modeling"
                className="text-black"
              >
                Advanced: AI/ML & Modeling
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              h-[48px]
              md:h-[52px]
              w-full
              rounded-[6px]
              border
              border-[#c7ced3]
              text-[15px]
              md:text-[16px]
              font-semibold
              text-black
              shadow-[0px_7px_4px_-3px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)]
              transition-all
              duration-300
              hover:opacity-90
              hover:scale-[1.01]
              lg:min-w-[220px]
            "
            style={buttonStyle}
          >
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;