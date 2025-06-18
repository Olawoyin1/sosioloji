// import React from 'react'
import FancyLinkButton from './Button';
import { FaStar } from 'react-icons/fa';

interface TagItem {
  label: string;
  link: string;
  bgColor: string;
}

const tags: TagItem[] = [
  { label: 'Behaviour', link: '/', bgColor: '#FEBDD0' },
  { label: 'Society', link: '/', bgColor: '#D5AAFF' },
  { label: 'Surveys', link: '/', bgColor: '#FFC1A1' },
  { label: 'Solution', link: '/', bgColor: '#B8F2E6' },
  { label: 'Action Task', link: '/', bgColor: '#A1E3FF' },
  { label: 'Videos', link: '/', bgColor: '#FFB7D5' },
  { label: 'Inspiration', link: '/', bgColor: '#FFD682' },
];


const Tag2 = () => {
  return (
     <div className="tags-widget max-w-[500px]">
      <h3 className="tags-title flex items-center gap-3">
        <span>Tag Cloud</span> <span className="dot"> <FaStar size={14} /></span>
      </h3>
      <div className="wrapper-tag-widget">
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
  )
}

export default Tag2