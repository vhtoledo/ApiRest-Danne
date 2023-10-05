import { Product } from './';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'product_images' })
export class ProductImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;

    // muchos a uno
    @ManyToOne(
        () => Product,
        ( product ) => product.images,
        {  onDelete: 'CASCADE' }
    )
    product: Product

}