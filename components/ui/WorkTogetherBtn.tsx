'use client'
import React from 'react';
import { Button } from '@nextui-org/button';
import { ArrowRight } from 'lucide-react'; 
import Link from 'next/link';

function WorkTogetherBtn() { 



  return (
    
    <Button className="flex h-12 px-6 bg-[--foreground] text-[--primary] rounded-xl p-3 shadow-xl hover:bg-[--tertiary] hover:text-[--foreground] font-sans ">
   <Link href="https://wa.me/8495153010?text=Hola%20quiero%20reservar%20una%20sesion%20para%20de%20fotos%20para%20...%20%20Hello!%20I%20would%20like%20to%20book%20a%20photoshoot%20for%20...%20" target="_blank"  rel="noopener noreferrer"> <span className='shadow-3xl m-2'>👋🏽</span> Solicita una cotización {" "} </Link> 
    <ArrowRight className="animate-pulse ml-3 size-4" />
  </Button> 
  );
}

export default WorkTogetherBtn;
