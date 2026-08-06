import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex gap-8 justify-center py-4'>
            <Link to='/product/men'>Mens</Link>
            <Link to='/product/women'>Womens</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>

        <Outlet />
    </div>
  )
}

export default Product