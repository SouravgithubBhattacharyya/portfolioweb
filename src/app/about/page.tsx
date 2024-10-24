import React from "react";

import Image from "next/image";

import Orbits from "@/components/shared/orbits";
import PageTitle from "@/components/shared/page-title";
import SectionTitle from "@/components/shared/section-title";
import FieldCard from "@/components/field-card";

import { fieldsInfo, generalInfo } from "@/data";

import me from "@/assets/images/me-removebg-preview.png";

import MotionSection from "@/components/shared/motion-section";

const About = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, translateY: 25 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <section className=" z-10 relative container flex flex-col justify-center items-start">
        <PageTitle title="About me & my Skills" />
        <article className="w-full px-4 lg:px-8 py-8 rounded-t-2xl mt-8 bg-secondary-color-light dark:bg-secondary-color-dark flex flex-col justify-start items-start gap-y-8">
          <article className="flex flex-col justify-start items-start gap-4 lg:flex-row lg:justify-between lg:items-stretch">
            <div className="flex justify-center items-center ml-3 sm:ml-20 ">
              <Image
                placeholder="blur"
                className="border-8 rounded-full shadow-lg bg-gradient-to-r from-purple-700 via-orange-500 to-black h-72 w-72 object-cover"
                src={me}
                alt="My Image Picture"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-4 justify-center items-start">
              <SectionTitle title="About Me" />
              <p className=" leading-loose text-sm lg:text-base">
                {generalInfo.about_info.bio.intro}
              </p>
              <p className=" leading-loose text-sm lg:text-base">
                {generalInfo.about_info.bio.main}
              </p>
              <p className=" leading-loose text-sm lg:text-base">
                {generalInfo.about_info.bio.outro}
              </p>
            </div>
          </article>

          <div className="mt-4">
            <SectionTitle title="My Skills" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-4">
              {fieldsInfo.map((field) => (
                <FieldCard key={field.title} field={field} />
              ))}
            </div>
          </div>
        </article>
      </section>

      <Orbits mini={true} />
    </MotionSection>
  );
};

export default About;
