"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mountain, Droplets, Camera, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../app/components/ui/card';
import { Badge } from '../../app/components/ui/badge';
import { Button } from '../../app/components/ui/button';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2));
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', y.toFixed(2));
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) {
      return '';
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: any = {
      '--base': base,
      '--spread': spread,
      '--radius': '14',
      '--border': '3',
      '--backdrop': 'hsl(0 0% 60% / 0.12)',
      '--backup-border': 'var(--backdrop)',
      '--size': '200',
      '--outer': '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      backgroundAttachment: 'fixed',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative' as const,
      touchAction: 'none' as const,
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
      );
      filter: brightness(2);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
      );
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          rounded-2xl 
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          p-4 
          gap-4 
          backdrop-blur-[5px]
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};

interface LocationData {
  id: string;
  name: string;
  type: 'volcano' | 'waterfall';
  coordinates: [number, number];
  description: string;
  highlights: string[];
  bestTime: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  rating: number;
  image: string;
  activities: string[];
}

interface MapMarkerProps {
  location: LocationData;
  isSelected: boolean;
  onClick: () => void;
}

const MapMarker: React.FC<MapMarkerProps> = ({ location, isSelected, onClick }) => {
  const Icon = location.type === 'volcano' ? Mountain : Droplets;
  
  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
        isSelected ? 'scale-125 z-20' : 'scale-100 z-10 hover:scale-110'
      }`}
      style={{
        left: `${location.coordinates[0]}%`,
        top: `${location.coordinates[1]}%`,
      }}
      onClick={onClick}
    >
      <div className={`relative ${isSelected ? 'animate-pulse' : ''}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white ${
          location.type === 'volcano' 
            ? 'bg-red-500 text-white' 
            : 'bg-blue-500 text-white'
        }`}>
          <Icon size={16} />
        </div>
        {isSelected && (
          <div className="absolute -inset-2 rounded-full border-2 border-primary animate-ping opacity-75" />
        )}
      </div>
    </div>
  );
};

interface LocationCardProps {
  location: LocationData;
  onClose: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, onClose }) => {
  return (
    <Card className="w-full max-w-md bg-background/95 backdrop-blur-sm border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {location.type === 'volcano' ? (
              <Mountain className="w-5 h-5 text-red-500" />
            ) : (
              <Droplets className="w-5 h-5 text-blue-500" />
            )}
            <CardTitle className="text-lg">{location.name}</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
            ×
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{location.rating}</span>
          </div>
          <Badge variant={location.difficulty === 'Easy' ? 'default' : location.difficulty === 'Moderate' ? 'secondary' : 'destructive'}>
            {location.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video rounded-lg bg-muted overflow-hidden">
          <img 
            src={location.image} 
            alt={location.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <CardDescription className="text-sm">
          {location.description}
        </CardDescription>

        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <Camera className="w-4 h-4" />
            Highlights
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {location.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Best Time to Visit
          </h4>
          <p className="text-sm text-muted-foreground">{location.bestTime}</p>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-2">Activities</h4>
          <div className="flex flex-wrap gap-1">
            {location.activities.map((activity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {activity}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const IndonesiaMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);

  const locations: LocationData[] = [
    {
      id: 'bromo',
      name: 'Mount Bromo',
      type: 'volcano',
      coordinates: [65, 45],
      description: 'An active volcano and part of the Tengger massif in East Java. Famous for its dramatic sunrise views and otherworldly landscape.',
      highlights: [
        'Spectacular sunrise views from Penanjakan viewpoint',
        'Sea of sand (Lautan Pasir) surrounding the crater',
        'Active volcanic crater with sulfur emissions',
        'Traditional Tengger Hindu culture'
      ],
      bestTime: 'April to October (dry season)',
      difficulty: 'Moderate',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      activities: ['Sunrise viewing', 'Crater hiking', 'Jeep tours', 'Photography']
    },
    {
      id: 'ijen',
      name: 'Mount Ijen',
      type: 'volcano',
      coordinates: [75, 55],
      description: 'Famous for its blue fire phenomenon and the largest acidic crater lake in the world, located in East Java.',
      highlights: [
        'Blue fire phenomenon (best seen at night)',
        'Turquoise acidic crater lake',
        'Sulfur mining operations',
        'Challenging pre-dawn hike'
      ],
      bestTime: 'April to October (dry season)',
      difficulty: 'Hard',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=300&fit=crop',
      activities: ['Blue fire viewing', 'Crater lake viewing', 'Night hiking', 'Sulfur mining observation']
    },
    {
      id: 'tumpak-sewu',
      name: 'Tumpak Sewu Waterfall',
      type: 'waterfall',
      coordinates: [55, 65],
      description: 'A spectacular tiered waterfall known as the "Thousand Waterfalls" located on the border of Lumajang and Malang regencies.',
      highlights: [
        'Curtain-like waterfall formation',
        'Multiple tiers creating a dramatic cascade',
        'Lush tropical rainforest setting',
        'Natural swimming pools at the base'
      ],
      bestTime: 'May to September (less rainfall)',
      difficulty: 'Moderate',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      activities: ['Waterfall viewing', 'Swimming', 'Photography', 'Jungle trekking']
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Explore East Java's Natural Wonders</h1>
        <p className="text-muted-foreground">Discover the magnificent volcanoes and waterfalls of Indonesia</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlowCard 
            customSize 
            width="100%" 
            height="500px" 
            glowColor="blue"
            className="w-full h-[500px]"
          >
            <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg overflow-hidden">
              {/* Simplified map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-green-300 to-blue-200 dark:from-emerald-800 dark:via-green-700 dark:to-blue-800 opacity-60" />
              
              {/* Mountain ranges illustration */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,80 20,40 40,60 60,30 80,50 100,20 100,100 0,100" fill="currentColor" className="text-gray-600" />
                <polygon points="10,90 30,60 50,70 70,45 90,65 100,40 100,100 0,100" fill="currentColor" className="text-gray-500" />
              </svg>

              {/* Location markers */}
              {locations.map((location) => (
                <MapMarker
                  key={location.id}
                  location={location}
                  isSelected={selectedLocation?.id === location.id}
                  onClick={() => setSelectedLocation(location)}
                />
              ))}

              {/* Map legend */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
                <h3 className="font-medium text-sm mb-2">Legend</h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <Mountain size={10} className="text-white" />
                    </div>
                    <span>Volcano</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <Droplets size={10} className="text-white" />
                    </div>
                    <span>Waterfall</span>
                  </div>
                </div>
              </div>

              {/* Compass */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 border border-border">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">N</div>
                  <div className="absolute inset-0 border border-foreground rounded-full" />
                  <div className="absolute top-1 left-1/2 w-0.5 h-2 bg-red-500 transform -translate-x-1/2" />
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        <div className="space-y-4">
          {selectedLocation ? (
            <LocationCard 
              location={selectedLocation} 
              onClose={() => setSelectedLocation(null)}
            />
          ) : (
            <Card className="bg-background/95 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Select a Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Click on any marker on the map to learn more about these incredible destinations in East Java, Indonesia.
                </p>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <Button
                      key={location.id}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location.type === 'volcano' ? (
                        <Mountain className="w-4 h-4 mr-2 text-red-500" />
                      ) : (
                        <Droplets className="w-4 h-4 mr-2 text-blue-500" />
                      )}
                      {location.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-background/95 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-sm">Travel Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-2">
              <p>• Best visited during dry season (April-October)</p>
              <p>• Bring warm clothing for early morning trips</p>
              <p>• Hire local guides for safety and cultural insights</p>
              <p>• Respect local customs and environmental guidelines</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <IndonesiaMap />
    </div>
  );
}