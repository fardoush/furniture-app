import React, { useState } from 'react';
import { FaCalendar, FaTag, FaUser } from 'react-icons/fa';

const BlogCard = ({blog}) => {
    const {image, title,description,author,date,blogCategory} = blog;

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div key={blog.id} className="space-y-4">
            
              <img
                src={image}
                alt={title}
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                  <FaUser className="text-primary" /> {author}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-primary" /> {date}
                </span>
                <span className="flex items-center gap-2">
                  <FaTag className="text-primary" /> {blogCategory}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {isExpanded ?  description : description.slice(0,100) + "..."}
              </p>
              <button onClick={() => setIsExpanded(!isExpanded)} className="border-b-2 border-[#B88E2F] pb-1 font-medium hover:text-primary transition-all duration-500">
                {isExpanded ? "Read less" : "Read more"}
              </button>

        </div>
    );
};

export default BlogCard;