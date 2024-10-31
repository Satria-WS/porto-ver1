
import Typography from "@mui/material/Typography";

import project_1 from "../assets/images/project-1.png";
import project_2 from "../assets/images/project-2.png";
import project_3 from "../assets/images/project-3.png";
// externalLink
import extenalLink from "../assets/icon/external-link.svg";

const Project = () => {
  return (
    <div className="bg-black   text-white w-full p-5 border border-red-500">
    <Typography className="py-5  text-center" variant="h4">
      My <span className="font-semibold">Project</span>
    </Typography>
    <div className="flex flex-col  items-center">
      <img src={project_1} alt="project-1" />
      <div className="py-5">
        <Typography className="py-4" variant="h4">
          <span className="font-semibold">01</span>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
          }}
        >
          Crypto Screener Application
        </Typography>
        <p className=" text-[#71717A] py-5">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to
          specimen book.
        </p>
        <img className="w-7" src={extenalLink} alt="link" />
      </div>
    </div>
    <div className="py-7">
      <img src={project_2} alt="project-1" />
      <div className="py-5">
        <Typography className="py-4" variant="h4">
          <span className="font-semibold">02</span>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
          }}
        >
          Euphoria - Ecommerce (Apparels) Website Template
        </Typography>
        <p className=" text-[#71717A] py-5">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to
          specimen book.
        </p>
        <img className="w-7" src={extenalLink} alt="link" />
      </div>
    </div>
    <div className="py-7">
      <img src={project_3} alt="project-1" />
      <div className="py-5">
        <Typography className="py-4" variant="h4">
          <span className="font-semibold">03</span>
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
          }}
        >
          Blog Website Template
        </Typography>
        <p className=" text-[#71717A] py-5">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to
          specimen book.
        </p>
        <img className="w-7" src={extenalLink} alt="link" />
      </div>
    </div>
  </div>
  )
}
export default Project