interface ButtonTitle {
  title: string;
}

export default function Button(btn: ButtonTitle) {
  return (
    <button
      className="m-auto"
      style={{
        backgroundColor: "#fff",
        padding: 7,
        width: 280,
        borderRadius: 10,
        display: "block",
        textAlign: "center",
        // justifyContent: "center",
        position: "relative",
        top: 290
      }}
    >
      {btn.title}
    </button>
  );
}
