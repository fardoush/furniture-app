import React, { useState } from "react";
import { FaUser, FaCalendar, FaTag, FaSearch } from "react-icons/fa";
import DefaultBanner from "../../Components/DefaultBanner/DefaultBanner";
import { useLoaderData } from "react-router";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Blog = () => {
  const blogs = useLoaderData();

  // category count

  const categoryCount = blogs.reduce((acc, item) => {
    const category = item.category;
    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {});

  const categoryList = Object.entries(categoryCount);
  // search

  const [search, setSearch] = useState("");
  //category

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredBogs = blogs.filter((blog) => {
    const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory
      ? blog.category === selectedCategory
      : true;
    return matchCategory && matchSearch;
  });

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentBlogs = filteredBogs.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredBogs.length / itemsPerPage);
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  // recently post

  const currentYear = new Date().getFullYear();

  const recentPosts = blogs.filter((post) => {
    const postYear = new Date(post.date).getFullYear();
    return postYear === currentYear;
  });

  // const blogs = [
  //   {
  //     id: 1,
  //     title: "Going all-in with millennial design",
  //     image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
  //     admin: "Admin",
  //     date: "14 Oct 2022",
  //     category: "Wood",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
  //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  //   },
  //   {
  //     id: 2,
  //     title: "Exploring new ways of decorating",
  //     image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  //     admin: "Admin",
  //     date: "14 Oct 2022",
  //     category: "Handmade",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
  //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  //   },
  //   {
  //     id: 3,
  //     title: "Handmade pieces that took time to make",
  //     image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca",
  //     admin: "Admin",
  //     date: "14 Oct 2022",
  //     category: "Wood",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.",
  //     excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  //   },
  // ];
  return (
    <div className="">
      <DefaultBanner />
      <div className="lg:container mx-auto px-5 md:px-10 py-10 lg:py-24 font-sans">
        <div className="flex flex-col lg:flex-row lg:gap-20 md:gap-10 gap-5">
          {/* Main Blog Section */}
          <div className="lg:w-2/3 space-y-12">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 lg:space-y-10 space-y-5">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
              />
              <FaSearch className="absolute right-4 top-4 text-gray-400" />
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold lg:mb-6 mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-500">
                {categoryList.map(([category, count]) => (
                  <li
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex justify-between items-center py-2 px-4 rounded-lg cursor-pointer transition-all duration-200
        ${
          selectedCategory === category
            ? "bg-[#FAF3EA] text-black font-semibold"
            : "hover:bg-[#FAF3EA]"
        }
      `}
                  >
                    <span>{category}</span>
                    <span>{count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 items-center">
                    <img
                      src={post.image}
                      className="w-20 h-20 object-cover rounded-lg"
                      alt=""
                    />
                    <div>
                      <h4 className="font-semibold text-sm leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Pagination  */}

        <div className="flex items-center justify-center gap-2 md:gap-3 pt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className=" px-2 md:px-6 h-12 rounded-lg bg-[#F9F1E7] text-black  text-[16px] hover:bg-[#B88E2F] hover:text-white transition-all duration-300"
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`w-12 h-12 rounded-lg  transition-all duration-300
                ${
                  currentPage === page
                    ? "bg-[#B88E2F] text-white font-semibold"
                    : " text-black bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white font-normal"
                }
                `}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-2 md:px-6 h-12 rounded-lg bg-[#F9F1E7] text-black  text-[16px] hover:bg-[#B88E2F] hover:text-white transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
