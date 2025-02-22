import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Sparkles } from "lucide-react";
import kiko from "./Kiko.jpg";

const BirthdayCelebration = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const [showGift, setShowGift] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "linear-gradient(135deg, #6a11cb, #ff00ff)",
                color: "white",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
                fontFamily: "'Tajawal', sans-serif",
                padding: "20px",
            }}
        >
            {showConfetti && <Confetti numberOfPieces={300} gravity={0.1} />}

            <motion.h1
                style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                🎉 كل سنة وانت طيب يا جووو 🎂
            </motion.h1>

            <motion.p
                style={{
                    fontSize: "1.5rem",
                    marginBottom: "20px",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                وعقباال ميت مليون سنة في راحة بال ياخوياا
            </motion.p>

            <motion.div
                style={{
                    display: "flex",
                    gap: "20px",
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <Sparkles size={60} color="#FFD700" className="animate-pulse" />
                <Sparkles size={60} color="#FFD700" className="animate-pulse" />
                <Sparkles size={60} color="#FFD700" className="animate-pulse" />
            </motion.div>

            {/* زر فتح الهدية */}
            <motion.button
                style={{
                    marginTop: "20px",
                    padding: "15px 30px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    borderRadius: "30px",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
                    transition: "transform 0.3s ease",
                    maxWidth: "90%",
                }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowGift(true)}
            >
                🎁 افتح هديتك
            </motion.button>

            {/* الصورة - تظهر عند الضغط وتكبر مع الدوران */}
            {showGift && (
                <motion.img
                    src={kiko}
                    alt="هدية"
                    style={{
                        marginTop: "20px",
                        width: "150px",
                        height: "150px",
                        borderRadius: "20px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        maxWidth: "80%", // اجعل الصورة تتناسب مع الشاشات الصغيرة
                    }}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            )}

            {/* تأثير النجوم المتطايرة */}
            <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "10%",
                        left: "10%",
                        width: "10px",
                        height: "10px",
                        background: "white",
                        borderRadius: "50%",
                        opacity: 0.3,
                        animation: "pulse 2s infinite",
                    }}
                ></div>
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        right: "20%",
                        width: "15px",
                        height: "15px",
                        background: "yellow",
                        borderRadius: "50%",
                        opacity: 0.4,
                        animation: "ping 3s infinite",
                    }}
                ></div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "20%",
                        left: "15%",
                        width: "8px",
                        height: "8px",
                        background: "pink",
                        borderRadius: "50%",
                        opacity: 0.5,
                        animation: "pulse 2.5s infinite",
                    }}
                ></div>
            </div>

            {/* جعل الصفحة تستجيب بشكل مثالي على الشاشات الصغيرة */}
            <style>
                {`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2rem !important;
                    }
                    p {
                        font-size: 1.2rem !important;
                    }
                    button {
                        font-size: 1rem !important;
                        padding: 10px 20px !important;
                    }
                }
                `}
            </style>
        </div>
    );
};

export default BirthdayCelebration;