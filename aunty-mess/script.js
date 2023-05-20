let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Plain Dosa",
        foodimg: 'images/d1.png',
        price: "RS 25",
        type: "Dosas",
        des: "One plain dosa with peanut chutney and chicken gravy."
    },
    {
        FoodName: "Karam Dosa",
        foodimg: 'images/d2.png',
        price: "RS 25",
        type: "Dosas",
        des: "Plain dosa with special chilli chutney applied on it with peanut chutney and chicken gravy."
    },
    {
        FoodName: "Masala Dosa",
        foodimg: 'images/d3.png',
        price: "RS 45",
        type: "Dosas",
        des: "Dosa with aloo stuffing inside with peanut chutney and chicken gravy on the side."
    },
    {
        FoodName: "Ghee Podi Dosa",
        foodimg: 'images/d4.png',
        price: "RS 45",
        type: "Dosas",
        des: "Dosa with ghee and podi on it, with peant chutney and chicken gravy on the side on the side."
    },
    {
        FoodName: "Egg Dosa",
        foodimg: 'images/d5.png',
        price: "RS 45",
        type: "Dosas",
        des: "Dosa with egg on it, with peant chutney and chicken gravy on the side on the side."
    },
    {
        FoodName: "Chicken Dosa",
        foodimg: 'images/d6.png',
        price: "RS 45",
        type: "Dosas",
        des: "Dosa with boneless chicken pieces on it, with peant chutney and chicken gravy on the side on the side."
    },
    {
        FoodName: "Rava Dosa",
        foodimg: 'images/d7.png',
        price: "RS 50",
        type: "Dosas",
        des: "Plain Rava Dosa with peant chutney and chicken gravy on the side on the side."
    },
    {
        FoodName: "Rava Masala Dosa",
        foodimg: 'images/d8.png',
        price: "RS 55",
        type: "Dosas",
        des: "Masala stuffed Rava dosa with peant chutney and chicken gravy on the side on the side."
    },
    {
        FoodName: "Upma Dosa",
        foodimg: 'images/d4.png',
        price: "RS 50",
        type: "Dosas",
        des: "Upma stuffed dosa with peant chutney and chicken gravy on the side on the side."
    },
    {
        FoodName: "Veg Thali",
        foodimg: 'images/r1.png',
        price: "RS 85",
        type: "Rice",
        des: "Rice, 1 roti, 4 different veg curries, curd, sweet."
    },
    {
        FoodName: "Non Veg Thali",
        foodimg: 'images/r2.png',
        price: "RS 105",
        type: "Rice",
        des: "Rice, 1 roti, 2 different non veg curries, 2 veg curries, curd, sweet."
    },
    {
        FoodName: "Chicken Biryani",
        foodimg: 'images/r3.png',
        price: "RS 130",
        type: "Rice",
        des: "Hyderabadi special biryani with raita and saalan."
    },
    {
        FoodName: "Veg Fried Rice",
        foodimg: 'images/r4.png',
        price: "RS 95",
        type: "Rice",
        des: "Fried rice with sauted fresh veggies."
    },
    {
        FoodName: "Chicken Fried Rice",
        foodimg: 'images/r5.png',
        price: "RS 100",
        type: "Rice",
        des: "Fried rice with boneless chicken pieces."
    },
    {
        FoodName: "Special Chicken Fried Rice",
        foodimg: 'images/r6.png',
        price: "RS 150",
        type: "Rice",
        des: "Fried rice with special boneless chicken pieces, special omlette and sauted fresh cashews."
    },
    {
        FoodName: "Cashew Fried Rice",
        foodimg: 'images/r7.png',
        price: "RS 140",
        type: "Rice",
        des: "Veg Fried rice with cashews."
    },
    {
        FoodName: "Omlette",
        foodimg: 'images/o1.png',
        price: "RS 30",
        type: "Special",
        des: "Omlette made with 3 eggs."
    },
    {
        FoodName: "Kalki - Aunty Mess Special",
        foodimg: 'images/o2.png',
        price: "RS 50",
        type: "Special",
        des: "Half boiled, juicy omlette made with 3 eggs."
    },
    {
        FoodName: "Chicken Pakodi",
        foodimg: 'images/o3.png',
        price: "RS 40",
        type: "Special",
        des: "Fried chicken 100 grams."
    },
    {
        FoodName: "Cashew Pakodi",
        foodimg: 'images/o4.png',
        price: "RS 45",
        type: "Special",
        des: "Fried cashews."
    },
    {
        FoodName: "Veg Parotta",
        foodimg: 'images/o5.png',
        price: "RS 35",
        type: "Special",
        des: "Set of 2 parottas with veg curry."
    },
    {
        FoodName: "Chicken Parotta",
        foodimg: 'images/o6.png',
        price: "RS 65",
        type: "Special",
        des: "Set of 2 parottas with chicken curry."
    },
    {
        FoodName: "Kottu Parotta",
        foodimg: 'images/o7.png',
        price: "RS 70",
        type: "Special",
        des: "Special kottu parotta with boneless chicken."
    },
    {
        FoodName: "Pepsi",
        foodimg: 'images/dri1.png',
        price: "RS 15",
        type: "Drinks",
        des: "200ML PEPSI."
    },
    {
        FoodName: "Coke",
        foodimg: 'images/dri2.png',
        price: "RS 15",
        type: "Drinks",
        des: "200ML COKE."
    },
    {
        FoodName: "Sprite",
        foodimg: 'images/dri3.png',
        price: "RS 15",
        type: "Drinks",
        des: "200ML SPRITE."
    },
    {
        FoodName: "Thumbs Up",
        foodimg: 'images/dri4.png',
        price: "RS 15",
        type: "Drinks",
        des: "200ML THUMBS UP."
    },
    {
        FoodName: "Limcs",
        foodimg: 'images/dri5.png',
        price: "RS 15",
        type: "Drinks",
        des: "200ML LIMCA."
    },
    {
        FoodName: "Butter Milk",
        foodimg: 'images/dri6.png',
        price: "RS 15",
        type: "Drinks",
        des: "200ML Butter Milk."
    },
    {
        FoodName: "Lassi",
        foodimg: 'images/dri7.png',
        price: "RS 15",
        type: "Drinks",
        des: "200ML LASSI."
    },



    
]

const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Dosas'){
                if(box.classList.contains('Dosas'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Rice'){
                if(box.classList.contains('Rice'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Special'){
                if(box.classList.contains('Special'))
                {
                    box.classList.remove('d-none')
                }

            }
            else if(e.target.innerHTML==='Drinks'){
                if(box.classList.contains('Drinks'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})