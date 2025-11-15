"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">Want to collaborate or have a question? Send a message.</p>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-base text-black/80 dark:text-white/80">Send a message</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("Thanks! Your message has been noted locally.");
            }}
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" required className="h-11 rounded-md border border-black/10 bg-transparent px-3 text-sm outline-none ring-offset-background placeholder:text-black/40 transition focus-visible:ring-2 focus-visible:ring-foreground/50 dark:border-white/20" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input type="email" id="email" required className="h-11 rounded-md border border-black/10 bg-transparent px-3 text-sm outline-none ring-offset-background placeholder:text-black/40 transition focus-visible:ring-2 focus-visible:ring-foreground/50 dark:border-white/20" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" rows={5} required className="rounded-md border border-black/10 bg-transparent p-3 text-sm outline-none ring-offset-background placeholder:text-black/40 transition focus-visible:ring-2 focus-visible:ring-foreground/50 dark:border-white/20" />
            </div>
            <button className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
              Send
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">{status}</p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
