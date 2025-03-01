export default function ProgressBar({ label, value, max }) {
    return (
        <div className="progress-bar" aria-labelledby="progress-bar-label">
            <span id="progress-bar-label">{label}: {value}%</span>
            <div className="progress-bar-completed" style={{ width: `${(value / max) * 100}%` }}>
            </div>
        </div>
    );
}