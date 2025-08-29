
import Drop from "../../components/Drop";
import Footer from "../../components/Footer";
import Ours from "../../components/Ours";
import Wave from "../../components/Wave";

export default function Servicepage() {
  return (
    <>
      <Wave />

      {/* Go to Service 2 Button */}
      {/* <div className="flex justify-center mt-6">
        <Link
          href="/services/services2"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View Service 2
        </Link>
      </div> */}

      <Drop />
      <Ours />
      <Footer />
    </>
  );
}
