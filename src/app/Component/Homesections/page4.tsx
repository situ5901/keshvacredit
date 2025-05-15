import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'For which purposes can I take a personal loan?',
    answer:
      'You can use a personal loan for a variety of needs, including home renovation, medical emergencies, education expenses, debt consolidation, travel, wedding expenses, or any other personal financial requirement. Since personal loans are unsecured, they provide flexibility without the need to pledge assets as collateral. Always ensure that the purpose aligns with your repayment capability to maintain financial stability.',
  },
  {
    question: 'What are the key benefits of a personal loan?',
    answer:
      'Personal loans come with numerous benefits, including quick disbursement, flexible usage, and no requirement for collateral. The interest rates are generally fixed, meaning your monthly payments remain consistent throughout the tenure. Moreover, they offer flexible repayment options ranging from a few months to several years, making it easier to manage your finances. You can also use the funds for multiple purposes, such as consolidating high-interest debt or funding unexpected expenses. Additionally, many lenders offer online applications, making the process seamless and fast.',
  },
  {
    question: 'What are the minimum eligibility criteria to get a personal loan?',
    answer:
      'The minimum eligibility criteria generally include being at least 21 years old and not older than 60 at the time of loan maturity. You should have a stable income source, whether salaried or self-employed. Lenders usually check your credit score (650-700 or higher is preferred) and your ability to repay based on your existing financial commitments. Some banks may also require a minimum monthly income, often around ₹20,000 for salaried individuals or ₹1 lakh annually for self-employed professionals.',
  },
  {
    question: 'Can self-employed individuals get a personal loan?',
    answer:
      'Yes, self-employed individuals can apply for a personal loan. However, the eligibility criteria may vary slightly from salaried applicants. Typically, lenders will require proof of business existence, income tax returns for the past 2-3 years, audited financial statements, and bank statements showing consistent income. Additionally, having a good credit score and a stable business operation history significantly improves your chances of approval.',
  },
  {
    question: 'What is the minimum credit score required to get a personal loan?',
    answer:
      'A credit score of 650 to 700 is generally required to qualify for a personal loan, although this can vary depending on the lender. A higher score increases your chances of approval and may also lead to lower interest rates. Factors affecting your credit score include your payment history, existing debt, length of credit history, and the types of credit you have. If your score is lower, consider taking steps to improve it before applying, such as paying off outstanding debts and avoiding new credit inquiries.',
  },
  {
    question: 'What documents are required to apply for a personal loan?',
    answer:
      'Typically, you will need to provide identity proof (such as Aadhaar, PAN, Passport), address proof (utility bills, rental agreement), income proof (salary slips for salaried individuals, IT returns for self-employed), and bank statements for the past 6-12 months. Some lenders may also ask for employment proof, business registration documents (for self-employed), and recent photographs. Make sure to check the specific documentation requirements of your chosen lender, as they may vary slightly.',
  },
  {
    question: 'How can I improve my chances of getting a personal loan?',
    answer:
      'To increase your chances of approval, maintain a good credit score (preferably above 700), reduce existing debt, and ensure you have a stable income. Applying with a co-applicant who has a strong credit profile can also improve your chances. Additionally, gather all necessary documents beforehand, avoid multiple loan applications within a short period, and choose a lender whose eligibility criteria you meet comfortably.',
  },
  {
    question: 'What happens if I miss an EMI payment?',
    answer:
      'Missing an EMI payment can lead to penalties, increased interest rates, and a negative impact on your credit score. In some cases, the lender may initiate legal action or seize collateral if the loan is secured. To avoid missing payments, set up automated deductions or reminders. If you anticipate financial difficulties, contact your lender to discuss restructuring or temporary relief options.',
  },
  {
    question: 'Can I prepay or foreclose my personal loan?',
    answer:
      'Yes, most lenders allow prepayment or foreclosure, but it may come with a prepayment penalty. The charges usually range from 2% to 5% of the outstanding principal. It’s advisable to check your loan agreement for details. Prepaying your loan can save on interest costs, especially if done in the early stages of the loan tenure. However, consider the penalty charges versus the potential interest savings before making a decision.',
  },
  {
    question: 'How is the interest rate on a personal loan calculated?',
    answer:
      'The interest rate on a personal loan is calculated based on your credit score, income, loan amount, tenure, and relationship with the lender. Interest rates are usually fixed, meaning the EMI amount remains the same throughout the tenure. However, some lenders may offer floating rates linked to the repo rate or MCLR. Use an EMI calculator to estimate your monthly payments based on the interest rate and loan term.',
  },
  {
    question: 'What are the consequences of defaulting on a personal loan?',
    answer:
      'Defaulting on a personal loan can have serious financial consequences, including legal action, a drastic drop in your credit score, and difficulties obtaining credit in the future. Lenders may also initiate recovery proceedings or involve collection agencies. It’s crucial to communicate with your lender if you face repayment issues, as they may offer options like restructuring, moratorium, or temporary payment relief.',
  },
];


export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = idx === openIndex;
          return (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50"
              >
                <span className="text-left text-lg font-medium">
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {isOpen && (
                <div className="p-4 bg-gray-50 text-gray-700">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}