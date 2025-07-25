import { CategoriesSection} from "../section/categories-section";


interface HomeViewProps {
  categoryId?: string;
}

export const HomeView = ({ categoryId }: HomeViewProps) => {
  return (
    <div className="max-w-[2400px] mx-auto px-4 pt-2.5 flex flex-col gap-y-6">
      {/* <HomeNavBar /> */}
      <CategoriesSection categoryId={categoryId} />
    </div>
  );
};
