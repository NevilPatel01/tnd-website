export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-gray-900 to-green-950 border-y">
      <div className="mx-auto max-w-screen-xl p-4 lg:py-8">
        <div className="flex justify-center  items-center mb-6 md:mb-0 space-x-3 mt-4">
          <a
            href="mailto:nishdubb20@gmail.com"
            className="text-blue-800 hover:text-blue-900"
          >
            <img
              src="./assets/email.png"
              alt="Email Image"
              className="w-14 h-14 rounded-full bg-green-200 hover:scale-125 hover:bg-white p-1"
            />
          </a>

          <a
            href="https://discord.com/invite/awWgSGrg"
            className="text-blue-800 hover:text-blue-900"
          >
            <img
              src="./assets/discord.png"
              alt="Discord Image"
              className="w-14 h-14 rounded-full bg-green-200  hover:scale-125 hover:bg-white p-2"
            />
          </a>

          <a
            href="https://www.instagram.com/mohawk.redefined?igsh=aWRpanVndXFoNmI0"
            className="text-blue-800 hover:text-blue-900"
          >
            <img
              src="./assets/instagram-logo.png"
              alt="Instagram Image"
              className="w-14 h-14 rounded-full bg-green-200  hover:scale-125 hover:bg-white p-2"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/mohawk-redefined/"
            className="text-blue-800 hover:text-blue-900"
          >
            <img
              src="./assets/linkedin-logo.png"
              alt="Linkedin Image"
              className="w-14 h-14 rounded-full bg-green-200  hover:scale-125 hover:bg-white p-2"
            />
          </a>
        </div>

        <hr className="my-6 border-green-900 sm:mx-auto lg:my-8" />

        <div className="text-center">
          <span className="text-white block">
            © 2024 &nbsp;
            <a href="./about" className="hover:underline hover:text-green-200">
              TND
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
