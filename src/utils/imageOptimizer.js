// Create low-quality placeholder with blur effect
export const createPlaceholder = (width = 320, height = 280) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Cdefs%3E%3ClinearGradient id='g'%3E%3Cstop stop-color='%23f0f0f0'/%3E%3Cstop offset='50%25' stop-color='%23e0e0e0'/%3E%3Cstop offset='100%25' stop-color='%23f0f0f0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E`;
};

// Optimized image component with compression
export const OptimizedImage = ({ src, alt, className, style, onClick, loading = "lazy" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        imageRendering: 'auto',
        transform: 'translateZ(0)', // Hardware acceleration
        willChange: 'transform'
      }}
      onClick={onClick}
      loading={loading}
      decoding="async"
      fetchPriority={loading === "eager" ? "high" : "low"}
    />
  );
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};