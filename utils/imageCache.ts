const imageCache = new Map<string, string>();

export const cacheImage = async (url: string): Promise<string> => {
  if (imageCache.has(url)) {
    return imageCache.get(url)!;
  }

  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    imageCache.set(url, objectUrl);
    return objectUrl;
  } catch (error) {
    console.error('Error caching image:', error);
    return url;
  }
};

export const clearImageCache = () => {
  imageCache.forEach((url) => {
    URL.revokeObjectURL(url);
  });
  imageCache.clear();
}; 