export const Button = ({ onClick, children }: any) => {
  return (
    <button
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const style = {
    color: "red",
    backgroundColor: "black",
    borderRadius: "3px",
    marginRight: "5px",
}
