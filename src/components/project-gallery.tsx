import { useCallback, useEffect, useState } from 'react';
import { Maximize2 } from 'lucide-react';

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  fit?: 'cover' | 'contain';
  position?: string;
};

type ProjectGalleryProps = {
  title: string;
  coverImage: ProjectImage;
  images: ProjectImage[];
};

const ProjectGallery = ({ title, coverImage, images }: ProjectGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideCount, setSlideCount] = useState(images.length);

  const hasGallery = images.length > 0;

  const updateCurrentSlide = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) {
      return;
    }

    setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    setSlideCount(carouselApi.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    updateCurrentSlide(api);

    api.on('select', updateCurrentSlide);
    api.on('reInit', updateCurrentSlide);

    return () => {
      api.off('select', updateCurrentSlide);
      api.off('reInit', updateCurrentSlide);
    };
  }, [api, updateCurrentSlide]);

  useEffect(() => {
    if (!open || !api) {
      return;
    }

    api.scrollTo(0);
    setCurrentSlide(1);
  }, [open, api]);

  const cover = (
    <>
      <img
        src={coverImage.src}
        alt={coverImage.alt}
        loading="lazy"
        decoding="async"
        className={cn(
          'size-full transition-transform duration-500',
          hasGallery && 'group-hover/gallery:scale-[1.02]',
          coverImage.fit === 'contain' ? 'object-contain p-4' : 'object-cover',
        )}
        style={{
          objectPosition: coverImage.position,
        }}
      />

      {hasGallery && (
        <>
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/gallery:bg-black/25"
          />

          <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-white transition-transform duration-300 group-hover/gallery:translate-y-0 group-focus-visible/gallery:translate-y-0">
            <span className="flex items-center gap-2 text-sm font-medium">
              <Maximize2 size={18} aria-hidden="true" />
              View gallery
            </span>

            <span className="text-xs text-white/80">
              {images.length}{' '}
              {images.length === 1 ? 'screenshot' : 'screenshots'}
            </span>
          </span>
        </>
      )}
    </>
  );

  if (!hasGallery) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b bg-muted/40">
        {cover}
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group/gallery relative block aspect-[16/10] w-full overflow-hidden border-b bg-muted/40 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Open ${title} screenshot gallery`}
        >
          {cover}
        </button>
      </DialogTrigger>

      <DialogContent className="flex h-[92dvh] w-[calc(100%-1rem)] max-w-6xl flex-col gap-0 overflow-hidden p-0 sm:w-[calc(100%-2rem)] sm:max-w-6xl">
        <DialogHeader className="shrink-0 border-b px-4 py-4 pr-14 text-left sm:px-6">
          <DialogTitle>{title}</DialogTitle>

          <DialogDescription>
            Browse additional screenshots from this project.
          </DialogDescription>
        </DialogHeader>

        <div className="flex min-h-0 flex-1 flex-col justify-center px-2 py-4 sm:px-8 sm:py-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: images.length > 1,
            }}
            className="mx-auto w-full"
          >
            <CarouselContent className="-ml-0">
              {images.map((image, index) => (
                <CarouselItem key={image.src} className="pl-0">
                  <figure className="flex flex-col gap-3">
                    <div className="flex h-[55dvh] items-center justify-center overflow-hidden rounded-lg bg-muted/40 sm:h-[64dvh] lg:h-[68dvh]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        draggable={false}
                        className="size-full select-none object-contain"
                        style={{
                          objectPosition: image.position,
                        }}
                      />
                    </div>

                    {image.caption && (
                      <figcaption className="px-4 text-center text-sm text-muted-foreground">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-2 size-10 bg-background/90 shadow-md backdrop-blur-sm sm:left-4" />

                <CarouselNext className="right-2 size-10 bg-background/90 shadow-md backdrop-blur-sm sm:right-4" />
              </>
            )}
          </Carousel>

          {images.length > 1 && (
            <div className="mt-4 flex shrink-0 flex-col items-center gap-3">
              <div
                className="flex flex-wrap items-center justify-center gap-2"
                aria-label="Select screenshot"
              >
                {images.map((image, index) => {
                  const selected = currentSlide === index + 1;

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        'h-2 rounded-full transition-all',
                        selected
                          ? 'w-6 bg-emerald-500'
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60',
                      )}
                      aria-label={`View screenshot ${index + 1}`}
                      aria-current={selected ? 'true' : undefined}
                    />
                  );
                })}
              </div>

              <p
                className="text-xs tabular-nums text-muted-foreground"
                aria-live="polite"
              >
                {currentSlide} / {slideCount}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;
