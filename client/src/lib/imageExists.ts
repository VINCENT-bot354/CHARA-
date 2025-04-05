/**
 * Function to check if an image exists at a given path
 */
export async function checkImageExists(imageName: string): Promise<boolean> {
  // If filename already includes extension
  if (imageName.match(/\.(jpg|jpeg|png|svg)$/i)) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `/${imageName}`;
    });
  }

  // Try jpg first, then other formats
  const extensions = ['jpg', 'jpeg', 'png', 'svg'];
  
  for (const ext of extensions) {
    const exists = await new Promise<boolean>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `/${imageName}.${ext}`;
    });
    
    if (exists) return true;
  }
  
  return false;
}
