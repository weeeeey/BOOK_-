const colors = ["red", "yellow", "orange"];

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 고르시오.</h2>
            <div style={{ display: "flex" }}>
                {colors.mao((color) => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: "24px",
                            height: "24px",
                            cursor: "pointer",
                        }}
                    />
                ))}
            </div>
            <hr />
        </div>
    );
};

export default SelectColors;
