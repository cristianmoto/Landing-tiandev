import TransitionsPage from "@/app/components/TransitionsPage"
import CircleImage from "../../components/Circle-image"
import Cover from "@/app/components/cover"

import AvatarServices from "@/app/components/AvatarServices"


const Servicios = () => {
  return (
   <>
   <TransitionsPage/>
   <Cover/>
   <AvatarServices/>
    <CircleImage/>
    <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
      <div className="max-w-[450px]">
        <h1 className="text-2xl leading-4">Servicios</h1>

      </div>

    </div>
   </> 
  )
}

export default Servicios
