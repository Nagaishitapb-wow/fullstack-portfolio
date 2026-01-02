
import { useState } from "react";

function BuggyComponent() {
    const [shouldCrash, setShouldCrash] = useState(false);

    if (shouldCrash) {
        throw new Error("I crashed!");
    }

    return (
        <div style={{ margin: "20px", padding: "20px", border: "2px dashed red", textAlign: "center" }}>
            <h3>Danger Zone</h3>
            <p>Clicking this button will crash the app to test the Error Boundary.</p>
            <button
                onClick={() => setShouldCrash(true)}
                style={{ backgroundColor: "red", color: "white", padding: "10px", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
                Throw Error
            </button>
        </div>
    );
}

export default BuggyComponent;
