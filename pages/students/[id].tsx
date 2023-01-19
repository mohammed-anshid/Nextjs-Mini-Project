import Link from "next/link"
import { useRouter } from "next/router"
import Style from '../../styles/student.module.css'

export const getStaticPaths = async() =>{
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((user:any)=>{
        return {
            params : {id:user.id.toString()}
        }
    })

    return {
        paths,
        fallback:false 
    }
}

export const getStaticProps = async(context:any) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json()

    return {
        props : {user : data}
    }
}

const Details = ({user}:any) => {
    const router = useRouter()
    return ( 
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.address.city}</p>
            <p>{user.phone}</p>
            <div className={Style.buttons}>
                <Link legacyBehavior href={'/students'}><button className={Style.btn}>Back</button></Link> 
                <Link legacyBehavior href={'/'}><button className={Style.btn1}>Home</button></Link>
            </div>

        </div>
    );
}
 
export default Details;