import logo from "../assets/logo/logo.svg";
import imageOrang from "../assets/images/orang.png";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
// icon import
import {Box,IconButton} from "@mui/material"

import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter"



const DiscordIcon = () => <img src="https://img.icons8.com/?size=100&id=86955&format=png&color=000000" alt="discord Icon" />

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
            <Box display="inline-flex" alignItems="start" gap={2} px={0} py={1} >
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor:"black"
                  }
                }}
              >
                <FacebookIcon/>
              </IconButton>
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  border: 2,
                  borderColor: "black",
                  borderRadius: 1,
                  color:"black"
              }}>
                <RedditIcon/>
              </IconButton>
              <IconButton sx={{
                width: 48,
                height: 48,
                border: 2,
                borderColor: "black",
                borderRadius: 1,
                color:"black"
              }}>
               <DiscordIcon/>
              </IconButton>
              <IconButton sx={{
                width: 48,
                height: 48,
                border: 2,
                borderColor: "black",
                borderRadius: 1,
                color:"black"
              }}>
                <TwitterIcon/>
              </IconButton>
            </Box>
          </div>
          <div className="skills pt-20 pb-10">
            <p className="text-2xl">My <span className="font-extrabold">Skills</span></p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
