const DEFAULT_WIDTHS = [360, 640, 960, 1280, 1600, 1920];
const DEFAULT_QUALITY = 75;

const buildOptimizedUrl = (src, width, quality) => {
  const encodedSrc = encodeURIComponent(src);
  return `/_vercel/image?url=${encodedSrc}&w=${width}&q=${quality}`;
};

function OptimizedImage({
  src,
  alt,
  className,
  loading,
  decoding,
  fetchPriority,
  onLoad,
  onError,
  style,
  sizes = '100vw',
  widths = DEFAULT_WIDTHS,
  quality = DEFAULT_QUALITY,
  width,
  height
}) {
  const shouldOptimize = import.meta.env.PROD && typeof src === 'string' && src.startsWith('/');
  const resolvedWidths = widths.length > 0 ? widths : DEFAULT_WIDTHS;
  const srcSet = shouldOptimize
    ? resolvedWidths.map((w) => `${buildOptimizedUrl(src, w, quality)} ${w}w`).join(', ')
    : undefined;
  const resolvedSrc = shouldOptimize
    ? buildOptimizedUrl(src, resolvedWidths[resolvedWidths.length - 1], quality)
    : src;

  return (
    <img
      src={resolvedSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onLoad={onLoad}
      onError={onError}
      style={style}
      width={width}
      height={height}
    />
  );
}

export default OptimizedImage;
