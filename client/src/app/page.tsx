import Footer from "./landingpage/Footer";
import Homepage from "./landingpage/Homepage";
import Navbar from "./landingpage/Navbar";
import './globals.css'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <Homepage/>
      <Footer/>
      
    </main>
  );
}
