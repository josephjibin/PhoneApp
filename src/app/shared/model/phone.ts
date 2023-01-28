export class phone{
    id!:number;
    price!:number;
    name!:string;
    rating:boolean = false;
    star:number = 0;
    tags?:string[];
    imageUrl!:string;
    cameras!:string[];
    batteries!:string;
}