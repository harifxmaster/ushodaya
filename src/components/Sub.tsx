"use client";

export default function Sub() {
  return (
    <section
      className="relative w-full h-[500px] md:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Subgirl.png')" }}
    >

      <div className="absolute inset-0 bg-black/50" />


      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center px-6">

        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-3">
          Sign up for our Newsettlers
        </h2>


        <p className="text-gray-200 mb-6 text-sm md:text-base">
          Get notified of the best deals on our WordPress themes.
        </p>


        <form className="flex items-center bg-white rounded-md overflow-hidden shadow-md mb-4 max-w-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-gray-700 focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-3 text-sm font-medium hover:bg-gray-700"
          >
            Subscribe
          </button>
        </form>


        <label className="flex items-start text-gray-200 text-xs leading-snug max-w-xl">
          <input
            type="checkbox"
            className="mt-1 mr-2 w-3 h-3 accent-gray-700"
          />
          By checking this box, you confirm that you have read and are agreeing
          to our terms of use regarding the storage of the data submitted
          through this form.
        </label>
      </div>
    </section>
  );
}
