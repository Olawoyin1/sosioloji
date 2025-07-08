import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CircularCard from "../components/CircularCard"

const Contributors = () => {
  const contributors = [
  {
    name: "Olawoyin Gbolahan",
    imageUrl: "https://i.pravatar.cc/300?img=5",
    subTags: ["Sosioloji", "Contributor"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-blu-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="text-pik-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
  {
    name: "Jonathan Doe",
    imageUrl: "https://i.pravatar.cc/300?img=12",
    subTags: ["Editor"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-bue-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="textpink-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
  {
    name: "Sosioloji",
    imageUrl: "https://i.pravatar.cc/300?img=18",
    subTags: ["Movement", "Activist"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-lue-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="text-ink-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
  {
    name: "WiseAndSane",
    imageUrl: "https://i.pravatar.cc/300?img=8",
    subTags: ["Wise & Sane", "Member"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-bue-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="text-pik-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-extrabold mb-10">Contributing Authors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 md:gap-20 place-items-center">
        {contributors.map((person, index) => (
          <CircularCard
            key={index}
            imageUrl={person.imageUrl}
            name={person.name}
            socials={person.socials}
          />
        ))}
      </div>

    </div>
  )
}

export default Contributors