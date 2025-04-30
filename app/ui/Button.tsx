import React from 'react';

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  onClick,
  children,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-foreground hover:bg-foreground/80 text-background p-3 not-active:shadow-lg/70 shadow-foreground/50 active:inset-shadow-sm inset-shadow-background border-black border-2 rounded-md"
    >
      {children}
    </button>
  );
}
