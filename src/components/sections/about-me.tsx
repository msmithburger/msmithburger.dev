import Image from "next/image";

import MattFullPose from "/public/images/matt-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={MattFullPose}
              alt="Fullpose of Matt"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">A little more about me:</Typography>
          <Typography>
            I&apos;m a passionate full stack developer of 10 years. I initially
            started as a UI developer, but quickly branched to the backend as I
            wanted to understand how the entire system worked. I began my career
            in 2013 and it has been quite a whirlwind. I&apos;ve worked for a
            large margeting agency, a FinTech startup, an AI email marketing
            startup, an e-commerce consulting shop, and even ran my own small
            business doing custom software development.
          </Typography>
          <Typography>
            Over that time, I&apos;ve written thousands of lines of code,
            shipped tons of features (with no bugs of course), and managed some
            amazing projects and developers. I&apos;m currently back to doing
            freelance work as that is what I enjoy doing the most. I&apos;m a
            generalist and love to learn new things, and I&apos;m always looking
            for new opportunities to do that.
          </Typography>
          <Typography>
            Currently, I live in Wadsworth, OH, USA with my wife, our 4 year old
            daughter, and two dogs. I&apos;m a big fan of the outdoors and enjoy
            hiking, running, kayaking, and camping. I also love to read, travel,
            watch anime, and golf. I might also have an addiction to watching
            The Office and will randomly quote the show.
          </Typography>
          <Typography>
            As someone who was diagnosed later in life with ADHD and who has
            dealt with anxiety their entire life, I&apos;m a massive advocate
            for mental health awareness. I love connecting with other
            neuro-diverse individuals. Even if you just want to chat about
            nothing, I&apos;m always down.
          </Typography>
          <Typography>
            I&apos;m not a big fan of social media (never have been), but you
            can find some of my newer projects on my{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            . I also plan to begin blogging and doing some other content
            creation in the future.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.S. in Computer Science (2013)
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Professional rabbit holer</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
