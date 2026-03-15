import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'motion/react';

const FRAME_COUNT = 89;
const ANIMATION_URL = "https://hckzpjsbgchfhwomqkal.supabase.co/storage/v1/object/sign/anim/ee776dbb-4892-49c9-a414-3c325686f180-ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MDg0NjBiMi1mYjc0LTQwMWItOWZhYy0yMjU5MDhjZGJhNjQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhbmltL2VlNzc2ZGJiLTQ4OTItNDljOS1hNDE0LTNjMzI1Njg2ZjE4MC1lemdpZi5jb20tdmlkZW8tdG8td2VicC1jb252ZXJ0ZXIud2VicCIsImlhdCI6MTc3MzYwMDI4NiwiZXhwIjozNTM5NjE2Mjg2fQ.OXGEgncFRXgtrBTiyUMpt-UDpFAvEqu1srolMxeMRts";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = async () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameStr = i.toString().padStart(2, '0');
        img.src = `/sequence/frame_${frameStr}_delay-0.067s.webp`;
        
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
          if (loadedCount === FRAME_COUNT) {
            setIsLoaded(true);
          }
        };
        
        img.onerror = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
          if (loadedCount === FRAME_COUNT) {
            setIsLoaded(true);
          }
        };

        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  // Draw frame to canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    if (images.length > 0 && images[index] && images[index].complete && images[index].naturalWidth !== 0) {
      const img = images[index];
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const unsubscribe = frameIndex.on('change', (latest) => {
      renderFrame(Math.round(latest));
    });
    renderFrame(0);
    return () => unsubscribe();
  }, [images, isLoaded]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.round(frameIndex.get()));
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [images, isLoaded]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {/* Background Animation Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-20 grayscale transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${ANIMATION_URL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5) contrast(1.1)'
          }}
        />

        {/* Canvas for frame-by-frame scroll */}
        <canvas
          ref={canvasRef}
          className="relative z-10 h-full w-full object-cover mix-blend-screen"
        />
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Scrollez pour explorer</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute right-8 top-1/2 z-20 h-32 w-[2px] -translate-y-1/2 bg-white/10">
          <motion.div 
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="h-full w-full bg-white"
          />
        </div>

        {/* Loading Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
            <div className="flex flex-col items-center gap-6">
              <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">
                Chargement de l'expérience {loadProgress}%
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
