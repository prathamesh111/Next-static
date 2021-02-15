export async function getStaticProps(context){
    const id = context.params.id;
    const res= await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return{
        props : {data}
    }
}

export async function getStaticPaths(context){
    const res=  await fetch('https://fakestoreapi.com/products');
    const data= await res.json();

    const paths =data.map((item)=>{
        var id  = item.id;

        return{
            params : {id : id.toString()}
        }
    });

    return{paths, fallback:false}
}


export default function Products({data}){
    return(
    <div>
        <div>
            <div className="prod_title">{product.title}</div>
            <img src={product.image}></img>
            <div className="prod_cat">{product.category}</div>
            <div className="prod_desc">{product.description}</div>
        </div>
    </div>
    )
}