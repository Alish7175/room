type PillPayloadType = {
    key: number
    text: string,
    onClick: () => void
}

const Pill = ({key, text, onClick}: PillPayloadType) => {
    return (
      <span key={key} className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full cursor-pointer" onClick={onClick}>
        {/* <img src={image} alt={text} /> */}
        <span>{text} &times;</span>
      </span>
    );
  };
  
  export default Pill;