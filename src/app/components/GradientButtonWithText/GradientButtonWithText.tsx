import Link from "next/link";
import { FC } from "react";

interface GradientButtonWithTextProps {
  text: string;
  onNavigateBackUrl: string;
}

const GradientButtonWithText: FC<GradientButtonWithTextProps> = ({
  text,
  onNavigateBackUrl = "/",
}) => (
  <Link
    href={onNavigateBackUrl}
    className="relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-gray-800  to-gray-800 p-0.5  text-sm font-medium text-gray-900 hover:from-purple-600 hover:to-blue-500  hover:text-white dark:text-white "
  >
    <span className="relative rounded-md bg-white  px-5 py-2.5 dark:bg-black">
      {text}
    </span>
  </Link>
);

export default GradientButtonWithText;
