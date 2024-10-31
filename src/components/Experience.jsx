//logo google
import GoogleLogo from "../assets/logo/google.svg";
import YoutubeLogo from "../assets/logo/youtube.svg";
import AppleLogo from "../assets/logo/apple.svg";

const Experience = () => {
  const experienceList = [
    {
      logo: GoogleLogo,
      title: "Lead Software Engineer at Google",
      date: "Nov 2019 - Present",
    },
    {
      logo: YoutubeLogo,
      title: "Software Engineer at Youtube",
      date: "Jan 2017 - Oct 2019",
    },
    {
      logo: AppleLogo,
      title: "Junior Software Engineer at Apple",
      date: "Jan 2016 - Dec 2017",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-3 bg-black p-5">
      <h1 className="text-white text-2xl text-center p-10">
        <span>My </span>
        <span className="font-extrabold">Experience</span>
      </h1>
      {/* content experience */}
      {experienceList.map((item, index) => (
        <>
          <div className="border border-orange-100 text-white rounded-md p-5">
            <div className="title flex justify-center gap-5 p-3">
              <img className="pr-4" src={item.logo} alt="google" />
              <div className="text-[#FFFFFF] text-xl w-full max-w-[233px]">
                {item.title}
              </div>
            </div>
            <div className="date text-[#D4D4D8] py-3">{item.date}</div>
            <div className="content py-5">
              <p>
                As a Senior Software Engineer at Google, I played a pivotal role
                in developing innovative solutions for Google's core search
                algorithms. Collaborating with a dynamic team of engineers, I
                contributed to the enhancement of search accuracy and
                efficiency, optimizing user experiences for millions of users
                worldwide.
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default Experience;
