import { Html, useProgress } from '@react-three/drei';
import { FaSpinner } from 'react-icons/fa';

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="loader">
        <FaSpinner className="spinner" />
        <div className="progress-bar">
          <div
            className="loader-bar"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
          <p className="loader-text">{progress.toFixed(2)}%</p>
        </div>
      </div>
    </Html>
  );
}
