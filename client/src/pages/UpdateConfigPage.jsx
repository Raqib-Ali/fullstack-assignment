import { useState } from "react";


function UpdateConfigPage() {
    const [inputValue, setInputValue] = useState("");
    const [textBoxValue, setInputtextBoxValue] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const fetchConfig = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/configurations/${inputValue}`, {
                headers: { "Content-Type": "application/json" },
                method: "PUT",
                body: JSON.stringify({ remark: textBoxValue })
            });
            if (!res.ok) {
                setError(`Error: ${res.status}`);
                setData(null);
                return;
            }
            const data = await res.json();

            setData(data.message);
            setError(null);
        } catch (error) {
            console.log(error);
            setError(`Error: ${error.message}`);
            setData(null);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchConfig();
    }

    return (
        <div>
            <h1>Update Remark</h1>

            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                    <label htmlFor="">Config to update (configId):</label>
                    <input required style={{
                        height: "30px",
                        padding: "5px"
                    }} type="text" placeholder="ConfigId" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />

                    <label htmlFor="">Remark:</label>
                    <input required style={{
                        height: "30px",
                        padding: "5px"
                    }} type="textBox" placeholder="Add Remark" value={textBoxValue} onChange={(e) => { setInputtextBoxValue(e.target.value) }} />

                    <button type="submit">Submit</button>
                </div>
            </form>

            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {
                    data && <p style={{
                        color: "green",
                        fontSize: "30px",
                        fontWeight: "bolder"
                    }}>{data}</p>
                }
            </div>
        </div>
    )
}

export default UpdateConfigPage