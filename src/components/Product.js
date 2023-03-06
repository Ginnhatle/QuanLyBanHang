import React from 'react';
import {BsEyeFill, BsPlus} from "react-icons/bs";
import {Link} from "react-router-dom";

const Product = ({product}) => {
    const {id, image, category, title, price} = product;
    return <div>
        <div className={'border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'}>
            <div className={'w-full h-full flex justify-center items-center'}>
                <div className={'w-[200px] mx-auto flex justify-center items-center'}>
                    <img className={'max-h-[160px] group-hover:scale-110 transition duration-300'} src={image} alt=""/>
                </div>
            </div>

            <div className={'absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 ' +
                'opacity-0 group-hover:opacity-100 transition-all duration-300'}>
                <button>
                    <div className={'flex justify-center item-center text-white w-12 h-12 bg-red-500'}>
                        <BsPlus className={'text-3xl'}></BsPlus>
                    </div>
                </button>
                <button>
                    <Link to={`/product/${id}`} className={'w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'}>
                        <BsEyeFill></BsEyeFill>
                    </Link>
                </button>
            </div>
        </div>
        <div>{category}</div>
        <Link to={`/product/${id}`}>
            <h2 className={'font-semibold mb-1'}>{title}</h2>
        </Link>
        <div>{price}</div>
    </div>;
};

export default Product;