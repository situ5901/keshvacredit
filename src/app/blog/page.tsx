import Link from "next/link";

const blogs = [
  {
    id: 11,
    title: " Understand Where Your Money Goes",
    image:
      "https://img.freepik.com/free-photo/bearded-male-suit-holding-cash-money-isolated-grey-background_613910-8523.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_items_boosted&w=740",
    description:
      " Most people have a vague idea, but when you sit down and look closely, the reality can be eye-opening. From little purchases to monthly subscriptions, your expenses quickly add up.",
    link: "/blog/blog11",
    tag: "Finance",
    date: "June 24, 2025",
  },
  {
    id: 10,
    title: "Personal Loan Eligibility India 2025",
    image:
      "https://img.freepik.com/free-photo/still-life-documents-stack_23-2151088765.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_items_boosted&w=740",
    description:
      "Everything you need to know about qualifying for a personal loan in India in 2025—eligibility criteria, credit score, income, documents, and top lender requirements.",
    link: "/blog/blog10",
    tag: "Finance",
    date: "June 24, 2025",
  },
  {
    id: 9,
    title: "30-Day Digital Detox",
    image:
      "https://img.freepik.com/free-photo/relaxed-woman-sitting-nature_53876-144377.jpg?w=740",
    description:
      "A personal journey through a 30-day break from social media—discover how unplugging boosted my focus, mental health, sleep, and real-life connections. A must-read for anyone feeling digitally drained.",
    link: "/blog/blog9",
    tag: "Lifestyle",
    date: "June 18, 2025",
  },
  {
    id: 8,
    title: "Top 10 Fintech Companies in India (2025 Edition)",
    image:
      "https://img.freepik.com/free-photo/businessman-analyzing-finance-graphs_53876-42950.jpg?w=740",
    description:
      "Explore the leading fintech innovators in India in 2025. From digital payments to lending and investments, discover how companies like PhonePe, Paytm, Razorpay, and KeshvaCredit are reshaping finance for millions.",
    link: "/blog/blog8",
    tag: "Fintech",
    date: "June 16, 2025",
  },
  {
    id: 7,
    title: "What is BNPL and How It Works in 2025: A Complete Guide for Smart Shoppers",
    image:
      "https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_hybrid&w=740",
    description:
      "BNPL (Buy Now, Pay Later) is changing how Indians shop online. This blog explains how BNPL works, who should use it, its pros and cons, and how it compares with credit cards. Discover if it’s the right payment method for you in 2025.",
    link: "/blog/blog7",
    tag: "Investment",
    date: "June 12, 2025",
  },
  {
    id: 6,
    title: "Gold, Stocks, or Crypto: Where Should You Invest ₹10,000?",
    image:
      "https://img.freepik.com/free-photo/loan-mortgage-payment-property-concept_53876-124868.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_hybrid&w=740",
    description:
      "Confused about where to invest your first ₹10,000? This blog breaks down gold, stocks, and crypto—comparing risk, returns, liquidity, and strategy. Find out which option suits your financial goals best in 2025.",
    link: "/blog/blog6",
    tag: "Investment",
    date: "June 12, 2025",
  },
  {
    id: 5,
    title: "UPI Credit: The Next Big Thing in Indian Lending?",
    image:
      "https://img.freepik.com/free-photo/pay-goods-by-credit-card-through-smartphone-coffee-shop_1150-18770.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_hybrid&w=740",
    description:
      "Explore how UPI Credit is reshaping the Indian lending space in 2025. From instant approvals to seamless integration with daily transactions, this blog dives into why UPI-based credit could be a game changer for borrowers and lenders alike.",
    link: "/blog/blog5",
    tag: "Finance",
    date: "June 9, 2025",
  },
  {
    id: 4,
    title: "How to Increase Your CIBIL Score in 2025",
    image:
      "https://img.freepik.com/free-vector/businessman-pushing-credit-score-speedometer-from-poor-good-tiny-person-improving-personal-credit-history-with-efforts-flat-vector-illustration-business-reputation-customer-loan-concept_74855-20943.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_items_boosted&w=740",
    description:
      "Learn practical and effective ways to boost your CIBIL score in 2025. From timely payments to smart credit usage and report monitoring, this guide helps you build a strong financial foundation and unlock better loan opportunities.",
    link: "/blog/blog4",
    tag: "Finance",
    date: "may 19, 2025",
  },
  {
    id: 3,
    title: "How AI Is Revolutionizing Personal Finance in India",
    image:
      "https://img.freepik.com/free-photo/futuristic-robot-interacting-with-money_23-2151612625.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_items_boosted&w=740",
    description:
      "Explore how Artificial Intelligence is transforming personal finance in India—from AI-powered budgeting and instant loans to rural financial inclusion and smart customer service. Learn about the benefits, risks, and the future of money management in the digital era.",
    link: "/blog/blog3",
    tag: "AI",
    date: "may 7, 2025",
  },
  {
    id: 2,
    title: "Personal Loan Guide: Everything You Need to Know",
    image:
      "https://img.freepik.com/free-photo/happy-couple-having-meeting-with-real-estate-agent-analyzing-blueprints-while-communicating_637285-3822.jpg?uid=R200265041&ga=GA1.1.1991524667.1744099371&semt=ais_hybrid&w=740",
    description:
      "Understand personal loans, eligibility, interest rates, and required documents. This blog explains how to apply smartly, manage EMIs, and boost your credit score. Whether it's for medical bills or emergencies, learn safe borrowing tips and avoid common mistakes .",
    link: "/blog/blog2",
    tag: "Loans",
    date: "april 16, 2025",
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
    date: "april 5, 2025",
  }
];

export default function BlogSection() {
  return (
    <section className="bg-gradient-to-b py-16 mt-5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
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
