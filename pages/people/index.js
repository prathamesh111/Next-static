import Link from 'next/link';

export async function getStaticProps(context){
    const res= await fetch ('https://swapi.dev/api/people');
    const data = await res.json();
    // console.log(data);

    if(!data){
        return{
            notFound :true,
        }
    }
    return{
        props : { data }
    }
}


export default function People({ data }) {
  return (
    <div >
        <h1 className="text-center">People</h1>
        <div className="flex flex-wrap justify-center">
        {
            data.results.map(people => {
                const urlArr = people.url.split('/');
                const id = urlArr[urlArr.length - 2];
                return(
                    <div className="flex flex-wrap justify-center rounded-md p-5 bg-gray-600 mx-4 my-4 ">
                        <Link href={`/people/${id}`} >{people.name}</Link>
                    </div>  
                )
                
            })
        }
        </div>
    </div>
  )
}
