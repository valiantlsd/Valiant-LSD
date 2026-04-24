import { motion } from "framer-motion";
import { homeDoors } from "../content/brand.js";
import { Button } from "../components/Button.jsx";
import { LogoMark } from "../components/LogoMark.jsx";
import { Eyebrow } from "../components/Shared.jsx";

export function LandingPage({ navigate }) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-8 md:px-8 md:py-10 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="section-mark mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[8px] border md:mb-8 md:h-20 md:w-20">
            <LogoMark className="h-12 w-12 md:h-16 md:w-16" />
          </div>
          <Eyebrow>Valiant Lifestyle Design</Eyebrow>
          <h1 className="mt-4 text-balance text-[2.75rem] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-5xl md:mt-5 md:text-7xl lg:text-8xl">
            One brand. Two doorways.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-7 text-text-muted md:mt-6 md:text-xl md:leading-8">
            Enter the full VLD world, or step directly into Attention Mastery for a grounded path into focus, execution, and self-command.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-5xl gap-4 md:mt-12 lg:grid-cols-2">
          {homeDoors.map((door) => {
            const Icon = door.icon;
            return (
              <motion.article
                key={door.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="panel-soft border p-5 md:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[rgba(198,161,91,0.11)] text-brand-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <Eyebrow>{door.eyebrow}</Eyebrow>
                </div>
                <h2 className="mt-5 text-[1.85rem] font-semibold leading-tight tracking-[-0.01em] md:text-3xl">{door.title}</h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-text-muted md:text-base">{door.text}</p>
                <div className="mt-8">
                  <Button
                    href={door.href}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(door.href);
                    }}
                    className="w-full justify-center md:w-auto"
                  >
                    Enter
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
