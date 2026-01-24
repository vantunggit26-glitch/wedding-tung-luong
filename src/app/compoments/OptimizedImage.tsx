import Image from 'next/image';
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  onError?: (e: any) => void;
  onContextMenu?: (e: any) => void;
  draggable?: boolean;
}

/**
 * Component tối ưu hóa ảnh với chất lượng thấp hơn để tải nhanh hơn
 * - Chất lượng: 60 (thay vì 75 mặc định)
 * - Tự động blur khi loading
 * - Lazy loading mặc định
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  priority = false,
  fill = false,
  sizes,
  style,
  onError,
  onContextMenu,
  draggable
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={`${className} transition-opacity duration-300`}
      style={style}
      quality={40} // Giảm chất lượng xuống 40 để giảm mạnh kích thước file
      loading={priority ? 'eager' : 'lazy'} // Lazy load cho ảnh không quan trọng
      sizes={sizes || '100vw'} // Responsive sizes
      priority={priority}
      onError={onError}
      onContextMenu={onContextMenu}
      draggable={draggable}
      unoptimized={false}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
    />
  );
}
