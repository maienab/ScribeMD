import React, { useRef } from "react";

type PatientInputProps = {
    onSubmit: (text: string) => void;
};

const PatientInput: React.FC<PatientInputProps> = ({ onSubmit }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = () => {
        const text = inputRef.current?.value.trim();
        if (!text) {
            alert("Please enter some text");
            return;
        }
        onSubmit(text);
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <div style={{ marginBottom: "12px", fontWeight: "bold" }}>
                Welcome to Maien Task for ScribeMd
            </div>
            <div>
                <div style={{ marginBottom: "4px" }}>
                    <label htmlFor="patient-text">Insert your text here:</label>
                </div>
                <div style={{ marginBottom: "8px" }}>
                    <textarea
                        id="patient-text"
                        ref={inputRef}
                        rows={4}
                        cols={40}
                        placeholder="Write your message"
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default PatientInput;
