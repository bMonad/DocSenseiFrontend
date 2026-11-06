export default function Brand({ size = "lg" }) {
  return (
    <span className={`brand brand-${size}`}>
      DocSensei
      <span className="brand-period">.</span>
    </span>
  );
}