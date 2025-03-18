import Image from "next/image";
import Cover from "../app/components/cover"
import TransitionsPage from "./components/TransitionsPage"

export default function Home() {
  return (
   <main>
    <TransitionsPage/>
  
    <div className="flex min-h [100vh] h-full bg-no-repeat bg-gradient-cover">
      <Cover/>
    
      
    </div>
   </main>
  );
}
