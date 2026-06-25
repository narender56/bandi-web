'use client';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

export function CopyButton({ text }: { text: string }) {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-black text-sky-700 cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(text);
        toast.success('Code copied to clipboard', {
          position: 'top-center',
          description: 'You can now paste it in the Rider app signup screen.',
          className: '!bg-sky-50 !text-sky-700 border !border-sky-200',
        });
      }}
    >
      <Copy className="size-4" />
      Save this code
    </button>
  );
}
