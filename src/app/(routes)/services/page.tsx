import TransitionsPage from "@/app/components/TransitionsPage"
import CircleImage from "../../components/Circle-image"
import Cover from "@/app/components/cover"

import AvatarServices from "@/app/components/AvatarServices"

import SliderServices from "@/app/components/SliderServices"


const Servicios = () => {
  return (
    <>
      <Cover/>
      <TransitionsPage />
    
      <AvatarServices />
      <CircleImage />
      <div className="grid items-center justify-center text-center h-screen max-w-5xl gap-6 mx-auto md:justify-center md:px-10 ">
                <div className="max-w-[450px]">

                    <h1 className=" text-2xl leading-tight text-center md:te md:text-center md:gap-8 md:text-4xl md:mb-5">Mis{" "}<span className="font-bold text-secondary">servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-200">Me dedico al desarrollo web frontend y creo sitios y aplicaciones que no solo se ven bien, sino que también funcionan de maravilla. Trabajo con tecnologías como HTML, CSS y JavaScript para diseñar interfaces que sean fáciles de usar, se adapten a cualquier dispositivo y capturen la esencia de la marca de cada cliente. Mi objetivo es ayudar a mejorar su imagen online y destacar en el mundo digital.</p>
                   <button className=" px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button> 
                </div>

              
       </div>
       <div>
        <SliderServices/>
       </div>
               
    </>
  )
}
export default Servicios
