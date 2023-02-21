import Link from "next/link";
import { FC } from "react";

interface GradientButtonWithTextProps {
  text: string;
  onNavigateBackUrl: string;
}

const GradientButtonWithText: FC<GradientButtonWithTextProps> = ({
  text,
  onNavigateBackUrl = "/",
}) => {
  return (
    <Link
      href={onNavigateBackUrl}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  text-gray-900 rounded-lg  bg-gradient-to-br from-gray-800 to-gray-800 hover:from-purple-600 hover:to-blue-500  hover:text-white dark:text-white "
    >
      <span className="relative px-5 py-2.5  bg-white dark:bg-black rounded-md">
        {text}
      </span>
    </Link>
  );
};

export default GradientButtonWithText;
