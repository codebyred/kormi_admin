import type { Metadata } from "next";

import { Sidebar } from "@/components/ui/dashboard/Sidebar";

export const metadata: Metadata = {
  title: "dashboard",
  description: "none",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <Sidebar/>
        <main className="flex-1">
          
          {children} 
                
        </main>
    </div>
    

  );
}