"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

export default function PartnershipPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    contact: "",
    natureofbusiness: "",
    profile: "",
    products: "",
    bussinessvolume: "",
    website: "",
    pincode: "",
    soucreoflocation: "",
    partnerType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://keshvacredit.com/api/v1/api/partner/page",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          contact: "",
          natureofbusiness: "",
          profile: "",
          products: "",
          bussinessvolume: "",
          website: "",
          pincode: "",
          soucreoflocation: "",
          partnerType: "",
        });
      } else {
        console.error("Error submitting form", data);
        toast.error("Something went wrong!", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Submission error", error);
      toast.error("Network or server error", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-28 font-sans mt-15">
      <section data-aos="fade-down" className="p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Register as a Partner With Us
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <input
            type="text"
            name="phone"
            placeholder="Contact Number *"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID *"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <input
            type="text"
            name="contact"
            placeholder="Your Designation *"
            value={formData.contact}
            onChange={handleChange}
            required
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <select
            name="partnerType"
            value={formData.partnerType}
            onChange={handleChange}
            required
            className="findrop border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          >
            <option value="">Partner Type *</option>
            <option value="DSA">DSA</option>
            <option value="Aggregator">Aggregator</option>
            <option value="Other">Other</option>
          </select>

          <select
            name="natureofbusiness"
            value={formData.natureofbusiness}
            onChange={handleChange}
            required
            className="findrop border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          >
            <option value="">Nature of Business *</option>
            <option value="Individual">Individual</option>
            <option value="Proprietor">Proprietor</option>
            <option value="Partnership">Partnership</option>
            <option value="Pvt Ltd">Pvt Ltd</option>
            <option value="Public Ltd">Public Ltd</option>
            <option value="HIJF">HIJF</option>
            <option value="Trust">Trust</option>
          </select>

          <select
            name="profile"
            value={formData.profile}
            onChange={handleChange}
            required
            className="findrop border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          >
            <option value="">Profile *</option>
            <option value="IFA">IFA</option>
            <option value="Real estate consultant">Real estate consultant</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Broking firm">Broking firm</option>
            <option value="Real Estate developer">Real Estate developer</option>
            <option value="Others">Others</option>
          </select>

          <select
            name="products"
            value={formData.products}
            onChange={handleChange}
            required
            className="findrop border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          >
            <option value="">Products to be referred *</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Business Loan">Business Loan</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Loan Against Property">Loan Against Property</option>
            <option value="Loan Against Securities">Loan Against Securities</option>
            <option value="Digital Loan">Digital Loan</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="bussinessvolume"
            placeholder="Expected Business Volume *"
            value={formData.bussinessvolume}
            onChange={handleChange}
            required
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <input
            type="url"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode *"
            value={formData.pincode}
            onChange={handleChange}
            required
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <input
            type="text"
            name="soucreoflocation"
            placeholder="Business Sourcing Location *"
            value={formData.soucreoflocation}
            onChange={handleChange}
            className="border-b border-gray-400 bg-transparent focus:outline-none px-2 py-2"
          />

          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </section>

      {/* Hero Title */}
      <h1
        className="text-3xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        data-aos="zoom-in"
      >
        Become a KeshvaCredit Partner
      </h1>

      {/* About Partnership */}
      <section className="flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="About Partnership"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">About the Partnership</h2>
          <p className="text-lg leading-relaxed">
            Join KeshvaCredit as a strategic partner and help us bring accessible financial solutions to a wider audience.
            Whether you're a business, consultant, or digital platform, collaborate with us to grow together.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Benefits of Partnership</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-4 text-lg">
            <li>Revenue sharing and performance bonuses.</li>
            <li>Access to KeshvaCredit’s API and digital tools.</li>
            <li>Co-branding and joint marketing opportunities.</li>
            <li>Full support and training from our team.</li>
            <li>Access to a large network of financial products.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80"
            alt="Benefits"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80"
            alt="Responsibilities"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>Engage your network with our loan and financial offerings.</li>
            <li>Promote KeshvaCredit services with integrity.</li>
            <li>Facilitate referrals or integrations based on your model.</li>
            <li>Collaborate for campaigns, product launches, or outreach.</li>
          </ul>
        </div>
      </section>

      {/* Who Should Partner */}
      <section className="bg-blue-50 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center gap-8 group" data-aos="slide-up">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Who Should Partner?</h2>
          <ul className="text-gray-700 list-disc list-inside space-y-3 text-lg">
            <li>Startups and companies in the financial space.</li>
            <li>Fintech consultants and loan aggregators.</li>
            <li>Influencers and bloggers in the finance niche.</li>
            <li>Anyone with access to a potential customer base for financial products.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 max-h-80 overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=600&q=80"
            alt="Who Should Partner"
            className="shadow-lg object-cover transition-transform group-hover:scale-105"
            width={600}
            height={320}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-extrabold mb-6">Ready to Partner With Us?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Let’s explore how we can work together to create value and make financial solutions more accessible.
        </p>
        <a
          href="mailto:info@keshvacredit.com?subject=KeshvaCredit%20Partnership%20Request"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-indigo-700 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Us to Collaborate
        </a>
      </section>
    </div>
  );
}
