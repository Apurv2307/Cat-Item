import './Category.css'
import Vegitable from './assets/vegitable.jpg';
import Dairy from './assets/dairy.jpg';

export default function Model1() {
  let data=[
    {
      name:"Fruits and Vegitables",
      imgUrl:Vegitable,
      position:"Co Founder",
      description:"Product enthusiast, photographer and trekker. Ex Atlassian and Sabre.",
      linkedInUrl:""
    },
    {
      name:"Dairy Products",
      imgUrl:Dairy,
      position:"Co Founder",
      description:"Product enthusiast, photographer and trekker. Ex Atlassian and Sabre.",
      linkedInUrl:""
    },
    {
        name:"Fruits and Vegitables",
        imgUrl:Vegitable,
        position:"Co Founder",
        description:"Product enthusiast, photographer and trekker. Ex Atlassian and Sabre.",
        linkedInUrl:""
    },
    {
        name:"Dairy Products",
        imgUrl:Dairy,
        position:"Co Founder",
        description:"Product enthusiast, photographer and trekker. Ex Atlassian and Sabre.",
        linkedInUrl:""
    },
    // {
    //     name:"Fruits and Vegitables",
    //     imgUrl:Vegitable,
    //     position:"Co Founder",
    //     description:"Product enthusiast, photographer and trekker. Ex Atlassian and Sabre.",
    //     linkedInUrl:""
    // },
    
  ]
  return (
    <>
    <div id='model1'>
        <h1 className='model-title'>Categories</h1>
        <div className="model-divider"></div>
        <div className="members">
          {
            data.map(({name,imgUrl,position,description,linkedInUrl})=><a href={linkedInUrl} className="model1_member">
            <img src={imgUrl}/>
            <div className="description">
                <h1>{name}</h1>
            </div>
          </a>
          )}
        </div>
    </div>
    </>
  );
}