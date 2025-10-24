'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { X, ChevronLeft, ChevronRight, Camera, Star, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

// Celebrity/Event images data
const celebImages = [
  {
    id: 1,
    src: '/clients/client1.jpg', // Placeholder - replace with actual celebrity images
    alt: 'Celebrity Event 1',
    title: 'Arijit Singh Live Concert',
    event: 'Eco Park Cultural Festival',
    year: '2020'
  },
  {
    id: 2,
    src: '/clients/client2.jpg',
    alt: 'Celebrity Event 2', 
    title: 'Shreya Ghoshal Performance',
    event: 'Corporate Gala Night',
    year: '2019'
  },
  {
    id: 3,
    src: '/clients/client3.jpg',
    alt: 'Celebrity Event 3',
    title: 'Sonu Nigam Live',
    event: 'Cultural Heritage Festival',
    year: '2018'
  },
  {
    id: 4,
    src: '/clients/client4.jpg',
    alt: 'Celebrity Event 4',
    title: 'International Artists',
    event: 'Global Music Summit',
    year: '2021'
  },
  {
    id: 5,
    src: '/clients/client5.jpg',
    alt: 'Celebrity Event 5',
    title: 'Classical Music Maestros',
    event: 'Sangeet Sandhya',
    year: '2022'
  },
  {
    id: 6,
    src: '/clients/client6.jpg',
    alt: 'Celebrity Event 6',
    title: 'Film Industry Gala',
    event: 'Awards Ceremony',
    year: '2023'
  }
]

export default function CelebscapeSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = celebImages.findIndex(img => img.id === selectedImage)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? celebImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === celebImages.length - 1 ? 0 : currentIndex + 1
    }
    
    setSelectedImage(celebImages[newIndex].id)
  }

  const handleDownloadGallery = () => {
    // Create a simple download functionality for demo
    const galleryData = {
      title: 'CROWDpullers Celebrity Events Gallery',
      events: celebImages,
      downloadDate: new Date().toISOString(),
      totalEvents: celebImages.length
    }
    
    const dataStr = JSON.stringify(galleryData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = 'crowdpullers-gallery.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const selectedImageData = selectedImage ? celebImages.find(img => img.id === selectedImage) : null

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              CELEBSCAPE
            </h2>
            <Star className="h-6 w-6 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive portfolio of successfully executed events spanning over a decade - 
            from government inaugurations and corporate galas to cultural celebrations and international exhibitions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {celebImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-muted cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
                index === 0 && "md:col-span-2 lg:col-span-1", // Featured image styling
              )}
              onClick={() => openModal(image.id)}
            >
              <AspectRatio.Root ratio={4/3}>
                <div className="relative h-full w-full bg-linear-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  {/* Placeholder for images - replace with actual images */}
                  <div className="text-center text-white">
                    <Camera className="h-12 w-12 mx-auto mb-3 opacity-60" />
                    <div className="font-semibold text-lg">{image.title}</div>
                    <div className="text-sm opacity-80">{image.event}</div>
                    <div className="text-xs opacity-60 mt-1">{image.year}</div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Camera className="h-4 w-4" />
                      View Gallery
                    </Button>
                  </div>
                </div>
              </AspectRatio.Root>
              
              {/* Card Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
                <h3 className="font-semibold text-white text-sm mb-1">{image.title}</h3>
                <p className="text-white/80 text-xs">{image.event} • {image.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" className="gap-2">
              View Complete Portfolio
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Modal Dialog */}
        <Dialog.Root open={selectedImage !== null} onOpenChange={closeModal}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] max-w-4xl bg-background rounded-xl border shadow-2xl z-50 overflow-hidden">
              {selectedImageData && (
                <div className="relative h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b">
                    <div>
                      <h3 className="font-semibold text-lg">{selectedImageData.title}</h3>
                      <p className="text-muted-foreground text-sm">{selectedImageData.event} • {selectedImageData.year}</p>
                    </div>
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <X className="h-4 w-4" />
                      </Button>
                    </Dialog.Close>
                  </div>

                  {/* Image Content */}
                  <div className="flex-1 relative bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Camera className="h-20 w-20 mx-auto mb-4 opacity-40" />
                      <div className="text-xl font-semibold mb-2">{selectedImageData.title}</div>
                      <div className="text-sm">{selectedImageData.event}</div>
                      <div className="text-xs opacity-60 mt-1">{selectedImageData.year}</div>
                      <p className="mt-4 text-sm max-w-md mx-auto">
                        High-quality event photography and memorable moments from our professionally managed celebrations.
                      </p>
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
                      onClick={() => navigateImage('prev')}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
                      onClick={() => navigateImage('next')}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Footer */}
                  <div className="p-6 border-t bg-muted/30">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {celebImages.findIndex(img => img.id === selectedImage) + 1} of {celebImages.length}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleDownloadGallery}
                        className="gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Gallery
                      </Button>
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
