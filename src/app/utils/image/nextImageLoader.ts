import { ImageLoaderProps } from "next/image";

const nextImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default nextImageLoader;
