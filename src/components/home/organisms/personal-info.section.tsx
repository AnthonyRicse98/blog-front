import Link from 'next/link';
import SocialNetWorks from '../atoms/social-networks';

const PersonalInfoSection = () => {
  return (
    <section className="flex flex-col gap-4 leading-tight">
      <h3 className="text-xs font-semibold text-cd-light-blue">
        Hola , bienvenidos a mi portafolio
      </h3>
      <h1 className="text-[2.15rem] md:text-4xl font-extrabold tracking-tight">
        Hola soy,
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-cd-purple via-cd-light-blue to-cd-preview animate-text animate-gradient">
          Anthony Ricse
        </span>
        ,  <br className="hidden md:block" />
        Software developer.
      </h1>
      <p className="text-sm text-cd-gray">
        Soy un desarrollador Front-end y actualmente vivo en Lima, Peru. Tengo una pasión por 
        el aprendizaje y las herramientas tecnologicas 
      </p>
      <div className="flex gap-4 md:gap-3">
        <Link
          href="/about"
          className="flex items-center justify-center py-1 text-sm font-medium rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 w-28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
        >
          <span>Sobre mi </span>
        </Link>
        <div className="flex items-center gap-4 a-child-focus:rounded-sm md:gap-3 a-child-focus:outline-none a-child-focus:ring-2 a-child-focus:ring-foreground/20">
          <SocialNetWorks />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
