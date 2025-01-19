export const formatContent = (content:string, highlight:string, className:string) => {
  const [phrase1, phrase2] = content.split(highlight);
  return [phrase1, highlight, phrase2].map((text:string, index:number) => (
    <span key={text} className={index === 1 ? className : ''}>
      {text}
    </span>
  ));
};
