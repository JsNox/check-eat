import type { MenuItem } from "../types"


type MenuItemProps = {
    item: MenuItem,
    addItem: () => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button className=" border-2 border-red-600 hover:bg-red-200 w-full p-3 flex justify-between"
        onClick={() => addItem()}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </ button>
    )
}
