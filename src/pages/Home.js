import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from '../mockData/MockData';
import HomeBanner from '../components/Home/HomeBanner';

export default function Home() {

    return (
            <HomeBanner />
    )
}