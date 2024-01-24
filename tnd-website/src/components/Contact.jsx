export default function Contact() {
  return (
    <>
      <div className="justify-center min-h-[400px] bg-gradient-to-r from-gray-900 to-green-950 items-center sm:pt-0">
        <div className="max-w-3xl mx-auto my-auto sm:px-6 lg:px-8">
          <div className="pt-10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="p-6 m-6 hover:border-2 hover:scale-95 bg-gradient-to-r from-gray-900 to-green-950 hover:shadow-green-950 hover:shadow-2xl sm:rounded-lg">
                <h1 className="text-3xl sm:text-4xl text-white  hover:text-green-200 font-extrabold tracking-tight">
                  {`Let's Connect`}
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-white mt-2">
                  Feel free to reach out to us for any inquiries or feedback. We
                  would love to hear from you!
                </p>

                <div className="mt-8 space-y-4 text-white">
                  <div className="flex items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 text-md  text-white hover:text-green-200 hover:scale-110 tracking-wide font-semibold">
                      135 Fennell Ave W, Hamilton, ON L9C 0E5
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide hover:scale-110 font-semibold">
                      <a
                        href="tel:+441234567890"
                        className="hover:text-green-200 hover:scale-120"
                      >
                        +1 519-770-9714
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 text-md tracking-wide  hover:scale-110 font-semibold">
                      <a
                        href="mailto:info@acme.org"
                        className="hover:text-green-200"
                      >
                        nishdubb20@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
