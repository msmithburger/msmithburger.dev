import Image from "next/image";
import { MapPin } from "lucide-react";

import MattHeadshot from "/public/images/matt-headshot.png";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import ScheduleCalendly from "@/components/general/schedule-calendly";

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative flex h-[300px] w-[300px] items-center justify-center md:h-[340px] md:w-[340px]">
            <Image
              src={MattHeadshot}
              priority
              alt="Headshot of Matt"
              className="z-10 h-[280px] w-[260px] rounded-full max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[300px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute mt-[16px] h-[300px] w-[300px] rounded-full border-8 border-transparent bg-white md:h-[340px] md:w-[340px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Matt{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              I primarily specialize in crafting scalable web solutions with
              React, Node, and AWS (check full list below). I excel at taking
              complex systems and breaking them down into simple, maintainable
              components. I highly value flexible teamwork, humility, and
              kindness. Click the button below if you&apos;re interested in
              chatting!
            </Typography>
            <ScheduleCalendly />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Wadsworth, OH, USA</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
