export function Logo({ size = 'md' }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.jpg" alt="Clipped" className={`${sizes[size]} rounded object-cover`} />
  );
}
