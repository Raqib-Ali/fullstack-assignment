import { useState } from "react"


function FetchConfigPage() {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const fetchConfig = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/configurations/${inputValue}`);
            const data = await res.json();
            if (!res.ok) {
                setError(`Error: ${res.status}`);
                setData(null);
                return;
            }
            setData(data.data);
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
            <h1>Fetch Config</h1>

            <form onSubmit={(e) => { handleSubmit(e) }}>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <label htmlFor="">Config to load (configId):</label>
                    <input required style={{
                        height: "30px",
                        padding: "5px"
                    }} type="text" placeholder="configId" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />

                    <button type="submit">Submit</button>
                </div>
            </form>

            <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <pre>
                    {data && JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div>
    )
}

export default FetchConfigPage