import {
  OTHER_TECHNOLOGIES,
  PREFERRED_TECHNOLOGIES,
  PREFERRED_TOOLS,
} from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TechDetails from "@/components/data-display/tech-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const SkillsSection = () => {
  return (
    <Container id="skills">
      <div className="flex flex-col items-center gap-8">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
      </div>

      <div className="mb-4 flex flex-col items-center gap-8">
        <Typography variant="subtitle" className="max-w-xl text-center">
          My preferred tech stack:
        </Typography>

        <div className="flex w-full max-w-7xl flex-wrap justify-center gap-y-4 md:gap-y-8">
          {PREFERRED_TECHNOLOGIES.map((technology, index) => (
            <div
              key={`${technology.label}-${index}`}
              className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-[12.5%]"
            >
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-col items-center gap-8">
        <Typography variant="subtitle" className="max-w-xl text-center">
          My preferred tools:
        </Typography>

        <div className="flex w-full max-w-7xl flex-wrap justify-center gap-y-4 md:gap-y-8">
          {PREFERRED_TOOLS.map((technology, index) => (
            <div
              key={`${technology.label}-${index}`}
              className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-[12.5%]"
            >
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex flex-col items-center gap-8">
        <Typography variant="subtitle" className="max-w-xl text-center">
          Other technologies I have worked with:
        </Typography>

        <div className="flex w-full max-w-7xl flex-wrap justify-center gap-y-4 md:gap-y-8">
          {OTHER_TECHNOLOGIES.map((technology, index) => (
            <div
              key={`${technology.label}-${index}`}
              className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-[12.5%]"
            >
              <TechDetails {...technology} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
