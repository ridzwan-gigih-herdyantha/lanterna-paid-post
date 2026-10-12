import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CREATOR, type Post } from "@/lib/post";
import { Heart, MessageCircle, Clock } from "lucide-react";

export function PostHeader({ post }: { post: Post }) {
  return (
    <header className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar name={CREATOR.name} />
          <div className="leading-tight">
            <div className="font-medium text-ink-100">{CREATOR.name}</div>
            <div className="text-xs text-ink-300">
              {CREATOR.role} · {CREATOR.members}
            </div>
          </div>
        </div>
        <Badge tone="ember" className="hidden sm:inline-flex">
          Members-only
        </Badge>
      </div>

      <div className="space-y-3">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-ink-100 tracking-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-300">
          <span>{post.publishedAt}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {post.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Heart className="h-3.5 w-3.5" /> {post.likes.toLocaleString()}
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5" /> {post.comments}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.map((t) => (
            <Badge key={t} tone="neutral">
              #{t}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  );
}
