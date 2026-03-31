import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabContent = () => {
//   const productImages = [
//     "https://i.ibb.co.com/Z1RvhFn8/p1.png",
//     "https://i.ibb.co.com/wFHjyYgF/p2.png",
//   ];
  return (
    <div className="lg:container w-full mx-auto px-4 py-20 font-sans">
      <Tabs selectedTabClassName="text-black border-b-2 border-primary">
        {/* Tab Navigation */}
        <TabList className="flex justify-center space-x-8  mb-8 list-none cursor-pointer text-lg text-gray-400">
          <Tab className="pb-2 focus:outline-none transition-colors focus:text-primary font-semibold">
            Description
          </Tab>
          <Tab className="pb-2 focus:outline-none transition-colors focus:text-primary font-semibold">
            Additional Information
          </Tab>
          <Tab className="pb-2 focus:outline-none transition-colors focus:text-primary font-semibold">
            Reviews [5]
          </Tab>
        </TabList>

        {/* Description Panel */}
        <TabPanel>
          <div className=" max-w-5xl mx-auto space-y-6">
            <p className="text-gray-500 leading-relaxed">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>

            {/* Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="bg-[#FAF4F0] rounded-xl p-8 flex items-center justify-center">
                <img
                //   src="https://i.ibb.co.com/7NV7hJP2/sofa5-removebg-preview.png"
                  src="https://i.ibb.co.com/dwLm7ZbQ/p3.png"
                  alt="Product View 1"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-[#FAF4F0] rounded-xl p-8 flex items-center justify-center">
                <img
                  src="https://i.ibb.co.com/wFHjyYgF/p2.png"
                  alt="Product View 2"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Additional Information Panel */}
        <TabPanel>
          <div className="text-center py-10 text-gray-500 italic">
            No additional information available at this moment.
          </div>
        </TabPanel>

        {/* Reviews Panel */}
        <TabPanel>
          <div className="text-center py-10 text-gray-500">
            Customer reviews will be displayed here.
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabContent;
