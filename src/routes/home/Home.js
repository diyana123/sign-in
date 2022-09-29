import Directory from "../../Components/directory/Directory";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://i.pinimg.com/originals/1c/53/15/1c53158fc1814d1bcf892bac98004af0.jpg",
    },

    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0133907290008_001_b?$medium$&qlt=80&fit=constrain",
    },

    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://media.istockphoto.com/photos/woman-wearing-comfortable-stylish-sneakers-outdoors-closeup-picture-id1360178477?b=1&k=20&m=1360178477&s=170667a&w=0&h=TO8ic4-0PiFeq8mY2-lMkDSDiLF3edC7BjkR6KGjGfA=",
    },

    {
      id: 4,
      title: "Women",
      imageUrl:
        "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/3/Seller/18142780/Images/18142780_0_ladies-casual-wear.jpg",
    },

    {
      id: 5,
      title: "Men",
      imageUrl:
        "https://i.pinimg.com/736x/79/b4/79/79b479f2fed5feba1e14d1716585e623.jpg",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
