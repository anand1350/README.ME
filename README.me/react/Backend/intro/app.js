const { response } = require('express');
const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const fs = require('fs')

const app = express();

app.use(cors());

const port = 8000;



// const headers = [
//     {
//         id:1,
//         name:'Blog',
//         categories,
//     },
//     {
//         id:2,
//         name:'Technology'
//     },{
//         id:3,
//         name:'Бизнес'
//     },{
//         id:4,
    
//     }
// ]

// let nextCatId = categories.length


let categories = JSON.parse(fs.readFileSync('categoryData.json', 'utf8'));

const updateCategoriesFile = () =>{
    fs.writeFileSync('categoryData.json', JSON.stringify(categories));
}

app.get('/categories', (request, response)=>{
    response.json(categories);
});

// app.get('/headers', (request, response) =>{
//     response.status(200);
//     response.json(headers)
// })

app.get('/categories/:id', (req,res)=>{
    const { id } =req.params;
    let category = null;
    for(const row of categories){
        if( id == row.id){
            category = cat;
            break;
        }
    }
    res.json(category)
})

app.delete('/categories/:id', (req, res)=>{
    const { id } =req.params;
    categories = categories.filter((row) => row.id !== Number(id));
    updateCategoriesFile();
    res.json(id);
});


app.post('/categories', jsonParser,(req,res)=>{
    const { name, description } =req.body;
    const newCategory = {id: nextCatId++, name,description};
    categories.push(newCategory);
    updateCategoriesFile();
    res.send(newCategory)
});

app.put('/categories', jsonParser,(req,res)=>{
    const { id } =req.params
    const { name, description } =req.body;

    let updatedCat;
    categories = categories.map((row) =>{
        if(row.id === Number(id)){
            updatedCat = { id: Number(id), name};
            return updatedCat
        }
        return row
    });
    updateCategoriesFile();
    res.json(updatedCat)
});


// app.get('/generateNumbers',(req, res)=>{
//     let result = '';
//     for(let i = 0; i<10000; i++){
//         let n = '';
//         if(i<1000){
//             n +='0'
//         }
//         if(i<100){
//             n +='0'
//         }
//         if(i<10){
//             n +='0'
//         }
//         n += i;
//         result += `9911${n}\n`;
//     }
//     fs.writeFileSync('phones.txt', result)
//     res.json('Done');
// });

// app.get('/numbers', (req,res)=>{
//     const numbers =fs.readFileSync('phones.txt', 'utf-8');
//     res.json(numbers.split('\n'))
// }


let products = JSON.parse(fs.readFileSync('MOCK_DATA.json', 'utf-8'));


app.get('/products', (req, res)=>{
    let {pageSize, page, priceTo, priceFrom, q} = req.query;
    pageSize = Number(pageSize) || 10;
    page = Number(page) || 1;
    let start, end;

    start = (page - 1)*pageSize;
    end = start + pageSize;




    // for(let i = 0; i < products.length; i++)
    // {
    // priceFrom += priceTo.sort(compareNumbers)


    // if(products[i].name === 'Crush - Cream Soda')
    // {
    //     q = products[i];

    // }
    // }

    const newProducts = products.filter((product) =>{
        let matching = true;
        if(q){
            matching = product.name.toLowerCase().includes(q.toLocaleLowerCase());
        }
        if(priceFrom) return priceFrom < product.price
        return matching;
    });
    const items = newProducts.slice(start, end);
    // const items = newProductsPrice



    res.json({
        total:newProducts.length,
        totalPages: Math.ceil(products.length/pageSize),
        q,
        page,
        pageSize,
        priceFrom,
        items,

    });
});

let menuPositions = JSON.parse(fs.readFileSync('menuPositions.json', 'utf-8'));


app.get('/menu-positions', (req, res)=>{
    res.json(menuPositions);
})

app.get('/menu-positions/:id', (req,res)=>{
    const { id } =req.params;
    let position = null;
    for(const row of menuPositions){
        if( id == row.id){
            position = cat;
            break;
        }
    }
    res.json(position)
})

let nextPosId = menuPositions.length + 1;


app.post('/menu-positions', jsonParser,(req,res)=>{
    const { name, alias } =req.body;
    const newPosition = {id: nextPosId++, name, alias};
    menuPositions.push(newPosition);
    fs.writeFileSync('menuPositions.json', JSON.stringify(menuPositions));
    res.send(newPosition)
});

app.delete('/menu-positions/:id', jsonParser,(req,res)=>{
    const { id } =req.params;
    menuPositions = menuPositions.filter((row)=> row.id !== Number(id))
    fs.writeFileSync('menuPositions.json', JSON.stringify(menuPositions));
    res.send(id)
});

const menus = JSON.parse(fs.readFileSync('menus.json', 'utf-8'));

app.get('/menus', (req, res)=>{
    const {positionId} = req.query;
    if(!positionId) return
    res.statusCode(400).json('PositionId required!');
    
    const result = menus.filter((menu)=>{
        return menu.positionId === Number(positionId)
    });
    return res,json(result);
})



app.listen(port, ()=>{
    console.log('http//localhost:'+port)
});