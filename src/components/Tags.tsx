import React from 'react';
import FancyLinkButton from './Button';

interface TagItem {
  label: string;
  link: string;
  bgColor: string;
}

const tags: TagItem[] = [
  { label: 'Behaviour', link: '/', bgColor: '#FEBDD0' },
  { label: 'Inspiration', link: '/', bgColor: '#FFD682' },
  { label: 'Solution', link: '/', bgColor: '#B8F2E6' },
  { label: 'Society', link: '/', bgColor: '#D5AAFF' },
  { label: 'Surveys', link: '/', bgColor: '#FFC1A1' },
  { label: 'Action Task', link: '/', bgColor: '#A1E3FF' },
  { label: 'Videos', link: '/', bgColor: '#FFB7D5' },
];

const TagCloud: React.FC = () => {
  return (
    <div className="relative">
      <h3 className="absolute left-[-50%] top-[30px]  transform rotate-270 text-xl font-bold text-center writing-vertical text-[#1E1B1B] font-playfair">
        Tag Cloud
        <span className="text-pink-500 inline-block ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="14"
            height="14"
            fill="currentColor"
          >
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
          </svg>
        </span>
      </h3>

      <div className="relative h-[330px] max-w-[400px] border w-full rounded-[15px]">
        <div className="absolute top-[-20px] left-5 z-10 bg-[#FFF0D3] shadow-md p-4 rounded-[15px] space-x-4 space-y-10 flex-wrap justify-center  items-center h-[330px] max-w-[400px] w-full">
          {tags.map((tag) => (
            
            <FancyLinkButton
              key={tag.label}
              label={tag.label}
              to={tag.link}
              bgColor={tag.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagCloud;
