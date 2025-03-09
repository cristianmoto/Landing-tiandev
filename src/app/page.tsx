import Image from "next/image";
import Cover from "../app/components/cover"

export default function Home() {
  return (
   <main>
    <div className="flex min-h [100vh] h-full bg-no-repeat bg-gradient-cover">
      <Cover/>
      <p>introduccion</p>
      
    </div>
   </main>
  );
}
