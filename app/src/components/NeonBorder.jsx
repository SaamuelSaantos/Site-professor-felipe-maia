import './NeonBorder.css'

export default function NeonBorder({
  children,
  color = '#00A3E0',
  rounded = 36,
  thickness = 3,
  glow = 28,
  speed = 10,
  className = '',
  style = {},
}) {
  const cssVars = {
    '--neon-color': color,
    '--neon-rounded': `${rounded}px`,
    '--neon-thickness': `${thickness}px`,
    '--neon-glow': `${glow}px`,
    '--neon-speed': `${speed}s`,
  }

  return (
    <div
      className={`neon-border ${className}`.trim()}
      style={{ ...cssVars, ...style }}
    >
      <div className="neon-border__core">{children}</div>
    </div>
  )
}
