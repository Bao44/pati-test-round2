import { STORIES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";

export default function ScrollVideo({
  scrollRef,
  videoRefs,
  playingId,
  togglePlay,
  isDragging,
  handleMouseDown,
  handleMouseLeave,
  handleMouseUp,
  handleMouseMove,
  handleScroll,
}: any) {
  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={cn(
          "flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing",
          isDragging ? "snap-none" : "snap-x snap-mandatory"
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {STORIES.map((story) => {
          const isPlaying = playingId === story.id;

          return (
            <div
              key={story.id}
              className="relative shrink-0 snap-center group overflow-hidden rounded-md w-[70vw] sm:w-[40vw] md:w-74 aspect-9/16"
              onClick={(e) => togglePlay(story.id, e)}
            >
              {/* VIDEO */}
              <video
                ref={(el) => {
                  if (el) videoRefs.current[story.id] = el;
                }}
                src={story.src}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loop
                muted={false}
                playsInline
                poster={story.image}
              />

              {/* PLAY */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play size={20} className="ml-1 text-black fill-black" />
                  </div>
                </div>
              )}

              {/* PAUSE */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <Pause size={20} className="text-white fill-white" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
