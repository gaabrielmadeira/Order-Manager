import React from 'react';
import { StyledCarousel } from './style';

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return <StyledCarousel>{children}</StyledCarousel>;
};
