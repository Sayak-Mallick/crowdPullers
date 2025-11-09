'use client''use client'



import { useState } from 'react'import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'import * as Dialog from '@radix-ui/react-dialog'

import * as AspectRatio from '@radix-ui/react-aspect-ratio'import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import { X, ChevronLeft, ChevronRight, Camera, Star, Download } from 'lucide-react'import { X, ChevronLeft, ChevronRight, Camera, Star, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'import { cn } from '@/lib/utils'

import Link from 'next/link'import Link from 'next/link'



// Celebrity/Event images data — matches files in public/celeb// Celebrity/Event images data

const celebImages: { id: number; src: string; alt: string; title: string; event: string; year: string }[] = [const celebImages = [

  { id: 1, src: '/celeb/arijit.jpg', alt: 'Arijit Singh Live Concert', title: 'Arijit Singh Live Concert', event: 'Eco Park Cultural Festival', year: '2020' },  {

  { id: 2, src: '/celeb/shreya.jpg', alt: 'Shreya Ghoshal Performance', title: 'Shreya Ghoshal Performance', event: 'Corporate Gala Night', year: '2019' },    id: 1,

  { id: 3, src: '/celeb/shreya-2.jpg', alt: 'Shreya Ghoshal Performance 2', title: 'Shreya Ghoshal — Encore', event: 'Cultural Evening', year: '2018' },    src: '/celeb/arijit.jpg',

  { id: 4, src: '/celeb/sonu.webp', alt: 'Sonu Nigam Live', title: 'Sonu Nigam Live', event: 'Cultural Heritage Festival', year: '2018' },    // Celebrity/Event images data — updated to match files in public/celeb

  { id: 5, src: '/celeb/download.jpg', alt: 'Event Photography Sample', title: 'Event Photography Highlights', event: 'Portfolio Highlights', year: '2021' },    const celebImages = [

  { id: 6, src: '/celeb/images.jpg', alt: 'Event Collage', title: 'Event Collage Showcase', event: 'Multiple Events', year: '2022' }      {

]        id: 1,

        src: '/celeb/arijit.jpg',

export default function CelebscapeSection() {        alt: 'Arijit Singh Live Concert',

  const [selectedImage, setSelectedImage] = useState<number | null>(null)        title: 'Arijit Singh Live Concert',

        event: 'Eco Park Cultural Festival',

  const openModal = (imageId: number) => setSelectedImage(imageId)        year: '2020'

  const closeModal = () => setSelectedImage(null)      },

      {

  const navigateImage = (direction: 'prev' | 'next') => {        id: 2,

    if (selectedImage === null) return        src: '/celeb/shreya.jpg',

    const currentIndex = celebImages.findIndex(img => img.id === selectedImage)        alt: 'Shreya Ghoshal Performance',

    const newIndex = direction === 'prev' ? (currentIndex === 0 ? celebImages.length - 1 : currentIndex - 1) : (currentIndex === celebImages.length - 1 ? 0 : currentIndex + 1)        title: 'Shreya Ghoshal Performance',

    setSelectedImage(celebImages[newIndex].id)

  }  const navigateImage = (direction: 'prev' | 'next') => {

    if (selectedImage === null) return

  const handleDownloadGallery = () => {

    const galleryData = { title: 'CROWDpullers Celebrity Events Gallery', events: celebImages, downloadDate: new Date().toISOString(), totalEvents: celebImages.length }    const currentIndex = celebImages.findIndex(img => img.id === selectedImage)

    const dataStr = JSON.stringify(galleryData, null, 2)    let newIndex = currentIndex

    const dataBlob = new Blob([dataStr], { type: 'application/json' })"use client"

    const url = URL.createObjectURL(dataBlob)

    const link = document.createElement('a')import { useState } from 'react'

    link.href = urlimport * as Dialog from '@radix-ui/react-dialog'

    link.download = 'crowdpullers-gallery.json'import * as AspectRatio from '@radix-ui/react-aspect-ratio'

    document.body.appendChild(link)import { X, ChevronLeft, ChevronRight, Camera, Star, Download } from 'lucide-react'

    link.click()import { Button } from '@/components/ui/button'

    document.body.removeChild(link)import { cn } from '@/lib/utils'

    URL.revokeObjectURL(url)import Link from 'next/link'

  }

// Celebrity/Event images data — matches files in public/celeb

  const selectedImageData = selectedImage ? celebImages.find(img => img.id === selectedImage) : nullconst celebImages: { id: number; src: string; alt: string; title: string; event: string; year: string }[] = [

  { id: 1, src: '/celeb/arijit.jpg', alt: 'Arijit Singh Live Concert', title: 'Arijit Singh Live Concert', event: 'Eco Park Cultural Festival', year: '2020' },

  return (  { id: 2, src: '/celeb/shreya.jpg', alt: 'Shreya Ghoshal Performance', title: 'Shreya Ghoshal Performance', event: 'Corporate Gala Night', year: '2019' },

    <section className="py-20 bg-background">  { id: 3, src: '/celeb/shreya-2.jpg', alt: 'Shreya Ghoshal Performance 2', title: 'Shreya Ghoshal — Encore', event: 'Cultural Evening', year: '2018' },

      <div className="mx-auto max-w-7xl px-6">  { id: 4, src: '/celeb/sonu.webp', alt: 'Sonu Nigam Live', title: 'Sonu Nigam Live', event: 'Cultural Heritage Festival', year: '2018' },

        <div className="text-center mb-16">  { id: 5, src: '/celeb/download.jpg', alt: 'Event Photography Sample', title: 'Event Photography Highlights', event: 'Portfolio Highlights', year: '2021' },

          <div className="flex items-center justify-center gap-2 mb-4">  { id: 6, src: '/celeb/images.jpg', alt: 'Event Collage', title: 'Event Collage Showcase', event: 'Multiple Events', year: '2022' }

            <Star className="h-6 w-6 text-primary" />]

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">CELEBSCAPE</h2>          ))}

            <Star className="h-6 w-6 text-primary" />        "use client"

          </div>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">        import { useState } from 'react'

            Discover our comprehensive portfolio of successfully executed events spanning over a decade - from government inaugurations and corporate galas to cultural celebrations and international exhibitions.        import * as Dialog from '@radix-ui/react-dialog'

          </p>        import * as AspectRatio from '@radix-ui/react-aspect-ratio'

        </div>        import { X, ChevronLeft, ChevronRight, Camera, Star, Download } from 'lucide-react'

        import { Button } from '@/components/ui/button'

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">        import { cn } from '@/lib/utils'

          {celebImages.map((image, index) => (        import Link from 'next/link'

            <div key={image.id} className={cn('group relative overflow-hidden rounded-xl bg-muted cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]', index === 0 && 'md:col-span-2 lg:col-span-1')} onClick={() => openModal(image.id)}>

              <AspectRatio.Root ratio={4 / 3}>        // Celebrity/Event images data — matches files in public/celeb

                <div className="relative h-full w-full flex items-center justify-center">        const celebImages: { id: number; src: string; alt: string; title: string; event: string; year: string }[] = [

                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/crowdPullers.png' }} />          { id: 1, src: '/celeb/arijit.jpg', alt: 'Arijit Singh Live Concert', title: 'Arijit Singh Live Concert', event: 'Eco Park Cultural Festival', year: '2020' },

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />          { id: 2, src: '/celeb/shreya.jpg', alt: 'Shreya Ghoshal Performance', title: 'Shreya Ghoshal Performance', event: 'Corporate Gala Night', year: '2019' },

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">          { id: 3, src: '/celeb/shreya-2.jpg', alt: 'Shreya Ghoshal Performance 2', title: 'Shreya Ghoshal — Encore', event: 'Cultural Evening', year: '2018' },

                    <Button variant="secondary" size="sm" className="gap-2"><Camera className="h-4 w-4" />View Gallery</Button>          { id: 4, src: '/celeb/sonu.webp', alt: 'Sonu Nigam Live', title: 'Sonu Nigam Live', event: 'Cultural Heritage Festival', year: '2018' },

                  </div>          { id: 5, src: '/celeb/download.jpg', alt: 'Event Photography Sample', title: 'Event Photography Highlights', event: 'Portfolio Highlights', year: '2021' },

                </div>          { id: 6, src: '/celeb/images.jpg', alt: 'Event Collage', title: 'Event Collage Showcase', event: 'Multiple Events', year: '2022' }

              </AspectRatio.Root>        ]

                  {/* Header */}

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                <h3 className="font-semibold text-white text-sm mb-1">{image.title}</h3>
                <p className="text-white/80 text-xs">{image.event} • {image.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio"><Button size="lg" className="gap-2">View Complete Portfolio<ChevronRight className="h-4 w-4" /></Button></Link>
        </div>

        <Dialog.Root open={selectedImage !== null} onOpenChange={closeModal}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] max-w-4xl bg-background rounded-xl border shadow-2xl z-50 overflow-hidden">
              {selectedImageData && (
                <div className="relative h-full flex flex-col">
                  <div className="flex items-center justify-between p-6 border-b">
                    <div>
                      <h3 className="font-semibold text-lg">{selectedImageData.title}</h3>
                      <p className="text-muted-foreground text-sm">{selectedImageData.event} • {selectedImageData.year}</p>
                    </div>
                    <Dialog.Close asChild><Button variant="ghost" size="sm" className="rounded-full"><X className="h-4 w-4" /></Button></Dialog.Close>
                  </div>

                  <div className="flex-1 relative bg-muted flex items-center justify-center">
                    <img src={selectedImageData.src} alt={selectedImageData.alt} className="max-h-full max-w-full object-contain" onError={(e) => { (e.target as HTMLImageElement).src = '/crowdPullers.png' }} />

                    <Button variant="secondary" size="sm" className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full" onClick={() => navigateImage('prev')}><ChevronLeft className="h-4 w-4" /></Button>
                    <Button variant="secondary" size="sm" className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full" onClick={() => navigateImage('next')}><ChevronRight className="h-4 w-4" /></Button>
                  </div>

                  <div className="p-6 border-t bg-muted/30">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">{celebImages.findIndex(img => img.id === selectedImage) + 1} of {celebImages.length}</div>
                      <Button variant="outline" size="sm" onClick={handleDownloadGallery} className="gap-2"><Download className="h-4 w-4" />Download Gallery</Button>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
}
