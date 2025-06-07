import Link from "next/link";

const blogs = [

 {
  id: 3,
  title: "How AI Is Revolutionizing Personal Finance in India",
  image:
    "https://img.freepik.com/free-photo/futuristic-robot-interacting-with-money_23-2151612625.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_items_boosted&w=740",
  description:
    "Explore how Artificial Intelligence is transforming personal finance in India—from AI-powered budgeting and instant loans to rural financial inclusion and smart customer service. Learn about the benefits, risks, and the future of money management in the digital era.",
  link: "/blog/ai-finance-india",
  tag: "AI",
  date: "June 7, 2025",
},

  {
    id: 2,
    title: "Personal Loan Guide: Everything You Need to Know",
    image:
      "https://img.freepik.com/free-vector/premium-cash-reward-bonus-work-done-best-employee-rewarding-promotion-order-efficiency-stimulation-boss-subordinate-cartoon-characters_335657-2984.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_items_boosted&w=740",
    description:
      "Understand personal loans, eligibility, interest rates, and required documents. This blog explains how to apply smartly, manage EMIs, and boost your credit score. Whether it's for medical bills or emergencies, learn safe borrowing tips and avoid common mistakes .",
    link: "/blog/blog2",
    tag: "Loans",
    date: "June 6, 2025",
  },
  {
    id: 1,
    title: "How to Save Tax Legally",
    image:
      "https://img.freepik.com/free-vector/business-service-tag-with-smartphone-coins_24877-53393.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_items_boosted&w=740",
    description:
      "Discover smart ways to reduce your tax burden legally through deductions under Section 80C, home loan benefits, and insurance premiums. Learn how to optimize your salary, claim exemptions, and invest wisely. This blog helps you save more while staying fully compliant with the Income Tax Act.",
    link: "/blog/blog1",
    tag: "Finance",
    date: "June 5, 2025",
  }
];

export default function BlogSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 mt-5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          ✍️ Latest Blog Posts
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={blog.link}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col group"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {blog.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h1 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors mb-2">
                  {blog.title}
                </h1>
                <p className="text-gray-600 text-sm flex-grow">{blog.description}</p>
                <div className="mt-4">
                  <span className="text-blue-600 text-sm font-semibold underline">
                    Read More →
                  </span>
                  <p className="text-gray-400 text-xs mt-1">{blog.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
