type Props = {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  children?: React.ReactNode;
}

export function PageItemWrapper({ className, children }: Props) {
  return (
    <div className={className}>{children}</div>
  )
}