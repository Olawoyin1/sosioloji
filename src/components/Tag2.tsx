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
        <div className="tags-container">
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