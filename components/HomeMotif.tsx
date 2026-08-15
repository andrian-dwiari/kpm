type HomeMotifProps = {
  className?: string;
  variant?: "hero" | "card" | "mark";
};

/**
 * A restrained line-art rendering of a rumah kontrakan facade.
 * This is the site's signature visual — reused at different scales
 * (hero, gallery placeholder cards, brand mark) instead of stock photography.
 */
export default function HomeMotif({ className, variant = "hero" }: HomeMotifProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <path
          d="M8 22 L24 9 L40 22"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20 V38 H36 V20"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 38 V27 H27 V38"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 520"
      fill="none"
      className={className}
      role="img"
      aria-label="Ilustrasi tampak depan rumah kontrakan bergaya garis, dengan atap pelana, pintu kayu, dua jendela, dan tanaman kecil di teras."
    >
      {/* Ground line */}
      <line x1="60" y1="440" x2="580" y2="440" stroke="#E5E1D8" strokeWidth="2" />

      {/* Roof */}
      <path
        d="M100 220 L320 90 L540 220"
        stroke="#596047"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M130 220 L320 108 L510 220"
        stroke="#7C8468"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />

      {/* House body */}
      <path
        d="M150 216 V440 H490 V216"
        stroke="#272723"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Facade texture lines */}
      <line x1="150" y1="300" x2="490" y2="300" stroke="#E5E1D8" strokeWidth="1.5" />
      <line x1="150" y1="370" x2="490" y2="370" stroke="#E5E1D8" strokeWidth="1.5" />

      {/* Door */}
      <path
        d="M280 440 V330 Q280 312 300 312 H340 Q360 312 360 330 V440"
        stroke="#B08968"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="330" cy="380" r="3" fill="#B08968" />

      {/* Left window */}
      <rect
        x="188"
        y="248"
        width="64"
        height="64"
        rx="4"
        stroke="#272723"
        strokeWidth="2.5"
      />
      <line x1="220" y1="248" x2="220" y2="312" stroke="#272723" strokeWidth="1.5" />
      <line x1="188" y1="280" x2="252" y2="280" stroke="#272723" strokeWidth="1.5" />

      {/* Right window */}
      <rect
        x="388"
        y="248"
        width="64"
        height="64"
        rx="4"
        stroke="#272723"
        strokeWidth="2.5"
      />
      <line x1="420" y1="248" x2="420" y2="312" stroke="#272723" strokeWidth="1.5" />
      <line x1="388" y1="280" x2="452" y2="280" stroke="#272723" strokeWidth="1.5" />

      {/* Small plant beside the door */}
      <path
        d="M242 440 V404"
        stroke="#7C8468"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M242 404 C230 400 224 388 226 376 C240 380 248 392 242 404Z"
        fill="#7C8468"
        opacity="0.85"
      />
      <path
        d="M242 410 C254 406 260 394 258 382 C244 386 236 398 242 410Z"
        fill="#96A17C"
        opacity="0.85"
      />
      <rect x="230" y="440" width="24" height="14" rx="2" stroke="#B08968" strokeWidth="2" />

      {/* Path to the door */}
      <path
        d="M320 440 V470"
        stroke="#E5E1D8"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Roof ridge accent */}
      <circle cx="320" cy="90" r="4" fill="#B08968" />
    </svg>
  );
}
