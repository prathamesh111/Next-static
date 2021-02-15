
import Product from '../../components/Product';
import React, {useState} from 'react';



export async function getStaticProps(context){
    const res= await fetch ('https://fakestoreapi.com/products');
    const data = await res.json();

    if(!data){
        return{
            notFound :true,
        }
    }
    return{
        props : { data}
    }
}



export default function Products({ data }) {

const[inputText, setInputText]= useState("");
  return (
    <div>
        <h1 className="text-center">products</h1>
        <input type="text" className="search-input" placeholder="Search..." onChange={(e)=>{setInputText(e.target.value)}} ></input>
        <div className="flex flex-wrap justify-center">
        <div className="row">
        {
                data.filter((product)=>{
                    if(inputText == ""){
                        return product;
                    }else if(product.title.toLowerCase().includes(inputText.toLocaleLowerCase())){
                        return product;
                    }
                }).map(product => {
                    return(
                        <div className="col-md-3">
                            <Product product={product} />
                        </div>
                    )
                })
        }
        </div>
        </div>
    </div>
  )
}
