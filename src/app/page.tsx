
import P2PFileTransfer from '@/components/P2PFileTransfer';
import FloatingScrollButton from '@/components/FloatingScrollButton';
import { Toaster } from 'sonner';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Content */}
      <div className="relative">
          <Suspense fallback={<LoadingSpinner />}>
            <P2PFileTransfer />
          </Suspense>
        <Toaster position="top-right" richColors />
      </div>
      
      {/* Floating Scroll Button - Outside all other UI elements */}
      <FloatingScrollButton />
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
