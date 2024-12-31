import ListComponents from "../../components/product/ListComponents";

const ListPage = () => {
return ( 
   <div className="w-full p-4 mb-2 bg-white">
        <div className="text-3xl m-4 font-extrabold">
        Products List Page
        </div>

        <ListComponents/>
   </div>
    );  
}
export default ListPage;