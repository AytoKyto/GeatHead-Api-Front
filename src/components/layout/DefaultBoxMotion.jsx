import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GridPattern } from "../Ui/Other/GridPattern";
import classnames from "classnames";

export default function DefaultBoxMotion({
  children,
  customClass,
  isNotAnime,
}) {
  customClass =
    customClass || "flex flex-col items-center justify-center space-y-2";

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative w-full flex rounded-2xl transition-shadow hover:shadow-md bg-custom-500/70 hover:shadow-black/5"
    >
      {isNotAnime && <ResourcePattern mouseX={mouseX} mouseY={mouseY} />}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-custom-450 ring-white/10 group-hover:ring-custom-400" />
      <div
        className={classnames("relative rounded-2xl p-3 w-full", customClass)}
      >
        {children}
      </div>
    </div>
  );
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        {/* <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/1 stroke-white"
          {...gridProps}
        /> */}
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100 from-custom-450/40 to-custom-500/40"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-white/2.5 stroke-white/50"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}
