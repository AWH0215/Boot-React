import { useLoaderData, type LoaderFunctionArgs } from "react-router"
import { API_SERVER_HOST } from "../../api/todoApi"
import jwtAxios from "../../util/jwtUtil"
import ReadComponent from "../../components/products/readComponent"

export async function loadProduct({ params }: LoaderFunctionArgs) {

  const { pno } = params

  const res = await jwtAxios.get(`${API_SERVER_HOST}/api/products/${pno}`)

  return res.data
}

function ReadPage() {

  const product: ProductDTO = useLoaderData()

  console.log(product)

  return (
    <div className="w-full">
      <div className="text-3xl font-extrabold">Products Read Page</div>
      <ReadComponent product={product} />
    </div>
  )
}

export default ReadPage
