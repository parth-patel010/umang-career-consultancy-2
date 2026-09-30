import Image, { type ImageProps } from "next/image";

const NEXT_IMAGE_HOSTS = ["images.unsplash.com", "flagcdn.com"];

export default function CmsImage({ src, alt, className, fill, width, height, ...props }: ImageProps) {
  const value = typeof src === "string" ? src : "";
  const isRemote = value.startsWith("http");
  let allowed = !isRemote;
  if (isRemote) {
    try {
      const host = new URL(value).hostname;
      allowed =
        NEXT_IMAGE_HOSTS.includes(host) ||
        host.endsWith(".blob.vercel-storage.com") ||
        host.endsWith(".public.blob.vercel-storage.com");
    } catch {
      allowed = false;
    }
  }

  if (!allowed) {
    if (fill) {
      return <img src={value} alt={alt} className={`absolute inset-0 h-full w-full ${className ?? ""}`} />;
    }
    return (
      <img
        src={value}
        alt={alt}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        className={className}
      />
    );
  }

  return <Image src={src} alt={alt} className={className} fill={fill} width={width} height={height} {...props} />;
}
