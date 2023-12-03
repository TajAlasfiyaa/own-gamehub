const getCroppedImageUrl = (url: string, crop = "600/400") => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const cropimage = url.slice(0, index) + `crop/${crop}/` + url.slice(index);
  return cropimage;
};
export default getCroppedImageUrl;
