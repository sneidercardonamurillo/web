import './style.css'

const ProductDetail =()=>{
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black bg-white rounded-lg ">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button >X</button>
            </div>
        </aside>
    )
}

export default ProductDetail;