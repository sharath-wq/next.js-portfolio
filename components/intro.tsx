"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Image
                            src={"https://avatars.githubusercontent.com/u/75419524?v=4"}
                            alt="X portriat"
                            width={198}
                            height={198}
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0  text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'am Sharath Chandran.</span> I'am a{" "}
                <span className="font-bold">self-taught </span>
                <span className="font-bold">full-stack developer</span> form india. I enjoy building{" "}
                <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js), Node.js</span>.
            </motion.p>
        </section>
    );
};

export default Intro;