import React, { useState, useEffect } from "react";
import * as Lucide from "lucide-react"; // Import all icons from Lucide React
import { motion } from "framer-motion";
const icons = [
    "Sun", "Moon", "Star", "Heart", "Smile", "Cloud", "Zap", "Coffee", "Leaf",
]; // List of available icon names in Lucide

const AuthImagePattern = ({ title, subtitle }) => {
    const [currentIcons, setCurrentIcons] = useState(Array(9).fill("Sun")); // Default icon

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIcons((prevIcons) =>
                prevIcons.map(() => icons[Math.floor(Math.random() * icons.length)])
            );
        }, 1000); // Change every 1 second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 mt-10">
            <div className="max-w-md text-center">
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {currentIcons.map((icon, i) => {
                        const IconComponent = Lucide[icon]; // Dynamically access the icon component
                        return (
                            <div
                                key={i}
                                className={`aspect-square flex items-center justify-center rounded-2xl bg-primary/10 ${i % 2 === 0 ? "animate-pulse" : ""}`}
                            >
                                <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                        );
                    })}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-gray-300">{title}</h2>
                    <p className="text-base-content/60 text-gray-300">{subtitle}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthImagePattern;
