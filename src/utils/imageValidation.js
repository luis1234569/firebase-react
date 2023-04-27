export const checkImageExists = (imageUrl) => {

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageUrl+' ';
    });
  };