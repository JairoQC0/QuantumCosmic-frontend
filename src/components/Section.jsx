export default function Section({ title, children }) {
  return (
    <section className="text-center animate-fade-in">
      <h2 className="text-5xl font-bold mb-4">{title}</h2>
      <div className="text-gray-400 max-w-2xl mx-auto">{children}</div>
    </section>
  );
}
