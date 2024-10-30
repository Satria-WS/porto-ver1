import logo from "../assets/logo/logo.svg";
import imageOrang from "../assets/images/orang.png";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
// icon import
import { Box, IconButton, Grid2, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
//logo google
import GoogleLogo from "../assets/logo/google.svg";
import YoutubeLogo from "../assets/logo/youtube.svg";
import AppleLogo from "../assets/logo/apple.svg";
//image
import aboutMe from "../assets/images/aboutme.png";
import project_1 from "../assets/images/project-1.png";
import project_2 from "../assets/images/project-2.png";
import project_3 from "../assets/images/project-3.png";
// externalLink
import extenalLink from "../assets/icon/external-link.svg";
// projectImg

const DiscordIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=86955&format=png&color=000000"
    alt="discord Icon"
  />
);

const Home = () => {
  // const DiscordIcon = 'https://img.icons8.com/?size=100&id=86955&format=png&color=000000';

  return (
    <div>
      <div className="flex justify-between border border-y-orange-900 p-3">
        <div className="flex border border-y-orange-900 items-center">
          <img src={logo} alt="logo" />
          <span className="text-xl font-bold tracking-tight">Personalx</span>
        </div>
        <MenuIcon fontSize="large" />
      </div>
      <div className="flex flex-col justify-center items-center min-w-[300px] ">
        <div className="orang max-w-[300px]">
          <img src={imageOrang} alt="orang" />
          <div className="w-[95%] bg-black h-[2px] m-auto"></div>
        </div>
        <div className="Biography  flex flex-col items-center  py-10  ">
          <div className="title text-2xl tracking-tight">
            <p>
              Hello I’am
              <span className="font-extrabold pl-3">Evren Shah.</span>
            </p>
            <p>
              <span className="font-extrabold pr-3">Frontend</span>
              <span>
                <Typography
                  sx={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "transparent",
                    WebkitTextStroke: "1px #000000",
                    fontFamily: "Arial, sans-serif",
                    display: "inline-block",
                  }}
                >
                  Developer
                </Typography>
              </span>
            </p>
            <p>
              Based In <span className="font-extrabold pl-3">India.</span>
            </p>
          </div>
          <div className="content py-5">
            <p className="px-10">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
          </div>
          <div className="icon ">
            <Box display="inline-flex" alignItems="start" gap={2} px={0} py={1}>
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  border: 2,
                  borderColor: "black",
                  borderRadius: 1,
                  color: "black",
                }}
              >
                <RedditIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  border: 2,
                  borderColor: "black",
                  borderRadius: 1,
                  color: "black",
                }}
              >
                <DiscordIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  border: 2,
                  borderColor: "black",
                  borderRadius: 1,
                  color: "black",
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </div>
          {/* SKILLS */}
          <div className="skills pt-20 pb-10">
            <p className="text-2xl text-center">
              My <span className="font-extrabold">Skills</span>
            </p>

            <Grid2 container spacing={2} display={"flex"} alignItems={"center"}>
              <Grid2 size={6}>
                <Paper
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  JS
                  {/* Placeholder for Icon Express */}
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    Javascript
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 size={6}>
                <Paper
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  JS
                  {/* Placeholder for Icon Express */}
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    Javascript
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 size={6}>
                <Paper
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  JS
                  {/* Placeholder for Icon Express */}
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    Javascript
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 size={6}>
                <Paper
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  JS
                  {/* Placeholder for Icon Express */}
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    Javascript
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 size={6}>
                <Paper
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  JS
                  {/* Placeholder for Icon Express */}
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    Javascript
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 size={6}>
                <Paper
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: 1,
                    bgcolor: "background.paper",
                  }}
                >
                  JS
                  {/* Placeholder for Icon Express */}
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    Javascript
                  </Typography>
                </Paper>
              </Grid2>
            </Grid2>
          </div>
          {/* experience */}

          <div className="w-full flex flex-col gap-3 bg-black p-5">
            <h1 className="text-white text-2xl text-center p-10">
              <span>My </span>
              <span className="font-extrabold">Experience</span>
            </h1>
            {/* content experience */}
            <div className="border border-orange-100 text-white rounded-md p-5">
              <div className="title flex justify-center gap-5 p-3">
                <img className="pr-4" src={GoogleLogo} alt="google" />
                <div className="text-[#FFFFFF] text-xl w-full max-w-[233px]">
                  Lead Software Engineer At Google
                </div>
              </div>
              <span className="date text-[#D4D4D8]">Nov 2019 - Present</span>
              <div className="content py-5">
                <p>
                  As a Senior Software Engineer at Google, I played a pivotal
                  role in developing innovative solutions for Google's core
                  search algorithms. Collaborating with a dynamic team of
                  engineers, I contributed to the enhancement of search accuracy
                  and efficiency, optimizing user experiences for millions of
                  users worldwide.
                </p>
              </div>
            </div>
            <div className="border border-orange-100 text-white rounded-md p-5">
              <div className="title flex justify-center gap-5 p-3">
                <img className="pr-4" src={YoutubeLogo} alt="youtube" />
                <div className="text-[#FFFFFF] text-xl w-full max-w-[233px]">
                  Software Engineer At youtube
                </div>
              </div>
              <span className="date text-[#D4D4D8]">Nov 2019 - Present</span>
              <div className="content py-5">
                <p>
                  As a Senior Software Engineer at Google, I played a pivotal
                  role in developing innovative solutions for Google's core
                  search algorithms. Collaborating with a dynamic team of
                  engineers, I contributed to the enhancement of search accuracy
                  and efficiency, optimizing user experiences for millions of
                  users worldwide.
                </p>
              </div>
            </div>
            <div className="border border-orange-100 text-white rounded-md p-5">
              <div className="title flex justify-center gap-5 p-3">
                <img className="pr-4" src={AppleLogo} alt="apple" />
                <div className="text-[#FFFFFF] text-xl w-full max-w-[233px]">
                  Junior Software Engineer At apple
                </div>
              </div>
              <span className="date text-[#D4D4D8]">Nov 2019 - Present</span>
              <div className="content py-5">
                <p>
                  As a Senior Software Engineer at Google, I played a pivotal
                  role in developing innovative solutions for Google's core
                  search algorithms. Collaborating with a dynamic team of
                  engineers, I contributed to the enhancement of search accuracy
                  and efficiency, optimizing user experiences for millions of
                  users worldwide.
                </p>
              </div>
            </div>
          </div>
          {/* Aboutme */}
          <div className="p-5">
            <img
              className="border border-slate-950 py-3"
              src={aboutMe}
              alt="aboutMe"
            />
            <Typography className="py-5" variant="h4">
              About <span className="font-semibold">Me</span>
            </Typography>
            <p className="py-3">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="py-3">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="py-3">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
          {/* Project */}
          <div className="bg-black text-white w-full">
            <Typography className="py-5  text-center" variant="h4">
              My <span className="font-semibold">Project</span>
            </Typography>
            <div className="py-7">
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
                  {" "}
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
              <img src={project_3} alt="project-1" />
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

          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
