import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  articleDetails = [
    {
      id:1,
      articleName:"Loveheart Knitted Dog Jumper",
      productDetails:"Treat your sweetie to the Loveheart dog Knitted jumper! ️Not sure what size to get? Measure your dogs back length (cm) from base of neck to base of tail. Choose one size larger fo particularly broad breeds and one size smaller for narrow breeds.",
      articlePrice:700,
      oldprice: 900,

      articleImg:"https://cdn.notonthehighstreet.com/fs/c7/d9/9b42-ee5a-499c-a15e-ccb98b645652/original_loveheart-dog-jumper.jpg"
    },
    {
      id:2,
      articleName:"Tartan Knitted Dog Jumper",
       productDetails:"The tartan dog knitted jumper for your wee pooch! Versatile and classy, the perfect combination. Not sure what size to get? Measure your dogs back length (cm) from base of neck to base of tail. Choose one size larger fo particularly broad breeds and one size smaller for narrow breeds.",
      articlePrice:1500,
      oldprice: 2100,

      articleImg:"https://cdn.notonthehighstreet.com/fs/bb/a2/72b5-e955-40f1-a435-fa00edb46ee0/original_tartan-dog-jumper.jpg"
    },
    {
      id:3,
      articleName:"Plain Knitted Red Dog Jumper",
      productDetails:"A daily go-to plain cable knitted Red dog jumper. A great gift for a dog lover!Not sure what size to get? Measure your dogs back length (cm) from base of neck to base of tail. Choose one size larger fo particularly broad breeds and one size smaller for narrow breeds.",
      articlePrice:2000,
      articleImg:"https://cdn.notonthehighstreet.com/fs/29/59/6dd2-b6e3-466f-ad6c-a2dccd182e74/normal_plain-knitted-dog-jumper.jpg"
    },
    {
      id:4,
      articleName:"Plain Knitted Blue Dog Jumper",
      productDetails:"A daily go-to plain cable knitted Blue dog jumper. A great gift for a dog lover!VariationsNot sure what size to get? Measure your dogs back length (cm) from base of neck to base of tail. Choose one size larger fo particularly broad breeds and one size.",
      articlePrice:1100,
      oldprice: 1700,
      articleImg:"https://cdn.notonthehighstreet.com/fs/ec/79/00b4-ed4e-4b3a-b263-d1827114f444/original_plain-knitted-blue-dog-jumper.jpg"
    },
    {
      id:5,
      articleName:"Cat Whisperer Sound Button",
      productDetails:"It is a tough one isn’t it… what to get someone who loves cats? Well as it happens, you’ve come to the right place!The Cat Whisperer “meow” sound button is the purr-fect gift idea for cat lovers.Strangely this really works !",
      articlePrice:950,
      oldprice: 1300,

      articleImg:"https://cdn.notonthehighstreet.com/fs/d5/b6/64aa-09cd-43c3-b7f3-10913dabed1d/original_cat-whisperer-sound-button.jpg"
    },
    {
      id:6,
      articleName:"Your Cat Portrait",
     productDetails:"Your cat rules the house, so why not make a show of it with a sweet watercolour style pet portrait on the wall?Variations Using your chosen photograph of your cat, we create a wall print of them in a beautiful watercolour style, printed onto 300gsm cold pressed watercolour paper.",
      articlePrice:1200,
      oldprice: 1800,

      articleImg:"https://cdn.notonthehighstreet.com/fs/32/9e/ce60-0024-4a5e-876b-66cfca41f61d/original_personalised-watercolour-cat-portrait-print.jpg"
    },
    {
      id:7,
      articleName:"Personalised Cat I.D",
     productDetails:"Your cat rules the house, so why not make a show of it with a sweet watercolour style pet portrait on the wall?Variations Using your chosen photograph of your cat, we create a wall print of them in a beautiful watercolour style, printed onto 300gsm cold pressed watercolour paper.",
      articlePrice:1100,
      oldprice: 1700,

      articleImg:"https://cdn.notonthehighstreet.com/fs/d2/c7/d346-10e6-4ad6-9c2d-2284c79b2b12/original_personalised-cat-i-d-tag-with-double-sided-engraving.jpg"
    },
    {
      id:8,
      articleName:"Personalised Dog Tag",
     productDetails:"Our personalised leather dog name tag and keyring set is the perfect matching gift for a dog and their owner this Christmas. The perfect gift for dogs and dog lovers, allowing them to proudly carry a photograph of each other everywhere they go - either on their keys or on their collar!",
      articlePrice:900,
      oldprice: 1300,

      articleImg:"https://cdn.notonthehighstreet.com/fs/ba/eb/bcb6-e23d-4df6-93fe-90b78e45715c/original_personalised-leather-dog-name-tag-with-photo.jpg"
    },
  ]

  getArticleDetailsById(articleId: number) {
    return this.articleDetails.find(article => article.id === articleId);
  }
}
