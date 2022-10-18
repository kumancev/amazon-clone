
type Props = {
  className?: string;
  fontSize?: any;
  color?: string;
  children: React.ReactNode;
}

export function PageText({ className, children }: Props) {
  return (
    <span className={className}>{children}</span>
  );
}