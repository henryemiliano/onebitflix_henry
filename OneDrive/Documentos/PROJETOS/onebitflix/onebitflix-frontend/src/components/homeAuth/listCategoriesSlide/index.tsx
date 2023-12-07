import useSWR from "swr";
import categoriesService, {
  CategoryType,
} from "../../../services/categoriesService";
import SlideComponent from "../../common/slideComponent";
// import SwrSpinner from "../../../common/swrSpinner";
import styles from "../../../../styles/slideCategory.module.scss";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
  const { data, error } = useSWR(`/categories/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
  );

  if (error) return error;
  // if (!data) return <SwrSpinner />;
  if (!data) {
    return (
      <>
        <p>ERRO!</p>
      </>
    );
  }

  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses} />
    </>
  );
};

export default ListCategoriesSlide;
