const foods = [
  {
    name: "ข้าวผัดกุ้ง",
    category: "อาหารจานด่วน",
    image: "https://img.wongnai.com/p/1920x0/2018/02/14/021350fce478468b98c775abd057a3c0.jpg"
  },
  {
    name: "ส้มตำ",
    category: "อาหารไทย",
    image: "https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGolu8o6GGG8vX35u7WHz4BYbj0SO.jpg"
  },
  {
    name: "บะหมี่เกี๊ยว",
    category: "อาหารจีน",
    image: "https://s359.kapook.com/pagebuilder/29acb42c-42b6-47cf-bf19-5c57b23ca7ed.jpg"
  },
  {
    name: "ข้าวมันไก่",
    category: "อาหารจานด่วน",
    image: "https://thainipponfoods.com/wp-content/uploads/2022/05/rice-steamed-with-chicken-breast-2-1024x609.jpg"
  }
];

const drinks = [
  {
    name: "ชาไทยเย็น",
    category: "เครื่องดื่ม",
    image: "https://p.lnwfile.com/_webp_max_images/2048/2048/ct/64/po.webp"
  },
  {
    name: "โกโก้เย็น",
    category: "เครื่องดื่ม",
    image: "https://api2.krua.co/wp-content/uploads/2020/07/RD0198_Gallery_-01-scaled.jpg"
  },
  {
    name: "กาแฟลาเต้",
    category: "กาแฟ",
    image: "https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/nescafe-latte-two-tone-540x400.jpg?itok=1xf-DfDf"
  },
  {
    name: "สมูทตี้ผลไม้",
    category: "เครื่องดื่มสุขภาพ",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80"
  }
];

function randomFood() {
  const randomIndex = Math.floor(Math.random() * foods.length);
  const food = foods[randomIndex];
  document.getElementById("food-name").textContent = food.name;
  document.getElementById("food-img").src = food.image;
  document.getElementById("food-img").alt = food.name;
  document.getElementById("food-category").textContent = food.category;
}

function randomDrink() {
  const randomIndex = Math.floor(Math.random() * drinks.length);
  const drink = drinks[randomIndex];
  document.getElementById("drink-name").textContent = drink.name;
  document.getElementById("drink-img").src = drink.image;
  document.getElementById("drink-img").alt = drink.name;
  document.getElementById("drink-category").textContent = drink.category;
}
