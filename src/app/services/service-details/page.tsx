import Footer from "@/components/Footer";
import Freq from "@/components/Freq";
import Scards from "@/components/Scards";
import Sub from "@/components/Sub";
import Wave2 from "@/components/Wave2";

export const metadata = {
  title: "Service Details | Ushodaya Services",
  description:
    "Explore our high-performance custom product development, engineering, and digital solutions at Ushodaya Services.",
};

export default function ServiceDetailsPage() {
  return (
    <>
      <Wave2 />
      <Scards />
      <Freq />
      <Sub />
      <Footer />
    </>
  );
}
