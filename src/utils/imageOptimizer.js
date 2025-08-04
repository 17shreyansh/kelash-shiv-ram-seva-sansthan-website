// Create low-quality placeholder
export const createPlaceholder = (width = 320, height = 280) => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='100%25' height='100%25' fill='%23f5f5f5'/%3E%3C/svg%3E`;
};

// Preload critical images
export const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
  return img;
};