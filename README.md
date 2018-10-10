# telusdemo

#Add Item

Type : POST 
URL : localhost:5000/item

Request (type JSON) :
{"name":"Samsung","desc":"Is that a phone"}

Response :
{
    "desc": "Is that a phone",
    "_id": "5bbdff0b3d91e93a6c459e13",
    "name": "Samsung",
    "__v": 0
}

#GET items 

Type : GET 
URL : localhost:5000/items


Response :
[
    {
        "desc": "A smart phone",
        "_id": "5bbdfed63d91e93a6c459e11",
        "name": "Iphone",
        "__v": 0
    },
    {
        "desc": "Anpther phone",
        "_id": "5bbdff023d91e93a6c459e12",
        "name": "Nokia",
        "__v": 0
    },
    {
        "desc": "Is that a phone",
        "_id": "5bbdff0b3d91e93a6c459e13",
        "name": "Samsung",
        "__v": 0
    }
]

#Delete 

Type: delete

URL : localhost:5000/item/:id

#Edit

Type: patch



URL : localhost:5000/item/:id

Req: 
[{"propName":"name","value":"edited name value"},{"propName":"desc","value":"edited desvalue"}]

res :
{
    "message": "Item updated"
}