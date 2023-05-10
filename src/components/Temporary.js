const Array = () => {
    const trees = [
        "Birch",
        "Oak",
        "Maple",
        "Pine"
    ];

    const listItems = trees.map((item) => 
        <li>{item}</li>
    );

    return (
        <div>
            <h1>Trees</h1>
            <ul>{listItems}</ul>
        </div>
    );
};

export default Array;