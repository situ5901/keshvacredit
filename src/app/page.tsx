import React from 'react'
import Image from 'next/image'
import EmiCalculator from './calculator/calculator'
function page() {
  return (
    <>
       <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-100">
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          ></div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          ></div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          ></div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          ></div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item
          ></div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-5">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Emerging AI Trends 2022
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Discover the latest breakthroughs in artificial intelligence that
              are shaping the future.
            </p>
          </a>

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cybersecurity Best Practices
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Stay ahead of cyber threats with these essential cybersecurity
              strategies.
            </p>
          </a>

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cloud Computing Innovations
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Explore how cloud computing is transforming businesses worldwide.
            </p>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
        {/* Left Side - Title & Subtitle */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">
            Avail Instant Loans from ₹2,000 to ₹20 Lakhs Quick, Hassle-Free, and
            Secure
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            With CredMantra, achieve your financial goals effortlessly. We are
            on a mission to ensure financial inclusion for every Indian!
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="https://via.placeholder.com/400"
            alt="User profile"
            width={50}
            height={50}
            className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
          />
        </div>
      </div>

      <div>
        <section className="bg-blue-200 dark:text-gray-800">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-4xl font-bold">
                  Duo assum utroque appetere an
                </h2>
                <p className="dark:text-gray-600">
                  Pri ex magna scaevola moderatius. Nullam accommodare no vix,
                  est ei diceret alienum, et sit cetero malorum. Et sea iudico
                  consequat, est sanctus adipisci ex.
                </p>
              </div>
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        An audire commodo habemus cum. Ne sed corrumpit
                        repudiandae. Tota aliquip democritum pro in, nec
                        democritum intellegam ne. Propriae volutpat dissentiet
                        ea sit, nec at lorem inani tritani, an ius populo
                        perfecto vituperatoribus. Eu cum case modus salutandi,
                        ut eum vocent sensibus reprehendunt.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://source.unsplash.com/50x50/?portrait?1"
                          alt=""
                          width={400}
                          height={400}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        Sit wisi sapientem ut, pri civibus temporibus
                        voluptatibus et, ius cu hinc fabulas. Nam meliore
                        minimum et, regione convenire cum id. Ex pro eros mucius
                        consectetuer, pro magna nulla nonumy ne, eam putent
                        iudicabit consulatu cu.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://source.unsplash.com/50x50/?portrait?2"
                          alt=""
                          width={400}
                          height={400}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        Putant omnium elaboraret per ut. Id dicta tritani
                        nominavi quo, mea id justo errem elaboraret. Agam mollis
                        scripserit ea his, ut nec postea verear persecuti. Ea
                        noster senserit eam, ferri omittantur ei nec. Id mel
                        solet libris efficiantur, commune explicari et eos. Case
                        movet ad est, sed tota vocent appetere ea.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://source.unsplash.com/50x50/?portrait?3"
                          alt=""
                          width={400}
                          height={400}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md dark:bg-gray-50">
                      <p>
                        Te omnes virtute volutpat sed. Ei esse eros interesset
                        vel, ei populo denique ocurreret vix, eu cum pertinax
                        mandamus vituperatoribus. Solum nihil luptatum per ex,
                        ei amet viderer eos. Ea illum labitur mnesarchum pro.
                        Eius meis salutandi ei nam, alterum expetenda et nec.
                        Expetenda intellegat at eum, per mazim sanctus
                        honestatis ad. Ei noluisse invenire vix. Te ancillae
                        patrioque qui, probo bonorum vivendum ex vim.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://source.unsplash.com/50x50/?portrait?4"
                          alt=""
                          width={400}
                          height={400}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm dark:text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center items-center p-4 gap-5 bg-emerald-300 rounded-lg">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              instant personal loan 2025
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Secure Instant Personal Loans with KashaveCredit – Quick Approvals,
            Hassle-Free Process, Minimal Documentation, and Fast Fund Disbursal
            to Meet Your Financial Needs Effortlessly
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              instant business loan 2025
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Secure Instant Business Loans with KashaveCredit – Fast Approvals,
            Hassle-Free Process, Minimal Documentation, and Quick Fund Disbursal
            to Grow Your Business Effortlessly
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex h-[85vh]">
        {/* Left Side (70%) */}
        <div className="w-[30%] bg-white p-4 flex justify-center items-center p-20">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[500px] w-[250px]">
            <div className="h-[24px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[50px] rounded-s-lg"></div>
            <div className="h-[36px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[100px] rounded-s-lg"></div>
            <div className="h-[36px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[150px] rounded-s-lg"></div>
            <div className="h-[48px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[12px] top-[120px] rounded-e-lg"></div>
            <div className="rounded-[1.5rem] overflow-hidden w-[230px] h-[480px] bg-white dark:bg-gray-800">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                className="dark:hidden w-full h-full"
                alt="Mockup Light"
                width={400}
                height={400}
                unoptimized
              />
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                className="hidden dark:block w-full h-full"
                alt="Mockup Dark"
                width={400}
                height={400}
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right Side (30%) */}
        <div className="bg-white">
          <div className="mx-auto bg-white max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        className="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                        />
                      </svg>
                    </div>
                    Push to deploy
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        className="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </div>
                    SSL certificates
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero
                    dolor eget. Sem sodales gravida quam turpis enim lacus amet.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        className="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    Simple queues
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Quisque est vel vulputate cursus. Risus proin diam nunc
                    commodo. Lobortis auctor congue commodo diam neque.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        className="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                        />
                      </svg>
                    </div>
                    Advanced security
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt
                    mattis aliquet hac quis. Id hac maecenas ac donec pharetra
                    eget.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
     </div>
     <hr/>
    <EmiCalculator/>
    </>
  )
}

export default page
