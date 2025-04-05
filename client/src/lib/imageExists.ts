/**
 * Function to check if an image exists at a given path
 */
export async function checkImageExists(imageName: string): Promise<boolean> {
  // In a static client-side website, we can check if an image exists by trying to load it
  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = () => {
      resolve(true);
    };
    
    img.onerror = () => {
      resolve(false);
    };
    
    // Set the source to the image path to attempt loading it
    img.src = `/${imageName}`;
  });
}
