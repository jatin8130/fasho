"use client";
import { useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clear } from "../../redux/Slice";

export default function PaymentPage() {

  const { price } = useParams();
  const dispatch = useDispatch();

  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cvvRef = useRef<HTMLInputElement | null>(null);

  // Helpers
  const formatCardNumber = (value: string) => {
    // Remove non-digits
    const v = value.replace(/\D/g, "");
    // Group in 4s
    return v.replace(/(.{4})/g, "$1 ").trim();
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 4) v = v.slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    setExpiry(v);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "");
    setCvv(v.slice(0, 4));
  };

  const detectBrand = (num: string) => {
    const digits = num.replace(/\D/g, "");
    if (/^4/.test(digits)) return "visa";
    if (/^5[1-5]/.test(digits)) return "mastercard";
    if (/^3[47]/.test(digits)) return "amex";
    if (/^6(?:011|5)/.test(digits)) return "discover";
    return "card";
  };

  const validate = () => {
    setError(null);
    const digits = cardNumber.replace(/\D/g, "");
    if (digits.length < 13) return setError("Card number is too short.");
    if (!/^[0-9 ]+$/.test(cardNumber)) return setError("Card number invalid.");
    if (name.trim().length < 2) return setError("Please enter the cardholder's name.");
    if (!/^\d{2}\/\d{2}$/.test(expiry)) return setError("Expiry must be in MM/YY format.");
    const [m, y] = expiry.split("/").map((s) => parseInt(s, 10));
    if (m < 1 || m > 12) return setError("Expiry month is invalid.");
    // Minimal expiry check (not fully robust)
    const now = new Date();
    const year = 2000 + y;
    const exp = new Date(year, m - 1, 1);
    if (exp < new Date(now.getFullYear(), now.getMonth(), 1)) return setError("Card is expired.");
    if (cvv.length < 3) return setError("CVV is required.");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setProcessing(true);
    setError(null);

    // Simulate processing
    await new Promise((res) => setTimeout(res, 1800));

    // Fake random decline to feel realistic
    const ok = Math.random() > 0.12;
    setProcessing(false);
    if (ok) {
      setSuccess(true);
    } else {
      setError("Payment was declined. Try another card.");
      if (cvvRef.current) cvvRef.current.focus();
    }
  };

  const reset = () => {
    setCardNumber("");
    setName("");
    setExpiry("");
    setCvv("");
    setProcessing(false);
    setSuccess(false);
    setError(null);
  };

  const brand = detectBrand(cardNumber);

  if(success) {
    dispatch(clear())
  }

  return (
    <div className="page-root sm:p-[28px] p-[0px]">
      <main className="container">
        <section className="panel sm:p-[18px] p-[0px]">
          <div className="left">
            <div className="brand">
              <svg viewBox="0 0 36 36" className="brand-logo" aria-hidden>
                <circle cx="18" cy="18" r="16" fill="#0ea5a4" />
                <text x="18" y="22" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">Pay</text>
              </svg>
              <div>
                <h1>Secure Checkout</h1>
                <p className="muted">Pay safely using your card — we never store full card data.</p>
              </div>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} className="form" noValidate>
                <label className="label">Card Number</label>
                <div className="input-row">
                  <input
                    inputMode="numeric"
                    aria-label="Card number"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardChange}
                    className="input"
                    maxLength={19}
                    required
                  />
                  <div className={`card-chip ${brand}`}>{brand.toUpperCase()}</div>
                </div>

                <div className="small-grid">
                  <div>
                    <label className="label">Expiry (MM/YY)</label>
                    <input
                      inputMode="numeric"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={handleExpiryChange}
                      className="input"
                      maxLength={5}
                      required
                    />
                  </div>
                  <div>
                    <label className="label">CVV</label>
                    <input
                      ref={cvvRef}
                      inputMode="numeric"
                      placeholder="123"
                      value={cvv}
                      onChange={handleCvvChange}
                      className="input"
                      maxLength={3}
                      required
                    />
                  </div>
                </div>

                <label className="label">Name on Card</label>
                <input
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  required
                />

                <div className="summary">
                  <div>
                    <div className="muted">Amount</div>
                    <div className="amount">₹{price}</div>
                  </div>
                  <div>
                    <div className="muted">Merchant</div>
                    <div className="muted">Example Store</div>
                  </div>
                </div>

                {error && <div className="error" role="alert">{error}</div>}

                <button type="submit" className="pay" disabled={processing} aria-live="polite">
                  {processing ? (
                    <span className="spinner" aria-hidden></span>
                  ) : null}
                  {processing ? "Processing…" : `Pay ₹${price}`}
                </button>

                <p className="secure">🔒 256‑bit SSL — Secure payment</p>
              </form>
            ) : (
              <div className="success">
                <svg width="80" height="80" viewBox="0 0 24 24" aria-hidden>
                  <circle cx="12" cy="12" r="10" fill="#ecfdf5" />
                  <path d="M9 12.5l1.8 1.8L15 10" stroke="#059669" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2>Payment successful</h2>
                <p className="muted">Your receipt has been emailed to you.</p>

                <div className="success-actions">
                  <Link href='/' className="secondary border-2 py-2 px-3 rounded-lg hover:bg-[#FF6701] hover:text-[white]">Done</Link>
                </div>
              </div>
            )}
          </div>

          <aside className="right">
            <div className="card-preview" aria-hidden>
              <div className="card-top">
                <div className="chip" />
                <div className="brand-small">{brand.toUpperCase()}</div>
              </div>
              <div className="card-number">{cardNumber || "•••• •••• •••• ••••"}</div>
              <div className="card-bottom flex flex-col">
                <div className="card-name">{name || "CARDHOLDER"}</div>
                <div className="card-exp">{expiry || "MM/YY"}</div>
              </div>
            </div>

            <div className="help">
              <h3>Need help?</h3>
              <p className="muted">Contact support@examplestore.test or call +91 22 1234 5678</p>

              <ul className="features">
                <li>Secure payments</li>
                <li>PCI DSS compliant</li>
                <li>Instant receipt</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <style jsx>{`
        :root{--bg:#f6f8fb;--card:#ffffff;--muted:#6b7280;--accent:#0ea5a4;--danger:#ef4444}
        .page-root{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#f8fafc 0%, #eef2ff 100%);}
        .container{width:100%;max-width:1100px}
        .panel{display:flex;gap:24px;background:var(--bg);border-radius:14px;box-shadow:0 8px 30px rgba(16,24,40,0.06)}
        .left{flex:1;padding:26px;background:var(--card);border-radius:12px}
        .right{width:320px;padding:22px;background:linear-gradient(180deg,#ffffff,#fbfdff);border-radius:12px;display:flex;flex-direction:column;gap:18px}
        .brand{display:flex;gap:14px;align-items:center;margin-bottom:18px}
        .brand-logo{width:56px;height:56px;flex:0 0 56px;border-radius:12px}
        h1{font-size:20px;margin:0}
        .muted{color:var(--muted);font-size:13px}
        .form{display:flex;flex-direction:column;gap:12px;margin-top:8px}
        .label{font-size:13px;color:#111827;margin-bottom:6px}
        .input{width:100%;padding:12px 14px;border-radius:8px;border:1px solid #e6e9ef;background:#fff;font-size:15px;outline:none}
        .input:focus{box-shadow:0 0 0 4px rgba(14,165,164,0.06);border-color:var(--accent)}
        .input-row{display:flex;align-items:center;gap:12px}
        .card-chip{min-width:72px;text-align:center;padding:8px;border-radius:8px;background:#f3f4f6;font-weight:600;font-size:12px;color:#374151}
        .card-chip.visa{background:linear-gradient(90deg,#fff 0%,#eef2ff 100%)}
        .card-chip.mastercard{background:linear-gradient(90deg,#fff 0%,#fff7ed 100%)}
        .small-grid{display:grid;grid-template-columns:1fr 120px;gap:12px}
        .summary{display:flex;justify-content:space-between;align-items:center;padding:12px;border-radius:8px;border:1px solid #eef2ff;background:#fbfdff;margin-top:6px}
        .amount{font-size:18px;font-weight:700}
        .pay{margin-top:10px;background:#098984;color:white;padding:12px 14px;border-radius:10px;border:0;font-weight:700;font-size:15px;cursor:pointer;display:inline-flex;align-items:center;gap:10px;height:1.2cm;width:fit-content}
        .pay:disabled{opacity:0.6;cursor:not-allowed}
        .spinner{width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,0.25);border-left-color:rgba(255,255,255,0.9);animation:spin 1s linear infinite;display:inline-block}
        @keyframes spin{to{transform:rotate(360deg)}}
        .secure{font-size:13px;color:var(--muted);margin-top:6px}
        .error{background:#fff1f2;color:var(--danger);padding:10px;border-radius:8px;border:1px solid rgba(239,68,68,0.12)}

        /* right column card preview */
        .card-preview{background:linear-gradient(180deg,#0ea5a4,#036b63);color:white;border-radius:12px;padding:18px;display:flex;flex-direction:column;gap:14px}
        .card-top{display:flex;justify-content:space-between;align-items:center}
        .chip{width:36px;height:24px;background:rgba(255,255,255,0.3);border-radius:4px}
        .brand-small{font-weight:700;opacity:0.95}
        .card-number{font-family:monospace;font-size:16px;letter-spacing:2px}
        .card-name{font-size:12px;opacity:0.95}

        .help{background:#fff;border-radius:10px;padding:12px}
        .help h3{margin:0 0 6px 0}
        .features{margin:10px 0 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px}
        .features li{font-size:13px;color:var(--muted)}

        .success{display:flex;flex-direction:column;align-items:center;gap:10px;padding:28px}
        .success h2{margin:0}
        .success-actions{display:flex;gap:10px;margin-top:12px}
        .secondary{background:transparent;border:1px solid #e6eef0;padding:10px 12px;border-radius:8px;cursor:pointer}

        @media (max-width:980px){
          .panel{flex-direction:column}
          .right{width:100%}
        }
      `}</style>
    </div>
  );
}
