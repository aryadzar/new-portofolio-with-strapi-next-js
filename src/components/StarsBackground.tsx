'use client';

import React, { useEffect, useRef } from 'react';

const StarsBackground: React.FC = () => {
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const stars: {
         x: number;
         y: number;
         size: number;
         speedX: number;
         speedY: number;
      }[] = [];
      const numStars = 100;
      const mouseFollower = {
         x: window.innerWidth / 2,
         y: window.innerHeight / 2,
      };

      // Resize canvas to full screen
      const resizeCanvas = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      // Generate random stars
      for (let i = 0; i < numStars; i++) {
         stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
         });
      }

      // Draw stars
      const drawStars = () => {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.fillStyle = 'white';

         // Draw each star
         stars.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            // Update position
            star.x += star.speedX;
            star.y += star.speedY;

            // Wrap around edges
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
         });

         // Draw mouse-following star
         ctx.beginPath();
         ctx.arc(mouseFollower.x, mouseFollower.y, 4, 0, Math.PI * 2);
         ctx.fillStyle = '#FFD700'; // Gold color
         ctx.fill();
      };

      // Animate
      const animate = () => {
         drawStars();
         requestAnimationFrame(animate);
      };

      animate();

      // Track mouse movement
      const updateMouseFollower = (e: MouseEvent) => {
         mouseFollower.x = e.clientX;
         mouseFollower.y = e.clientY;
      };

      window.addEventListener('mousemove', updateMouseFollower);

      return () => {
         window.removeEventListener('resize', resizeCanvas);
         window.removeEventListener('mousemove', updateMouseFollower);
      };
   }, []);

   return (
      <canvas
         ref={canvasRef}
         className="fixed top-0 left-0 w-full h-full z-[-1]"
      ></canvas>
   );
};

export default StarsBackground;

// "use client";

// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";

// const StarBackground = (props: any) => {
//   const ref: any = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#fff"
//           size={0.002}
//           sizeAttenuation={true}
//           dethWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas: React.FC<{}> = () => (
//   <div className="w-full h-auto fixed inset-0 z-[1] ">
//     <Canvas camera={{ position: [0, 0, 1] }}>
//       <Suspense fallback={null}>
//         <StarBackground />
//       </Suspense>
//     </Canvas>
//   </div>
// );

// export default StarsCanvas;