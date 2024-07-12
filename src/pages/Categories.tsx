import API from "@/utils/axios/API";
import CategoriesCards from "@/app/components/CategoriesCard";

export default function Categories({ categoriesData }) {
  return (
    <div>
      <h1 className="text-white text-center text-4xl font-bold my-8 ">
        Top <span className="text-purple-600">Categories</span> in 2024
      </h1>
      <div className="flex items-start justify-center my-8">
        <div className="mt-4 gap-24 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {categoriesData.map((data) => (
            <CategoriesCards
              key={data._id}
              title={data.title}
              totalInstructors={data.totalInstructors}
              subCategories={data.subCategories}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await API.get("/api/categories");
    const categoriesData = response.data.data;
    return {
      props: {
        categoriesData,
      },
    };
  } catch (err) {
    return {
      props: {
        categoriesData: [],
      },
    };
  }
}
