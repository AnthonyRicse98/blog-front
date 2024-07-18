import { Separator } from '@/components/ui/separator';
import { SocialNetworksData } from '@/data/social-networks';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail
} from '@tabler/icons-react';
import SocialMediaLink from '../atoms/social-media-link';

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm">Contactame por mis redes sociales:</p>
      <div className="flex flex-col items-center justify-center gap-4 text-sm md:flex-row">
        <SocialMediaLink
          href={SocialNetworksData.linkedin}
          icon={<IconBrandLinkedin size={26} />}
          text="/in/anthony-ricse"
        />
      </div>
      <Separator orientation="horizontal" className="bg-cd-separator/10" />
      <div className="flex flex-col justify-center gap-4 text-sm">
        <p>Tambien puedes enviarme un email: </p>
        <div className="flex justify-center">
          <SocialMediaLink
            href={`mailto:${SocialNetworksData.email}`}
            icon={<IconMail size={22} />}
            text={SocialNetworksData.email}
            isHidden
          />
        </div>
      </div>
      <Separator orientation="horizontal" />
    </div>
  );
};

export default ContactInformation;
