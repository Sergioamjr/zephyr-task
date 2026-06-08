import { useEffect } from "react";

export function useLazyLoadImages() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLImageElement).src = (entry.target as HTMLImageElement).dataset.src!;
            }
          });
        }, {
          rootMargin: "30px",
          threshold: 0.1,
        });
    
        const allImages = document.querySelectorAll(".lazy_load");
        allImages.forEach((img) => observer.observe(img));
      }, []);
}