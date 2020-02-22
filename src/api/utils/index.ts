export const urlify = (text) =>{
  const urls = [];
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  text.replace(urlRegex , (url) =>{
    urls.push(url)
  });
  return urls;
};

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
