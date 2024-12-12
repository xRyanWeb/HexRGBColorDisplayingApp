export const Input = () => {
  return (
    <div>
      <label
        className="block"
        style={{
          textAlign: "center",
          letterSpacing: 5,
          fontWeight: 200,
          top: 220,
          position: "relative"
        }}
      >
        Color: #101010
      </label>
      <input
        className="m-auto"
        style={{
          padding: 15,
          border: "none",
          outline: "none",
          width: 480,
          position: "relative",
          top: 250,
          display: "block",
          textAlign: "center"
        }}
        placeholder="Enter Color: "
      />
    </div>
  );
};
