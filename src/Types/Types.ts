// src/types/input.d.ts
export interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null | undefined;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  }
  