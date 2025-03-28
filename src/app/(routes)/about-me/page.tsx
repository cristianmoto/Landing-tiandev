import Container from "@/app/components/Container"
import TransitionsPage from "@/app/components/TransitionsPage"
import Cover from "../../components/cover"
import Avatar from "@/app/components/Avatar"

const PageAboutMe = () => {
  return (
    <>

      <TransitionsPage />
      <Cover />
      <Container>
        <Avatar />
        Desarrollador Frontend con más de 5 años de experiencia en roles de liderazgo y desarrollo.
        Titulado como Técnico Superior en Programación y Diseñador Multimedia. Especializado en tecnologías como ReactJS, Tailwind y Bootstrap, con conocimientos en IA (Python, IBM).
        Destaco en metodologías ágiles, resolución de problemas y trabajo en equipo.
        Aporto valor mediante la optimización de procesos, mejora de la experiencia de usuario y creación de soluciones tecnológicas innovadoras.</Container>
    </>
  )
}

export default PageAboutMe