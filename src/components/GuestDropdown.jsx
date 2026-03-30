import { useEffect, useRef, useState } from "react";

const GuestDropdown = ({ adults, setAdults, kids, setKids }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const label = `Adults ${adults} · Kids ${kids}`;

  return (
    <div className="guests-dropdown" ref={ref}>
      <div
        className="guests-input"
        onClick={() => setOpen((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen((prev) => !prev)}
      >
        <span>{label}</span>
        <span className={`guests-chevron ${open ? "open" : ""}`}>&#8964;</span>
      </div>

      {open && (
        <div className="guests-panel">
          <div className="guests-row">
            <div className="guests-info">
              <span className="guests-type">Adults</span>
              <span className="guests-desc">Age 13+</span>
            </div>
            <div className="guests-counter">
              <button
                type="button"
                className="counter-btn"
                onClick={() => setAdults((v) => Math.max(1, v - 1))}
                disabled={adults <= 1}
              >
                −
              </button>
              <span className="counter-value">{adults}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={() => setAdults((v) => Math.min(10, v + 1))}
                disabled={adults >= 10}
              >
                +
              </button>
            </div>
          </div>

          <div className="guests-row">
            <div className="guests-info">
              <span className="guests-type">Kids</span>
              <span className="guests-desc">Ages 0–12</span>
            </div>
            <div className="guests-counter">
              <button
                type="button"
                className="counter-btn"
                onClick={() => setKids((v) => Math.max(0, v - 1))}
                disabled={kids <= 0}
              >
                −
              </button>
              <span className="counter-value">{kids}</span>
              <button
                type="button"
                className="counter-btn"
                onClick={() => setKids((v) => Math.min(10, v + 1))}
                disabled={kids >= 10}
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            className="guests-done"
            onClick={() => setOpen(false)}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestDropdown;
