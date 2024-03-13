type LabeledInputProps = {
    label: string;
    value: string;
    inputName: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LabeledInput({ label, value, inputName, handleChange }: LabeledInputProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "8px" }}>
            <label>{label}:</label>
            <input
                type="text"
                onChange={handleChange}
                name={inputName}
                value={value} />
        </div>
    )
}