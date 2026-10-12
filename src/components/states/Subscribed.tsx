"use client";

import { VideoPlayer } from "@/components/VideoPlayer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Heart, MessageCircle, Share2 } from "lucide-react";
import type { Post } from "@/lib/post";

interface Props {
  post: Post;
}

const files = [
  { name: "harbor_lamps_stems.zip", size: "412 MB" },
  { name: "harbor_lamps.als", size: "38 MB" },
  { name: "chord_sheet.pdf", size: "212 KB" },
];

export function Subscribed({ post }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Badge tone="success">Member access · Lamplight</Badge>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4" /> Like
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" /> Share
          </Button>
        </div>
      </div>

      <VideoPlayer interactive />

      <article className="space-y-4 text-ink-200 leading-relaxed text-[15px] sm:text-base">
        {post.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="rounded-2xl border border-white/5 bg-ink-900/70 p-5">
        <h3 className="mb-3 font-medium text-ink-100">Attachments</h3>
        <ul className="divide-y divide-white/5">
          {files.map((f) => (
            <li
              key={f.name}
              className="flex items-center justify-between py-2.5 text-sm"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-ember-500/10 px-2 py-1 text-[10px] uppercase tracking-wider text-ember-300 ring-1 ring-inset ring-ember-500/20">
                  {f.name.split(".").pop()}
                </div>
                <span className="text-ink-100">{f.name}</span>
                <span className="text-xs text-ink-400">{f.size}</span>
              </div>
              <Button variant="ghost" size="sm" aria-label={`Download ${f.name}`}>
                <Download className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-white/5 bg-ink-900/70 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-ink-100 inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-ink-300" />
            {post.comments} member comments
          </h3>
          <Button variant="secondary" size="sm">
            Post a reply
          </Button>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Comments are a static placeholder in this prototype.
        </p>
      </div>
    </div>
  );
}
