import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import headimg1 from "../assets/headimg1.webp"

function AboutUs() {
  return (
    <>
      <Layout>
        <div className="min-height screen container mx-auto px-2 my-6 ">
          <Head title="About Us" />
          <div className="xl:py-20 py-10 px-4">
            <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
              <div>
                <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                  welcome to our NetMirror
                </h3>
                <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  NetMirror is an advanced web monitoring and performance
                  analysis tool designed to help businesses optimize their
                  online presence. It provides real-time insights into website
                  performance, traffic patterns, and user behavior, ensuring
                  seamless user experiences and efficient troubleshooting. The
                  platform supports monitoring key metrics such as uptime,
                  response times, and error rates, helping teams identify and
                  resolve issues quickly. With customizable dashboards, alerts,
                  and integration with popular analytics tools.
                </p>
                <p>
                The
                  platform supports monitoring key metrics such as uptime,
                  response times, and error rates, helping teams identify and
                  resolve issues quickly. With customizable dashboards, alerts,
                  and integration with popular analytics tools, NetMirror
                  empowers businesses to make data-driven decisions. It’s an
                  ideal solution for organizations looking to enhance their
                  website reliability, security, and overall efficiency.

                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6  mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold ">
                    12k
                   </span>
                   <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                   <p className="mb-0 text-text leading-7 text-sm">
                   NetMirror is an advanced web monitoring and
                   </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold ">
                    10k
                   </span>
                   <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                   <p className="mb-0 text-text leading-7 text-sm">
                   Completely free, without registration!
                   </p>
                </div>
              </div>
              </div>
              <div className="mt-10 lg:mt-0">
               <img src={headimg1} alt="headimg" className="w-full xl:block hidden h-header rounded-lg object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AboutUs;
