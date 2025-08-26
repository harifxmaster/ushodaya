import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Holding from "@/components/Holding";
import Leader from "@/components/Leader";
import Mission from "@/components/Mission";
import Ready from "@/components/Ready";
import Sky from "@/components/Sky";
import Vision from "@/components/Vision";
import VisionSection from "@/components/VisionSection";

export default function Aboutpage() {
  return (
    <>
     <Header />
     <Holding />

     <Vision />
     <VisionSection/>
     <Mission />
     <Sky />
     <Leader />
     <Choose />
     <Ready />
     <Footer />


    </>


  );
}
