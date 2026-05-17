import './BugVisual.css';

const PANEL_W = 240;
const PANEL_H = 180;

const EL_LEFT = 30;
const EL_WIDTH = 180;
const EL_ORIG_TOP = 56;
const EL_SHIFTED_TOP = 96;
const EL_HEIGHT = 32;

interface ShiftRect { left: number; top: number; width: number; height: number; }

const CSS_SHIFT: ShiftRect = {
  left: EL_LEFT,
  top: EL_ORIG_TOP,
  width: EL_WIDTH,
  height: EL_SHIFTED_TOP + EL_HEIGHT - EL_ORIG_TOP,
};

const DEV_SHIFT: ShiftRect = {
  left: CSS_SHIFT.left * 2,
  top: CSS_SHIFT.top * 2,
  width: CSS_SHIFT.width * 2,
  height: CSS_SHIFT.height * 2,
};

interface PanelProps {
  label: string;
  sublabel: string;
  shift: ShiftRect;
  wrong: boolean;
}

const Panel = ({ label, sublabel, shift, wrong }: PanelProps) => (
  <div className="bv-panel">
    <div className={`bv-panel-label ${wrong ? 'bv-wrong' : 'bv-correct'}`}>
      {label} <span>({sublabel})</span>
    </div>
    <div className="bv-page" style={{ width: PANEL_W, height: PANEL_H }}>
      <div className="bv-header" />
      <div className="bv-text" style={{ top: 26, width: 160 }} />
      <div className="bv-text" style={{ top: 36, width: 130 }} />
      <div className="bv-text" style={{ top: 46, width: 150 }} />
      <div
        className="bv-el-ghost"
        style={{ top: EL_ORIG_TOP, left: EL_LEFT, width: EL_WIDTH, height: EL_HEIGHT }}
      />
      <div
        className="bv-el"
        style={{ top: EL_SHIFTED_TOP, left: EL_LEFT, width: EL_WIDTH, height: EL_HEIGHT }}
      >
        Ad
      </div>
      <div
        className={`bv-shift-rect ${wrong ? 'bv-wrong' : 'bv-correct'}`}
        style={{ left: shift.left, top: shift.top, width: shift.width, height: shift.height }}
      />
    </div>
    <div className="bv-coords">
      <code>
        x: {shift.left} · y: {shift.top}<br />
        w: {shift.width} · h: {shift.height}
      </code>
    </div>
  </div>
);

export const BugVisual = () => (
  <figure className="bv-figure">
    <div className="bv-panels">
      <Panel label="Reported" sublabel="device px" shift={DEV_SHIFT} wrong={true} />
      <Panel label="Expected" sublabel="CSS px" shift={CSS_SHIFT} wrong={false} />
    </div>
    <figcaption className="bv-caption">
      Same layout shift on a 2× DPR screen. Dashed outline = original position · Solid box = shifted position · Rectangle = reported shift region
    </figcaption>
  </figure>
);
