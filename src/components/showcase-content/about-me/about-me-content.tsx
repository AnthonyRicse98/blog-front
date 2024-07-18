import { getBase64 } from '@/components/projects/utils/helpers';
import Image from 'next/image';
import { PHOTO_DATA } from '@/data/utils/constants';

async function AboutMeContent() {
  return (
    <div
      id="dots"
      className="relative flex flex-col items-center gap-3 p-3 border rounded-md select-none bg-cd-dark-gray/20 border-cd-gray/10"
    >
      <div className="top-0 flex flex-col items-center gap-2 md:flex-row">
        <Image
          src={PHOTO_DATA.url}
          alt={PHOTO_DATA.avatar}
          width={80}
          height={80}
          className="w-20 h-20 border-4 rounded-full border-cd-dark-gray"
        />
        <div>
          <h1 className="font-bold text-center text-foreground md:text-start">
            Anthony Ricse
          </h1>
          <p className="text-sm text-center text-cd-gray md:text-start">
            Mi nombre es Anthony Ricse, soy ingeniero Software de la Universidad Nacional Mayor de San Marcos 
            con experiencia en web (React),
            dispositivos móviles (Android ), con conocimientos de pruebas funcionales: unitarias. testing (+1 años) 
            Apasionado por las arquitecturas frontend (Hexagonal y Clean Architecture),  y las integraciones frontend 
            Vivo en Perú– Lima actualmente estoy trabajando en una empresa constructura de software Devmente 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeContent;
