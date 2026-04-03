import React from 'react';
import { FaUser, FaCalendar, FaTag, FaSearch } from 'react-icons/fa';

const Blog = () => {
    const blogs = [
  {
    "id": 1,
    "title": "Going all-in with millennial design",
    "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    "admin": "Admin",
    "date": "14 Oct 2022",
    "category": "Wood",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
    "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    "id": 2,
    "title": "Exploring new ways of decorating",
    "image": "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    "admin": "Admin",
    "date": "14 Oct 2022",
    "category": "Handmade",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
    "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    "id": 3,
    "title": "Handmade pieces that took time to make",
    "image": "https://images.unsplash.com/photo-1513519245088-0e12902e35ca",
    "admin": "Admin",
    "date": "14 Oct 2022",
    "category": "Wood",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
    "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  }
]
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Main Blog Section */}
        <div className="lg:w-2/3 space-y-12">
          {blogs.map((blog) => (
            <article key={blog.id} className="space-y-4">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <span className="flex items-center gap-2"><FaUser className="text-[#B88E2F]"/> {blog.admin}</span>
                <span className="flex items-center gap-2"><FaCalendar className="text-[#B88E2F]"/> {blog.date}</span>
                <span className="flex items-center gap-2"><FaTag className="text-[#B88E2F]"/> {blog.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 leading-relaxed">{blog.description}</p>
              <button className="border-b-2 border-[#B88E2F] pb-1 font-medium hover:text-[#B88E2F] transition">
                Read more
              </button>
            </article>
          ))}

          {/* Pagination */}
          <div className="flex gap-4 pt-10">
            <button className="bg-[#B88E2F] text-white px-4 py-2 rounded-lg">1</button>
            <button className="bg-[#F9F1E7] px-4 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white">2</button>
            <button className="bg-[#F9F1E7] px-4 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white">3</button>
            <button className="bg-[#F9F1E7] px-4 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white">Next</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-10">
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
            />
            <FaSearch className="absolute right-4 top-4 text-gray-400" />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-6 text-gray-500">
              {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((cat, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{cat}</span>
                  <span>{Math.floor(Math.random() * 10)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
            <div className="space-y-6">
              {blogs.map((post) => (
                <div key={post.id} className="flex gap-4 items-center">
                  <img src={post.image} className="w-20 h-20 object-cover rounded-lg" alt="" />
                  <div>
                    <h4 className="font-semibold text-sm leading-tight">{post.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
    );
};

export default Blog;