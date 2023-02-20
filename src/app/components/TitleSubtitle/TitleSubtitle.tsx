import { FC } from "react";

interface TitleSubtitleProps {
  title: String;
  subtitle: String;
  type: "small" | "full";
}

const TitleSubtitle: FC<TitleSubtitleProps> = ({
  type = "small",
  title,
  subtitle,
}) => {
  const titleTextSizeName = {
    title: {
      small: "sm:text-xl md:text-xs lg:text-xs",
      full: "text-xl md:text-xl lg:text-xl",
    },
    subtitle: {
      small: "sm:text-xl md:text-xs lg:text-xs",
      full: "text-xl md:text-xl lg:text-xl",
    },
  };

  return (
    <div className="flex flex-col sm:my-2 md:my-1 ">
      <p
        className={`${titleTextSizeName.title[type]} font-semibold text-lg text-gray-400`}
      >
        {title}
      </p>
      <p className={`${titleTextSizeName.subtitle[type]}`}>{subtitle}</p>
    </div>
  );
};
export default TitleSubtitle;
