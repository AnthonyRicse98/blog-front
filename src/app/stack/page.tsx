import ShowcaseSection from '@/components/shared/organisms/showcase.section';
import { ShowcaseTypeEnum } from '@/components/shared/types/types';
import StackContent from '@/components/showcase-content/stack/stack-content';

export default function StackPage() {
  return (
    <div className="flex flex-row justify-center">
      <main className="w-[90%] md:w-[80%] lg:w-[50.15rem] flex flex-col gap-12 md:gap-16 my-12 md:my-16">
        <ShowcaseSection
          title="Experiencia Actual"
          contentType={ShowcaseTypeEnum.Stack}
          renderContent={<StackContent stackType="current" />}
        />
        <ShowcaseSection
          title="Aprendizaje Continuo"
          contentType={ShowcaseTypeEnum.Stack}
          renderContent={<StackContent stackType="learning" />}
        />
        <ShowcaseSection
          title="Futuro Aprendizaje"
          contentType={ShowcaseTypeEnum.Stack}
          renderContent={<StackContent stackType="planning" />}
        />
      </main>
    </div>
  );
}
