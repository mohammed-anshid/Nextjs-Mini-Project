import Style from '../../styles/student.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props:{users:data}
    }
}


const Categories = ({users}:any) => {
    console.log(users)
    return ( 
        <>
        <h1>All Categories</h1>
        {
            users.map(function(user:any,index:number){
                return (
                 <Link legacyBehavior  key={user.id} href={'/students/'+user.id}><h4 className={Style.single}>{user.name}</h4></Link>
                )
            })
        }
        </>
    );
}
 
export default Categories;