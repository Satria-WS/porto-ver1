import logo from "../assets/logo/logo.svg";
import imageOrang from "../assets/images/orang.png";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
// icon import
import { Box, IconButton, Grid2, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import Download from "../assets/icon/download.svg";
//logo google
import GoogleLogo from "../assets/logo/google.svg";
import YoutubeLogo from "../assets/logo/youtube.svg";
import AppleLogo from "../assets/logo/apple.svg";
// projectImg
import aboutMe from "../assets/images/aboutme.png";
import project_1 from "../assets/images/project-1.png";
import project_2 from "../assets/images/project-2.png";
import project_3 from "../assets/images/project-3.png";
// externalLink
import extenalLink from "../assets/icon/external-link.svg";
// TestiImg
import Testi_1 from "../assets/images/Testi-1.svg";
import Testi_2 from "../assets/images/Testi-2.svg";
import QMark_White from "../assets/images/Q-Mark-White.svg";
import QMark_Black from "../assets/images/Q-Mark-Black.svg";
import Project from "../components/Project";
import Experience from "../components/Experience";

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
      {/* Header */}
      <div className="flex justify-between border border-y-orange-900 p-3">
        <div className="flex border border-y-orange-900 items-center">
          <img src={logo} alt="logo" />
          <span className="text-xl font-bold tracking-tight">Personalx</span>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-5 font-semibold hidden sm:inline-flex">
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact Me</li>
          </ul>
        </div>
        <MenuIcon className="sm:!hidden " fontSize="large" />
        <button className="text-white bg-black p-3 hidden sm:block">Resume <img className="inline-block pl-3" src={Download} alt="download"/> </button>
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

            <Grid2
              container
              spacing={2}
              display={"flex"}
              alignItems={"center"}
              sx={{ padding: "1rem" }}
            >
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
          <Experience />
          {/* Aboutme */}
          <div className="flex flex-col items-center p-5">
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

          <Project />
          {/* Testimonial */}
          <div className="p-5">
            <div>
              <Typography className="py-5" variant="h4">
                My <span className="font-extrabold">Testimonial</span>
              </Typography>
              {/* Testi Icon */}
              <div className=" flex flex-col justify-center items-center shadow-custom rounded-3xl p-3">
                <div className="border flex-col border-slate-500 flex justify-center items-center">
                  <div className="relative border border-x-purple-500">
                    <img
                      className="border border-slate-500"
                      src={Testi_1}
                      alt="icon-1"
                    />
                    <div className="absolute bottom-0 right-0 bg-black w-full max-h max-w-8 h-8 p-2  rounded-full flex">
                      <img
                        className="bottom-0 right-0"
                        src={QMark_White}
                        alt="QM-Black"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center w-full py-6">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
                </p>
                <div className="bg-black w-[120px] h-[2px]"></div>
                <p className="text-[#404040] text-xl font-semibold py-6">
                  Evren Shah
                </p>
                <p className="text-[#71717A] font-semibold pb-3">Designer</p>
              </div>
              <div className=" bg-black flex flex-col justify-center items-center shadow-custom rounded-3xl p-3 mt-10">
                <div className="border flex-col border-slate-500 flex justify-center items-center">
                  <div className="relative border border-x-purple-500">
                    <img
                      className="border border-slate-500"
                      src={Testi_2}
                      alt="icon-1"
                    />
                    <div className="absolute bottom-0 right-0 bg-white w-full max-h max-w-8 h-8 p-2  rounded-full flex">
                      <img
                        className="bottom-0 right-0"
                        src={QMark_Black}
                        alt="QM-Black"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-white text-center w-full py-6">
                  I recently had to jump on 10+ different calls across eight
                  different countries to find the right owner.
                </p>
                <div className="bg-white w-[120px] h-[2px]"></div>
                <p className="text-white text-xl font-semibold py-6">
                  Evren Shah
                </p>
                <p className="text-white font-semibold pb-3">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="p-3">
        <div className="text-2xl font-extrabold">
          <span className="">Let’s</span>&nbsp;
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "transparent",
              WebkitTextStroke: "1px #000000",
              display: "inline-block",
            }}
          >
            Talk
          </Typography>
        </div>
        <form className="">
          <div className="p-3">
            <input
              className="w-full py-4 px-6 rounded-sm border-[1.4px] border-black"
              placeholder="Your name"
            />
          </div>
          <div className="p-3">
            <input
              className="w-full py-4 px-6 rounded-sm border-[1.4px] border-black"
              placeholder="Email"
            />
          </div>
          <div className="p-3">
            <input
              className="w-full py-4 px-6 rounded-sm border-[1.4px] border-black"
              placeholder="Your Website"
            />
          </div>
          <div className="p-3">
            {/* <input
              className="w-full py-4 px-6 rounded-sm border-[1.4px] border-black"
              placeholder="How can I help"
            /> */}
            <textarea
              className=" py-4 px-6 rounded-sm border-[1.4px] border-black resize-none w-full"
              placeholder="How can I help"
              rows={5}
            />
          </div>
          <button className="p-3 bg-black text-white rounded-sm ml-3">
            Get In Touch
          </button>
        </form>
        <div className="icon p-5 ">
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
        <div className="text-xl font-bold pl-5">
          <p>YourEmail@gmail.com</p>
          <p className="py-2">628 - XXXXXXXXX</p>
        </div>
      </div>
      <div className="footer bg-slate-500 p-4">
        <div className=" flex justify-between">
          <div className="flex items-center">
            <img src={logo} alt="logo" />
            <p className=" text-white text-xl font-semibold tracking-tight">
              Personalx
            </p>
          </div>
          <div className="text-white">
            <p>@ 2019-2023 Personal</p>
            <p className="text-right">Made in Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
