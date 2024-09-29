import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react'; 

function WorkTogetherBtn() { 



  return (
    
    <Button className="flex bg-yellow-200 text-black rounded-xl p-3 shadow-xl hover:bg-yellow-300">
    Reserva una sesión ahora{" "}
    <ArrowRight className="animate-pulse ml-3" />
  </Button> 
  );
}

export default WorkTogetherBtn;
