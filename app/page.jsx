import CopyButton from "../components/CopyButton";
import "./globals.css";

const PROMPT = `Ultra-detailed, photoreal cinematic image of a sleek white private jet (Gulfstream G650) banking gracefully above an ancient Japanese mountain village at golden hour. Edo-period wooden machiya houses with dark, weathered timber; curved gray kawara roof tiles; narrow stone lanes; red paper lanterns softly glowing; a hillside torii gate and small Shinto shrine; terraced rice paddies stepping down to a winding river; misty cedar forests and tea fields on surrounding slopes.

Composition: rule of thirds with the jet in the upper-right third, village sweeping diagonally from lower-left to mid-frame. Telephoto compression (200mm look) to bring mountains closer; eye-level vantage slightly above village rooftops; leading lines along lanes and river guide gaze toward the jet. Motion frozen (1/2000s), crisp rivet-level detail on fuselage; gentle engine heat shimmer; subtle wingtip vortices.

Lighting and atmosphere: sun low on horizon behind soft clouds, volumetric god rays cutting through morning fog; warm highlights (golden), cool blue-green shadows in valleys; thin haze for depth layering; reflections on polished fuselage and glass; polarized filter clarity.

Look and grade: filmic yet natural color grade reminiscent of Kodak Portra 400; rich micro-contrast, fine grain; high dynamic range preserving sky detail; ultra high resolution (8k), hyper-realistic textures.

Style keywords: photoreal, cinematic, award-winning aerial photography, immaculate detail, sharp focus, depth, scale, serene mood.
`;

const NEGATIVE = `no people, no visible brand logos, no modern billboards, no power lines, no drones, no extra wings, no deformed geometry, no artifacts, no low-res, no oversaturated neon, no watermark, no text overlay, no blown highlights`;

const PARAMS = `aspect ratio 3:2, CFG 7, steps 40, sampler DPM++ 2M Karras (or equivalent), seed 42 (optional)`;

export default function Page() {
  return (
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,marginBottom:12}}>
        <h1>Private Jet above Old Japanese Village</h1>
        <span className="badge">Copy-ready prompt</span>
      </div>
      <p className="lead">Cinematic, photoreal prompt engineered for general image generators. Includes negative prompt and suggested parameters.</p>

      <div className="row">
        <div className="card">
          <div className="section-title">Main prompt</div>
          <textarea readOnly value={PROMPT} />
          <div className="copy-row">
            <span className="small">High-detail, platform-agnostic wording</span>
            <CopyButton text={PROMPT} label="Copy main prompt" />
          </div>
        </div>
        <div className="card">
          <div className="section-title">Negative prompt</div>
          <textarea readOnly value={NEGATIVE} />
          <div className="copy-row">
            <span className="small">Optional but recommended</span>
            <CopyButton text={NEGATIVE} label="Copy negative" />
          </div>
        </div>
      </div>

      <div className="card" style={{marginTop:18}}>
        <div className="section-title">Suggested parameters</div>
        <textarea readOnly value={PARAMS} />
        <div className="copy-row">
          <span className="small">Tweak to your model/sampler</span>
          <CopyButton text={PARAMS} label="Copy parameters" />
        </div>
      </div>

      <div className="footer">Tip: Paste the main prompt first, then add the negative prompt and parameters.
      </div>
    </div>
  );
}
