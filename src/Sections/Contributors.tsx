import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CircularCard from "../components/CircularCard"

const Contributors = () => {
  const contributors = [
  {
    name: "Olawoyin Gbolahan",
    imageUrl: "https://res.cloudinary.com/dunid4t4g/image/upload/v1751881220/ghcr8a6eesmyacnqnrkn.webp",
    subTags: ["Sosioloji", "Contributor"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-blu-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="text-pik-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
  {
    name: "Jonathan Doe",
    imageUrl: "https://res.cloudinary.com/dunid4t4g/image/upload/v1751875303/uastl3o4bafvs7izkuwy.webp",
    subTags: ["Editor"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-bue-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="textpink-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
  {
    name: "Sosioloji",
    imageUrl: "https://res.cloudinary.com/dunid4t4g/image/upload/v1751583678/ilaqalb7z6ngg2a6diwh.webp",
    subTags: ["Movement", "Activist"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-lue-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="text-ink-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
  {
    name: "WiseAndSane",
    imageUrl: "https://res.cloudinary.com/dunid4t4g/image/upload/v1751583500/n9o8a0h4wpca7mjtqmjk.webp",
    subTags: ["Wise & Sane", "Member"],
    socials: [
      { icon: <FaXTwitter size={22} className="text-bue-500" />, onClick: () => console.log("Twitter - Gbolahan") },
      { icon: <FaFacebookF size={22} className="text-pik-500" />, onClick: () => console.log("Instagram - Gbolahan") },
    ],
  },
];

  return (
    <section className="b">

    <div className=" py-10 h-screen  flex items-start justify-center flex-col px-8 md:px-12">
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
        </section>
  )
}

export default Contributors