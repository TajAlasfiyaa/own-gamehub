const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const crop = "crop/600/400/";
  const end = url.slice(index);
  const begin = url.slice(0, index);
  return `${begin + crop + end}`;
};
export default getCroppedImageUrl;
