// src/components/StarsBackground.jsx
export default function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-50">
      <div
        className="w-full h-full bg-black"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
    </div>
  );
}
