import InventoryProvider, { useInventoryContext } from "../../context/InventoryContext"
import BookGrid from "./BookGrid"
import ManageArea from "./ManageArea"
import "./index.css"
const Inventory = () => {
  return (
    <>
    <InventoryProvider>
    <>
      <ManageArea></ManageArea>
      <BookGrid></BookGrid>
    </>
    </InventoryProvider>
    </>
  )
}

export default Inventory