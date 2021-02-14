export async function getStaticProps(context){
    const id = context.params.id;
    const res= await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await res.json();

    return{
        props : {data}
    }
}

export async function getStaticPaths(context){
    const res=  await fetch('https://swapi.dev/api/people');
    const data= await res.json();

    const paths =data.results.map((post)=>{
        const  urlArr = post.url.split('/');
        const id  = urlArr[urlArr.length - 2];

        return{
            params : {id : id}
        }
    });

    return{paths, fallback:false}
}


export default function People({data}){
    return(
   <div>
        <h1 className="text-center">{`Person : ${data.name}`}</h1>
        <div>{data.name}</div>
        <div>{data.height}</div>
        <div>{data.gender}</div>  
        <div>{data.hair_color}</div>
   </div>
    )
}