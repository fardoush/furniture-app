import React from "react";

const PhotoGallery = () => {
  const photoGallery = [
    {
      id: 1,
      img: "/src/assets/productRange1.jpg",
      title: "Minimalist Decor",
      colSpan: "lg:col-span-1",
      rowSpan: "row-span-2",
    },
    {
      id: 2,
      img: "/src/assets/gallery3.jpg",
      title: "Modern Dining Area",
      colSpan: "lg:col-span-4",
      rowSpan: "row-span-2",
    },
    {
      id: 3,
      img: "/src/assets/gallery4.jpg",
      title: "Cozy Bedroom Suite",
      colSpan: "lg:col-span-2",
      rowSpan: "row-span-2",
    },
    {
      id: 4,
      img: "/src/assets/gallery5.jpg",
      title: "Rustic Brick Wall",
      colSpan: "lg:col-span-3",
      rowSpan: "row-span-2",
    },
    {
      id: 5,
      img: "/src/assets/gallery6.jpg",
      title: "Vintage Armchair",
      colSpan: "lg:col-span-2",
      rowSpan: "row-span-2",
    },
    {
      id: 6,
      img: "/src/assets/gallery7.jpg",
      title: "Artistic Flower Vase",
      colSpan: "lg:col-span-2",
      rowSpan: "row-span-2",
    },
    {
      id: 7,
      img: "/src/assets/gallery8.jpg",
      title: "Abstract Wall Art",
      colSpan: "lg:col-span-4",
      rowSpan: "row-span-2",
    },
    {
      id: 8,
      img: "/src/assets/gallery9.png",
      title: "Kitchen Essentials",
      colSpan: "lg:col-span-3",
      rowSpan: "row-span-2",
    },
    {
      id: 9,
      img: "/src/assets/gallery2.jpg",
      title: "Professional Workspace",
      colSpan: "lg:col-span-3",
      rowSpan: "row-span-2",
    },
  ];
  return (
    <section className="lg:py-[100px] md:py-[60px] py-10  mx-auto w-full">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[180px]">
          {photoGallery.map((gallery) => (
            <div key={gallery.id}
              className={`${gallery.colSpan} md:col-span-2 ${gallery.rowSpan} overflow-hidden group relative rounded-sm `}
            >
              <img
                src={gallery.img}
                alt={gallery.title}
                className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="text-white font-bold text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {gallery.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
