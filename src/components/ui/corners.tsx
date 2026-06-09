type CornersProps = {
  className?: string
  size?: string
}

/**
 * Four corner brackets positioned absolutely inside the nearest
 * `relative` parent. Pass border color + opacity via className.
 */
export function Corners({
  className = "border-erus",
  size = "size-2.5",
}: CornersProps) {
  const base = `pointer-events-none absolute ${size} transition-opacity duration-300`
  return (
    <>
      <span className={`${base} left-0 top-0 border-l border-t ${className}`} />
      <span
        className={`${base} right-0 top-0 border-r border-t ${className}`}
      />
      <span
        className={`${base} bottom-0 left-0 border-b border-l ${className}`}
      />
      <span
        className={`${base} bottom-0 right-0 border-b border-r ${className}`}
      />
    </>
  )
}
