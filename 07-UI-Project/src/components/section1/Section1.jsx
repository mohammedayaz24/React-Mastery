import PageContent1 from "./PageContent1"
import Navbar from "./Navbar"

const Section1 = ({ users, id }) => {
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <PageContent1 users={users} id={id} />

    </div>
  )
}

export default Section1