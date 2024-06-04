import ProductsListView from "../../components/smart/products-view/ProductsListView";

const AdminCatalog = () => {
  return (
    <div className="w-9/12 px-10 pt-10">
      <a
        className="w-3/12 ml-auto flex gap-2 justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        href="/admin/create-product"
      >
        <span className="text-2xl -top-0.5 relative">+</span> Добавить
      </a>
      <ProductsListView />
    </div>
  );
};

export default AdminCatalog;
