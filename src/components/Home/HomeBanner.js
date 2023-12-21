import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from "../../mockData/MockData"
import { Button } from '../ui/button';


export default function HomeBanner() {

    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="flex flex-row border-1 surface-border border-round border-green-100 text-center py-5 px-3 m-5 text-white shantell w-full bg-cover bg-gradient-to-br irregular-border-radius" style={{ backgroundImage: `url(${product.bgimage})` }}>
                <div className="mb-3 mr-12 ml-12">
                <img src={product.image}  alt={product.name} className="w-48 shadow-2" />
                </div>
                <div className='flex'>
                <div>
                    <h2 className="mb-1 text-8xl">{product.name}</h2>
                    <h3 className="mt-0 mb-3 text-4xl">{product.description}</h3>
                    <h4 className="mt-0 mb-3 text-4xl">{product.date}</h4>
                </div>
                <div className='p-10 w-2/4 bg-green-900 rounded-full'>
                    <p className='p-10'>{product.text}</p>
                    <Button className="bg-transparent" variant="outline">Read More</Button>
                </div>
                </div>
            </div>
        );
    };

    return (
        <div className='card-body bg-green-900 w-full'>
        <div className="card">
            <Carousel value={products} numVisible={1} numScroll={1} showNavigators={true} showIndicators={false} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
        </div>
    )
}